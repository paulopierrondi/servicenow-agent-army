import { existsSync, writeFileSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { defineCommand } from "citty";
import { z } from "zod";
import { c } from "../lib/output.js";
import { findRepoRoot } from "../lib/paths.js";

const Schema = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/),
  name: z.string().min(3),
  surface: z.string().min(3),
  trigger: z.string().min(3),
  agents: z.array(z.string()).min(1)
});

export const workflowNewCommand = defineCommand({
  meta: {
    name: "new",
    description: "Scaffold a new workflow JSON and register it in catalog/workflows.json."
  },
  args: {
    id: { type: "string", required: true, description: "kebab-case id" },
    name: { type: "string", required: true, description: "Display name" },
    surface: { type: "string", required: true, description: "ServiceNow surface (e.g. AI Agent Studio + Flow Designer)" },
    trigger: { type: "string", required: true, description: "Trigger description" },
    agents: { type: "string", required: true, description: "Comma-separated agent ids participating" }
  },
  async run({ args }) {
    const parsed = Schema.safeParse({
      id: args.id,
      name: args.name,
      surface: args.surface,
      trigger: args.trigger,
      agents: String(args.agents).split(",").map((s) => s.trim()).filter(Boolean)
    });
    if (!parsed.success) {
      process.stderr.write(`${c.red("Invalid input:")} ${parsed.error.errors.map((e) => e.message).join("; ")}\n`);
      process.exit(2);
    }

    const root = findRepoRoot();
    const workflowPath = resolve(root, `workflows/${parsed.data.id}.json`);
    const catalogPath = resolve(root, "catalog/workflows.json");

    if (existsSync(workflowPath)) {
      process.stderr.write(`${c.red("Workflow already exists:")} ${workflowPath}\n`);
      process.exit(1);
    }

    const steps = [
      "Capture intent, scope, and inputs from the requester.",
      "Read source records with read-only MCP tools (sn-discovery).",
      "Draft a recommendation per advisor, then merge.",
      "Route any production write through dry run + approval + audit + rollback.",
      "Emit executive summary and practitioner task list."
    ];

    const spec = {
      id: parsed.data.id,
      name: parsed.data.name,
      serviceNowSurface: parsed.data.surface,
      trigger: parsed.data.trigger,
      businessOutcome: `TODO: state the business outcome for ${parsed.data.name}.`,
      inputs: ["scope", "target records", "guardrails"],
      agents: parsed.data.agents,
      steps,
      approvalPoints: [
        "Before any production write",
        "Before sending output outside the platform team"
      ],
      tests: [
        "Empty scope returns a clarification request.",
        "Read-only mode produces recommendations but no writes.",
        "Production write path requires explicit approval token."
      ]
    };

    writeFileSync(workflowPath, `${JSON.stringify(spec, null, 2)}\n`);

    const catalog = JSON.parse(readFileSync(catalogPath, "utf8")) as Array<Record<string, unknown>>;
    catalog.push({
      id: parsed.data.id,
      name: parsed.data.name,
      serviceNowSurface: parsed.data.surface,
      trigger: parsed.data.trigger,
      agents: parsed.data.agents,
      steps: steps.length,
      path: `workflows/${parsed.data.id}.json`
    });
    writeFileSync(catalogPath, `${JSON.stringify(catalog, null, 2)}\n`);

    process.stdout.write(`${c.green("Workflow created:")} workflows/${parsed.data.id}.json\n`);
    process.stdout.write(`${c.dim("Run `servicenow-army workflow validate` to confirm.")}\n`);
  }
});
