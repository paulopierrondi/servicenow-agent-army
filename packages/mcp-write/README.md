# @servicenow-agent-army/mcp-write

Write-with-guardrails ServiceNow MCP server. Implements the dry-run -> approval token -> audit ->
rollback contract from ADR-002. All ServiceNow REST calls are stubbed today; the real client lands
in a follow-up issue.

## Tools

| Tool | Side effect | Purpose |
| --- | --- | --- |
| `sn_table_patch_dryrun` | none | Compute diff, snapshot pre-state, return signed approval token. |
| `sn_table_patch` | write | Apply patch. Requires valid one-time approval token. |
| `request_human_approval` | none | Surface out-of-band approval request to a human. |
| `commit_audit_event` | write (audit) | Append a JSONL audit event. |
| `rollback_last_change` | write | Revert an applied change by `audit_id` using the captured snapshot. |

## Security model

- **Prod guard**: every tool calls `checkProdGuard()`. If `SERVICENOW_INSTANCE_URL` hostname does
  not contain `dev`, `uat`, `test`, or `sandbox` AND `MCP_WRITE_ALLOW_PROD` is not `"true"`, the tool
  returns `{ ok: false, error: { code: "instance_unsafe" } }`.
- **Approval token**: HMAC-SHA256 over a base64url JSON payload `{ patch_id, dryrun_at,
  expires_at, sn_target }`. Signed with `MCP_WRITE_SIGNING_KEY` (min 16 chars). Default TTL 15 min,
  configurable per dry-run via `ttl_minutes` (1-60).
- **One-time use**: `sn_table_patch` consumes the token after a single successful verification.
  Replay returns `approval_required`.
- **Snapshot capture**: `sn_table_patch_dryrun` persists a pre-state snapshot keyed by
  `before_snapshot_id`. `sn_table_patch` links the snapshot to the new `audit_id`. `rollback_last_change`
  resolves snapshot by `audit_id`.

## Environment

| Var | Required | Notes |
| --- | --- | --- |
| `SERVICENOW_INSTANCE_URL` | yes | Used for prod-guard check and audit context. |
| `SERVICENOW_TOKEN` | yes | OAuth Bearer token. |
| `MCP_WRITE_SIGNING_KEY` | yes | HMAC key, min 16 chars. Rotate quarterly per ADR-002. |
| `MCP_WRITE_ALLOW_PROD` | no | Set to `"true"` to override the prod-guard. Audit trail captures the override. |
| `MCP_WRITE_AUTO_APPROVE` | no | Test-only. When `"true"`, `request_human_approval` returns `approved` immediately. |
| `MCP_AUDIT_DIR` | no | Defaults to `<cwd>/.audit`. |

## `.mcp.json` snippet

```json
{
  "mcpServers": {
    "sn-write": {
      "command": "node",
      "args": ["./packages/mcp-write/dist/server.js"],
      "env": {
        "SERVICENOW_INSTANCE_URL": "https://dev12345.service-now.com",
        "SERVICENOW_TOKEN": "${env:SERVICENOW_TOKEN}",
        "MCP_WRITE_SIGNING_KEY": "${env:MCP_WRITE_SIGNING_KEY}"
      }
    }
  }
}
```

## Test

```bash
pnpm --filter @servicenow-agent-army/mcp-write test
```

## Caveats

- In-process token consumption registry is not distributed. Multi-host deploys need a shared store
  (Vercel KV / Redis) before promoting to prod traffic.
- Snapshots live in-process today. Persistent snapshot storage is tracked separately.
- Rollback is per-record and does not cascade through Business Rules (see ADR-002 section 5).
