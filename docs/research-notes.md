# Research Notes

Research date: 2026-04-26.

## ServiceNow

- ServiceNow SDK: official docs say the SDK lets developers create and develop applications in source code locally and upload changes to an instance. The docs are for the Australia release and were updated March 12, 2026. Source: https://www.servicenow.com/docs/r/application-development/servicenow-sdk/servicenow-sdk-landing.html
- Install docs say the SDK is available from npm, supports ServiceNow instances beginning with the Washington DC release, and can be used with `npx @servicenow/sdk`. Source: https://www.servicenow.com/docs/r/application-development/servicenow-sdk/install-servicenow-sdk.html
- CLI docs show `npx @servicenow/sdk auth --add <instance url> --type <auth method> --alias <alias>` for authentication. Source: https://www.servicenow.com/docs/r/xanadu/application-development/servicenow-sdk/servicenow-sdk-cli-commands.html
- AI Agent Studio docs describe the product as the place to create, manage, and test AI agents and agentic workflows. They also mention Now Assist AI agents must be installed first. Source: https://www.servicenow.com/docs/r/yokohama/intelligent-experiences/ai-agent-studio.html
- Create agentic workflow docs say role `sn_aia.admin` is required, and the workflow is created from AI Agent Studio > Create and manage > Agentic workflows. Source: https://www.servicenow.com/docs/r/xanadu/intelligent-experiences/configure-use-case-ai-agents.html

## Claude

- Claude Code SDK has been renamed to Claude Agent SDK. Current docs say to install `@anthropic-ai/claude-agent-sdk` for TypeScript or `claude-agent-sdk` for Python. Source: https://code.claude.com/docs/en/agent-sdk/overview
- Claude Agent SDK can use Claude Code filesystem features, including project instructions, skills, hooks, agents, and commands. Source: https://code.claude.com/docs/en/agent-sdk/claude-code-features
- Claude Agent SDK skills are filesystem artifacts in `.claude/skills/<name>/SKILL.md`. The SDK does not provide a programmatic API for registering skills. Source: https://code.claude.com/docs/en/agent-sdk/skills
- MCP can connect Claude Agent SDK agents to external tools and data sources. Source: https://code.claude.com/docs/en/agent-sdk/mcp

## OpenAI and Codex

- Codex reads `AGENTS.md` files for project guidance and layers global and project-specific instructions. Source: https://developers.openai.com/codex/guides/agents-md
- Codex skills are directories with `SKILL.md` plus optional scripts, references, assets, and agents. Repo skills live under `.agents/skills`. Source: https://developers.openai.com/codex/skills
- Codex SDK lets you programmatically control local Codex agents and is installed with `npm install @openai/codex-sdk`. Source: https://developers.openai.com/codex/sdk
- Codex supports MCP servers through CLI and IDE configuration. Source: https://developers.openai.com/codex/mcp
- OpenAI Agents SDK is for code-first agent apps where your server owns orchestration, tool execution, state, and approvals. Source: https://developers.openai.com/api/docs/guides/agents
- Agent Builder is the hosted OpenAI workflow path for visual workflow creation, publishing, ChatKit deployment, and exported SDK code. Source: https://developers.openai.com/api/docs/guides/agent-builder

## Decision

This repository should be a prompt-first and spec-first factory, not a fake deployer.

Safe default:

1. Generate ServiceNow AI Agent Studio-ready specs.
2. Review them with architecture and guardrail agents.
3. Use AI Agent Studio guided setup for official agent and workflow creation.
4. Use ServiceNow SDK/Fluent for supported app artifacts.
5. Add a customer-specific adapter only after confirming tables, APIs, plugins, and roles in that instance.
