import { defineCommand, runMain } from "citty";
import { agentListCommand } from "./commands/agent-list.js";
import { agentNewCommand } from "./commands/agent-new.js";
import { deployCommand } from "./commands/deploy.js";
import { diagnoseCommand } from "./commands/diagnose.js";
import { galleryPushCommand } from "./commands/gallery-push.js";
import { workflowNewCommand } from "./commands/workflow-new.js";
import { workflowValidateCommand } from "./commands/workflow-validate.js";
import { setColorEnabled } from "./lib/output.js";

const VERSION = "0.1.0";

const agentCommand = defineCommand({
  meta: { name: "agent", description: "Manage advisory agents." },
  subCommands: {
    new: agentNewCommand,
    list: agentListCommand
  }
});

const workflowCommand = defineCommand({
  meta: { name: "workflow", description: "Manage agentic workflows." },
  subCommands: {
    new: workflowNewCommand,
    validate: workflowValidateCommand
  }
});

const galleryCommand = defineCommand({
  meta: { name: "gallery", description: "Public gallery integration (stub)." },
  subCommands: {
    push: galleryPushCommand
  }
});

const versionCommand = defineCommand({
  meta: { name: "version", description: "Print CLI version." },
  args: {},
  async run() {
    process.stdout.write(`${VERSION}\n`);
  }
});

export const main = defineCommand({
  meta: {
    name: "servicenow-army",
    version: VERSION,
    description: "CLI for the ServiceNow Agent Army. Scaffold agents, validate catalogs, and run the advisory council."
  },
  args: {
    "no-color": { type: "boolean", description: "Disable ANSI colors." }
  },
  setup({ args }) {
    if (args["no-color"] || process.env.NO_COLOR) setColorEnabled(false);
  },
  subCommands: {
    diagnose: diagnoseCommand,
    agent: agentCommand,
    workflow: workflowCommand,
    deploy: deployCommand,
    gallery: galleryCommand,
    version: versionCommand
  }
});

runMain(main);
