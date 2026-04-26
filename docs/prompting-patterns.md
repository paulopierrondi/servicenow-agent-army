# Prompting Patterns

## Outcome First

```text
Business outcome:
Reduce manual incident triage for password reset tickets.

Constraints:
- No production writes.
- Use AI Agent Studio as the target configuration surface.
- Include human approval for account lockout or VIP users.
```

## Agent Contract

```text
Create an agent contract with:
- Name
- Role
- Users
- Inputs
- Outputs
- Tools or platform capabilities
- What the agent must not do
- Escalation rules
- Tests
```

## Workflow Contract

```text
Create an agentic workflow with:
- Trigger
- Required variables
- Agent assignments
- Steps
- Approval points
- Failure states
- Audit notes
- Test cases
```

## Token Saver Pass

```text
Compress this spec for AI Agent Studio. Preserve only:
- outcome
- agent role
- required context
- decision rules
- steps
- guardrails
- tests

Remove repeated background, vague adjectives, and implementation details that do not affect behavior.
```
