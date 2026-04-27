# Newsletter pitch (reusable)

> One short paragraph + GIF + repo link, sized for newsletter editors. Targets: Latent Space, Ben's Bites, TLDR AI, ServiceNow Community newsletters, MCP-focused newsletters (e.g. modelcontextprotocol.io blog and Smithery / Glama digests).

## The pitch (paste-ready)

ServiceNow Agent Army — an open-source, MIT-licensed kit for building AI agents on ServiceNow. The headliner is **Pierrondi EA**, a value-first advisor that refuses to draw architecture before the four-block contract is closed (outcome, value, deliverables, risks). It hands off to a council of 19 specialist advisors (BA, CTA, ITSM, ITOM, CSM, Workflow Composer, Guardrails Reviewer, ATF generator, etc.). The piece newsletter readers will care about: two MCP servers ship with the kit. One read-only by construction (zero write code paths in the binary). One with dry-run + signed JWT approval token + append-only JSONL audit + per-record rollback — a chain none of the nine community ServiceNow MCPs (or the native Now Assist MCP in Zurich Patch 4) ship end-to-end. Works in Claude Code (`.claude/skills/`) and Codex CLI (`.agents/skills/`) from the same source. Built by a ServiceNow TAE in personal capacity. Repo: `github.com/paulopierrondi/servicenow-agent-army`.

## Demo GIF

Suggested clip: 6-8 seconds of the MCP write chain executing in a terminal — the `[mcp-write] dry-run`, `[approval] token signed`, `[audit] event written`, `[mcp-write] commit OK, rollback id` sequence. Captured at 30 fps, exported as a GIF under 4 MB so it embeds inline in newsletters that strip large attachments.

Asset path: `docs/assets/mcp-chain.gif` (record from the 5-minute walkthrough Step 5).

## Variant tweaks per outlet

| Outlet | Tweak |
| --- | --- |
| **Latent Space** | Lead with the MCP chain story (audience is technical AI infra). Drop the four-block-contract framing. |
| **Ben's Bites** | Lead with the "refuses to draw architecture before value question" line. Audience reads fast; the editorial constraint is the hook. |
| **TLDR AI** | Trim to 2 sentences. "Open-source MCP server pair for ServiceNow with dry-run + approval + audit + rollback chain. None of the nine community servers ship it end-to-end." |
| **ServiceNow Community newsletter** | Lead with the 20-advisor council and the four-block contract. Drop the MCP comparison (audience already knows the field). |
| **modelcontextprotocol.io / Smithery / Glama digest** | Lead with the two-binary split for blast radius. The MCP chain detail is the value to MCP authors. |

## Outreach plan

- D+7: send to Latent Space, Ben's Bites, TLDR AI in parallel. One email each, personalized opening, the pitch above as the body, the GIF inline.
- D+10: send to ServiceNow Community newsletter editors and to the MCP digests.
- Track in a spreadsheet: outlet, contact, date sent, response. Do not chase more than once.
- If picked up, share the newsletter URL in a single follow-up LinkedIn post with one sentence ("featured in $newsletter on $date") — no body re-paste.

## Subject line (cold email)

"Outcome before output — ServiceNow Agent Army (open-source, MIT, MCP guardrail chain)"

## Email opener (cold email)

"Hi [editor name], short pitch: I shipped an open-source kit that puts a value-first advisor in front of every ServiceNow AI architecture decision, with two MCP servers that ship a dry-run + approval + audit + rollback chain none of the nine community ServiceNow MCPs (or the native one) ship end-to-end. Two-paragraph version below; full repo at github.com/paulopierrondi/servicenow-agent-army. Happy to record a 60-second demo for your readers if useful."

## What not to include in the cold email

- Personal anecdote ("I spent 6 months working on this").
- Detailed roadmap.
- Self-comparison to closed-source vendors.
- Promotional language. Editors filter on the third sentence.

## Sanity check

- [ ] Pitch under 200 words. Editors prefer short.
- [ ] GIF under 4 MB.
- [ ] Repo URL renders fine on GitHub mobile (some editors check on phone).
- [ ] No banned words.
- [ ] Disclosure (built in personal capacity, not affiliated) is in the body of the pitch, not in a footer the editor will skip.
