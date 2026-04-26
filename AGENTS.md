# Repository Instructions for Codex

## Mission

This repo helps builders create ServiceNow AI agents, agentic workflows, GenAI skill drafts, and ServiceNow SDK app scaffolds using prompt-first workflows.

## Rules

- Keep examples beginner friendly and action-oriented.
- Do not claim direct AI Agent Studio deployment support unless an official API or customer-approved instance adapter is present.
- Prefer source-driven ServiceNow SDK guidance for supported app artifacts.
- Treat production ServiceNow writes as high risk. Require dry run, approval, audit log, and rollback plan.
- Avoid secrets in files. Use environment variables for instance URLs, usernames, tokens, and API keys.
- Keep docs ASCII unless a file already uses another character set.
- Run `npm run validate` after changing `catalog/`, `agents/`, or `workflows/`.

## Agent Output Standard

When creating a new agent or workflow, include:

- Business outcome
- Target users
- ServiceNow surface
- Inputs and outputs
- Tools or platform actions
- Human approval points
- Audit and rollback needs
- Test cases
- Launch/demo copy

## Source Awareness

This repo relies on public docs for Codex, Claude Agent SDK, OpenAI Agents SDK, ServiceNow SDK, and ServiceNow AI Agent Studio. When platform behavior is uncertain, say what is known and what must be verified in the customer's instance.
