# Incident triage with Now Assist for ITSM (FSI Brazil)

## Domain
ITSM

## Persona
Service desk analyst (Tier 1) with manager oversight in a tier-1 Brazilian bank.

## Original problem (as user submitted)
> "Recebemos 800 incidents por dia. O tier 1 demora 7 minutos em media para
> classificar e atribuir. Queremos usar Now Assist mas a area de risco trava
> qualquer coisa que toque dado de cliente. Resolver?"

## Context
- Volume: ~800 incidents/day, ~50 percent from internet banking and PIX channels.
- KB: ~1,400 articles, mixed quality, ~30 percent without resolved-by tag.
- Categories: 14 top-level, 92 sub-categories — within OOTB Resolution Suggestion comfort.
- Regulatory: BACEN Resolucao 4.893; LGPD on customer-facing channels.
- Sub-prod: full clone available; Guardian Pro Plus license confirmed.

## Council deliberation summary
- Business Analyst Agent split the request into Resolution Suggestion (KB-grounded, faster ROI) and Incident Summarization (hand-off between tiers).
- ITSM Specialist confirmed that the OOTB domain skill fits the volume; no NASK custom skill warranted.
- CTA Agent set the platform boundary: Now Assist domain skill + KB tagging, no schema extension. Cited the docs/best-practices/itsm.md anti-pattern of activating Now Assist on a noisy KB.
- Now Assist Coach mapped the surface to Now Assist for ITSM and required Guardian sensitive-topic filter for any incident tagged with PII or credit data. Required cite-source on every suggestion.
- Guardrails Reviewer pushed back on auto-resolution: any suggestion touching a credit-related incident requires manual approval before close. Audit log validated against BACEN 24-hour retrieval requirement.

## Outcome
- Time-to-assignment p95 target: 40 percent reduction within 90 days, measured on incidents that change assignment_group at least once.
- AHT target: 15 percent reduction in 90 days; secondary metric, not primary.
- Adoption gate: rolled out to 30 percent of analysts first; full rollout only after a two-week qualitative review with the service desk lead.
- Cost gate: monthly Now Assist credit budget configured with alarm at 80 percent. Without the budget the program does not pass design review.

## Acceptance signal
- Resolution Suggestion top-3 reviewed monthly on a stratified sample. If precision drops below 70 percent, KB hygiene goes back to top of backlog before any further surface activation.
