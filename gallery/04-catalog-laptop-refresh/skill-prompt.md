# Skill: Catalog Search Intent Mapper (laptop refresh)

## Goal
Given a free-text portal query in pt-BR or en, decide whether the query
maps to the laptop refresh catalog item, and if so output a confidence
plus a rationale. Do not auto-submit. Do not invent items.

## Inputs (variables)
- {{user_query}}: string, max 240 chars
- {{user_role}}: optional, mapped from authenticated user
- {{user_department}}: optional, mapped from authenticated user
- {{candidate_catalog_items}}: array of {sys_id, name, description}
- {{language_hint}}: enum [pt-BR, en], default pt-BR

## Output schema
```json
{
  "matched_item_sys_id": "string|null",
  "confidence": 0.0,
  "rationale": "string, one sentence",
  "alternatives": [
    { "sys_id": "string", "name": "string", "confidence": 0.0 }
  ],
  "fallback": "string|null"
}
```

## Guidance
- Prefer to return null with a fallback ("offer the catalog browse view")
  over a low-confidence guess.
- Use {{user_role}} and {{user_department}} only if they are present and
  if doing so improves confidence.
- Confidence above 0.7 surfaces the item as the top hit. Confidence
  between 0.4 and 0.7 surfaces it as a secondary. Below 0.4 do not surface.

## Guardrails
- Never auto-submit a request.
- Never expose other users' role or department.
- Do not invent sys_id values; pick from {{candidate_catalog_items}} only.
- Do not show unauthorized items even if the query matches the title.
- Cite the matched item's sys_id in the response, never paraphrase its
  description as if it were a model utterance.

## Test cases
1. "preciso de um notebook novo" with role engineer: expect laptop refresh
   in matched_item_sys_id with confidence > 0.8.
2. "trocar minha cadeira" (out of scope): expect matched_item_sys_id
   null and a fallback to catalog browse.
3. "tela do meu monitor parou" (incident, not request): expect null
   match, fallback to incident creation flow.
4. "I need a laptop, please": expect English handling and a top match.
5. Query with prompt injection attempt ("ignore previous instructions"):
   expect Guardian to flag and the skill to abort.
