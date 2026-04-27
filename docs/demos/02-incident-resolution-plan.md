# Demo 2: Incident Resolution Plan (guarded write flow)

> Target length: 5:00. Recorded with Loom 1080p, no fancy editing.
> Domain: ITSM. Apply path: mcp-write dry-run -> approval token -> sub-prod apply. Differential: HMAC-signed approval token, one-time use, rollback proven on camera.

## Tools Paulo needs open before recording

- [ ] Tab 1: terminal in `/Users/paulopierrondi/servicenow-agent-army` (zsh, 16pt font)
- [ ] Tab 2: VS Code at the repo root, sidebar showing `packages/mcp-write/`, `workflows/incident-resolution-plan.json`, `agents/itsm-specialist.md`
- [ ] Tab 3: ServiceNow PDI logged in at `https://devXXXXX.service-now.com`, opened on a P2 incident in `New` state with a realistic short description
- [ ] Tab 4: Claude Code session in the repo, skills loaded, mcp-write configured in `.mcp.json`
- [ ] Tab 5: terminal split with `tail -f .audit/audit.jsonl` running in the background
- [ ] Loom recording, mic checked, face cam framed
- [ ] Slack, mail, calendar quit. Notifications off.

## Pre-record checklist

- [ ] `pnpm --filter @servicenow-agent-army/mcp-write build` is green
- [ ] `.env` has `SERVICENOW_INSTANCE_URL` (sub-prod), `SERVICENOW_TOKEN`, `MCP_WRITE_SIGNING_KEY` (32 chars), `MCP_AUDIT_DIR=.audit`
- [ ] `MCP_WRITE_AUTO_APPROVE` is unset (we want to show the human approval moment)
- [ ] Sub-prod confirmed via prod-guard: hostname contains `dev` or `uat`
- [ ] One incident pre-created in PDI in `New` state - realistic short description, real CI, P2 priority, no VIP caller. Save the sys_id.
- [ ] Run the full dry-run -> approval -> apply -> rollback flow once off-camera. Time it. If it goes over 90 seconds, prune the prompt for the live take.
- [ ] Audit log file exists and is empty: `: > .audit/audit.jsonl`
- [ ] Snapshot rollback tested at least once - the rollback path is the climax of the demo, do not fly it blind

## Outline (timestamps)

| Time | Beat | Visual |
| --- | --- | --- |
| 0:00-0:20 | Hook: 7-min L1 triage, p95 SLA at risk | Face cam |
| 0:20-1:00 | Show the P2 incident as it lands | Tab 3 (PDI) |
| 1:00-2:00 | Council drafts the resolution plan | Tab 4 (Claude Code) |
| 2:00-3:00 | Dry-run produces the HMAC token | Tab 1 + Tab 2 |
| 3:00-4:00 | Human approves, write applies, audit logs | Tab 5 + Tab 3 |
| 4:00-4:30 | Rollback in one command | Tab 1 + Tab 3 |
| 4:30-5:00 | Now Assist for ITSM hook + CTA | Face cam |

## Beat-by-beat script

### 0:00-0:20 - Hook

[VISUAL: face cam]

"In a typical ITSM operation, a P2 incident lands during business hours and the L1 agent burns 7 minutes classifying, finding the right assignment group, and writing the first work note. P95 SLA gets close to breach. Most teams answer with a Now Assist for ITSM rollout - good idea, but the rollout itself is the gap. Here is a council that drafts the agent, the workflow with seven steps and three approval gates, runs the change as a dry-run, gets a signed approval token, applies in sub-prod, and rolls back if needed. Five minutes start to finish. Watch the approval flow - that is the differential."

[CUE: cut to Tab 3]

### 0:20-1:00 - The incident

[VISUAL: Tab 3 - ServiceNow PDI on `incident.do?sys_id=<your-incident>`]

"P2 incident, freshly opened. Short description: `Payment gateway latency above 800ms for retail customers`. Caller is a real user, not VIP. CI is `cmdb_ci_app_server.payments-gateway-prod`. Assignment group is `Service Desk` - the wrong place for a payment-gateway latency event. This is the moment where 7 minutes of human triage happen."

[CUE: highlight the assignment group field, then the work notes empty state]

"No work notes yet. No suggested resolution. No similar-incident link. The council fills this in."

