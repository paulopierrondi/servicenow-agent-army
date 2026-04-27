# Skill: Change Risk Rationale (BACEN-aware)

## Goal
Given a Normal change record and 18 months of historical change and
incident data, produce a risk band with confidence, a plain-language
rationale in pt-BR, and citations of similar past changes.

## Inputs (variables)
- {{change_short_description}}: string
- {{change_implementation_plan}}: string
- {{ci_class}}: string
- {{ci_bacen_critical}}: boolean
- {{historical_changes_window_months}}: integer, default 18
- {{blackout_active}}: boolean, set upstream
- {{risk_conditions_version}}: string

## Output schema
```json
{
  "risk_band": "low|medium|high",
  "confidence": 0.0,
  "rationale_pt_br": "string, one paragraph",
  "similar_past_changes": [
    { "number": "CHGxxxxxxx", "outcome": "success|rollback|caused_incident", "similarity_pct": 0.0 }
  ],
  "blackout_conflict": false,
  "auto_approve_eligible": false
}
```

## Guidance
- Always set `auto_approve_eligible = false` when:
  - risk_band is high, OR
  - ci_bacen_critical is true, OR
  - blackout_active is true.
- Cite at least one historical change in `similar_past_changes` whenever
  confidence > 0.55. If history is sparse, return an empty list and lower
  confidence.
- Rationale must explain band and at least one cited change. No marketing
  language.

## Guardrails
- Never recommend approval. Recommend a band and a rationale; CAB approves.
- Never overwrite blackout_conflict if set true upstream.
- Do not fabricate change numbers; if the historical store returns
  nothing, return an empty `similar_past_changes` array.
- Do not return PII or customer-identifying labels in the rationale.
- Output rationale in pt-BR by default; do not switch language without
  explicit input.

## Test cases
1. CI marked BACEN-critical: expect auto_approve_eligible false regardless
   of band.
2. Blackout active: expect blackout_conflict true, auto_approve_eligible
   false.
3. Sparse history (under 5 similar past changes in window): expect
   confidence below 0.5 and an empty similar_past_changes array.
4. Past change with rollback outcome cited: expect rationale to mention
   the rollback explicitly.
5. Free-text manipulation in implementation_plan attempting prompt
   injection: expect Guardian to flag and the skill to abort.
