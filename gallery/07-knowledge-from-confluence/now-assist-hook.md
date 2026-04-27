# Now Assist hook — KB ingestion and grounded Q&A

## Surface
ServiceNow KB authoring with chunking and SME citation; Now Assist Q&A
activated only on the curated scope after a gold-set precision check.
One-shot Confluence export via Integration Hub; no real-time sync.

Why this surface: docs/best-practices/now-assist.md §Surface 1 names the
right grounding model. The cited anti-pattern of activating Q&A on a
noisy KB is the binding constraint for this design.

## Configuration minima
- Confluence export staged in a sub-prod scope; not available to Q&A.
- Triage pass with SME ownership mapping; no SME means retire.
- Default ACL private; group or public-read with written rationale only.
- Now Assist Guardian: prompt-injection, offensiveness baseline;
  sensitive-topic if HR-adjacent topics are in scope.
- Gold-set precision check on a 50-question reference set in sub-prod
  before promoting the curated scope to prod.

## ROI estimate vs in-house solution

| Lever | Curated KB + Now Assist Q&A | DIY (Confluence search + custom widget) |
| --- | --- | --- |
| Time to first value | 8-12 weeks (triage is the bottleneck, not the tech) | 16-20 weeks |
| Hallucination risk | Lower (curated scope, SME citation) | Higher (search returns stale content) |
| Upgrade path | Family-aligned | Custom widget breaks on portal upgrades |
| Maintenance | SME-owned per article | Centralized but no ownership |

Numbers are working hypotheses based on docs/best-practices/now-assist.md
and docs/now-assist-playbook.md Caso 2. Not a contractual SLA.

## When NOT to use Now Assist here
- KB scope under 80 articles. Manual FAQ wins.
- Triage not finished. Skipping triage is the cited expensive mistake.
- SME availability under 50 percent of the keep list. Without owners,
  Q&A degrades within a quarter.
- Real-time sync requested. Real-time propagates Confluence noise into
  the KB; refuse and pursue a one-shot model with periodic refresh.

## Cross-references
- docs/best-practices/now-assist.md §Surface 1
- docs/now-assist-playbook.md Caso 2
- docs/sada-framework.md §Pilar 1: Data Fabric and §Pilar 2: Agent
  Ownership
