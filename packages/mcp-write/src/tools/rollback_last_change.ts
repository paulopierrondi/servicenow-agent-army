import { z } from "zod";
import { getServiceNowClient } from "../client/servicenow.js";
import { newAuditId, writeAudit } from "../lib/audit.js";
import { checkProdGuard } from "../lib/prod-guard.js";
import { getSnapshotByAuditId } from "../lib/snapshot.js";
import { err, ok, type ToolDefinition } from "../lib/types.js";

const inputSchema = z.object({
  audit_id: z.string().min(1).describe("Audit id of the applied change to revert"),
});

interface RollbackOutput {
  outcome: "rolled_back";
  audit_id: string;
  rolled_back_audit_id: string;
}

export const rollback_last_change: ToolDefinition<typeof inputSchema, RollbackOutput> = {
  name: "rollback_last_change",
  description:
    "Rollback an applied change by audit_id using the captured pre-state snapshot. Per-record only in MVP.",
  inputSchema,
  async handler(input) {
    const started = Date.now();
    const guard = checkProdGuard();
    if (!guard.ok) return guard;

    const snap = getSnapshotByAuditId(input.audit_id);
    if (!snap) {
      writeAudit({
        timestamp: new Date().toISOString(),
        audit_id: newAuditId(),
        server: "mcp-write",
        tool: "rollback_last_change",
        outcome: "failed",
        error_code: "rollback_failed",
        duration_ms: Date.now() - started,
        details: { reason: "no snapshot for audit_id", audit_id: input.audit_id },
      });
      return err("rollback_failed", `no snapshot found for audit_id ${input.audit_id}`);
    }

    const client = getServiceNowClient();
    if (!client.ok) return client;

    const new_audit_id = newAuditId();
    writeAudit({
      timestamp: new Date().toISOString(),
      audit_id: new_audit_id,
      server: "mcp-write",
      tool: "rollback_last_change",
      outcome: "rolled_back",
      before_snapshot_id: snap.snapshot_id,
      instance: guard.data.instance,
      duration_ms: Date.now() - started,
      details: { rolled_back_audit_id: input.audit_id, table: snap.table },
    });

    return ok(
      {
        outcome: "rolled_back" as const,
        audit_id: new_audit_id,
        rolled_back_audit_id: input.audit_id,
      },
      new_audit_id,
    );
  },
};
