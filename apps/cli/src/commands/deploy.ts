import { defineCommand } from "citty";
import { c } from "../lib/output.js";

export const deployCommand = defineCommand({
  meta: {
    name: "deploy",
    description: "Deploy via mcp-write package (stub - dry-run only flow)."
  },
  args: {
    "dry-run": {
      type: "boolean",
      description: "Required flag. Production writes are blocked in this CLI.",
      default: false
    }
  },
  async run({ args }) {
    if (!args["dry-run"]) {
      process.stderr.write(`${c.yellow("--dry-run is required.")} ${c.dim("Production writes go through packages/mcp-write only.")}\n`);
      process.exit(2);
    }
    process.stdout.write(`${c.bold("Deploy stub")}\n`);
    process.stdout.write(`This CLI does not own write paths. Use the mcp-write package + approval flow:\n`);
    process.stdout.write(`  1. ${c.cyan("packages/mcp-write")} computes the diff via ${c.cyan("sn_table_patch_dryrun")}.\n`);
    process.stdout.write(`  2. A human approves out-of-band (web app or Slack) within 15 minutes.\n`);
    process.stdout.write(`  3. ${c.cyan("sn_table_patch")} runs with the signed approval token, writing audit + snapshot.\n`);
    process.stdout.write(`  4. ${c.cyan("sn_rollback")} reverses by audit_id within the rollback window.\n\n`);
    process.stdout.write(`${c.dim("See: docs/adr/ADR-002-skill-tool-contract.md and packages/mcp-write/README.md")}\n`);
  }
});
