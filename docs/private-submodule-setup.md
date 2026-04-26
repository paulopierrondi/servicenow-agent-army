# Private Submodule Pattern -- Build Your Own Digital Twin Agent

> Replicate the "Pierrondi Enterprise Architect" pattern for your own personal memory + expertise. Public repo stays generic; private submodule holds your context.

## Why

Public agents in this repo are intentionally generic. They give you the SADA framework, ServiceNow practices, and the advisory army -- but they do not know YOUR clients, YOUR decisions, YOUR scars. A private submodule lets you layer personal expertise on top without leaking confidential data into a public repo.

The split is deliberate: anything that touches a customer name, a deal size, a CPF/CNPJ, or an internal decision belongs in the private side. The public side stays reusable for any TAE, SE, or architect.

## Pattern overview

```mermaid
flowchart LR
    A[Public repo<br/>servicenow-agent-army] --> B[Generic agents,<br/>SADA framework,<br/>workflows]
    C[Private submodule<br/>servicenow-agent-army-private] --> D[Personal agent card,<br/>memory exports,<br/>private skill]
    D --> E[mcp-pierrondi-memory<br/>local RAG MCP]
    E --> F[Sanitization layer<br/>regex + allowlist + LLM judge]
    F --> G[Agent output]
    A -. mount via .gitignore exception .-> C
```

The private submodule mounts at `private/`. The public `.gitignore` blocks `private/` so any accidental file added there cannot be committed. Two narrow exceptions are explicit: `private/.gitkeep.example` and `private/README.md.template`.

## Setup (5 steps)

### Step 1: create the private repo

```bash
gh repo create servicenow-agent-army-private \
  --private \
  --description "Private overlay for ServiceNow Agent Army" \
  --clone
```

Move `private/README.md.template` from this public repo into the new repo as `README.md` and edit it.

### Step 2: mount as submodule

From the root of the public repo:

```bash
git submodule add git@github.com:<your-handle>/servicenow-agent-army-private.git private
```

Or, if you do not want a submodule binding, clone independently and symlink:

```bash
git clone git@github.com:<your-handle>/servicenow-agent-army-private.git ~/code/sa-army-private
ln -s ~/code/sa-army-private private
```

Confirm the path is ignored:

```bash
git check-ignore -v private/foo
```

### Step 3: structure the private repo

```text
servicenow-agent-army-private/
  README.md
  agents/
    pierrondi-enterprise-architect.md
  memory/
    claude-export.md
    chatgpt-export.json
    notes/
      2026-Q1-deal-debrief.md
      sada-decisions.md
  packages/
    mcp-pierrondi-memory/
      package.json
      src/index.ts
      src/sanitizer.ts
      src/embeddings.ts
  .claude/
    skills/
      pierrondi-ea/
        SKILL.md
  .mcp.json
  .gitignore
```

### Step 4: ingest your memory

See AGE-1200 for the memory ingest pipeline (Claude personal memory export, ChatGPT export, manual notes). Embeddings stay local: Ollama for fully offline, or OpenAI with at-rest encryption for higher recall. Never push raw exports to a remote you do not control.

### Step 5: register the private skill

When `private/` is mounted, Claude Code and Codex CLI both pick up `.claude/skills/pierrondi-ea/SKILL.md` because the private repo's `.claude/skills/` directory is a sibling of the public one. Confirm with `/claude skills` in Claude Code.

`.mcp.json` in the private repo registers `mcp-pierrondi-memory` over stdio. Example:

```json
{
  "mcpServers": {
    "pierrondi-memory": {
      "command": "node",
      "args": ["./packages/mcp-pierrondi-memory/dist/index.js"],
      "env": { "MEMORY_DIR": "./memory" }
    }
  }
}
```

## Sanitization layer (mandatory)

Before any output from the digital twin leaves -- whether it is a chat reply or a file write -- pass it through a 4-stage gate:

