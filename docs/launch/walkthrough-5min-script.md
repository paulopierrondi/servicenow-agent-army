# 5-minute walkthrough script — ServiceNow Agent Army

> Target surfaces: YouTube primary upload, embed in `docs/demos/README.md`, link from launch posts. 5:00 hard cap. EN primary, PT-BR voice-over track recorded in same session.

## Setup (same as 90s, additions below)

- Browser tab pre-loaded on `https://github.com/paulopierrondi/servicenow-agent-army` (README rendered).
- Browser tab pre-loaded on the web app catalog page (Vercel deploy or `pnpm dev` localhost on 3000).
- Browser tab on PDI `sn_aia_agent.list` and a second on `incident.list`.
- Terminal split into two panes: top for `pnpm` commands, bottom for the audit log tail.
- VS Code open on the repo, sidebar pinned to `agents/`, `workflows/`, `docs/adr/`.
- Real gallery case used: `gallery/01-incident-triage-fsi/case.md`. Read once before recording so the question lands clean.

## Outline (timestamps)

| Time | Beat | Visual |
| --- | --- | --- |
| 0:00-0:30 | Hook + what you will see | Face cam |
| 0:30-1:30 | Install + first run (`pnpm install` + `pnpm validate`) | Terminal |
| 1:30-3:00 | Ask Pierrondi EA via web app, real case from gallery 01 | Browser web app |
| 3:00-4:00 | Output deep dive: four blocks unpacked | Browser + VS Code |
| 4:00-4:30 | Hand-off to council (Workflow Composer + Guardrails) | Browser web app |
| 4:30-5:00 | MCP write dry-run + approval token + audit log | Terminal split |

## Beat-by-beat

### 0:00-0:30 — Hook (face cam)

[VISUAL: face cam, plain background]

"Five minutes. You install the ServiceNow Agent Army, ask Pierrondi EA about a real ITSM incident triage problem at a tier-1 Brazilian bank, see the four-block contract come back, hand off to two more advisors, and watch a production write get blocked behind a dry-run and a signed approval token. No fake REST APIs. No theater."

[CUE: end with a fast title card "What you will see in 5:00" listing the six steps, hold 2s]

[CUE: cut to terminal]

### 0:30-1:30 — Install + first run

[VISUAL: terminal at the home directory]

```bash
git clone https://github.com/paulopierrondi/servicenow-agent-army.git
cd servicenow-agent-army
pnpm install
```

[Narration]: "Node 22 LTS, pnpm 9. The install pulls workspaces under `packages/` and `apps/`. It is intentionally tight — 20 advisors as markdown, two MCP servers as TypeScript, one Next.js web app, one Citty CLI."

[CUE: when install finishes, run]

```bash
pnpm validate
```

[OUTPUT EXPECTED:]

```
[validate] catalog/agents.json schema OK (20 entries)
[validate] catalog/workflows.json schema OK
[validate] all 20 agent cards exist
[validate] skill SKILL.md present in .claude/skills + .agents/skills (in sync)
[validate] OK
```

[Narration]: "Twenty advisors, both Claude and Codex skill paths populated, catalog in sync. The validator is the seatbelt — every PR runs it."

[CUE: brief peek into VS Code]

[VISUAL: VS Code, sidebar showing the file tree]

[Narration]: "Card under `agents/`, mission and guardrail under `catalog/agents.json`, prompt and four-block contract under `docs/pierrondi-ea-positioning.md`. One source of truth per advisor."

### 1:30-3:00 — Ask Pierrondi EA via web app

[VISUAL: browser, web app home page on localhost:3000 or Vercel deploy]

[Narration]: "Web app catalog. The home page has a single input. I am pasting the real question from `gallery/01-incident-triage-fsi/case.md` — an FSI Brazil bank with 800 incidents per day, 7-minute average time to assignment, a risk team that blocks anything touching customer data."

[TYPE INTO INPUT]:

```
Service desk receives 800 incidents per day. Tier 1 takes 7 minutes on average to classify and assign. We want to use Now Assist for ITSM but the risk team blocks anything that touches customer data. Domain: ITSM. Region: FSI Brazil. What is the value question and what should we ship in 90 days?
```

[CUE: select toggle "Run Pierrondi EA first"]

[CUE: hit Run]

[VISUAL: streaming output]

