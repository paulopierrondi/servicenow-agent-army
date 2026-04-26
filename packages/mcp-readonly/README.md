# @servicenow-agent-army/mcp-readonly

Read-only ServiceNow MCP server (a.k.a. discovery). No write paths in the binary by construction
(per ADR-002). All handlers return mock data today; the real ServiceNow REST client lands in a
follow-up issue.

## Tools

| Tool | Purpose |
| --- | --- |
| `sn_table_query` | GlideRecord-style query with optional encoded query and pagination. |
| `sn_table_get` | Fetch a single record by `sys_id`. |
| `sn_aggregate_count` | Count records, optional `group_by`. |
| `search_schema` | Search tables/fields by name or label. |
| `describe_table` | Schema introspection, optional effective ACL. |
| `list_active_flows` | Active Flow Designer flows + agentic workflows. |
| `list_ai_agents` | Inventory `sn_aia_*` agents without consuming Now Assist. |
| `run_readonly_query` | Run an encoded query; refuses mutational keywords. |

All tools return the ADR-002 envelope `{ ok, data?, error? }`.

## Install

```bash
pnpm --filter @servicenow-agent-army/mcp-readonly build
```

## Environment

| Var | Required | Notes |
| --- | --- | --- |
| `SERVICENOW_INSTANCE_URL` | yes | e.g. `https://dev123456.service-now.com` |
| `SERVICENOW_TOKEN` | yes | OAuth Bearer token. Without it, every tool returns `error.code = auth`. |
| `MCP_AUDIT_DIR` | no | Defaults to `<cwd>/.audit`. Each tool call appends to `mcp-readonly-YYYY-MM-DD.jsonl`. |

## `.mcp.json` snippet

```json
{
  "mcpServers": {
    "sn-readonly": {
      "command": "node",
      "args": ["./packages/mcp-readonly/dist/server.js"],
      "env": {
        "SERVICENOW_INSTANCE_URL": "https://dev12345.service-now.com",
        "SERVICENOW_TOKEN": "${env:SERVICENOW_TOKEN}"
      }
    }
  }
}
```

## Test

```bash
pnpm --filter @servicenow-agent-army/mcp-readonly test
```

## Audit

Every tool call writes a one-line JSON record to `.audit/mcp-readonly-YYYY-MM-DD.jsonl` with
timestamp, tool, outcome (`ok` / `error`), error code if any, and duration. The writer is
best-effort and never throws.