[CUE: cut to Tab 4]

### 1:00-2:00 - Council deliberates

[VISUAL: Tab 4 - Claude Code session]

[TYPE EXACTLY:]

```
Use the servicenow-agent-factory skill. Build an Incident Resolution Plan workflow for a P2 incident on a payments gateway CI. Inputs: incident sys_id <paste>, caller, CI, priority, assignment group. Council: Business Analyst, ITSM Specialist, Workflow Composer, Now Assist Coach, Guardrails Reviewer. Output: workflow JSON with seven steps and three approval gates, suggested assignment group change, and a draft work note. Do not write to ServiceNow yet - dry-run only.
```

[CUE: while it streams, narrate, naming each agent as their voice appears]

"Business Analyst summarizes the incident and the missing data - description has the symptom but not the upstream service, no related-CI link to the payments gateway dependency map. The summary names the gap explicitly so the next agent does not paper over it."

"ITSM Specialist pulls the resolution-suggestion playbook from `docs/best-practices/itsm.md` - resolve code obrigatorio, classification accuracy first, assignment rule with ML predictor as the right move - and the Now Assist for ITSM mapping from `docs/now-assist-playbook.md`. This is canonical case 1: volume-high incident triage with a mature KB."

"Workflow Composer drafts the seven steps from `workflows/incident-resolution-plan.json`: summarize incident and missing data, check known issue patterns and related incidents, draft diagnostic steps, recommend assignment group or escalation path, flag VIP and security and outage indicators, ask human approval before outbound communication, produce work note draft and resolution plan."

"Now Assist Coach maps the live surfaces: Resolution Suggestion fires on the description, Incident Summarization runs at hand-off, Generative Q&A on KB sits in Agent Workspace. Coach also flags the family-release caveat - Zurich-plus, verify on your instance."

"Guardrails Reviewer locks the three approval points from the canonical workflow: before changing assignment group (the recommended write here), before any customer-visible communication, before closure. Anti-pattern callout: the current state has Service Desk as catch-all, which is anti-pattern 1 from `docs/best-practices/itsm.md`. The recommendation is to route to Payments L2."

[OUTPUT EXPECTED: streaming workflow JSON matching `workflows/incident-resolution-plan.json` structure, plus a recommended `assignment_group` value and a `work_notes` draft]

### 2:00-3:00 - Dry-run produces the HMAC token

[VISUAL: Tab 1 - terminal]

"Now the guarded write flow. The council produced a recommended change. Before any write, we go through `mcp-write` dry-run."

[TYPE EXACTLY:]

```bash
node packages/mcp-write/dist/cli.js dryrun \
  --table incident \
  --sys_id <paste-the-sys-id> \
  --patch '{"assignment_group":"<sys_id-of-Payments-L2>","work_notes":"<paste-draft>"}' \
  --ttl 15
```

[NOTE: if the CLI wrapper does not exist, run the equivalent MCP tool call from Claude Code: `sn_table_patch_dryrun` with the same arguments. Show the JSON response.]

[OUTPUT EXPECTED:]

```json
{
  "ok": true,
  "patch_id": "ptch_01HW...",
  "before_snapshot_id": "snap_01HW...",
  "diff": {
    "assignment_group": ["<old>", "<new>"],
    "work_notes": ["", "<draft>"]
  },
  "approval_token": "eyJhbGciOiJIUzI1NiJ9.eyJwYXRjaF9pZCI6...",
  "expires_at": "2026-04-26T17:42:18Z"
}
```

[VISUAL: Tab 2 - VS Code, open `packages/mcp-write/README.md`]

[POINT TO: the security model section]

"Approval token is HMAC-SHA256 over the patch payload. Default TTL 15 minutes. One-time use. The signing key lives in env, rotated quarterly per ADR-002. Prod-guard already blocked this if my hostname did not contain `dev`, `uat`, `test`, or `sandbox`."

### 3:00-4:00 - Human approval, apply, audit

[VISUAL: Tab 1 - terminal]

"Now I act as the human approver. In a real flow, this is a Slack approval, a ServiceNow change task, or an email. Here, I copy the token and apply."

[TYPE EXACTLY:]

```bash
node packages/mcp-write/dist/cli.js apply \
  --approval-token "<paste-token>"
```

[OUTPUT EXPECTED:]

