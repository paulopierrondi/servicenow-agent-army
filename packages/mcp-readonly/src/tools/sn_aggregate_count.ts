import { z } from "zod";
import { getServiceNowClient } from "../client/servicenow.js";
import { writeAudit } from "../lib/audit.js";
import { ok, type ToolDefinition } from "../lib/types.js";

const inputSchema = z.object({
  table: z.string().min(1),
  query: z.string().optional(),
  group_by: z.array(z.string()).optional(),
});

interface AggregateOutput {
  table: string;
  total: number;
  groups?: Array<{ key: Record<string, string>; count: number }>;
}

export const sn_aggregate_count: ToolDefinition<typeof inputSchema, AggregateOutput> = {
  name: "sn_aggregate_count",
  description:
    "Count records with optional group-by. Read-only. Stub: returns mock counts.",
  inputSchema,
  async handler(input) {
    const started = Date.now();
    const clientResult = getServiceNowClient();
    if (!clientResult.ok) {
      writeAudit({
        timestamp: new Date().toISOString(),
        server: "mcp-readonly",
        tool: "sn_aggregate_count",
        outcome: "error",
        error_code: clientResult.error.code,
        duration_ms: Date.now() - started,
      });
      return clientResult;
    }
    const mock: AggregateOutput = {
      table: input.table,
      total: 42,
      ...(input.group_by && input.group_by.length > 0
        ? { groups: [{ key: Object.fromEntries(input.group_by.map((g) => [g, "mock"])), count: 42 }] }
        : {}),
    };
    writeAudit({
      timestamp: new Date().toISOString(),
      server: "mcp-readonly",
      tool: "sn_aggregate_count",
      outcome: "ok",
      duration_ms: Date.now() - started,
      instance: clientResult.data.instance,
      details: { table: input.table },
    });
    return ok(mock);
  },
};