[Narration over the stream]: "Pierrondi EA opens with the value question. It refuses to design before the four blocks land. Watch the streaming text — outcome metric first, then value, then deliverables, then risks. If any block is missing, the agent stops and asks. That is the contract."

[OUTPUT EXPECTED — paraphrase, not exact]:

```
OUTCOME (90 days)
Reduce p95 time-to-assignment from 7m to 2m for P1/P2 ITSM incidents in FSI Brazil banking domain.

VALUE
BRL 1.2M/yr saved at 18k incidents/yr (analyst time, 5 min/ticket * 4 BRL/min, conservative).
Cost-of-build: BRL 280k one-time (engineering 4 weeks * 70k/wk).
Cost-of-run: BRL 14k/yr Now Assist credits (estimate at 18k * 0.8 invocations/ticket).
Working hypothesis until 14-day baseline confirms incident volume.

DELIVERABLES
1. Skill prompt v1 for Now Assist for ITSM (Resolution Suggestions). Owner: ITSM lead, by W+2.
2. ATF regression suite (10 cases). Owner: QA architect, by W+3.
3. Now Assist Guardian config for PII masking. Owner: security architect, by W+3.
4. Audit jsonl wired to ServiceNow PA. Owner: platform owner, by W+4.
5. Rollback plan with 24-hour window. Owner: change manager, by W+4.

RISKS
1. Now Assist credit burn over 4k/mo. Threshold: pause at 3.5k. Mitigation: daily cap.
2. Resolution accuracy below 60% in pilot. Threshold: stop rollout. Mitigation: 4-week supervised pilot.
3. LGPD audit blocker on Guardian masking. Threshold: hard stop. Mitigation: pre-DPO sign-off W+1.

NOW ASSIST SURFACE
Now Assist for ITSM (Resolution Suggestions) + Now Assist Guardian for PII.

CHALLENGE
The current plan assumes 18k incidents/yr is steady. Pull the last 12 months volume before W+1.
If volume is below 12k or trending down, the value figure halves and this stops being P1.

NEXT
Hand off to Workflow Composer for skill steps and Guardrails Reviewer for approval gates.
```

### 3:00-4:00 — Output deep dive

[VISUAL: web app result panel split with VS Code showing `docs/pierrondi-ea-positioning.md`]

[Narration]: "Four blocks. Outcome — one metric, one direction, one number, 90-day horizon. Value — currency figure with the trade-off explicit, marked as working hypothesis until baseline confirms. Deliverables — three to five concrete items, each with one named owner and a date. Risks — at most three, each with a go/no-go threshold."

[POINT TO: the CHALLENGE block at the end]

[Narration]: "And every Pierrondi EA response closes with a challenge to the user's plan. Here it forces the user to validate the 18k-incident assumption before W+1, because the value math collapses if volume halves. That is the constructive challenger voice."

[OPEN: `agents/pierrondi-enterprise-architect.md` in VS Code, scroll to the Guardrails section]

[Narration]: "Five guardrails baked in. Refuse to design without an outcome metric. Cap value claims at source data. One named owner per deliverable — `the team` is rejected. No vendor pitches. Surface the hidden cost: change management, training, retire-old-system, Now Assist credits."

### 4:00-4:30 — Hand-off to council

[VISUAL: web app, click the "Hand off to council" button]

[Narration]: "Pierrondi EA frames the work but does not finish it. Workflow Composer takes the deliverable list and drafts the AI Agent Studio steps. Guardrails Reviewer takes the risk list and locks the approval flow. Both run in parallel, both produce a single artifact each."

[OUTPUT EXPECTED — Workflow Composer panel]:

```
WORKFLOW: incident-triage-resolution-suggestion (6 steps)
1. capture incident (input: short_description, category, priority)
2. mask PII via Guardian sensitive-topic filter
3. retrieve top 3 KB matches (Now Assist for ITSM Resolution Suggestion)
4. score relevance (LLM-judge, threshold 0.6)
5. propose to analyst with cite-source
6. log audit event with model id + token cost
ATF tests: 10 (happy path 4 + edge 4 + reject 2)
```

[OUTPUT EXPECTED — Guardrails Reviewer panel]:

```
APPROVAL GATES:
- credit-related incident: manual close required, no auto-resolution
- PII detected: Guardian filter applied, no raw text in audit
- precision below 70%: rollback to KB-only mode within 24h
AUDIT: jsonl with sys_id, model id, token count, suggestion accepted Y/N, BACEN 24h retrieval ready
ROLLBACK: per-record revert via mcp-write rollback_last_change
```

