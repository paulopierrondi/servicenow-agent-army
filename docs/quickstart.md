# Quickstart

## 1. Validate the starter kit

```bash
npm run validate
```

The validator checks that catalog entries point to real agent and workflow files.

## 2. Pick a business outcome

Use one sentence:

```text
Reduce manual triage for password reset incidents by drafting a resolution plan, checking policy, and routing risky cases to a human.
```

## 3. Run the factory prompt

In Codex or Claude, ask:

```text
Use the servicenow-agent-factory skill. Create a beginner-friendly ServiceNow AI Agent Studio package for this outcome:

<paste outcome>

Include agents, workflow steps, inputs, outputs, guardrails, tests, and launch copy.
```

## 4. Review with specialists

Ask for:

```text
Review this with the CTA Agent, Enterprise Architect Agent, Guardrails Reviewer, and Token Saver Specialist. Return only changes that materially improve safety, clarity, or implementation readiness.
```

## 5. Move to ServiceNow

Default path:

- Create the AI agent and agentic workflow in AI Agent Studio.
- Keep the generated spec as the design record.
- Use ServiceNow SDK only for supported app artifacts and source-driven metadata.
- Test in sub-production first.

## 6. Create a new agent in this repo

```bash
npm run new:agent -- --id knowledge-curator --name "Knowledge Curator Agent" --role "Finds and structures reusable ServiceNow knowledge" --mission "Convert scattered SME notes into agent-ready knowledge snippets and test cases"
```

Then run:

```bash
npm run validate
```
