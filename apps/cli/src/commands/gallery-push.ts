import { defineCommand } from "citty";
import { c } from "../lib/output.js";

export const galleryPushCommand = defineCommand({
  meta: {
    name: "push",
    description: "Submit anonymous output to the public gallery (stub)."
  },
  args: {},
  async run() {
    process.stdout.write(`${c.bold("Gallery push stub")}\n`);
    process.stdout.write(`Gallery API is not live yet. For now:\n`);
    process.stdout.write(`  - Save your generated artifacts to disk.\n`);
    process.stdout.write(`  - Open a PR against ${c.cyan("servicenow-agent-army")} adding under ${c.cyan("marketing/gallery/")}.\n`);
    process.stdout.write(`  - Strip account names, sys_ids, and PII before submitting.\n\n`);
    process.stdout.write(`${c.dim("Tracking: AGE gallery API issue. Subscribe in the repo for updates.")}\n`);
  }
});
