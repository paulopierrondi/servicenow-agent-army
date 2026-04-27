# Demo 1: CMDB Health Check (read-only council)

> Target length: 5:00. Recorded with Loom 1080p, no fancy editing.
> Domain: ITOM / Platform. Apply path: read-only. Differential: detect-only, zero CMDB writes.

## Tools Paulo needs open before recording

- [ ] Tab 1: terminal in `/Users/paulopierrondi/servicenow-agent-army` (zsh, 16pt font, prompt scrubbed of personal aliases)
- [ ] Tab 2: VS Code at the repo root, sidebar showing `agents/`, `workflows/`, `docs/best-practices/`
- [ ] Tab 3: ServiceNow PDI logged in at `https://devXXXXX.service-now.com`, opened on `cmdb_ci_server.list` filtered to last 90 days
- [ ] Tab 4: Claude Code session in `/Users/paulopierrondi/servicenow-agent-army`, skills loaded
- [ ] Tab 5 (B-roll): browser tab on `https://www.servicenow.com/docs/r/zurich/configuration-management-database/identification-reconciliation.html`
- [ ] Loom recording app open, mic checked, face cam framed
- [ ] Slack, mail, calendar quit. Notifications off. Phone face-down.

## Pre-record checklist

- [ ] PDI healthy. Log in once and force a cache pre-warm by opening `cmdb_ci.list` and `sn_aia_agent.list`.
- [ ] CMDB has at least 200 CIs and a real ownership gap to show. If PDI is fresh, run a Discovery seed first.
- [ ] Repo has `agents/itom-specialist.md`, `agents/cta-agent.md`, `agents/enterprise-architect-agent.md`, `agents/business-analyst-agent.md`, `agents/workflow-composer.md`, `agents/now-assist-coach.md`, `agents/guardrails-reviewer.md`, and `workflows/cmdb-health-check.json` committed.
- [ ] Read-only MCP server pointed at PDI: `mcp__84bf548c-...__sn_table_query` returns a sample row.
- [ ] Run the council prompt once off-camera to confirm the streaming output is coherent. Save that take as a fallback.
- [ ] Confirm `docs/best-practices/itom.md` opens fast in VS Code, especially the Discovery anti-patterns section.
- [ ] Verify the read-only MCP server has no write tool registered. The demo's whole claim is "we never wrote anything" - if `sn_table_patch` is in `allowedTools` by mistake, kill it before recording.
- [ ] PDI Now Assist Discovery surface either visible or you have a screenshot to reference. If the surface is not enabled, narrate around it - do not fake a UI you cannot show.
- [ ] PDI window display ratio matches Loom recording aspect; otherwise the right column gets cropped.
- [ ] One off-camera dry-take recorded with audio. If anything goes wrong on the keeper take, you have audio plus screen pieces to splice.

## Outline (timestamps)

| Time | Beat | Visual |
| --- | --- | --- |
| 0:00-0:20 | Hook: 30 percent of CIs without owner | Face cam |
| 0:20-1:00 | The mess: pan over `cmdb_ci_server.list` | Tab 3 (PDI) |
| 1:00-2:30 | Council deliberates the assessment | Tab 4 (Claude Code) |
| 2:30-3:30 | Output review across four files | Tab 2 (VS Code) |
| 3:30-4:30 | Read-only query against PDI | Tab 1 + Tab 3 |
| 4:30-5:00 | Now Assist Discovery hook + CTA | Face cam + Tab 3 |

## Beat-by-beat script

### 0:00-0:20 - Hook

[VISUAL: face cam, neutral background]

"In a typical FSI Brazil tier-1 bank CMDB I see the same pattern: 30 percent of CIs without an owner, 12 percent with the wrong identification rule, and a platform team that does not know where to start. Most teams either over-engineer a remediation program or copy a stale CMDB Health Dashboard. Here is a council of advisors that drafts a CMDB Health Check workflow, the agent spec, and the Now Assist Discovery hook in under two minutes - and never writes a single CMDB record. Read-only by design. Watch."

[CUE: cut to Tab 3]

### 0:20-1:00 - The mess

[VISUAL: Tab 3 - ServiceNow PDI on `cmdb_ci_server.list`]

"This is a sub-prod CMDB. I filtered for servers updated in the last 90 days."

[CUE: highlight the `Owned by` column with empty values]

"Owners blank. Identification rules visibly inconsistent."

[CUE: scroll to a duplicated CI - same hostname, different sys_id]

