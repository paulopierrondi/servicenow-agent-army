# @servicenow-agent-army/web

Public Next.js 16 app for the ServiceNow Agent Army: catalog of advisors, mock deliberation
demo, and the future audit viewer for `mcp-write` flows.

## What it is today

- **Mock mode**: the home-page deliberation runs a deterministic, server-side simulation of the
  19-advisor council. No LLM calls. The same problem + domain pair always yields the same
  artifacts. Real Claude/Codex integration tracks under a separate issue.
- **Pages**:
  - `/` — hero, problem input, deliberation stream, output cards (agent spec, workflow steps,
    NASK skill prompt, ServiceNow SDK scaffold, Now Assist surface hook).
  - `/agents` — the 19 advisors loaded at build time from `catalog/agents.json`, grouped by
    function.
  - `/gallery` — placeholder until `catalog/gallery.json` lands. Per-slug pages render when items
    are added.
  - `/api/deliberate` — POST endpoint that returns a Server-Sent Events stream of the council
    deliberation.
  - `/api/auth/[...nextauth]` — NextAuth GitHub provider, only registered when both `GITHUB_ID`
    and `GITHUB_SECRET` are set. Without them the Sign-in button is hidden and the app stays
    fully usable.

## Run locally

```bash
cd apps/web
cp .env.example .env.local   # optional; fill GitHub vars only if you want auth
pnpm install                  # at repo root
pnpm --filter @servicenow-agent-army/web dev
```

Open http://localhost:3000.

## Build

```bash
pnpm --filter @servicenow-agent-army/web build
pnpm --filter @servicenow-agent-army/web start
```

The build compiles the catalog at request time via `node:fs` reads against `../../catalog/`.
The Next.js `outputFileTracingRoot` is pinned to the repo root in `next.config.ts` so
deployments include the catalog files.

## Deploy on Vercel

Zero-config. From the Vercel dashboard:

1. Import the repo.
2. Set the Root Directory to `apps/web`.
3. Set environment variables (all optional):
   - `GITHUB_ID`, `GITHUB_SECRET` — enables NextAuth GitHub sign-in.
   - `NEXTAUTH_SECRET` — required when GitHub auth is on.
   - `NEXTAUTH_URL` — set to the deployed origin in production.
   - `NEXT_PUBLIC_VERCEL_ANALYTICS=false` to opt out of analytics.

Vercel Analytics + Speed Insights are gated by `NODE_ENV === "production"` and the
`NEXT_PUBLIC_VERCEL_ANALYTICS` flag, so dev runs stay quiet.

## Stack

| Concern | Choice |
| --- | --- |
| Framework | Next.js 16 (App Router, RSC, streaming) |
| Runtime | React 19 + Node.js 22 LTS |
| Styling | Tailwind CSS 4 (PostCSS) |
| Lint/format | Biome (extends repo root config) |
| Auth | NextAuth.js 4 (GitHub provider, optional) |
| Telemetry | `@vercel/analytics` + `@vercel/speed-insights` |
| Validation | zod |

## Layout

```
apps/web/
  src/
    app/
      layout.tsx           shell + telemetry
      page.tsx             home: hero + input + deliberation
      agents/page.tsx      19 advisors grouped
      gallery/             list + detail (placeholder until gallery.json)
      api/
        deliberate/        SSE mock stream
        auth/[...nextauth] GitHub provider when env vars present
      globals.css          Tailwind + tokens
    components/            Nav, Footer, HeroInput, DeliberationStream, OutputCards, AgentCard,
                           GalleryCard
    lib/                   catalog readers, mock deliberation, domain constants
    types/                 zod schemas
  public/                  favicon
  next.config.ts
  postcss.config.mjs
  tsconfig.json
  .env.example
```

## Roadmap (this app)

| Item | Status |
| --- | --- |
| Mock deliberation end-to-end | done |
| 19 advisors page | done |
| Gallery placeholder | done |
| Real LLM integration (Claude Agent SDK + Codex SDK) | next |
| Audit viewer for `mcp-write` flows | M5 (per ADR-001) |
| Save-to-gallery (Vercel KV) | M5 |
