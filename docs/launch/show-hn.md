# Show HN post

> Target: news.ycombinator.com Show HN. Audience: HN is technical, skeptical, product-curious. Title and first paragraph carry 80% of the click. Length: ~250 words.

## Title (80 char max — HN truncates aggressively)

Show HN: ServiceNow Agent Army – outcome-first AI agent kit for Now Platform

(Length: 76 chars. Under the limit.)

## URL field

`https://github.com/paulopierrondi/servicenow-agent-army`

## Body (text field, optional but recommended for Show HN)

Hi HN. I shipped a public, MIT-licensed kit for building AI agents on ServiceNow. The pitch in one sentence: it refuses to draw architecture before the value question is answered.

The piece I think will interest this audience is the MCP server pair. I inventoried nine community ServiceNow MCP servers (plus the native ServiceNow one in Zurich Patch 4) before building. None ship a dry-run + signed approval token + append-only audit + per-record rollback chain end-to-end. So I built that. The repo ships two binaries: one read-only by construction (no write code paths), one with the chain above. Both ship stdio + Streamable HTTP. OAuth 2.1 + PKCE on the HTTP path. The contract is pinned in ADR-002 in the repo.

The other piece is the council of 20 advisors led by Pierrondi EA, the value-first headliner. Pierrondi EA returns the same four-block contract every time: outcome (one metric, 90 days), value (currency + trade-off), three to five deliverables (one named owner each), three risks (with go/no-go thresholds). If any block is weak, it stops and asks. The other 19 advisors run after the value question is closed.

Status: alpha. Catalog seed and knowledge docs are done. MCP read-only MVP is in progress; MCP write per ADR-002 is planned for the next cut. Roadmap is in the README.

License: MIT. No affiliation with ServiceNow, OpenAI, or Anthropic.

Happy to answer questions on the four-block contract, the MCP chain, or why I built this.

## Tips for replying to comments

HN is technically rigorous and historically skeptical of AI tooling. The high-value comments will probably be:

- **"How is this different from $other_servicenow_mcp?"** — Reference [`docs/mcp-landscape.md`](https://github.com/paulopierrondi/servicenow-agent-army/blob/main/docs/mcp-landscape.md) directly. Quote the gap analysis: dry-run + approval + audit + rollback chain not shipped end-to-end by any of the nine. Acknowledge what existing servers do well (echelon-ai-labs broad coverage, jschuller modern auth, habenani-p 5-tier model) before naming the gap.
- **"This is just prompting, where is the moat?"** — Two answers. First, the editorial constraint (refuse to design without the four blocks) is harder than it looks; most architecture proposals I see in field violate it on slide 3. Second, the MCP guardrail chain is concrete code, not prompting. Point to ADR-002.
- **"Did you talk to ServiceNow before publishing?"** — Honest answer: no. It is built in personal capacity and the disclosure paragraph in the README says so. The kit is MIT, not affiliated, brand names belong to their owners. Brief and clean.
- **"Why MCP and not just an SDK?"** — MCP gives you a single binary that Claude Code, Codex CLI, Cursor, Windsurf, ChatGPT Desktop can all use. Implementing the same surface in each client is duplication.
- **"What is the value figure based on?"** — Source data must be confirmed. Pierrondi EA labels figures as working hypothesis until 14-day baseline is collected. The repo's `gallery/01-incident-triage-fsi/case.md` is real-shape, not real client.
- **"Is this VC-backed / will you charge?"** — MIT, free. The optional private layer (FSI Brazil archetypes, SADA scoring rubric, ops telemetry) is not required. The kit works without it. If I ever monetize, it would be a managed/hosted MCP gateway, not a feature paywall on the open kit. Be transparent.

## Things to NOT do on HN

- Do not ask people to upvote or share. HN auto-flags this.
- Do not respond defensively to skeptical comments. Read once, sleep on it, reply with concrete pointers to the repo.
- Do not link-bomb other HN threads with "I built this." HN moderators notice fast.
- Do not call it a "framework" or "platform." It is a kit. HN prefers humble framing.
- Do not name customers, even if disguised. "FSI Brazil tier-1 bank" is fine; specific institution is not.
- Do not claim Anthropic / OpenAI integrations are "official." They are filesystem-skill compatible, which is the open contract both vendors documented.
- Do not say it is "production ready." Status is alpha. Be honest. HN catches false claims and amplifies them.

## Timing

- Best post window: Tuesday or Wednesday, 09:00-11:00 PT (US tech audience peak). For a Brazil-based author, that is 13:00-15:00 BRT.
- Post must reach front-page within ~90 minutes or it stays in /newest. Be at the keyboard for the first 2 hours to reply quickly.
- Do not post on Friday afternoon (low engagement) or Sunday (engagement spikes for non-tech topics, your post drowns).
- Repost rule: if it does not catch in 24h, you can re-submit once after 48h with a refined title. After that, leave it.

## Self-check before submit

- [ ] Title under 80 chars, includes "Show HN:" prefix.
- [ ] URL field is the GitHub repo URL.
- [ ] Body opens with what it is, not why you built it.
- [ ] License stated.
- [ ] Status stated honestly (alpha).
- [ ] Disclosure paragraph (no affiliation).
- [ ] No banned words. No emoji. No hyperbole.
- [ ] Browser check: open the repo URL in a private window, click around, verify README renders, validator runs, OG image loads.
