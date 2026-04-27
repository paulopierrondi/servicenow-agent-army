import { defineCommand } from "citty";
import { loadAgents } from "../lib/catalog.js";
import { c, categoryColor, json, table } from "../lib/output.js";

export const agentListCommand = defineCommand({
  meta: {
    name: "list",
    description: "List the advisory army with role and top triggers."
  },
  args: {
    json: { type: "boolean", description: "Emit JSON.", default: false }
  },
  async run({ args }) {
    const agents = loadAgents();
    if (args.json) {
      process.stdout.write(`${json(agents)}\n`);
      return;
    }

    const rows = agents.map((a) => {
      const paint = categoryColor(a.triggers);
      return {
        id: paint(a.id),
        name: a.name,
        role: a.role.length > 60 ? a.role.slice(0, 57) + "..." : a.role,
        triggers: a.triggers.slice(0, 3).join(", ")
      };
    });

    process.stdout.write(`${c.bold(`ServiceNow Agent Army (${agents.length} advisors)`)}\n\n`);
    process.stdout.write(
      table(rows, [
        { header: "ID", key: "id", width: 30 },
        { header: "Name", key: "name", width: 32 },
        { header: "Role", key: "role", width: 60 },
        { header: "Top triggers", key: "triggers", width: 40 }
      ])
    );
    process.stdout.write("\n");
  }
});
