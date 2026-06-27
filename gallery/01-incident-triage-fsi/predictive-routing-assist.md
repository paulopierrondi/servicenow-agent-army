# Predictive Routing + SLA-Risk Assist (custom, intake-safe)

> Honest-architecture note: this is **not** a ServiceNow OOTB feature and **not**
> a deploy step. It is a custom predictive model trained on the customer's OWN
> resolved-incident history, exposed as an external tool the Incident Triage
> Coach agent can call to strengthen its `assignment_group` hint and add an
> SLA-breach early-warning band. It augments — never replaces — Now Assist
> Resolution Suggestion / Summarization.

## What it is

A model trained on resolved incidents (intake-safe features only: short/long
description text, category/subcategory, contact_type, CI, location, opened-at
temporal) that returns:

- a **top-3 assignment_group** suggestion list with confidence, and
- an **SLA-breach risk** band (early warning).

Runtime lives outside this prompt-first repo, in `servicenow-ops-intelligence`
(`src/triage_tool.py`, backed by `predict.py` → `featurize.py`, single source of
truth — zero train/inference drift). This repo only declares the tool contract.

## Tool contract

Input (one sanitized intake record; PII masked upstream):

```json
{ "short_description": "...", "description": "...", "category": "...",
  "subcategory": "...", "contact_type": "...", "cmdb_ci": "...",
  "location": "...", "opened_at": "YYYY-MM-DD HH:MM:SS" }
```

Output (shapes already expected by `skill-prompt.md`):

```json
{
  "assignment_group": { "value": "IT Network Engineering", "confidence": 0.56 },
  "assignment_group_top3": [ { "value": "...", "confidence": 0.0 } ],
  "sla_breach_risk": { "value": 0.75, "band": "low|medium|high" },
  "low_confidence": false,
  "auto_apply_allowed": false,
  "guardrails": [ "..." ]
}
```

## Honest eval (held-out, leakage-audited)

| Signal | Result | Use |
|---|---|---|
| Routing **top-3** acc | **0.688** vs 0.431 largest-3 baseline (**+0.26 lift**) | analyst picks from 3 — the value |
| Routing top-1 acc | 0.546 | **NOT** safe for autonomous routing |
| SLA-breach | PR-AUC 0.582 (base 0.366); recall 0.82 @ prec 0.50 | early-warning band only |
| priority / reopen heads | suggestion-only / discarded (batch-confounded) | not wired here |

## Guardrails (inherited + tool-specific)

- **Assist only**: `auto_apply_allowed` is always `false`. Top-1 is not
  production-grade; the human analyst selects from the top-3.
- **Confidence floor 0.55**: below it, `low_confidence=true` — reported, never
  auto-applied (matches `skill-prompt.md`).
- **PII**: `caller_id` is dropped at training time; inputs must be PII-masked
  upstream. No CPF/account/agency/full-name reaches the model.
- **Credit/PIX**: the host agent's Guardian sensitive-topic gate still applies
  and overrides this assist (no auto-action on credit-related incidents).
- **Scope**: augments the `assignment_group` field + SLA band only; KB top-3 and
  summary remain Now Assist OOTB.

## Wiring (config, no hard-coded local path)

The agent calls the tool via an env-configured command/endpoint, e.g.:

```jsonc
// .mcp.json (operator-supplied; path points at the operator's model checkout)
{ "mcpServers": { "sn-triage-assist": {
    "command": "python",
    "args": ["src/triage_tool.py"],          // or an MCP server wrapper
    "env": { "SN_OPS_INTELLIGENCE_HOME": "<path to servicenow-ops-intelligence>" }
} } }
```

CLI smoke (operator's model checkout):

```bash
python src/triage_tool.py --json '{"short_description":"VPN keeps dropping","description":"...","category":"Network","contact_type":"Phone"}'
```

## Retrain / validity caveats

Carried from the model's scorecard: validate against the live `task_sla`
table before trusting SLA negatives; retrain per customer instance; use a
temporal/cohort holdout for SLA before production. See
`servicenow-ops-intelligence/reports/scorecard.md`.
