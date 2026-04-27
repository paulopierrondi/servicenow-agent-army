# Now Assist hook — Quarterly CMDB health assessment

## Surface
AI Agent Studio agent with a read-only Table API tool whitelist; ATF for
regression coverage on rule-change events. Now Assist Discovery insights
are explicitly NOT activated in the first cycle.

Why this surface: docs/best-practices/itom.md §Discovery and the cited
SADA principle that "Source of truth is the Now Platform, not the prompt"
demand the agent ground every finding on a queryable signal. AI Agent
Studio gives a tool whitelist and structured tool calls. Now Assist
Discovery insights ride on top of a clean baseline; the field rule is to
turn it on after three months of clean data, not before.

## Configuration minima
- Tool whitelist: read-only Table API on cmdb_ci, cmdb_ci_service,
  cmdb_rel_ci, cmdb_health_metric (or equivalent).
- Row cap per query (default 5000) with pagination.
- Read-only credentials provisioned via service account scoped to the CMDB
  domain.
- Audit log retention 13 months (one full quarterly cycle plus rollback).
- Quarterly review board scheduled with Platform + ITOM + Risk + Critical
  Service Owners.
- ATF suite covering Identification & Reconciliation rules pre and post
  change.

## ROI estimate vs in-house solution

| Lever | AI Agent Studio approach | DIY (manual mutirao + spreadsheets) |
| --- | --- | --- |
| Cycle time | ~2 weeks for assessment + ~4 weeks for change rollout | 8-12 weeks per quarter, recurring |
| Reproducibility | Re-run on demand, identical scope | Re-run requires re-collecting signals manually |
| Audit trail | Captured in sn_aia_execution_* and review board minutes | Spreadsheet-bound, fragile |
| Cost | Now Assist credits + read-only service account | Recurring FTE time across quarters |
| Risk | Read-only by design | High: spreadsheets often diverge from CMDB |

Numbers above are working hypotheses based on docs/best-practices/itom.md
field references and docs/sada-framework.md governance demands. Not a
contractual SLA.

## When NOT to use Now Assist here
- Single-class deep dive with under 5,000 CIs. A power user with PA
  indicators is faster and cheaper.
- CMDB with no Identification & Reconciliation rules at all. Fix the rules
  first; AI on missing rules just confirms chaos.
- Production cycle without an active quarterly review board. The agent
  produces output nobody owns; cited anti-pattern.

## Cross-references
- docs/best-practices/itom.md §Discovery and §Service Mapping
- docs/sada-framework.md §Pilar 1: Data Fabric and §Pilar 4: Governance
- docs/best-practices/now-assist.md §Surface 6 — AI Agents
