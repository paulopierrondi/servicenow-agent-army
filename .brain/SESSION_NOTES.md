# Session Notes To Sync Back To Obsidian

Repository: `/Users/paulopierrondi/Projects/servicenow-agent-army`

Use this file only when the local Obsidian vault is not accessible, especially from cloud runners.

Append durable context here:
- Decisions made
- Commands/tests run
- Files changed
- Risks discovered
- Deploy or release state
- Next steps

Do not store secrets here.

---

## 2026-06-27 — Wired a custom predictive routing + SLA-risk assist into incident-triage

**Why:** Paulo trained a real predictive model on the demo instance's resolved incidents (`/Projects/servicenow-ops-intelligence`). The incident-triage agent's `assignment_group` output was previously only OOTB Now Assist. Wired the model in as an **assist** — honest-architecture preserved (this repo stays prompt-first; runtime lives in the model repo).

**Files touched (spec/prompt only — no runtime added here):**
- `gallery/01-incident-triage-fsi/predictive-routing-assist.md` — NEW: tool contract, honest held-out eval (routing top-3 0.688 vs 0.431 baseline; top-1 0.546 NOT autonomous; SLA PR-AUC 0.582), guardrails, env-based wiring (no hard-coded local path), validity caveats.
- `gallery/01-incident-triage-fsi/agent-spec.json` — added the assist to `toolsOrPlatformActions` + `outputs` (SLA band) + a test.
- `gallery/01-incident-triage-fsi/workflow.json` — added a step (call the assist) + a failure-state (graceful fallback below 0.55 floor / unavailable).
- `gallery/01-incident-triage-fsi/skill-prompt.md` — assignment_group may be sourced/cross-checked from the assist; assist-only, floor 0.55.
- `workflows/incident-resolution-plan.json` — enriched step 4 text (no step-count change → validator stays green).

**Runtime tool:** `/Projects/servicenow-ops-intelligence/src/triage_tool.py` (reuses predict.py/featurize.py; CLI tested on 2 tickets). Emits `{assignment_group{value,confidence}, assignment_group_top3, sla_breach_risk{value,band}, low_confidence, auto_apply_allowed:false, guardrails}`.

**Validation:** `npm run validate` → Catalog valid: 28 agents, 4 workflows, 6 skills. All edited JSON well-formed.

**Honest framing kept:** assist only (never auto-route; top-1 not production-grade), confidence floor 0.55, PII-masked inputs (caller_id dropped at train), credit/PIX Guardian gate overrides. Not OOTB; not a deploy.

**Gates:** nothing committed/pushed (MIT public repo — push gated). Diffs reversible.

**Next:** (b) validate SLA head vs live `task_sla` + temporal holdout before any production claim; (c) executive "smart triage" demo for FSI pitch.
