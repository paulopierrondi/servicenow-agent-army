# Demo 3: Request Fulfillment via ServiceNow SDK 4.6 Fluent

> Target length: 5:00. Recorded with Loom 1080p, no fancy editing.
> Domain: Platform / ITSM. Apply path: source-driven via `now-sdk` Fluent build + deploy. Differential: Git-tracked artifacts, Fluent diff visible, deploy via SDK with no Studio click-through.

## Tools Paulo needs open before recording

- [ ] Tab 1: terminal in `/Users/paulopierrondi/servicenow-agent-army` (zsh, 16pt font, `now-sdk` on `$PATH`)
- [ ] Tab 2: VS Code at the repo root, sidebar showing `apps/`, `templates/`, `workflows/request-fulfillment-agent.json`, `agents/servicenow-sdk-builder.md`, `agents/catalog-designer.md`
- [ ] Tab 3: ServiceNow PDI on Yokohama or Zurich family release, opened on `sys_app.list` filtered to scoped apps
- [ ] Tab 4: Claude Code session in the repo, `now-sdk-explain` skill loaded if available
- [ ] Tab 5: Git GUI of choice (or `git diff` in another terminal split) to show the diff before deploy
- [ ] Loom recording, mic checked
- [ ] Slack, mail, calendar quit. Notifications off.

## Pre-record checklist

- [ ] Node.js 20 plus installed. `node --version` returns >= v20.
- [ ] `@servicenow/sdk` v4.6.0 installed globally or via `npx`. Verify with `now-sdk --version`.
- [ ] `now-sdk setup` succeeds against the PDI. Credentials cached.
- [ ] PDI confirmed as sub-prod via `.env` `SERVICENOW_INSTANCE_URL`.
- [ ] Pre-create a clean scoped app slot called `x_pp_laptop_refresh` in PDI. Either pre-init it off-camera and reset before the take, or do `now-sdk init` live - choose one and stick with it. Live `init` adds 30 seconds; budget for it.
- [ ] If you go live, run `now-sdk init` once off-camera so the auth and template flow is warm.
- [ ] `git status` clean. The Fluent diff has to look real, not noisy.
- [ ] PDI has Now Assist Catalog Search enabled if you want to show the search hook in beat 6. If not, demo it conceptually.

## Outline (timestamps)

| Time | Beat | Visual |
| --- | --- | --- |
| 0:00-0:20 | Hook: 8 tasks, 3 approvals, 4 integrations, junior burns 3 days | Face cam |
| 0:20-0:50 | The catalog item complexity | Tab 3 (PDI) |
| 0:50-2:00 | Council drafts catalog + flow + integration spec + ATF | Tab 4 (Claude Code) |
| 2:00-3:00 | Fluent scaffold via `now-sdk init` + generated files | Tab 1 + Tab 2 |
| 3:00-4:00 | Git diff, build, deploy via SDK | Tab 5 + Tab 1 + Tab 3 |
| 4:00-4:30 | ATF tests run, PDI shows the new catalog item live | Tab 1 + Tab 3 |
| 4:30-5:00 | Now Assist Catalog Search + Now Assist for Code hook + CTA | Face cam + Tab 3 |

## Beat-by-beat script

### 0:00-0:20 - Hook

[VISUAL: face cam]

"Request fulfillment for a `Laptop refresh` catalog item: 8 catalog tasks, 3 approvals, 4 integrations. A junior ServiceNow builder burns 3 days clicking through Studio. Most teams ship the half-finished version, then maintain a custom Studio export forever. Here is a council that drafts the catalog spec, the Flow Designer workflow, the integration spec, and the ATF tests, then scaffolds the whole thing as a ServiceNow SDK 4.6 Fluent app, commits it to Git, builds, and deploys to sub-prod. Source-driven, version-controlled, no Studio. Watch."

[CUE: cut to Tab 3]

### 0:20-0:50 - The catalog item complexity

[VISUAL: Tab 3 - ServiceNow PDI on `sc_cat_item.list` filtered to laptop-related items]

"This is what laptop refresh looks like in a typical FSI Brazil bank: 4 variants by role - exec, dev, ops, contractor. Each one has its own variable set, its own approval chain. The current item is in three pieces, owned by three different teams, and `Other Request` swallows the rest. Junior builder rebuilding this from scratch in Studio - 3 days, easy."

[CUE: cut to Tab 4]

### 0:50-2:00 - Council deliberates

[VISUAL: Tab 4 - Claude Code session]

[TYPE EXACTLY:]

