# Hashnode series — Part 1 of 3

> Tone: opinion / thought leadership. Audience: ServiceNow CTAs, EAs, platform owners, presales engineers. Length target: 1800-2200 words. The thesis is provocative on purpose.

## Title

Why most ServiceNow AI advice fails — and what to do about it

## Subtitle

Outcome before output, or it is theater.

## Cover image

Use `docs/assets/og-default.png` cropped to Hashnode's 1600x840 cover ratio.

## Tags

`ServiceNow` `AI` `Architecture` `Enterprise`

## Body

I have spent the last 18 months in front of ServiceNow customers asking a version of the same question: "what should we ship with Now Assist?" The answers I hear back from the room — including from people I respect, including from architects with senior titles — fall into the same three categories. All three are theater. Here is why, and what to do instead.

### Theater 1: the north star deck

The architect opens with a 12-slide deck. Slide 3 is a "north star architecture." It has AI Agent Studio in the center, NASK on the left, AI Control Tower on top, and arrows. Slide 7 is "value drivers" with phrases like "improved customer experience" and "reduced operational friction." Slide 10 is "next steps." The deck is internally consistent. It would survive a CAB review at most banks I work with.

It also has zero numbers attached.

The problem with the north star deck is not that it is wrong. The problem is that it is unfalsifiable. Nobody can tell you in 90 days whether the deck worked. Nobody can tell you what the platform team should stop doing if it did not work. Nobody can tell you what was the value of slide 3 versus slide 7. The deck is consensus-shaped. That is not the same as right-shaped.

I have watched programs run on north-star decks for 18 months and end with a CIO asking "so what changed." The architect's answer is always some version of "we built the foundation." That answer is theater. The CIO meant: what number moved.

### Theater 2: the surface map

The second pattern: a CTA hands the customer a "Now Assist surface map." It is a table with rows like:

- Now Assist Q&A: portal search
- Now Assist for Code: developer productivity
- Now Assist for Creator: flow generation
- Now Assist for ITSM/ITOM/CSM: domain skills
- AI Agent Studio: agentic workflows
- NASK: custom skills
- Build Agent: vibe coding

This is informationally correct. It is also operationally useless.

Useless because the customer's actual question was not "what surfaces exist." The customer's actual question was "given that I have one budget cycle, where do I spend the first BRL 280k of engineering and the first BRL 14k of Now Assist credits to move a number that my CIO can show the board." A surface map does not answer that question. A surface map turns the customer's prioritization problem into a documentation problem, and tells them to go read the docs.

### Theater 3: the "AI agent for X" reflex

The third pattern is the worst because it sounds like decisive action. The architect says: "let us build an AI agent for incident triage." Or "let us build an AI agent for KB curation." Or "let us build an AI agent for change risk."

These sound concrete. They are not. None of them carry an outcome metric. None of them carry a value figure. None of them name an owner. None of them carry a stop condition. They carry a noun phrase.

A noun phrase is not a project. It is a wish. The team that ships on a noun phrase always ships something. The thing they ship may or may not be what the customer needed. There is no way to tell from the noun phrase alone.

I have watched teams build "an AI agent for incident triage" three times in three customers in the last year. Two of them failed in the first 60 days for different reasons. One succeeded. The difference between the three was not the team's skill. The difference was that the successful one started from a value question and the other two started from a noun phrase.

### What to do instead

I am going to skip the false-modesty paragraph and tell you the answer. The answer is to refuse to design before the value question is answered. Concretely, that means every ServiceNow architecture proposal must arrive with four blocks attached. No block is optional. If any of the four is missing, the proposal is not ready.

**Block 1 — Outcome (90 days)**: one metric, one direction, one number. "Reduce p95 time-to-assignment from 7m to 2m for P1/P2 ITSM incidents in FSI Brazil banking domain." The outcome must be observable in 90 days, not 12 months. If it is not observable in 90 days, it is not an outcome — it is a wish.

**Block 2 — Value**: currency figure with the trade-off stated. "BRL 1.2M/yr saved at 18k incidents/yr (analyst time, 5 min/ticket * 4 BRL/min, conservative). Cost-of-build: BRL 280k one-time. Cost-of-run: BRL 14k/yr Now Assist credits. Working hypothesis until 14-day baseline confirms incident volume." Notice three things. First, the value figure has source data attached. Second, the cost-of-run is named (Now Assist credits are not free). Third, if the source data is not yet collected, the figure is labeled as a working hypothesis. No round numbers without source data.

**Block 3 — Deliverables**: three to five concrete items, each with one named owner and a date. "Skill prompt v1 for Now Assist Resolution Suggestions. Owner: ITSM lead, by W+2." Group ownership is not ownership. "The platform team owns this" is not a deliverable — it is a delegation of accountability into the void. One name per deliverable. Five maximum, because anything beyond five is a roadmap, not a deliverable list.

