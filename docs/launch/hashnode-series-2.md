# Hashnode series — Part 2 of 3

> Tone: technical deep-dive on the four-block contract with three full worked examples. Audience: ServiceNow architects, presales, builders ready to apply the pattern. Length: 2200-2600 words.

## Title

The 4-block contract: how Pierrondi EA frames every ServiceNow architecture decision

## Subtitle

Three worked examples. Incident triage. CMDB health check. Change risk.

## Cover

`docs/assets/og-default.png` cropped to Hashnode's 1600x840.

## Tags

`ServiceNow` `Architecture` `AI` `Tutorial`

## Body

Part 1 of this series argued that most ServiceNow AI advice is theater because it ships before the value question is answered. The fix is the four-block contract: outcome, value, deliverables, risks. Refuse to design without it.

This post takes the contract apart, then runs three real-shape examples through it: incident triage in FSI Brazil, CMDB health check on a tier-1 bank, and change risk on a Now Assist for ITSM rollout. Each example shows the four blocks in full, then traces the council hand-off that follows.

### The contract in detail

```
OUTCOME (90 days)
[one metric, one direction, one number, observable in 90 days]

VALUE
[currency figure with stated trade-off]
[cost-of-build, cost-of-run, source data confirmed or labeled hypothesis]

DELIVERABLES
[3 to 5 concrete items, one named owner each, with a date]

RISKS
[at most 3, each with a go/no-go threshold and a mitigation]

NOW ASSIST SURFACE
[the surface that maps, or refuse and recommend platform-native]

CHALLENGE
[one challenge to the user's plan — pulls a hidden assumption]

NEXT
[the advisor to hand off to]
```

Two operating rules you should not negotiate:

1. **Group ownership is rejected.** "The platform team" is not an owner. "Maria, ITSM lead" is. If you cannot put one human name on a deliverable, the deliverable is not real yet — it is delegation theater.
2. **Round numbers without source data are flagged as hypothesis.** "Save BRL 1M/yr" with no math attached is not value — it is hope. Until you have a 14-day baseline, the figure stays labeled "working hypothesis." This is uncomfortable but it is the only way the advisor stays trusted.

### Example 1: incident triage at an FSI Brazil tier-1 bank

The case (real shape, not a real client):

> Service desk receives 800 incidents per day. Tier 1 takes 7 minutes on average to classify and assign. We want to use Now Assist for ITSM but the risk team blocks anything that touches customer data. Region: FSI Brazil.

Pierrondi EA refuses to design before the four blocks. Here is what comes back:

```
OUTCOME (90 days)
Reduce p95 time-to-assignment from 7m to 2m for P1/P2 ITSM incidents in FSI Brazil banking domain.

VALUE
BRL 1.2M/yr saved at 18k incidents/yr (analyst time, 5 min/ticket * 4 BRL/min, conservative).
Cost-of-build: BRL 280k one-time (engineering 4 weeks * 70k/wk).
Cost-of-run: BRL 14k/yr Now Assist credits (estimate at 18k * 0.8 invocations/ticket).
Working hypothesis until 14-day baseline confirms incident volume.

DELIVERABLES
1. Skill prompt v1 for Now Assist for ITSM (Resolution Suggestions). Owner: Maria, ITSM lead, by W+2.
2. ATF regression suite (10 cases). Owner: Carlos, QA architect, by W+3.
3. Now Assist Guardian config for PII masking. Owner: Renata, security architect, by W+3.
4. Audit jsonl wired to ServiceNow PA. Owner: Joao, platform owner, by W+4.
5. Rollback plan with 24-hour window. Owner: Pedro, change manager, by W+4.

RISKS
1. Now Assist credit burn over 4k/mo. Threshold: pause at 3.5k. Mitigation: daily cap.
2. Resolution accuracy below 60% in pilot. Threshold: stop rollout. Mitigation: 4-week supervised pilot.
3. LGPD audit blocker on Guardian masking. Threshold: hard stop. Mitigation: pre-DPO sign-off W+1.

NOW ASSIST SURFACE
Now Assist for ITSM (Resolution Suggestions) + Now Assist Guardian for PII.

CHALLENGE
The plan assumes 18k incidents/yr is steady. Pull the last 12 months volume before W+1.
If volume is below 12k or trending down, the value figure halves and this stops being P1.

NEXT
Hand off to Workflow Composer for skill steps and Guardrails Reviewer for approval gates.
```

Notice five things:

