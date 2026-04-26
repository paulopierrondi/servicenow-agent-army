import { z } from "zod";
import { verifyApprovalToken } from "../lib/approval-token.js";
import { newAuditId, writeAudit } from "../lib/audit.js";
import { err, ok, type ToolDefinition } from "../lib/types.js";

const inputSchema = z.object({
  approval_token: z.string().min(20),
  channel: z.enum(["stdout", "slack", "email", "web"]).default("stdout"),
  approver: z.string().optional(),
  context: z.string().optional(),
});

interface RequestOutput {
  status: "approved" | "pending";
  approver?: string;
  approval_request_id?: string;
}

export const request_human_approval: ToolDefinition<typeof inputSchema, RequestOutput> = {
  name: "request_human_approval",
  description:
    "Surface an out-of-band approval request to a human. In tests, set MCP_WRITE_AUTO_APPROVE=true to auto-approve.",
  inputSchema,
  async handler(input) {
    const started = Date.now();
    const verified = verifyApprovalToken(input.approval_token);
    if (!verified.ok) {
      const code =
        verified.reason === "expired"
          ? "approval_expired"
          : verified.reason === "tampered" || verified.reason === "malformed"
            ? "approval_required"
            : "internal";
      return err(code, `approval token rejected: ${verified.reason}`);
    }

    const audit_id = newAuditId();

    if (process.env.MCP_WRITE_AUTO_APPROVE === "true") {
      writeAudit({
        timestamp: new Date().toISOString(),
        audit_id,
        server: "mcp-write",
        tool: "request_human_approval",
        outcome: "applied",
        patch_id: verified.payload.patch_id,
        duration_ms: Date.now() - started,
        details: { auto_approved: true, channel: input.channel },
      });
      return ok(
        {
          status: "approved" as const,
          ...(input.approver ? { approver: input.approver } : {}),
        },
        audit_id,
      );
    }

    if (input.channel === "stdout") {
      // Real prompt impl is out of scope; we surface the request via stderr to avoid corrupting stdio MCP frames.
      // eslint-disable-next-line no-console
      console.error(
        `[approval-request] patch_id=${verified.payload.patch_id} table=${verified.payload.sn_target.table} op=${verified.payload.sn_target.op}`,
      );
    }

    writeAudit({
      timestamp: new Date().toISOString(),
      audit_id,
      server: "mcp-write",
      tool: "request_human_approval",
      outcome: "dryrun",
      patch_id: verified.payload.patch_id,
      duration_ms: Date.now() - started,
      details: { channel: input.channel },
    });

    return ok(
      {
        status: "pending" as const,
        approval_request_id: `req_${verified.payload.patch_id}`,
      },
      audit_id,
    );
  },
};
