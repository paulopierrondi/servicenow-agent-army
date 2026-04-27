# dev.to tutorial

> Target surface: dev.to primary publish, mirror to Hashnode optionally with canonical URL pointing to dev.to. Audience: AI builders + ServiceNow developers cross-section.

## Headline

Build a ServiceNow agent in 5 minutes with Claude Code (or Codex CLI)

## Subtitle

Outcome before output. A walkthrough of the open-source ServiceNow Agent Army kit: 20 advisors, 2 MCP servers, MIT.

## Cover image suggestion

Use `docs/assets/og-default.png` from `social-preview-spec.md`. dev.to renders covers at 1000x420; the 1280x640 OG image crops cleanly.

## Tags (4 max — dev.to limit)

`servicenow` `ai` `mcp` `tutorial`

## Front-matter (dev.to)

```yaml
---
title: Build a ServiceNow agent in 5 minutes with Claude Code (or Codex CLI)
published: false
description: A walkthrough of the open-source ServiceNow Agent Army kit. 20 advisors led by Pierrondi EA, 2 MCP servers with dry-run + approval + audit + rollback. MIT.
tags: servicenow, ai, mcp, tutorial
cover_image: https://raw.githubusercontent.com/paulopierrondi/servicenow-agent-army/main/docs/assets/og-default.png
canonical_url:
---
```

## Body

### TL;DR

You will clone an open-source repo, run two commands, ask **Pierrondi EA** about a real FSI Brazil incident triage problem, see the four-block contract output, hand off to two more advisors, and watch a write to a ServiceNow incident get blocked behind a dry-run and a signed approval token. Five minutes. No fake REST APIs. MIT licensed.

