# Security Policy

## Secrets

Do not commit:

- ServiceNow credentials
- OAuth tokens
- API keys
- Instance-specific secrets
- Exported production data

Use environment variables or local credential stores.

## ServiceNow Safety

Any workflow that can modify ServiceNow records must include:

- Non-production testing
- Dry-run preview
- Explicit human approval
- Audit log
- Rollback plan
- Post-change verification

## Reporting Issues

Open a GitHub issue for documentation or scaffold problems. Do not include secrets or customer data in public issues.
