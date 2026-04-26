import { z } from "zod";
import { getServiceNowClient } from "../client/servicenow.js";
import { writeAudit } from "../lib/audit.js";
import { ok, type ToolDefinition } from "../lib/types.js";

const inputSchema = z.object({
  table: z.string().min(1),
  include_acl: z.boolean().default(false),
});

interface FieldDescriptor {
  name: string;
  label: string;
  type: string;
  mandatory: boolean;
  reference_table?: string;
}

interface DescribeOutput {
  table: string;
  label: string;
  parent?: string;
  fields: FieldDescriptor[];
  acl_effective?: { read: boolean; write: boolean; create: boolean; delete: boolean };
}

export const describe_table: ToolDefinition<typeof inputSchema, DescribeOutput> = {
  name: "describe_table",
  description:
    "Describe a ServiceNow table: fields, types, parent, optional effective ACL for the caller. Read-only stub.",
  inputSchema,
  async handler(input) {
    const started = Date.now();
    const clientResult = getServiceNowClient();
    if (!clientResult.ok) {
      writeAudit({
        timestamp: new Date().toISOString(),
        server: "mcp-readonly",
        tool: "describe_table",
        outcome: "error",
        error_code: clientResult.error.code,
        duration_ms: Date.now() - started,
      });
      return clientResult;
    }
    const out: DescribeOutput = {
      table: input.table,
      label: input.table,
      parent: input.table === "incident" ? "task" : undefined,
      fields: [
        { name: "sys_id", label: "Sys ID", type: "GUID", mandatory: true },
        { name: "short_description", label: "Short description", type: "string", mandatory: false },
      ],
      ...(input.include_acl
        ? { acl_effective: { read: true, write: false, create: false, delete: false } }
        : {}),
    };
    writeAudit({
      timestamp: new Date().toISOString(),
      server: "mcp-readonly",
      tool: "describe_table",
      outcome: "ok",
      duration_ms: Date.now() - started,
      instance: clientResult.data.instance,
      details: { table: input.table },
    });
    return ok(out);
  },
};