Repo: [github.com/paulopierrondi/servicenow-agent-army](https://github.com/paulopierrondi/servicenow-agent-army)

### Why this exists

ServiceNow ships three new AI surfaces every family release. AI Agent Studio guided setup. Now Assist Skill Kit (NASK). Now Assist Guardian. Plus Fluent SDK 4.6 with the `AiAgentWorkflow` API and auto-ACL. The docs say start anywhere. The reality: a junior builder picks the wrong surface, a CTA approves it because the spec looks defensible, and the platform team finds out in production.

The miss is editorial, not technical. Nobody asks the value question first.

ServiceNow Agent Army is a public kit that puts that question in front: 20 advisors led by Pierrondi EA (the value-first headliner), 2 MCP servers with real guardrails, and 7 opinionated knowledge docs. It works with Claude Code or Codex CLI. Same skill source, both clients.

### Pre-reqs

- Node 22 LTS (`node --version` should print `v22.x`).
- pnpm 9 (`npm i -g pnpm@9`).
- Either Claude Code (`brew install --cask claude` or download from claude.com/code) or Codex CLI (`npm i -g @openai/codex`).
- Optional: a ServiceNow PDI (free, sign up at developer.servicenow.com). Without it, the read-only path still runs and the writes can be dry-run-only.

### Step 1: clone and install

```bash
git clone https://github.com/paulopierrondi/servicenow-agent-army.git
cd servicenow-agent-army
pnpm install
pnpm validate
```

`pnpm validate` is the seatbelt. It checks that the catalog JSON, the agent cards, and the skills under `.claude/skills/` and `.agents/skills/` are consistent. Every PR runs it. If it errors on first run, you have a stale clone — try `git pull` and retry.

### Step 2: ask Pierrondi EA

The fastest path is the web app catalog under `apps/web`. From the repo root:

```bash
pnpm --filter web dev
```

Open `http://localhost:3000`. The home page has a single input. Toggle "Run Pierrondi EA first" on, then paste a real-shape problem. Borrow the one from the gallery:

```
Service desk receives 800 incidents per day. Tier 1 takes 7 minutes on average to classify and assign. We want to use Now Assist for ITSM but the risk team blocks anything that touches customer data. Domain: ITSM. Region: FSI Brazil. What is the value question and what should we ship in 90 days?
```

If you would rather use Claude Code or Codex CLI directly:

```bash
# Claude Code
claude
> Use the servicenow-agent-factory skill. Build the four-block Pierrondi EA response for the case in gallery/01-incident-triage-fsi/case.md.
```

```bash
# Codex CLI
codex run "Use the servicenow-agent-factory skill. Build the four-block Pierrondi EA response for the case in gallery/01-incident-triage-fsi/case.md."
```

### Step 3: review the four-block output

Pierrondi EA returns the same shape every time:

```
OUTCOME (90 days)
Reduce p95 time-to-assignment from 7m to 2m for P1/P2 ITSM incidents.

VALUE
BRL 1.2M/yr saved at 18k incidents/yr (analyst time, conservative).
Cost-of-build: BRL 280k one-time. Cost-of-run: BRL 14k/yr Now Assist credits.
Working hypothesis until 14-day baseline confirms incident volume.

DELIVERABLES
1. Skill prompt v1 for Now Assist Resolution Suggestions. Owner: ITSM lead, by W+2.
2. ATF regression suite (10 cases). Owner: QA architect, by W+3.
3. Now Assist Guardian config for PII masking. Owner: security architect, by W+3.
4. Audit jsonl wired to ServiceNow PA. Owner: platform owner, by W+4.
5. Rollback plan. Owner: change manager, by W+4.

RISKS
1. Now Assist credit burn over 4k/mo. Threshold: pause at 3.5k.
2. Resolution accuracy below 60% in pilot. Threshold: stop rollout.
3. LGPD audit blocker on Guardian masking. Threshold: hard stop.

CHALLENGE
The plan assumes 18k incidents/yr is steady. Pull the last 12 months volume before W+1.
If volume is below 12k or trending down, the value figure halves.

NEXT
Hand off to Workflow Composer and Guardrails Reviewer.
```

Four blocks. One named owner per deliverable (`the team` is rejected). One go/no-go threshold per risk. A challenge to your plan, not flattery. If any block was missing or weak, Pierrondi EA would have stopped and asked.

### Step 4: hand off to the council

Click "Hand off to council" in the web app, or run:

```bash
claude
> Use the servicenow-agent-factory skill. Take the Pierrondi EA output and run Workflow Composer + Guardrails Reviewer in parallel. Output: 6-step AI Agent Studio spec + audit/approval gates.
```

Workflow Composer outputs a 6-step skeleton ready to paste into AI Agent Studio guided setup. Guardrails Reviewer outputs the approval gates, the Guardian config note, and the rollback plan. Both are useful immediately.

### Step 5: dry-run the write via MCP

The repo ships two MCP servers. The read-only one (`packages/mcp-readonly`) has no write code paths in the binary. The write one (`packages/mcp-write`) commits only behind a four-step chain. Configure the write server against your PDI (read `packages/mcp-write/README.md` for env vars), then:

```bash
pnpm tsx scripts/mcp-write-demo.ts \
  --table incident \
  --sys_id 1a7b... \
  --patch '{"assignment_group":"network-l2"}' \
  --reason "council recommended after risk review"
```

Output:

```
[mcp-write] dry-run: diff computed
  before: assignment_group=""
  after:  assignment_group="network-l2"
[mcp-write] dry-run hash: 7f3a-9b21-...
[approval] approval_token required. signing path: out-of-band
[approval] signer=paulopierrondi at 2026-04-26T14:32:08-03:00
[mcp-write] token validated, commit proceeding
[mcp-write] commit OK, rollback id: 7f3a-9b21-...
[audit] event written to /tmp/agent-army-audit.jsonl
```

The audit JSONL is append-only. The rollback id is callable for 24 hours. I inventoried nine ServiceNow community MCP servers — none ship this chain end-to-end.

### What is open vs what is private

MIT licensed and in the public repo: 20 advisor cards, the SADA Framework, both MCP servers, the Next.js catalog web app, the validator, the prompt packs, the skills.

Optional and private (not required to run the army): FSI Brazil archetypes, SADA scoring rubric, operational telemetry. The kit works without them.

### Conclusion + next steps

The pattern: outcome before output, refuse to design without the four blocks, hand off to specialists, gate every write behind dry-run + approval + audit + rollback.

If this lands for you:

- Star the repo: [github.com/paulopierrondi/servicenow-agent-army](https://github.com/paulopierrondi/servicenow-agent-army)
- Open an issue with the surface or domain you want to see covered next
- Try `gallery/01-incident-triage-fsi/case.md` as a starting point and post your output as a discussion

Read the Hashnode series next:

1. Why most ServiceNow AI advice fails — and what to do about it
2. The 4-block contract: how Pierrondi EA frames every ServiceNow architecture decision
3. Building MCP servers with real guardrails (dry-run + approval + audit + rollback)

Not affiliated with ServiceNow, OpenAI, or Anthropic. Brand and product names belong to their respective owners.

## Posting checklist

- [ ] dev.to draft saved with `published: false`. Re-read on desktop and mobile preview.
- [ ] Banned-words sweep: ensure, crucial, vital, journey, embark, unleash, dive, delve, plethora, indulge, unlock, unveil, elevate, landscape, navigate, daunting, game changer, stand out, unique blend, enhancing, just (standalone).
- [ ] Code blocks tested by copy-paste in a clean terminal.
- [ ] Repo URL renders correctly in dev.to preview (it auto-embeds GitHub README cards — check formatting).
- [ ] Tags sized correctly (max 4).
- [ ] After publish, share with a single sentence on LinkedIn ("dev.to tutorial walking through the kit") with the article URL. No re-paste of the article body.
- [ ] Set `canonical_url` on Hashnode mirror to point to the dev.to URL (avoid SEO duplication).
