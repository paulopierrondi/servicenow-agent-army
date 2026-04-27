import { readFileSync } from "node:fs";
import { repoPath } from "./paths.js";
import type { Agent, Workflow } from "../types/agent.js";

export function loadAgents(): Agent[] {
  const raw = readFileSync(repoPath("catalog/agents.json"), "utf8");
  return JSON.parse(raw) as Agent[];
}

export function loadWorkflows(): Workflow[] {
  const raw = readFileSync(repoPath("catalog/workflows.json"), "utf8");
  return JSON.parse(raw) as Workflow[];
}

export function findAgentsByTriggers(text: string, agents: Agent[], limit = 5): Agent[] {
  const haystack = text.toLowerCase();
  const scored = agents.map((agent) => {
    let score = 0;
    for (const trigger of agent.triggers) {
      if (haystack.includes(trigger.toLowerCase())) score += 2;
    }
    if (haystack.includes(agent.role.toLowerCase().split(" ")[0] ?? "")) score += 1;
    return { agent, score };
  });
  const filtered = scored.filter((s) => s.score > 0).sort((a, b) => b.score - a.score);
  if (filtered.length === 0) {
    // Fallback: return the four-pillar council.
    const pillars = ["cta-agent", "business-analyst-agent", "guardrails-reviewer", "workflow-composer"];
    return agents.filter((a) => pillars.includes(a.id));
  }
  return filtered.slice(0, limit).map((s) => s.agent);
}
