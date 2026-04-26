# MCP Landscape & ServiceNow Gap Analysis - April 2026

> Data-stamp: 2026-04-26. Sources accessed 2026-04-26 unless otherwise noted.

## TL;DR

- The ServiceNow MCP server space is **crowded but shallow**: 7+ public community servers exist, plus a native ServiceNow MCP Server (Zurich Patch 4, Dec 2025) that gates access behind a Now Assist Pro Plus / Enterprise Plus SKU.
- Existing community servers cluster around the same pattern: thin Table API wrappers + ITSM convenience tools, MIT-licensed, basic/OAuth auth, no built-in dry-run, approval, audit, or rollback semantics.
- Native ServiceNow MCP exposes Now Assist *skills* only (not arbitrary tables), is remote-only over Streamable HTTP, and consumes Now Assist credits per call - unsuitable for free or self-managed read-heavy discovery.
- **Justifiable gaps for our two servers**: (a) read-only discovery server with role-aware queries and schema introspection that any Tokyo+ instance can run without Now Assist entitlements; (b) write server with explicit dry-run -> human approval token -> audit -> rollback chain, which no public server currently implements end-to-end.
- The **two repos worth studying/forking**: `echelon-ai-labs/servicenow-mcp` (largest tool surface, MIT, mature code patterns) and `jschuller/mcp-server-servicenow` (FastMCP 3.1, OAuth 2.1 + PKCE, Streamable HTTP, modern Python baseline aligned with our targets).

## 1. MCP Spec - current state (Apr 2026)

| Item | Status |
| --- | --- |
| Latest stable spec | **2025-11-25** (no new release since November 2025 per the 2026 Roadmap, published 2026-03-09) |
| Base protocol | JSON-RPC 2.0, stateful, capability negotiation |
| Transports supported | `stdio` (local), `Streamable HTTP` (remote, single endpoint, POST + optional GET/SSE for streaming) |
| HTTP+SSE legacy transport | **Deprecated since spec 2025-03-26**. Backward-compatible until ecosystem deadlines mid-2026 (e.g., Atlassian Rovo cuts off 2026-06-30). New servers SHOULD ship Streamable HTTP only. |
| Auth (public servers) | OAuth 2.1 + PKCE is the de-facto pattern. Spec defers exact mechanics to implementor; 2026 Roadmap lists "SSO-integrated auth" and gateway behavior as enterprise-readiness priorities. |
| Server features | **Tools** (functions the LLM calls, side-effects allowed), **Resources** (read-only context the host or model fetches), **Prompts** (templated user-facing workflows). |
| Client features | Sampling, Roots, Elicitation. |

### When to use Tools vs Resources vs Prompts

| Primitive | Use when | Example for our servers |
| --- | --- | --- |
| **Tool** | The model needs to perform an action with arguments and a structured return | `sn_table_query`, `sn_table_patch_dryrun` |
| **Resource** | Static or semi-static reference content the host can pre-load (host decides when to read it) | `schema://incident`, `policy://approval-rules` |
| **Prompt** | A reusable user-triggered template (slash-command style) | `/snow-discover-active-flows`, `/snow-explain-table` |

