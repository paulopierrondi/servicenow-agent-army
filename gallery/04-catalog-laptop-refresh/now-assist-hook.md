# Now Assist hook — Laptop refresh with Catalog Search

## Surface
Now Assist Catalog Search on the portal entry surface; the catalog item
itself is OOTB Service Catalog with a Flow Designer subflow for
fulfillment. ATF for regression on the variable matrix.

Why this surface: docs/best-practices/itsm.md §Service Catalog calls out
Catalog Search as the right surface when a catalog has more than 100
items and naming heterogeneity is high. Both true here.
docs/now-assist-playbook.md Caso 3 confirms.

## Configuration minima
- Now Assist Catalog Search activated; license confirmed before design
  review.
- Catalog hygiene pass on the laptop items: retire the two stale 2023
  variants before publishing the new one. Cited anti-pattern: "Catalog
  Search without category curation suggests Reset Password for 'I need a
  laptop'."
- Item description rich (not just title), with intent variants documented
  in the description field to feed semantic search.
- Categories curated to under 20 top-level. Laptop refresh sits under End
  User Computing.
- ACL review: catalog item visible only to active employees, not
  contractors unless flagged by HR.
- ATF regression suite as a merge gate.

## ROI estimate vs in-house solution

| Lever | Now Assist Catalog Search | DIY (custom portal widget with tags) |
| --- | --- | --- |
| Time to first value | 3-4 weeks (item + search activation) | 8-12 weeks (widget + tag taxonomy) |
| Maintenance | Description-driven; no manual tag taxonomy | Recurring tag curation effort |
| Upgrade path | Family-aligned | Custom widget breaks on portal upgrades |
| Effect on incident-as-request volume (working hypothesis) | 25 percent reduction in 60 days | Comparable but slower ramp |

Numbers are working hypotheses based on
docs/best-practices/itsm.md §Service Catalog and
docs/now-assist-playbook.md Caso 3. Not a contractual SLA.

## When NOT to use Now Assist here
- Catalog under 50 items. Manual browse and a clean homepage will
  outperform AI search.
- Catalog descriptions that are stubs ("Computer Refresh Item v3").
  Search needs text to ground on; fix the descriptions first.
- Highly multilingual catalogs without curated translations. AI search
  on auto-translated descriptions confuses intent.

## Cross-references
- docs/best-practices/itsm.md §Service Catalog
- docs/now-assist-playbook.md Caso 3
- docs/best-practices/now-assist.md §Surface 1 — Now Assist Q&A and
  similar grounding rules apply
