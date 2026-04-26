# SDK & Platform Research — April 2026

> Data-stamp: 2026-04-26. Cite fonte oficial por afirmação. Quando docs públicos não confirmam, marque [VERIFICAR INSTÂNCIA]. Acessos via WebSearch/WebFetch em 2026-04-26.

## TL;DR (capability matrix)

| Capability | Claude Agent SDK | Codex CLI / SDK | ServiceNow SDK (Fluent) | AI Agent Studio | Status |
| --- | --- | --- | --- | --- | --- |
| Filesystem skills (`SKILL.md`) | OK `.claude/skills/` ([docs](https://code.claude.com/docs/en/agent-sdk/skills)) | OK `.agents/skills/` ([docs](https://developers.openai.com/codex/skills)) | n/a (artifact codegen, não skill) | n/a | confirmed |
| Sub-agents programáticos | OK `agents={}` + `Agent` tool ([docs](https://code.claude.com/docs/en/agent-sdk/overview)) | OK subagent workflows, `agents.max_depth` ([docs](https://developers.openai.com/codex/subagents)) | n/a | Teams `sn_aia_team` (UI) ([community](https://www.servicenow.com/community/now-assist-forum/key-tables-used-in-servicenow-agentic-ai-development-migration/m-p/3472625)) | confirmed |
| Hooks (lifecycle) | OK PreToolUse/PostToolUse/Stop/Session ([docs](https://platform.claude.com/docs/en/agent-sdk/hooks)) | OK hooks observam MCP, apply_patch, Bash sessions (v0.124.0) ([changelog](https://developers.openai.com/codex/changelog)) | n/a | Triggers `sn_aia_trigger_configuration` ([community](https://www.servicenow.com/community/now-assist-forum/key-tables-used-in-servicenow-agentic-ai-development-migration/m-p/3472625)) | confirmed |
| MCP server integration | OK stdio/HTTP/SSE/SDK in-process ([docs](https://code.claude.com/docs/en/agent-sdk/mcp)) | OK stdio/HTTP streamable, OAuth, allow/deny ([docs](https://developers.openai.com/codex/mcp)) | n/a (cliente, via Claude/Codex) | n/a publica MCP server [VERIFICAR INSTÂNCIA] | confirmed (clientes) |
| Source-driven AI Agent (artifact) | n/a | n/a | OK `AiAgentWorkflow` Fluent API + auto-ACL (4.6.0) ([release](https://github.com/ServiceNow/sdk/releases)) | UI guided ([docs](https://www.servicenow.com/docs/r/zurich/intelligent-experiences/ai-agent-studio.html)) | confirmed |
| Source-driven NASK skill | n/a | n/a | OK NASK Fluent APIs (4.6.0) ([release](https://github.com/ServiceNow/sdk/releases)) | UI ([docs](https://www.servicenow.com/docs/r/intelligent-experiences/now-assist-skill-kit/exploring-now-assist-skill-kit.html)) | confirmed |
| Public REST API for agent CRUD | n/a | n/a | Possível via Table API em `sn_aia_*` ([VERIFICAR INSTÂNCIA]) | Guided setup é o caminho oficial; execução via REST com role `sn_ais.agent_user` ([community](https://www.servicenow.com/community/now-assist-forum/invoke-custom-ai-agent-from-external-via-rest-api/td-p/3346588)) | needs adapter |
| Tool/skill autoload | OK descoberta automática + `Skill` em allowedTools ([docs](https://code.claude.com/docs/en/agent-sdk/skills)) | OK progressive disclosure (~2% / 8000 chars) ([docs](https://developers.openai.com/codex/skills)) | n/a | n/a | confirmed |
| Guardrails | Permissões, `allowedTools`, `canUseTool` ([docs](https://code.claude.com/docs/en/agent-sdk/mcp)) | enabled_tools/disabled_tools, OAuth, timeouts ([docs](https://developers.openai.com/codex/mcp)) | n/a | Now Assist Guardian (Zurich) — prompt injection, offensiveness, sensitive topics, BYOG ([docs](https://www.servicenow.com/docs/r/zurich/intelligent-experiences/now-assist-guardian.html)) | confirmed |
| Observability/lifecycle | Session ID + resume + system init ([docs](https://code.claude.com/docs/en/agent-sdk/overview)) | Plan mode + handoffs ([changelog](https://developers.openai.com/codex/changelog)) | n/a | AI Control Tower (asset lifecycle) ([docs](https://www.servicenow.com/docs/r/zurich/intelligent-experiences/ai-agent-studio.html)) | confirmed |
| Front-end app deploy | n/a | n/a | OK BYOF/React (4.x) ([docs](https://servicenow.github.io/sdk/category/api-reference)) | n/a | confirmed |

Legenda: OK = confirmado; needs adapter = só via prompt + intervenção manual; [VERIFICAR INSTÂNCIA] = não confirmado em docs públicos.

---

## 1. Claude Agent SDK (Anthropic)

### 1.1 Tools

Built-in tools disponíveis: `Read`, `Write`, `Edit`, `Bash`, `Monitor`, `Glob`, `Grep`, `WebSearch`, `WebFetch`, `AskUserQuestion`, mais `Skill` e `Agent` para discovery e delegação. Acesso é controlado via `allowedTools` no `ClaudeAgentOptions`. Source: [Agent SDK overview](https://code.claude.com/docs/en/agent-sdk/overview), acessado 2026-04-26.

### 1.2 Sub-agents

Definidos programaticamente em `agents: { name: AgentDefinition }` com `description`, `prompt` e `tools`. Invocação acontece via tool `Agent` (precisa estar em `allowedTools`). Mensagens dentro do subagent carregam `parent_tool_use_id`. Diferente de Skills, sub-agents podem ser puramente em código. Source: [overview](https://code.claude.com/docs/en/agent-sdk/overview).

### 1.3 Hooks

Eventos: `PreToolUse`, `PostToolUse`, `Stop`, `SessionStart`, `SessionEnd`, `UserPromptSubmit`. Hooks são callbacks JS/Python que validam, bloqueiam, transformam ou logam ações do agente; suportam matchers regex (ex.: `Edit|Write`). Quando o hook dispara dentro de um subagent, recebe `agent_id` e `agent_type`. Source: [hooks](https://platform.claude.com/docs/en/agent-sdk/hooks).

### 1.4 Skills (filesystem layout)

Estrutura:

```
.claude/skills/<skill-name>/
└── SKILL.md  (YAML frontmatter + Markdown)
```

Locais resolvidos pelo SDK:

| Source | Path | Setting |
| --- | --- | --- |
| Project | `<cwd>/.claude/skills/` | `setting_sources` inclui `"project"` |
| User | `~/.claude/skills/` | `setting_sources` inclui `"user"` |
| Plugin | bundle do plugin instalado | via opção `plugins` |

Frontmatter mínimo: `name` + `description`. O `description` decide invocação implícita pelo modelo.

Para o SDK funcionar com Skills é obrigatório: (a) `cwd` apontando para o projeto, (b) `setting_sources=["user","project"]`, (c) `"Skill"` em `allowed_tools`. Sem isso o tool aparece mas Claude não consegue invocar. Source: [Agent Skills in the SDK](https://code.claude.com/docs/en/agent-sdk/skills).

Limitação relevante: o frontmatter `allowed-tools` do `SKILL.md` só funciona via Claude Code CLI — pelo SDK, o controle de tools é via `allowedTools` da `query()`. [docs](https://code.claude.com/docs/en/agent-sdk/skills).

### 1.5 MCP integration

Config inline no `mcpServers` ou `.mcp.json` na raiz (carregado quando `setting_sources` inclui `"project"`). Transports suportados:

- `stdio` (`{ command, args, env }`) — ideal para servers locais.
- `http` / `sse` (`{ type, url, headers }`) — para servers remotos; OAuth tokens passados via header (SDK não faz fluxo OAuth automático).
- SDK MCP server in-process — define tools direto no app, sem subprocesso.

Naming: `mcp__<server>__<tool>`. Permissões via wildcard em `allowedTools` (`mcp__github__*`). Tool search é default ON — SDK só carrega definição de tool no contexto quando Claude precisa. Timeout default 60s para conexão. Source: [MCP](https://code.claude.com/docs/en/agent-sdk/mcp).

### 1.6 Limitações para produção

- OAuth flows não são automáticos; o app hospedeiro precisa orquestrar e injetar token via header.
- `permissionMode: "acceptEdits"` NÃO auto-aprova MCP tools — usar `allowedTools` específico.
- Skills só via filesystem; não há registro programático.
- Opus 4.7 exige Agent SDK >= v0.2.111 ([overview](https://code.claude.com/docs/en/agent-sdk/overview)).

---

## 2. Codex CLI + Codex SDK (OpenAI)

### 2.1 Skills format (`.agents/skills/`)

Hierarquia de discovery:

| Scope | Path |
| --- | --- |
| Repo | `<repo>/.agents/skills/` |
| User | `$HOME/.agents/skills/` |
| Admin | `/etc/codex/skills` |
| System | bundled by OpenAI |

Skill = diretório com `SKILL.md` (obrigatório, frontmatter `name`+`description`) + opcional `scripts/`, `references/`, `assets/`, `agents/openai.yaml`.

Progressive disclosure: Codex carrega só nomes/descrições/paths inicialmente, capped em ~2% do context window ou 8000 chars; conteúdo full do `SKILL.md` é lido ao selecionar. Source: [Agent Skills](https://developers.openai.com/codex/skills).

### 2.2 `agents/openai.yaml` (config opcional)

```yaml
interface:
  display_name: "..."
  short_description: "..."
  icon_small: ./assets/sm.svg
  brand_color: "#3B82F6"
  default_prompt: "..."
policy:
  allow_implicit_invocation: false
dependencies:
  tools:
    - type: mcp
      value: toolId
      transport: streamable_http
      url: https://example.com/mcp
```

`allow_implicit_invocation: false` força o usuário a chamar a skill explicitamente. Source: [skills](https://developers.openai.com/codex/skills).

### 2.3 Workflow agents / sub-agents

Subagents: spawned em paralelo, resultados coletados. Padrão `agents.max_depth = 1` (impede recursão profunda). Codex só spawna se for explicitamente pedido. Plan mode + handoffs (plan → implement → review) orquestrados a partir da sessão principal. Source: [subagents](https://developers.openai.com/codex/subagents) e [changelog](https://developers.openai.com/codex/changelog).

### 2.4 MCP support

Configuração via `codex mcp add` (CLI) ou edição direta de `~/.codex/config.toml` / `.codex/config.toml` em `[mcp_servers.<name>]`. Transports: stdio (com env forwarding seletivo) e HTTP streamable (Bearer/OAuth, `codex mcp login` inicia o flow). Controles: `enabled_tools`/`disabled_tools` allow-/deny-lists, timeouts (10s startup / 60s execução defaults), `enabled` flag para desligar sem deletar, executor remoto opcional. Source: [Codex MCP](https://developers.openai.com/codex/mcp).

### 2.5 SDK programático

TS (Node 18+) e Python (3.10+, experimental, JSON-RPC contra app-server local). API: `startThread()` / `resumeThread()` / `run(prompt)`. Use cases: CI/CD, embed em ferramentas internas, agents programáticos. Source: [Codex SDK](https://developers.openai.com/codex/sdk).

### 2.6 Diferenças relevantes vs Claude Agent SDK

| Eixo | Claude Agent SDK | Codex |
| --- | --- | --- |
| Skills path | `.claude/skills/` | `.agents/skills/` |
| Discovery | Filesystem at startup, full load on trigger | Progressive disclosure cap (~2% ctx) |
| Skill registration | Filesystem only | Filesystem + `agents/openai.yaml` para UI/policy |
| Sub-agents | `agents` map programático, sempre disponível | Subagent workflows, spawn explícito + `max_depth` |
| MCP scope | Project (`.mcp.json`) + inline | Repo + user + admin (`config.toml`) |
| OAuth MCP | Manual no host | `codex mcp login` integrado |
| Hooks | Lifecycle de tool/session | Idem + observam MCP, apply_patch, Bash sessions |
| Plan mode | Sessions/resume | Plan mode nativo com aprovação inline |

Resumo: Codex é mais opinativo em policy/UI metadata (`agents/openai.yaml`); Claude SDK é mais pluggable como library (TS/Python embutível). Para o repo Agent Army, faz sentido espelhar ambos os layouts — já existe `.claude/skills/` e `.agents/skills/` no repo.

---

## 3. ServiceNow SDK / Fluent

### 3.1 Versão atual e family

- **SDK**: `@servicenow/sdk` v4.6.0 (latest abril 2026). Source: [GitHub releases](https://github.com/ServiceNow/sdk/releases).
- **Family release alvo**: Yokohama / Zurich (Fluent API ref oficial publicada no bundle Yokohama; AIAF/NASK 4.6 já suportam features Zurich). Source: [Fluent API ref](https://www.servicenow.com/docs/bundle/yokohama-application-development/page/build/servicenow-sdk/reference/servicenow-fluent-api-reference.html).
- **Pré-requisito**: Node.js 20+. Source: [npm](https://www.npmjs.com/package/@servicenow/sdk).

### 3.2 Comandos principais (CLI `now-sdk`)

| Comando | Função |
| --- | --- |
| `now-sdk init` | Scaffold de scoped app (incl. templates fullstack React) |
| `now-sdk build` | Compila Fluent → package deployável |
| `now-sdk deploy` | Push do package para a instância |
| `now-sdk install` | Instala dependências |
| `now-sdk dependencies` | Resolve deps cross-scope |
| `now-sdk transform` | Converte XML legado em Fluent |
| `now-sdk download` | Puxa app existente da instância |
| `now-sdk clean` | Limpa build outputs |
| `now-sdk pack` | Empacota artefato |
| `now-sdk explain` | Lookup de docs SDK (tag-based, list, raw md, brief) |
| `now-sdk setup` | Verifica ambiente |

Source: [GitHub README](https://github.com/ServiceNow/sdk), [community Q&A](https://www.servicenow.com/community/servicenow-ide-sdk-and-fluent/how-do-the-build-and-deploy-commands-work/m-p/3032323).

### 3.3 Artefatos suportados (Fluent vs metadata XML legado)

Categorias confirmadas pela [API reference](https://servicenow.github.io/sdk/category/api-reference):

- **Business logic**: Business Rules, Client Scripts, Scheduled Scripts, Script Actions, Script Includes
- **Security**: ACLs, Roles, Cross-Scope Privileges
- **Data**: Records, Tables (43 column types), Import Sets, Dictionary Overrides, REST APIs
- **UI**: Forms, UI Actions, UI Pages, UI Policies, Lists, Application Menus, Workspaces
- **Service**: Service Catalog, Service Portal (`SPHeaderFooter`, `SPPage`, `SPWidget`, `SPMenu`, `SPTheme`, `SPPageRouteMap`), SLAs
- **Automation**: Flows, Subflows, Custom Actions, **Agentic Workflows**
- **AI**: **AI Agents** (`AiAgentWorkflow` Fluent API), **NowAssist Skill Configurations**
- **System**: Email Notifications, Inbound Email Actions, System Properties, User Preferences
- **Quality**: Automated Tests, Instance Scan
- **Front-end**: BYOF + template React fullstack OOTB ([releases](https://github.com/ServiceNow/sdk/releases))

Fluent vs XML: Fluent é DSL TypeScript que mapeia direto pra registros de plataforma; substitui o pipeline tradicional de update set / XML manifest. XML legado continua deployável mas não é o caminho recomendado para novos apps. Source: [Adam Hutton article](https://adamhutton.medium.com/servicenow-fluent-is-a-big-deal-9c63f35bc5b7), [community Fluent intro](https://www.servicenow.com/community/developer-blog/introduction-of-fluent-servicenow-ide-and-servicenow-sdk/ba-p/3016046).

### 3.4 Novidades 4.6.0 (abril 2026)

- `AiAgentWorkflow` Fluent API → agentic workflow definitions source-driven.
- AIAF: **Automatic ACL Generation for AI Agents** (sem precisar declarar ACL manual).
- NASK: outputs auto-gerados quando array omitido; novos input types `glide_record`, `simple_array`, `json_object`, `json_array`.
- Custom Actions: typed step references (IntelliSense + compile-time safety).
- Inbound Email Actions, Form configuration, Service Portal expanding.
- `explain` aprimorado → suporta nova skill `now-sdk-explain` para AI assistants.

Source: [GitHub releases](https://github.com/ServiceNow/sdk/releases), [community deploy guide](https://www.servicenow.com/community/product-launch-blogs/build-anywhere-run-on-servicenow-deploying-from-external-ides/ba-p/3522466).

### 3.5 Integração Claude Code / Codex

A própria ServiceNow publica agent skills no repo SDK que ensinam Claude Code (e por extensão Codex via skill format) a usar `@servicenow/sdk`. Skills exigem SDK >= 4.6.0. Source: [building ServiceNow apps via Claude Code](https://www.servicenow.com/community/developer-advocate-blog/building-servicenow-apps-via-claude-code-and-the-servicenow-sdk/ba-p/3525677).

---

## 4. AI Agent Studio (ServiceNow)

### 4.1 Como agents/workflows são criados

Caminho oficial: **AI Agent Studio guided setup** — UI para definir specialty, tools, security controls. AI Agent Studio é a "development tool dentro da AI Platform" para criar e customizar agents com NLI. Source: [AI Agent Studio overview](https://www.servicenow.com/docs/r/zurich/intelligent-experiences/ai-agent-studio.html).

Caminho source-driven: **Fluent SDK 4.6.0+** com `AiAgentWorkflow` API (auto-ACL, NASK skill definitions). Source: [SDK 4.6 release notes](https://github.com/ServiceNow/sdk/releases).

### 4.2 Tabelas envolvidas (sn_aia_*, sys_gen_ai_*)

| Tabela | Função |
| --- | --- |
| `sn_aia_agent` | Definições core dos AI Agents |
| `sn_aia_agent_config` | Config + estado de ativação |
| `sn_aia_agent_tool_m2m` | Many-to-many agent ↔ tool |
| `sn_aia_usecase` | Use cases suportados |
| `sn_aia_team` | Teams (grupos de agents) |
| `sn_aia_team_member` | Membership |
| `sn_aia_trigger_configuration` | Triggers de agentic flows |
| `sn_aia_execution_plan` | Plano de alto-nível por request |
| `sn_aia_execution_task` | Steps dentro do plano |
| `sys_gen_ai_usage_log` | Eventos de uso GenAI platform-wide |
| `sys_gen_ai_log_metadata` | Token counts e metadata detalhada |

Source: [community key tables](https://www.servicenow.com/community/now-assist-forum/key-tables-used-in-servicenow-agentic-ai-development-migration/m-p/3472625).

### 4.3 APIs públicas vs guided-setup-only

| Operação | Status |
| --- | --- |
| Criar agent CRUD via REST | Não há endpoint dedicado documentado. Possível via Table API genérica nas `sn_aia_*` tables, mas **[VERIFICAR INSTÂNCIA]** — não há Now Assist Skill Kit-style endpoint público |
| Invocar agent custom externamente | OK via REST, exige role `sn_ais.agent_user` e plugin `com.glide.ai.runtime` ativado. Endpoint via Virtual Agent API. Source: [community thread](https://www.servicenow.com/community/now-assist-forum/invoke-custom-ai-agent-from-external-via-rest-api/td-p/3346588) |
| Criar agent source-driven | OK via Fluent SDK 4.6 (`AiAgentWorkflow`) |
| Logs / observability | OK via Table API em `sn_aia_execution_*` e `sys_gen_ai_log_metadata` |

Conclusão: criar/editar agents é **majoritariamente guided setup ou Fluent**; orquestração externa é via tabelas + roles, sem facade REST oficial documentado.

### 4.4 Relação com Now Assist Skill Kit (NASK)

- NASK gera GenAI skills (skills determinísticas: prompt + LLM + outputs).
- Agents do AI Agent Studio podem **adicionar Now Assist skill como tool** (via "Add Now Assist skill" no agent builder). Source: [add skill ai agent](https://www.servicenow.com/docs/r/zurich/intelligent-experiences/add-skill-ai-agent.html).
- NASK é compatível com Zurich/Yokohama; versão 7.0.0 (Yokohama Patch 11 / Zurich Patch 4) trouxe Document Intelligence. Source: [NASK community deploy options](https://www.servicenow.com/community/now-assist-articles/now-assist-skill-kit-tool-and-deployment-options/ta-p/3284803).
- Fluent SDK 4.6.0 expôs NASK Fluent APIs com input types expandidos.

### 4.5 Governance

- **AI Control Tower**: hub centralizado para inventory, lifecycle (onboarding/change/offboarding), AI Cases & Inquiries, role-based access. Source: [AI Agent Studio docs](https://www.servicenow.com/docs/r/zurich/intelligent-experiences/ai-agent-studio.html).

---

## 5. Now Assist surfaces

### 5.1 Mapa de superfícies

| Surface | Função | Family |
| --- | --- | --- |
| Now Assist Q&A / Discovery | Q&A em portal, search, agent chat | Yokohama+, Zurich enriquecida |
| Now Assist for Code | Code gen scoped/global, scripts, AI inline em IDE/Studio | Zurich ([docs](https://www.servicenow.com/docs/bundle/zurich-api-reference/page/script/now-assist-for-code/concept/now-assist-code-landing.html)) |
| Now Assist for Creator | Flow gen, Flow gen w/ images, Flow recommendations, Flow summarization, Playbook gen, Build Agent, Page Insights | Zurich ([docs](https://www.servicenow.com/docs/r/zurich/build-workflows/now-assist-for-creator/now-assist-for-creator-landing.html)) |
| Now Assist Context Menu (NACM) | Augment text inline (Elaborate/Shorten/Analyze) | 4.0.3+ (Xanadu P9 / Yokohama P3) |
| Domain skills (ITSM/ITOM/CSM/HR/FSM/SecOps) | Out-of-box GenAI skills + agents pré-construídos por LoB | Yokohama+ |
| Now Assist Skill Kit (NASK) | Custom skill builder (prompt+LLM+outputs+OOTB deploy menus) | Compatível com Yokohama/Zurich |
| AI Agent Studio | Compose/orchestrate agents | Zurich |

### 5.2 Build Agent (Zurich destaque)

"Vibe coding" agentic dev tool — chat-based agent que cria/edita/deploya full-stack apps, faz query em metadata existente (BR em Incident, schemas, scope audits), Page Insights em UI Builder. Source: [Vibe Coding Build Agent](https://www.servicenow.com/community/now-assist-for-creator-articles/zurich-release-vibe-coding-with-servicenow-build-agent-the/ta-p/3408806).

### 5.3 Extension points para developers

- **Custom Actions** em Workflow Studio (input/output configuráveis).
- **Spokes / Spoke Generator** (OpenAPI + Postman import).
- **Code snippets** para flows/subflows/actions.
- **Client-callable flow/subflow/action**.
- **LLM configuration** (trocar default LLM para playbook gen).
- **REST/SOAP integration steps** + restricted caller access.
- **NASK custom skills** plugados em qualquer surface (Virtual Agent, agents, NACM).

Source: [Now Assist for Creator landing](https://www.servicenow.com/docs/r/zurich/build-workflows/now-assist-for-creator/now-assist-for-creator-landing.html).

### 5.4 Now Assist Guardian (governance layer)

Função: guardrails real-time para prompt injection, harmful outputs, sensitive data exposure, adversarial behavior. Componentes: offensiveness protection, prompt injection protection, sensitive topic filters, **BYOG (bring-your-own-guardrail)** providers. Integra com:

- Generative AI Controller (capability mgmt)
- Now Assist Admin (config UI)
- AI Control Tower (enterprise oversight)

Family: **Zurich**. Configuração via UI (não há API pública dedicada documentada; logs exportáveis para audit). Source: [Now Assist Guardian](https://www.servicenow.com/docs/r/zurich/intelligent-experiences/now-assist-guardian.html). Confirmação adicional: [Australia release coverage](https://sncdevelopment.com/2026/03/27/servicenow-australia-release-empowering-ai-governance/).

---

## Gap analysis — o que falta para deploy 100% via prompt

| Gap | Impacto | Mitigação no repo Agent Army |
| --- | --- | --- |
| AI Agent Studio não tem facade REST documentada para CRUD de agents | Não dá pra "criar agent via prompt" puramente API | Usar Fluent SDK 4.6 `AiAgentWorkflow` quando applicable; senão, **gerar plano + handoff guided setup** |
| OAuth MCP flows manuais no Claude SDK | Servidores enterprise (ServiceNow OAuth) exigem custom orchestration | Plugin host pre-aquisição de token; fallback para Bearer estático em dev |
| NASK API exposure parcial | Skills custom criadas via NASK fora do scope SDK 4.6 ainda exigem UI | Wrapper Fluent + dry-run em sandbox antes de promover |
| Now Assist Guardian sem API pública para policy-as-code | Governance não versionável | Documentar policies como Markdown anexo + checklist manual de configuração |
| sn_aia_* tables sem REST API explorer-style oficial | Auditoria custom precisa Table API genérica | OK para read-only; write via Table API requer permissões elevadas + risco de sair de sync com Studio |
| Workflow agents (agentic workflows) cross-instance | Não há export/import nativo agnóstico de instance | Confiar em Fluent build/deploy + scoped app boundary |
| Build Agent não tem SDK público | Não dá pra reusar Build Agent fora do Studio | Replicar capabilities via skills locais (Codex/Claude) chamando Fluent SDK |

---

## Decision implications — o que o repo cobre vs delega

**Cobertura do repo (deploy via prompt):**

1. **Skills locais Codex+Claude** (`/.claude/skills/`, `/.agents/skills/`) que orquestram `now-sdk init|build|deploy` para apps source-driven.
2. **Fluent generators** para tables, BR, ACLs, Flows, Custom Actions, NowAssist skill configs, AI Agent workflows (4.6+).
3. **Prompt packs** para templates de agents, NASK skills, agentic flows, prontos para colar em guided setup quando API não existe.
4. **Dry-run + audit** via Table API leitura nas `sn_aia_*` tables para validar deploy.
5. **MCP servers** para ServiceNow Table API e schema introspection (já no `.mcp.example.json`).

**Delegado para guided setup / humano-in-the-loop:**

1. **Now Assist Guardian** — config UI; repo só fornece policy-as-doc.
2. **AI Agent Studio orchestration UI** — para agents que não cabem em `AiAgentWorkflow` Fluent.
3. **Now Assist for Creator features** (Build Agent, Flow gen w/ images) — sem extension API pública.
4. **OAuth setup de MCP servers remotos** — host precisa fazer o flow, repo só consome token.
5. **AI Control Tower lifecycle** (asset onboarding/change/offboarding) — workflow institucional.

Princípio operacional: **prompt-first onde Fluent cobre; handoff documentado para guided setup onde não cobre**. Toda escrita em produção fica atrás de dry-run + audit + rollback (CLAUDE.md já consolida).

---

## Open questions — para o platform team confirmar

1. **REST API oficial para CRUD em `sn_aia_agent` / `sn_aia_agent_config`?** Existe endpoint dedicado ou só Table API genérica em Zurich? [VERIFICAR INSTÂNCIA]
2. **`AiAgentWorkflow` Fluent API: paridade com Studio?** Todos os tool types e configs (incl. NASK skill bind, trigger types, team membership) são expressáveis em código? [VERIFICAR INSTÂNCIA]
3. **Now Assist Guardian policy export?** Existe forma de versionar policies (export/import update set, scoped table)? [VERIFICAR INSTÂNCIA]
4. **Role mínimo para deploy de Fluent app contendo `sn_aia_*` artifacts?** `admin` é necessário ou existem roles intermediários? [VERIFICAR INSTÂNCIA]
5. **Build Agent extensibility?** Roadmap pra exposição como SDK ou MCP server? [VERIFICAR INSTÂNCIA]
6. **`com.glide.ai.runtime` plugin licensing?** Disponível em todas as instances FSI/regulated ou requer SKU específico Now Assist Pro Plus? [VERIFICAR INSTÂNCIA]
7. **Agent SDK 4.6.0+: backward compat com Yokohama?** Skills auto-ACL e novos NASK input types funcionam em Yokohama Patch X ou exigem Zurich? [VERIFICAR INSTÂNCIA]
8. **MCP server oficial ServiceNow?** Existe um (não-community) MCP server para Table API/Now Assist com auth gerenciada? Aparente que não há OOTB — confirmar com platform team. [VERIFICAR INSTÂNCIA]

---

## Source index (acessos 2026-04-26)

**Anthropic / Claude Agent SDK**
- [Agent SDK overview](https://code.claude.com/docs/en/agent-sdk/overview)
- [Agent Skills in the SDK](https://code.claude.com/docs/en/agent-sdk/skills)
- [Connect to external tools with MCP](https://code.claude.com/docs/en/agent-sdk/mcp)
- [Hooks](https://platform.claude.com/docs/en/agent-sdk/hooks)
- [Subagents](https://platform.claude.com/docs/en/agent-sdk/subagents)

**OpenAI / Codex**
- [Codex Skills](https://developers.openai.com/codex/skills)
- [Codex CLI](https://developers.openai.com/codex/cli)
- [Codex MCP](https://developers.openai.com/codex/mcp)
- [Codex SDK](https://developers.openai.com/codex/sdk)
- [Codex Subagents](https://developers.openai.com/codex/subagents)
- [Codex Changelog](https://developers.openai.com/codex/changelog)
- [AGENTS.md guide](https://developers.openai.com/codex/guides/agents-md)

**ServiceNow SDK / Fluent**
- [SDK GitHub](https://github.com/ServiceNow/sdk)
- [SDK Releases](https://github.com/ServiceNow/sdk/releases)
- [Fluent API reference (Yokohama bundle)](https://www.servicenow.com/docs/bundle/yokohama-application-development/page/build/servicenow-sdk/reference/servicenow-fluent-api-reference.html)
- [SDK API Reference site](https://servicenow.github.io/sdk/category/api-reference)
- [npm @servicenow/sdk](https://www.npmjs.com/package/@servicenow/sdk)
- [Building apps via Claude Code + SDK](https://www.servicenow.com/community/developer-advocate-blog/building-servicenow-apps-via-claude-code-and-the-servicenow-sdk/ba-p/3525677)
- [Fluent intro blog](https://www.servicenow.com/community/developer-blog/introduction-of-fluent-servicenow-ide-and-servicenow-sdk/ba-p/3016046)

**ServiceNow AI Agent Studio / Now Assist**
- [AI Agent Studio (Zurich)](https://www.servicenow.com/docs/r/zurich/intelligent-experiences/ai-agent-studio.html)
- [Now Assist Guardian](https://www.servicenow.com/docs/r/zurich/intelligent-experiences/now-assist-guardian.html)
- [Now Assist for Creator](https://www.servicenow.com/docs/r/zurich/build-workflows/now-assist-for-creator/now-assist-for-creator-landing.html)
- [Now Assist for Code (Zurich API ref)](https://www.servicenow.com/docs/bundle/zurich-api-reference/page/script/now-assist-for-code/concept/now-assist-code-landing.html)
- [Now Assist Skill Kit deploy options](https://www.servicenow.com/community/now-assist-articles/now-assist-skill-kit-tool-and-deployment-options/ta-p/3284803)
- [Key Agentic AI tables](https://www.servicenow.com/community/now-assist-forum/key-tables-used-in-servicenow-agentic-ai-development-migration/m-p/3472625)
- [Invoke AI Agent via REST](https://www.servicenow.com/community/now-assist-forum/invoke-custom-ai-agent-from-external-via-rest-api/td-p/3346588)
- [Add Now Assist skill to AI agent](https://www.servicenow.com/docs/r/zurich/intelligent-experiences/add-skill-ai-agent.html)
- [Vibe Coding with Build Agent](https://www.servicenow.com/community/now-assist-for-creator-articles/zurich-release-vibe-coding-with-servicenow-build-agent-the/ta-p/3408806)
