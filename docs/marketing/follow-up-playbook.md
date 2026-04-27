# Follow-up Playbook — Engagement to Now Assist POC

> Funnel ops doc. Every signal that arrives via LinkedIn, GitHub, or the web app moves through these five stages. Each stage has a template, a qualification rule, an anti-pattern, and an SLA.

## Stage map

```
Sinal -> Resposta inicial -> Conversa -> Discovery call -> Handoff Now Assist POC
```

Each stage is a Linear status in the `Follow-up` project. A signal that does not advance within the SLA gets marked `cooled` and re-enters the rotation only on a fresh trigger.

LGPD note (applies to every stage): never store data the contact did not knowingly share. Public LinkedIn profile + what they wrote in DM is in scope. Internal screenshots, internal email, anything the contact did not send is out of scope. Never paste a contact's words into the public repo without written consent.

---

## Stage 1 — Sinal

A signal is any one of: comment on a Pierrondi post, profile view spike, DM received, post saved, post shared, repo star/fork from a recognizable buyer, GitHub issue from a known company.

### How to detect

- LinkedIn notifications (manual scan, twice a day).
- GitHub watch list (Paulo follows known FSI accounts).
- Web app session log (referrer = LinkedIn or community).
- Linear `Daily Promo` cycle, `Posted` issue, comments thread.

### How to prioritize

Score each signal 1-3 on each axis:

| Axis | 3 | 2 | 1 |
| --- | --- | --- | --- |
| Buyer fit | Decision-maker FSI BR | ServiceNow lead at FSI | Practitioner anywhere |
| Specificity | Named a real metric/pain | Asked a real question | Generic praise |
| Recency | Within 24h | 1-3 days | Older |

Total >= 7 -> respond same day. 5-6 -> respond within 48h. <5 -> log only, no response unless they re-engage.

### Anti-pattern

- Responding to every signal. Praise without substance is not a buyer.
- Auto-liking back. Looks low-effort. Skip it.

### SLA

- High-score signals: respond < 4h during BR business hours, < 12h otherwise.

---

## Stage 2 — Resposta inicial (<= 2h after detection)

The first message decides if the signal becomes a conversation or dies. Voice: Constructive Challenger. Short. One question.

### Templates

**Variant A — comment on a post (public reply, then DM):**

> Public reply:
>
> "<First name>, the angle that matters here is <one specific point from their comment>. What number are you trying to move?"
>
> DM follow-up (1h later):
>
> "Saw your comment on the <topic> post. The piece I did not write in public: <one sentence specific to their situation>. What is the current metric on your side, and who owns it?"

**Variant B — profile view from a buyer persona (no public message yet):**

> "<First name>, your profile suggests <role/company>. The Pierrondi EA repo is built for the kind of FSI cases you run. One question to test fit: what is the one outcome you would want to move 90 days from now if Now Assist were a free credit? No pitch — testing if the repo is useful to you."

**Variant C — direct DM with a specific question:**

> "Direct answer: <one-line answer>. Longer version is in <link to specific gallery case or doc>. The follow-up I would push back on: <one challenger question>. If you want, 20 minutes next week to walk through your case shape — no demo, just discovery."

### Qualification signals (advance to Stage 3)

- They reply with a specific metric, pain, or system name.
- They ask a follow-up that requires more than 2 sentences to answer.
- They share a piece of their internal context.

### Recoil signals (do not advance)

- "Looks great, thanks!" with no follow-up.
- Job search messages.
- Vendor pitches at you.
- Generic networking ask.

### Anti-pattern

- Pasting a deck. The repo link is the deck.
- Asking for a meeting in the first message. Earn the meeting in stage 3.
- Long paragraphs. Three sentences max.

### SLA

- Reply within 2h business / 12h non-business.
- If no reply in 5 days, send one nudge ("still interested? if not, no worries"). After that, mark `cooled`.

---

## Stage 3 — Conversa (DM or email)

Goal: qualify the case enough to know whether a 30-min discovery call is worth Paulo's time. Aim for 3-5 message exchanges, not 15.

### Templates

**Variant A — qualifying outcome:**

> "To frame fit: if we ran Pierrondi EA on your case, the four-block answer would need a current-state metric and an owner. On your side: what is the one number that would move, and who carries the quota for it?"

**Variant B — qualifying value:**

> "<First name>, before a call: if the outcome you described moved by 30%, what is that worth in BRL/yr or USD/yr to your business? Range is fine. If the answer is < 6 figures, a 30-min call is the wrong format and a doc swap is better."

**Variant C — qualifying readiness:**

> "Two practical asks before we book time: (1) is Now Assist Pro Plus or Pro available in the instance, or is procurement still open? (2) is there a named decision-maker for this outcome, or is it still a working group? No-judgment answers — they decide whether a discovery call or a deeper async exchange fits."

### Qualification signals (advance to Stage 4)

- They name a metric and a value figure.
- They name a decision-maker (themselves or someone else).
- They confirm a Now Assist surface is in scope or in procurement.
- They ask "what would the next step look like?"

### Recoil signals

- "We are still in early discovery." -> stay async, share a gallery case, do not book a call.
- "Send me a deck." -> they are evaluating vendors, not buying. Send the repo link, not a deck.
- "Can you set up a meeting with my team?" -> too early. One person first.

### Anti-pattern

- Booking the call before the value figure exists. The call burns 60 min combined for both sides and produces nothing.
- Switching to a sales tone ("our solution"). Stay in EA voice.
- Asking 10 questions in one message. One per exchange.

### SLA

- Each message exchange should turn around within 24h business.
- If 7 days pass with no advance, mark `cooled`.

---

