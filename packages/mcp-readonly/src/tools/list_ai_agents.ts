import { z } from "zod";
import { getServiceNowClient } from "../client/servicenow.js";
import { writeAudit } from "../lib/audit.js";
import { ok, type ToolDefinition } from "../lib/types.js";

const inputSchema = z.object({
  scope: z.string().optional(),
  active_only: z.boolean().default(true),
  limit: z.number().int().min(1).max(500).default(100),
});

interface AiAgentSummary {
  sys_id: string;
  name: string;
  application: string;
  active: boolean;
  source: "ai_agent_studio" | "custom";
}

export const list_ai_agents: ToolDefinition<typeof inputSchema, { agents: AiAgentSummary[] }> = {
  name: "list_ai_agents",
  description:
    "List AI agents from sn_aia_* tables without consuming Now Assist quota. Read-only stub.",
  inputSchema,
  async handler(input) {
    const started = Date.now();
    const clientResult = getServiceNowClient();
    if (!clientResult.ok) {
      writeAudit({
        timestamp: new Date().toISOString(),
        server: "mcp-readonly",
        tool: "list_ai_agents",
        outcome: "error",
        error_code: clientResult.error.code,
        duration_ms: Date.now() - started,
      });
      return clientResult;
    }
    const agents: AiAgentSummary[] = [
      {
        sys_id: "MOCK_AGENT_0001",
        name: "Incident Triage",
        application: input.scope ?? "global",
        active: input.active_only ? true : true,
        source: "ai_agent_studio",
      },
    ];
    writeAudit({
      timestamp: new Date().toISOString(),
      server: "mcp-readonly",
      tool: "list_ai_agents",
      outcome: "ok",
      duration_ms: Date.now() - started,
      instance: clientResult.data.instance,
    });
    return ok({ agents });
  },
};
