# ACL chain performance fix without Now Assist

## Domain
Platform (Performance + ACL)

## Persona
Platform engineer with input from the operations lead and an enterprise architect.

## Original problem (as user submitted)
> "List view do case demora 7 segundos para carregar. O time pediu pra
> botar Now Assist pra 'sumarizar enquanto carrega'. Acho que e ACL
> bagunçada. Quem pode validar?"

## Context
- Tier-1 Brazilian bank, ~200 concurrent CSM agents.
- Case table extended with 14 custom fields over 3 years; not all indexed.
- ACL chain on `case` table includes 9 Read ACLs and 3 chained Business Rules.
- Sub-prod available with prod-equivalent volume.
- Performance complaint persistent across two upgrades.

## Council deliberation summary
- Performance Tuner ran read-only diagnostics with strict before-after metrics. Identified the top 5 offenders: recursive ACL evaluation on `account.industry`, a chained Business Rule calling `current.update()` inside another Business Rule, two unindexed custom fields used in list filters, and a GlideAggregate inside a Display Business Rule.
- Enterprise Architect Agent agreed: this is a structural fix, not an AI use case. Adding a summarization on top of a slow list view does not make the list view faster; it adds credit cost on top of latency.
- ServiceNow Architect Coach (SADA) framed three alternatives: (a) fix the offenders, (b) shard custom fields into a related table, (c) layer Now Assist for CSM Case Summarization on top to reduce perceived latency. Selected (a) on cost and pure ROI; (b) backlog; (c) rejected as anti-pattern.
- Council refused to add a Now Assist surface to compensate for a structural problem. Cited docs/best-practices/now-assist.md anti-pattern: "AI on top of broken platform produces credit burn without value".

## Outcome
- Target: list-view p95 below 1.2 seconds after fix, validated with before-after metrics on prod-equivalent sub-prod data.
- Target: zero Now Assist credits spent on this surface.
- Acceptance: 7-day post-fix monitoring with PA dashboards showing stable latency before declaring success.

## Why this is in the gallery
This is the gallery example that says "no Now Assist". The agent army is
not a product pusher; it should call out the times when AI is the wrong
answer. A council that always recommends Now Assist is a council you
cannot trust.
