import { defineCommand } from "citty";
import { z } from "zod";
import { deliberate } from "../lib/deliberate-mock.js";
import { c, categoryColor, json, section, Spinner } from "../lib/output.js";
import type { Domain } from "../types/agent.js";

const DomainSchema = z.enum(["ITSM", "ITOM", "CSM", "HR", "Platform"]).optional();

export const diagnoseCommand = defineCommand({
  meta: {
    name: "diagnose",
    description: "Run the advisory army on a ServiceNow problem statement."
  },
  args: {
    problem: {
      type: "positional",
      description: "Problem statement in plain English (quote it).",
      required: true
    },
    domain: {
      type: "string",
      description: "ITSM | ITOM | CSM | HR | Platform"
    },
    json: {
      type: "boolean",
      description: "Emit machine-readable JSON only.",
      default: false
    },
    "no-color": {
      type: "boolean",
      description: "Disable ANSI colors.",
      default: false
    },
    verbose: {
      type: "boolean",
      description: "Verbose logging on stderr.",
      default: false
    }
  },
  async run({ args }) {
    const domainParse = DomainSchema.safeParse(args.domain);
    if (args.domain && !domainParse.success) {
      process.stderr.write(`Invalid --domain. Use one of: ITSM, ITOM, CSM, HR, Platform.\n`);
      process.exit(2);
    }
    const domain = (domainParse.success ? domainParse.data : undefined) as Domain | undefined;

    const wantJson = Boolean(args.json);
    const spinner = wantJson ? null : new Spinner("Council deliberating").start();

    const result = await deliberate(
      { problem: String(args.problem), domain: domain ?? "Unknown" },
      async (event) => {
        if (wantJson) return;
        if (event.type === "agent-deliberate") {
          const paint = categoryColor(event.agent.triggers);
          process.stderr.write(
            `\r${c.dim(`[${event.index + 1}/${event.total}]`)} ${paint(event.agent.name)} ${c.dim("- " + event.agent.role)}\n`
          );
        }
      },
      { delayMs: wantJson ? 0 : 120 }
    );

    if (spinner) spinner.stop();

    if (wantJson) {
      process.stdout.write(`${json(result)}\n`);
      return;
    }

    process.stdout.write(section("Problem"));
    process.stdout.write(`${result.problem}\n`);
    process.stdout.write(`${c.dim("Domain:")} ${c.bold(result.domain)}\n`);

    process.stdout.write(section("Council"));
    for (const member of result.council) {
      process.stdout.write(`- ${c.bold(member.agent)}: ${member.contribution}\n`);
    }

    process.stdout.write(section("Agent Spec"));
    process.stdout.write(`id: ${result.agentSpec.id}\n`);
    process.stdout.write(`name: ${result.agentSpec.name}\n`);
    process.stdout.write(`mission: ${result.agentSpec.mission}\n`);
    process.stdout.write(`outputs: ${result.agentSpec.outputs.join(", ")}\n`);
    process.stdout.write(`guardrails:\n`);
    for (const g of result.agentSpec.guardrails) process.stdout.write(`  - ${g}\n`);

    process.stdout.write(section("Workflow Steps"));
    result.workflowSteps.forEach((step, i) => {
      process.stdout.write(`${String(i + 1).padStart(2, " ")}. ${step}\n`);
    });

    process.stdout.write(section("Skill Prompt (SKILL.md)"));
    process.stdout.write(`${result.skillPrompt}\n`);

    process.stdout.write(section("SDK Scaffold"));
    process.stdout.write(`command: ${result.sdkScaffold.command}\n`);
    process.stdout.write(`files:\n`);
    for (const f of result.sdkScaffold.files) process.stdout.write(`  - ${f}\n`);
    process.stdout.write(`notes:\n`);
    for (const n of result.sdkScaffold.notes) process.stdout.write(`  - ${n}\n`);

    process.stdout.write(section("Now Assist Hook"));
    process.stdout.write(`surface: ${result.nowAssistHook.surface}\n`);
    process.stdout.write(`family: ${result.nowAssistHook.family}\n`);
    process.stdout.write(`guardian: ${result.nowAssistHook.guardian ? "yes" : "no"}\n`);
    for (const n of result.nowAssistHook.notes) process.stdout.write(`  - ${n}\n`);
    process.stdout.write("\n");
  }
});
