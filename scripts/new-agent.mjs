import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();

function parseArgs(argv) {
  const args = {};
  for (let index = 0; index < argv.length; index += 1) {
    const item = argv[index];
    if (item.startsWith("--")) {
      const key = item.slice(2);
      const value = argv[index + 1];
      args[key] = value;
      index += 1;
    }
  }
  return args;
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function required(args, key) {
  if (!args[key]) {
    throw new Error(`Missing --${key}`);
  }
  return args[key];
}

function readJson(path) {
  return JSON.parse(readFileSync(resolve(root, path), "utf8"));
}

function writeJson(path, data) {
  writeFileSync(resolve(root, path), `${JSON.stringify(data, null, 2)}\n`);
}

const args = parseArgs(process.argv.slice(2));
const id = slugify(required(args, "id"));
const name = required(args, "name");
const role = required(args, "role");
const mission = required(args, "mission");
const path = `agents/${id}.md`;
const fullPath = resolve(root, path);

if (existsSync(fullPath)) {
  throw new Error(`${path} already exists`);
}

const markdown = `---\nid: ${id}\nname: ${name}\nrole: ${role}\n---\n\n# ${name}\n\n## Mission\n\n${mission}\n\n## Use When\n\n- Add trigger scenario.\n\n## Inputs\n\n- Add required input.\n\n## Outputs\n\n- Add expected output.\n\n## Prompt\n\n\`\`\`text\nAct as the ${name}.\n\nGoal:\n<goal>\n\nReturn a ServiceNow-ready recommendation with assumptions, guardrails, and tests.\n\`\`\`\n`;

writeFileSync(fullPath, markdown);

const catalogPath = "catalog/agents.json";
const catalog = readJson(catalogPath);
catalog.push({
  id,
  name,
  role,
  mission,
  primaryUsers: [],
  triggers: [],
  outputs: [],
  guardrails: ["Add at least one safety guardrail before publishing."],
  path
});
writeJson(catalogPath, catalog);

console.log(`Created ${path} and updated ${catalogPath}`);
