# Discovery Call — Roteiro 30 minutos

> Pierrondi EA voice. Outcome before output. The call closes a four-block contract or the call ends without a forced next step.

## Pre-call setup (T-1 day)

- Send T-1 reminder DM (template in `follow-up-playbook.md`).
- Open a fresh `meddic-light` note (`docs/marketing/meddic-light-template.md`).
- Skim the contact's last 3 LinkedIn posts. Note one specific signal to reference.
- Open one matching gallery case in another tab (rapid reference, do not screen-share by default).

## Call structure

| Block | Time | Goal |
| --- | --- | --- |
| Framing | 0-3 min | Set frame, get permission to take notes |
| Outcome | 3-10 min | Lock outcome metric (one metric, one direction, one number, 90 days) |
| Pain & value | 10-20 min | Quantify current state and cost of delay |
| Next step | 20-25 min | Propose POC, deeper discovery, or stop |
| Handoff & commitment | 25-30 min | Align AE/SE handoff, set commitments |

## 0-3 min — Framing

Open with one line. No icebreaker.

> "Thanks for the 30 minutes. The frame I want to test: at the end of this call we either have an outcome metric, a value number, and a yes/no on a Now Assist POC, or we agree this is not the right format and switch to async. Sound fair?"

Get permission to take notes:

> "I take structured notes for the brief I will send back. They live in my private notes, nothing is shared without your sign-off. OK to proceed?"

If they push back on the structure, soften but keep the frame: "We can be flexible on order, but I will still try to leave with a metric and a number."

## 3-10 min — Outcome

Goal: leave this block with one metric, one direction, one number, 90 days.

**Use these questions in order. Stop at the first one that produces a usable answer.**

1. "If 90 days from now this case worked, what number would have moved, and by how much?"
2. "What is the current-state value of that number? Range is fine."
3. "Who carries quota or KPI on that number? A name, not a team."
4. "What is the cost of doing nothing for 90 more days?"
5. "If you could change only one number for this case, which one?"

If by minute 8 there is still no metric, push back once:

> "If we cannot name a number, the four-block does not close, and a Now Assist POC is the wrong shape. Want to switch this to async and revisit in two weeks?"

## 10-20 min — Pain and value

Goal: leave this block with a value figure (BRL/yr or USD/yr) and a stated cost-of-delay.

**SADA-driven question bank (15 ready-to-use):**

1. "What surface is this happening on today — ITSM, ITOM, CSM, HR, custom?"
2. "What is the volume per month (tickets, requests, calls, alerts)?"
3. "What is the average handle time, per item, today?"
4. "What is the analyst loaded cost per hour (or per minute)?"
5. "Which step in the process is the slowest? What % of total time is in that step?"
6. "Has anyone tried to fix this before? What happened?"
7. "What is the SLA target vs actual today?"
8. "Where does Now Assist Pro Plus sit in your contract — already, on roadmap, not at all?"
9. "What is the LGPD posture — DPO sign-off needed for AI on this data?"
10. "If you delivered this in 90 days, who notices first — CIO, CFO, customer NPS, regulator?"
11. "Which other systems have to play nice — CMDB, integration hub, custom portal?"
12. "What does a failed POC look like to you? What is the threshold to stop?"
13. "Who in your org has veto on the rollout? When do they typically engage?"
14. "What is the change-window cadence — weekly, monthly, quarterly?"
15. "What is one thing you tried with another vendor that did not work, and why?"

Park the value figure in the four-block draft as you go. If the contact gives no source, label it `working hypothesis until baseline confirms`.

## 20-25 min — Next step

Three exits, propose only one based on what closed:

**Exit A — POC Now Assist:**

> "Based on what closed: outcome <metric>, value <figure>, surface <surface>. Next step I would propose: a 4-week Now Assist POC scoped to <one skill / one workflow / one surface>. I will hand the brief to our AE on the account, you confirm decision-maker and procurement readiness. Does that match?"

**Exit B — deeper discovery:**

> "The case is real but the value figure is not strong enough yet. Next step: a 14-day baseline on <metric>, then a follow-up 30 min. Async in between. Faster than booking a POC on a soft number."

**Exit C — stop:**

> "Honest read: this case is interesting but the cost of delay is too low to justify a Now Assist credit line right now. The right move is to revisit in 60 days, or solve it with the platform-native path first. I will send the doc."

## Calibrated escape phrases (ready to use)

When the case does not justify continuing — say it cleanly, do not waste their time.

1. "Honest read: the value figure as it stands does not justify a Now Assist line item. The right call is to fix this with the platform first and revisit in 60 days. I will send a one-page note on what that path looks like."
2. "Pierrondi EA's job is to refuse architecture without a value number. We do not have one yet. Two weeks of baseline data on your side, then a 15-min follow-up. No call until then."
3. "What you described is closer to a process fix than an AI fix. Booking a POC would be a misuse of credits. I will share two gallery cases that look similar so you can self-serve, and we close the loop here."

## 25-30 min — Handoff and commitment

Close with three explicit asks:

1. "I will send a one-pager within 2 hours. It will have the four blocks. You will tell me if any number is wrong."
2. "If we go to POC, I will loop in <AE name> from the ServiceNow account team within 48h. They take it commercial, I stay on as architect."
3. "Decision on next step from your side by <date, 5 business days>. Async over email is fine."

End on the time. 30 minutes means 30 minutes. Going over signals you are selling.

## Post-call checklist (within 2h)

- [ ] One-pager sent (four-block format from `pierrondi-ea-positioning.md`).
- [ ] MEDDIC-light note filled (`docs/marketing/meddic-light-template.md`).
- [ ] Linear `Follow-up` issue advanced to next stage.
- [ ] D+1 follow-up DM scheduled if no response by 17h next day.
- [ ] Handoff doc started if exit A.
- [ ] Banned-words check on outgoing one-pager.
- [ ] LGPD check: nothing in the doc that the customer did not authorize.

## D+1 follow-up

If no acknowledgement on the one-pager by 17h next day, send:

> "<Name>, the one-pager from yesterday — any number you want challenged before I move on the AE handoff? Quick yes/no is fine."

If silence by D+5, send:

> "Closing the loop unless you tell me otherwise. The one-pager stays on my side; ping me if the case re-activates."

## Anti-patterns during the call

- Demoing the web app or CLI. The call is discovery. Save the demo for a separate slot.
- Defending the repo when challenged. If they push, ask what would change their mind.
- Letting the contact monologue past minute 12 without anchoring to a number.
- Switching to "our team" or "our solution" voice. Stay first-person, stay challenger.
- Promising specific delivery dates. The architect proposes; the AE/SE commits.

## When to refuse the call entirely

If pre-call pings reveal:

- No decision-maker reachable in the next quarter.
- No Now Assist surface in scope and no plan to acquire one.
- Contact wants a free architecture review with no follow-on intent.

Cancel the call, send a doc, mark as `cooled`. Pierrondi EA's time is the scarcest resource in the operation.
