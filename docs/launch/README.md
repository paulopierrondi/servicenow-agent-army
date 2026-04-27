# Launch package — ServiceNow Agent Army

> Coordinated public launch (D-7 -> D+30). Author: Paulo Pierrondi (TAE, FSI Brazil). Voice: Constructive Challenger. ASCII markdown only, no emoji, banned-words-clean.

## File index

| # | File | Purpose | Surface |
| --- | --- | --- | --- |
| 1 | [`video-90s-script.md`](video-90s-script.md) | 90-second video script (EN + PT-BR) | LinkedIn native, X, README hero |
| 2 | [`walkthrough-5min-script.md`](walkthrough-5min-script.md) | 5-minute walkthrough script | YouTube, docs/demos embed |
| 3 | [`social-preview-spec.md`](social-preview-spec.md) | Open Graph image spec + inline SVG | GitHub OG, link previews |
| 4 | [`repo-topics.md`](repo-topics.md) | `gh repo edit` commands for topics, description, homepage | GitHub repo metadata |
| 5 | [`linkedin-launch-en.md`](linkedin-launch-en.md) | Long-form launch post (EN) | LinkedIn |
| 6 | [`linkedin-launch-ptbr.md`](linkedin-launch-ptbr.md) | Long-form launch post (PT-BR) | LinkedIn |
| 7 | [`servicenow-community-post.md`](servicenow-community-post.md) | Builder-first technical post | ServiceNow Community Now Assist Forum |
| 8 | [`devto-tutorial.md`](devto-tutorial.md) | Step-by-step tutorial | dev.to (mirror Hashnode) |
| 9 | [`hashnode-series-1.md`](hashnode-series-1.md) | Thesis: outcome before output | Hashnode part 1/3 |
| 10 | [`hashnode-series-2.md`](hashnode-series-2.md) | The four-block contract with three examples | Hashnode part 2/3 |
| 11 | [`hashnode-series-3.md`](hashnode-series-3.md) | MCP guardrail chain deep-dive | Hashnode part 3/3 |
| 12 | [`show-hn.md`](show-hn.md) | Show HN post + reply tips | Hacker News |
| 13a | [`anthropic-cookbook-pr.md`](anthropic-cookbook-pr.md) | Anthropic Cookbook PR draft | github.com/anthropics |
| 13b | [`codex-examples-pr.md`](codex-examples-pr.md) | OpenAI Codex examples PR draft | github.com/openai |
| 13c | [`newsletter-pitch.md`](newsletter-pitch.md) | Reusable cold pitch | Latent Space, Ben's Bites, TLDR AI, etc. |

## Cronograma D-7 -> D+30

| Date | Action | Asset |
| --- | --- | --- |
| **D-7** | Teaser LinkedIn post (single line + OG image, no link). "An open-source advisor that refuses to design without a value number is shipping next week." Audience-priming. | OG image (`docs/assets/og-default.png`) |
| **D-5** | Repo metadata locked: topics, description, homepage. Run `repo-topics.md` commands. | `repo-topics.md` |
| **D-3** | Behind-the-scenes Twitter/X thread (5 tweets max): the gap analysis from `docs/mcp-landscape.md` table, no repo link yet. Builds curiosity. | `docs/mcp-landscape.md` excerpt |
| **D-1** | Final pre-flight: `pnpm validate` clean, OG image set, README hero updated, video uploads complete (unlisted on YouTube, native upload draft on LinkedIn). Banned-words sweep on every doc. | All |
| **D0** | Coordinated drop. 09:30 BRT: LinkedIn EN. 10:00 BRT: LinkedIn PT-BR. 10:30 BRT: ServiceNow Community post. 11:00 BRT: dev.to tutorial publishes. 12:00 BRT: 90s video shared on X/Twitter with link to repo. | 1, 2, 5, 6, 7, 8 |
| **D+1** | Hashnode part 1 publishes (the thesis post). Single LinkedIn share. | 9 |
| **D+3** | Hashnode part 2 publishes (four-block contract). Show HN goes live (~13:00 BRT = 09:00 PT). Stay at keyboard for first 2 hours. | 10, 12 |
| **D+5** | Hashnode part 3 publishes (MCP chain). Cross-link from part 2 footer. Single LinkedIn share. | 11 |
| **D+7** | Newsletter outreach round 1: Latent Space, Ben's Bites, TLDR AI. One email each, personalized opener, pitch from `newsletter-pitch.md`, demo GIF inline. | 13c |
| **D+10** | Newsletter outreach round 2: ServiceNow Community newsletter, MCP digests (modelcontextprotocol.io / Smithery / Glama). | 13c |
| **D+14** | Open RFC issues on Anthropic Cookbook + OpenAI Codex examples. Wait for reaction before opening PRs. | 13a, 13b |
| **D+21** | If RFC issues got positive signal, open the PRs. Not before. | 13a, 13b |
| **D+30** | Review metrics: GitHub stars, repo unique visitors, LinkedIn impressions on D0 posts, dev.to reads, Hashnode reads, Show HN final ranking, newsletter pickups. Adjust the next cycle based on what worked. | All |