1. The outcome is a p95 number, not an average. p95 is what the user feels; the average lies for you.
2. The value figure has source math attached. 18k * 5 min * 4 BRL/min. You can argue with each multiplier; you cannot argue with a vibe.
3. The Now Assist credit cost is named in cost-of-run. Most architecture proposals I see ignore credit cost entirely. Pierrondi EA does not.
4. Each deliverable has a human name and a date. If "Maria" is on vacation when the deliverable is due, the program manager knows immediately.
5. The challenge surfaces a hidden assumption. The customer arrived asking about Now Assist. The challenge says: validate the input data before you spend any engineering. If volume is dropping, the project is not P1.

The Workflow Composer hand-off then drafts a 6-step AI Agent Studio skill skeleton. The Guardrails Reviewer hand-off locks the approval gates and the audit envelope. Both run in parallel.

### Example 2: CMDB health check on a tier-1 bank

A different case, same advisor:

> ITOM lead asks: 30% of CIs without owner. We need a CMDB Health Check workflow. Read-only — risk team will not approve any CMDB write during the assessment.

The four blocks come back as:

```
OUTCOME (90 days)
Produce a CMDB Health Check assessment that classifies all server, network, and database CIs in the last 90 days into 4 severity buckets, with zero CMDB writes. Adopted by the platform team as the quarterly review cadence.

VALUE
A consulting CMDB Health Check assessment in FSI Brazil is typically a 4-week engagement (1 week scope, 2 weeks data analysis, 1 week report) at BRL 80k-150k.
This kit collapses scope and analysis into a 2-minute prompt + 30-minute review with the platform owner.
Recurring quarterly cost: 30 minutes, not 4 weeks. Annual saving: BRL 240k-450k.
Cost-of-build: zero (covered by the army kit).
Cost-of-run: zero Now Assist credits (read-only path uses platform tables, not Now Assist).

DELIVERABLES
1. CMDB Health Check workflow JSON (6 steps, read-only). Owner: Joao, platform owner, by W+1.
2. Assessment report template (executive 1-pager + practitioner task list). Owner: Maria, ITOM lead, by W+1.
3. Discovery anti-pattern checklist mapped to current CMDB. Owner: Carlos, ITOM specialist, by W+2.
4. Quarterly review cadence + escalation path. Owner: Joao, by W+3.

RISKS
1. PDI rate-limits during read queries. Threshold: any single query over 30s. Mitigation: paginate and cache locally.
2. Platform team rejects findings as "not actionable." Threshold: zero changes adopted in 60 days. Mitigation: pair with one canonical fix (ownership backfill via change request, not script).
3. Assessment becomes shelfware. Threshold: not re-run in 90 days. Mitigation: schedule the quarterly cadence as a calendar block, not a wish.

NOW ASSIST SURFACE
None for this assessment. Now Assist Discovery insights is the diagnostic surface, family-dependent (Zurich+), verify on instance. Recommend platform-native read path.

CHALLENGE
The plan assumes the platform team will act on the findings. Confirm with the platform owner that they have 4 hours per quarter to review the report, before W+1. If they do not, the project is shelfware.

NEXT
Hand off to ITOM Specialist for Discovery anti-pattern listing and Workflow Composer for the canonical 6-step JSON.
```

Three things to notice in this example:

1. The Now Assist surface block is honest. The advisor refuses to recommend a Now Assist surface that does not justify itself. Now Assist Discovery insights is in evolution; Pierrondi EA flags the family-release caveat.
2. The CHALLENGE surfaces the political risk, not the technical risk. The technical risk (read-only path) is solved. The political risk (platform team will not act) is the actual blocker. The advisor names it.
3. Recurring saving (BRL 240k-450k/yr) is the long tail value. One-shot saving is the small number. Pierrondi EA frames recurring vs one-shot explicitly.

### Example 3: change risk on a Now Assist for ITSM rollout

A harder case, because the value chain is indirect:

> Change manager asks: we want to use Now Assist suggestions on change requests. Risk team is nervous because change touches production schedules. What is the value question?

The four blocks:

