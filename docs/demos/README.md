# Demos — Loom Recording Scripts

> Three 5-minute walkthroughs of the ServiceNow Agent Army repo. These are recording scripts, not edited videos. Paulo opens the script on a second monitor while Loom records.

## Index

| # | Demo | Domain | Now Assist surface | Apply path | Loom URL |
| --- | --- | --- | --- | --- | --- |
| 1 | [CMDB Health Check](./01-cmdb-health-check.md) | ITOM / Platform | Now Assist Discovery insights | Read-only via MCP + Fluent SDK preview | TBD |
| 2 | [Incident Resolution Plan](./02-incident-resolution-plan.md) | ITSM | Now Assist for ITSM (Resolution Suggestion + Summarization) | mcp-write dry-run -> approval token -> sub-prod | TBD |
| 3 | [Request Fulfillment SDK](./03-request-fulfillment-sdk.md) | Platform / ITSM | Now Assist Catalog Search + Now Assist for Code | ServiceNow SDK 4.6 Fluent build + deploy | TBD |

Recommended viewing order: 1 -> 2 -> 3. Demo 1 establishes the council pattern with zero write risk, demo 2 shows the guarded-write flow end-to-end, demo 3 shows source-driven deploy via Fluent.

## Hardware setup

- 14"+ laptop or external monitor; second monitor for the script
- Built-in mic acceptable; external USB mic preferred for clarity
- Loom desktop app, 1080p, mic + screen + face cam
- Wired internet (PDI is sluggish over residential WiFi)
- 16pt terminal font, default zsh prompt, no oh-my-zsh banner noise
- Browser: Chrome with PDI tab pre-authenticated
- macOS: `Do Not Disturb` on; close Slack, mail, calendar; disable notifications

## Software prerequisites

- Repo cloned at `/Users/paulopierrondi/servicenow-agent-army`
- `pnpm install` complete; `pnpm --filter @servicenow-agent-army/mcp-write build` succeeded
- `.env` populated with `SERVICENOW_INSTANCE_URL`, `SERVICENOW_TOKEN`, `MCP_WRITE_SIGNING_KEY`
- ServiceNow PDI on Yokohama or Zurich family (script flags `[VERIFY ON YOUR INSTANCE]` where needed)
- Claude Code or Codex CLI authenticated and warm
- Sub-prod target picked; never record against prod

## Recording method

- **Take the narration first, then the screen.** PDI latency is unpredictable. Record audio over an early take and re-cut visuals if the screen shoot drags.
- **Two takes per demo minimum.** First take catches stumbles; second take is the keeper.
- **Stop the timer at 5:00 hard.** If the council deliberation streams long, cut to a B-roll of `cat workflow.json` while it finishes.
- **No background music.** ServiceNow audience is enterprise; a quiet take signals seriousness.
- **One-shot if possible.** Loom edits look amateur. If you fluff a sentence, restart that beat and Loom-trim later.

## Editing minimum

- Trim head + tail of each take
- Auto-caption via Loom, then hand-edit ServiceNow product names (resolution suggestion, Now Assist Skill Kit, Fluent SDK)
- Add a 3-second title card with the demo name and your handle
- Export 1080p MP4 + Loom shareable link

## Distribution

- Upload to Loom workspace
- Mirror to Drive (`servicenow-agent-army/demos/`) for offline access
- Embed Loom URL in this README and the repo `README.md` hero block
- Pin in LinkedIn post + GitHub Discussions release thread
