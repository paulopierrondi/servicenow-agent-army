# @servicenow-agent-army/cli

Placeholder for the Node 22 + Commander CLI distributed via npm.

Scope per ADR-001:

- `now-army` binary for builders to scaffold agents, validate catalogs, and drive the MCP flow.
- Wraps `@servicenow/sdk` Fluent commands so contributors get a single entrypoint.
- Hosts approval prompts when running locally without the web app.

Implementation tracked in a separate issue. This package only exists so the pnpm workspace and
turbo pipeline pick the path up. Do not add CLI code here yet — wait for the dedicated ticket.
