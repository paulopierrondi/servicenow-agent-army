# MEDDIC Light — Discovery Notes Template

> Copy-paste into CRM, Notion, or a private repo note. Filled by Pierrondi EA after every stage 3-4 conversation. Lives outside the public repo. Never commit a filled instance to git.

## How to use

- Fill during or right after the call. Stale notes are useless.
- Leave a field blank if not yet known. Do not fabricate.
- Each blank field is an open question for the next exchange.
- Mark `working hypothesis` next to any number not sourced from customer data.
- LGPD: never store names or quotes the contact did not authorize. Use role + first name only when in doubt.

---

## Account header

- Account name: <name>
- Industry / segment: <FSI / public / retail / other>
- Region: <BR / LATAM / other>
- ServiceNow segment: <enterprise / mid-market / commercial>
- Date of first contact: <YYYY-MM-DD>
- Date of last contact: <YYYY-MM-DD>
- Source signal: <LinkedIn comment / DM / repo star / community / event>
- Linear follow-up issue: <link>

---

## M — Metrics

The one outcome metric and the value figure. If both are blank, the case is not a case yet.

- Outcome metric (one number, one direction, 90 days): <e.g. p95 incident-to-assignment 7m -> 2m>
- Current-state value: <e.g. 7 minutes p95, sourced from PA dashboard W12-W14>
- Source of current-state value: <PA dashboard / customer estimate / hypothesis>
- Target value: <e.g. 2 minutes>
- Annualized BRL/USD value at target: <e.g. BRL 1.2M/yr saved at 18k incidents/yr>
- Cost-of-delay per quarter: <e.g. BRL 300k/quarter unrealized>
- Confidence: <high / medium / low / hypothesis>

---

## E — Economic buyer

The person who can sign the line item. Not the team. Not the influencer.

- Name: <name>
- Role: <e.g. CIO, head of platform, head of ITSM>
- Why they care: <one sentence linking the metric to their personal KPI>
- Reachability: <direct / via champion / not yet reachable>
- Decision authority confirmed: <yes / no / inferred>

---

## D — Decision criteria

3-5 criteria the customer will use to evaluate. Weight each.

| # | Criterion | Weight (1-5) | How we score today | Source |
| --- | --- | --- | --- | --- |
| 1 | <e.g. measurable outcome in 90 days> | 5 | <e.g. strong, four-block closes> | <call notes> |
| 2 | <e.g. LGPD compliance proven> | 5 | <e.g. requires Guardian setup> | <call notes> |
| 3 | <e.g. fit with existing CMDB> | 4 | <e.g. partial fit, integration hub OK> | <call notes> |
| 4 | <e.g. credit cost predictable> | 3 | <e.g. estimate within 10%> | <call notes> |
| 5 | <e.g. rollback in 24h> | 3 | <e.g. supported> | <governance doc> |

---

## D — Decision process

How the decision actually moves through the org.

- Stages: <e.g. internal architecture review -> CIO sign-off -> procurement -> security review>
- Timeline (best case): <e.g. 6 weeks>
- Timeline (likely case): <e.g. 12 weeks>
- Procurement gate: <yes/no>, when: <date or stage>
- Architecture review board: <yes/no>, when: <date or stage>
- Security / DPO sign-off: <yes/no>, owner: <name>
- Now Assist contract status: <Pro Plus active / Pro active / on roadmap / not in contract>
- Blocker most likely to derail: <one item>

---

## I — Identified pain

Quantified pain. Both financial and reputational. If pain is < 6 figures BRL/yr, the case is parked.

- Current pain (financial): <e.g. BRL 1.2M/yr in analyst time>
- Current pain (reputational): <e.g. customer NPS -8 in FSI segment>
- Current pain (regulatory): <e.g. BACEN audit risk on ticket SLA>
- Workarounds in place today: <one line>
- What happens if pain stays unsolved 90 more days: <one line>
- What happens if pain stays unsolved 12 more months: <one line>

---

## C — Champion

The internal person who actively wants this to happen. Not the buyer.

- Name: <name>
- Role: <e.g. ITSM lead, platform architect>
- Why they want this: <personal motivation, e.g. "wants to retire 2 legacy scripts">
- What we have given them: <e.g. one-pager, gallery case 01>
- What they need to sell internally: <e.g. cost estimate sheet, DPO sign-off note>
- Risk of losing the champion: <low / medium / high>

---

## Now Assist — surface, credits, guardrails

Specific to this funnel. Not classic MEDDIC.

- Surface fit: <Now Assist for ITSM / CSM / HR / Code / Discovery / Now Creator / AI Agent Studio>
- Credit budget hypothesis (BRL/yr): <e.g. 14k/yr at 18k incidents x 0.8 invocations>
- Credit cap proposed: <e.g. 3.5k/mo>
- Guardian considerations: <PII masking required / not required>, owner: <name>
- LGPD considerations: <DPO sign-off W+1 / not applicable>
- Rollback plan: <e.g. feature flag at workflow level, 24h rollback>
- ATF coverage planned: <yes/no, # of cases>

---

## Open questions (next ask)

Ordered list, top is the next message to send.

1. <e.g. "Confirm decision-maker name and accessibility window">
2. <e.g. "Pull last 12 months ticket volume to validate value figure">
3. <e.g. "Confirm Guardian PII masking can be configured by W+1">
4. <e.g. "Check Now Assist Pro Plus contract status for this BU">

## Next action

- Action: <one verb, one object, e.g. "send one-pager">
- Owner: <Paulo / champion / customer>
- Due: <date>
- Linear status: <stage>

## Risks (top 3)

| # | Risk | Threshold | Mitigation |
| --- | --- | --- | --- |
| 1 | <e.g. credit burn > 4k/mo> | <pause at 3.5k/mo> | <daily cap> |
| 2 | <e.g. champion leaves> | <champion role change> | <build second champion> |
| 3 | <e.g. LGPD blocker> | <DPO does not sign> | <pre-DPO discussion W+1> |

---

## Stop conditions

If two of these are true after stage 4, stop and revisit in 60 days:

- [ ] No outcome metric after two attempts.
- [ ] No economic buyer reachable in 90 days.
- [ ] Now Assist not in contract and not in active procurement.
- [ ] Pain figure < BRL 200k/yr.
- [ ] No champion or champion is on the way out.
