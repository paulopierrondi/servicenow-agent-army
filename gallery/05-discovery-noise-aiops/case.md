# Event Management noise reduction with Now Assist for AIOps

## Domain
ITOM (Event Management + AIOps)

## Persona
NOC operator with input from the ITOM architect and the platform owner.

## Original problem (as user submitted)
> "50 mil alerts por dia, todos viram incident. O time desativou o filtro
> client-side e perde alerta legitimo no meio. Quero ativar Now Assist
> AIOps mas o gerente disse que IA em cima de ruido eh pior. Quem ta
> certo?"

## Context
- Global manufacturer LATAM, hybrid cloud + three on-prem DCs.
- Service Mapping coverage on critical services around 70 percent.
- Event sources: ~30 distinct, including legacy on-prem monitoring + cloud-native.
- Existing Event Rules: ~80, last reviewed 9 months ago.
- Sub-prod available with synthetic event injectors.

## Council deliberation summary
- ITOM Specialist agreed with the manager: AI on a noisy baseline produces noisier dashboards. Cited the docs/best-practices/itom.md anti-pattern "Anomaly detection on metric with seasonality without baseline adjustment".
- Performance Tuner ran a read-only analysis on the existing Event Rules. Found 22 rules redundant or superseded. Found 5 event sources without a health check.
- Workflow Composer staged the work: phase 1 cleanup, phase 2 baseline, phase 3 Now Assist AIOps activation. Refused to skip phase 1 and 2.
- Guardrails Reviewer demanded source whitelist and a health-check ping on event ingestion to prevent forged events. Cited the SADA principle that source of truth is the platform, not the prompt.

## Outcome
- Phase 1: 22 redundant Event Rules retired. Result: alert volume drop expected ~20 percent before any AI is touched.
- Phase 2: 3-month clean baseline before Now Assist AIOps is activated.
- Phase 3: target alert-to-incident noise ratio under 30 percent within 90 days post-activation.
- Acceptance: NOC operator declares the dashboard usable in a structured weekly review for at least 4 consecutive weeks before the manager signs off on production.

## Anti-pattern flagged
"Activating AIOps before cleanup" is the cited expensive mistake. The
council refused to compress the timeline.
