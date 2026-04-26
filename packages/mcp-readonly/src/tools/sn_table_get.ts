import { z } from "zod";
import { getServiceNowClient } from "../client/servicenow.js";
import { writeAudit } from "../lib/audit.js";
import { ok, type ToolDefinition } from "../lib/types.js";

const inputSchema = z.object({
  table: z.string().min(1),
  sys_id: z.string().min(1).describe("Record sys_id"),
  fields: z.array(z.string()).optional(),
});

interface GetOutput {
  table: string;
  sys_id: string;
  fields: Record<string, unknown>;
}

export const sn_table_get: ToolDefinition<typeof inputSchema, GetOutput> = {
  name: "sn_table_get",
  description:
    "Fetch a single record by sys_id. Read-only. Stub: returns mock data until real client lands.",
  inputSchema,
  async handler(input) {
    const started = Date.now();
    const clientResult = getServiceNowClient();
    if (!clientResult.ok) {
      writeAudit({
        timestamp: new Date().toISOString(),
        server: "mcp-readonly",
        tool: "sn_table_get",
        outcome: "error",
        error_code: clientResult.error.code,
        duration_ms: Date.now() - started,
      });
      return clientResult;
    }
    const mock: GetOutput = {
      table: input.table,
      sys_id: input.sys_id,
      fields: { sys_id: input.sys_id, short_description: "mock record" },
    };
    writeAudit({
      timestamp: new Date().toISOString(),
      server: "mcp-readonly",
      tool: "sn_table_get",
      outcome: "ok",
      duration_ms: Date.now() - started,
      instance: clientResult.data.instance,
      details: { table: input.table },
    });
    return ok(mock);
  },
};
