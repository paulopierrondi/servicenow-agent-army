# DESIGN — ServiceNow Agent Army promo (v2, ServiceNow palette)

ServiceNow-leaning. Deep teal canvas, action blue primary, Now green for brand and success. Grounded enterprise tone — less "AI startup", more "platform tool".

## Style prompt

Dark teal-navy enterprise platform aesthetic. Lato typography (humanist, anchored), tight tracking on display only. Sky-blue action accent for buttons and active state, ServiceNow green for the brand mark and "done" states. Sharp 4–6px radii. Hairline borders. Real ServiceNow product names (AI Agent Studio, NASK, Fluent SDK 4.6, Now Assist Guardian) instead of generic AI buzzwords. Reads as a screen recording of a ServiceNow practitioner tool, not a Vercel landing page.

## Colors

- `#001d2b` background (deep teal, the "ServiceNow black")
- `#052633` background soft (form fields, code blocks)
- `#0a323e` card surface
- `#1a4456` hairline border
- `#ebf2f5` foreground
- `#8da7b4` foreground muted (cool gray-teal)
- `#5d7a87` foreground subtle
- `#00b0e5` action blue (one moment of color, primary CTA)
- `#62d84e` Now green (brand mark, "done" status, success)

## Typography

- Lato 400 / 700 / 900 for everything. Black weight (900) only for hero display.
- Tight tracking on display: `letter-spacing: -0.01em` at 90px+, `-0.005em` body.
- Tabular numerics on data: `font-variant-numeric: tabular-nums`.
- Section labels: 12px / 700 / uppercase / 0.08em tracking, color `#5d7a87`.

## Motion rules

- Entrance only. `y: 16, opacity: 0` → final, 0.5–0.7s, `power3.out` or `expo.out`.
- Crossfade between scenes (0.5s overlap on separate tracks).
- Subtle scale on screenshots, 1.0 → 1.04 over scene duration.
- No exit animations except the final scene.
- Vary easing: 3+ different eases per scene.

## What NOT to do

- No emojis, no decorative gradients across the canvas.
- No purple/indigo (`#5e6ad2`) — this is the Linear/Vercel color, banned here.
- No abstract "outcome · value · deliverables · risks" string repeated for decoration. Use it once, with shape.
- No filler captions ("amazing", "powerful", "transform"). Banned-words list applies.
- No giant emoji-style brand flourishes. The brand is the green dot.
