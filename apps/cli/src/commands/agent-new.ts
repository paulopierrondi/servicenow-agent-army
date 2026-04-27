import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { defineCommand } from "citty";
import { z } from "zod";
import { c } from "../lib/output.js";
import { findRepoRoot } from "../lib/paths.js";

const NewAgentSchema = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/, "id must be lowercase letters, numbers, and dashes"),
  name: z.string().min(3),
  role: z.string().min(8),
  mission: z.string().min(8)
});

function runNode(script: string, args: string[], cwd: string): Promise<number> {
  return new Promise((resolveP, rejectP) => {
    const child = spawn(process.execPath, [script, ...args], { cwd, stdio: "inherit" });
    child.on("error", rejectP);
    child.on("close", (code) => resolveP(code ?? 0));
  });
}

export const agentNewCommand = defineCommand({
  meta: {
    name: "new",
    description: "Scaffold a new agent and register it in catalog/agents.json."
  },
  args: {
    id: { type: "string", description: "kebab-case id, e.g. risk-officer-agent", required: true },
    name: { type: "string", description: "Display name.", required: true },
    role: { type: "string", description: "One-line role.", required: true },
    mission: { type: "string", description: "Mission paragraph.", required: true }
  },
  async run({ args }) {
    const parsed = NewAgentSchema.safeParse({
      id: args.id,
      name: args.name,
      role: args.role,
      mission: args.mission
    });
    if (!parsed.success) {
      process.stderr.write(`${c.red("Invalid input:")} ${parsed.error.errors.map((e) => e.message).join("; ")}\n`);
      process.exit(2);
    }

    const root = findRepoRoot();
    const newAgentScript = resolve(root, "scripts/new-agent.mjs");
    const validateScript = resolve(root, "scripts/validate-catalog.mjs");

    if (!existsSync(newAgentScript)) {
      process.stderr.write(`${c.red("Cannot find scripts/new-agent.mjs in repo root:")} ${root}\n`);
      process.stderr.write(`${c.dim("Run this command from inside a clone of servicenow-agent-army.")}\n`);
      process.exit(1);
    }

    process.stdout.write(`${c.cyan("[1/2]")} Scaffolding agent ${c.bold(parsed.data.id)}\n`);
    const scaffoldCode = await runNode(newAgentScript, [
      "--id", parsed.data.id,
      "--name", parsed.data.name,
      "--role", parsed.data.role,
      "--mission", parsed.data.mission
    ], root);

    if (scaffoldCode !== 0) {
      process.stderr.write(`${c.red("Scaffold failed.")} exit=${scaffoldCode}\n`);
      process.exit(scaffoldCode);
    }

    if (existsSync(validateScript)) {
      process.stdout.write(`${c.cyan("[2/2]")} Re-validating catalog\n`);
      const validateCode = await runNode(validateScript, [], root);
      if (validateCode !== 0) {
        process.stderr.write(`${c.yellow("Validation failed after scaffold. Fix the catalog before committing.")}\n`);
        process.exit(validateCode);
      }
    }

    process.stdout.write(`${c.green("Agent ready.")} Edit agents/${parsed.data.id}.md and commit.\n`);
  }
});
