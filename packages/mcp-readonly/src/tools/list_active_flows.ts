import { z } from "zod";
import { getServiceNowClient } from "../client/servicenow.js";
import { writeAudit } from "../lib/audit.js";
import { ok, type ToolDefinition } from "../lib/types.js";

const inputSchema = z.object({
  scope: z.string().optional().describe("Application scope filter (e.g. global)"),
  include_agentic: z.boolean().default(true),
  limit: z.number().int().min(1).max(500).default(100),
});

interface FlowSummary {
  sys_id: string;
  name: string;
  application: string;
  active: boolean;
  agentic: boolean;
}

export const list_active_flows: ToolDefinition<typeof inputSchema, { flows: FlowSummary[] }> = {
  name: "list_active_flows",
  description:
    "List active Flow Designer flows + agentic workflows metadata. Read-only stub.",
  inputSchema,
  async handler(input) {
    const started = Date.now();
    const clientResult = getServiceNowClient();
    if (!clientResult.ok) {
      writeAudit({
        timestamp: new Date().toISOString(),
        server: "mcp-readonly",
        tool: "list_active_flows",
        outcome: "error",
        error_code: clientResult.error.code,
        duration_ms: Date.now() - started,
      });
      return clientResult;
    }
    const flows: FlowSummary[] = [
      {
        sys_id: "MOCK_FLOW_0001",
        name: "Sample Onboarding Flow",
        application: input.scope ?? "global",
        active: true,
        agentic: input.include_agentic,
      },
    ];
    writeAudit({
      timestamp: new Date().toISOString(),
      server: "mcp-readonly",
      tool: "list_active_flows",
      outcome: "ok",
      duration_ms: Date.now() - started,
      instance: clientResult.data.instance,
    });
    return ok({ flows });
  },
};
