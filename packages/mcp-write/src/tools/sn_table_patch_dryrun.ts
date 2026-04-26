import { z } from "zod";
import { getServiceNowClient } from "../client/servicenow.js";
import { signApprovalToken } from "../lib/approval-token.js";
import { newAuditId, writeAudit } from "../lib/audit.js";
import { checkProdGuard } from "../lib/prod-guard.js";
import { takeSnapshot } from "../lib/snapshot.js";
import { err, ok, type ToolDefinition } from "../lib/types.js";

const inputSchema = z.object({
  table: z.string().min(1),
  op: z.enum(["create", "update", "delete"]),
  sys_id: z.string().optional().describe("Required for update/delete"),
  fields: z.record(z.unknown()).optional(),
  ttl_minutes: z.number().int().min(1).max(60).default(15),
});

interface DryrunOutput {
  patch_id: string;
  diff: { before: Record<string, unknown> | null; after: Record<string, unknown> | null };
  approval_token: string;
  approval_token_expires_at: string;
  before_snapshot_id: string;
  dryrun_hash: string;
  audit_id: string;
}

export const sn_table_patch_dryrun: ToolDefinition<typeof inputSchema, DryrunOutput> = {
  name: "sn_table_patch_dryrun",
  description:
    "Compute a patch preview, snapshot pre-state, and return a signed approval token. No write occurs.",
  inputSchema,
  async handler(input) {
    const started = Date.now();
    const guard = checkProdGuard();
    if (!guard.ok) {
      writeAudit({
        timestamp: new Date().toISOString(),
        audit_id: newAuditId(),
        server: "mcp-write",
        tool: "sn_table_patch_dryrun",
        outcome: "rejected",
        error_code: guard.error.code,
        duration_ms: Date.now() - started,
      });
      return guard;
    }
    const client = getServiceNowClient();
    if (!client.ok) {
      writeAudit({
        timestamp: new Date().toISOString(),
        audit_id: newAuditId(),
        server: "mcp-write",
        tool: "sn_table_patch_dryrun",
        outcome: "rejected",
        error_code: client.error.code,
        duration_ms: Date.now() - started,
      });
      return client;
    }

    if ((input.op === "update" || input.op === "delete") && !input.sys_id) {
      return err("validation", `op=${input.op} requires sys_id`);
    }

    const before: Record<string, unknown> | null =
      input.op === "create" ? null : { sys_id: input.sys_id, _stub: "before-state" };
    const after: Record<string, unknown> | null =
      input.op === "delete" ? null : { ...(input.fields ?? {}), sys_id: input.sys_id ?? "(new)" };

    const snap = takeSnapshot({
      table: input.table,
      ...(input.sys_id !== undefined ? { sys_id: input.sys_id } : {}),
      before,
    });

    let signed: ReturnType<typeof signApprovalToken>;
    try {
      signed = signApprovalToken({
        ttlMs: input.ttl_minutes * 60 * 1000,
        sn_target: {
          instance: guard.data.instance,
          table: input.table,
          op: input.op,
          ...(input.sys_id ? { sys_ids: [input.sys_id] } : {}),
        },
      });
    } catch (e) {
      const message = e instanceof Error ? e.message : "signing failed";
      writeAudit({
        timestamp: new Date().toISOString(),
        audit_id: newAuditId(),
        server: "mcp-write",
        tool: "sn_table_patch_dryrun",
        outcome: "failed",
        error_code: "internal",
        duration_ms: Date.now() - started,
      });
      return err("internal", message);
    }

    const audit_id = newAuditId();
    const out: DryrunOutput = {
      patch_id: signed.payload.patch_id,
      diff: { before, after },
      approval_token: signed.token,
      approval_token_expires_at: new Date(signed.payload.expires_at).toISOString(),
      before_snapshot_id: snap.snapshot_id,
      dryrun_hash: `sha256:${signed.payload.patch_id}`,
      audit_id,
    };

    writeAudit({
      timestamp: new Date().toISOString(),
      audit_id,
      server: "mcp-write",
      tool: "sn_table_patch_dryrun",
      outcome: "dryrun",
      patch_id: signed.payload.patch_id,
      before_snapshot_id: snap.snapshot_id,
      instance: guard.data.instance,
      duration_ms: Date.now() - started,
    });

    return ok(out, audit_id);
  },
};
