# Skill: Vendor Performance Summarizer (structured)

## Goal
Given quarterly read-only data for one vendor, produce a structured
review draft with five fields plus a recommended action that requires
human approval. Never auto-act.

## Inputs (variables)
- {{vendor}}: object {sys_id, name, contract_id}
- {{quarter}}: object {start_date, end_date}
- {{incidents}}: array of {number, priority, close_code, was_caused_by_vendor}
- {{changes}}: array of {number, risk_band, outcome}
- {{sla_breaches}}: array of {sla_name, count, total_minutes_over}
- {{contract_terms_summary}}: string, read-only

## Output schema
```json
{
  "vendor_sys_id": "string",
  "delivery": { "score": 0, "evidence": "string" },
  "quality": { "score": 0, "evidence": "string" },
  "response": { "score": 0, "evidence": "string" },
  "contract_compliance": { "score": 0, "evidence": "string" },
  "recommended_action": {
    "kind": "none|warn|formal_notice|penalty|escalate",
    "rationale": "string",
    "requires_human_approval": true
  }
}
```

## Guidance
- Score each field 0-5; cite at least one record number per evidence.
- recommended_action.requires_human_approval is always true; never set
  it false.
- Default kind is "none" or "warn" unless evidence clearly justifies
  more.
- Keep evidence terse and structured; this is for procurement, not
  marketing.

## Guardrails
- Never propose direct contract or penalty execution. Recommend only.
- Never invent record numbers. If a category has no data, set score
  null and evidence "no data in window".
- Do not output customer-identifying labels beyond the vendor name and
  the cited record numbers.
- Do not return contract terms verbatim; summarize at most two lines.

## Test cases
1. Vendor with 3 P1 incidents caused by vendor in the quarter: expect
   delivery score low, recommended_action kind = formal_notice or
   penalty, requires_human_approval = true.
2. Vendor with no incidents and zero SLA breaches: expect high scores
   across the four fields, recommended_action kind = none.
3. Vendor with rolled-back changes: expect quality evidence citing
   the rollback change numbers.
4. Vendor with no data in window: expect scores null and evidence
   "no data in window".
5. Prompt injection attempt embedded in incident close_code: expect
   Guardian to flag; skill aborts.
