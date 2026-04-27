# GitHub repo topics + description + website

> Run these once at D-3 (after final pre-launch review). Pre-flight check on D0 morning that all topics are present.

## Description (260 char max — GitHub cuts at ~250)

```
Outcome before output. Twenty advisors led by Pierrondi EA. Two MCP servers with dry-run + approval token + audit + rollback. ServiceNow AI Agent Studio + Now Assist + Fluent SDK 4.6 kit for Claude Agent SDK and Codex CLI. MIT.
```

## Website (after Vercel deploy lands)

Set to the public Vercel URL of the web app catalog. Until then leave blank — do not point to a private staging URL.

## Topics (10)

```bash
gh repo edit paulopierrondi/servicenow-agent-army --add-topic servicenow
gh repo edit paulopierrondi/servicenow-agent-army --add-topic ai-agents
gh repo edit paulopierrondi/servicenow-agent-army --add-topic mcp
gh repo edit paulopierrondi/servicenow-agent-army --add-topic claude-agent-sdk
gh repo edit paulopierrondi/servicenow-agent-army --add-topic codex
gh repo edit paulopierrondi/servicenow-agent-army --add-topic now-assist
gh repo edit paulopierrondi/servicenow-agent-army --add-topic agentic-workflows
gh repo edit paulopierrondi/servicenow-agent-army --add-topic ai-agent-studio
gh repo edit paulopierrondi/servicenow-agent-army --add-topic servicenow-sdk
gh repo edit paulopierrondi/servicenow-agent-army --add-topic fsi
```

## One-liner to set description and homepage

```bash
gh repo edit paulopierrondi/servicenow-agent-army \
  --description "Outcome before output. Twenty advisors led by Pierrondi EA. Two MCP servers with dry-run + approval token + audit + rollback. ServiceNow AI Agent Studio + Now Assist + Fluent SDK 4.6 kit for Claude Agent SDK and Codex CLI. MIT." \
  --homepage "https://servicenow-agent-army.vercel.app"
```

## Verification

```bash
gh repo view paulopierrondi/servicenow-agent-army --json description,homepageUrl,repositoryTopics
```

Expected output: description matches, homepageUrl set, all 10 topics present.

## Why these 10

| Topic | Why |
| --- | --- |
| `servicenow` | Primary product surface for organic discovery. |
| `ai-agents` | Cross-cuts Claude / Codex / Studio communities. |
| `mcp` | Hooks the Model Context Protocol audience. |
| `claude-agent-sdk` | Anthropic Claude Code skill compatibility. |
| `codex` | OpenAI Codex CLI skill compatibility. |
| `now-assist` | ServiceNow's brand surface — captures the search intent. |
| `agentic-workflows` | Matches AI Agent Studio's nomenclature. |
| `ai-agent-studio` | Direct product hit, used by ServiceNow Community search. |
| `servicenow-sdk` | Fluent SDK 4.6 audience, separate from `servicenow`. |
| `fsi` | The author's domain niche; surfaces in financial-services AI lists. |

## Don't

- No `chatgpt` topic (Codex CLI is the right hit, ChatGPT is too broad).
- No `enterprise` topic (overloaded, low signal).
- No `consulting` topic (this is a builder kit, not a service).
- No partner names as topics.
