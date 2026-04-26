# @servicenow-agent-army/web

Placeholder for the public Next.js 16 web app (catalog, demos, audit viewer).

Scope per ADR-001:

- App Router + Vercel deploy.
- Renders the agents catalog and a live audit viewer.
- Hosts the human approval surface for `mcp-write` flows.

Implementation tracked in a separate issue. This package only exists so the pnpm workspace and
turbo pipeline pick the path up. Do not add Next.js code here yet — wait for the dedicated ticket.
