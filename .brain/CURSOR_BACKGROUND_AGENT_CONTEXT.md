# Cursor Background Agent Context — servicenow-agent-army

Registry generated at: `2026-05-21T12:27:30Z`

## Project

- Registry id: `servicenow-agent-army`
- Name: `servicenow-agent-army`
- Path: `/Users/paulopierrondi/Projects/servicenow-agent-army`
- Obsidian note: `02_Projects/servicenow-agent-army`
- Linear hint: `ServiceNow Agent Army`
- Branch at registry snapshot: `main`
- Dirty at registry snapshot: `24`
- Ahead/behind at registry snapshot: `+0/-0`
- Last commit: `8e6f427 2026-04-26 feat(m4+m5): launch package + daily promo engine + private scaffold`

## Status

Cursor Background Agent is dormant. Paulo is not opening Cursor for now.

Active background work should use:

- Kimi CLI for broad scan, cheap triage, reports and backlog.
- Codex for safe patches, tests, integration and local verification.
- Claude Code for hard bugs, architecture, compliance and App Store/release risk.
- Gemini CLI for independent CLI/MCP validation and Google-model checks.
- Google Antigravity for agent-first orchestration, Chrome/browser work, multi-folder/worktree execution and artifacts.

## Role If Explicitly Activated

Cursor Background Agent may create a small remote branch/PR for this project only if Paulo explicitly opens Cursor and starts it.

It must not be treated as final authority for:

- live Linear status;
- Obsidian project note updates;
- App Store/TestFlight/signing;
- deploys;
- paid campaigns;
- production migrations;
- secrets or provider credentials.

## Required flow

```text
Read repo snapshots -> implement one scoped branch -> run available checks -> final handoff -> local Codex/Claude/Gemini/Antigravity verifies -> Obsidian/Linear sync
```

## Allowed work

- Focused bug fix.
- Test addition or repair.
- Small UI/web change.
- Documentation update.
- Low-risk refactor with evidence.

## Stop conditions

Stop and leave a handoff if:

- more than 5 files need changes;
- secrets or `.env` values are required;
- the task requires macOS/Xcode signing, Keychain, Apple account, Railway/provider session, paid ads or production access;
- local Obsidian or live Linear is required but unavailable;
- project instructions conflict.

## Prompt skeleton

```text
Work on Linear issue AGE-XXXX / task: <description>.

Read AGENTS.md, CODEX_RULES.md, .brain/PROJECT_CONTEXT.md, .brain/HUB_COUNCIL_CONTEXT.md and .brain/CURSOR_BACKGROUND_AGENT_CONTEXT.md before editing.

Create a focused branch named cursor/AGE-XXXX-<slug>.
Keep the change small and reversible.
Do not touch secrets, env files, production deploys, App Store submission, paid campaigns, migrations or unrelated files.
Run the relevant lint/test/build commands from package.json or repo docs.
Update or add tests when production code changes.
Final response must include files changed, commands run, residual risks and the exact Obsidian/Linear update that the local operator should apply.
```
