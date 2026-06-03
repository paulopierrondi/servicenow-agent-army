# DESIGN — Codex + SDK pipeline promo (1080x1080)

ServiceNow palette consistent with c01 launch video. Same brand identity.

## Style prompt

Dark teal-navy enterprise platform. Lato 400/700/900. Sky blue (#00B0E5) as the action accent, Now green (#62D84E) for brand mark and success ticks. Sharp 4-6px radii. Hairline borders. Real ServiceNow product names: AI Agent Studio, NASK, Fluent SDK 4.6, Now Assist Guardian. The narrative: council → 4 gates → human approval → GPT Codex runs the official SDK → sub-prod result.

## Colors

- `#001d2b` background
- `#052633` background soft (terminal bg, code blocks)
- `#0a323e` card surface
- `#1a4456` border
- `#ebf2f5` foreground
- `#8da7b4` foreground muted
- `#5d7a87` foreground subtle
- `#00b0e5` action blue
- `#62d84e` Now green
- `#ed2a2d` danger (used sparingly on the "refused" moment)

## Typography

Lato. Black 900 for hero headlines, 700 for section labels and pills, 400 for body. Tabular numerics on data. Mono `JetBrains Mono` for terminal blocks.

## Motion

- Entrance only. `y: 16, opacity: 0` → final, 0.5-0.7s, `power3.out` / `expo.out`.
- 4 gates: stagger entrance, then sequential ✓ animation as approval lands.
- Codex terminal: line-by-line reveal (clip-path or opacity stagger), each ✓ pops in with `back.out(1.4)`.
- Crossfade between scenes (0.5s overlap, separate tracks).

## Narrative arc (50s)

1. 0-5.5s — Title: "From council to AI Agent Studio."
2. 5-12s — The 4 gates introduced (Scope · Necessity · ROI · Architecture).
3. 11.5-21s — Council deliberation in motion (reuse screenshots from c01).
4. 20.5-28s — Approval moment: 4 gates flip green, human approves.
5. 27.5-43s — Codex executes the SDK (terminal animation, sequential commands).
6. 42.5-50s — CTA: github + "outcome. then output."

## What NOT to do

- No purple/indigo accents — banned.
- No fake "auto-deploy to prod" claim.
- No suggesting Codex bypasses the gates.
- No over-decoration of the terminal — let the commands breathe.
- No emoji.
