# Now Assist hook — AIOps noise reduction

## Surface
Now Assist for AIOps (anomaly detection plus alert correlation
summarization), staged after a Phase 1 cleanup of Event Rules and a 3-month
clean baseline. The Now Assist activation is phase 3, not phase 1.

Why this surface: docs/best-practices/itom.md §Event Management identifies
Now Assist for AIOps as the right surface only after a 3-month clean
baseline and Service Mapping coverage on critical services.
docs/now-assist-playbook.md Caso 5 makes the same call.

## Configuration minima
- Event Rules cleanup pass with redundant rules retired.
- Event source whitelist with health-check probes; sources without health
  checks quarantined.
- Service Mapping coverage at least 70 percent on critical services
  before Phase 3.
- Exclusion windows machine-readable: month-end, payroll, BACEN reporting,
  Black Friday for retail tenants.
- Now Assist Guardian baseline; sensitive-topic active if any alert can
  carry PII (rare in event data, but defaults are ON).
- AI Control Tower event recorded at activation.

## ROI estimate vs in-house solution

| Lever | Now Assist for AIOps | DIY (Splunk or Datadog correlation) |
| --- | --- | --- |
| Time to first value | 4-5 months total (cleanup + baseline + activation) | 4-6 months with custom correlation engineering |
| ServiceNow context | Native; alerts, CIs, incidents in one place | Cross-tool hand-off, fragile |
| Upgrade path | Family-aligned | Custom, breaks each major tool upgrade |
| Cost | Now Assist credits + ServiceNow license | Duplicate license + integration FTE |

Numbers are working hypotheses based on docs/best-practices/itom.md and
docs/now-assist-playbook.md Caso 5. Not a contractual SLA.

## When NOT to use Now Assist here
- Service Mapping below 50 percent coverage. Anomaly detection without
  topology is statistically interesting but operationally noisy.
- Event Rules baseline under three months.
- Environment with high seasonality and no exclusion-window calendar.
  Anomalies will fire on every payroll day and every month-end.
- Single-data-center NOC with only legacy monitoring. The cost-benefit
  does not justify the credit burn.

## Cross-references
- docs/best-practices/itom.md §Event Management
- docs/now-assist-playbook.md Caso 5
- docs/sada-framework.md anti-pattern 6 (credit burn) and §Pilar 1 Data
  Fabric