1. **Regex strip** -- pattern list at minimum:
   - CPF: `\d{3}\.?\d{3}\.?\d{3}-?\d{2}`
   - CNPJ: `\d{2}\.?\d{3}\.?\d{3}/?\d{4}-?\d{2}`
   - Email: `[\w.+-]+@[\w-]+\.[\w.-]+`
   - Phone BR: `\+?55\s?\(?\d{2}\)?\s?9?\d{4}-?\d{4}`
   - IPv4: `\b(?:\d{1,3}\.){3}\d{1,3}\b`
   - BRL values: `R\$\s?\d{1,3}(?:\.\d{3})*(?:,\d{2})?`
   - Internal project codes: `(?:PRJ|INC|CHG|RITM)\d{6,}`
   - Bank accounts (BR): `\d{4,5}-?\d{1,2}`
   - Card-like: `\b(?:\d[ -]?){13,19}\b`
   - JIRA-style keys: `[A-Z]{2,}-\d+` (allowlist your own boards)
2. **Named entity allowlist** -- default deny. Allow generic placeholders such as "FSI client X", "regional bank", "Tier-1 telco". Block real client names unless explicitly allowlisted in `allowlist.json`.
3. **LLM-as-judge** -- a second model (cheaper Haiku-class is fine) receives the candidate output plus the question "does this contain PII, client names, or confidential decisions? answer yes or no with reason". Yes triggers hard fail.
4. **Hard fail** -- if any stage flags, return `{ "error": "redacted", "stage": "<stage>" }` instead of the output. Log the failure to `.audit/redactions.jsonl` for review.

```typescript
import type { Sanitizer } from "./types";

const PATTERNS: Array<[RegExp, string]> = [
  [/\d{3}\.?\d{3}\.?\d{3}-?\d{2}/g, "[CPF]"],
  [/\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2}/g, "[CNPJ]"],
  [/[\w.+-]+@[\w-]+\.[\w.-]+/g, "[EMAIL]"],
  [/\+?55\s?\(?\d{2}\)?\s?9?\d{4}-?\d{4}/g, "[PHONE]"],
  [/R\$\s?\d{1,3}(?:\.\d{3})*(?:,\d{2})?/g, "[AMOUNT]"],
];

export const sanitize: Sanitizer = async (text, opts) => {
  let redacted = text;
  for (const [re, tag] of PATTERNS) redacted = redacted.replace(re, tag);

  if (containsBlockedEntity(redacted, opts.allowlist)) {
    return { ok: false, stage: "entity-allowlist" };
  }

  const verdict = await llmJudge(redacted, opts.judgeModel);
  if (verdict.flagged) {
    return { ok: false, stage: "llm-judge", reason: verdict.reason };
  }

  return { ok: true, output: redacted };
};
```

Wire this into the MCP server response path and into any agent post-tool hook that writes files.

## Privacy guarantees

- Memory files never leave your machine: embeddings run locally with Ollama, or, if you opt for hosted embeddings, the raw text is encrypted at rest and only embedding vectors leave the machine.
- Public repo `.gitignore` blocks `private/` -- accidental adds fail the pre-commit hook.
- MCP server runs 100% local over stdio -- no network listener.
- Audit log lives at `.audit/` which is also gitignored. Rotate or wipe on a schedule.

## Replicate for non-Paulo personas

The pattern is not Paulo-specific. Anyone with deep domain context benefits:

- Brazilian retail TAE: digital twin trained on supply-chain and PIX checkout scars.
- US federal SE: digital twin trained on FedRAMP, ATO, and IL5 boundaries.
- Indian TMT SE: digital twin trained on telecom OSS/BSS and media rights workflows.

Same shape: public repo stays generic, private overlay holds the proprietary memory, sanitizer keeps client data inside.

## Risks and limitations

- **Persona drift**: the twin can sound more confident than the human. Tune temperature low and force citations to memory chunks.
- **Hallucination**: RAG mitigates but does not eliminate. Shallow memory stores produce confident wrong answers. Seed broadly before you trust narrow questions.
- **Confidentiality**: sanitization is defense-in-depth, not a silver bullet. Always read the output before sending to a customer. Treat the twin as a draft generator, not a sender.
- **Compliance**: check your employer policy before processing corporate memory locally. Some companies require DLP review of any export.
- **Submodule drift**: if you use the submodule pattern, the public repo pins a commit SHA of the private repo. Rotate that SHA only after sanitization tests pass on the private side.

## Related docs

- AGE-1199 architecture (Linear)
- AGE-1200 memory ingest pipeline
- AGE-1201 MCP server + sanitizer
- [SECURITY.md](../SECURITY.md)
- [CLAUDE.md](../CLAUDE.md)
