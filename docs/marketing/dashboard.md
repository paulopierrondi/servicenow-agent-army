# Marketing & Funnel Dashboard

> Weekly KPI dashboard for ServiceNow Agent Army. Source of truth for `Reach -> Engagement -> Inbound -> Adoption`. Output lives in `docs/metrics/YYYY-WW.md`, committed every Monday morning.

## Why this exists

Without a dashboard the cycle becomes content for content's sake. The dashboard answers one question every Monday: did the last 7 days move pipeline, or did we just make noise?

A week with rising `Reach` and flat `Inbound` is a yellow flag. Two such weeks is a red flag and triggers a retro on the rotation.

## Four KPI buckets

The dashboard separates funnel stages, not channels. A LinkedIn impression and a GitHub star are both `Reach`. A DM and a call request are both `Inbound`. Stage matters, channel does not.

### Bucket 1 — Reach

Top of funnel. Did people see it?

| KPI | Source | Cadence | Target W1 | Target W12 |
| --- | --- | --- | --- | --- |
| LinkedIn impressions (Pierrondi posts) | LinkedIn analytics export | weekly | 5,000 | 30,000 |
| LinkedIn profile views | LinkedIn analytics | weekly | 100 | 600 |
| LinkedIn follower growth | LinkedIn analytics | weekly | +25 | +120 |
| GitHub repo stars | GitHub REST | daily snapshot | 20 | 250 |
| GitHub repo forks | GitHub REST | daily snapshot | 3 | 40 |
| GitHub contributors | GitHub REST | weekly | 1 | 8 |
| Web app sessions | Vercel Analytics | weekly | 100 | 1,500 |
| CLI npm installs | npm download stats | weekly | 10 | 300 |

### Bucket 2 — Engagement

Did anyone do something with what they saw?

| KPI | Source | Cadence | Target W1 | Target W12 |
| --- | --- | --- | --- | --- |
| LinkedIn reactions on Pierrondi posts | LinkedIn analytics | per post | 30 | 200 |
| LinkedIn comments on Pierrondi posts | LinkedIn analytics | per post | 5 | 30 |
| LinkedIn DMs received | manual log + Linear | weekly | 3 | 25 |
| Gallery submissions (PRs to `gallery/`) | GitHub PR list | weekly | 0 | 4 |
| Web app deliberations executed | app logs | weekly | 20 | 600 |

### Bucket 3 — Inbound

This is the bucket that funds the operation. Reach without inbound is theater.

| KPI | Source | Cadence | Target W1 | Target W12 |
| --- | --- | --- | --- | --- |
| DMs from buyer personas | Linear `Follow-up` project | weekly | 1 | 8 |
| Discovery calls scheduled | Linear stage `Discovery scheduled` | weekly | 0 | 4 |
| RFP mentions referencing the repo | manual log | weekly | 0 | 2 |
| Customer asks ServiceNow Account team about the repo | Account team notes | weekly | 0 | 3 |

Buyer persona criteria for "DMs from buyer personas":

- Title contains: CIO, CTO, head of platform, head of ITSM, ServiceNow lead, transformation lead, AI lead, ops director.
- Industry FSI / public sector / large enterprise BR or LATAM.
- Engaged with at least one Pierrondi post in the last 14 days, or messaged after seeing the repo.

Random "interesting build" DMs from peers are logged in `Engagement`, not `Inbound`.

### Bucket 4 — Adoption

The bucket that proves the brand is working downstream.

| KPI | Source | Cadence | Target Q1 | Target Q4 |
| --- | --- | --- | --- | --- |
| Clients citing the repo in conversation | Account team notes | weekly | 1 | 12 |
| POCs Now Assist initiated tied to the repo | AE / SE handoff record | monthly | 0 | 3 |
| Now Assist credits attributed to repo-influenced deals | AE / SE record | quarterly | 0 | tracked |

Adoption is reported quarterly. Weekly attempts to track it become noise.

## Stack

| Layer | Tool | Notes |
| --- | --- | --- |
| Source: GitHub | GitHub REST `/repos/...` | Anonymous fine for stars, forks, contributors. Optional `GITHUB_TOKEN` env raises rate limit. |
| Source: LinkedIn | manual export + paste | LinkedIn API access requires a partner application. Until then, paste into `docs/metrics/YYYY-WW.md`. |
| Source: Linear | Linear API GraphQL | Cycle issues, follow-up funnel stages. |
| Source: Vercel | Vercel Analytics dashboard | Sessions and unique visitors. Manual capture weekly. |
| Compute | `scripts/metrics-snapshot.mjs` | Node 22 ESM zero-dep. Pulls GitHub data, counts gallery and catalog files, writes weekly markdown. |
| Output | `docs/metrics/YYYY-WW.md` | Committed every Monday before noon BR. |

## Output format

Each weekly file follows the same skeleton:

```
# Week YYYY-WW

Captured: YYYY-MM-DD HH:MM TZ

## Reach
- GitHub stars: <n> (delta +<n>)
- GitHub forks: <n> (delta +<n>)
- GitHub contributors: <n>
- LinkedIn impressions: <n>
- ...

## Engagement
- LinkedIn reactions (sum, week): <n>
- ...

## Inbound
- Buyer-persona DMs: <n>
- Discovery calls: <n>
- ...

## Adoption (rolling)
- ...

## Notes
- One-line lesson from the week.
- One-line decision for the next week.
```

The script generates the `Reach` block automatically. The other three blocks have placeholders that Paulo fills in before commit.

## Weekly ritual (Monday 09:00 BR)

1. `npm run metrics:snapshot` writes `docs/metrics/YYYY-WW.md`.
2. Paulo pastes LinkedIn numbers, Linear `Inbound` numbers, and the one-line lesson.
3. Commit the file.
4. Compare to last week. If two of the four buckets are flat or down, schedule a 30-min retro.

## Health rules

- If `Reach` rises and `Inbound` is flat for 2 weeks, the rotation is wrong. Pivot toward higher-cost-of-delay angles.
- If `Inbound` rises and `Adoption` is zero for 90 days, the handoff to AE is wrong. Run the handoff playbook end-to-end.
- If `Engagement` is high and `Inbound` is zero, the CTA is wrong. Replace "thoughts?" with a specific ask.

## Anti-patterns

- Treating LinkedIn followers as a goal. Followers without DMs is vanity.
- Tracking GitHub stars as the headline metric. Stars without inbound DMs is vanity.
- Reporting `Adoption` weekly. POCs do not move week over week. Quarterly only.
- Hiding flat weeks. A flat week with a documented reason is more useful than a green week with no story.

## Out of scope

- Paid promotion. The cycle is organic only. If paid is added later, it gets its own bucket.
- Personal-brand-only metrics (e.g. profile-view-to-follower ratio). Funnel-relevant only.

## Backlog (dashboard upgrades)

- LinkedIn API access via a partner app to remove manual paste.
- Auto-pull from Linear for `Follow-up` stage counts.
- Vercel Analytics export via `vercel env` and a webhook.
- Per-post attribution in `Inbound` (which DM came from which post).
