# Skill: KB Triage and Draft Generator

## Goal
Given a Confluence page export and metadata, decide keep / merge / retire,
and produce a KB draft (when keep or merge) with chunking, metadata
block, and SME citation.

## Inputs (variables)
- {{page_html}}: string, the page content
- {{page_metadata}}: object {last_edit, author_email, view_count, space_key}
- {{sme_mapping}}: object {space_key: sme_email}
- {{stale_threshold_months}}: integer, default 18
- {{related_pages}}: array of {title, snippet, page_id} for merge candidates

## Output schema
```json
{
  "decision": "keep|merge|retire",
  "rationale": "string",
  "kb_draft": {
    "title": "string",
    "short_description": "string",
    "body_chunks": ["string"],
    "metadata_block": { "sme_email": "string", "source_page_id": "string", "topics": ["string"] },
    "acl_recommendation": "private|group|public-read"
  } ,
  "merge_targets": ["page_id"]
}
```

## Guidance
- If `last_edit` is older than `stale_threshold_months` and view_count
  is low, default to retire unless the SME mapping is explicit.
- If `related_pages` shows clear duplicates, set decision = merge and
  populate merge_targets.
- Chunk body to roughly 800-1200 characters per chunk; preserve heading
  structure.
- Default acl_recommendation to private. Only set group or public-read
  with a written rationale.
- Always include sme_email in metadata_block; never produce a draft
  without it.

## Guardrails
- Never set acl_recommendation = public-read without a rationale field
  populated.
- Never drop SME citation.
- Do not invent SME emails; if the mapping is missing, decision = retire
  and rationale = "no SME owner".
- Do not rewrite content beyond minor heading normalization; preserve
  the SME's voice and intent.
- Strip any embedded customer-identifying data (CPF, account numbers)
  from body_chunks; if found, decision = retire and rationale =
  "embedded PII".

## Test cases
1. Page edited 24 months ago, no SME mapping: expect decision = retire
   with rationale "no SME owner".
2. Three pages on the same topic with similar headings: expect
   decision = merge for one, merge_targets populated.
3. Page with embedded CPF in body: expect decision = retire with
   rationale "embedded PII".
4. Recently edited, clear SME, unique topic: expect decision = keep with
   acl_recommendation = group (department) by default.
5. Page asking for public release without rationale: expect
   acl_recommendation = private as default.
