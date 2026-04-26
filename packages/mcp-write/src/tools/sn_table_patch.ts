import { z } from "zod";
import { getServiceNowClient } from "../client/servicenow.js";
import { consumeToken, verifyApprovalToken } from "../lib/approval-token.js";
import { linkAuditToSnapshot } from "../lib/snapshot.js";
import { newAuditId, writeAudit } from "../lib/audit.js";
import { checkProdGuard } from "../lib/prod-guard.js";
import { err, ok, type ToolDefinition } from "../lib/types.js";

const inputSchema = z.object({
  approval_token: z.string().min(20),
  table: z.string().min(1),
  op: z.enum(["create", "update", "delete"]),
  sys_id: z.string().optional(),
  fields: z.record(z.unknown()).optional(),
  before_snapshot_id: z.string().optional(),
});

interface PatchOutput {
  outcome: "applied";
  table: string;
  op: "create" | "update" | "delete";
  sys_id: string;
  audit_id: string;
  before_snapshot_id?: string;
}

export const sn_table_patch: ToolDefinition<typeof inputSchema, PatchOutput> = {
  name: "sn_table_patch",
  description:
    "Apply a patch to a ServiceNow table. Requires a valid one-time approval token from sn_table_patch_dryrun.",
  inputSchema,
  async handler(input) {
    const started = Date.now();
    const guard = checkProdGuard();
    if (!guard.ok) {
      writeAudit({
        timestamp: new Date().toISOString(),
        audit_id: newAuditId(),
        server: "mcp-write",
        tool: "sn_table_patch",
        outcome: "rejected",
        error_code: guard.error.code,
        duration_ms: Date.now() - started,
      });
      return guard;
    }

    const verified = verifyApprovalToken(input.approval_token);
    if (!verified.ok) {
      const code =
        verified.reason === "expired"
          ? "approval_expired"
          : verified.reason === "tampered" || verified.reason === "malformed"
            ? "approval_required"
            : "internal";
      writeAudit({
        timestamp: new Date().toISOString(),
        audit_id: newAuditId(),
        server: "mcp-write",
        tool: "sn_table_patch",
        outcome: "rejected",
        error_code: code,
        duration_ms: Date.now() - started,
      });
      return err(code, `approval token rejected: ${verified.reason}`);
    }

    if (verified.payload.sn_target.table !== input.table) {
      return err("approval_mismatch", "approval token table does not match input table");
    }
    if (verified.payload.sn_target.op !== input.op) {
      return err("approval_mismatch", "approval token op does not match input op");
    }
    if (verified.payload.sn_target.instance !== guard.data.instance) {
      return err("approval_mismatch", "approval token instance does not match current instance");
    }

    if (!consumeToken(input.approval_token)) {
      return err("approval_required", "approval token already consumed");
    }

    const client = getServiceNowClient();
    if (!client.ok) {
      writeAudit({
        timestamp: new Date().toISOString(),
        audit_id: newAuditId(),
        server: "mcp-write",
        tool: "sn_table_patch",
        outcome: "rejected",
        error_code: client.error.code,
        duration_ms: Date.now() - started,
      });
      return client;
    }

    const audit_id = newAuditId();
    const sys_id = input.sys_id ?? `MOCK_NEW_${verified.payload.patch_id}`;
    const out: PatchOutput = {
      outcome: "applied",
      table: input.table,
      op: input.op,
      sys_id,
      audit_id,
      ...(input.before_snapshot_id ? { before_snapshot_id: input.before_snapshot_id } : {}),
    };

    if (input.before_snapshot_id) {
      linkAuditToSnapshot(audit_id, input.before_snapshot_id);
    }

    writeAudit({
      timestamp: new Date().toISOString(),
      audit_id,
      server: "mcp-write",
      tool: "sn_table_patch",
      outcome: "applied",
      patch_id: verified.payload.patch_id,
      ...(input.before_snapshot_id ? { before_snapshot_id: input.before_snapshot_id } : {}),
      instance: guard.data.instance,
      duration_ms: Date.now() - started,
    });
    return ok(out, audit_id);
  },
};
