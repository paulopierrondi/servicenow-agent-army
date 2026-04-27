// Deterministic council mock. Same logic the web app will reuse.
// Pure function so it can be lifted into a shared package later.

import { findAgentsByTriggers, loadAgents } from "./catalog.js";
import type { Agent, DiagnosisResult, Domain } from "../types/agent.js";

export type DeliberateInput = {
  problem: string;
  domain?: Domain | "Unknown";
};

export type DeliberateEvent =
  | { type: "council-start"; agents: Agent[] }
  | { type: "agent-deliberate"; agent: Agent; index: number; total: number }
  | { type: "council-done"; result: DiagnosisResult };

export type EventHandler = (event: DeliberateEvent) => void | Promise<void>;

function inferDomain(text: string): Domain | "Unknown" {
  const t = text.toLowerCase();
  if (/(incident|change|problem|request|service desk)/.test(t)) return "ITSM";
  if (/(cmdb|discovery|service mapping|event management|aiops)/.test(t)) return "ITOM";
  if (/(case|account|b2c|b2b|customer service)/.test(t)) return "CSM";
  if (/(employee|onboarding|hr service|enterprise hr)/.test(t)) return "HR";
  if (/(sada|architecture|platform|fluent|sdk|now-sdk)/.test(t)) return "Platform";
  return "Unknown";
}

function contributionFor(agent: Agent, problem: string): string {
  const head = agent.role.replace(/\.$/, "");
  return `${head}. Focus on: ${agent.outputs.slice(0, 2).join(", ")}. Triggered by: "${problem.slice(0, 60)}".`;
}

function buildAgentSpec(council: Agent[], problem: string, domain: string) {
  const lead = council[0];
  if (!lead) {
    return {
      id: "council-fallback",
      name: "Council Fallback",
      role: "Generic ServiceNow advisor.",
      mission: `Address: ${problem}`,
      primaryUsers: ["ServiceNow developer"],
      triggers: [problem.slice(0, 24)],
      outputs: ["recommendation"],
      guardrails: ["Require human approval on production writes."]
    };
  }
  return {
    id: `${lead.id}-${domain.toLowerCase()}`,
    name: `${lead.name} (${domain})`,
    role: lead.role,
    mission: `Address "${problem}" using ${council.length} advisors. ${lead.mission}`,
    primaryUsers: lead.primaryUsers,
    triggers: Array.from(new Set([...lead.triggers, ...problem.toLowerCase().split(/\s+/).filter((w) => w.length > 4).slice(0, 3)])),
    outputs: Array.from(new Set(council.flatMap((a) => a.outputs).slice(0, 5))),
    guardrails: Array.from(new Set(council.flatMap((a) => a.guardrails).slice(0, 4)))
  };
}

function buildWorkflowSteps(council: Agent[], problem: string): string[] {
  const steps: string[] = [
    `Capture intent and scope for "${problem}" with required inputs.`
  ];
  for (const agent of council) {
    steps.push(`${agent.name}: ${agent.outputs[0] ?? "produce recommendation"}.`);
  }
  steps.push("Route any production write through dry run, approval, audit, and rollback.");
  steps.push("Emit executive summary plus practitioner task list.");
  return steps;
}

function buildSkillPrompt(spec: ReturnType<typeof buildAgentSpec>, problem: string): string {
  const guardrails = spec.guardrails.map((g) => `- ${g}`).join("\n");
  return `---
name: ${spec.id}
description: ${spec.role} Triggered for "${problem}".
version: 0.1.0
agents:
  - ${spec.id}
mcp_servers:
  required:
    - sn-discovery
  optional: []
tools:
  read:
    - mcp__sn-discovery__sn_table_query
    - mcp__sn-discovery__sn_table_describe
  write: []
guardrails:
  side_effects: read
  audit_required: false
  approval_required: false
---

# ${spec.name}

## Mission

${spec.mission}

## Use When

- ${spec.triggers.slice(0, 3).join("\n- ")}

## Inputs

- Problem statement, target domain, source records.

## Outputs

- ${spec.outputs.join("\n- ")}

## Guardrails

${guardrails}

## Prompt

\`\`\`text
Act as the ${spec.name}.
Goal: ${problem}
Return a ServiceNow-ready recommendation with assumptions, guardrails, and tests.
\`\`\`
`;
}

function buildSdkScaffold(spec: ReturnType<typeof buildAgentSpec>) {
  return {
    command: `now-sdk fluent generate ai-agent --name "${spec.name}" --id ${spec.id}`,
    files: [
      `agents/${spec.id}/agent.ts`,
      `agents/${spec.id}/skills/${spec.id}.skill.md`,
      `agents/${spec.id}/tests/${spec.id}.test.ts`
    ],
    notes: [
      "Requires @servicenow/sdk 4.6.0+ and Node 22.",
      "Run `now-sdk build` then `now-sdk deploy --target sub-prod` before promoting.",
      "Production deploys must pass through packages/mcp-write dry run flow."
    ]
  };
}

function buildNowAssistHook(domain: string) {
  return {
    surface: domain === "Unknown" ? "Now Assist Build Agent" : `Now Assist for ${domain}`,
    family: "Zurich Patch 4 or later",
    guardian: true,
    notes: [
      "Recommend Now Assist Guardian whenever PII or regulated data is in scope.",
      "Confirm SKU coverage (Now Assist Pro Plus) before assuming agent execution APIs."
    ]
  };
}

export async function deliberate(
  input: DeliberateInput,
  onEvent?: EventHandler,
  options: { delayMs?: number } = {}
): Promise<DiagnosisResult> {
  const agents = loadAgents();
  const domain = input.domain && input.domain !== "Unknown" ? input.domain : inferDomain(input.problem);
  const council = findAgentsByTriggers(`${input.problem} ${domain}`, agents, 5);
  const delay = options.delayMs ?? 0;

  if (onEvent) await onEvent({ type: "council-start", agents: council });
  for (let i = 0; i < council.length; i += 1) {
    const agent = council[i];
    if (!agent) continue;
    if (onEvent) await onEvent({ type: "agent-deliberate", agent, index: i, total: council.length });
    if (delay > 0) await new Promise((r) => setTimeout(r, delay));
  }

  const spec = buildAgentSpec(council, input.problem, domain);
  const result: DiagnosisResult = {
    problem: input.problem,
    domain,
    council: council.map((a) => ({
      agent: a.name,
      role: a.role,
      contribution: contributionFor(a, input.problem)
    })),
    agentSpec: spec,
    workflowSteps: buildWorkflowSteps(council, input.problem),
    skillPrompt: buildSkillPrompt(spec, input.problem),
    sdkScaffold: buildSdkScaffold(spec),
    nowAssistHook: buildNowAssistHook(domain)
  };

  if (onEvent) await onEvent({ type: "council-done", result });
  return result;
}
