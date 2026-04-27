# Now Assist hook — Vendor performance review (agentic)

## Surface
AI Agent Studio agent with a read-only Table API tool whitelist, plus a
NASK summarization skill that produces structured output. Human approval
mandatory before any contract or penalty change. No auto-action under any
condition.

Why this surface: docs/now-assist-playbook.md Caso 11 names the vendor
performance review as the canonical example of a workflow that benefits
from agentic orchestration. docs/best-practices/now-assist.md §Surface 6
lists the constraints (tool whitelist, audit log, owner) that this design
follows.

## Configuration minima
- AI Agent Studio agent with explicit tool whitelist on vendor,
  ast_contract, incident, change_request, task_sla. No write tools.
- NASK summarization skill with strict structured output (five fields
  plus recommended_action).
- Now Assist Guardian: prompt-injection on; sensitive-topic for
  financial data.
- Owner of record: named vendor manager (CPF and email).
- Audit log retention 13 months for procurement audit.
- Three quarters of shadow runs alongside the manual process before the
  agent draft becomes the official starting point.

## ROI estimate vs in-house solution

| Lever | AI Agent Studio approach | DIY (analyst spreadsheets) |
| --- | --- | --- |
| Cycle time | 1 day for draft + 1 day for human refinement | 10 business days per quarter |
| Comparability | Structured fields make quarter-over-quarter analysis trivial | Free-form spreadsheets vary by analyst |
| Audit posture | Captured, retrievable | Spreadsheet-bound |
| Risk | Read-only by design; human approval required | Low risk but slow |
| Cost | Now Assist credits + agent maintenance | Recurring analyst time |

Numbers are working hypotheses based on docs/now-assist-playbook.md Caso
11 and the agentic constraints in docs/best-practices/now-assist.md
§Surface 6. Not a contractual SLA.

## When NOT to use Now Assist here
- Under 10 strategic vendors. Volume too low to justify the agent cost
  and shadow-run cycles.
- Procurement team that will not enforce human approval. Without that
  gate, this design is unsafe.
- Contracts not represented as data in the platform. The agent grounds
  on data; contracts in PDFs only need NASK 7.0+ Document Intelligence
  first, which is a separate prerequisite.
- Mixed-tenant scenarios without ACL boundaries. Cross-tenant read in
  procurement is a contractual breach risk in most enterprise contexts.

## Cross-references
- docs/now-assist-playbook.md Caso 11
- docs/best-practices/now-assist.md §Surface 6 — AI Agents
- docs/sada-framework.md §Pilar 4: Governance, sensitivity Critical
