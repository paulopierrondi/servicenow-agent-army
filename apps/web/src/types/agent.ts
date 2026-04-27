import { z } from "zod";

export const AgentSchema = z.object({
  id: z.string(),
  name: z.string(),
  role: z.string(),
  mission: z.string(),
  primaryUsers: z.array(z.string()),
  triggers: z.array(z.string()),
  outputs: z.array(z.string()),
  guardrails: z.array(z.string()),
  path: z.string(),
});

export type Agent = z.infer<typeof AgentSchema>;

export const AgentsSchema = z.array(AgentSchema);

export const WorkflowSchema = z.object({
  id: z.string(),
  name: z.string(),
  serviceNowSurface: z.string(),
  trigger: z.string(),
  agents: z.array(z.string()),
  steps: z.number(),
  path: z.string(),
});

export type Workflow = z.infer<typeof WorkflowSchema>;
export const WorkflowsSchema = z.array(WorkflowSchema);

export const AgentGroups = [
  {
    id: "strategy",
    label: "Strategy & architecture",
    members: ["cta-agent", "enterprise-architect-agent", "servicenow-architect-coach"],
  },
  {
    id: "discovery",
    label: "Discovery & design",
    members: [
      "business-analyst-agent",
      "workflow-composer",
      "catalog-designer",
      "integration-mapper",
    ],
  },
  {
    id: "build",
    label: "Build & test",
    members: ["servicenow-sdk-builder", "atf-test-generator", "knowledge-curator"],
  },
  {
    id: "domain",
    label: "Domain experts",
    members: ["itsm-specialist", "itom-specialist", "csm-specialist", "now-assist-coach"],
  },
  {
    id: "operations",
    label: "Operations",
    members: ["performance-tuner", "upgrade-advisor"],
  },
  {
    id: "governance",
    label: "Governance & comms",
    members: ["guardrails-reviewer", "token-saver-specialist", "demo-storyteller"],
  },
] as const;