"Two records for the same host. Discovery probably ran with hostname-only identification. This kind of mess kills change risk analysis, breaks impact analysis on incident, and it is the foundation problem behind every Now Assist for ITOM project that disappoints in month three."

[OUTPUT EXPECTED: viewer sees the gap, no fabricated metric]

[CUE: cut to Tab 4]

### 1:00-2:30 - Council deliberates

[VISUAL: Tab 4 - Claude Code session]

[TYPE EXACTLY:]

```
Use the servicenow-agent-factory skill. Build a CMDB Health Check assessment for an FSI Brazil tier-1 bank. Scope: server, network gear, database CIs in last 90 days. Constraint: read-only, zero writes to CMDB. Output: agent spec, workflow JSON, ATF test plan, and Now Assist Discovery hook. Council members required: Business Analyst, CTA, Enterprise Architect, ITOM Specialist, Workflow Composer, Now Assist Coach, Guardrails Reviewer.
```

[CUE: as the streaming starts, narrate over the output, naming each agent as their voice appears in the streaming text]

"Business Analyst captures the assessment scope and outcome - the question is `which CI classes are blocking change risk and impact analysis`, not `clean the CMDB`. CTA frames whether this is a one-shot project or a recurring service - if recurring, the workflow needs a schedule and a review cadence; if one-shot, an executive summary is enough."

"Enterprise Architect checks if the CMDB schema even supports the question we are asking - identification rules per class, reconciliation strategy, ownership table denormalization."

"ITOM Specialist pulls best practices from `docs/best-practices/itom.md`. Specifically the Discovery anti-patterns: hostname-only identification, mid server without HA, credentials in clear text, pattern customizations breaking upgrade path, CMDB Health Dashboard ignored. The specialist also references the Identification and Reconciliation rules cadence."

"Workflow Composer drafts six steps: capture scope, read health signals, group issues by impact and effort, draft recommended actions, route any write to human approval, produce executive summary plus practitioner task list. Six is the number from `workflows/cmdb-health-check.json` - the council respects the canonical workflow because it has been pressure-tested already."

"Now Assist Coach maps the diagnostic surface to Now Assist Discovery insights and flags the family-release caveat - this surface is in evolution on Yokohama and Zurich; verify on your instance."

"Guardrails Reviewer adds a hard read-only gate, an approval point before any CMDB record update (the workflow JSON has it pre-locked), and a second approval before sending any report outside the platform team. The Guardian config note covers prompt injection on the executive summary path."

[CUE: pause when streaming is around 70 percent done; let the model finish]

[OUTPUT EXPECTED: streaming JSON spec for the agent + workflow plan + ATF test list + Now Assist hook + a one-page executive summary draft]

[IF THE STREAM RUNS LONG: cut to Tab 5 B-roll of the official ServiceNow CMDB Identification doc, narrate "while the council finishes, this is the official identification reconciliation spec the council referenced," then return to Tab 4]

### 2:30-3:30 - Output review

[VISUAL: Tab 2 - VS Code]

[OPEN: `workflows/cmdb-health-check.json`]

"Six steps. Capture scope. Read health signals. Group by impact and effort. Draft recommended actions. Route any write to human approval. Produce executive summary and practitioner task list. Notice: no `update`, no `insert`, no `delete`. The workflow is a diagnosis, not a treatment."

[OPEN: `agents/itom-specialist.md`]

"This is the agent persona the council called. It already encodes the Discovery best practices visible in the streaming output a moment ago."

[OPEN: a generated `agent-spec.json` in the session output OR scroll the Claude Code chat panel]

"The spec is ready to paste into AI Agent Studio guided setup. Source-driven path is also available via `AiAgentWorkflow` Fluent API on SDK 4.6 plus, but for a read-only assessment the guided setup is faster."

[POINT TO: the ATF test list]

"Three tests: empty scope returns clarification, read-only mode produces recommendations but no writes, high-risk class change requires approval. Tests are placeholders here - they get generated as Fluent ATF code in demo 3."

[OUTPUT EXPECTED: viewer sees four artifacts side by side, no theory]

### 3:30-4:30 - Read-only query against PDI

[VISUAL: Tab 1 - terminal]

"Now I run the assessment against the PDI. Read-only path uses the read MCP server, never the write server. Zero approval token needed because there is no write."

[TYPE EXACTLY:]

