import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { defineCommand } from "citty";
import { c } from "../lib/output.js";
import { findRepoRoot } from "../lib/paths.js";

export const workflowValidateCommand = defineCommand({
  meta: {
    name: "validate",
    description: "Run scripts/validate-catalog.mjs to check agents, workflows, and skills."
  },
  args: {},
  async run() {
    const root = findRepoRoot();
    const script = resolve(root, "scripts/validate-catalog.mjs");
    if (!existsSync(script)) {
      process.stderr.write(`${c.red("scripts/validate-catalog.mjs not found at repo root.")}\n`);
      process.exit(1);
    }

    const code = await new Promise<number>((resolveP, rejectP) => {
      const child = spawn(process.execPath, [script], { cwd: root, stdio: "inherit" });
      child.on("error", rejectP);
      child.on("close", (c2) => resolveP(c2 ?? 0));
    });

    if (code === 0) {
      process.stdout.write(`${c.green("Catalog valid.")}\n`);
    }
    process.exit(code);
  }
});
