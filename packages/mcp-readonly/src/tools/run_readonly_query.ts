import { z } from "zod";
import { getServiceNowClient } from "../client/servicenow.js";
import { writeAudit } from "../lib/audit.js";
import { err, ok, type ToolDefinition } from "../lib/types.js";

const inputSchema = z.object({
  table: z.string().min(1),
  encoded_query: z.string().min(1).describe("Encoded query string (sysparm_query)"),
  fields: z.array(z.string()).optional(),
  limit: z.number().int().min(1).max(1000).default(50),
});

interface RunOutput {
  table: string;
  records: Array<Record<string, unknown>>;
  total: number;
}

const FORBIDDEN_FRAGMENTS = ["GOTODELETE", "DELETE", "INSERT", "UPDATE"];

export const run_readonly_query: ToolDefinition<typeof inputSchema, RunOutput> = {
  name: "run_readonly_query",
  description:
    "Run an encoded query against a single table. Refuses any payload that looks mutational. Read-only stub.",
  inputSchema,
  async handler(input) {
    const started = Date.now();
    const upper = input.encoded_query.toUpperCase();
    if (FORBIDDEN_FRAGMENTS.some((f) => upper.includes(f))) {
      writeAudit({
        timestamp: new Date().toISOString(),
        server: "mcp-readonly",
        tool: "run_readonly_query",
        outcome: "error",
        error_code: "validation",
        duration_ms: Date.now() - started,
      });
      return err("validation", "Query contains forbidden mutational keyword");
    }
    const clientResult = getServiceNowClient();
    if (!clientResult.ok) {
      writeAudit({
        timestamp: new Date().toISOString(),
        server: "mcp-readonly",
        tool: "run_readonly_query",
        outcome: "error",
        error_code: clientResult.error.code,
        duration_ms: Date.now() - started,
      });
      return clientResult;
    }
    const out: RunOutput = {
      table: input.table,
      records: [{ sys_id: "MOCK_SYS_ID_0001", short_description: "mock" }],
      total: 1,
    };
    writeAudit({
      timestamp: new Date().toISOString(),
      server: "mcp-readonly",
      tool: "run_readonly_query",
      outcome: "ok",
      duration_ms: Date.now() - started,
      instance: clientResult.data.instance,
      details: { table: input.table },
    });
    return ok(out);
  },
};