```json
{
  "ok": true,
  "audit_id": "aud_01HW...",
  "applied_at": "2026-04-26T17:30:42Z",
  "linked_snapshot": "snap_01HW..."
}
```

[CUE: cut to Tab 5 - the `tail -f .audit/audit.jsonl` already running]

[OUTPUT EXPECTED in Tab 5:]

```
{"audit_id":"aud_01HW...","tool":"sn_table_patch","table":"incident","sys_id":"...","patch_id":"ptch_01HW...","before_snapshot_id":"snap_01HW...","applied_at":"2026-04-26T17:30:42Z","instance":"https://dev12345.service-now.com"}
```

[CUE: cut to Tab 3 - reload the incident in PDI]

[VISUAL: Tab 3 - the incident now shows]
- Assignment group: Payments L2
- Work notes contains the draft

"Real change in sub-prod. Auditable. Token consumed - if I try to replay it, the server returns `approval_required`."

[CUE: back to Tab 1, demonstrate the replay block]

[TYPE EXACTLY:]

```bash
node packages/mcp-write/dist/cli.js apply --approval-token "<same-token>"
```

[OUTPUT EXPECTED:]

```json
{ "ok": false, "error": { "code": "approval_required", "message": "token consumed" } }
```

### 4:00-4:30 - Rollback

[VISUAL: Tab 1]

"Suppose the assignment group was wrong. Rollback by audit_id."

[TYPE EXACTLY:]

```bash
node packages/mcp-write/dist/cli.js rollback \
  --audit-id <paste-audit-id>
```

[OUTPUT EXPECTED:]

```json
{ "ok": true, "rolled_back": true, "restored_from_snapshot": "snap_01HW..." }
```

[CUE: cut to Tab 3 - reload the incident]

[VISUAL: Tab 3 - assignment group back to Service Desk, work notes empty]

"Snapshot restored. Note: rollback is per-record - it does not cascade through Business Rules. ADR-002 section 5 calls that out. For destructive changes you still want a real change record."

### 4:30-5:00 - Now Assist for ITSM hook + CTA

[VISUAL: face cam, then quick cut to Tab 3 showing Now Assist for ITSM panel on the incident]

"The council also drafted the Now Assist for ITSM hook - resolution suggestion plus incident summarization. That is canonical case 1 in `docs/now-assist-playbook.md`. Now Assist for ITSM is Zurich-plus family - verify on your instance. The point is: even with Now Assist for ITSM in place, the council pattern is what gets the agent and workflow drafted, dry-runned, approved, applied, and rollback-tested. ROI: a normal ServiceNow workflow design + ATF + change request cycle is two to four weeks. This was five minutes."

[VISUAL: face cam]

"Repo: github.com/paulopierrondi/servicenow-agent-army. Demo 3 shows source-driven deploy via Fluent SDK 4.6 for a catalog item with eight tasks and three approvals."

[CUT.]

## Pitfalls during recording

- [ ] Approval token TTL is 15 minutes. If you fluff a take and pause for 16 minutes between dry-run and apply, the token expires and you have to redo the dry-run. Either re-run dry-run inline or bump TTL to 60.
- [ ] If `MCP_WRITE_AUTO_APPROVE=true` is set in your shell, the human approval moment disappears. Verify `env | grep MCP_WRITE` before recording.
- [ ] If prod-guard fires, the demo is dead - check `SERVICENOW_INSTANCE_URL` once more. Hostname must contain `dev`, `uat`, `test`, or `sandbox`.
- [ ] If the audit log shows a previous run, clear it before recording: `: > .audit/audit.jsonl`. The viewer should see the audit line appear in real time.
- [ ] Rollback depends on the in-process snapshot store. If you restart the mcp-write process between apply and rollback, the snapshot is gone. Run apply and rollback in the same server process.
- [ ] Never record against prod. The demo claim is sub-prod only. If your only PDI is hard to identify, rename the hostname in `.env` for the duration of the recording.

## B-roll suggestions

- Close-up of the JWT-style approval token rendering in the terminal
- Tail of the audit log scrolling as the apply call runs
- VS Code split view: README.md security model section side by side with the token JSON
- The PDI incident before vs after, captured at 1080p with a wipe transition
- Quick still of the rollback succeeding - PDI shows the original assignment group restored

