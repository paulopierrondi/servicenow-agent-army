# servicenow-army (CLI)

Public CLI for the [ServiceNow Agent Army](../..). Run the advisory council on a ServiceNow problem, scaffold agents and workflows, and validate the catalog from a single binary.

Stack: Node 22 LTS + Citty + Zod + tsup. ESM only. ASCII output. No telemetry.

## Install

```bash
# one-shot via npx (no global install)
npx servicenow-army diagnose "CMDB health is degrading" --domain ITOM

# or local in a clone of the repo
pnpm --filter servicenow-army build
node apps/cli/dist/cli.js agent list
```

Once published to npm:

```bash
npm i -g servicenow-army
servicenow-army --help
```

## Commands

```
servicenow-army <command> [options]

  diagnose <problem>      Run the advisory council on a ServiceNow problem
  agent new <args>        Scaffold a new agent (wraps scripts/new-agent.mjs)
  agent list              List the 19 advisors with role and triggers
  workflow new <args>     Scaffold a new workflow JSON
  workflow validate       Run scripts/validate-catalog.mjs
  deploy --dry-run        (Stub) Use packages/mcp-write for real writes
  gallery push            (Stub) Submit to public gallery (PR-only today)
  version                 Print version
  help                    Show help
```

Global flags: `--no-color`, `--verbose`, `--json` (where supported).

## Examples

### Diagnose a problem

```bash
servicenow-army diagnose "incident triage queue overflowing" --domain ITSM
```

Prints:

- Council membership (top advisors per triggers)
- Agent spec (id, mission, guardrails, outputs)
- Workflow steps (advisor handoffs + approval gate)
- Skill prompt (`.claude/skills/<id>/SKILL.md` body)
- SDK scaffold (`now-sdk fluent generate ai-agent ...`)
- Now Assist hook (surface, family, Guardian)

Pipe-friendly:

```bash
servicenow-army diagnose "B2C case deflection" --domain CSM --json | jq .agentSpec
```

### List the army

```bash
servicenow-army agent list
servicenow-army agent list --json | jq '.[].id'
```

### Scaffold a new agent

```bash
servicenow-army agent new \
  --id risk-officer-agent \
  --name "Risk Officer Agent" \
  --role "Maps regulated workflows to FSI guardrails." \
  --mission "Ensure every prod write path has a documented control owner."
```

Wraps `scripts/new-agent.mjs` and re-runs `validate-catalog.mjs` automatically.

### Scaffold a new workflow

```bash
servicenow-army workflow new \
  --id case-deflection-coach \
  --name "Case Deflection Coach" \
  --surface "AI Agent Studio + Now Assist for CSM" \
  --trigger "New B2C case lands in queue" \
  --agents "csm-specialist,workflow-composer,guardrails-reviewer"
```

### Validate

```bash
servicenow-army workflow validate
```

### Deploy (stub)

```bash
servicenow-army deploy --dry-run
```

The CLI does not own production write paths. Real writes go through `packages/mcp-write` with the dry-run -> approval -> audit -> rollback flow defined in [ADR-002](../../docs/adr/ADR-002-skill-tool-contract.md).

### Gallery (stub)

```bash
servicenow-army gallery push
```

Gallery API is not live. Submit anonymized artifacts via PR under `marketing/gallery/`.

## Output modes

- Default: ASCII tables, ANSI colors, sectioned text.
- `--no-color` or `NO_COLOR=1`: monochrome.
- `--json`: machine-readable JSON only on stdout (logs go to stderr).

## Development

```bash
cd apps/cli
pnpm install
pnpm dev -- diagnose "test" --domain ITSM   # runs via tsx, no build
pnpm build                                   # bundles to dist/cli.js
node dist/cli.js --help
```

Source layout:

```
apps/cli/
  src/
    index.ts                  # citty root + subcommands
    commands/
      diagnose.ts
      agent-new.ts
      agent-list.ts
      workflow-new.ts
      workflow-validate.ts
      deploy.ts                # stub
      gallery-push.ts          # stub
    lib/
      catalog.ts               # loads catalog/agents.json + workflows.json
      deliberate-mock.ts       # deterministic council mock (web app shares)
      output.ts                # color, table, section, spinner
      paths.ts                 # repo root resolver
    types/
      agent.ts
  tsup.config.ts
  tsconfig.json
```

## Restrictions

- The CLI is read-mostly. Only `agent new` and `workflow new` write to disk - inside the repo.
- No production ServiceNow writes are wired. The `deploy` command is intentionally a stub.
- ASCII output only - compatible with Brazilian and EN terminals, no emojis.

## License

MIT
