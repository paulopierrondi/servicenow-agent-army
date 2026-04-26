# Governance

## Production Write Policy

Generated agents must not perform production writes unless all controls are present:

- Named owner
- Business justification
- Approved change window
- Dry-run preview
- Record count estimate
- Explicit human confirmation
- Audit event
- Rollback strategy
- Post-change validation

## AI Agent Studio Review Checklist

- Does the workflow have a clear business outcome?
- Are the input variables explicit?
- Are steps phrased as instructions the LLM can follow?
- Are handoffs between agents clear?
- Are ACLs and discoverability rules defined?
- Does the workflow include tests?
- Is Now Assist Guardian or equivalent protection considered?
- Are prompt injection and data leakage risks addressed?

## ServiceNow SDK Review Checklist

- Is the target instance non-production?
- Is the app scoped correctly?
- Are SDK commands documented and reproducible?
- Are generated files committed?
- Is there a rollback or uninstall path?
- Are secrets excluded from git?

## Human-in-the-Loop Gates

Use approval gates for:

- Any data modification
- Any outbound notification to customers or executives
- Any workflow that assigns work to a group
- Any integration that calls an external system
- Any operation that can change CMDB, identity, finance, HR, or security records