[Narration]: "The two artifacts are immediately useful. Workflow Composer's 6-step skeleton goes into AI Agent Studio guided setup. Guardrails Reviewer's gates feed the Now Assist Guardian config and the audit table."

### 4:30-5:00 — MCP write dry-run + approval + audit

[VISUAL: terminal split, top pane runs the command, bottom pane tails the audit log]

[Narration]: "Last beat. Watch the write contract. Two MCP servers ship in this repo. The read-only one has zero write code paths. The write one only commits behind a four-step chain — dry-run, approval token, commit, audit."

[TOP PANE TYPE]:

```bash
pnpm tsx scripts/mcp-write-demo.ts \
  --table incident \
  --sys_id 1a7b... \
  --patch '{"assignment_group":"network-l2"}' \
  --reason "council recommended after risk review"
```

[OUTPUT EXPECTED]:

```
[mcp-write] dry-run: diff computed
  before: assignment_group="" 
  after:  assignment_group="network-l2"
[mcp-write] dry-run hash: 7f3a-9b21-...
[approval] approval_token required. signing path: out-of-band
[approval] signer=paulopierrondi at 2026-04-26T14:32:08-03:00
[mcp-write] token validated, commit proceeding
[mcp-write] commit OK, rollback id: 7f3a-9b21-...
[audit] event written
```

[BOTTOM PANE — audit log tail]:

```jsonl
{"ts":"2026-04-26T14:32:08-03:00","actor":"paulopierrondi","tool":"sn_table_patch","table":"incident","sys_id":"1a7b...","dry_run_hash":"7f3a-9b21-...","approval_token":"<jwt>","reason":"council recommended after risk review","status":"committed","rollback_id":"7f3a-9b21-..."}
```

[Narration]: "Append-only JSONL. Dry-run hash matches the approval token signature. Rollback id is callable for 24 hours via `rollback_last_change`. The community MCP space has nine servers. None ship this end-to-end. That is the gap this repo owns."

[VISUAL: cut to face cam end card]

[Narration]: "MIT license, github.com/paulopierrondi/servicenow-agent-army. Twenty advisors. Two MCP servers. The honest path between Claude Agent SDK, Codex CLI, and Fluent SDK 4.6. Ask Pierrondi EA your next ServiceNow problem."

[CUT.]

## Pitfalls

- If `pnpm validate` errors on a missing card, restart the take with the repo at `main` HEAD and run install once before recording.
- If the web app streams slow, pre-record the Pierrondi EA streaming pass off-camera and splice; narrate continuously to mask the cut.
- If the PDI is rate-limited during the MCP write demo, use a sub-prod local sandbox or a recorded JSONL output. Narrate "this is the same operation against the PDI yesterday, replayed for this take."
- Do not paste the real `incident.sys_id` of a customer record. Use a sub-prod test record.
- Do not show your real Now Assist credit balance.
- Do not improvise the value math live — read it off the gallery case.
- Do not promise registry publication, MCP marketplace listing, or any roadmap that is not in `README.md`. Stay inside the README.

## Talking-point cheat sheet

If you forget the script, fall back to these eight lines:

1. "Twenty advisors. Pierrondi EA leads."
2. "Outcome before output. Four blocks. No exceptions."
3. "If the value number is missing, the advisor stops and asks."
4. "The other nineteen advisors follow only after the value question is answered."
5. "Two MCP servers — read-only by construction, write with dry-run + approval + audit + rollback."
6. "Honest about what ServiceNow exposes via Fluent and what still needs guided setup."
7. "MIT licensed, Node 22, pnpm 9. Three commands to run the council."
8. "Ask Pierrondi EA your next problem. If it cannot be valued, it is theater."

## Post-record checklist

- [ ] Watch full take, time-check at 5:00.
- [ ] Verify no PDI URL, no instance number, no client name, no token visible.
- [ ] Verify the audit JSONL line on screen does not contain a real customer sys_id.
- [ ] Generate captions EN + PT-BR, hand-correct ServiceNow product names.
- [ ] Banned-words sweep on the burned captions and the spoken track (transcribe and check).
- [ ] Export 1080p MP4, upload to YouTube unlisted first for review.
- [ ] After review pass, switch to public, update `docs/demos/README.md` with the link.
- [ ] Embed in launch LinkedIn posts only after thumbnail is set (not the YouTube auto-frame).
