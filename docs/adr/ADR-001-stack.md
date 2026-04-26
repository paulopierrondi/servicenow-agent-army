# ADR-001: Stack do app real

- Status: accepted
- Date: 2026-04-26
- Deciders: Paulo Pierrondi (TAE FSI Brazil, lead)
- Context source: docs/research-2026-04.md, docs/mcp-landscape.md

## Context

O ServiceNow Agent Army precisa de um stack que sustente quatro artefatos com ciclos de vida diferentes:

1. **Web app** publico (catalogo de agents, demos interativos, audit viewer).
2. **CLI** distribuida via npm para builders ServiceNow rodarem o batalhao localmente.
3. **MCP server "Discovery"** read-only (sem caminhos de write no binario).
4. **MCP server "Write-with-Guardrails"** com dry-run -> approval token -> audit -> rollback.

Restricoes nao-negociaveis:

- **Beginner-friendly**: o publico-alvo sao ServiceNow developers/architects, muitos sem fluencia em Rust, Bun-only ou Deno. Ecosistema TS/Node padrao reduz fricao.
- **Custo operacional perto de zero**: free tier Vercel/Cloudflare; nada de Heroku, RDS ou container always-on.
- **Compatibilidade com toolchain ServiceNow**: o `@servicenow/sdk` 4.6.0 exige Node.js 20+ (vide research-2026-04.md secao 3.1) e e a base do `now-sdk init|build|deploy`. Qualquer runtime que nao seja Node introduz adapter.
- **Compatibilidade com hosts MCP**: Claude Code, Cursor, Windsurf, Zed, ChatGPT Desktop. Codex CLI ainda nao suporta MCP em abr/2026 (vide mcp-landscape.md secao 2), mas espelhamos o layout `.agents/skills/` mesmo assim porque skill discovery funciona offline (research-2026-04.md secao 2.1).
- **Cold-start MCP rapido**: stdio servers sao processos curtos; tempo de boot direto importa para UX.

A pesquisa de abr/2026 (research-2026-04.md TL;DR) confirmou que o caminho source-driven oficial da ServiceNow agora e Fluent (TS), com `AiAgentWorkflow` API publicada em SDK 4.6.0. Isso fixa Node como runtime obrigatorio para a parte que toca a plataforma. Faz sentido alinhar tudo (web + CLI + MCP) no mesmo runtime para reduzir context-switch de contribuidores.

A pesquisa MCP (mcp-landscape.md secao 1) mostra que o transporte oficial e **stdio** (local) + **Streamable HTTP** (remoto, single endpoint). HTTP+SSE legado esta deprecated desde spec 2025-03-26, com cutoff de ecossistema em mid-2026. Servers novos devem nascer Streamable HTTP-only para parte HTTP.

A referencia MCP mais alinhada com nossos targets e `jschuller/mcp-server-servicenow` (mcp-landscape.md secao 3, linha 4): FastMCP 3.1, OAuth 2.1 + PKCE, stdio + Streamable HTTP. Ele e Python pero o **modelo de auth e transporte** e o que vamos espelhar em TS.

## Decision

