# Change risk recommendation under BACEN constraints

## Domain
ITSM (Change Management) under FSI Brazil regulatory pressure

## Persona
Change manager with CAB members from Plataforma, Risco, and key business owners.

## Original problem (as user submitted)
> "CAB virou teatro. Aprovamos 90 normal changes por mes em 1 hora,
> ninguem discute risco real. Queremos Now Assist Change Risk mas o time de
> Risco quer entender o modelo, e eu nao posso auto-aprovar nada que toque
> sistema critico do BACEN."

## Context
- Tier-1 Brazilian bank, ~120 Normal changes per month plus ~250 Standard.
- Existing Risk Conditions exist but were last revised 14 months ago.
- BACEN reporting cycles, PIX maintenance windows, payroll dates already in change calendar.
- Sub-prod refresh weekly; 18 months of historical change records available.
- Risk team requires written model behavior, not "trust the box".

## Council deliberation summary
- Business Analyst Agent reframed the request: the CAB problem is a process problem first, not a model problem. Recommended decoupling Standard fast-track work from the Now Assist activation.
- ServiceNow Architect Coach (SADA) forced three alternatives on the table: (a) keep manual, (b) Now Assist Change Risk + manual override, (c) custom NASK skill on top of historical change data. Selected (b) for upgrade safety and field-tested ROI; (c) rejected on upgrade-path risk.
- Enterprise Architect Agent validated 18 months of clean history is sufficient for the model and demanded blackout windows be machine-readable, not text in a CAB invite.
- ITSM Specialist mapped the surface to Now Assist Change Risk Recommendation per docs/best-practices/itsm.md and docs/now-assist-playbook.md Caso 4.
- Guardrails Reviewer enforced: never auto-approve high-risk; manual override requires structured justification field; 2-3 CAB cycles with humans validating before trusting.

## Outcome
- Target: 30 percent reduction in CAB review time on Normal changes inside 90 days.
- Target: zero auto-approve for changes flagged high-risk by the model or by Risk Conditions.
- Target: manual-override rate below 15 percent. Above that means the model is wrong or the conditions are stale.
- Acceptance: 3 CAB cycles in shadow mode; full activation only after Risk team sign-off.

## Open question routed to backlog
What happens after Yokohama-to-Zurich upgrade for the Change Risk surface?
Tracked in gallery/09-upgrade-yokohama-zurich. This council assumed Yokohama
behavior at design time.
