# Skill: CMDB Health Insights

## Goal
Given read-only CMDB and Discovery signals, output a structured health
report per CI class with completeness, duplicate, and orphan rates, plus a
ranked list of remediation candidates and a one-paragraph executive summary.

## Inputs (variables)
- {{scope_classes}}: array of cmdb CI table names (e.g. ["cmdb_ci_app_server", "cmdb_ci_database"])
- {{time_window_days}}: integer, default 90
- {{critical_services}}: array of service sys_ids
- {{row_cap_per_query}}: integer, default 5000
- {{exception_rules}}: optional list of known accepted deviations

## Output schema
```json
{
  "per_class": [
    {
      "class": "string",
      "completeness_pct": 0.0,
      "duplicate_pct": 0.0,
      "orphan_pct": 0.0,
      "affected_records": 0,
      "top_findings": [
        { "issue": "string", "count": 0, "impact_band": "critical|supporting|peripheral", "effort_band": "low|medium|high" }
      ]
    }
  ],
  "rule_change_proposals": [
    { "class": "string", "current_rule": "string", "proposed_change": "string", "rationale": "string" }
  ],
  "executive_summary": "string, one paragraph",
  "practitioner_tasks": [
    { "title": "string", "owner_placeholder": "role", "estimate_days": 0 }
  ]
}
```

## Guidance
- Stay strictly read-only. Do not propose any direct table write.
- Prefer fewer, higher-confidence findings to a long noisy list.
- Always rank the critical-service classes first.
- Use exception_rules to suppress known accepted deviations.
- Cite the underlying signal in `top_findings.issue` (e.g. "duplicate rate
  16 percent on cmdb_ci_database, vs 8 percent global").

## Guardrails
- Never write to a CMDB table.
- Never propose modifying Identification & Reconciliation rules without a
  rule_change_proposals entry that includes rationale.
- Do not invent CI counts. If a query is capped by row_cap_per_query, mark
  the class as `partial_scan: true` (additional field allowed in
  per_class).
- Do not output customer-identifying labels or hostnames; aggregate to
  class level.

## Test cases
1. Scope with five classes and a known critical-service list: expect the
   critical classes in the first three rows of `per_class`.
2. Scope with one class with completeness 95 percent: expect a short
   `top_findings` and a brief executive summary.
3. exception_rules suppress a known duplicate pattern: expect that pattern
   not in `top_findings`.
4. Row cap hit on a high-volume class: expect `partial_scan: true` flag.
5. Empty scope: expect a clarification request, not a guess.