| Camada | Escolha | Alternativas descartadas | Por que |
| --- | --- | --- | --- |
| Web app | **Next.js 16 (App Router) + Vercel** | Remix, Astro, SvelteKit | Familiaridade comunidade ServiceNow Brasil; free tier real; SSR/streaming; Vercel AI SDK ja integrado com Anthropic/OpenAI; deploy em git push. Remix perdeu momentum apos merge com React Router; Astro e fraco para flows interativos (audit viewer). |
| CLI | **Node 22 LTS + Citty + ESM puro** | Bun-only, Deno, Commander, oclif | Compat com `npm exec` e Codex/Claude hosts; ServiceNow SDK e Node-native (research-2026-04.md secao 3.1 exige Node 20+, escolhemos 22 LTS). Citty e mais leve que oclif e tem melhor DX que Commander para subcomandos aninhados. Bun-only quebra usuarios corporativos com proxy/Artifactory configurado para npm registry. Deno tem permissoes diferentes que confundem ServiceNow devs. |
| MCP servers | **Node 22 + `@modelcontextprotocol/sdk` (TS)**; transport `stdio` default + `Streamable HTTP` opcional | FastMCP Python (jschuller), Rust (rmcp), C# | Mesmo runtime do CLI (zero context-switch). OAuth 2.1 + PKCE para Streamable HTTP em prod (mcp-landscape.md secao 1). FastMCP Python obrigaria contribuidores a manter dois runtimes; Rust/C# afastam beginners. Streamable HTTP-only no caminho HTTP (SSE deprecated, mcp-landscape.md secao 1). |
| Monorepo | **pnpm workspaces + Turborepo** | Nx, Lerna, Bun workspaces, Yarn | pnpm tem lockfile determinístico e workspaces estaveis. Turborepo da cache de CI gratis (Vercel-owned, integra direto). Nx e overengineered para 4 packages. Lerna esta em modo manutencao. |
| Lint/format | **Biome** | ESLint + Prettier, dprint | Single tool, TS-native, ~10x mais rapido que ESLint+Prettier em pre-commit. Trade-off honesto: ecossistema de plugins ainda menor que ESLint, mas para o subset que usamos (TS/JSX/JSON) cobre tudo. |
| Testes | **Vitest** | Jest, node:test, Bun test | Vite-native, rapido, suporte ESM nativo (zero config). Compat com Vercel/Next 16. Jest tem peso de ts-jest/babel-jest e travas com ESM puro. node:test esta proximo mas falta watch/coverage maduros em abr/2026. |
| Package manager | **pnpm 9** | npm, yarn, bun | Workspaces estaveis, lockfile determinístico, content-addressable store economiza disco em CI. Bun PM ainda tem edge-cases com peer deps de pacotes ServiceNow. |
| Type system | **TypeScript 5.6 strict** | JS puro, Flow | TS strict pega 80% dos bugs em codegen Fluent (que e altamente tipado). Necessario para usar bem `@servicenow/sdk` Fluent (research-2026-04.md secao 3.4 destaca typed step references como ganho 4.6.0). |
| Deploy | **Vercel** (web) + **npm** (CLI + packages) + **Cloudflare Workers** opcional para MCP HTTP | Heroku, Render, Fly.io, AWS Lambda | Free tier real e generoso. Edge global (cold start <50ms). Cloudflare Workers para MCP HTTP elimina cold-start grande (importante para mcp-landscape.md secao 2 ChatGPT Desktop). Lambda + API Gateway tem custo base e cold-start ruim. |
| Auth (web) | **Clerk free tier** ou **Auth.js** (NextAuth) | Custom JWT, Auth0, Supabase Auth | Zero infra. Clerk se quisermos org/SSO de uma; Auth.js se quisermos zero vendor lock-in. Decisao postergada para ADR proprio quando tivermos o primeiro use case de account login. |
| Storage | **Vercel KV (Upstash Redis)** + **GitHub** (artefatos versionados) | Postgres dedicado, DynamoDB | Audit logs e approval tokens sao ephemeral (TTL 15min, vide ADR-002). Artefatos de design (skill descriptors, fluent specs) vivem no repo git. Postgres so se aparecer caso de uso multi-tenant real. |
| OAuth para MCP | **Library: @modelcontextprotocol/sdk + cliente OAuth 2.1 + PKCE** | OAuth manual, Auth0 SDK | Spec MCP 2025-11-25 deixa mecanica para implementor; PKCE e default de fato (mcp-landscape.md secao 1). jschuller usa FastMCP proxy; em TS vamos usar `@modelcontextprotocol/sdk` + `oauth4webapi`. |

### Diagrama de runtime

```
+-------------------------------+
|  apps/web (Next.js 16)        |  -> Vercel
|  - catalog, demo, audit view  |
+-------------------------------+
            |
+-------------------------------+
|  apps/cli (Node 22 + Citty)   |  -> npm install -g @sn-army/cli
|  - now-sdk wrappers           |
|  - skill scaffolders          |
+-------------------------------+
            |
   +--------+--------+
   |                 |
+----------------+ +----------------+
| mcp-discovery  | | mcp-write      |
| (read-only)    | | (write+guard)  |
| stdio + HTTP   | | stdio + HTTP   |
+----------------+ +----------------+
   |                  |
   v                  v
ServiceNow Table API + Fluent SDK
```

### Layout do monorepo

```
servicenow-agent-army/
  apps/
    web/                     Next.js 16
    cli/                     Citty CLI
  packages/
    mcp-discovery/           read-only MCP server
    mcp-write/               guarded write MCP server
    skill-contract/          shared types + schemas (ADR-002)
    fluent-helpers/          wrappers around @servicenow/sdk
    audit-log/               audit envelope + JSONL writers
  .claude/skills/            (research-2026-04.md secao 1.4)
  .agents/skills/            (research-2026-04.md secao 2.1)
  docs/
    adr/                     this folder
```

## Consequences

### Positivas

