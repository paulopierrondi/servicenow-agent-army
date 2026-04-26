import { z } from "zod";
import { getServiceNowClient } from "../client/servicenow.js";
import { writeAudit } from "../lib/audit.js";
import { err, ok, type ToolDefinition } from "../lib/types.js";

const inputSchema = z.object({
  table: z.string().min(1).describe("ServiceNow table name (e.g. incident)"),
  query: z.string().optional().describe("Encoded query string (sysparm_query)"),
  fields: z.array(z.string()).optional().describe("List of fields to return"),
  limit: z.number().int().min(1).max(1000).default(50),
  offset: z.number().int().min(0).default(0),
});

type Input = z.infer<typeof inputSchema>;

interface QueryRecord {
  sys_id: string;
  [field: string]: unknown;
}

interface QueryOutput {
  records: QueryRecord[];
  total: number;
  table: string;
}

export const sn_table_query: ToolDefinition<typeof inputSchema, QueryOutput> = {
  name: "sn_table_query",
  description:
    "Read-only GlideRecord-style query. Returns records matching encoded query. Stub: returns mock data until real ServiceNow REST client lands.",
  inputSchema,
  async handler(input: Input) {
    const started = Date.now();
    const clientResult = getServiceNowClient();
    if (!clientResult.ok) {
      writeAudit({
        timestamp: new Date().toISOString(),
        server: "mcp-readonly",
        tool: "sn_table_query",
        outcome: "error",
        error_code: clientResult.error.code,
        duration_ms: Date.now() - started,
      });
      return clientResult;
    }

    const mock: QueryOutput = {
      records: [
        {
          sys_id: "MOCK_SYS_ID_0001",
          number: `${input.table.toUpperCase()}0000001`,
          short_description: "mock record",
        },
      ],
      total: 1,
      table: input.table,
    };

    const result = ok(mock);
    writeAudit({
      timestamp: new Date().toISOString(),
      server: "mcp-readonly",
      tool: "sn_table_query",
      outcome: "ok",
      duration_ms: Date.now() - started,
      instance: clientResult.data.instance,
      details: { table: input.table, limit: input.limit },
    });
    return result;
  },
};

// Re-export err for shared use elsewhere.
export const _shared = { err };
