# Codex Examples — PR draft

> Target repo: https://github.com/openai/codex (or `openai/codex-examples` if the examples repo is split out at PR time). Audience: OpenAI Codex DevRel, Codex CLI users.

## Suggested code path

`examples/skills/servicenow-agent-factory/`

Match the existing skills examples convention. If the repo organizes by category (mcp/, skills/, subagents/), pick `skills/`.

## PR title

Add `servicenow-agent-factory` skill example: ServiceNow AI agent + workflow + ATF generation under `.agents/skills/`

## PR description (paste into the GitHub PR body)

This PR adds a non-trivial Codex CLI skill example that generates ServiceNow AI Agent Studio specs, agentic workflow JSON, ATF test outlines, and Now Assist Skill Kit prompts from a single business prompt.

### What it shows

- A complete `.agents/skills/<skill>/SKILL.md` with frontmatter, progressive disclosure structure, and an `agents/openai.yaml` policy file using `allow_implicit_invocation: false`.
- The skill is bilingual at the source level — same SKILL.md content lives at `.claude/skills/` and `.agents/skills/` to demonstrate how a single skill can target both Codex CLI and Claude Code without forking content.
- A subagent workflow that fans out to specialist advisors after the headliner agent (`Pierrondi EA`) completes a four-block contract (outcome, value, deliverables, risks).
- Two MCP servers wired into the Codex MCP config — one read-only by construction, one with dry-run + signed approval token + append-only audit + per-record rollback.

### Why it fits the Codex examples

Most Codex skill examples in the wild are simple file-manipulation or web-fetch wrappers. This one demonstrates:

1. Cross-vendor skill authoring (`.agents/skills/` and `.claude/skills/` from the same source) — useful pattern Codex users keep asking for.
2. A subagent fan-out pattern that respects `agents.max_depth = 1` and only spawns when the orchestrator explicitly asks.
3. Use of `agents/openai.yaml` policy controls (`allow_implicit_invocation: false`) so the skill is never auto-invoked, only called by name.
4. MCP integration via `[mcp_servers.<name>]` config in `.codex/config.toml` covering both stdio and Streamable HTTP transports.

### Files referenced

Full reference repo (MIT) at `https://github.com/paulopierrondi/servicenow-agent-army`. Reviewer-friendly entry points:

- [`.agents/skills/servicenow-agent-factory/SKILL.md`](https://github.com/paulopierrondi/servicenow-agent-army/tree/main/.agents/skills/servicenow-agent-factory) — Codex-side skill.
- [`agents/pierrondi-enterprise-architect.md`](https://github.com/paulopierrondi/servicenow-agent-army/blob/main/agents/pierrondi-enterprise-architect.md) — headliner advisor.
- [`catalog/agents.json`](https://github.com/paulopierrondi/servicenow-agent-army/blob/main/catalog/agents.json) — 20-advisor catalog.
- [`packages/mcp-readonly/`](https://github.com/paulopierrondi/servicenow-agent-army/tree/main/packages/mcp-readonly) — read-only MCP.
- [`packages/mcp-write/`](https://github.com/paulopierrondi/servicenow-agent-army/tree/main/packages/mcp-write) — write-side MCP.
- [`docs/research-2026-04.md`](https://github.com/paulopierrondi/servicenow-agent-army/blob/main/docs/research-2026-04.md) — capability matrix vs Claude Agent SDK / Codex CLI / Fluent.

### Example layout (proposed)

```
examples/skills/servicenow-agent-factory/
  SKILL.md                    # progressive disclosure entry point
  agents/
    openai.yaml               # policy + display metadata
  scripts/
    validate-output.mjs       # checks the four-block contract is present
  references/
    advisors.md               # short index of the 20-advisor council
  fixtures/
    sample-case.md            # FSI Brazil incident triage prompt
  README.md                   # how to run, including .codex/config.toml MCP block
```

### Run instructions (for the example README)

```bash
cd codex-examples/examples/skills/servicenow-agent-factory
codex run "Use the servicenow-agent-factory skill. Build the four-block Pierrondi EA response for fixtures/sample-case.md."
```

For the MCP servers (optional, demonstrates the chain):

```toml
# .codex/config.toml
[mcp_servers.sn-readonly]
command = "node"
args = ["packages/mcp-readonly/dist/index.js"]
transport = "stdio"

[mcp_servers.sn-write]
command = "node"
args = ["packages/mcp-write/dist/index.js"]
transport = "stdio"
disabled_tools = []  # for safety, leave write tools opt-in via approval token
```

### Why Codex readers will care

- `.agents/skills/` discovery shape used as documented (progressive disclosure, capped at ~2% context window).
- Skill source can be reused 1:1 across Claude Code and Codex CLI — practical pattern for teams that have not standardized on one client.
- The sub-agent fan-out is explicit; no recursion, no auto-spawning. Plays nicely with `agents.max_depth = 1` default.
- The MCP write server's chain (dry-run + approval + audit + rollback) is a useful reference for any Codex user building integrations into regulated systems, not just ServiceNow.

### Open to feedback

If reviewers prefer:

- Trimming the catalog to 5 advisors instead of 20 for example readability.
- Removing the MCP write server from the example, keeping only read-only (lower setup friction).
- Stripping Portuguese-language fixtures.

Happy to adjust.

### Disclosure

Built and published in personal capacity by the author (Paulo Pierrondi). Not affiliated with or endorsed by ServiceNow, OpenAI, or Anthropic. Brand and product names belong to their respective owners.

## Self-check before opening the PR

- [ ] Open an issue first ("Proposed example: servicenow-agent-factory skill") to gauge fit.
- [ ] Read CONTRIBUTING.md if present; otherwise match the style of the most-recently-merged example.
- [ ] Run the example end-to-end with a fresh `codex` install on a clean machine to verify zero hidden dependencies.
- [ ] License header on every new file.
- [ ] No client names, no real sys_ids, no real instance URLs.
- [ ] No banned words.
- [ ] If reviewers ask for "less ServiceNow specificity," be ready to swap fixtures to a generic SaaS API while keeping the four-block contract pattern.
