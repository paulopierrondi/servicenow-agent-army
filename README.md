# ServiceNow Agent Army

A prompt-first starter kit for creating ServiceNow AI agents, agentic workflows, GenAI skill drafts, and ServiceNow SDK app scaffolds with Codex and Claude Agent SDK.

This repo is for teams that want a practical "agent army" helping less experienced builders turn business intent into ServiceNow-ready artifacts: agent specs, workflow steps, skill prompts, governance reviews, and SDK starter apps.

Not affiliated with or endorsed by ServiceNow, OpenAI, or Anthropic.

## What This Is

ServiceNow Agent Army is a public playbook and scaffold. It gives your team:

- A catalog of specialist agents: CTA, Business Analyst, Enterprise Architect, Token Saver Specialist, Workflow Composer, ServiceNow SDK Builder, Guardrails Reviewer, and Demo Storyteller.
- Prompt packs for creating agents, workflows, GenAI skills, and governance reviews.
- Codex skills in `.agents/skills/` so Codex can reuse the workflow.
- Claude skills in `.claude/skills/` so Claude Agent SDK and Claude Code can discover the same playbooks from the filesystem.
- Starter workflow specs in `workflows/` for CMDB health, incident resolution, and request fulfillment.
- A ServiceNow SDK app template under `templates/servicenow-sdk-app/`.
- Lightweight validation scripts with no runtime dependency required.

## The Honest Architecture

The official ServiceNow SDK creates and develops apps locally in source code and uploads changes to an instance. AI Agent Studio is the official ServiceNow surface for creating, managing, and testing AI agents and agentic workflows.

As of April 26, 2026, the public docs I found do not confirm a stable public API for directly deploying AI Agent Studio records from code. This repo therefore uses a safe pattern:

1. Generate high-quality agent and workflow specs with prompts.
2. Review them with governance and architecture agents.
3. Use AI Agent Studio guided setup for the official create/test path.
4. Use ServiceNow SDK/Fluent for source-driven app artifacts and any supported metadata.
5. Add an instance-specific adapter only after your platform team confirms the target APIs/tables and roles.

## Quick Start

```bash
git clone https://github.com/paulopierrondi/servicenow-agent-army.git
cd servicenow-agent-army
npm run validate
```

Create a new local agent draft:

```bash
npm run new:agent -- --id ai-agent-studio-coach --name "AI Agent Studio Coach" --role "Guides beginners through AI Agent Studio setup" --mission "Turn a business outcome into a safe AI Agent Studio configuration plan"
```

Use in Codex:

```text
Use the servicenow-agent-factory skill to create an AI agent and agentic workflow for password reset triage. Keep it beginner friendly and include ServiceNow guardrails.
```

Use in Claude:

```text
Use the servicenow-agent-factory skill. Create a ServiceNow AI agent spec for a customer service case summarizer, then review it with the token saver specialist.
```

## Agent Army

| Agent | Job |
| --- | --- |
| CTA Agent | Converts executive intent into ServiceNow architecture decisions. |
| Business Analyst Agent | Turns stakeholder language into requirements, actors, inputs, and acceptance criteria. |
| Enterprise Architect Agent | Checks data model, integration, lifecycle, and governance fit. |
| Token Saver Specialist | Compresses context, removes prompt waste, and keeps agent specs focused. |
| ServiceNow SDK Builder | Produces source-driven app scaffolds and SDK command plans. |
| Workflow Composer | Designs AI Agent Studio workflow steps and agent handoffs. |
| Guardrails Reviewer | Reviews permissions, risk, auditability, and human-in-the-loop gates. |
| Demo Storyteller | Writes launch copy, enablement stories, and demo scripts. |

## Suggested Builder Flow

1. Business Analyst Agent captures the use case.
2. CTA Agent maps architecture and boundaries.
3. Enterprise Architect Agent checks data and integration fit.
4. Workflow Composer drafts AI Agent Studio steps.
5. ServiceNow SDK Builder creates source-driven artifacts where supported.
6. Guardrails Reviewer adds risk controls and approvals.
7. Token Saver Specialist tightens prompts and specs.
8. Demo Storyteller creates the launch narrative.

## Current Sources

See `docs/research-notes.md` for official links and the decisions behind this scaffold.

## License

MIT. See `LICENSE`.