```bash
servicenow-army assess --scope cmdb-health \
  --classes cmdb_ci_server,cmdb_ci_netgear,cmdb_ci_db_instance \
  --window 90d \
  --target $SERVICENOW_INSTANCE_URL \
  --read-only
```

[NOTE: this CLI is illustrative; if the wrapper does not exist yet, run the equivalent MCP tool calls from Claude Code or use `pnpm tsx` against a script in `scripts/`. The audience cares about the flow, not the binary.]

[OUTPUT EXPECTED:]

```
[council] CMDB Health Check assessment starting (read-only)
[itom-specialist] querying cmdb_ci_server: 1284 records
[itom-specialist] querying cmdb_ci_netgear: 312 records
[itom-specialist] querying cmdb_ci_db_instance: 178 records
[guardrails] write-mode disabled. proceeding.
[workflow-composer] grouping issues by class + business impact
[output] /tmp/cmdb-health-2026-04-26.md (3812 lines)
```

[CUE: cut to Tab 3 - PDI - and confirm no records were modified]

[VISUAL: Tab 3 - run a quick filter `sys_updated_on > javascript:gs.minutesAgoStart(5)`]

"Zero records updated in the last five minutes. This is the differential of demo 1 - we did the work without touching production."

### 4:30-5:00 - Now Assist Discovery hook + CTA

[VISUAL: split-screen Tab 3 (PDI Now Assist Discovery panel) + Tab 1 (terminal showing the generated executive summary)]

"The council also drafted the Now Assist Discovery insights hook - the surface where this assessment lives once the platform team agrees with the findings. Now Assist Discovery is in evolution on Yokohama and Zurich - this assumes Zurich plus family release; verify on your instance."

[POINT TO: the executive summary first paragraph in Tab 1]

"One page for the platform owner. ROI: a real CMDB Health Check assessment is normally a two-week consulting engagement. Here it took two minutes of council time and zero CMDB writes."

[VISUAL: face cam]

"Repo: github.com/paulopierrondi/servicenow-agent-army. Demo 2 shows the same council pattern with the guarded write flow on an ITSM incident."

[CUT.]

## Pitfalls during recording

- [ ] If PDI is slow and the live query hangs, fall back to a recorded JSON output you saved off-camera. Narrate "this is the same query I ran 10 minutes ago against the PDI, response cached" - do not pretend it is live.
- [ ] If the council streams more than 90 seconds, cut to B-roll on Tab 5 (official ServiceNow CMDB doc) and trim later.
- [ ] If Claude Code rate-limits, restart with a shorter prompt that drops three council members; demo still holds.
- [ ] If you accidentally show your real PDI URL with a credential pattern visible, restart the take.
- [ ] Do not edit `cmdb_ci_*` data with your admin user during the recording - it taints the read-only claim.
- [ ] Watch the read-only narrative carefully. Saying "we only need to update the owner field" - even as a hypothetical - undermines the differential. Stick to "the workflow flags it; a human change request applies it."
- [ ] If the audience is technical, expect a question on `mcp__84bf548c-...__sn_table_query` round-trip count. Answer offline; do not get into MCP tool-search internals during a 5-min demo.

## Anti-patterns the council references (cited from docs/best-practices/itom.md)

The Discovery section in the ITOM best-practices doc lists six concrete anti-patterns. The council quotes them verbatim when drafting the assessment, which is why the executive summary lands credible:

1. Discovery running during peak hours generates incident-by-degradation
2. Credentials in clear text in Discovery Schedule fails first audit
3. Mid Server without HA = stale CMDB nobody notices until it matters
4. Duplicate CI from weak identification (hostname only) breaks change risk
5. Pattern customization on top of OOTB pattern kills upgrade path
6. CMDB Health Dashboard exists but no remediation action

The Service Mapping and Event Management sections add four more (manual PowerPoint maps as source of truth, top-down without owner, alert flood without correlation, alert without CI binding). The agent does not need to enumerate all ten on screen - it needs to cite the two or three relevant to the actual data in front of you.

## B-roll suggestions

- Close-up of terminal cursor blinking right after you press Enter on the council prompt
- Slow scroll of the streaming council output, captured at 60 fps
- Quick zoom on the `workflows/cmdb-health-check.json` step list
- Mermaid diagram of the council flow if you have it in `docs/architecture.md`
- Final shot of the PDI list view sorted by `sys_updated_on` showing no recent changes

## Checklist after recording