```
Use the servicenow-agent-factory skill. Build a `Laptop refresh` catalog item for an FSI Brazil tier-1 bank. Variants: exec, dev, ops, contractor. Council: Business Analyst, Catalog Designer, Workflow Composer, Integration Mapper, ATF Test Generator, ServiceNow SDK Builder, Guardrails Reviewer. Output as ServiceNow SDK 4.6 Fluent source: catalog item spec, Flow Designer workflow with 8 tasks and 3 approvals, REST integration spec for HRIS + asset mgmt + procurement + identity, and ATF test plan covering at least 5 representative cases. Target SDK >= 4.6.0, source-driven via AiAgentWorkflow Fluent API where applicable.
```

[CUE: while it streams, narrate, naming each agent as their voice appears]

"Business Analyst captures the four variants and the constraint: OOTB record producer plus variable sets, no client-script customization. UI Policy for dependent fields, not Client Script - the Catalog anti-pattern from `docs/best-practices/itsm.md` says Client Script becomes orphan customization on Family upgrade."

"Catalog Designer maps the variables. Department references `cmn_department.sys_id`, not a string. Variable set is shared across the four variants so reporting holds. Multi-row variable set if the requester provisions for a team in one shot. SLAs per variant, not a generic SLA - `Email account creation` and `VPN access` are different items because they take different time."

"Workflow Composer drafts 8 catalog tasks and 3 approval gates, hands off to Flow Designer for orchestration. Catalog Tasks are sequenced with explicit dependency - anti-pattern 3 from the doc says `Catalog Task without explicit dependency` causes task 2 to start before task 1 finishes."

"Integration Mapper specs the REST calls. HRIS for employee data lookup, asset management for serial assignment and inventory decrement, procurement for purchase order against the contractor SKU, identity for account provisioning. Each integration has a timeout, a retry, an error path that creates a Catalog Task for human follow-up - never a silent failure."

"ATF Test Generator drafts 5 tests: missing variable returns clarification, privileged contractor request requires approval (canonical test 2 from `workflows/request-fulfillment-agent.json`), eligible standard request produces flow handoff (canonical test 3), all four variants smoke-test, regression test for the integration timeout path."

"ServiceNow SDK Builder drafts the Fluent scaffold using SDK 4.6. Source-driven `AiAgentWorkflow` plus `sc_cat_item` Fluent records plus Flow Fluent. Auto-ACL generation per the 4.6 release notes - no manual `sys_security_acl` declarations. Custom Actions use typed step references for IntelliSense plus compile-time safety."

"Guardrails Reviewer locks the approval points from `workflows/request-fulfillment-agent.json`: before exception fulfillment, before any external system action, before high-cost or privileged access. Audit on every external system call."

[OUTPUT EXPECTED: streaming output with file paths and Fluent TypeScript snippets]

### 2:00-3:00 - Fluent scaffold and generated files

[VISUAL: Tab 1 - terminal]

"Now scaffold the app via the ServiceNow SDK."

[TYPE EXACTLY:]

```bash
mkdir -p apps/laptop-refresh && cd apps/laptop-refresh
now-sdk init --template scoped-app --name x_pp_laptop_refresh
```

[OUTPUT EXPECTED: scaffolding logs, `package.json`, `now/` source dir, `.gitignore`, etc.]

[NOTE: if you pre-initialized, replace the `now-sdk init` command with `cd apps/laptop-refresh && ls`. Either way the next beat shows the file tree.]

[CUE: cut to Tab 2 - VS Code]

[VISUAL: VS Code file tree expanded under `apps/laptop-refresh/now/`]

"The council generated source files into the scoped app. Catalog item: `sc_cat_item/laptop-refresh.ts`. Variable sets: `item_option_new/*.ts`. Flow: `sys_hub_flow/laptop-refresh-fulfillment.ts`. ATF tests: `sys_atf_test/*.ts`. AI Agent workflow: `sn_aia_agent/laptop-refresh-coordinator.ts` using `AiAgentWorkflow` Fluent API - this is SDK 4.6 plus only. Auto-ACL generation kicks in - no manual `sys_security_acl` declarations."

[OPEN: `apps/laptop-refresh/now/sn_aia_agent/laptop-refresh-coordinator.ts`]

"Source-driven AI agent. Versionable, reviewable, diff-able."

[OPEN: `apps/laptop-refresh/now/sys_atf_test/eligible-standard-request.ts`]

"And the ATF test for the eligible-standard-request path. This is the test that goes red the day someone breaks the integration to procurement."

### 3:00-4:00 - Git diff, build, deploy

[VISUAL: Tab 5 - `git status` output]

[TYPE EXACTLY:]

```bash
git status
```

