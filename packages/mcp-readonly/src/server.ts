#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { zodToJsonSchema } from "zod-to-json-schema";
import { tools } from "./tools/index.js";

export const SERVER_NAME = "sn-readonly";
export const SERVER_VERSION = "0.1.0";

export function buildServer(): Server {
  const server = new Server(
    { name: SERVER_NAME, version: SERVER_VERSION },
    { capabilities: { tools: {} } },
  );

  server.setRequestHandler(ListToolsRequestSchema, async () => ({
    tools: tools.map((t) => ({
      name: t.name,
      description: t.description,
      inputSchema: zodToJsonSchema(t.inputSchema, { target: "jsonSchema7" }) as Record<
        string,
        unknown
      >,
    })),
  }));

  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;
    const tool = tools.find((t) => t.name === name);
    if (!tool) {
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify({
              ok: false,
              error: { code: "validation", message: `unknown tool: ${name}`, retryable: false },
            }),
          },
        ],
        isError: true,
      };
    }
    const parsed = tool.inputSchema.safeParse(args ?? {});
    if (!parsed.success) {
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify({
              ok: false,
              error: {
                code: "validation",
                message: "input failed schema validation",
                retryable: false,
                details: { issues: parsed.error.issues },
              },
            }),
          },
        ],
        isError: true,
      };
    }
    const result = await tool.handler(parsed.data);
    return {
      content: [{ type: "text", text: JSON.stringify(result) }],
      isError: result.ok === false,
    };
  });

  return server;
}

export function listToolDefinitions() {
  return tools.map((t) => ({
    name: t.name,
    description: t.description,
    inputSchema: t.inputSchema,
  }));
}

async function main() {
  const server = buildServer();
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

const isMain = import.meta.url === `file://${process.argv[1]}`;
if (isMain) {
  main().catch((error) => {
    // eslint-disable-next-line no-console
    console.error("[mcp-readonly] fatal:", error);
    process.exit(1);
  });
}
