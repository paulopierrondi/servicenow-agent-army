# Skill: Incident Triage Hint (FSI Brazil)

## Goal
Given a sanitized incident record from a tier-1 Brazilian bank, produce a
classification suggestion, an assignment-group hint, a top-3 KB list with
citations, and a one-paragraph summary. Block any auto-action on
credit-related incidents.

## Inputs (variables)
- {{short_description}}: string, max 240 chars, PII pre-masked client-side
- {{description}}: string, max 4000 chars, PII pre-masked client-side
- {{ci_class}}: string, e.g. cmdb_ci_app_server, optional
- {{caller_language}}: enum [pt-BR, en], default pt-BR
- {{kb_scope_tag}}: string, fixed to "itsm-resolution"
- {{guardian_flag}}: boolean, set upstream by PII or credit heuristic

## Output schema
```json
{
  "category": { "value": "string", "confidence": 0.0 },
  "subcategory": { "value": "string", "confidence": 0.0 },
  "assignment_group": { "value": "string", "confidence": 0.0 },
  "kb_top3": [
    { "sys_id": "string", "title": "string", "rationale": "string" }
  ],
  "summary": "string, one paragraph in {{caller_language}}",
  "blocked_reason": "string, only when guardian_flag triggers a block, else null"
}
```

## Guidance
- Stay grounded. If the KB scope returns nothing relevant, set kb_top3 to an
  empty array and return summary only.
- Cite the KB sys_id in `rationale`. Never paraphrase a KB article without a
  sys_id.
- Confidence below 0.55 should be reported but not auto-applied.
- Keep the summary plain language; no marketing or motivational tone.
- Use {{caller_language}} for the summary; metadata fields stay in English.

## Guardrails
- If `guardian_flag` is true, do not return any auto-action. Return
  `blocked_reason: "guardian sensitive topic"` and the structural fields
  with confidence forced to 0.
- Do not invent KB sys_id values. If unsure, omit the entry.
- Do not return personal data (CPF, account number, agency, full name) in
  any output field. If you detect such data in the input, report it via
  `blocked_reason: "pii leak detected upstream"`.
- Do not propose closing the incident. Closure is reserved for a separate
  Flow Designer step with approval.

## Test cases
1. PIX dispute with credit data: expect blocked_reason set, confidence 0,
   no auto-action proposal.
2. Empty short_description: expect single-field clarification request, not
   a guess.
3. Authentication failure on internet banking: expect category Authentication,
   assignment_group Identity Operations, and at least two KB citations.
4. Spanish-language description in error: expect graceful fallback to en,
   and a flag in `blocked_reason: "language outside scope"` if pt-BR/en not
   detected.
5. KB returns zero hits: expect empty kb_top3 array and a summary only.
