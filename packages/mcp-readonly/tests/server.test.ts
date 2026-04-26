import { describe, expect, it } from "vitest";
import { buildServer, listToolDefinitions, SERVER_NAME } from "../src/server.js";
import { tools } from "../src/tools/index.js";

describe("mcp-readonly server", () => {
  it("exposes the expected server name", () => {
    expect(SERVER_NAME).toBe("sn-readonly");
  });

  it("constructs a server instance without throwing", () => {
    const server = buildServer();
    expect(server).toBeDefined();
  });

  it("registers more than zero tools", () => {
    expect(tools.length).toBeGreaterThan(0);
  });

  it("every tool has name, description, and inputSchema", () => {
    const defs = listToolDefinitions();
    for (const def of defs) {
      expect(def.name).toMatch(/^[a-z][a-z0-9_]*$/);
      expect(def.description.length).toBeGreaterThan(10);
      expect(def.inputSchema).toBeDefined();
    }
  });

  it("tool names are unique", () => {
    const names = tools.map((t) => t.name);
    expect(new Set(names).size).toBe(names.length);
  });
});