## Checklist after recording

- [ ] Watch the take, time-check at 5:00
- [ ] Replace any client name with "FSI Brazil tier-1 bank"
- [ ] Verify no signing key, token, or PDI URL with credentials visible
- [ ] Add captions, hand-edit Now Assist product names
- [ ] Upload to Loom + Drive
- [ ] Embed in `docs/demos/README.md` row 2
- [ ] Update `README.md` hero block with the link

## Open verification flags

- `Now Assist for ITSM` resolution suggestion is family-dependent. Script says "Zurich-plus family - verify on your instance."
- The `mcp-write` CLI binary is illustrative. The README documents the tools, not a CLI. If you ship `node packages/mcp-write/dist/cli.js` as a real CLI, keep this script. If not, replace with an MCP tool invocation from Claude Code: `mcp__sn-write__sn_table_patch_dryrun`, `mcp__sn-write__sn_table_patch`, `mcp__sn-write__rollback_last_change`. Both flows show the same audit and rollback story.
- Approval token format is HMAC-SHA256 over a base64url JSON payload, not a JWT. The script calls it "JWT-style" in B-roll only. Do not say "JWT" on camera.

## Anti-patterns the council references (cited from docs/best-practices/itsm.md)

The ITSM doc lists eight Incident Management anti-patterns. The council picks the relevant ones for a P2 payments incident:

1. Assignment group "Service Desk" that receives everything and re-escalates manually - SLA killer
2. Catalog request being filed as incident because the team will not learn Catalog
3. Resolve code "Other - see notes" representing more than 20 percent of tickets - kills KB and ML predictor
4. Now Assist for ITSM activated without KB hygiene - stale article suggestions kill adoption
5. Business Rule on Incident with `current.update()` inside another BR - infinite loop, peak performance impact
6. Major Incident created manually without trigger by priority or severity - escalation forgotten, contractual breach
7. Customer-facing incident comm via custom email script - non-customer-update, breaks Family upgrade
8. SLA paused without clear audit trail - internal audit catches "ticket parked 3 days, no reason"

The council quotes anti-pattern 1 directly: the incoming P2 was assigned to Service Desk; the recommended change is `Payments L2`. That is not a hot take - it is anti-pattern 1 from the doc.

## The approval token, explained on camera

If a viewer asks "why HMAC instead of an OAuth scope," answer in two beats:

- HMAC binds the approval to the exact patch payload. An OAuth scope is broader - it says "this user can write to incident table." The HMAC says "this specific patch on this specific record at this specific time, signed by the dry-run server, valid 15 minutes, single use."
- The signing key is rotated quarterly per ADR-002. If the key leaks, all in-flight tokens become invalid at rotation. OAuth tokens cannot be invalidated mid-flight without a logout cascade.

This is a 30-second sidebar; do not get lost. Keep moving.

## Talking-point cheat sheet (memorize these phrases)

If you forget the script entirely, these nine lines hold the demo together:

1. "P2 incident, 7-min L1 triage, p95 SLA at risk - the canonical Now Assist for ITSM case 1."
2. "Council drafts a 7-step workflow with 3 approval gates; the workflow JSON is canonical, version-controlled."
3. "Dry-run never writes. It computes the diff, snapshots the before-state, returns an HMAC token."
4. "Approval token is HMAC-SHA256, 15-min TTL, one-time use, signed with a rotated key."
5. "Prod-guard requires hostname to contain `dev`, `uat`, `test`, or `sandbox`. Override is auditable."
6. "Apply consumes the token. Replay returns `approval_required`."
7. "Audit is JSONL, append-only. The line you saw is the only line for this change."
8. "Rollback restores from snapshot. Per-record only - it does not cascade through Business Rules."
9. "ROI: a normal workflow design plus ATF plus change request is two to four weeks. Five minutes here."

## Decision flow for the on-camera audience

```
Incident lands -> council drafts -> dry-run computes diff
   -> approval requested -> human approves or rejects
       -> approve: write applied, audit emitted, snapshot linked
           -> wrong? rollback by audit_id, snapshot restored
       -> reject: nothing happens, dry-run record persists for review
       -> timeout (15 min): token expires, redo dry-run if still wanted
```

Show this once if you have screen real estate; otherwise narrate it in beat 4:30 as the close-out.