**Block 4 — Risks**: at most three, each with a stated go/no-go threshold. "Now Assist credit burn over 4k/mo. Threshold: pause at 3.5k. Mitigation: daily cap." The threshold is the part that matters. A risk without a threshold is a worry. A risk with a threshold is a circuit breaker.

If any of the four blocks is missing or weak, the architect stops and asks. The architect does not draw boxes to be helpful. The architect does not produce a north star to be polite. The architect refuses, on the record, to design without the four blocks.

This is uncomfortable for the architect. It is much more uncomfortable for the customer who arrived expecting a deck. It is also the only way I have seen ServiceNow AI projects ship value in 90 days.

### Why this is a different culture from "agile"

Some readers will pattern-match this to "user stories with acceptance criteria." It is not the same thing. A user story tells you what to build. An outcome tells you what the world should look like once you have built. Most ServiceNow programs over-index on user stories and under-index on outcomes. The result is a long backlog, none of which has a value number attached, all of which is "in progress."

The four-block contract is not stories. It is closer to a commercial bet. Each proposal is a bet on a number, with a thesis, a sizing, and a stop condition. If the bet fails, the architect knows because the threshold is named. If the bet succeeds, the architect knows because the metric is named.

### How I implemented this

I built a kit. It is open-source, MIT-licensed, and lives at [github.com/paulopierrondi/servicenow-agent-army](https://github.com/paulopierrondi/servicenow-agent-army). The headliner is **Pierrondi EA** — an advisor agent that refuses to design without the four blocks. It runs in Claude Code and Codex CLI. It hands off to 19 specialist advisors (BA, CTA, ITSM, ITOM, CSM, Workflow Composer, Guardrails Reviewer, etc.) once the value question is answered. Two MCP servers ship with it: one read-only by construction, one with dry-run + signed approval token + append-only audit + per-record rollback.

The kit does one thing the rest of the community does not. It enforces editorial discipline before it offers technical help. If you ask for "an AI agent for incident triage," Pierrondi EA does not start drawing. It asks: what number changes, what is it worth, who owns the deliverables, and where do we stop.

I have used this on three real FSI Brazil customer engagements in the last 90 days. In every case, the four-block contract surfaced an assumption that was wrong. In one case the assumption was that incident volume was steady; pulling the last 12 months showed it was trending down 8% quarter-on-quarter, and the value figure halved. In another case the assumption was that the risk team would approve auto-resolution; pre-DPO sign-off showed they would not, and the project re-scoped to suggest-only. In the third case, the four blocks held and the project shipped.

The point is not that the four-block contract makes everyone right. The point is that it makes everyone wrong faster. Wrong-fast is much cheaper than wrong-slow.

### What this looks like in practice

The next post in this series unpacks the four-block contract with three full examples (incident triage, CMDB health check, change risk). The third post goes deeper into the MCP server side: how to build dry-run + approval + audit + rollback so that production writes survive a CAB review.

If you want to skip the writing and try the kit:

```bash
git clone https://github.com/paulopierrondi/servicenow-agent-army.git
cd servicenow-agent-army
pnpm install
pnpm validate
pnpm --filter web dev
```

Open `http://localhost:3000`, paste your problem, toggle "Run Pierrondi EA first." If your problem cannot be reduced to a four-block contract, the advisor will tell you. That is the point.

### Disclosure

I work at ServiceNow as a Technical Account Executive in FSI Brazil. This kit is built and published in personal capacity. Not affiliated with or endorsed by ServiceNow, OpenAI, or Anthropic. Brand and product names belong to their respective owners.

## Read next

- Part 2: The 4-block contract — how Pierrondi EA frames every ServiceNow architecture decision (with three full examples)
- Part 3: Building MCP servers with real guardrails (dry-run + approval + audit + rollback)

## Posting checklist

- [ ] Hashnode draft, banned-words sweep done.
- [ ] Code blocks tested.
- [ ] Cover image uploaded.
- [ ] Tags set (4 max).
- [ ] Read aloud once — the thesis ("outcome before output, or theater") must land in the first 60 seconds of reading time.
- [ ] After publish, drop a single LinkedIn share with the title and URL. Do not re-paste the body.
- [ ] Add the post URL to `docs/launch/README.md` cronograma row D+1.

## What this post is *not*

- Not a tutorial. Tutorials are dev.to. This is the thesis post.
- Not a vendor pitch. The kit is mentioned twice. The argument has to land before the kit does.
- Not a credential drop. ServiceNow / TAE / FSI Brazil all live at the bottom in the disclosure paragraph, not in the lede.
