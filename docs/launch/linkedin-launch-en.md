# LinkedIn launch post — EN

> Format: long-form, story-driven. Word target: 280-340. Two **bold** Unicode emphases max. Three hashtags. Repo URL in the body, not as a link preview only — LinkedIn ranks text-with-link better than link-only.

## Title (LinkedIn does not use titles, but for our archive)

ServiceNow Agent Army — outcome-first AI agent kit, public, MIT.

## Hook (line 1, scroll-stopper)

Most ServiceNow advice is theater. So I built an advisor that refuses to draw architecture before the value question is answered.

## Body

Most ServiceNow advice is theater. So I built an advisor that refuses to draw architecture before the value question is answered.

The pattern I keep seeing in the field: a junior builder gets handed "an AI agent for ITSM," lands on AI Agent Studio guided setup, sees Now Assist Skill Kit on the side, sees ServiceNow Build Agent in the same release, and freezes. Three new surfaces every family release. No consistent advisor. The CTA approves the spec because it looks defensible. The platform team finds out in production.

The miss is not technical. It is editorial. Nobody asks the value question first.

So I built **Pierrondi EA** — the headliner of an open-source kit on GitHub. Every Pierrondi EA response carries the same shape, no exceptions:

- Outcome (90 days): one metric, one direction, one number.
- Value: currency figure with the trade-off stated.
- Deliverables: three to five concrete items, one named owner each, with a date.
- Risks: at most three, each with a go/no-go threshold.

If any of the four blocks is weak, Pierrondi EA stops and asks. It does not draw boxes to be helpful. Once the value question is answered, the rest of the army follows: Business Analyst captures requirements, CTA frames boundaries, Workflow Composer drafts AI Agent Studio steps, Guardrails Reviewer locks the approval flow, ITSM/ITOM/CSM specialists pull domain best practices, Now Assist Coach picks the surface, ATF Test Generator builds the regression suite. **Twenty advisors.** Pierrondi EA leads.

Two MCP servers ship with the kit. One read-only by construction — zero write code paths in the binary. The other guarded — every production change runs through dry-run, signed approval token, append-only JSONL audit, and per-record rollback. I inventoried nine community ServiceNow MCP servers. None ship that chain end-to-end. That is the gap this repo owns.

What is open-source: the 20 advisor cards, the SADA Framework, both MCP servers, the Next.js catalog web app, the validator, the prompt packs. MIT license. What is optional and private: the FSI Brazil archetypes, the SADA scoring rubric, the operational telemetry. The army works without them.

Honest about what ServiceNow exposes via Fluent SDK 4.6 (`AiAgentWorkflow`, NASK APIs, auto-ACL) and what still passes through guided setup (Now Assist Guardian policy, AI Agent Studio orchestration UI). No fake REST APIs.

Repo: github.com/paulopierrondi/servicenow-agent-army

What is the last architecture proposal you saw that had a value number attached?

#ServiceNow #NowAssist #AIagents

## Visual / attachment

- Primary: 90-second video upload (native, not YouTube link). Use `agent-army-launch-90s-en.mp4` from `docs/launch/video-90s-script.md` output.
- Fallback if video not ready: the OG default image (`docs/assets/og-default.png`).

## Posting checklist

- [ ] Post between 09:00 and 10:30 BRT on a Tuesday or Wednesday (best LinkedIn engagement window for B2B tech in LATAM).
- [ ] Tag no one in the first hour. Tagging in the first hour suppresses organic reach.
- [ ] Repo URL in the post body — LinkedIn algorithm penalizes outbound links less than it used to, but still keep the URL inline, not in a comment.
- [ ] Hashtags only at the end. Three max.
- [ ] After 60 minutes, drop a first comment with: "If you want the PT-BR version with FSI Brazil context, link in profile." This bumps the post and seeds the bilingual angle.
- [ ] Reply to every comment in the first 4 hours. The first 4 hours determine the next 24.

## What works in the comment thread

- "What is the last architecture proposal you saw with a value number attached?" — opens replies that fuel engagement.
- "Pierrondi EA refuses to design without a metric. What metric is your Now Assist project missing?" — bridges to specific commenters.
- Share a single follow-up snippet (one of the four blocks of an example). Do not re-paste the whole repo README.

## What does not work

- Asking for stars on day 0 — comes across promotional, drops algorithmic ranking.
- Tagging Anthropic, OpenAI, ServiceNow accounts — looks like begging, drops ranking.
- Cross-posting to a personal page first then re-sharing on a company page — only one of the two will rank.
- Adding the `#100DaysOfCode`, `#AI`, `#TechCommunity` hashtags — too generic, dilutes targeting. Stick to ServiceNow + NowAssist + AIagents.

## Banned-words sweep before publish

Re-read the post and verify zero use of: ensure, crucial, vital, journey, embark, unleash, dive, delve, plethora, indulge, unlock, unveil, elevate, landscape, navigate, daunting, game changer, stand out, unique blend, enhancing, just (standalone, not "just in case").

## Length sanity

- LinkedIn truncates at ~210 characters in feed view. The first sentence is the hook. The hook here ends at 116 characters. Good.
- Total post target: 1900-2200 characters (LinkedIn allows 3000). The body above is ~1850 — under budget.
