# Yokohama to Zurich upgrade plan with regression coverage

## Domain
Platform (Family upgrade)

## Persona
Upgrade lead with input from the platform owner, ITSM lead, and risk reviewer.

## Original problem (as user submitted)
> "Estamos em Yokohama. Ja avaliamos Zurich e a familia tras mudanca de
> Guardian e do Now Assist Change Risk. O auditor pediu plano de
> regressao escrito. Quero usar Now Assist for Code para acelerar mas o
> risco quer ATF formal."

## Context
- Tier-1 Brazilian bank, Yokohama family currently in production.
- Three Now Assist surfaces active: Resolution Suggestion, Change Risk, Q&A on HR portal.
- ~20 custom apps across two scopes; one scoped, one global (legacy).
- Sub-prod refresh weekly; prod-equivalent volume.
- Risk team requires written rollback path and a tested rollback rehearsal.

## Council deliberation summary
- Upgrade Advisor refused to enter planning without a written rollback. Cited the SADA anti-pattern: "Migracao Yokohama > Zurich sem regression test do agente".
- ATF Test Generator scoped a regression suite covering the three active Now Assist surfaces and the top 30 business processes. Added an LLM-as-judge harness to detect Guardian behavior changes (new sensitive-topic defaults in Zurich).
- Workflow Composer staged the upgrade: sub-prod first, regression run, then a clone window for cutover, then 7-day monitoring before declaring done.
- Enterprise Architect Agent flagged the global-scope legacy app as the highest deprecation risk. Demanded a deprecation calendar review before starting.
- Now Assist for Code was authorized as a developer accelerator during the upgrade work, but with a hard rule: no AI-generated code merged without ATF gating and senior code review.

## Outcome
- Target: zero P1 regressions in the first two weeks post-cutover.
- Target: rollback rehearsal completed once in sub-prod.
- Target: Now Assist surfaces behavior delta documented and signed off by risk before cutover.
- Acceptance: ATF green on the regression suite; LLM-as-judge harness within tolerance bands.

## Regulatory note
Audit retrieval rehearsal repeated post-upgrade to confirm the
sn_aia_execution_* schema did not change in a way that breaks BACEN
24-hour retrieval.
