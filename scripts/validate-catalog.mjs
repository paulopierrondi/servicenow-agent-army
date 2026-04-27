import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();

function readJson(path) {
  const fullPath = resolve(root, path);
  return JSON.parse(readFileSync(fullPath, "utf8"));
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function assertPath(path, owner) {
  const fullPath = resolve(root, path);
  assert(existsSync(fullPath), `${owner} points to missing path: ${path}`);
}

function validateAgents() {
  const agents = readJson("catalog/agents.json");
  assert(Array.isArray(agents), "catalog/agents.json must be an array");

  const ids = new Set();
  for (const agent of agents) {
    assert(agent.id, "agent is missing id");
    assert(!ids.has(agent.id), `duplicate agent id: ${agent.id}`);
    ids.add(agent.id);
    assert(agent.name, `${agent.id} is missing name`);
    assert(agent.role, `${agent.id} is missing role`);
    assert(agent.mission, `${agent.id} is missing mission`);
    assert(Array.isArray(agent.primaryUsers), `${agent.id} primaryUsers must be an array`);
    assert(Array.isArray(agent.triggers), `${agent.id} triggers must be an array`);
    assert(Array.isArray(agent.outputs), `${agent.id} outputs must be an array`);
    assert(Array.isArray(agent.guardrails), `${agent.id} guardrails must be an array`);
    assert(agent.path, `${agent.id} is missing path`);
    assertPath(agent.path, agent.id);
  }

  return agents.length;
}

function validateWorkflows() {
  const workflows = readJson("catalog/workflows.json");
  assert(Array.isArray(workflows), "catalog/workflows.json must be an array");

  const ids = new Set();
  for (const workflow of workflows) {
    assert(workflow.id, "workflow is missing id");
    assert(!ids.has(workflow.id), `duplicate workflow id: ${workflow.id}`);
    ids.add(workflow.id);
    assert(workflow.name, `${workflow.id} is missing name`);
    assert(workflow.serviceNowSurface, `${workflow.id} is missing serviceNowSurface`);
    assert(workflow.trigger, `${workflow.id} is missing trigger`);
    assert(Array.isArray(workflow.agents), `${workflow.id} agents must be an array`);
    assert(Number.isInteger(workflow.steps), `${workflow.id} steps must be an integer`);
    assert(workflow.path, `${workflow.id} is missing path`);
    assertPath(workflow.path, workflow.id);

    const spec = readJson(workflow.path);
    assert(Array.isArray(spec.steps), `${workflow.id} spec steps must be an array`);
    assert(spec.steps.length === workflow.steps, `${workflow.id} catalog steps (${workflow.steps}) does not match spec (${spec.steps.length})`);
  }

  return workflows.length;
}

function validateSkills() {
  const paths = [
    ".agents/skills/servicenow-agent-factory/SKILL.md",
    ".agents/skills/token-saver-specialist/SKILL.md",
    ".agents/skills/demo-storyteller-v2/SKILL.md",
    ".claude/skills/servicenow-agent-factory/SKILL.md",
    ".claude/skills/token-saver-specialist/SKILL.md",
    ".claude/skills/demo-storyteller-v2/SKILL.md"
  ];

  for (const path of paths) {
    assertPath(path, "skills");
  }

  return paths.length;
}

try {
  const agentCount = validateAgents();
  const workflowCount = validateWorkflows();
  const skillCount = validateSkills();
  console.log(`Catalog valid: ${agentCount} agents, ${workflowCount} workflows, ${skillCount} skills.`);
} catch (error) {
  console.error(`Validation failed: ${error.message}`);
  process.exit(1);
}