## Stage 4 — Discovery call (30 min)

Format: see `docs/marketing/discovery-call-roteiro.md`. Outcome of the call is one of three:

1. Advance to Stage 5 (handoff Now Assist POC).
2. Schedule a deeper discovery (architecture review, async).
3. Stop. The case does not justify a Now Assist line item.

### Templates (calendar invite + pre-read)

**Calendar invite body:**

> "30 min discovery — <case shape>. Goal: complete a four-block outcome contract for your case (outcome, value, deliverables, risks). Outputs: a one-page brief and a yes/no on a Now Assist POC.
>
> Pre-read (5 min): <link to one Pierrondi gallery case in the same domain>.
>
> If something blocks the call, just tell me — async works too."

**T-1 day reminder DM:**

> "Tomorrow's 30 min — quick prep. Two numbers I will ask for: current-state metric, and what 30% improvement would be worth. If you do not have them, we will work with ranges. No deck. Bring the case."

**Post-call thank-you (sent within 2h):**

> "<Name>, summary attached as a one-pager. The four blocks are: <outcome>, <value>, <deliverables>, <risks>. Two next steps proposed: <option A>, <option B>. If neither fits, the third option is to pause and reconnect in <X> weeks. Which one?"

### Qualification signals (advance to Stage 5)

- The four-block contract closes (outcome metric, value figure, named owner, three deliverables, threshold-based risks).
- The contact agrees the next step is a POC and names who else needs to see the brief.
- A Now Assist surface is named with a credit estimate.

### Recoil signals

- The contact wants a custom build with no Now Assist surface fit. Refer to `docs/now-assist-playbook.md` and de-prioritize.
- Value figure is hand-wavy after two attempts. Stop, send the doc, revisit in 60 days.
- Decision-maker is two layers up and inaccessible. Switch to async until the decision-maker is reachable.

### Anti-pattern

- Pitching during the call. The call is discovery, not demo.
- Skipping the value question because the contact "obviously gets it." Ask anyway.
- Promising delivery dates. Pierrondi EA proposes; the AE/SE commits.

### SLA

- Discovery call must occur within 14 days of Stage 4 entry.
- One-pager goes out within 2h after the call.
- Decision on next step within 5 business days.

---

## Stage 5 — Handoff Now Assist POC

This is where Pierrondi the brand stops and ServiceNow the company takes over. Paulo wears his TAE hat here, but the doc trail must let any AE/SE pick up cleanly.

### Templates

**Internal handoff to AE/SE (email or Slack):**

> "Handoff: <account name> — Now Assist POC opportunity.
>
> Brief: <link to docs/marketing/handoff-to-ae.md filled for this account, in private notes>.
>
> Status: <Discovery completed YYYY-MM-DD / Decision-maker confirmed: name, role / Surface fit: <surface> / Credit budget hypothesis: <BRL/yr> / Outstanding blockers: <list>>.
>
> Proposed next step: <POC scoping call / technical deep-dive with SE / commercial alignment>.
>
> What I need from you: <one specific ask>.
>
> Pierrondi EA materials referenced: <gallery case ids + any agent specs already shown to the customer>."

**Customer-facing transition message:**

> "<Name>, looping in <AE name> from the ServiceNow account team. They own the next phase — POC scoping, commercial alignment, and timeline. The discovery brief and the four-block contract are with them, no need to repeat. From this point I stay available as architect-on-call; <AE name> drives the line item."

### Qualification signals (POC moves forward)

- AE confirms account is named and assignable.
- Decision-maker accepts the POC frame.
- Now Assist Pro Plus or Pro is contractable.
- Customer confirms PDI access or POC environment.

### Recoil signals

- Account is in another segment with a different AE who will not move on it. Park, document, revisit per quarter.
- Decision-maker accepts the case but commercial constraints are binding (e.g. Now Assist credits not in the current contract). Document and revisit at next renewal.

### Anti-pattern

- Handing off without the one-pager. The AE will recreate it badly.
- Handing off mid-discovery. Finish stage 4 first.
- Treating handoff as the end. Stay on call as the architect; do not vanish.

### SLA

- Handoff doc filled within 48h after stage 4 completion.
- AE response within 5 business days.
- POC scoping call within 21 business days.

---

## Stage transitions and Linear automation

| From | To | Trigger |
| --- | --- | --- |
| (none) | Sinal | New DM, comment, profile view, repo star from buyer persona |
| Sinal | Resposta inicial | First reply sent within SLA |
| Resposta inicial | Conversa | Two-way exchange started |
| Conversa | Discovery call | Calendar invite accepted |
| Discovery call | Handoff Now Assist POC | One-pager sent + customer confirms next step |
| any | cooled | SLA missed |
| any | dropped | Customer declines or unfit |

## Cross-stage rules

- Never share another customer's name without consent. Use shape language ("a tier-1 BR bank", "a federal customer") with the contact's permission.
- Never fabricate a number. If a value figure is a working hypothesis, label it.
- Always offer an async out. Some buyers do not want a call; they want a doc. Respect it.
- Always close the loop. Even a "no" gets a polite acknowledgment within 24h.

## Drop-off heat map

The historic drop-off pattern (revisit quarterly):

| Transition | Typical drop |
| --- | --- |
| Sinal -> Resposta inicial | low (process is fast) |
| Resposta inicial -> Conversa | medium (cold reply) |
| Conversa -> Discovery call | high (commitment friction) |
| Discovery call -> Handoff | medium (value figure missing) |
| Handoff -> POC | medium (commercial gate) |

The biggest leverage point is `Conversa -> Discovery call`. The qualifying-readiness template above is the most-used asset in this stage.
