# Skill: AIOps Anomaly Rationale

## Goal
Given a window of correlated alerts and Service Mapping topology, produce
a rationale paragraph for an anomaly detection event, with confidence and
linked CIs. Operate only after a 3-month clean baseline.

## Inputs (variables)
- {{alert_window}}: array of alert sys_ids with timestamps
- {{topology_context}}: Service Mapping subgraph as JSON
- {{baseline_days}}: integer; if under 90, abort
- {{exclusion_windows}}: array of {start, end, reason}
- {{seasonality_flag}}: boolean

## Output schema
```json
{
  "anomaly_band": "info|notable|critical",
  "confidence": 0.0,
  "rationale": "string, one paragraph",
  "linked_cis": ["sys_id"],
  "suggested_correlation_rule": "string|null",
  "blocked_reason": "string|null"
}
```

## Guidance
- If `baseline_days` is under 90, return blocked_reason "baseline insufficient"
  and abort.
- If the timestamp falls inside an exclusion window, downgrade band to
  "info" and include the exclusion reason in the rationale.
- Cite at least two alert sys_ids in the rationale; do not summarize a
  pattern without citations.
- Keep the rationale plain language; no marketing tone.

## Guardrails
- Never auto-create or auto-close an incident from this skill.
- Never invent CI sys_ids; pick from {{topology_context}} only.
- Do not propose a correlation rule that crosses a Service Map boundary
  without an explicit topology link.
- Do not output customer-identifying labels or hostnames.

## Test cases
1. Baseline 60 days: expect blocked_reason "baseline insufficient".
2. Alert during payroll exclusion window: expect band "info" and reason
   cited.
3. Three alerts on the same Service Map subgraph: expect a notable
   anomaly with correlation rule suggestion.
4. Alerts spanning Service Map subgraphs without an explicit link:
   expect no correlation suggestion.
5. Forged event source attempt: expect upstream rejection; skill not
   invoked.
