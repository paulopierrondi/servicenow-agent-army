import { existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const MARKERS = ["pnpm-workspace.yaml", "catalog/agents.json"];

function fromImportMeta(): string {
  try {
    return dirname(fileURLToPath(import.meta.url));
  } catch {
    return process.cwd();
  }
}

export function findRepoRoot(start: string = fromImportMeta()): string {
  let dir = resolve(start);
  for (let i = 0; i < 10; i += 1) {
    const ok = MARKERS.every((m) => existsSync(resolve(dir, m)));
    if (ok) return dir;
    const parent = dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }
  // Fallback to cwd if not found - useful when CLI is installed via npx outside repo.
  return process.cwd();
}

export function repoPath(...parts: string[]): string {
  return resolve(findRepoRoot(), ...parts);
}
