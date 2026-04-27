# Now Assist hook — Yokohama to Zurich upgrade

## Surface
Now Assist for Code is authorized as a developer accelerator during the
upgrade work. ATF acts as the regression gate on the existing Now Assist
domain skills (Resolution Suggestion, Change Risk, Q&A on HR portal).
The LLM-as-judge harness is a custom NASK skill used internally by the
ATF Test Generator agent to evaluate Guardian behavior delta.

Why this combination: docs/best-practices/now-assist.md §Surface 3 and
§Surface 5 describe Now Assist for Code's right place (boilerplate
acceleration with senior code review) and the regression risk on Now
Assist domain skills across families. docs/sada-framework.md anti-pattern
10 names the upgrade-without-regression problem directly.

## Configuration minima
- Now Assist for Code license confirmed; usage scoped to upgrade work
  only.
- ATF suite covers the top 30 business processes plus the three active
  Now Assist surfaces; suite tagged with the upgrade release.
- LLM-as-judge harness rubric signed off by the risk reviewer.
- Rollback rehearsal completed in sub-prod once with archived evidence.
- Audit retrieval rehearsal scheduled post-upgrade.
- 7-day post-cutover monitoring window with PA dashboards.

## ROI estimate vs in-house solution

| Lever | This plan | DIY (manual regression with smoke tests only) |
| --- | --- | --- |
| Coverage | Top 30 processes + 3 Now Assist surfaces | Smoke tests only |
| Detection of Guardian behavior delta | LLM-as-judge harness | None; discovered in production |
| Rollback confidence | Rehearsed | Untested |
| Audit posture | Retrievable, signed off | Fragile |
| Now Assist for Code impact | Boilerplate cycle time reduced ~50 percent | None |

Numbers are working hypotheses based on
docs/best-practices/now-assist.md §Surface 3 and standard ServiceNow
upgrade practice. Not a contractual SLA.

## When NOT to use Now Assist here
- Now Assist for Code on security-critical code (authentication,
  encryption) without senior review. Cited anti-pattern.
- LLM-as-judge as the only validator. It supplements ATF; it does not
  replace it.
- Combining Guardian policy changes with the family upgrade. One change
  at a time; otherwise root-cause analysis on a regression becomes
  impossible.
- AI-generated code merged without ATF gating.

## Cross-references
- docs/best-practices/now-assist.md §Surface 3 (Code) and §Surface 5
  (domain skills)
- docs/sada-framework.md anti-pattern 10
- docs/best-practices/itsm.md §Change Management for the cutover change
