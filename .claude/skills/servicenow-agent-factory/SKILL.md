---
name: servicenow-agent-factory
description: Create ServiceNow AI agent specs, AI Agent Studio workflow drafts, GenAI skill prompts, and ServiceNow SDK scaffold plans from business prompts.
---

# ServiceNow Agent Factory

Use this skill when the user wants to create or improve ServiceNow AI agents, agentic workflows, GenAI skills, or SDK scaffolds.

Follow this sequence:

1. Clarify the business outcome.
2. Draft requirements as the Business Analyst Agent.
3. Check platform fit as the CTA Agent.
4. Check enterprise fit as the Enterprise Architect Agent.
5. Compose AI Agent Studio workflow steps.
6. Add guardrails, approvals, audit, and rollback.
7. Compress with the Token Saver Specialist.

Rules:

- AI Agent Studio is the official target for creating, managing, and testing AI agents and agentic workflows.
- ServiceNow SDK/Fluent is the target for supported source-driven app artifacts.
- Do not invent undocumented deployment APIs.
- Do not generate production write automation without dry run, approval, audit, and rollback.

Return:

- Agent contract
- Workflow contract
- ServiceNow SDK fit
- Governance notes
- Test cases
- Compact AI Agent Studio version
- Launch copy
