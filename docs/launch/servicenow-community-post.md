# ServiceNow Community post

> Target board: Now Assist Forum (primary), Developer Blog (mirror). Audience: ServiceNow builders, partners, internal SCs/EAs. Tone: technical, builder-first, less brand-forward than LinkedIn.

## Title

ServiceNow Agent Army — open-source kit + 2 MCP servers for AI Agent Studio + Fluent SDK 4.6

## Tags / labels

`AI Agent Studio` `Now Assist` `Now Assist Skill Kit` `ServiceNow SDK` `Fluent` `MCP` `Agentic AI`

## Body

I shipped a public, MIT-licensed kit that the ServiceNow community can use to build, validate, and govern AI agents on top of AI Agent Studio, NASK, and Fluent SDK 4.6. Posting it here because the builders forum is where it should live.

**Repo**: https://github.com/paulopierrondi/servicenow-agent-army

### What it is

- 20 advisor agent cards (markdown + JSON catalog) covering CTA, EA, BA, ITSM, ITOM, CSM, Now Assist Coach, Workflow Composer, Guardrails Reviewer, ATF Test Generator, Catalog Designer, Integration Mapper, Knowledge Curator, Performance Tuner, Upgrade Advisor, SDK Builder, SADA Coach, Token Saver, Demo Storyteller, plus the headliner **Pierrondi EA** (value-first enterprise architect).
- Two TypeScript MCP servers under `packages/`. One read-only by construction (no write code paths in the binary): schema discovery, AI Agent Studio metadata, active flow inventory. One write-side: dry-run + signed JWT approval token + append-only JSONL audit + per-record rollback. Both ship `stdio` and Streamable HTTP. Pinned in [`docs/adr/ADR-002-skill-tool-contract.md`](https://github.com/paulopierrondi/servicenow-agent-army/blob/main/docs/adr/ADR-002-skill-tool-contract.md).
- A skill (`servicenow-agent-factory`) that works in both Claude Code (`.claude/skills/`) and Codex CLI (`.agents/skills/`). Same source of truth, both clients.
- Seven opinionated knowledge docs under `docs/best-practices/` and `docs/`: SADA Framework v0.1, ITSM/ITOM/CSM/Now Assist best practices, anti-patterns catalog, Now Assist surface routing, MCP landscape gap analysis.

### What is different vs other community ServiceNow MCPs

I inventoried nine ServiceNow MCP servers (community + the native Now Assist MCP Server in Zurich Patch 4) before building. Detail: [`docs/mcp-landscape.md`](https://github.com/paulopierrondi/servicenow-agent-army/blob/main/docs/mcp-landscape.md).

What the community has done well:
- Broad table coverage (echelon-ai-labs, Happy Platform, habenani-p).
- Multi-instance routing (Happy Platform, habenani-p).
- Modern auth + Streamable HTTP (jschuller).
- Fluent SDK wrapper (modesty/fluent-mcp).

What is missing across all 9:
- **Dry-run for write operations as a first-class tool.** None do it.
- **Explicit human-approval token chain** (model proposes -> human approves out-of-band -> token unlocks commit). None do it.
- **Append-only audit per MCP call** (who, when, what, why, dry-run hash, approval signer). None publish this.
- **Rollback of last MCP-issued change.** None do it.
- **Read-only-by-construction binary** (server cannot mutate even if misconfigured). habenani-p comes closest with a 5-tier model, but the same binary still ships write tools.

So that is what this kit owns: the dry-run + approval + audit + rollback chain end-to-end, plus the read-only-by-construction split. Useful for FSI / regulated environments where CAB is non-negotiable.

### Quick start

```bash
git clone https://github.com/paulopierrondi/servicenow-agent-army.git
cd servicenow-agent-army
pnpm install
pnpm validate
```

Use in Claude Code:

```text
Use the servicenow-agent-factory skill. Create an AI Agent Studio agent that triages incident records using Now Assist for ITSM. Domain: ITSM, FSI compliance.
```

Use in Codex CLI:

```bash
codex run "Use the servicenow-agent-factory skill to draft a CMDB Health Check agentic workflow with guardrails."
```

### Honest about deploy paths

The repo refuses to pretend AI Agent Studio has a stable public CRUD API in April 2026. Each ServiceNow surface gets a deploy path picked from what the docs actually confirm. Source-driven where Fluent covers (`AiAgentWorkflow`, NASK APIs, auto-ACL). Documented handoff to guided setup where Fluent does not cover (Now Assist Guardian policy, Build Agent, AI Agent Studio orchestration UI). Detail in [`docs/research-2026-04.md`](https://github.com/paulopierrondi/servicenow-agent-army/blob/main/docs/research-2026-04.md).

### Sample case in the repo

`gallery/01-incident-triage-fsi/case.md` is a real-shape FSI Brazil incident triage problem (~800 incidents/day, 7-min avg time-to-assignment, BACEN + LGPD constraints). The four-block contract output is checked in alongside the case so anyone can see the output style before running it.

### Question for the community

If you have shipped Now Assist for ITSM or AI Agent Studio agents in production:

1. What approval gate did you put between the model and the table write? (Was it CAB, was it a Flow Designer approval, was it a custom MCP layer?)
2. How are you logging audit per AI agent invocation today — `sys_gen_ai_usage_log`, custom table, external? Has BACEN or your equivalent regulator already asked for a 24-hour retrieval test?

I will read every reply and incorporate the patterns into the next ADR. Open issues welcome on GitHub for anything more concrete.

Disclosure: not affiliated with or endorsed by ServiceNow. I work at ServiceNow as a TAE in FSI Brazil; this repo is built and published in personal capacity. Brand and product names belong to their respective owners.

## Posting checklist

- [ ] Post Tuesday or Wednesday morning BRT.
- [ ] Cross-post to the ServiceNow Developer Blog board after 48h with a 2-line intro and link back.
- [ ] Pin to the personal Community profile if the option is available.
- [ ] Reply to every comment in the first 24 hours.
- [ ] If a ServiceNow employee (CSA, advocate, PM) replies, do not lean on it — they will not endorse without internal review. Stay in builder mode.

## What works in the thread

- Concrete patterns: paste a snippet from `docs/adr/ADR-002` or the audit JSONL shape if asked.
- Reference the open questions in `docs/mcp-landscape.md` section 6 — invites senior community members to answer with confidence.
- If asked about pricing or licensing of Now Assist, redirect to the official docs and stay neutral. Do not speculate on SKUs.

## What does not work

- Comparing this kit to vendor partners (Servicedirect, eviden, etc.). Do not name them.
- Promising features that are in M3/M4/M5 of the roadmap. The post stays inside what is already on `main`.
- Asking the community to upvote / reaction-bomb. ServiceNow Community is moderated and that flags fast.
