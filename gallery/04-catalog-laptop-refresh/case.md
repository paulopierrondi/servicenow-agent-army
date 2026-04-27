# Laptop refresh catalog item with Now Assist Catalog Search

## Domain
Platform / ITSM (Service Catalog)

## Persona
Catalog owner with input from a fulfillment lead and the regional logistics partner.

## Original problem (as user submitted)
> "Os funcionarios abrem incident pedindo notebook em vez de usar o
> catalogo. Catalogo tem 230 itens, naming inconsistente, busca ruim.
> Queremos um item de laptop refresh decente e que apareça quando alguem
> escreve 'preciso de notebook' no portal."

## Context
- Brazilian retail chain, 12k employees across 280 stores.
- Catalog has 230 items, ~30 percent without rich descriptions.
- Fulfillment partner: regional logistics provider, lead time 5 working days.
- Three laptop SKUs: standard, power-user, manager.
- Sub-prod available; ATF used for catalog regression in other items.

## Council deliberation summary
- Business Analyst Agent caught the real problem: incidents-as-requests pattern. Request alone does not fix it; catalog hygiene plus search relevance does.
- Catalog Designer ran the duplicate-item check first per its guardrail. Found two stale laptop items from 2023 to retire.
- Catalog Designer designed dependent variables (role, store size, peripheral selection) using UI Policies, never Client Scripts.
- Workflow Composer designed the fulfillment subflow with three Catalog Tasks: hardware allocation, imaging, shipping; explicit dependencies, not "see attached".
- ATF Test Generator produced regression coverage for the variable matrix and the dependency chain. Failure of the suite blocks merge.

## Outcome
- Target: 25 percent shift from incident-as-request to catalog submission within 60 days.
- Target: SLA breach rate below 5 percent on the new item.
- Target: zero regressions on adjacent items after deployment, validated by ATF.
- Acceptance: Now Assist Catalog Search ranking the new item in top 3 for "preciso de notebook" and equivalent intents in pt-BR.

## Anti-pattern flagged
docs/best-practices/itsm.md §Service Catalog: "Catalog item without
consistent variables breaks fulfillment reporting." Reused the existing
`cmn_department` variable set rather than a new free-text department
field.
