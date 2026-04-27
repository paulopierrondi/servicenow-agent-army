# Hashnode series — Part 3 of 3

> Tone: technical, MCP server implementation deep-dive. Audience: ServiceNow + AI builders, security/CAB reviewers, MCP authors. Length: 2200-2600 words. Cites ADR-002.

## Title

Building MCP servers with real guardrails (dry-run + approval + audit + rollback)

## Subtitle

Why nine community ServiceNow MCPs miss the chain, and how to ship one that does not.

## Cover

`docs/assets/og-default.png` cropped to 1600x840.

## Tags

`MCP` `ServiceNow` `Security` `Architecture`

## Body

The Model Context Protocol space is wide and shallow on the ServiceNow side. I inventoried nine servers in April 2026 — community MITs and the native Now Assist MCP Server (Zurich Patch 4) — and wrote the gap analysis up in [`docs/mcp-landscape.md`](https://github.com/paulopierrondi/servicenow-agent-army/blob/main/docs/mcp-landscape.md). One sentence summary: the field has table coverage and modern auth, but no server ships dry-run + signed approval token + append-only audit + per-record rollback as a chain end-to-end.

That chain is the whole reason a regulated FSI customer can let an AI agent touch ServiceNow at all. Without it, the answer from the risk team is no, and it is the right answer.

This post walks the chain step by step, explains why each link is non-negotiable, and traces the design decisions captured in [`docs/adr/ADR-002-skill-tool-contract.md`](https://github.com/paulopierrondi/servicenow-agent-army/blob/main/docs/adr/ADR-002-skill-tool-contract.md). At the end you have a contract you can apply to any MCP server that touches a regulated system.

### Why MCP for ServiceNow at all

A short answer first. The Model Context Protocol gives you a stable interface between an LLM client (Claude Code, Codex CLI, Cursor, Windsurf, ChatGPT Desktop) and a tool surface. For ServiceNow, that tool surface is the Table API plus a handful of metadata tables (`sn_aia_*`, `sys_gen_ai_*`).

You could implement this surface as a hand-rolled tool inside each LLM client. But that means implementing it three times (Claude tool, Codex tool, ChatGPT app). MCP gives you a single binary that all three clients can talk to. It also gives you a stable lifecycle (initialize, list_tools, call_tool, shutdown) that maps cleanly to logging, auditing, and security review.

The native Now Assist MCP Server in Zurich Patch 4 is one option, but it requires a Now Assist Pro Plus / Enterprise Plus SKU and burns one assist credit per call. Useful for some scenarios, expensive for read-heavy discovery and metadata work. Community MCP servers fill the open-tier gap, but as I argued above, they all skip the guardrail chain.

### The chain, in one diagram

```
[ Model proposes write ]
        |
        v
[ Tool: sn_table_patch_dryrun ]
   - compute diff (before / after)
   - return predicted change + dry_run_hash
   - DO NOT write
        |
        v
[ Out-of-band human approval ]
   - human reads the diff
   - human signs an approval_token (JWT)
   - approval_token carries: dry_run_hash, signer, ttl
        |
        v
[ Tool: sn_table_patch ]
   - validate approval_token signature
   - validate dry_run_hash matches current state
   - commit the change
   - return rollback_id
        |
        v
[ Tool: commit_audit_event ]
   - append JSONL record:
     ts, actor, tool, table, sys_id, dry_run_hash,
     approval_token (jwt body, not signature), reason,
     status, rollback_id
        |
        v
[ Optional: rollback_last_change ]
   - look up rollback_id within TTL window
   - apply reverse patch
   - append rollback audit event
```

Five tools. Two binaries. Zero shortcuts.

### Why split into two binaries

The repo ships `packages/mcp-readonly` and `packages/mcp-write` as separate processes with separate `package.json` files. The read-only one cannot mutate even if misconfigured — it has zero write code paths in the binary, no `sn_table_patch` tool registered, no PATCH HTTP method exercised against the Table API. The write one carries the chain above.

The reason to split is blast radius. A discovery server that ends up on a presales engineer's laptop, exposed to a customer demo, must not be able to write to a customer instance even by accident. Splitting the binaries makes that impossible by construction, not by configuration.

The other reason is permission alignment. A read-only ServiceNow service account is straightforward to provision. A write-bound service account is a CAB conversation. Two separate OAuth clients, two separate trust boundaries.

A third reason is host limits. Cursor caps tools per workspace at ~40. Two narrow servers compose better than one fat one. Most users only need read-only most of the time anyway.

### Why dry-run is the entry point, not an option

The first instinct of an MCP author is to make `sn_table_patch` the primary tool and add a `dry_run: true` flag as an option. This is wrong, and it is wrong in a specific way that matters for security.

If `dry_run` is a flag, the model can omit it. The model can hallucinate it true and then call the same tool with it false. The model cannot, by design, be trusted to flip a security-critical flag. Anything you put behind a flag the model controls is not a guardrail — it is a suggestion.

The fix is to make `sn_table_patch_dryrun` a separate tool. It returns a `dry_run_hash` and a structured diff. It does not write. The only way to commit is to call `sn_table_patch` with the `approval_token` that was signed against that hash. The model cannot mint the approval token; only a human can. The chain is enforced by tool surface, not by flag discipline.

This is the same reason hardware safe-mode switches are physical, not configurable. You design the guardrail into the topology, not into the policy.

### What goes in the dry-run hash

The `dry_run_hash` is a SHA-256 of:

- The fully-qualified target: `instance_url + table + sys_id`
- The proposed patch JSON, canonicalized (sorted keys, no whitespace)
- The current state of the record, fetched at dry-run time
- The dry-run timestamp

The current-state inclusion matters. If someone else writes to the same record between the dry-run and the commit, the current-state hash drifts, the approval token's stored hash no longer matches, and the commit refuses. The chain rejects stale approvals automatically.

### The approval token

The approval token is a JWT with the following claim shape (full schema in ADR-002):

```json
{
  "iss": "agent-army-cli",
  "sub": "paulopierrondi",
  "aud": "mcp-write",
  "iat": 1745692328,
  "exp": 1745695928,
  "jti": "uuid-v7",
  "dry_run_hash": "7f3a9b21...",
  "instance": "https://devXXXXX.service-now.com",
  "table": "incident",
  "sys_id": "1a7b...",
  "reason": "council recommended after risk review"
}
```

The TTL is intentionally short (15-60 minutes). The signature is HS256 against a key that lives on the host that does the signing — not on the MCP server, not in the model context. The MCP write binary verifies the signature; it does not generate.

Why JWT and not a server-side ephemeral token? A few reasons:

- Stateless verification. The MCP server does not need a database. It only needs the public key (or HMAC secret) for verification.
- Auditable claims. The `jti` and `dry_run_hash` are visible in every audit event; you can reconstruct what was approved without joining tables.
- Replay-resistant. The `dry_run_hash` ties the token to a specific intent; you cannot reuse it for a different patch.

Trade-off: revocation requires a deny-list. For a 15-minute TTL this is acceptable. For longer-lived tokens it is not. Keep the TTL short.

### The audit envelope

Every successful commit appends one line to a JSONL audit log. The shape, locked in ADR-002:

```json
{
  "ts": "2026-04-26T14:32:08-03:00",
  "actor": "paulopierrondi",
  "tool": "sn_table_patch",
  "instance": "https://devXXXXX.service-now.com",
  "table": "incident",
  "sys_id": "1a7b...",
  "dry_run_hash": "7f3a-9b21-...",
  "approval_token_jti": "uuid-v7",
  "approval_signer": "paulopierrondi",
  "reason": "council recommended after risk review",
  "status": "committed",
  "rollback_id": "7f3a-9b21-..."
}
```

The audit log is append-only on the host filesystem and mirrored as an attachment to a row in a custom audit table on the ServiceNow instance. Two reasons:

1. The host JSONL gives you a tamper-evident record outside the platform. If someone deletes the audit table row, the host log still has it.
2. The platform attachment gives ServiceNow operators the audit inside the system they already monitor. CAB reviewers can pull it without filesystem access.

Both copies carry the same data. Neither is the canonical source — they cross-validate.

For BACEN-style 24-hour retrieval requirements (real for FSI Brazil), the JSONL plus attachment shape passes the test out of the box. A regulator's request "show me what your AI agent did to incident X yesterday at 14:32" is answered with a single grep.

### Rollback

The dry-run computes the current state. The commit stores that current state as the before-image. The rollback re-applies the before-image as a reverse patch.

```
sn_rollback(rollback_id, reason) ->
  - look up rollback_id within TTL (default 24h)
  - read stored before-image
  - apply reverse patch
  - append rollback audit event with new rollback_id (rollback of rollback)
  - return success or conflict
```

Rollback is per-record, not transactional. Multi-record rollback requires saved batch IDs, which is on the roadmap but not in the M3 cut. For 90% of MCP-issued changes (single-record patches), per-record rollback is sufficient.

A subtle point: the rollback is an audited write itself. It generates its own rollback_id. You can roll back the rollback. The audit log makes the chain visible.

### What MCP primitives this maps to

The MCP spec (current stable: 2025-11-25) gives you Tools, Resources, and Prompts. The chain above uses:

- **Tools** for `sn_table_patch_dryrun`, `sn_table_patch`, `sn_rollback`, `commit_audit_event`. Side-effects are explicit, args are typed (Zod schemas in `packages/skill-contract/`).
- **Resources** for static schema docs and policy references that the host can pre-load (`schema://incident`, `policy://approval-rules`). Read-only context, no actions.
- **Prompts** for user-triggered templates: `/snow-discover-active-flows`, `/snow-explain-table`. Useful for builder UX.

Both binaries ship `stdio` and Streamable HTTP. SSE legacy is deprecated in spec 2025-03-26; new servers should not implement it. OAuth 2.1 + PKCE is the auth baseline for the HTTP path.

### Common mistakes I see in other MCP authors

Five patterns I keep seeing in the community ServiceNow MCPs:

1. **Single tool with `dry_run: true` flag.** Model controls the flag; not a guardrail.
2. **Audit logged after the response is returned.** If the model hallucinates a successful response, the audit never lands. Audit must be on the host side, before the response.
3. **Approval token stored in the model context.** The model can read its own context. Tokens go to the host, not the model.
4. **Rollback computed lazily.** If the rollback before-image is fetched at rollback time, not at commit time, it is whatever the record looks like *now*. Useless.
5. **One binary with both read and write tools.** A misconfiguration disables the read-only safety claim. Two binaries close the loophole.

### Test the chain like you mean it

The repo ships ATF tests for the read-only paths and Vitest tests for the MCP write contract. The high-value tests:

- Dry-run hash drift: write to the record between dry-run and commit, verify the commit refuses with `dry_run_hash_mismatch`.
- Stale approval token: wait past TTL, verify the commit refuses with `approval_token_expired`.
- Replay: try to use the same approval token for a different patch on the same record, verify refuse with `dry_run_hash_mismatch`.
- Audit-before-response: drop the audit write call (mock it to throw), verify the response is `audit_write_failed` and the commit was rolled back.
- Rollback chain: commit, rollback, commit again with a new dry-run, rollback the rollback. Verify three audit events with three distinct rollback_ids.

If any of these fail, the chain is theater.

### What this gives the CAB

A CAB reviewer can ask:

- "What writes did the AI agent issue last week?" — JSONL grep.
- "Who approved each write?" — `approval_signer` field.
- "What was the predicted vs actual change?" — `dry_run_hash` plus the audit row plus the platform attachment.
- "Can we roll back what happened on Tuesday at 14:32?" — `rollback_id` callable for 24h.
- "What happens if the model gets jailbroken?" — the read-only binary cannot mutate; the write binary refuses without a human-signed token.

Each of these has a 30-second answer. That is the difference between a CAB approving an AI agent and a CAB stopping the project at design review.

### Try it

```bash
git clone https://github.com/paulopierrondi/servicenow-agent-army.git
cd servicenow-agent-army
pnpm install
pnpm validate
```

The two MCP packages live under `packages/mcp-readonly` and `packages/mcp-write`. The contract types and Zod schemas are in `packages/skill-contract`. The ADR is `docs/adr/ADR-002-skill-tool-contract.md`. Open issues and PRs welcome.

Repo: [github.com/paulopierrondi/servicenow-agent-army](https://github.com/paulopierrondi/servicenow-agent-army)

### Series recap

- Part 1: Why most ServiceNow AI advice fails — and what to do about it. (Thesis: outcome before output.)
- Part 2: The 4-block contract. (Three worked examples.)
- Part 3: This post. (How to ship the chain so production writes survive a CAB review.)

The pattern across the three: editorial discipline first, technical rigor second. Both are needed. The four-block contract frames the work. The MCP guardrails make sure the work does not blow up.

### Disclosure

I work at ServiceNow as a Technical Account Executive in FSI Brazil. This kit is built and published in personal capacity. Not affiliated with or endorsed by ServiceNow, OpenAI, or Anthropic. Brand and product names belong to their respective owners.

## Posting checklist

- [ ] Banned-words sweep.
- [ ] Code blocks tested.
- [ ] ADR-002 link verified to point to current `main` HEAD.
- [ ] Tags set (max 4).
- [ ] After publish, drop a single LinkedIn share with the title + URL. No body re-paste.
- [ ] Update `docs/launch/README.md` cronograma row D+5 with the URL.
- [ ] Cross-link from Part 2 footer (edit Part 2 after publish).