[OUTPUT EXPECTED: long list of new files under `apps/laptop-refresh/`]

[TYPE EXACTLY:]

```bash
git add apps/laptop-refresh && git diff --cached --stat
```

[OUTPUT EXPECTED:]

```
 apps/laptop-refresh/now/sc_cat_item/laptop-refresh.ts          | 142 ++++++++
 apps/laptop-refresh/now/sys_hub_flow/laptop-refresh-fulfill... | 286 ++++++++++++
 apps/laptop-refresh/now/sn_aia_agent/laptop-refresh-coordi...  |  98 +++++
 apps/laptop-refresh/now/sys_atf_test/...                       | 312 ++++++++++++
 apps/laptop-refresh/package.json                               |  18 +
 apps/laptop-refresh/now-sdk.config.json                        |  12 +
 ...
```

[CUE: cut to Tab 1]

"Build then deploy. Build compiles Fluent into the deployable package, deploy pushes it to the PDI."

[TYPE EXACTLY:]

```bash
cd apps/laptop-refresh && now-sdk build
```

[OUTPUT EXPECTED: compile logs, no errors, build artifact path]

[TYPE EXACTLY:]

```bash
now-sdk deploy --target $SERVICENOW_INSTANCE_URL
```

[OUTPUT EXPECTED:]

```
[deploy] connecting to https://dev12345.service-now.com
[deploy] uploading package x_pp_laptop_refresh
[deploy] applying records: sc_cat_item (4), item_option_new (12), sys_hub_flow (1), sn_aia_agent (1), sys_atf_test (5)
[deploy] auto-ACL generation complete
[deploy] success in 38s
```

[CUE: cut to Tab 3]

[VISUAL: Tab 3 - PDI on `sys_app.list` filter `name=Laptop Refresh`, then drill in]

"There it is. Same package, ServiceNow side. Tables, catalog item, flow, AI agent - all from source."

### 4:00-4:30 - ATF tests run

[VISUAL: Tab 1]

[TYPE EXACTLY:]

```bash
now-sdk explain --tag atf-run
```

[NOTE: this is illustrative. If you have a direct ATF runner CLI, use it. Otherwise show ATF test execution from the PDI Test Designer panel.]

[CUE: cut to Tab 3 - PDI on `sys_atf_test_result.list`]

[VISUAL: 5 ATF tests passing in green]

"Five tests, all green. The eligible-standard-request path runs the flow, the privileged-contractor path triggers the approval gate, the missing-variable path returns the clarification. We did not click through Studio once."

### 4:30-5:00 - Now Assist Catalog Search + Now Assist for Code + CTA

[VISUAL: Tab 3 - PDI portal showing Now Assist Catalog Search bar, type "preciso de um laptop novo"]

[VISUAL: portal returns the new Laptop refresh item]

"Now Assist Catalog Search picks up the new item automatically because the description is rich and the categories are curated - this is canonical case 3 in the Now Assist playbook. Verify on your instance for Now Assist Catalog Search availability - this assumes Zurich plus family release."

[VISUAL: face cam, then cut to Tab 4]

"And Now Assist for Code accelerated the SDK scaffold itself - that is canonical case 7. Council pattern plus Fluent SDK plus Now Assist for Code = a junior builder ships in hours, not days. ROI: 3 days to 30 minutes for the build, plus a clean Git history that survives the next Family upgrade."

[VISUAL: face cam]

"Repo: github.com/paulopierrondi/servicenow-agent-army. Three demos in this series. CMDB read-only first, guarded write second, source-driven third. Pick the path that fits your governance posture."

[CUT.]

## Pitfalls during recording

- [ ] `now-sdk init` prompts interactively. If you do it live, hit defaults fast or pre-stage a `now-sdk.config.json`. Better: pre-init off-camera and `cd` in.
- [ ] `now-sdk deploy` can take 60+ seconds on a slow PDI. Budget that into the 5-min plan. If it overshoots, cut to B-roll of the Fluent source diff scrolling and trim.
- [ ] If `now-sdk` is not on `$PATH`, fall back to `npx @servicenow/sdk@4.6.0`. Update the script command on the day.
- [ ] If the PDI does not have SDK 4.6 plus support for `AiAgentWorkflow`, the deploy fails with a Fluent error. Verify family release in pre-flight - this is the most fragile demo.
- [ ] If auth token expired between `now-sdk setup` and `now-sdk deploy`, you get a redirect to OAuth login. Run `now-sdk setup` again right before recording.
- [ ] Do not commit a real `SERVICENOW_TOKEN` in `.env`. Confirm `.gitignore` covers it. The Git diff has to be clean.
- [ ] If Now Assist Catalog Search does not pick up the new item in time, fall back to navigating to `sc_cat_item.do?sys_id=...` directly and narrate "the item is in the catalog and indexed; the Now Assist surface follows naturally on Zurich plus".

