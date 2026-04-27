# KB ingestion from legacy Confluence with grounded Q&A

## Domain
Platform (Knowledge Management)

## Persona
Knowledge manager with input from SMEs across Plataforma, ITSM, ITOM, and HR.

## Original problem (as user submitted)
> "Temos 1200 paginas de Confluence, metade sem dono, metade duplicada,
> usuario nao acha nada. Quero migrar pra KB do ServiceNow e ligar Now
> Assist Q&A. Por onde comeco?"

## Context
- Global manufacturer LATAM, Confluence used as the de facto KB for 6 years.
- ~1200 pages estimated; ~30 percent stale beyond 18 months without edits.
- ACL in Confluence loose; many pages public-read across the org.
- ServiceNow KB exists but underused (~280 articles).
- Sub-prod available; SME availability is the binding constraint.

## Council deliberation summary
- Knowledge Curator refused to migrate everything. Insisted on triage: keep, merge, retire. Cited the cited anti-pattern of activating Q&A on a noisy KB.
- Integration Mapper proposed a one-shot Confluence export plus a manual mapping step. Rejected a real-time sync because it would propagate Confluence garbage into the KB.
- Now Assist Coach mapped the surface to Now Assist Q&A on the curated KB scope only; rejected the idea of running Q&A across the full migrated set.
- Guardrails Reviewer required SME citation on every imported article and an ACL recommendation per article (default-private until justified).

## Outcome
- Phase 1: triage. Keep ~250, merge ~300 into ~80, retire ~570.
- Phase 2: import the kept and merged articles with chunking and metadata; SME citation on every article.
- Phase 3: activate Now Assist Q&A on the curated scope.
- Target: 250 articles published with SME citation in 60 days.
- Target: Q&A precision above 85 percent on a 50-question gold set in sub-prod.

## Anti-pattern flagged
docs/best-practices/now-assist.md §Surface 1 cites "KB com info
conflitante / desatualizada — alucinacao garantida". This design refuses
to ship Q&A before triage is complete.
