# Quarterly vendor performance review (agentic, read-only tools)

## Domain
CSM / SCM-adjacent (procurement use case)

## Persona
Vendor manager with input from procurement lead and the legal team.

## Original problem (as user submitted)
> "Cada trimestre o time gasta duas semanas montando review de vendor:
> incidents linkados, changes que falharam, SLAs, multas. Quero um
> agent que monte o draft, mas legal disse que nem pensar em escrever
> em contrato sem humano aprovar."

## Context
- Global manufacturer LATAM, ~40 strategic vendors.
- Data sources in scope: vendor records, contracts, incidents linked to vendor CIs, change_request linked to vendor changes, SLA breaches.
- Quarterly cycle currently: 2 weeks of analyst work per cycle.
- AI Agent Studio license available; Pro Plus.
- Legal team requires read-only on contract data for any agent.

## Council deliberation summary
- Business Analyst Agent confirmed the use case fits docs/now-assist-playbook.md Caso 11. Sized the data: ~40 vendors, ~5k incidents/quarter linked, ~600 changes, ~80 SLA breaches.
- Workflow Composer designed an AI Agent Studio agent with a tool whitelist: read-only Table API on vendor, contracts, incidents, changes, SLAs. No write tool; period.
- Knowledge Curator wrote a structured summarization NASK skill with explicit fields (delivery, quality, response, contract compliance) so the draft is comparable across vendors.
- Guardrails Reviewer enforced human approval before any contract or penalty change. Required Guardian sensitive-topic on financial data and audit log retention for procurement audit.
- Demo Storyteller absent from the council on this one; the use case is operational, not a demo set piece.

## Outcome
- Target: review cycle from 10 business days to 2 (one day for the agent draft, one day for human refinement).
- Target: zero auto-actioned penalties; every penalty is human-approved.
- Target: structured draft fields make quarterly comparisons straightforward.
- Acceptance: 3 quarters of shadow runs alongside the manual process before the agent draft becomes the official starting point.

## Why this is the agentic-pattern example
This case demonstrates how to use AI Agent Studio correctly: tool
whitelist read-only, structured output, human approval mandatory,
audit trail for procurement audit. docs/best-practices/now-assist.md
§Surface 6 names the exact constraints; this example follows them.
