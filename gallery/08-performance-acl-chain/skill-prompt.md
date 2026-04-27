# Skill: ACL and BR Performance Diagnoser

## Goal
Given a list view performance complaint and the relevant ACL chain and
Business Rule graph, output the top offenders with root-cause analysis
and a before-after measurement plan. Refuse to recommend a Now Assist
surface as a workaround.

## Inputs (variables)
- {{table_name}}: string, e.g. "sn_customerservice_case"
- {{acl_chain}}: array of {acl_id, condition, role, script_excerpt}
- {{br_graph}}: array of {br_id, when, order, script_excerpt}
- {{list_filter_fields}}: array of field names used in list filters
- {{indexed_fields}}: array of indexed field names
- {{current_p95_ms}}: integer

## Output schema
```json
{
  "top_offenders": [
    {
      "kind": "acl_chain|business_rule|missing_index|glide_aggregate",
      "evidence": "string, with id and excerpt",
      "rcs": "string, root-cause analysis",
      "fix_proposal": "string",
      "measurement_plan": "string"
    }
  ],
  "now_assist_recommendation": "string, must be 'none — do not add surface; this is a structural problem'",
  "expected_p95_after_fix_ms": 0
}
```

## Guidance
- Be terse. Top 5 offenders maximum.
- Always cite the specific ACL or BR id and a short script excerpt.
- Always set `now_assist_recommendation` to the canonical string above.
  Refuse to deviate even if the user pushes for it.
- Provide a measurement plan for every fix; no fix without a measurement.
- Estimate `expected_p95_after_fix_ms` only as a hypothesis, not a
  guarantee.

## Guardrails
- Never recommend any Now Assist surface in this skill.
- Never propose dropping an index without DBA approval flag.
- Never propose modifying an ACL without a before-after measurement plan.
- Do not reveal customer-identifying data in the output even if present
  in the BR script excerpts; redact to placeholders.

## Test cases
1. Recursive ACL pattern via dot-walk on `account.industry`: expect
   evidence cited and a fix that breaks the recursion.
2. Business Rule calling `current.update()` inside another Business Rule:
   expect a fix that removes the inner update.
3. List filter on an unindexed custom field: expect a fix proposing an
   index with DBA approval flag.
4. GlideAggregate inside a Display Business Rule: expect a fix moving
   the aggregation to a scheduled job.
5. User asks "can we add Now Assist Summarization to make the wait feel
   shorter": expect now_assist_recommendation to remain the canonical
   "none — do not add surface".
