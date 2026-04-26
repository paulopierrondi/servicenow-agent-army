import { z } from "zod";
import { getServiceNowClient } from "../client/servicenow.js";
import { writeAudit } from "../lib/audit.js";
import { ok, type ToolDefinition } from "../lib/types.js";

const inputSchema = z.object({
  q: z.string().min(1).describe("Search term against table name or label"),
  scope: z.enum(["tables", "fields", "all"]).default("all"),
  limit: z.number().int().min(1).max(200).default(20),
});

interface SchemaMatch {
  type: "table" | "field";
  name: string;
  label: string;
  table?: string;
}

export const search_schema: ToolDefinition<typeof inputSchema, { matches: SchemaMatch[] }> = {
  name: "search_schema",
  description:
    "Search ServiceNow schema (tables and fields) by name or label. Read-only. Stub: returns mock matches.",
  inputSchema,
  async handler(input) {
    const started = Date.now();
    const clientResult = getServiceNowClient();
    if (!clientResult.ok) {
      writeAudit({
        timestamp: new Date().toISOString(),
        server: "mcp-readonly",
        tool: "search_schema",
        outcome: "error",
        error_code: clientResult.error.code,
        duration_ms: Date.now() - started,
      });
      return clientResult;
    }
    const matches: SchemaMatch[] = ([
      { type: "table" as const, name: "incident", label: "Incident" },
      {
        type: "field" as const,
        name: "short_description",
        label: "Short description",
        table: "task",
      },
    ] satisfies SchemaMatch[]).filter(
      (m) =>
        m.name.includes(input.q.toLowerCase()) ||
        m.label.toLowerCase().includes(input.q.toLowerCase()),
    );
    writeAudit({
      timestamp: new Date().toISOString(),
      server: "mcp-readonly",
      tool: "search_schema",
      outcome: "ok",
      duration_ms: Date.now() - started,
      instance: clientResult.data.instance,
      details: { q: input.q },
    });
    return ok({ matches });
  },
};