- [ ] Watch the full take, time-check at 5:00
- [ ] Replace any client name with "FSI Brazil tier-1 bank"
- [ ] Confirm no PDI URL or token visible in any frame
- [ ] Add captions, edit ServiceNow product names by hand
- [ ] Upload to Loom workspace + mirror to Drive
- [ ] Embed in `docs/demos/README.md` row 1
- [ ] Update top-level `README.md` hero with the Loom link

## Open verification flags

- `Now Assist Discovery insights` surface availability is family-dependent. The script says "Zurich plus family release; verify on your instance" - keep that line.
- The `servicenow-army` CLI command is illustrative. If you ship a real wrapper, update this script. If you keep it as a Claude Code prompt path, change the visual cue from Tab 1 terminal to Tab 4 Claude Code.
- The MCP tool name `mcp__84bf548c-...__sn_table_query` reflects this user's environment registry. In a different environment the prefix changes; do not read the GUID prefix on camera. Call it "the read-only ServiceNow MCP" instead.

## Talking-point cheat sheet (memorize these phrases)

If you forget the script entirely, fall back to these eight lines and the demo still lands:

1. "30 percent of CIs without owner is the FSI Brazil baseline I see in field."
2. "The council pattern is seven personas, each with one job, all visible in `agents/`."
3. "The workflow is canonical - `workflows/cmdb-health-check.json` - six steps, two approval gates."
4. "Read-only by design. The MCP server registered for this session does not expose write tools."
5. "ITOM Specialist quotes the Discovery anti-patterns from `docs/best-practices/itom.md` directly."
6. "Now Assist Discovery insights is the diagnostic surface, family-dependent, verify on your instance."
7. "ROI: a normal CMDB Health Check assessment is two weeks of consulting. This is two minutes of council time."
8. "Demo 2 shows the same pattern with a guarded write flow. Demo 3 shows source-driven deploy via Fluent SDK 4.6."

## Council member-by-member: what each persona contributes

This section is for the post-recording Q&A and for the script Paulo refers to if a viewer asks "what does each agent actually do." Read in order:

| Agent | File | One-line job in this demo |
| --- | --- | --- |
| Business Analyst | `agents/business-analyst-agent.md` | Reformulates the platform owner's ask into a scoped assessment question with success criteria |
| CTA | `agents/cta-agent.md` | Decides one-shot project vs recurring service vs platform investment - shapes the workflow cadence |
| Enterprise Architect | `agents/enterprise-architect-agent.md` | Validates the CMDB schema can answer the question (identification rules, relationships, ownership table) |
| ITOM Specialist | `agents/itom-specialist.md` | Pulls the Discovery / Service Mapping / Event Management best practices and anti-patterns from `docs/best-practices/itom.md` |
| Workflow Composer | `agents/workflow-composer.md` | Drafts the six steps, references `workflows/cmdb-health-check.json` as the canonical shape |
| Now Assist Coach | `agents/now-assist-coach.md` | Maps the surface to Now Assist Discovery insights, flags the family-release caveat |
| Guardrails Reviewer | `agents/guardrails-reviewer.md` | Locks read-only mode, the two approval gates from the workflow, and the Guardian config note |

Token Saver Specialist is not in this demo. It would be in an extended take where prompt size matters; the council loop here fits well under a single context.

## ROI framing for the close

If the audience asks "but what is the actual saving" - have these numbers ready, but do not lead with them:

- A consulting CMDB Health Check assessment in FSI Brazil is typically a 4-week engagement (1 week scope, 2 weeks data analysis, 1 week report) with one senior architect and one analyst. Typical price: 80k-150k BRL.
- The council pattern collapses scope and analysis into a 5-minute prompt and a 30-minute review with the platform owner. The output is a workflow the same architect can apply (or hand to a junior to apply with the workflow as the spec).
- The workflow becomes a recurring asset. Quarterly re-run costs 30 minutes, not 4 weeks.
- Risk savings: read-only by construction means zero accidental CMDB write during the assessment. That alone is worth the demo for any platform team that has been bitten by a script editor accident.

## Why this demo first in the series

Demo 1 sets up the council pattern with zero write risk. The audience learns the cast, the workflow shape, and the Now Assist mapping without any approval-token or rollback complexity. Demo 2 then introduces the guarded-write contract on top of the same council pattern, and demo 3 shows the source-driven deploy via Fluent. The progression is read -> write -> deploy. If you reorder the demos, the audience meets the approval-token machinery before they understand the council, and the messaging gets noisy.
