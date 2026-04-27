# Quarterly CMDB health and remediation plan

## Domain
ITOM and Platform

## Persona
Platform owner with input from CMDB owner and an enterprise architect.

## Original problem (as user submitted)
> "Nosso CMDB tem 80 mil CIs, completeness em 62 por cento, duplicates em
> alguns CI types passam de 15 por cento. Cada trimestre o time tenta um
> mutirao manual e o numero nao melhora. Como tirar um plano realista sem
> gerar dois meses de bagunca em prod?"

## Context
- Global manufacturer LATAM, hybrid cloud (AWS, Azure) plus three on-prem DCs.
- Discovery in place but pattern coverage is partial; horizontal still on for legacy.
- Identification rules last reviewed 18 months ago.
- Sub-prod clone refreshed monthly; representative for read-only analysis.
- Constraint: no production writes during the analysis cycle.

## Council deliberation summary
- Business Analyst Agent translated the request into three measurable KPIs: completeness, duplicate rate, orphan rate. Demanded targets per CI class, not a global average that hides poor classes.
- CTA Agent flagged that fixing a CMDB without revising Identification & Reconciliation rules first is the cited anti-pattern.
- Enterprise Architect Agent broke the work into read-only assessment plus a write phase governed by change control. Imposed cross-class review before any rule change.
- ITOM Specialist mapped the work to the CMDB Health Dashboard plus Discovery and Service Mapping diagnostics. Recommended Now Assist Discovery insights only after a clean baseline.
- Workflow Composer designed the agentic workflow with all writes routed through Flow Designer and approval, never direct writes from the agent.

## Outcome
- Completeness: 62 to 80 percent in two quarters.
- Duplicate rate: 25 percent reduction in two quarters.
- Orphan rate: targeted by class, not a global number.
- Hard constraint: zero CMDB writes from the agent. Writes go through Flow Designer with approval.
- Acceptance: a quarterly review board signs off on the remediation plan and a follow-up review happens 30 days after each rule change.

## Anti-pattern to avoid
Activating Now Assist for ITOM on top of a polluted CMDB. Cited in
docs/best-practices/itom.md and docs/sada-framework.md. AI on bad data
produces confident bad recommendations.
