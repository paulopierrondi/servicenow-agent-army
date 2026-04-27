# Anthropic Cookbook — PR draft

> Target repo: https://github.com/anthropics/anthropic-cookbook (or successor `anthropic-skills` if it exists at PR time). Audience: Anthropic DevRel reviewers, Claude Agent SDK users.

## Suggested code path

`agent_sdk/servicenow_agent_army/`

Or if there is a `mcp/` directory with examples: `mcp/servicenow_agent_army/`. Match the repo's existing convention; do not create a new top-level folder.

## PR title

Add ServiceNow Agent Army example: MCP guardrail chain (dry-run + approval + audit + rollback) with Claude Agent SDK

## PR description (paste into the GitHub PR body)

This PR adds a fully runnable example of integrating the Claude Agent SDK with two MCP servers that ship a guarded write contract for a regulated enterprise system (ServiceNow).

### What it demonstrates

- A read-only MCP server (no write code paths in the binary) for schema introspection and metadata browsing.
- A write-side MCP server with dry-run + signed JWT approval token + append-only JSONL audit + per-record rollback. Pinned in ADR-002 of the source repo.
- A single skill (`servicenow-agent-factory`) that works in both Claude Code (`.claude/skills/`) and Codex CLI (`.agents/skills/`) — useful pattern for vendor-neutral skill authoring.
- An advisor agent (`Pierrondi EA`) that returns a structured four-block contract (outcome, value, deliverables, risks) before any technical design is drawn. The contract enforces editorial discipline that pairs well with the SDK's `canUseTool` and hooks.

### Why this fits the cookbook

Most cookbook MCP examples are toy or single-tool. This one is a full chain that survives a CAB / change-advisory-board review in a regulated industry. It shows:

1. Two-binary split for blast-radius isolation (an MCP author pattern that generalizes beyond ServiceNow).
2. JWT approval token tied to a `dry_run_hash` so model-issued writes cannot be replayed or rebound to a different patch.
3. Audit envelope written before the response is returned to the model, so a hallucinated success cannot escape the audit.
4. Use of MCP Tools vs Resources vs Prompts deliberately — Tools for the chain, Resources for static schema, Prompts for builder UX.

### Files referenced

The full reference repo is MIT-licensed at `https://github.com/paulopierrondi/servicenow-agent-army`. Key files for reviewers:

- [`docs/adr/ADR-002-skill-tool-contract.md`](https://github.com/paulopierrondi/servicenow-agent-army/blob/main/docs/adr/ADR-002-skill-tool-contract.md) — contract pinning.
- [`packages/mcp-readonly/src/index.ts`](https://github.com/paulopierrondi/servicenow-agent-army/tree/main/packages/mcp-readonly) — read-only binary.
- [`packages/mcp-write/src/index.ts`](https://github.com/paulopierrondi/servicenow-agent-army/tree/main/packages/mcp-write) — write binary with the chain.
- [`packages/skill-contract/`](https://github.com/paulopierrondi/servicenow-agent-army/tree/main/packages/skill-contract) — Zod schemas for the tool surface.
- [`docs/mcp-landscape.md`](https://github.com/paulopierrondi/servicenow-agent-army/blob/main/docs/mcp-landscape.md) — gap analysis vs nine other community ServiceNow MCPs.
- [`.claude/skills/servicenow-agent-factory/SKILL.md`](https://github.com/paulopierrondi/servicenow-agent-army/blob/main/.claude/skills/servicenow-agent-factory) — Claude-side skill.
- [`agents/pierrondi-enterprise-architect.md`](https://github.com/paulopierrondi/servicenow-agent-army/blob/main/agents/pierrondi-enterprise-architect.md) — value-first advisor card.

### Cookbook entry shape (proposed)

```
servicenow_agent_army/
  README.md                 # what it shows, how to run
  agent.ts                  # ClaudeAgentOptions wiring with both MCP servers
  hooks.ts                  # PreToolUse hook that blocks writes without approval token
  fixtures/
    sample-incident.json    # for offline dry-run demo
  README.md
```

### Run instructions (for the cookbook README)

```bash
cd anthropic-cookbook/agent_sdk/servicenow_agent_army
pnpm install
SERVICENOW_INSTANCE_URL=https://devXXXXX.service-now.com \
SERVICENOW_USERNAME=admin \
SERVICENOW_PASSWORD=*** \
APPROVAL_HMAC_SECRET=local-dev-secret \
pnpm tsx agent.ts
```

The example uses a free ServiceNow PDI; instructions in the cookbook README would point to `developer.servicenow.com` for sign-up.

### Why I think Anthropic readers will care

- Claude Agent SDK is the integration target.
- The PreToolUse hook pattern in `hooks.ts` is a useful template for any high-blast-radius MCP integration, not just ServiceNow.
- MIT license; no copyleft concerns.
- The author is a ServiceNow TAE (Technical Account Executive) in FSI Brazil with prior background in enterprise architecture; the patterns are field-tested against regulated customers.

### Open to feedback

If reviewers prefer:

- Restructuring the example to be self-contained (no dependency on the upstream repo).
- Stripping the Codex parallel skill (`.agents/skills/`) to keep the example Claude-only.
- Replacing the live PDI dependency with a fully mocked ServiceNow API for offline runs.

Happy to adjust based on reviewer comments.

### Disclosure

The reference repo is built and published in personal capacity by the author (Paulo Pierrondi). Not affiliated with or endorsed by ServiceNow, OpenAI, or Anthropic. Brand and product names belong to their respective owners.

## Self-check before opening the PR

- [ ] Open one issue first ("RFC: ServiceNow Agent Army example for cookbook") to gauge interest before sinking time into the PR. Anthropic merges examples sparingly.
- [ ] Read the cookbook's CONTRIBUTING.md and match its style exactly.
- [ ] Confirm the example runs end-to-end on a free PDI without any private dependency.
- [ ] License header on every file matches the cookbook convention.
- [ ] No banned words.
- [ ] No client names, no real sys_ids, no real instance URLs in fixtures.
