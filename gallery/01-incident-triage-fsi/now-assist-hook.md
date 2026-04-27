# Now Assist hook — Incident triage with Now Assist for ITSM

## Surface
Now Assist for ITSM domain skills, specifically Resolution Suggestion and
Incident Summarization, surfaced inside Agent Workspace. No NASK custom
skill. No AI Agent Studio agent at this stage.

Why this surface: docs/best-practices/itsm.md §Incident Management lists
Resolution Suggestion as the right OOTB choice when volume is above 500
incidents per month and the KB has at least 200 relevant articles. Both
conditions are met here. docs/now-assist-playbook.md Caso 1 confirms the
mapping.

## Configuration minima
- Now Assist for ITSM activated; license confirmed before design review.
- KB tagged subset `itsm-resolution` with at least 200 curated articles.
  No "all KB" scope; that is the cited anti-pattern.
- Categories cleaned to 14 top-level, 92 sub-categories. Any new category
  goes through the Knowledge Curator for KB coverage check.
- Now Assist Guardian on with prompt-injection, offensiveness, and
  sensitive-topic for PII and credit data.
- Audit log retention validated for BACEN 24-hour retrieval.
- Credit budget cap monthly; alarm at 80 percent.

## ROI estimate vs in-house solution

| Lever | OOTB Now Assist | DIY (NASK skill or custom widget) |
| --- | --- | --- |
| Time to first value | 4-6 weeks once KB hygiene is done | 12-20 weeks |
| Upgrade path | Family-aligned, behavior validated by ServiceNow | Fragile, regression risk every release |
| Guardian integration | Native | Re-implement, BYOG path uncertain |
| Cost | Now Assist credits + license | Engineering FTE + license + ongoing maintenance |
| AHT impact (working hypothesis) | 15-20 percent in 90 days | Comparable but with longer ramp |

Numbers are working hypotheses grounded in docs/best-practices/itsm.md and
docs/now-assist-playbook.md. Defensible against the field references in
this repo. Not a contractual SLA.

## When NOT to use Now Assist here
- KB precision below 60 percent on a sample. Fix KB first; AI on noisy KB
  produces noisier suggestions.
- Categories above 30 top-level or with heavy free-text "Other" use. The
  cited Anti-pattern in docs/best-practices/itsm.md predicts hallucination.
- Credit-decision incidents that demand a hard rule with audit. Use a
  deterministic Flow with approval, not a generative suggestion.
- Sub-prod without Guardian active. The cited SADA anti-pattern is to test
  in sub-prod without Guardian and then discover prompt-injection in prod.

## Cross-references
- docs/best-practices/itsm.md §Incident Management
- docs/best-practices/now-assist.md §Surface 5 — Now Assist domain skills
- docs/now-assist-playbook.md Caso 1
- docs/sada-framework.md §Pilar 4: Governance
