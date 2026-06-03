# Video pack — 2026-04-27

LinkedIn product reveal for ServiceNow Agent Army. Square 1080x1080, 50 seconds, 60fps, no audio. ServiceNow palette (deep teal · action blue · Now green) with Lato typography.

Final deliverable: [agent-army-promo/renders/final-v2-60fps.mp4](agent-army-promo/renders/final-v2-60fps.mp4)

## What's here

- `agent-army-promo/` — HyperFrames composition (HTML source). Run `npx hyperframes preview` from the project dir to live-edit, `npx hyperframes render` to re-export.
- `agent-army-promo/renders/` — final MP4 outputs.
- `screenshots/` — raw 1440x900 captures of the web app at 2x DPI, used as backgrounds in the composition.
- `linkedin-caption.md` — EN + PT-BR caption ready to paste into LinkedIn.

## Re-render

```bash
cd marketing/video-2026-04-27/agent-army-promo
npx hyperframes lint
npx hyperframes render --quality high --fps 60 --output renders/final-v2-60fps.mp4
```

`high --fps 60` produces the file you should post. Use `--quality draft` for iteration only.

## Re-capture screenshots

```bash
# from repo root, dev server must be running on :3003
node scripts/capture-shots.mjs
cp marketing/video-2026-04-27/screenshots/*.png marketing/video-2026-04-27/agent-army-promo/
```

## Storyboard (50s)

| Scene | Time | Hero | Caption |
| --- | --- | --- | --- |
| 1 | 0–6.5s | Title card | Outcome before output. Twenty advisors. Pierrondi EA leads. |
| 2 | 6–13s | Problem frame | Most ServiceNow advice is theater. Outcome · value · deliverables · risks. |
| 3 | 12.5–23s | App in motion | One problem in. Twenty advisors deliberate. EN or PT-BR. |
| 4 | 22.5–33s | Output cards | Four artifacts: agent spec · workflow · NASK skill · SDK scaffold. |
| 5 | 32.5–43s | Claude Code + Codex terminals | Drive it from Claude Code. Or Codex CLI. Same army, your editor. |
| 6 | 42.5–50s | CTA | Outcome. Then output. github.com/paulopierrondi/servicenow-agent-army |

## Posting checklist

- [ ] Upload MP4 as native LinkedIn video (not a link)
- [ ] Caption: copy from `linkedin-caption.md` (EN + PT-BR — pick one as the primary, or post twice)
- [ ] Hashtags: `#ServiceNow #AIAgents #NowAssist`
- [ ] LGPD: no client name, no real PII (verified by construction — all metrics from gallery cases)
- [ ] CTA: one specific question + repo link
- [ ] Telemetry: log T+24h and T+7d in Linear `Daily Promo` issue