## B-roll suggestions

- Close-up of `now-sdk build` compiling, console output animated
- Slow scroll of the Fluent TypeScript file showing typed step references
- Git diff side-by-side: 0 files before, 30 files after
- PDI Studio view showing the new scoped app with all artifacts populated
- ATF test execution panel turning green test by test

## Checklist after recording

- [ ] Watch the take, time-check at 5:00
- [ ] Replace any client name with "FSI Brazil tier-1 bank"
- [ ] Verify no PDI URL with credentials, no `SERVICENOW_TOKEN`, no signing key visible
- [ ] Captions hand-edited for `now-sdk`, `Fluent`, `AiAgentWorkflow`, `NASK`
- [ ] Upload to Loom + Drive
- [ ] Embed in `docs/demos/README.md` row 3
- [ ] Update `README.md` hero block with the link

## Open verification flags

- SDK 4.6.0 plus is required for `AiAgentWorkflow` Fluent API and auto-ACL. The script says "this assumes Zurich plus family release; verify on your instance" - keep that line.
- `now-sdk explain --tag atf-run` is illustrative. Confirm on the day whether `now-sdk` exposes a direct ATF run command in 4.6, or whether you trigger ATF execution from the PDI Test Designer. Either visual works.
- Now Assist Catalog Search availability is family-dependent.
- The `cmn_department` reference assumption holds in OOTB instances. If your PDI uses a custom department table, swap the reference in the catalog item spec before recording.

## Anti-patterns the council references (cited from docs/best-practices/itsm.md)

The Catalog/Request section lists five anti-patterns. The council quotes the relevant ones:

1. Catalog item without consistent variables - reporting breaks; solution is a shared variable set
2. Approval on Record Producer with async `current.update()` - race condition in parallel flows
3. Catalog Task without explicit dependency - task 2 starts before task 1 finishes, fulfillment incoherent
4. "Other Request" as generic catch-all item - kills reportability
5. Now Assist Catalog Search without category curation - "I need a laptop" returns "Reset Password"

Anti-patterns 1, 3, and 5 are visibly addressed by the Fluent scaffold the council generates. Call them out by number on camera if a viewer asks "but what about catalog hygiene."

## SDK 4.6 capability callouts (cited from docs/research-2026-04.md)

If you have 10 seconds free, name these specifically - the audience can verify them later:

- `AiAgentWorkflow` Fluent API for source-driven AI Agent definitions
- Automatic ACL Generation for AI Agents (no manual `sys_security_acl`)
- NASK auto-generated outputs when array omitted; new input types `glide_record`, `simple_array`, `json_object`, `json_array`
- Custom Actions typed step references (IntelliSense + compile-time safety)
- `now-sdk explain` enhanced for AI assistants

These are the four numbered changes from the SDK 4.6 release notes. Saying any two of them on camera buys you credibility with the platform-engineer audience.

## Talking-point cheat sheet (memorize these phrases)

If you forget the script, these eight lines hold:

1. "Laptop refresh: 4 variants, 8 tasks, 3 approvals, 4 integrations - the canonical FSI request item."
2. "Council generates Fluent source, not Studio clicks. Versionable, reviewable, diff-able."
3. "Source-driven AI Agent via `AiAgentWorkflow` Fluent API in SDK 4.6 plus."
4. "Auto-ACL generation per the 4.6 release - no manual `sys_security_acl` declarations."
5. "Five ATF tests cover the canonical paths from `workflows/request-fulfillment-agent.json`."
6. "Build then deploy via `now-sdk` - the same binary the ServiceNow developer-advocate community uses."
7. "Now Assist Catalog Search picks up the new item automatically because the description is rich and categories are curated - case 3 in the playbook."
8. "Now Assist for Code accelerated the Fluent scaffold itself - case 7. Council plus Fluent plus Now Assist for Code = junior builder ships in 30 minutes."

## Comparison table for the close (optional, on screen)

| Path | Time | Upgrade-safe | Reviewable | Auditable |
| --- | --- | --- | --- | --- |
| Studio click-through | 3 days | sometimes | UI history only | record-by-record |
| Update Set XML | 1 day | yes | XML diff | export bundle |
| ServiceNow SDK Fluent (4.6) | 30 min | yes | Git diff | Git log + auto-ACL |

This is a 5-second visual at the close if you want a numeric handoff. Otherwise drop it.
