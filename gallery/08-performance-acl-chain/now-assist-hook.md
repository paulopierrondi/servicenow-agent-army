# Now Assist hook — deliberately none

## Surface
None. This case is in the gallery to demonstrate when the council
refuses to add Now Assist.

The platform engineer's first instinct was to layer Now Assist Case
Summarization on the slow list view "to give the agent something to read
while it loads". The council rejected that path:

- Adding a generative surface on top of a structural latency problem
  burns Now Assist credits without fixing the root cause.
- Once the list view is fast, agents do not need a summarization on the
  list view at all; summarization is useful inside a single case during
  hand-off, not on a list.
- The cited anti-pattern in docs/best-practices/now-assist.md is exactly
  this: AI on top of a broken platform produces credit burn without
  business outcome.

## Configuration minima for the structural fix
- Read-only diagnostics on `sys_security_acl`, `sys_script` (Business
  Rules), and `sys_db_index`.
- Before-after p95 latency benchmarks on prod-equivalent sub-prod data.
- Per-fix update set with documented backout.
- 7-day post-fix monitoring window with PA dashboards before declaring
  success.

## ROI argument

| Lever | Structural fix | Add Now Assist Case Summarization on list view |
| --- | --- | --- |
| Time to value | 4-6 weeks | 2-3 weeks but no real fix |
| Cost | Engineering time, no Now Assist credits | Engineering time + recurring credit burn |
| Effect on p95 | Direct improvement | None |
| Effect on agent perception | Better, after fix | Distract from the underlying issue |
| Upgrade safety | Same as platform | Tied to Now Assist family behavior |

The structural fix is cheaper and faster on the metric the user cares
about (p95). Now Assist would feel like progress for two weeks and then
the bill arrives.

## When could Now Assist re-enter the picture
After p95 is below 1.2 seconds and stable for 30 days, the council can
revisit Now Assist for CSM Case Summarization on a per-case hand-off
flow. That is a different case in the gallery; not this one.

## Cross-references
- docs/best-practices/now-assist.md anti-patterns and §Surface 5 domain
  skills (when they fit, which is not here)
- docs/sada-framework.md anti-pattern 6: credit burn without budget
- docs/best-practices/itsm.md cross-process anti-pattern: customizing
  before fixing the foundation
