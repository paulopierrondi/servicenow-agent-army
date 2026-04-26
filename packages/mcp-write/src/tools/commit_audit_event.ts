import { z } from "zod";
import { newAuditId, writeAudit } from "../lib/audit.js";
import { ok, type ToolDefinition } from "../lib/types.js";

const inputSchema = z.object({
  tool: z.string().min(1),
  outcome: z.enum(["applied", "dryrun", "rejected", "rolled_back", "failed"]),
  patch_id: z.string().optional(),
  before_snapshot_id: z.string().optional(),
  details: z.record(z.unknown()).optional(),
});

interface CommitOutput {
  audit_id: string;
}

export const commit_audit_event: ToolDefinition<typeof inputSchema, CommitOutput> = {
  name: "commit_audit_event",
  description:
    "Append an audit event to the JSONL audit log. Use after each write surface event when needed.",
  inputSchema,
  async handler(input) {
    const audit_id = newAuditId();
    writeAudit({
      timestamp: new Date().toISOString(),
      audit_id,
      server: "mcp-write",
      tool: input.tool,
      outcome: input.outcome,
      ...(input.patch_id ? { patch_id: input.patch_id } : {}),
      ...(input.before_snapshot_id ? { before_snapshot_id: input.before_snapshot_id } : {}),
      ...(input.details ? { details: input.details } : {}),
    });
    return ok({ audit_id }, audit_id);
  },
};