- **Single runtime**: contribuidor que conhece TS/Node consegue mexer em qualquer ponto. Reduz onboarding para builders ServiceNow Brasil que ja vivem em TS via Fluent.
- **Free tier sustenta MVP**: Vercel (web) + npm (CLI) + GitHub (storage) + Cloudflare Workers (MCP HTTP edge) cobrem ate ~10k MAU sem custo direto.
- **Compat com SDK 4.6.0**: o caminho source-driven da ServiceNow ja e TS via Fluent (research-2026-04.md secao 3.4). Estamos no mesmo terreno.
- **MCP transport correto desde dia 1**: Streamable HTTP em vez de SSE legado (mcp-landscape.md secao 1). Evita refactor forcado pelo cutoff de mid-2026.
- **Tooling moderno**: Biome + Vitest + Turborepo da CI rapida, dev loop curto.
- **Deploy em git push**: Vercel + npm publish via Changesets eliminam pipeline manual.

### Negativas (aceitas)

- **Lock-in moderado em Vercel**: o web app fica acoplado a Edge Runtime + Vercel KV. Mitigacao: a logica de negocio fica em `packages/*` que sao runtime-agnosticos. Se sair de Vercel, troca-se a casca.
- **Biome ainda tem ecossistema menor que ESLint**: alguns plugins de regras especificas (ex: regras a11y exotic) podem nao existir. Aceito porque nao temos uso dessas regras hoje; voltamos para ESLint se aparecer.
- **Cloudflare Workers tem CPU time limit (10ms free / 50ms paid)**: para MCP HTTP isso pode forcar split entre tools rapidas (Workers) e tools de longa duracao (Vercel Functions ou self-hosted). Aceito como problema futuro; comecamos com stdio que nao tem esse limite.
- **OAuth 2.1 + PKCE em TS exige codigo proprio**: nao temos um equivalente direto do FastMCP proxy do jschuller. Vamos manter ~150 LoC de OAuth client em `packages/mcp-write`. Trade-off aceito porque adicionar Python so para isso quebraria o single-runtime.
- **Codex CLI sem MCP support em abr/2026**: usuarios Codex nao conseguem consumir nossos MCP servers. Mitigacao: skills `.agents/skills/` cobrem o caso "agent local que sabe chamar Fluent SDK" sem MCP. Nao bloqueia roadmap.
- **Cold-start de MCP stdio em Node**: ~200-400ms na primeira chamada (require tree). Aceitavel para Claude Code/Cursor; para HTTP usaremos Cloudflare Workers que tem isolate cold-start <5ms.

### Open questions

Itens marcados [VERIFICAR INSTANCIA] em research-2026-04.md secao "Open questions" que afetam diretamente este stack:

1. **Role minimo para deploy de Fluent app contendo `sn_aia_*` artifacts** (research-2026-04.md Q4): se for `admin`-only, a CLI nao consegue rodar em pipelines de cliente sem elevacao. Precisamos confirmar antes de prometer "CI deploys Fluent app".
2. **`com.glide.ai.runtime` plugin licensing** (research-2026-04.md Q6): se exigir SKU Now Assist Pro Plus, a parte de invocacao de AI agents externos via REST nao roda em todas as instancias FSI. Web app precisa fallback "guided setup handoff".
3. **MCP server oficial ServiceNow positioning** (research-2026-04.md Q8 e mcp-landscape.md secao 3 linha 1): a Now Assist MCP Server (Zurich Patch 4) consome assists por chamada. Decidir se nosso servidor de escrita publica como "open-tier complement" ou compete diretamente.
4. **Approval token storage** (mcp-landscape.md secao 6 Q2): JWT stateless no host vs tabela ephemeral na instancia SN. Decisao postergada para ADR-002 (ja tratada la).
5. **Streamable HTTP session model** (mcp-landscape.md secao 6 Q3): stateless (`Mcp-Session-Id` opcional) escala melhor em Cloudflare Workers; stateful da auditoria mais facil. Trade-off ainda aberto; default sera stateless ate provarmos que precisamos do contrario.

### Itens NAO decididos aqui

- Estrategia de versionamento (Changesets vs semver manual): ADR futuro.
- Estrategia de telemetria (PostHog free vs OpenTelemetry self-hosted vs nenhuma): ADR futuro.
- i18n pt-BR/en do web app: ADR futuro.
- Estrategia de testes E2E (Playwright vs nenhuma + dependencia de tests da ServiceNow Fluent): ADR futuro.

## Referencias

- research-2026-04.md secao 1 (Claude Agent SDK)
- research-2026-04.md secao 2 (Codex CLI)
- research-2026-04.md secao 3.1, 3.2, 3.4 (ServiceNow SDK 4.6.0)
- research-2026-04.md "Open questions" Q4, Q6, Q8
- mcp-landscape.md secao 1 (MCP Spec status)
- mcp-landscape.md secao 2 (hosts e seu suporte MCP)
- mcp-landscape.md secao 3 (inventario de servidores; jschuller como referencia de transporte)
- mcp-landscape.md secao 6 Q2, Q3