```
OUTCOME (90 days)
Reduce CAB rejection rate from 22% to 12% on standard changes by improving change description quality at submission, measured on changes flagged "standard" by the existing risk model.

VALUE
22% of standard changes rejected -> reworked -> resubmitted. Average rework: 4 hours of platform engineer time per rejection. At 60 standard changes/week and 4 BRL/min, rework cost: BRL 1.25M/yr.
A 10-point reduction recovers BRL 570k/yr.
Cost-of-build: BRL 180k one-time (3 weeks engineering at 60k/wk).
Cost-of-run: BRL 8k/yr Now Assist credits (estimate at 3000 changes/yr * 0.5 invocations).
Working hypothesis until 30-day baseline confirms rejection rate.

DELIVERABLES
1. Now Assist for Creator skill: change description enrichment from KB + recent similar changes. Owner: Joao, platform engineer, by W+2.
2. ATF regression suite for change description quality scoring. Owner: Carlos, QA architect, by W+3.
3. CAB review feedback loop wired to skill output. Owner: Pedro, change manager, by W+4.
4. Now Assist Guardian config for sensitive change windows. Owner: Renata, security architect, by W+3.

RISKS
1. Submitter ignores the suggested enrichment. Threshold: adoption below 30% in 4 weeks. Mitigation: friction — soft-block submission until enrichment is reviewed.
2. CAB process changes mid-pilot. Threshold: any structural change to standard-vs-normal classification. Mitigation: freeze CAB scope for 90 days or pause project.
3. Now Assist suggestion misleads on a P1 production window. Threshold: any single false-positive on production-critical change. Mitigation: read-only suggestions, no auto-approve, ever.

NOW ASSIST SURFACE
Now Assist for Creator (Flow Generation / Description Enrichment) + Now Assist Guardian sensitive-topic.

CHALLENGE
The plan assumes the 22% rejection rate is structural, not driven by 2-3 specific change types. Pull the last 6 months of rejected changes and bucket them. If 80% of rejections concentrate in 3 change types, the project is a 3-template change-form fix, not an AI agent. Stop the AI track and ship the templates.

NEXT
Hand off to Workflow Composer for the enrichment skill steps and Guardrails Reviewer for the production-window guardrail.
```

The CHALLENGE here is the sharpest of the three. It asks the user to validate that AI is the right tool before spending engineering. If 80% of rejections are 3 change types, the right answer is 3 templates, not a Now Assist agent. The advisor surfaces this. The advisor names the cheaper alternative. The advisor refuses to be the team's hammer.

### How the four blocks compress

You will notice the three examples each fit on a single page. That is intentional. If a four-block contract takes more than one page, the advisor is hedging or padding. The discipline is exactly: one page, four blocks, one challenge, one next.

This compression also makes the contract reusable. The same four blocks become the executive summary, the LinkedIn one-pager, the email to the CIO, the kickoff slide, the post-mortem reference. One artifact, many surfaces.

### What happens after the four blocks

Pierrondi EA frames. It does not finish. The hand-off map is fixed:

- Architecture trade-offs deeper -> ServiceNow Architect Coach (SADA) — produces three alternatives with cost / complexity / time-to-value.
- Stakeholder requirements unclear -> Business Analyst Agent — captures actors, inputs, outputs, acceptance criteria.
- Now Assist surface choice -> Now Assist Coach — picks the surface, names the credit cost, flags Guardian.
- Approval, audit, rollback specifics -> Guardrails Reviewer — locks the gates, the JSONL envelope, the rollback path.
- Compress prompt before publishing -> Token Saver Specialist — same behavior, fewer tokens.
- Workflow steps and tests -> Workflow Composer + ATF Test Generator — drafts the AI Agent Studio steps and the regression suite.

In a real engagement, two or three of these run in parallel after Pierrondi EA closes the four blocks. The kit's web app and CLI both expose the hand-off as a single click after the four-block output renders.

### What you do tomorrow

Pick one open ServiceNow proposal on your desk this week. The one that has been "in progress" for too long. Write the four-block contract for it, by hand. Use the templates above as scaffolding. Stop when you cannot fill a block.

The block you cannot fill is the block that has been blocking the proposal all along. Nine times out of ten, it is the value block — because the source data has not been collected. The other one out of ten, it is the deliverables block — because nobody has been named.

Either way, you have your next move. It is cheaper than the next deck.

### Try the kit

```bash
git clone https://github.com/paulopierrondi/servicenow-agent-army.git
cd servicenow-agent-army
pnpm install
pnpm validate
pnpm --filter web dev
```

Open `http://localhost:3000`, paste your problem, toggle "Run Pierrondi EA first." If you cannot fill the four blocks, the advisor will surface why.

Repo: [github.com/paulopierrondi/servicenow-agent-army](https://github.com/paulopierrondi/servicenow-agent-army)

### Read next

Part 3 of this series goes into the MCP server side — how to build dry-run + approval + audit + rollback that survives a CAB review. The four-block contract frames the work. The MCP guardrails make sure the work does not blow up in production.

### Disclosure

I work at ServiceNow as a Technical Account Executive in FSI Brazil. This kit is built and published in personal capacity. Not affiliated with or endorsed by ServiceNow, OpenAI, or Anthropic. Brand and product names belong to their respective owners.

## Posting checklist

- [ ] Banned-words sweep across all three examples.
- [ ] No client name, no real sys_id, no real instance URL.
- [ ] Cross-link to Part 1 in the body and Part 3 at the bottom (publish Part 3 first as a draft so the URL exists).
- [ ] Code blocks tested via copy-paste.
- [ ] Tags set (max 4).
- [ ] After publish, single LinkedIn share with the title + URL. No body re-paste.
