# Handoff to AE/SE — Now Assist POC

> Internal doc filled by Paulo when a case clears stage 4 of the follow-up funnel and a Now Assist POC is the next step. The AE picks this up cold; assume zero prior context. One page maximum. Lives in private notes, not in the public repo.

## Top-of-page summary (one paragraph, 4 sentences max)

`<Account name>` (`<segment>`) wants to move `<outcome metric, current state -> target state, 90 days>` worth approximately `<value figure BRL/yr or USD/yr>`. The Pierrondi EA discovery on `<date>` closed the four-block contract: outcome locked, value sourced from `<source>`, three deliverables drafted, three risks logged with thresholds. Recommended next step: `<POC scope, e.g. 4-week Now Assist for ITSM POC on Resolution Suggestions skill>`. Decision-maker `<name>` confirmed and reachable; champion `<name>` actively pushing.

## Four-block contract (Pierrondi EA format)

**OUTCOME (90 days)**
`<one metric, one direction, one number>`

**VALUE**
`<currency figure with stated trade-off and source>`
Cost-of-build: `<engineering estimate>`
Cost-of-run: `<Now Assist credit estimate per year>`

**DELIVERABLES**
1. `<deliverable, owner role, by W+x>`
2. `<deliverable, owner role, by W+x>`
3. `<deliverable, owner role, by W+x>`

**RISKS**
1. `<risk, threshold, mitigation>`
2. `<risk, threshold, mitigation>`
3. `<risk, threshold, mitigation>`

## Conversation state

- Decision-maker identified: <yes / no — name, role>
- Decision-maker reachability: <direct / via champion / quarterly only>
- Champion identified: <yes / no — name, role>
- Timeline (likely case): <e.g. 12 weeks to POC kickoff>
- Top blocker right now: <one item, one line>
- Now Assist contract status: <Pro Plus active / Pro active / on roadmap / out of contract>
- LGPD/DPO sign-off needed: <yes/no — owner: name>
- Procurement gate: <yes/no — when, who>

## Proposed next step (one of three)

- [ ] **POC scoping call** with AE + SE + customer (60 min). Goal: convert the four-block into a POC SOW.
- [ ] **Technical deep-dive** with SE only (90 min). Goal: validate ServiceNow surface fit, integration points, ATF coverage plan.
- [ ] **Pricing call** with AE only (30 min). Goal: align Now Assist credit allocation and contract motion.

If unsure, default to POC scoping call. The other two options branch from it.

## Repo materials referenced

The customer has seen these. The AE should at least skim them before the next call.

- Pierrondi EA card: `agents/pierrondi-enterprise-architect.md`
- Positioning brief: `docs/pierrondi-ea-positioning.md`
- Matching gallery case: `gallery/<NN-case-id>/` — pick the closest fit
- Matching agent specs (if any): `agents/<id>.md` for each agent referenced
- Workflow specs (if any): `workflows/<id>.json`
- ATF / governance: `docs/governance.md`
- Now Assist surface fit: `docs/now-assist-playbook.md`
- One-pager sent to customer: `<link to private one-pager>`

## Pending from prospect

Things the customer agreed to provide. The AE should not push the next call until these land.

- [ ] Confirmation of Now Assist Pro Plus availability (or path to acquire)
- [ ] PDI / sandbox environment access for the POC
- [ ] DPO / LGPD sign-off path confirmed
- [ ] Last 12 months volume data on the outcome metric (to validate the value figure)
- [ ] Named owner per deliverable (no team ownership)
- [ ] Architecture review board calendar slot, if applicable

## Pending from ServiceNow side

Things the AE/SE owns from this point.

- [ ] POC SOW drafted within `<date, typically 10 business days>`
- [ ] Credit allocation modeled and shared with customer
- [ ] SE assigned and briefed
- [ ] Internal pricing approval if non-standard
- [ ] Mutual action plan (MAP) drafted with customer

## Architect-on-call (Paulo)

Paulo stays on as architect-on-call after handoff. Specific availability:

- Reviews POC SOW before customer sign-off (1 cycle, 24h turnaround).
- Joins the POC kickoff call (30 min).
- Available for 1 architect office-hour per week during the POC.
- Does not lead commercial conversations after handoff.

## Risks / things the AE should challenge

These are the parts of the case Pierrondi EA flagged as soft:

1. `<one risk specific to this case, e.g. value figure depends on volume staying flat at 18k/yr>`
2. `<one risk, e.g. champion is new in role, watch for org change>`
3. `<one risk, e.g. credit burn estimate uses 0.8 invocations/ticket; if real ratio is 1.2, costs jump>`

## Stop / pause conditions

The AE pauses or kills the POC motion if any of these become true:

- Decision-maker leaves or is reorganized.
- Now Assist Pro Plus cannot be contracted within 90 days.
- LGPD/DPO blocker has no resolution path.
- Value figure cannot be validated against source data within 14 days.

If two of these hit, document, park, and revisit at next quarterly review.

## Internal log

- Handoff sent on: <YYYY-MM-DD>
- AE acknowledged: <YYYY-MM-DD or pending>
- POC scoping call scheduled: <YYYY-MM-DD or pending>
- Linear `Follow-up` issue: <link>
- Linear `POC` issue (created on AE side): <link>

## After handoff — what Paulo does

- Stops outbound DMs to this contact about the case (AE owns the cadence now).
- Marks Linear funnel issue as `Handoff Now Assist POC`.
- Re-enters this account in the rotation only if a new signal arrives or if the AE escalates.
- Drops the case from `Inbound` weekly count and moves it to `Adoption` rolling.
