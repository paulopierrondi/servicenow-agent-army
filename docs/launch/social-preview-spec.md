# Social preview / Open Graph image spec

> Asset: `docs/assets/og-default.png` (1280x640) and `docs/assets/og-ptbr.png` (same dimensions). Used by GitHub Open Graph, LinkedIn link previews, X/Twitter card.

## Canvas

- Dimensions: 1280 x 640 px
- Safe area: 64 px padding on all sides
- Background: `#0B0F19` (matches dark-mode hero on web app)
- Accent: `#DC2626` (red-600, also used in web app and Linear board)
- Body text: `#E5E7EB` (gray-200)
- Subtle text: `#9CA3AF` (gray-400)

## Layout (default EN variant)

Left column (640 px wide, padded 64 px):

- Headline (Inter Bold 72pt, leading 0.95, color `#FFFFFF`):
  - "Outcome before output."
- Sub-headline (Inter Regular 36pt, leading 1.1, color `#E5E7EB`):
  - "Twenty advisors. Pierrondi EA leads."
- Repo URL (Inter Regular 28pt, color `#9CA3AF`):
  - "github.com/paulopierrondi/servicenow-agent-army"

Right column (640 px wide, padded 64 px):

- Diagram block (Excalidraw or hand-traced mermaid):
  - Top: a single rounded box "Pierrondi EA" with the four-block contract listed inside as four lines (Outcome / Value / Deliverables / Risks). Border `#DC2626`, fill `#111827`, text `#FFFFFF`.
  - Bottom: nine smaller rounded boxes in a 3x3 grid labeled CTA, BA, Workflow, Guardrails, ITSM, ITOM, CSM, Now Assist Coach, SADA Coach. Border `#374151`, fill transparent, text `#9CA3AF`.
  - Arrows from Pierrondi EA box down to the grid (single fan-out, color `#DC2626`).

## PT-BR variant

Same layout, swap text:

- Headline: "Outcome antes de output."
- Sub-headline: "Vinte advisors. Pierrondi EA lidera."
- Repo URL: same.

## Tools (free path)

- **Figma free** for the layout and typography. Use the Inter font (Google Fonts, free). Create one frame at 1280x640, duplicate for PT-BR.
- **Excalidraw** for the right-column diagram — exports to PNG with transparent background, drop into the Figma frame.
- **No paid stock**, no icons libraries with attribution requirements. Inter and the Excalidraw rough-hand style are both free of attribution.

## Inline SVG template (basic, customize in Figma)

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 640" width="1280" height="640">
  <rect width="1280" height="640" fill="#0B0F19"/>

  <!-- Left column -->
  <text x="64" y="200" font-family="Inter, sans-serif" font-weight="700" font-size="72" fill="#FFFFFF">Outcome before output.</text>
  <text x="64" y="290" font-family="Inter, sans-serif" font-weight="400" font-size="36" fill="#E5E7EB">Twenty advisors. Pierrondi EA leads.</text>
  <text x="64" y="540" font-family="Inter, sans-serif" font-weight="400" font-size="28" fill="#9CA3AF">github.com/paulopierrondi/servicenow-agent-army</text>

  <!-- Right column: Pierrondi EA card -->
  <rect x="720" y="80" width="496" height="200" rx="16" fill="#111827" stroke="#DC2626" stroke-width="3"/>
  <text x="744" y="120" font-family="Inter, sans-serif" font-weight="700" font-size="32" fill="#FFFFFF">Pierrondi EA</text>
  <text x="744" y="160" font-family="Inter, sans-serif" font-weight="400" font-size="20" fill="#E5E7EB">Outcome (90 days)</text>
  <text x="744" y="190" font-family="Inter, sans-serif" font-weight="400" font-size="20" fill="#E5E7EB">Value (currency + trade-off)</text>
  <text x="744" y="220" font-family="Inter, sans-serif" font-weight="400" font-size="20" fill="#E5E7EB">Deliverables (3-5, owner, date)</text>
  <text x="744" y="250" font-family="Inter, sans-serif" font-weight="400" font-size="20" fill="#E5E7EB">Risks (3 max, go/no-go)</text>

  <!-- Right column: 3x3 advisor grid (placeholder) -->
  <g font-family="Inter, sans-serif" font-weight="400" font-size="14" fill="#9CA3AF">
    <rect x="720" y="320" width="155" height="80" rx="8" fill="none" stroke="#374151" stroke-width="2"/>
    <text x="730" y="368" >CTA</text>
    <rect x="890" y="320" width="155" height="80" rx="8" fill="none" stroke="#374151" stroke-width="2"/>
    <text x="900" y="368" >BA</text>
    <rect x="1060" y="320" width="155" height="80" rx="8" fill="none" stroke="#374151" stroke-width="2"/>
    <text x="1070" y="368" >Workflow</text>

    <rect x="720" y="410" width="155" height="80" rx="8" fill="none" stroke="#374151" stroke-width="2"/>
    <text x="730" y="458" >Guardrails</text>
    <rect x="890" y="410" width="155" height="80" rx="8" fill="none" stroke="#374151" stroke-width="2"/>
    <text x="900" y="458" >ITSM</text>
    <rect x="1060" y="410" width="155" height="80" rx="8" fill="none" stroke="#374151" stroke-width="2"/>
    <text x="1070" y="458" >ITOM</text>

    <rect x="720" y="500" width="155" height="80" rx="8" fill="none" stroke="#374151" stroke-width="2"/>
    <text x="730" y="548" >CSM</text>
    <rect x="890" y="500" width="155" height="80" rx="8" fill="none" stroke="#374151" stroke-width="2"/>
    <text x="900" y="548" >Now Assist</text>
    <rect x="1060" y="500" width="155" height="80" rx="8" fill="none" stroke="#374151" stroke-width="2"/>
    <text x="1070" y="548" >SADA</text>
  </g>

  <!-- Fan-out arrows: Pierrondi EA bottom-center to advisor row centers -->
  <g stroke="#DC2626" stroke-width="2" fill="none">
    <line x1="968" y1="280" x2="797" y2="320"/>
    <line x1="968" y1="280" x2="968" y2="320"/>
    <line x1="968" y1="280" x2="1138" y2="320"/>
  </g>
</svg>
```

## Variant checklist

- [ ] Default EN: `og-default.png`. Headline "Outcome before output."
- [ ] PT-BR: `og-ptbr.png`. Headline "Outcome antes de output."
- [ ] Both exported at 1280x640 PNG, sRGB, under 1 MB.
- [ ] Pre-flight: open in `https://www.opengraph.xyz/` to verify GitHub render.
- [ ] Commit to `docs/assets/og-default.png` and `docs/assets/og-ptbr.png`.
- [ ] Update `README.md` to reference the new OG image (GitHub uses repo-level Open Graph image setting, not README inline).
- [ ] Set the repo Open Graph image via GitHub UI: Settings → Social preview → Upload `og-default.png`.

## Don't

- No emoji in the headline.
- No ServiceNow logo, no Anthropic logo, no OpenAI logo.
- No client logo, no partner logo, no person headshot in the OG (Pierrondi EA is text-only).
- No banned words (`elevate`, `unleash`, `unlock`, etc).
- No ALL CAPS in the headline — Inter Bold at 72pt already reads strong enough.
