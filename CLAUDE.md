# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

Prompt-first starter kit for creating ServiceNow AI agents, AI Agent Studio agentic workflows, GenAI skill drafts, and ServiceNow SDK app scaffolds. There is no runtime application — the deliverables are markdown agent cards, JSON workflow specs, prompt packs, and skill files consumed by Codex and Claude Agent SDK / Claude Code.

## Commands

```bash
npm run validate                    # validate catalog/, agents/, workflows/, skills/ are consistent
npm run new:agent -- --id <id> --name "<Name>" --role "<Role>" --mission "<Mission>"
```

Run `npm run validate` after touching anything in `catalog/`, `agents/`, `workflows/`, or the skill directories. There are no tests, lint, or build steps — `validate-catalog.mjs` is the only gate.

## Architecture

Four layers, each a directory tree (see [docs/architecture.md](docs/architecture.md)):

1. **Prompt layer** — `agents/*.md` (agent cards), `workflows/*.json` (workflow specs), `prompts/*.md` (reusable prompt packs), `templates/` (JSON shapes for new agents/workflows).
2. **Assistant layer** — `.agents/skills/` (Codex-discoverable) and `.claude/skills/` (Claude-discoverable). Both contain the same `servicenow-agent-factory` and `token-saver-specialist` skill packs. **Keep them in sync** — the validator requires both copies to exist. `.claude/agents/` holds Claude subagent prompts (currently `cta-agent`, `business-analyst-agent`, `guardrails-reviewer`).
3. **ServiceNow layer** — AI Agent Studio is the deployment target for agents and agentic workflows; ServiceNow SDK/Fluent for source-driven app artifacts. The repo intentionally does not deploy to ServiceNow — see "Honest architecture" below.
4. **Governance layer** — `docs/governance.md` checklists, plus the Guardrails Reviewer agent.

### Catalog is the index

`catalog/agents.json` and `catalog/workflows.json` are the source of truth that indexes the markdown/JSON specs. Every entry's `path` field must resolve to a real file. For workflows, the catalog `steps` integer must equal the length of `spec.steps` in the referenced JSON. The standard flow when adding artifacts:

- **New agent:** create `agents/<id>.md` → append entry to `catalog/agents.json` → `npm run validate`. The `new:agent` script does this for you and stubs the markdown card.
- **New workflow:** create `workflows/<id>.json` (using `templates/workflow-spec.template.json`) → append to `catalog/workflows.json` with matching `steps` count → `npm run validate`.
- **New skill:** add it under both `.agents/skills/<name>/SKILL.md` and `.claude/skills/<name>/SKILL.md`, then update the `paths` array in [scripts/validate-catalog.mjs](scripts/validate-catalog.mjs).

### Honest architecture (load-bearing)

As of the README's stated date, no stable public API confirmed for deploying AI Agent Studio records from code. The repo's pattern: generate high-quality specs in this repo, review with the governance/architecture agents, then use AI Agent Studio guided setup (or ServiceNow SDK for supported source-driven artifacts) to land them. Do not write code that pretends to deploy directly — see [README.md](README.md) "The Honest Architecture".

## Constraints

- Do not invent ServiceNow AI Agent Studio APIs. When platform behavior is uncertain, state what is known vs. what must be verified in the customer's instance.
- AI Agent Studio guided setup is the default target for agent/workflow creation; ServiceNow SDK/Fluent for source-driven app artifacts.
- Any generated workflow that can modify production ServiceNow records must include all of: sub-prod testing, dry-run preview, explicit human approval, audit log, rollback plan, post-change verification (see [docs/governance.md](docs/governance.md) and [SECURITY.md](SECURITY.md)).
- Use the project skills in `.claude/skills/` when the user asks to create ServiceNow agents, workflows, SDK scaffolds, prompt packs, or token-optimized instructions.
- Keep deliverables concise and structured so a less experienced ServiceNow builder can follow them.
- Keep docs ASCII unless a file already uses another character set.
