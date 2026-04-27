# Now Assist hook — Change Risk Recommendation under BACEN

## Surface
Now Assist Change Risk Recommendation surfaced inside the change form,
with a custom rationale panel that shows band, confidence, similar past
changes, and a structured override field.

Why this surface: docs/best-practices/itsm.md §Change Management names
this surface as the right choice when there are over 50 Normal changes
per month and at least 12 months of clean history. Both conditions met
here. docs/now-assist-playbook.md Caso 4 and the cited anti-pattern
"Change Risk overwritten manually without justification field" inform the
structured-override constraint.

## Configuration minima
- Now Assist Change Risk Recommendation activated; license confirmed
  before design review.
- Risk Conditions versioned and revised in the same update set as the
  surface activation.
- 18 months of historical change_request data with structured close codes
  and outcomes. Free-text outcomes excluded from training context.
- Blackout calendar machine-readable, including PIX maintenance windows
  and BACEN reporting cycles.
- Now Assist Guardian on with prompt-injection and offensiveness baseline;
  sensitive-topic active for any change touching customer-bound CIs.
- 3 CAB cycles in shadow mode before active.

## ROI estimate vs in-house solution

| Lever | Now Assist Change Risk | DIY (Risk Assessment Questionnaire only) |
| --- | --- | --- |
| Time to first value | 6-10 weeks (cleanup + 3 shadow cycles) | Already in place but stagnates |
| Adaptiveness | Learns from new history | Static questionnaire ages quickly |
| Audit | Retrievable per recommendation | Limited to questionnaire snapshot |
| CAB review-time impact | 25-35 percent reduction (working hypothesis) | None |
| Override rate visibility | First-class metric | Not measured |

Numbers are working hypotheses grounded in
docs/best-practices/itsm.md §Change Management and
docs/now-assist-playbook.md Caso 4. Not a contractual SLA.

## When NOT to use Now Assist here
- Under 30 Normal changes per month. Volume too low to justify cost and
  shadow cycles.
- History under 12 months or with widespread free-text outcomes.
- Risk team that will not accept a probabilistic recommendation. Force
  the conversation up front; do not deploy and discover this in
  production.
- Critical migrations (data center cutover, family upgrade) where every
  change is high-impact. Use a dedicated migration playbook, not the
  domain skill.

## Cross-references
- docs/best-practices/itsm.md §Change Management
- docs/now-assist-playbook.md Caso 4
- docs/sada-framework.md §Pilar 4: Governance, sensitivity Critical