## Pre-flight checklist (run on D-1 evening)

- [ ] `pnpm install && pnpm validate` clean on a fresh clone.
- [ ] `docs/assets/og-default.png` and `docs/assets/og-ptbr.png` committed and set as repo Open Graph image via GitHub Settings.
- [ ] Repo topics, description, homepage set per `repo-topics.md`.
- [ ] README hero image embed renders correctly on GitHub mobile.
- [ ] LinkedIn EN post copy banned-words-swept and reviewed by one trusted reader.
- [ ] LinkedIn PT-BR post copy ditto.
- [ ] 90s video EN + PT-BR uploaded native to LinkedIn as drafts (not posted), captions set, thumbnail uploaded.
- [ ] 5-minute walkthrough on YouTube as unlisted, captions hand-corrected.
- [ ] dev.to tutorial saved as draft, code blocks tested by copy-paste.
- [ ] Hashnode parts 1, 2, 3 saved as drafts, cross-links between them set.
- [ ] Show HN copy under 80 chars in title, body under 250 words.
- [ ] All cold-email targets identified, names spelled correctly.
- [ ] Disclosure paragraph (no affiliation, personal capacity) present in every long-form asset.

## Banned words (sweep all docs before D-1)

`ensure`, `crucial`, `vital`, `journey`, `embark`, `unleash`, `dive`, `delve`, `plethora`, `indulge`, `unlock`, `unveil`, `elevate`, `landscape`, `navigate`, `daunting`, `game changer`, `stand out`, `unique blend`, `enhancing`, `just` (standalone). PT-BR additions: `jornada`, `mergulhar`, `desbravar`, `alavancar`, `transformacional`, `divisor de aguas`.

## Risk-adjusted ordering rationale

The drop order is built around three constraints:

1. **The four-block thesis must land before the demo videos.** If readers see Pierrondi EA in action without the editorial argument, they pattern-match it as "yet another AI agent." LinkedIn launch posts carry the thesis (D0). Hashnode part 1 anchors it (D+1). Demos and tutorial reinforce.
2. **Show HN comes after dev.to + Hashnode part 1 are public.** HN readers Google the project name. If the only result is a GitHub README, the click-through is shallow. Two prior posts give them depth before they vote.
3. **Anthropic / OpenAI PRs come last because they need traction first.** A PR with 0 stars and 50 stars get treated very differently. Gather social proof in the first 14 days before going to the upstream repos.

## Metrics to capture (running)

- GitHub: stars, unique visitors (from `gh api repos/.../traffic/views`), referrers.
- LinkedIn: impressions, reactions, comments, shares per post (D0, D+1, D+3, D+5).
- dev.to: reads, reactions, comments.
- Hashnode: reads per part, time-on-page, referrals from LinkedIn.
- Show HN: rank trajectory (front-page hits, comment count, points), and the substance of the top 3 critical comments.
- Newsletter pickups: yes/no per outlet, click-through if reported by editor.
- Anthropic Cookbook + Codex examples: RFC issue reactions, PR status.

## What to not do during the launch window

- Do not respond to praise comments with `Thank you!`. Respond with substance ("the gallery 01 case is the one I keep using; here is the spreadsheet"). Praise without substance lowers the post's average dwell time.
- Do not pitch in DMs to ServiceNow internal channels. The disclosure paragraph (`built in personal capacity, not affiliated`) is the entire reason this stays clean.
- Do not respond to Show HN troll comments. Read once, reply only if the comment makes a substantive technical claim that is wrong.
- Do not over-post on D0. One LinkedIn post per language per day, ServiceNow Community post, dev.to publish — that is enough. Multiple LinkedIn posts in 24 hours splits the algorithmic ranking and both posts under-perform.
- Do not change the pinned tweet during the launch week. Stable URL + stable thumbnail.

## Open questions / TODO

- Confirm Vercel deploy URL for `apps/web` before D-3 so `repo-topics.md` homepage line is accurate.
- Decide: do we ship the 90-second video on the README hero (auto-play GIF) or keep the static OG-style hero image? Latter is safer for slow connections.
- Confirm with Loom Pro that captions render in the embed with the language toggle (EN/PT) and not just on the Loom-hosted URL.
- Finalize the cold-email contact list for the 5 newsletter targets at least 3 days before D+7.