> Source: [MCP Specification 2025-11-25](https://modelcontextprotocol.io/specification/2025-11-25), [Transports section](https://modelcontextprotocol.io/specification/2025-11-25/basic/transports), [2026 MCP Roadmap](https://blog.modelcontextprotocol.io/posts/2026-mcp-roadmap/).

## 2. MCP hosts relevant for our audience

| Host | MCP support | Discovery / config | Notable limits |
| --- | --- | --- | --- |
| **Claude Code** | First-class. Supports per-subagent server scoping, plugin-bundled MCPs, tool search. | `~/.claude/mcp.json` and project-local `.mcp.json`; `claude mcp` CLI; plugin manifests. | Tool count budget per agent; servers must declare descriptions used by tool-search. |
| **Cursor** | First-class plugin model. | One-click setup from curated list; `~/.cursor/mcp.json`. | Hard limit ~40 tools per workspace. |
| **Windsurf** | Supported. | Settings UI + JSON config. | Less mature error surfacing than Claude Code/Cursor. |
| **Zed** | Supported under different naming (`context_servers`). | Zed settings JSON. | Naming divergence; same MCP wire protocol. |
| **Codex CLI (OpenAI)** | **Not supported** as of Apr 2026. Holdout alongside Antigravity. | n/a | Blocks our servers entirely from Codex users. |
| **ChatGPT Desktop** | Supported (Apps SDK / connectors path; remote MCP via Streamable HTTP). | UI-managed connectors. | Remote-only; stdio servers not directly usable. |

Implication: ship **stdio + Streamable HTTP** for both servers. Stdio covers Claude Code/Cursor/Windsurf/Zed local use; Streamable HTTP is required for ChatGPT Desktop and any hosted multi-tenant deployment.

> Sources: vendor docs and comparisons collated in [Cursor Alternatives 2026](https://www.morphllm.com/comparisons/cursor-alternatives), [AI Coding Agents 2026 Comparison](https://lushbinary.com/blog/ai-coding-agents-comparison-cursor-windsurf-claude-copilot-kiro-2026/).

## 3. ServiceNow MCP servers - inventory (Apr 2026)

Researched via GitHub, mcpservers.org, pulsemcp.com, mcp.so, ServiceNow Community.

| # | Server | Author | Scope | Tool count | Auth | Transport | Multi-instance | Guardrails (dry-run / approval / audit / rollback) | License | Stars (Apr 2026) | Last release / commit | Link |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | **Now Assist MCP Server** (native) | ServiceNow | Read+write via Now Assist *skills* only | Variable (any skill / NASK script) | OAuth 2.0 required | Streamable HTTP (remote-only) | Per-instance install | AI Control Tower policies (Zurich+); no explicit dry-run/rollback in MCP layer | Commercial (requires Now Assist Pro Plus or Enterprise Plus, +1 assist per call) | n/a | Zurich Patch 4 (Dec 2025), Yokohama Patch 11 (Jan 2026) | [docs](https://www.servicenow.com/docs/bundle/zurich-intelligent-experiences/page/administer/mcp-server-console/concept/mcp-server-console-landing.html) |
| 2 | **echelon-ai-labs/servicenow-mcp** | Echelon AI Labs | Read+write across ITSM, Catalog, Change, Agile, KB, Users, UI Policies, Scripts, Changesets | 60+ | Basic, OAuth, API Key | stdio + SSE (Streamable HTTP not confirmed) | No | None built-in (relies on SN ACLs) | MIT | 248 | active (42 commits main) | [github](https://github.com/echelon-ai-labs/servicenow-mcp) |
| 3 | **Happy Platform MCP v3.1** (Happy-Technologies-LLC) | Happy Technologies LLC | Read+write CRUD over 160+ tables, batch ops, script management | 44 hand-written + 480+ auto-generated | Basic, OAuth 2.0 (client_credentials, password) | stdio + HTTP/SSE | **Yes**, per-request routing | None built-in; supports `sys_trigger` background scripts (raises risk) | Apache 2.0 | 40 | v3.0.1 - 2026-03-31 | [github](https://github.com/Happy-Technologies-LLC/mcp-servicenow-nodejs) |
| 4 | **jschuller/mcp-server-servicenow** | jschuller | Read+write Table API, CMDB, System, Update Sets | 19 | OAuth 2.1 + PKCE via FastMCP proxy | stdio + Streamable HTTP | Single-instance | None built-in; defers governance to operator / SN logs | MIT | 8 | v0.5.1 - 2026-03-22 | [github](https://github.com/jschuller/mcp-server-servicenow) |
| 5 | **michaelbuckner/servicenow-mcp** | Michael Buckner | Read+write incidents, search, scripts, NL search/update | ~10 | Basic, OAuth | stdio | No | None | MIT | 41 | low activity (4 commits) | [github](https://github.com/michaelbuckner/servicenow-mcp) |
| 6 | **ShunyaAI/snow-mcp** | ShunyaAI | Read+write ITSM, ITOM, App Dev | 60+ | Basic only | stdio | Not documented | None; Pydantic input validation; exponential backoff | MIT | 5 | not stated | [github](https://github.com/shunyaai/snow-mcp) |
| 7 | **habenani-p/servicenow-mcp** (listed on mcpservers.org) | habenani-p | Read+write across 31+ modules (ITSM, ITOM, HRSD, CSM, SecOps, GRC, Agile, ATF, Flow, Service Portal, etc.) | 400+ | Basic, OAuth 2.0 | stdio (Node.js 20+) | **Yes** (`instances.json`, per-call instance param) | **5-tier permission model**: read-only default; Write/CMDB-Write/Scripting/Now-Assist gated by explicit opt-in; 14 role personas | MIT | not stated | not stated | [mcpservers.org](https://mcpservers.org/servers/habenani-p/servicenow-mcp) |
| 8 | **LokiMCPUniverse/servicenow-mcp-server** | Loki MCP Universe | Read+write Table, Incident, Change, CMDB, KB, Catalog, Analytics | ~20 | Basic (OAuth recommended for prod) | stdio | No | Retry, timeout, structured logging, doc guidance only | MIT | 2 | v0.1.0 - 2025-06-09 | [github](https://github.com/LokiMCPUniverse/servicenow-mcp-server) |
| 9 | **modesty/fluent-mcp** | modesty | ServiceNow **SDK/Fluent** wrapper (build/deploy/pack apps - not Table API) | 9 SDK commands | Basic, OAuth via SN SDK CLI profile | stdio | Single-profile | n/a (operates on local SDK projects) | MIT | not stated | not stated | [mcpservers.org](https://mcpservers.org/servers/modesty/fluent-mcp) |

Notes:
- Star counts and commit dates from listings as of 2026-04-26; some repos do not surface dates publicly via the listing pages.
- "Guardrails" column scored *only* on documented MCP-layer behavior. SN-side ACLs are assumed available everywhere and are not credit.

## 4. Registries and directories

| Channel | Role | Submission path | Notes |
| --- | --- | --- | --- |
| **Official MCP Registry** | Anthropic + community-driven authoritative metadata source. Preview since Sep 2025; live at `https://registry.modelcontextprotocol.io/`. | `mcp publish` CLI generates `server.json`; namespace via GitHub (`io.github.<user>/*`) or domain-verified (`com.<company>/*`). | Single source of truth; aggregators consume from here. |
| **awesome-mcp-servers** ([punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers)) | Curated list. | PR to README. | Highest visibility for organic discovery. |
| **mcpservers.org** ("Awesome MCP Servers" web UI) | Web-rendered catalog of awesome list + extras. | Auto-indexed from GitHub once linked from awesome list. | Where most ServiceNow servers in our table currently surface. |
| **Smithery** | Index + install/manage tooling. | `smithery mcp publish <url> -n <org>/<name>` or web dashboard at smithery.ai. | Strong on remote/hosted servers. |
| **Glama** | Index of 21k+ MCP servers + gateway proxying 2k+ with managed OAuth, per-tool ACLs, call logging. | Auto-indexes open-source GitHub repos. | Useful free hosted gateway for testing. |
| **PulseMCP** | Web directory with ratings. | Auto-indexed. | Marketing surface. |
| **MCPfinder** | Federated search across Registry + Glama + Smithery. | Indirect (via the three above). | Confirms reach if listed in primary registries. |

> Sources: [The MCP Registry - About](https://modelcontextprotocol.io/registry/about), [registry.modelcontextprotocol.io](https://registry.modelcontextprotocol.io/), [Smithery docs](https://smithery.ai/docs/use/connect), [Glama](https://glama.ai/), [MCP Server Directories](https://dynomapper.com/blog/ai/mcp-server-directories/).

## 5. Gap analysis - why build our two servers

### What existing servers do *well*
- Broad table coverage (habenani-p, echelon, Happy Platform).
- Multi-instance routing (Happy Platform, habenani-p).
- Modern auth (jschuller: OAuth 2.1 + PKCE; Streamable HTTP).
- ServiceNow SDK/Fluent flow covered (modesty).

### What is missing across all 9 inventoried servers

| Gap | Coverage today | Our servers |
| --- | --- | --- |
| **Dry-run for write operations** (compute diff, return predicted before/after, no commit) | None do it as a first-class tool. Most rely on SN ACLs to fail closed. | `sn_table_patch_dryrun` returns the diff *and* a signed `approval_token`. |
| **Explicit human-approval token chain** (model proposes -> human approves out-of-band -> token unlocks commit) | None. | `request_human_approval` + token-gated `sn_table_patch`. |
| **Append-only audit per MCP call** (who, when, what, why, dry-run hash, approval signer) | None publish this. SN sys logs are post-hoc and not MCP-aware. | `commit_audit_event` writes structured records to a dedicated audit table. |
| **Rollback of last MCP-issued change** | None. | `rollback_last_change` using stored before-image from dry-run hash. |
| **Read-only-by-construction discovery server** (server cannot mutate even if misconfigured) | habenani-p comes closest with 5-tier model, but a single server still ships write tools. | Two-server split: discovery binary has zero write code paths. |
| **Schema-aware role-aware querying** (`describe_table`, `search_schema` honoring ACLs of caller) | Fragmentary; most expose `sys_db_object` reads but don't reconcile with effective ACL. | Built-in `describe_table` and `search_schema` projecting through caller's role context. |
| **AI Agent Studio / Now Assist *introspection* without consuming assists** | Native MCP requires Now Assist SKU and burns assists per call; community servers ignore AI Agent Studio metadata. | `list_active_flows`, `list_ai_agents` query metadata tables directly - zero assist cost. |
| **Coverage from Tokyo onward without entitlements** | jschuller is the only one targeting Tokyo+ explicitly; others are version-implicit. | Same baseline, with discovery-only safety. |

### Why splitting into two servers is defensible
1. **Blast radius**: discovery binary has no write tools to misuse, jailbreak, or mis-prompt. Sales/architect demos can hand the discovery server to anyone.
2. **Permission model alignment**: maps cleanly to two separate ServiceNow service accounts (read-only vs change-bound), one OAuth client each.
3. **Host limits**: Cursor caps tools at ~40. Two narrow servers compose better than one fat 50+ tool server.
4. **Compliance story**: write server can be reviewed/approved/audited as a controlled artifact independent of the read server, which simplifies CAB conversations in regulated FSI contexts.

### Differentiation summary

| Differentiator | Already exists in community | Differentiated by us |
| --- | --- | --- |
| Table API CRUD | Yes (8 servers) | No |
| Multi-instance routing | Yes (2 servers) | Should match (table stakes) |
| OAuth 2.1 + PKCE + Streamable HTTP | Yes (jschuller) | Should match |
| **Dry-run + approval-token + audit + rollback chain** | **No** | **Yes** |
| **Read-only-by-construction binary** | **No** | **Yes** |
| **AI Agent Studio metadata introspection without assist cost** | **No** | **Yes** |
| Now Assist skill execution | Native ServiceNow MCP only (paid) | Out of scope (do not duplicate) |

## 6. Open questions

1. **AI Agent Studio metadata table names** - do we read `sys_ai_agent`, `sys_aia_*`, or a newer family in Zurich+? Confirm before locking schema in `list_ai_agents`.
2. **Approval token storage** - signed JWT held by the host vs server-side ephemeral table in the SN instance? Trade-offs: stateless vs auditability.
3. **Streamable HTTP session model** - 2026 Roadmap explicitly flags stateless session models for horizontal scaling. Decide now: stateless (`Mcp-Session-Id` optional) or stateful.
4. **Rollback scope** - per-record before-image only, or also support multi-record transactional rollback? Latter requires saved batch IDs.
5. **Should we publish to the Now Assist MCP catalog as a *companion* to the native server**, framing ours as the open-tier complement for non-Now-Assist customers? This is a positioning decision, not technical.
6. **Forking vs greenfield** - `echelon-ai-labs/servicenow-mcp` (MIT, broad coverage) is a viable fork base if we strip writes from the discovery binary; `jschuller/mcp-server-servicenow` is a better template for the write binary's auth + transport baseline.

---

### References

- [MCP Specification 2025-11-25](https://modelcontextprotocol.io/specification/2025-11-25)
- [MCP Transports - Streamable HTTP](https://modelcontextprotocol.io/specification/2025-11-25/basic/transports)
- [2026 MCP Roadmap](https://blog.modelcontextprotocol.io/posts/2026-mcp-roadmap/)
- [The MCP Registry - About](https://modelcontextprotocol.io/registry/about)
- [Official MCP Registry](https://registry.modelcontextprotocol.io/)
- [ServiceNow Community - Enable MCP and A2A FAQ (Zurich Patch 4)](https://www.servicenow.com/community/now-assist-articles/enable-mcp-and-a2a-for-your-agentic-workflows-with-faqs-updated/ta-p/3373907)
- [ServiceNow Docs - MCP Server Console](https://www.servicenow.com/docs/bundle/zurich-intelligent-experiences/page/administer/mcp-server-console/concept/mcp-server-console-landing.html)
- [echelon-ai-labs/servicenow-mcp](https://github.com/echelon-ai-labs/servicenow-mcp)
- [Happy-Technologies-LLC/mcp-servicenow-nodejs](https://github.com/Happy-Technologies-LLC/mcp-servicenow-nodejs)
- [jschuller/mcp-server-servicenow](https://github.com/jschuller/mcp-server-servicenow)
- [michaelbuckner/servicenow-mcp](https://github.com/michaelbuckner/servicenow-mcp)
- [ShunyaAI/snow-mcp](https://github.com/shunyaai/snow-mcp)
- [habenani-p ServiceNow MCP listing](https://mcpservers.org/servers/habenani-p/servicenow-mcp)
- [LokiMCPUniverse/servicenow-mcp-server](https://github.com/LokiMCPUniverse/servicenow-mcp-server)
- [Fluent (ServiceNow SDK) MCP](https://mcpservers.org/servers/modesty/fluent-mcp)
- [Why MCP Deprecated SSE for Streamable HTTP](https://blog.fka.dev/blog/2025-06-06-why-mcp-deprecated-sse-and-go-with-streamable-http/)
- [punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers)
- [Smithery](https://smithery.ai/) | [Glama](https://glama.ai/) | [PulseMCP](https://www.pulsemcp.com/) | [MCPfinder](https://mcpfinder.dev/)
