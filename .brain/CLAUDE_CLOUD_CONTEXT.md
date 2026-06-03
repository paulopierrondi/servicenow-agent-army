# Claude Cloud Context

This file is a non-secret capsule exported from Paulo's local Obsidian second brain.

Local vault source: `/Users/paulopierrondi/Documents/Obsidian Vault`
Repository: `/Users/paulopierrondi/Projects/servicenow-agent-army`

## User Profile Snapshot

- Paulo is a ServiceNow Technical Account Executive focused on Banco Bradesco / FSI Brazil, with side projects, family and faith as important context.
- Style: direct, executive, dense, structured, copy-paste ready, no fluff or motivational tone; PT-BR for Brazil-facing content; honest analytical pushback is welcome.
- For ServiceNow/Bradesco/Now Assist/CSDM/deck/roadmap work, use the Paulo profile snapshot below and keep terminology precise.

## Rules

- Follow `CLAUDE.md` first.
- Use this file as project memory when running in GitHub Actions / Claude Code cloud.
- Do not invent access to the local Obsidian vault; cloud runners only have repository files.
- Do not expose secrets. If a token, API key, cookie, OAuth credential, private key, or password appears, redact it.
- Read the Paulo profile snapshot before career, executive, ServiceNow, Bradesco, FSI, deck, roadmap, positioning or personal context work.
- Prefer small PRs with clear tests and a concise summary.
- For risky changes, propose a plan before implementation.
- Use the checklist snapshot below before frontend, backend, API, AI, deploy or security-sensitive work.
- Use the best-practices snapshot below before platform-specific development work.
- For app, site, UI, visual flow, screenshot, iOS, Android or store work, apply the App/Web preflight, screenshots visual QA checklist, and the relevant web/iOS/Android preflight from the snapshot.
- For iOS/App Store Connect/TestFlight/signing/IAP/APNS work, apply the Apple Developer And App Store Connect Inventory and App Store Connect Upload Runbook from the snapshot before asking for IDs, keys, CI values, provider env vars or running an upload.
- For roadmap, bug, status, priority, release or planning work, use the Linear/Git tracking snapshot and the matching Linear issue/project when connector access exists.
- For product, monetization, app ideas, revenue, pricing, growth, App Store portfolio or side-project prioritization, use the Product Revenue MOC, Nightly Opportunity Engine, app ideas/refinement backlogs, App Store Apps Dashboard, App Store Priorities and nightly opportunity report from the snapshot.
- For marketing creative, social video, ElevenLabs, subtitles, LinkedIn, Shorts, TikTok, Instagram/Reels or pierrondi.dev work, apply the Marketing MOC, Creative Video OS, voice/subtitle workflow, platform specs, prompt starters and Creative QA checklist from the snapshot.
- For Apple Ads / ASA, App Store paid acquisition, ASO, CPP, paid campaigns or app marketing tuning, apply the App Marketing Intelligence OS, Apple Ads ASA Tuning Runbook, Metrics Inventory, Daily Tuning Report and Tuning Backlog from the snapshot. Never mutate paid campaigns without explicit Paulo approval.
- For any automation, routine, scheduled job, cron, LaunchAgent, cloud runner or automatic follow-up, apply the Automation Email Policy from the snapshot and send a completion email to `pierrondi@gmail.com`; if no email transport is available, create a safe draft and record `EMAIL_FAILED`.
- For credentials, apply the Credential Vault Operating Model from the snapshot: use inventory/references/provider env vars/secret managers, never real secret values in Markdown, chat, logs, Linear or screenshots. If credentials are in scope for the Secret Exposure Incident 2026-05-19 snapshot, require rotation before use and never ask Paulo to paste values in chat.
- Never store real API keys/secrets in Markdown. Use secret managers/provider env vars; keep only env var names and storage metadata in docs.
- If work reveals a reusable lesson, add it to `.brain/SESSION_NOTES.md` under reusable learnings so it can be synced into the Obsidian Learning Inbox.

## Organic Starter Prompt

When asked to work in this repo, internally start with:

> Read `CLAUDE.md`, `.brain/CLAUDE_CLOUD_CONTEXT.md`, and relevant source files. Continue from the project memory, avoid repeating old work, then update the context if the task changes durable project knowledge.

## Project Note Snapshot

---
type: project
repo_name: "servicenow-agent-army"
repo_path: "/Users/paulopierrondi/Projects/servicenow-agent-army"
repo_kind: "repo"
branch: "main"
dirty_files: 24
remote: "https://github.com/paulopierrondi/servicenow-agent-army.git"
generated_at: "2026-05-20 18:04:05"
tags:
  - project
  - git
---
# servicenow-agent-army

## Estado rapido

- Path: `/Users/paulopierrondi/Projects/servicenow-agent-army`
- Tipo: `node`
- Repo kind: `repo`
- Branch: `main`
- Arquivos alterados agora: `24`
- Ultimo commit: `8e6f427 2026-04-26 feat(m4+m5): launch package + daily promo engine + private scaffold`
- Remote: `https://github.com/paulopierrondi/servicenow-agent-army.git`
- Marcadores encontrados: `package.json, pnpm-lock.yaml, README.md, CLAUDE.md, AGENTS.md, GEMINI.md`

## Links do vault

- Indice de projetos: [[02_Projects/Projects Index]]
- Mapa de projetos: [[07_MOCs/Projects MOC]]
- Historico AI deste projeto: [[03_AI-Chats/Projects/servicenow-agent-army - AI History]]
- Mapa de agentes: [[07_MOCs/AI Agents MOC]]
- Politica dos agentes: [[99_System/AI Agent Vault Policy]]
- Linear/Git tracking: [[04_Areas/Coding/Linear/Linear Git Development Tracking OS]]
- Linear project map: [[04_Areas/Coding/Linear/Linear Project Map]]

## Contexto importado do README

# ServiceNow Agent Army

> Council plus working app for the ServiceNow community, led by **Pierrondi EA** — the value-first advisor that refuses to draw architecture before the value question is answered. Twenty specialist advisors, two MCP servers, and a knowledge base wired for Claude Agent SDK, Codex CLI, and ServiceNow SDK 4.6+ Fluent.

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Node 22 LTS](https://img.shields.io/badge/node-22%20LTS-339933.svg?logo=node.js&logoColor=white)](https://nodejs.org/)
[![pnpm 9](https://img.shields.io/badge/pnpm-9-F69220.svg?logo=pnpm&logoColor=white)](https://pnpm.io/)
[![Status: alpha](https://img.shields.io/badge/status-alpha-orange.svg)]()
[![ServiceNow Zurich](https://img.shields.io/badge/ServiceNow-Zurich-62D84E.svg)](https://www.servicenow.com/docs/r/zurich)

![hero](docs/assets/hero.png)

Now Assist, AI Agent S
...[truncated]

## Decisoes e estado vivo

- Use esta nota para manter o estado atual do projeto, decisoes abertas, comandos canonicos e riscos.
- As sessoes locais de Codex, Claude Code, Kimi e Gemini foram indexadas no vault quando estavam disponiveis em disco.


## Required Checklist Snapshot

## 04_Areas/Coding/Best Practices/Development Best Practices Hub.md

---
type: best-practices-hub
tags:
  - best-practices
  - coding
  - learning-loop
---
# Development Best Practices Hub

Este e o hub vivo de melhores praticas de desenvolvimento.

## Como usar

Antes de implementar, revisar ou desenhar arquitetura, escolha os guias relevantes:

- App/Web quality: [[04_Areas/Coding/Best Practices/App Web Quality Best Practices]]
- Mobile opening motion: [[04_Areas/Coding/Best Practices/Mobile App Opening Motion Standard]]
- Mobile privacy/consent: [[04_Areas/Coding/Best Practices/Mobile App Privacy Consent Standard]]
- iOS QA/TestFlight closure: [[04_Areas/Coding/Best Practices/iOS Functional QA And TestFlight Closure Standard]]
- Web/Next/React: [[04_Areas/Coding/Best Practices/Web Next React Best Practices]]
- Frontend UI/UX: [[04_Areas/Coding/Best Practices/Frontend UI UX Best Practices]]
- Backend/API: [[04_Areas/Coding/Best Practices/Backend API Best Practices]]
- Database/Data: [[04_Areas/Coding/Best Practices/Database Data Best Practices]]
- Mobile/iOS: [[04_Areas/Coding/Best Practices/Mobile iOS Best Practices]]
- Android: [[04_Areas/Coding/Best Practices/Android App Best Practices]]
- Python/Data tools: [[04_Areas/Coding/Best Practices/Python Data Best Practices]]
- AI/LLM apps: [[04_Areas/Coding/Best Practices/AI LLM Best Practices]]
- DevOps/Railway: [[04_Areas/Coding/Best Practices/DevOps Railway Best Practices]]
- Testing/QA: [[04_Areas/Coding/Best Practices/Testing QA Best Practices]]
- Agent workflow: [[04_Areas/Coding/Best Practices/Agent Workflow Best Practices]]
- Security baseline: [[04_Areas/Coding/Checklists/Security Checklist]]
- Platform checklists: [[04_Areas/Coding/Checklists/Project Checklist Hub]]

## Como aprender automaticamente

Todo coder deve registrar aprendizados reutilizaveis em:

- [[04_Areas/Coding/Best Practices/Learning Inbox]]
- [[04_Areas/Coding/Best Practices/Patterns To Promote]]

Aprendizado reutilizavel e algo que deve guiar projetos futuros:

- erro recorrente;
- comando canonico melhor;
- convencao de plataforma;
- decisao de arquitetura que se repetiu;
- checklist que faltava;
- risco de seguranca percebido;
- padrao de deploy ou rollback;
- regra de UX/design que melhorou resultado;
- falha visual detectada por screenshot ou viewport;
- regra de store readiness para App Store ou Google Play.

## Regra para agentes

Quando uma sessao terminar, perguntar internamente:

- "Isto ensina algo reutilizavel?"
- "Algum checklist deve ganhar item novo?"
- "Alguma pratica antiga deve ser corrigida?"
- "Isso vale para uma plataforma especifica ou para todos os projetos?"

Se sim, registrar no Learning Inbox ou em `.brain/SESSION_NOTES.md` quando o vault nao estiver acessivel.

## Promocao

Itens do Learning Inbox viram melhores praticas quando:

- aconteceram em mais de um projeto;
- evitaram bug, retrabalho, custo ou risco;
- melhoraram qualidade visual, seguranca, performance ou deploy;
- foram confirmados por teste, build, deploy ou revisao.

## Links

- [[04_Areas/Coding/AI Coding Operating System]]
- [[04_Areas/Coding/Checklists/Project Checklist Hub]]
- [[04_Areas/Coding/Checklists/App Web Preflight Checklist]]
- [[04_Areas/Coding/Checklists/Screenshots Visual QA Checklist]]
- [[99_System/AI Agent Vault Policy]]
- [[99_System/Security And Secrets Policy]]


## 04_Areas/Coding/Best Practices/App Web Quality Best Practices.md

---
type: best-practices
platform: app-web-quality
tags:
  - best-practices
  - apps
  - web
  - screenshots
  - quality
---
# App Web Quality Best Practices

## Principio

Qualidade de app/web e uma combinacao de produto, design, estado, performance, acessibilidade, privacy, store readiness e evidencia visual. **Qualidade sempre sobe. Nunca degrada conscientemente.** Cada release, cada tela, cada screenshot, cada copy substituida deve estar igual ou melhor que a versao anterior. Se um deliverable parece pior que o anterior, ou pior que o competidor, e nao-aceitavel; refazer.

## O padrao Paulo

- Construir a experiencia real primeiro.
- Evitar landing generica quando o pedido e app/ferramenta.
- Todo app precisa nascer com identidade publica completa: icone final forte, landing page publica de padrao superior e links legais vivos. Isso e parte do produto, nao acabamento.
- App icon nunca pode ser placeholder. Antes de review, TestFlight, launch, deck ou paid campaign, validar o icone dentro do build/app instalado, no asset catalog completo da plataforma e na landing/favicons/OG image.
- Landing page publica nunca pode ser resposta JSON, pagina generica ou placeholder. `GET /` deve entregar HTML responsivo, branded, com proposta de valor clara, visual real do produto, CTA, links de suporte/privacy/terms e metadata social/SEO.
- Interfaces operacionais devem ser claras, densas e rapidas.
- Apps consumer podem ser mais expressivos, mas ainda precisam de fluxo obvio.
- Todo app mobile deve ter uma pequena animacao de abertura contextual ao dominio do app, antes de privacidade/auth/home, sem parecer splash generico e sem atrasar o uso.
- Em app iOS, modificacao significativa so fecha depois de teste funcional no app instalado e upload do novo build para TestFlight/App Store Connect, salvo excecao explicita.
- Screenshots sao deliverable de primeira classe, nao "depois". Submission, release, post, deck, anuncio ou pagina nova so e "feito" quando os arquivos finais artisticos existem, validados e registrados.
- Privacidade e consentimento tambem sao deliverable de primeira classe. Todo app novo precisa ter tela padrao de primeira abertura, links legais vivos e tracking desligado por padrao antes de qualquer SDK/evento de marketing.
- Toda tela importante precisa lidar com loading, erro, vazio e permissao.
- Classificar cada screenshot por finalidade antes da QA final: produto real, store review, marketing, deck preview, teste visual ou dependencia. Screenshot de `node_modules`, fixture ou snapshot de pacote nao prova qualidade do app.

## Privacy and consent

Regra maxima: app sem clareza de privacidade nao esta pronto para TestFlight externo, review, campanha ou launch.

Padrao:
- Primeiro launch deve explicar uso funcional de dados, oferecer links legais e permitir continuar sem tracking.
- Tracking entre apps/sites, IDFA, ads SDK, MMP e medicao de marketing ficam desligados por padrao e exigem decisao explicita de produto.
- Se nao houver tracking, remover SDKs de ads/attribution, SKAdNetwork IDs e chaves client-side do binario final.
- Se houver tracking, ATT/privacy labels/termos/eventos precisam estar coerentes antes do upload.
- Screenshot da tela de consentimento por idioma principal vira evidencia obrigatoria do release.

Guia canonico: [[04_Areas/Coding/Best Practices/Mobile App Privacy Consent Standard]]

## Opening motion

Regra maxima: todo app mobile precisa de uma assinatura curta de abertura, contextual ao produto, local/offline e respeitando acessibilidade.

Padrao:
- Launch screen nativo fica estatico; a animacao acontece dentro do app apos o primeiro frame.
- A animacao usa a metafora real do produto: musica, financas, devocional, escola, saude, foto/video, SaaS etc.
- Primeiro uso pode durar ate `1.6s`; cold start recorrente deve ser mais curto, idealmente `0.4s-0.9s`; nunca passar de `2s`.
- Deve respeitar Reduce Motion e nao depender de backend.
- Nao pode inicializar tracking, ads SDK ou medicao de marketing antes do consentimento aplicavel.
- Evidencia visual da animacao deve ser registrada na nota do projeto quando houver release visual/mobile.

Guia canonico: [[04_Areas/Coding/Best Practices/Mobile App Opening Motion Standard]]

## iOS QA and TestFlight closure

Regra maxima: para app iOS, "feito" nao significa apenas codigo compilando. Significa app testado, build incrementado, archive/export feito e upload TestFlight concluido.

Padrao:
- Ao fechar mudanca iOS significativa, testar no app instalado: cold start/opening motion, privacy/consent, auth/demo ou anonimo, Home, navegacao principal, feature alterada, links legais e APIs relevantes.
- Incrementar build number antes do archive.
- Usar lane/script existente (`bundle exec fastlane local_beta`, `npm run ios:upload` ou equivalente).
- Confirmar upload para App Store Connect/TestFlight e registrar se esta processing ou `VALID`.
- Atualizar vault e Linear com build/version, comandos, artefatos visuais e riscos.
- TestFlight upload tem
...[truncated]

## 04_Areas/Coding/Best Practices/Recent App Web Screenshot Learnings.md

---
type: learning-review
area: app-web-quality
tags:
  - screenshots
  - visual-qa
  - apps
  - web
  - learning-loop
---
# Recent App Web Screenshot Learnings

Consolidado das criacoes e artefatos recentes encontrados no workspace.

## Fontes observadas

- `pierrondi-ia/docs/marketing/campaigns/.../buildinpublic-stats-1080x1350.png`
- `ppt_engine/workspace/.../*.preview.png`
- `fashioncore/apps/ios/fastlane/screenshots/en-US/*_1284x2778.png`
- `fifa2026bolao/artifacts/review/*iphone*.png`
- `fifa2026bolao/artifacts/review/*ipad*.png`
- `servicenow-agent-army/marketing/video-*`
- `pierrondi-ia/test-results`
- `pierrondi-ia/tmp/ui-review`

## Aprendizados promovidos

- Screenshot de review/store precisa provar plataforma e tamanho, nao apenas "parece bonito".
- App Store/Google Play pedem conjuntos diferentes de evidencia: phone, tablet/large screen quando aplicavel, idioma, dark/light e ausencia de dados sensiveis.
- Imagens de marketing precisam nascer no formato de destino: feed, story, deck, landing, preview e video nao devem reaproveitar crop por acidente.
- Screenshots de UI precisam capturar estado real: loading, empty, erro, permissao, auth, pagamento, onboarding e sucesso.
- Render preview de deck/documento/site e uma forma de teste visual; se nao renderizou, nao esta pronto.
- `node_modules`, package fixtures e snapshots de dependencias nao contam como evidencia do produto.
- O vault deve registrar paths e decisao de qualidade, nao copiar imagens sensiveis nem inflar a memoria com dumps.

## Regra operacional

Quando um agente mexer em app/web visual:

- usar [[04_Areas/Coding/Checklists/Screenshots Visual QA Checklist]];
- registrar os paths de evidencia na nota do projeto;
- transformar falhas recorrentes em item de checklist;
- nao anexar screenshot com segredo, PII, token, cookie ou ambiente de producao exposto.

## Destinos

- [[04_Areas/Coding/Best Practices/App Web Quality Best Practices]]
- [[04_Areas/Coding/Checklists/App Web Preflight Checklist]]
- [[04_Areas/Coding/Checklists/Screenshots Visual QA Checklist]]


## 04_Areas/Coding/Best Practices/Android App Best Practices.md

---
type: best-practices
platform: android
tags:
  - best-practices
  - android
  - google-play
---
# Android App Best Practices

## Principios

- Android nao e apenas "iOS portado": respeitar back navigation, intents, permissions, density, large screens e lifecycle.
- Estado do usuario deve sobreviver background, rotacao e navegacao.
- Permissoes perigosas precisam ser minimizadas e pedidas no contexto certo.
- Data safety e privacy policy precisam bater com codigo e SDKs.

## UI

- Usar Material 3 quando estiver no stack.
- Touch targets e fontes precisam escalar.
- Layouts devem funcionar em phone, tablet e foldable quando relevante.
- Dark mode precisa ser intencional, nao acidental.

## Arquitetura

- Segredos nunca entram no APK/AAB.
- Offline e rede ruim precisam de estado explicito.
- Background work deve usar APIs apropriadas e respeitar bateria.
- Analytics/crash SDKs devem estar no inventario de privacy.

## Release

- Version code/name atualizados.
- App Bundle com signing correto.
- Store listing honesta.
- Test track antes de producao.
- Data safety atualizado a cada novo SDK/coleta.

## Links

- [[04_Areas/Coding/Checklists/Android App Preflight Checklist]]
- [[04_Areas/Coding/Best Practices/App Web Quality Best Practices]]


## 04_Areas/Coding/Best Practices/Agent Workflow Best Practices.md

---
type: best-practices
platform: agents
tags:
  - best-practices
  - agents
  - codex
  - claude
  - kimi
  - gemini
---
# Agent Workflow Best Practices

## Principios

- Primeiro ler memoria; depois planejar; depois editar.
- Agente nao deve pedir segredo que pode ser acessado via provider/CLI.
- Mudancas devem ser pequenas, verificaveis e registradas.
- Aprendizado reutilizavel deve voltar para o vault.
- Quando houver subagentes, manter ownership claro e nao duplicar o mesmo escopo de escrita.
- Antes de promover um padrao, diferenciar lição madura de caso puntual com dependencias de plataforma.
- Para trabalhos paralelos, cada worker precisa de escopo disjunto, nao pode reverter edits de outros e deve aceitar que a base do codigo nao esta isolada.

## Inicio

- Rodar/usar `brain-preflight`.
- Ler `.brain/PROJECT_CONTEXT.md`.
- Ler nota do projeto e AI history.
- Ler best practices e checklists relevantes.
- Confirmar comandos canonicos.

## Durante

- Preservar mudancas do usuario.
- Evitar refactor fora do escopo.
- Usar ferramentas seguras para secrets: Railway, provider env vars, 1Password/Keychain.
- Nao imprimir env completo.

## Fim

- Atualizar nota do projeto.
- Atualizar `.brain/SESSION_NOTES.md` se sem vault.
- Registrar aprendizado em [[04_Areas/Coding/Best Practices/Learning Inbox]] quando reutilizavel.
- Sugerir promocao para best practice quando padrao aparecer de novo.

## Aprendizados locais

- Adicionar aqui comportamento que melhorou entregas dos coders.


## 04_Areas/Profile/Paulo Pierrondi Profile.md

---
type: profile
owner: Paulo Pierrondi
updated: 2026-05-15
tags:
  - profile
  - operating-context
  - service-now
  - bradesco
  - agent-memory
---
# Paulo Pierrondi Profile

This is required user context for Codex/GPT, Claude Code, Kimi and Gemini.

## Executive Summary

Paulo works across enterprise tech, personal products, family and faith. He is a Technical Account Executive at ServiceNow, focused on the Banco Bradesco account in Brazil, while also building side projects and monetizable frameworks/IP. He prefers direct, structured, information-dense responses with honest analytical pushback. Brazil-facing content defaults to Portuguese.

## Response Style

- Lead with the answer.
- Use executive summary first for complex topics.
- Use bullets and tables when they improve clarity.
- Be direct, dense and copy-paste ready.
- Avoid fluff, motivational tone and vague encouragement.
- Use PT-BR for Brazil-facing material.
- Analogies and frameworks are useful when they sharpen thinking.
- Push back when assumptions are weak, but keep the tone pragmatic.
- Prefer metrics, tradeoffs, explicit risks and next actions.
- Do not end with soft filler such as "se fizer sentido".

## Professional Context

- Role: Technical Account Executive (TAE) at ServiceNow, global team.
- Primary account: Banco Bradesco, FSI Brazil.
- Works with Rodrigo Rezende (Client Director) and Joao Saes (SC).
- Coordinates with Impact and CEG/Services.
- Recurring themes:
  - Bradesco account strategy.
  - CMDB/CSDM transformation.
  - Now Assist and AI Agents.
  - Governance and operating model.
  - FSI positioning.
  - 2026 roadmap.

## Personal Context

- Carioca.
- Lived for a long period in Dublin.
- Currently based in Sao Jose dos Campos, SP.
- Married, family-oriented.
- Faith-oriented worldview.
- Entrepreneurial mindset.
- Active interest in monetizing frameworks and IP.
- US or EMEA relocation is on the radar.

## Top Of Mind

- `pptx-engine`: TypeScript/Node.js CLI for executive deck generation, multi-LLM with Claude and GPT-4, four-phase architecture.
- Claude Code as autonomous long-running agents, including 8-hour runs, across apps such as `exploratorio` and `investcoach_ai`.
- Now Assist Bradesco Operating Model is active.
- Critical open question: direct ServiceNow investment versus Bradesco-authorized budget.

## Bradesco Live Context

- CMDB program organized in four plateaus:
  1. Fundacao.
  2. Fonte Unica.
  3. Conexao Negocio.
  4. Excelencia.
- Accenture is the primary executor, around 800 hours.
- Other partners: NTT, IBM and 4MATT.
- Governance stakeholders:
  - Edson: sponsor.
  - Fabio: strategic forum.
  - Marcena: operational forum.
  - Rodolfo and Rogerio: technical CCB.
- Recurring bottleneck: COI/Sayumi after the January SPM incident.
- Terminology rules:
  - Use `SPM`, not `ITBM`.
  - Use `forum`, not `committee/comite`, unless quoting source material.
  - `Cilmara` is spelled with C.

## Tools And Frameworks

- Claude Code skills:
  - `servicenow-project-pptx`.
  - `bradesco-project-pptx`.
- MCP `servicenow-ai-demo` for `cmdb_ci` queries.
- CMDB context: 61K+ records, with gaps in ownership, serial and IP.
- Framework SADA.
- CSDM Data Quality Analyzer:
  - Python.
  - Bilingual.
  - FSO/regulatory focus.

## Now Assist Editorial Rule

Every Bradesco Now Assist material must explicitly connect:

`operating model -> adoption velocity -> revenue expansion`

## How Agents Should Use This

- Before career, executive, ServiceNow, Bradesco, FSI, Now Assist, CSDM, deck, roadmap or positioning work, read this note.
- When writing for Bradesco or Brazil stakeholders, default to PT-BR and executive density.
- When writing internal or global ServiceNow strategy, keep terminology precise and avoid over-claiming.
- When creating decks, use a consultant-style structure: thesis, evidence, options, recommendation, risks, decision needed.
- For side projects, connect product decisions to monetization, distribution, operational leverage and reusable IP.
- For personal/career questions, balance enterprise credibility, entrepreneurial upside, family constraints, faith-aligned values and relocation optionality.

## Non-Goals

- Do not invent private facts beyond this profile and the project notes.
- Do not over-personalize routine code answers.
- Do not turn faith/family into generic motivational content.
- Do not expose personal or enterprise-sensitive details outside the intended context.


## 04_Areas/Coding/Linear/Linear Git Development Tracking OS.md

---
type: "coding-note"
status: "indexed"
normalized_on: "2026-05-20"
tags:
  - coding
  - frontmatter-normalized
---
# Linear App + Git Development Tracking OS

Status: active
Owner: Paulo
Updated: 2026-05-16

This is the operating system for keeping the Linear app, Git and the Obsidian second brain aligned. `brain-linear-sync` is useful, but it is not the source of truth for Linear. The Linear app connector is the source of truth for projects, issues, cycles/sprints, statuses, labels, assignees, comments and project updates.

## Sources Of Truth

- Code and local state: Git repositories.
- Product/development queue: Linear app workspace `Agentcore`.
- Durable memory: Obsidian project notes, AI history and `.brain/PROJECT_CONTEXT.md`.
- Local machine report: [[04_Areas/Coding/Linear/Linear Git Sync Report]] generated by `brain-linear-sync`; this is only Git metadata + mapping hints.
- Live Linear objects: read through the Linear app connector before planning, status, sprint/cycle or cleanup decisions.
- Linear mapping notes: [[04_Areas/Coding/Linear/Linear Project Map]].
- Cleanup queue: [[04_Areas/Coding/Linear/Linear Cleanup Backlog]].

## Required Start Gate

Before planning or coding in any project:

1. Run `brain-linear-sync` or read the latest [[04_Areas/Coding/Linear/Linear Git Sync Report]] for local Git state only.
2. Read the matching project note from [[02_Projects/Projects Index]].
3. Read matching AI history under [[03_AI-Chats/AI Chats Index]] when relevant.
4. Use the Linear app connector to read the live Linear project/issue whenever the task is roadmap, bug, status, scope, priority, release, sprint/cycle, automation, product planning or backlog cleanup related.
5. For a normal coding chat, identify the likely Linear issue before edits. If no issue exists and the task is more than a tiny one-off, create or propose a Linear issue instead of letting work disappear into chat history.
6. Check branch, dirty files, ahead/behind state, live Linear status, cycle/sprint and assignee before editing.

## Required Finish Gate

After meaningful work:

- Update the Obsidian project note with decisions, commands, files changed, risks, deploy state and next steps.
- Update the Linear issue when issue reality changed: status, assignee, priority, labels, cycle/sprint, blocker, evidence or completion state.
- Add a Linear comment/status summary when work produced meaningful evidence but should not change status yet.
- Keep Linear issue links in the project note when a task is driven by Linear.
- Store no secrets in Linear or Obsidian. Secret values stay in providers or secret managers.
- If the work creates reusable practice, add it to [[04_Areas/Coding/Best Practices/Learning Inbox]].

## Linear Connector Rules

- Use the Linear app connector for live reads: projects, issues, cycles/sprints, labels, statuses, assignees, comments and project status updates.
- Do not treat [[04_Areas/Coding/Linear/Linear Git Sync Report]] as a substitute for live Linear. It only says which repos look mapped or unmapped from local metadata.
- Every new chat that performs coding/project work must either attach itself to an existing Linear issue/project or explicitly record why no Linear update is appropriate.
- Do not bulk-close, archive, delete, relabel or assign without an explicit cleanup step.
- Automation can generate cleanup proposals, not destructive changes.
- Treat old `Done` issues with missing labels/assignees as cleanup candidates, not coding blockers.
- Treat `In Progress` issues with stale Git repos as daily-priority candidates.
- Treat cycles/sprints as planning data: read current/next cycles before moving work into or out of sprint scope.

## Daily Sync Output

Daily sync should produce:

- Git repo health: dirty/ahead/behind/stale/unmapped.
- Linear app health: active projects, current/next cycles, stale `In Progress`, high-priority `Todo`, backlog overload, unlabeled/unassigned issues, orphan issues with no project and projects with stale status updates.
- Project note updates for active repos.
- Cleanup proposals in [[04_Areas/Coding/Linear/Linear Cleanup Backlog]].
- Learning candidates for best practices.

## Organic Prompt For Coders

Use this at the start of a new coding session:

```text
Read the Obsidian second brain preflight, run or inspect brain-linear-sync for Git state, then use the Linear app connector to read the matching project/issue/cycle/status before edits. Continue from project memory. After meaningful work, update the project note and the live Linear issue/project if reality changed. Do not store secrets.
```

## Cloud / Other Machine Rule

Cloud coders and other machines will not automatically have the local vault. They must use:

- `AGENTS.md`, `CLAUDE.md`, `GEMINI.md` or `KIMI.md`.
- `.brain/PROJECT_CONTEXT.md`.
- `.brain/CLAUDE_CLOUD_CONTEXT.md` when present.
- Live Linear app connector if available. If unavailable, say so clearly and leave a concrete Linear update proposal for the nex
...[truncated]

## 04_Areas/Coding/Linear/Linear Project Map.md

---
type: "coding-note"
status: "indexed"
normalized_on: "2026-05-20"
tags:
  - coding
  - frontmatter-normalized
---
# Linear Project Map

Updated: 2026-05-19

This map links Linear projects to local repos and Obsidian project notes. It is mapping metadata only.

Important: this note is not the Linear source of truth. Always verify live projects/issues/cycles through the Linear app connector before updating status, scope, sprint/cycle, labels or assignees.

| Linear project | Status | Priority | Repo / path hint | Obsidian note hint | Notes |
| --- | --- | --- | --- | --- | --- |
| nowassistdemo | Planned | High | `nowassistdemo` | search Projects Index | ServiceNow AI demo control plane. Newest project in Linear. |
| Pierrondi.ia - Apple Design Redesign | Backlog | High | `pierrondi-ia` | `pierrondi-ia` | Design-system redesign track for public site and Studio. |
| fifa26bolao - Bolao Express | Backlog | No priority | `fifa2026bolao`, `bolao` | search Projects Index | iOS + Railway backend. Active issues remain in progress/todo. |
| Jarvis Butler Experience | Backlog | No priority | `pierrondi-ia` | `pierrondi-ia` | Butler/chat/voice/dashboard experience inside Marketing OS. |
| ServiceNow Agent Army | In Progress | Urgent | `servicenow-agent-army` | search Projects Index | Community ServiceNow agent product. |
| Pierrondi Marketing OS | In Progress | Urgent | `pierrondi-ia` | `pierrondi-ia` | Core marketing platform and Studio. |
| PPT_Formation | Backlog | High | `ppt_engine`, `ppt` | search Projects Index | Agentic PPTX engine. |
| Fashion Stylist AI | Completed | High | `fashion` | search Projects Index | Completed in Linear, still useful as app pattern source. |
| Faith | Backlog | Urgent | `faith`, `faithschool` | search Projects Index | Homeschool app roadmap and UX track. |
| Design System Consistency | Backlog | High | `csdm-validator` | search Projects Index | CSDM visual consistency project. |
| Privacy & Cookie Compliance | Planned | No priority | `pierrondi-ia`, `agentcore`, `csdm-validator` | search Projects Index | Cross-product compliance queue. |
| Brain Coach - Context-Aware Copilot & AI Architect Workflows | Planned | No priority | `brain`, `servicenow`, `csdm` | search Projects Index | ServiceNow architect/copilot workflows. |
| Investcoach_ai | Backlog | No priority | `investcoach` | search Projects Index | Project exists but needs repo mapping confirmation. |
| Agentcore Website | Backlog | Urgent | `agentcore`, `pierrondi-ia` | `pierrondi-ia` | Institutional/landing website; may overlap with Marketing OS repo. |
| Cantus.ai Harmonizer | In Progress | High | `cantus`, `cantu`, `CantuStudio` | search Projects Index | Harmonizer + iOS review history. |
| csdm_validator | In Progress | Urgent | `csdm-validator`, `csdm_validator` | search Projects Index | ServiceNow CSDM validator web/iOS track. |
| iOS App Portfolio Revenue OS | In Progress | Urgent | multiple app repos | app marketing/product notes | Umbrella tracker for review queue and paid evidence gate; see AGE-1474. |
| Adivinha! Music Quiz | Todo via issue | High | `adivinha-app`, `adivinha-music-quiz` | search Projects Index | Live issue AGE-1477 covers RevenueCat/shared secret and sandbox purchase. |
| Aura Daily Affirmations | Todo via issue | High | `aura-affirmations` | search Projects Index | Live issue AGE-1478 covers audio-led launch and PPO hypothesis. |
| Bandle BR / Music Quiz | Todo via issue | High | `bandle-br`, `adivinha-music-quiz` | search Projects Index | Live issue AGE-1480 covers App Review rejection and retention/share proof. |
| InvestCoach.AI | Todo via issue | Urgent | `investcoach_ai` | `investcoach_ai` | Live issue AGE-1482 gates paid scale on Test Events and Apple Ads export. |
| Muse Edit Growth | Todo via issue | High | `fashioncore` | search Projects Index | Live issue AGE-1481 separates current Muse Edit growth from historical Fashion Stylist AI. |
| MyTone - AI Ringtone Studio | Todo via issue | High | `mytone-app`, `mytone-ringtone` | search Projects Index | Live issue AGE-1476 covers StoreKit smoke test and post-approval hooks. |
| Parabens IA BR | Todo via issue | High | `parabens-ai-br` | search Projects Index | Live issue AGE-1479 covers App Review/resubmit and BR creative proof. |
| pierrondi.dev Public Site | Todo via issue | High | `pierrondi-site` | search Projects Index | Live issue AGE-1486 covers proof page and analytics readiness. |
| ServiceNow SuperApp | Todo via issue | Medium | `servicenow-superapp` | search Projects Index | Live issue AGE-1487 defines product mapping and release readiness before more build work. |
| SpecialApp | Todo via issue | Medium | `specialapp` | search Projects Index | Live issue AGE-1488 defines identity, ICP and continue/pause decision. |

## Mapping Maintenance

- If `brain-linear-sync` says `Needs Linear project mapping`, add the repo hint here.
- If a Linear project is archived/completed, keep it here while the project note still has reusable context.
...[truncated]

## 04_Areas/Coding/Linear/Linear Daily Sync Checklist.md

---
type: "coding-note"
status: "indexed"
normalized_on: "2026-05-20"
tags:
  - coding
  - frontmatter-normalized
---
# Linear Daily Sync Checklist

Use this in daily automation and when manually deciding what to build next.

Hard rule: the Linear app connector is required for Linear truth. `brain-linear-sync` is only a local Git/mapping snapshot.

## Read

- [ ] Run `brain-linear-sync`.
- [ ] Open [[04_Areas/Coding/Linear/Linear Git Sync Report]] for Git state only.
- [ ] Use the Linear app connector to read live Linear projects for `Agentcore`.
- [ ] Use the Linear app connector to read live Linear issues in `In Progress`, `Todo`, `Backlog`, and assigned to `me`.
- [ ] Use the Linear app connector to read current and next cycles/sprints for `Agentcore`.
- [ ] Read labels, statuses, assignees and project status updates before proposing cleanup.
- [ ] Read active repo project notes in [[02_Projects/Projects Index]].

## Git Triage

- [ ] Identify dirty repos.
- [ ] Identify repos ahead of upstream.
- [ ] Identify repos behind upstream.
- [ ] Identify stale branches with Linear issues still open.
- [ ] Identify repos without Linear mapping.

## Linear Triage

- [ ] Active work should have a project, priority, status and enough labels to filter later.
- [ ] Active work should have a cycle/sprint decision: in current cycle, next cycle, backlog, or explicitly out of sprint.
- [ ] `In Progress` work should map to a repo and next action.
- [ ] `Todo` should be immediately actionable.
- [ ] `Backlog` should not become a dumping ground without priority/context.
- [ ] Issues with no project should be intentionally unprojected or mapped to the correct Linear project.
- [ ] Completed issues with missing labels or missing assignee are cleanup candidates, not emergencies.

## Update

- [ ] Update [[04_Areas/Coding/Linear/Linear Cleanup Backlog]] with proposed changes only.
- [ ] Update project notes with active Linear links and Git state.
- [ ] Update live Linear issue/project when status, blocker, cycle/sprint, priority, assignee, labels or acceptance evidence changed.
- [ ] Add a Linear comment/status summary when work progressed but should not move status yet.
- [ ] Add reusable process improvements to [[04_Areas/Coding/Best Practices/Learning Inbox]].
- [ ] Do not archive/delete/bulk-edit Linear automatically.

## Daily Decision Rule

Pick work in this order:

1. Dirty repo with active Linear issue and deployment/release risk.
2. `In Progress` issue with stale Git state.
3. `Todo` urgent/high issue with clear acceptance criteria.
4. Current cycle/sprint item with no owner, stale update or blocked status.
5. Backlog cleanup only after active delivery risk is controlled.


## 04_Areas/Coding/Linear/Linear Cleanup Backlog.md

---
type: "coding-note"
status: "indexed"
normalized_on: "2026-05-20"
tags:
  - coding
  - frontmatter-normalized
---
# Linear Cleanup Backlog

Updated: 2026-05-18

This note is for cleanup proposals. Do not treat it as permission to bulk-edit Linear.

## Correction - 2026-05-16 22:35 -03

- "Linear" means the live Linear app/workspace, not only local Git mapping hints.
- The live Linear app connector must be used for projects, issues, cycles/sprints, statuses, labels, assignees, comments and project updates.
- `brain-linear-sync` remains useful, but only as a local Git state and repo-to-project mapping snapshot.
- Every automation or new coding/project chat should either update/read the matching Linear issue/project or explicitly say why no Linear update applies.

## Current Observations

- Workspace is centered on the `Agentcore` team with statuses: `Backlog`, `Todo`, `In Progress`, `Done`, `Duplicate`, `Canceled`.
- Labels exist for product areas such as `ai`, `security`, `infra`, `website`, `marketing`, `automation`, `integration`, `ci-cd`, `Feature`, `Bug`, `Improvement`.
- Several recent Apple redesign issues are `Done` but unassigned and unlabeled.
- `fifa26bolao - Bolao Express` has the clearest active issue cluster right now.
- Backlog is broad across nowassistdemo, Pierrondi Marketing OS, Faith, Cantus.ai and PPT_Formation.
- Linear tracking issue active: [AGE-1469](https://linear.app/agentcore/issue/AGE-1469/second-brain-corrigir-integracao-real-com-linear-app-e-mapear-repos).

## Daily Alignment Run - 2026-05-15 13:17 -03

- `brain-linear-sync` completed and refreshed [[04_Areas/Coding/Linear/Linear Git Sync Report]] at `2026-05-15 13:17:00`.
- Live Linear connector inspection was attempted but blocked by MCP startup failure while connecting to ChatGPT apps; no Linear issues, labels, projects or statuses were changed.
- Current local Git report shows `30` repos scanned, `30` with local changes, `10` ahead of upstream, `2` behind upstream and `17` still needing Linear project mapping.
- Highest cleanup priority remains repo mapping plus dirty-workset review before starting new backlog work.

## Non-Destructive Cleanup Proposals - 2026-05-15

- Confirm Linear project mappings for unmapped active repos: `servicenow-superapp`, `specialapp`, `adivinha-app`, `aura-affirmations`, `mytone-app`, `SADA`, `parabens-ai-br`, `exploratorio`, `csdm3d-public`, `csdm3d`, `calmaria-sounds`, `bandle-br`, `adivinha-music-quiz`, `mytone-ringtone`, `New project 2`, `New project 3`, `New project 4`.
- Review dirty repos with large change counts before opening new implementation tasks: `faithschool-web`, `parabens-ai-br`, `fashioncore`, `calmaria-sounds`, `exploratorio`, `investcoach_ai`.
- For repos ahead of upstream, decide per repo whether to push, open PR, or leave local-only; automation should not push or merge.
- For repos behind upstream (`SADA`, `parabens-ai-br`), inspect remote delta before additional local edits.
- Once Linear connector access is healthy, re-run Agentcore review for In Progress, Todo, Backlog, recently updated and assigned-to-me issues, then update this backlog with live issue evidence.

## Daily Alignment Run - 2026-05-16 09:08 -03

- Agent config alignment scan checked `134` local AGENTS/CLAUDE/GEMINI/KIMI files; `129` contain the Obsidian vault preflight or primary vault path.
- Primary global files remain aligned: Codex, Claude, Gemini, Kimi and OpenClaw all point to `/Users/paulopierrondi/Documents/Obsidian Vault`.
- Representative active project files remain aligned: `csdm-validator-ios`, `pierrondi-ia`, `investcoach_ai`, `fifa2026bolao`, `servicenow-superapp` and `nowassistdemofactory`.
- Alignment repair command `/Users/paulopierrondi/.local/bin/obsidian-second-brain-sync` ran successfully and regenerated indexes at `2026-05-16 09:06:49`.
- Five non-primary or nested files still lack the alignment block after repair; review manually before broad edits:
  - `/Users/paulopierrondi/.hermes/hermes-agent/AGENTS.md`
  - `/Users/paulopierrondi/.kimi_openclaw/workspace/AGENTS.md`
  - `/Users/paulopierrondi/Projects/faithschool-web/faithschool/CLAUDE.md`
  - `/Users/paulopierrondi/Projects/pierrondi-ia-apps-ads-readiness/AGENTS.md`
  - `/Users/paulopierrondi/Projects/pierrondi-ia-apps-ads-readiness/CLAUDE.md`
- `brain-linear-sync` refreshed [[04_Areas/Coding/Linear/Linear Git Sync Report]] at `2026-05-16 09:06:30`: `31` repos scanned, `31` dirty, `8` ahead, `2` behind, `18` still needing Linear project mapping.
- Live Linear connector inspection succeeded. Agentcore projects are readable; statuses are `Backlog`, `Todo`, `In Progress`, `Done`, `Duplicate`, `Canceled`.
- Current live `In Progress` issues are still `AGE-1421` through `AGE-1424` for `fifa26bolao - Bolao Express`.
- Historical 09:08 read: live `Todo` issues were `AGE-1469`, `AGE-1425`, `AGE-1426` and `AGE-1428`; `AGE-1469` was assigned to Paulo and carried `automation` and `Improvement` labels.
- Later correction at 22:33 moved
...[truncated]

## 04_Areas/Coding/Linear/Linear Git Sync Report.md

---
type: "coding-note"
status: "indexed"
normalized_on: "2026-05-20"
tags:
  - coding
  - frontmatter-normalized
---
# Linear Git Sync Report

Generated: `2026-05-20 17:35:10`

This report is safe to keep in Obsidian. It stores Git metadata and Linear mapping hints only, never API keys, env values, cookies or deploy secrets.

Mapping source order: `~/agents-hub/registry/projects_registry.json` first, then local heuristic fallback.

## Summary

- Local Git repositories scanned: `36`
- Repositories with local changes: `36`
- Repositories ahead of upstream: `7`
- Repositories behind upstream: `1`
- Repositories needing Linear project mapping: `0`

## Highest Risk Working Sets

| Repo | Branch | Dirty | Ahead/Behind | Last commit | Linear project hint | Dirty sample |
| --- | --- | --- | --- | --- | --- | --- |
| servicenow-superapp | main | 9 | +41/-0 | 28db44d 2026-05-14 docs: update CHANGELOG with PaymentsRepository and MoneyFormatter tests | ServiceNow SuperApp (AGE-1487) | M AGENTS.md; ?? .brain/; ?? .github/workflows/claude.yml; ?? CLAUDE.md; ?? GEMINI.md; ?? KIMI.md |
| ppt_engine | main | 7 | +10/-0 | cda1137 2026-05-10 feat(spec-to-png): real Manus style — icons + topology + servicenow brand | PPT_Formation | M .gitignore;  M AGENTS.md;  M CLAUDE.md; ?? .brain/; ?? .github/; ?? GEMINI.md |
| mytone-app | main | 81 | +4/-0 | 3bd2b8a 2026-05-19 fix(iap): add IAP screenshot upload scripts + disable xcpretty in gym | MyTone - AI Ringtone Studio (AGE-1476, AGE-1497) | M .github/workflows/claude.yml;  M AGENTS.md;  M CLAUDE.md;  M GEMINI.md;  M KIMI.md;  M docs/APP_STORE_METADATA.md |
| SADA | main | 7 | +1/-1 | 358efd1 2026-05-07 Refactor duplicated app patterns | Skills / Frameworks (categoria, nao project) | M CLAUDE.md; ?? .brain/; ?? .github/; ?? AGENTS.md; ?? GEMINI.md; ?? KIMI.md |
| nowassistdemofactory | main | 6 | +1/-0 | 8f0485a 2026-05-18 feat(build): policy-gated mode picker + demo proof exporter (AGE-1464) | nowassistdemo | ?? .brain/; ?? .github/workflows/claude.yml; ?? AGENTS.md; ?? CLAUDE.md; ?? GEMINI.md; ?? KIMI.md |
| aura-affirmations | main | 34 | +1/-0 | 4ae7879 2026-05-18 fix(auth): clear stale errors + user-friendly fallback in Apple Sign-In | Aura Daily Affirmations (AGE-1478) | M .brain/CLAUDE_CLOUD_CONTEXT.md;  M .brain/PROJECT_CONTEXT.md;  M .brain/SESSION_NOTES.md;  M .github/workflows/claude.yml;  M AGENTS.md;  M CLAUDE.md |
| parabens-ai-br | main | 20 | +1/-0 | 205a374 2026-05-19 chore(build): bump 11 -> 12 for ASC resubmission 2.1b | Parabens IA BR (AGE-1479) | M .brain/CLAUDE_CLOUD_CONTEXT.md;  M .brain/PROJECT_CONTEXT.md;  M .brain/SESSION_NOTES.md;  M .github/workflows/claude.yml;  M AGENTS.md;  M CLAUDE.md |
| csdm-validator | main | 9 | +0/-0 | fdf40c6 2026-05-13 feat(coach): Snovai-inspired features — Snap Context, zero retention badge, persistent memory | csdm_validator / Design System Consistency | M .claude/settings.json;  M AGENTS.md;  M CLAUDE.md; ?? .agents/skills/ui-ux-pro-max/; ?? .brain/; ?? .claude/worktrees/ |
| creative-forge | main | 1 | +0/-0 | f3d955a 2026-05-19 docs: re-apply MANDATORY VAULT PREFLIGHT block (brain-sync overwrote prior commit) | Pierrondi Marketing OS (consolidar) | M .brain/PROJECT_CONTEXT.md |
| fashioncore | main | 3 | +0/-0 | eaff8cf 2026-05-20 chore: post-sprint cleanup — agent context, build artifacts, iOS config | Fashion Stylist AI | M services/api/app/static/daily_audience_signals.json; ?? docs/daily/2026-05-20-audience-signals.json; ?? docs/daily/2026-05-20-audience-signals.md |
| specialapp | main | 42 | +0/-0 | e5635e6 2026-05-18 fix(ios): correct APIClient instantiation (remove .shared) | SpecialApp (AGE-1488) | M .brain/CLAUDE_CLOUD_CONTEXT.md;  M .brain/PROJECT_CONTEXT.md;  M .brain/SESSION_NOTES.md;  m .claude/worktrees/vigorous-einstein-10fb90;  M .github/workflows/claude.yml;  M AGENTS.md |
| pierrondi-site | main | 8 | +0/-0 | c74f30c 2026-05-16 chore(deploy): add scripts/redeploy.sh + document GitHub auto-deploy | pierrondi.dev Public Site (AGE-1486) | M .brain/PROJECT_CONTEXT.md;  M AGENTS.md;  M CLAUDE.md;  M GEMINI.md;  M KIMI.md; ?? .brain/CLAUDE_CLOUD_CONTEXT.md |
| pierrondi-ia | main | 27 | +0/-0 | c6ec4c2 2026-05-20 feat(campaign): factory run for FaithSchool — 2026-05-20 | Pierrondi Marketing OS / Pierrondi.ia Apple Design Redesign / Agentcore Website | M .brain/CLAUDE_CLOUD_CONTEXT.md;  M .brain/PROJECT_CONTEXT.md;  M .github/workflows/claude.yml;  M AGENTS.md;  M CLAUDE.md;  M GEMINI.md |
| voudeque | main | 52 | +0/-0 | be09177 2026-05-18 marketing: ASO keywords, social campaign, App Store checklist, video scripts | voudeque (criar Linear project — pre-launch) | M .brain/PROJECT_CONTEXT.md;  M .brain/SESSION_NOTES.md;  M AGENTS.md;  M CLAUDE.md;  M GEMINI.md;  M KIMI.md |
| creative-video-factory | main | 10 | +0/-0 | b6dd584 2026-05-17 docs(.brain): guardrail apontando pra canonical creative pipeline em Pierrondi.ia | Pierrondi Marketing OS (consolidar) | M .brain/CLAUDE_CLOUD_CONTEXT.md; ?? .brain/CLAUD
...[truncated]

## 04_Areas/Product/Product Revenue MOC.md

---
type: moc
area: product-revenue
tags:
  - product
  - revenue
  - automation
  - second-brain
---
# Product Revenue MOC

Centro de operacao para transformar o second brain em ideias de apps, melhorias de produtos existentes, marketing melhor e backlog executavel.

## Core Notes

- [[04_Areas/Product/Nightly Opportunity Engine]]
- [[04_Areas/Product/Nightly Opportunity Report]]
- [[04_Areas/Product/App Ideas Revenue Backlog]]
- [[04_Areas/Product/App Refinement Backlog]]
- [[04_Areas/Product/Repo Data Improvement Backlog]]
- [[04_Areas/Product/AI Domain Strategy/AI Domain Strategy MOC]]
- [[04_Areas/Marketing/Marketing Growth Backlog]]

## Inputs

- Perfil e contexto: [[04_Areas/Profile/Paulo Pierrondi Profile]]
- Projetos locais: [[02_Projects/Projects Index]]
- Historico de agentes: [[03_AI-Chats/AI Chats Index]]
- Git/Linear: [[04_Areas/Coding/Linear/Linear Git Development Tracking OS]]
- Marketing: [[04_Areas/Marketing/Marketing MOC]]
- Best practices: [[04_Areas/Coding/Best Practices/Development Best Practices Hub]]
- Checklists: [[04_Areas/Coding/Checklists/Project Checklist Hub]]
- Vault intelligence: [[04_Areas/Second Brain/Second Brain Intelligence Loop]]

## Output esperado

Toda madrugada, a automacao deve produzir ou atualizar:

- ideias de apps com tese de dinheiro, canal, MVP e score;
- melhorias nos apps atuais por impacto/tempo/risco;
- melhorias de marketing com criativo, canal, CTA e prova;
- melhorias em repos e dados, sem fazer mudanca destrutiva;
- uma lista curta de apostas para Paulo revisar no dia seguinte.

## Regra de seguranca

A automacao pode escrever notas e propostas no vault. Ela nao pode deployar, publicar, enviar mensagens, gastar dinheiro, alterar secrets, deletar arquivos, fazer push/merge, fechar Linear em massa ou mexer em producao sem pedido explicito.


## 04_Areas/Product/Nightly Opportunity Engine.md

---
type: operating-system
area: product-revenue
status: active
tags:
  - product
  - revenue
  - automation
  - nightly
---
# Nightly Opportunity Engine

Status: active
Owner: Paulo
Updated: 2026-05-16

## Purpose

Usar o Obsidian second brain como motor noturno de oportunidades: descobrir ideias de apps para fazer dinheiro, refinar apps existentes, melhorar marketing, melhorar repos e transformar aprendizados em backlog executavel.

## Nightly Flow

1. Atualizar telemetria local com `brain-intelligence-pulse`.
2. Atualizar estado Git/local com `brain-linear-sync`; isso nao substitui o app Linear.
3. Ler estado vivo do app Linear quando o conector estiver disponivel: projects, issues, current/next cycles, statuses, labels, assignees e project updates.
4. Ler os hubs principais: Profile, Projects, AI Chats, Coding, Marketing, Linear, Security e Product Revenue MOC.
5. Revisar notas de projeto, AI histories, learning inbox, screenshots/visual QA, creative workflows e reports recentes.
6. Pesquisar fontes publicas atuais quando disponivel: mercado de apps, indie hackers, app store patterns, SEO/social/video trends, AI products, Obsidian/agent workflows e repos publicos relevantes.
7. Gerar outputs curtos e priorizados nos backlogs certos.
8. Registrar somente propostas e notas. Nenhuma acao destrutiva ou externa.

## Scoring

Cada oportunidade deve receber score simples de 1 a 5:

| Score | Pergunta |
|---|---|
| Fit Paulo | Aproveita ServiceNow/FSI, produtos pessoais, familia/fe, marketing ou IP existente? |
| Velocidade | Da para validar em ate 7 dias? |
| Receita | Tem caminho claro para assinatura, servico, lead, template, curso, API ou B2B? |
| Distribuicao | Existe canal real: LinkedIn, YouTube Shorts, TikTok, Instagram, SEO, comunidades, Bradesco/ServiceNow network ou App Store? |
| Reuso | Reaproveita repos, workflows, assets, dados ou automacoes existentes? |
| Risco | Evita dependencia fragil, policy risk, secrets, compliance ou custo alto? |

## Output Notes

- [[04_Areas/Product/Nightly Opportunity Report]]
- [[04_Areas/Product/App Ideas Revenue Backlog]]
- [[04_Areas/Product/App Refinement Backlog]]
- [[04_Areas/Product/Repo Data Improvement Backlog]]
- [[04_Areas/Marketing/Marketing Growth Backlog]]
- [[04_Areas/Second Brain/Second Brain Improvement Inbox]]

## Decision Rules

- Ideia boa sem canal vira pesquisa, nao prioridade.
- App existente com caminho de receita vence app novo, salvo quando a ideia nova tiver MVP muito barato.
- Produto B2B com IP de Paulo recebe peso maior que app generico.
- Melhorias de marketing devem sempre produzir pacote: hook, roteiro, prova visual, CTA, canal e metrica.
- Melhorias de repo/dados devem virar PR-sized tasks, nao reescrita ampla.
- Melhorias de Linear devem partir do app Linear vivo: issue, projeto, cycle/sprint, status, labels e assignee. Nao usar apenas hints do `brain-linear-sync`.
- Qualquer coisa que exija segredo real, compra, deploy, publicacao ou contato externo vira proposta para Paulo, nao execucao automatica.

## Daily Prompt Contract

```text
Read Paulo's Obsidian vault as a product/revenue intelligence system. Generate a nightly opportunity report with app ideas, app refinements, marketing moves, repo/data improvements and second-brain improvements. Prioritize by revenue path, speed to validate, distribution, reuse of existing assets and risk. Update only vault notes/backlogs. Do not deploy, publish, send messages, spend money, alter secrets, push/merge code, delete files or make destructive Linear/Git changes.
```


## 04_Areas/Product/Nightly Opportunity Report.md

---
type: nightly-report
area: product-revenue
status: active
tags:
  - product
  - revenue
  - automation
  - report
---
# Nightly Opportunity Report

Last configured: 2026-05-20 03:55 GMT-3

This note is the executive output of the nightly opportunity engine.

## Latest Executive Summary

- Latest run: `2026-05-20 03:35 GMT-3`.
- `brain-intelligence-pulse` and `brain-linear-sync` ran clean. Current reports: [[99_System/Second Brain Intelligence Report]] (`399` Markdown notes, `55` large notes, `141` orphan-like notes, `40` dirty project-note snapshots) and [[04_Areas/Coding/Linear/Linear Git Sync Report]] (`36` repos scanned, `35` dirty, `10` ahead, `1` behind, `23` needing Linear mapping).
- Live Linear read succeeded. New operational signal: `AGE-1480` (Bandle BR review recovery) moved to `In Progress` on `2026-05-19 23:23`, under `AGE-1474`. Faith project updates on `2026-05-20` show public landing/pricing/legal shipped, OKComputer authenticated Home implemented on web+iOS, validation passed, and an hourly FaithSchool backlog automation was configured.
- Highest-leverage product delta: FaithSchool is no longer just a repositioning idea; it now has a GTM spine (public landing, pricing, legal, public smoke tests), a product-quality spine (OKComputer Home web+iOS), and a 72-run hourly automation harness. Treat it as the top existing-app monetization path, but keep paid channels gated until billing/entitlements, authenticated screenshots and aggregate export evidence exist.
- Highest-leverage review delta: Bandle BR has a fresh build 8 review cycle with exact rejection causes, root-cause evidence and a Vercel first-party API workaround recorded in the project note. This should become the next concrete case study for the App Review + Paid Evidence Kit after review outcome is known.
- Existing app priorities outrank brand-new apps today: FaithSchool GTM proof, Bandle review recovery, InvestCoach post-approval evidence, Muse paid evidence baseline, and the `pierrondi-ia` approval adapter adoption.
- Public-source check used official/current sources only: Apple CPP/App Analytics and Apple Ads reporting still support "export/evidence before budget"; Obsidian Bases docs support structured views from local Markdown properties; YouTube's official Shorts update supports up-to-3-minute square/vertical Shorts for uploads after `2025-12-08`; GitHub push protection still supports metadata-only launch readiness checks.
- Guardrail: this run wrote safe vault proposals only; no deploy, publish, paid-channel mutation, secret change, Git push/merge or Linear write was performed.

## 2026-05-20 (03:55 GMT-3) — Live Linear follow-up

### Executive Summary

- Second nightly pass tonight. Same `obsidian-second-brain-sync` (36 repos, 557 codex / 3773 claude / 49 kimi sessions, 6326 mem observations, 322 summaries), `brain-intelligence-pulse` and `brain-linear-sync` ran clean; Linear sync now shows `36` scanned / `35` dirty / `10` ahead / `1` behind / `23` unmapped (one new dirty/unmapped repo vs the 03:35 entry).
- Live Linear In Progress: `AGE-1474` (portfolio review/paid-evidence spine, Urgent), `AGE-1480` (Bandle BR review recovery, started 2026-05-19T23:23), `AGE-1481` (Muse Edit growth gate), `AGE-1491` (InvestCoach.AI 1.0.3 build 13 review log), `AGE-1479` (Parabens IA review/resubmit), `AGE-1464` (Demo Builder, Urgent), `AGE-1490` (CSDM Validator target revalidation, Urgent), `AGE-1148` (PPT evals harness), `AGE-1469` (Second Brain Linear integration, Urgent), `AGE-1470` (Linear app source-of-truth propagation, Urgent), plus four `fifa26bolao` EPICs (AGE-1421/1422/1423/1424).
- **New escalation**: `AGE-1470` was Urgent and `dueDate=2026-05-19`. As of `2026-05-20 03:55 GMT-3` it remains `In Progress` with no `completedAt`. It is now overdue by ~1 day. This is the single biggest delta vs the 03:35 view and should drive today's daylight before any new automation/scope work lands on agents.
- **New commit signals since 03:35** (project notes already updated by `obsidian-second-brain-sync`, no Git push from automation):
    - `pierrondi-ia` `c6ec4c2` 2026-05-20 `feat(campaign): factory run for FaithSchool — 2026-05-20` — the canonical Creative Video Factory has executed a FaithSchool campaign run today. Pre-publish audit required before any output is staged for paid or LinkedIn (LinkedIn = ServiceNow-only).
    - `adivinha-app` `9ed9d83` 2026-05-19 `chore(ios): bump to 1.0.1 build 3 + Deliverfile for ASC submission` — new resubmission cycle; attach to review queue with prior reject reason placeholder until ASC poll resolves.
    - `parabens-ai-br` `205a374` 2026-05-19 `chore(build): bump 11 -> 12 for ASC resubmission 2.1b` — build 12 / version `2.1b` resubmission cycle; `AGE-1479` is the live spine.
    - `mytone-app` `3bd2b8a` 2026-05-19 `fix(iap): add IAP screenshot upload scripts + disable xcpretty in gym` — IAP screenshot pipeline shipped, but the app remains `rejected-review-2026-05-19`. The new scripts are evidence prep,
...[truncated]

## 04_Areas/Product/App Store Apps Dashboard.md

---
type: dashboard
area: app-store
tags:
  - app-store
  - portfolio
  - product
---
# App Store Apps Dashboard

Painel canonico para apps iOS/App Store no vault. Esta nota existe para dar destino estavel aos links de projetos gerados por automacoes de App Store intelligence.

## Ver primeiro

- [[04_Areas/Product/App Store Priorities]]
- [[04_Areas/Marketing/App Marketing Intelligence OS]]
- [[04_Areas/Marketing/Apple Ads ASA Tuning Runbook]]
- [[04_Areas/Coding/Checklists/Apple Developer And App Store Connect Inventory]]
- [[04_Areas/Coding/Checklists/App Store Connect Upload Runbook]]
- [[04_Areas/Coding/Checklists/Apple Reject Resolution Audit Checklist]]

## Apps com notas dedicadas

- [[02_Projects/Parabéns-IA]]
- [[02_Projects/MyTone---AI-Ringtone-Studio]]
- [[02_Projects/Muse-Edit---Style-Closet]]
- [[02_Projects/Aura---Afirmações-Diárias]]
- [[02_Projects/Adivinha]]
- [[02_Projects/CantuStudio]]
- [[02_Projects/FaithSchool]]
- [[02_Projects/Guia-2026]]
- [[02_Projects/Casa-Clara]]
- [[02_Projects/fifa2026bolao]]
- [[02_Projects/investcoach_ai]]

## Regra operacional

- Nada de paid scale sem evidencia: App Store Connect, ASA/Apple Ads, TikTok/Meta/social ou analytics export.
- Nada de store submission sem checklist Apple/App Store, screenshots finais, links legais vivos e review notes verificadas.
- Nada de segredo no vault; guardar apenas nomes de env vars e local de armazenamento.


## 04_Areas/Product/App Store Priorities.md

---
type: priorities
area: app-store
tags:
  - app-store
  - prioritization
  - revenue
---
# App Store Priorities

Prioridades de portfolio iOS/App Store. Usar junto com [[04_Areas/Product/App Store Apps Dashboard]], [[04_Areas/Marketing/App Marketing Intelligence OS]] e Linear.

## Ordem de decisao

1. App Review bloqueado ou aguardando resposta Apple.
2. IAP/StoreKit/subscription quebrado ou nao testado.
3. Links legais, account deletion, privacy/data safety ou demo account pendentes.
4. Screenshots/store assets abaixo do padrao ou incompletos.
5. Analytics/eventos de funil ausentes.
6. Criativos e ASO para validacao organica/paid-light.
7. Paid scale somente depois de evidencia e decisao humana.

## Linear vivo

- Portfolio umbrella: `AGE-1474` - Portfolio App Store review queue + paid evidence gate.
- Filhos relevantes lidos em `2026-05-18`: `AGE-1479`, `AGE-1481`, `AGE-1485`, `AGE-1486`.

## Guardrails

- Nao alterar budget, bid, campaign, keyword, creative ou paid-channel setting sem aprovacao explicita.
- Nao publicar/submeter/rejeitar/fechar sem ler estado vivo no App Store Connect quando aplicavel.
- Registrar evidencias no projeto e manter links para Linear.


## 04_Areas/Product/App Ideas Revenue Backlog.md

---
type: backlog
area: product-revenue
tags:
  - app-ideas
  - revenue
  - backlog
---
# App Ideas Revenue Backlog

Backlog de ideias de apps/produtos criadas a partir do second brain. A automacao noturna deve adicionar ideias aqui com score e proximo experimento.

## Score Legend

1 = fraco, 3 = plausivel, 5 = forte.

| Idea | Source assets | User/buyer | Revenue path | Distribution | Fit | Speed | Revenue | Distribution score | Reuse | Risk | Next experiment | Status |
|---|---|---|---|---|---:|---:|---:|---:|---:|---:|---|---|
| ServiceNow FSI Operating Model Kit | Bradesco/Now Assist/CSDM context, deck workflows, `ppt_engine` | TAE/SC/FSI leaders, partners | consulting package, templates, workshop, deck generator | LinkedIn + ServiceNow network | 5 | 3 | 5 | 4 | 5 | 3 | Build one anonymized sample package and landing page section | candidate |
| CSDM Data Quality Analyzer SaaS | `csdm-validator`, CSDM scripts, ServiceNow expertise | ServiceNow platform owners, partners | B2B subscription, audit report, services lead-gen | LinkedIn, partner network, SEO | 5 | 3 | 5 | 4 | 5 | 3 | Create public demo report with fake/sample data | candidate |
| AI Presentation Factory for Executives | `ppt_engine`, deck skills, Bradesco executive workflows | enterprise sellers, consultants, founders | SaaS/CLI, premium templates, services | LinkedIn, YouTube demos, Gumroad-style templates | 5 | 4 | 4 | 4 | 5 | 3 | Turn one internal flow into public demo video | candidate |
| Family Homeschool Copilot | `faithschool-web`, family/faith context | homeschool families | subscription | SEO, parent communities, short video | 4 | 3 | 4 | 3 | 4 | 3 | Define one daily planner workflow and pricing page | candidate |
| Short-Form Creative OS for Founders | pierrondi.ia studio, ElevenLabs/subtitle workflow | founders/consultants | service + productized package | LinkedIn, Shorts, TikTok, Instagram | 4 | 4 | 4 | 5 | 5 | 2 | Publish 3 sample creator packages for pierrondi.dev | candidate |
| App Store + Apple Ads Launch Copilot | iOS history, App Store checklist, TestFlight learnings, 4 live Apple Ads apps with no CSV connected | indie app builders | checklist product, consulting, automation | SEO, GitHub, App Store communities | 4 | 4 | 3 | 3 | 5 | 3 | Convert current `App Marketing Daily Tuning Report` shape into a public template (strip account-specific values); pair with iOS preflight checklist | candidate |
| Music/Ringtone Micro-App Bundle | `mytone-app`, `mytone-ringtone`, music quiz repos | consumers, musicians | freemium + IAP/subscription | App Store, TikTok demos | 3 | 4 | 3 | 4 | 4 | 3 | Validate one viral short format with app demo | candidate |
| Faith + Affirmation Audio App | `aura-affirmations`, ElevenLabs workflow | wellness/faith users | subscription/IAP | App Store + short video | 3 | 4 | 3 | 4 | 4 | 3 | Finish TestFlight/IAP path and create 5 sample audios | candidate |
| App Store Product Page Experiment Kit | App Store launch history, screenshots, creative pipeline, App Store docs | indie iOS builders and Paulo's own app portfolio | checklist/template + consulting + internal launch OS | SEO, GitHub, App Store communities | 4 | 5 | 3 | 3 | 5 | 4 | Turn PPO/CPP/App Analytics workflow into one public checklist and one internal launch table | research |
| AI Agent Memory Hygiene Kit | Obsidian vault, AGENTS/CLAUDE/GEMINI/KIMI patterns, `brain-*` scripts, Linear `AGE-1470`, OpenAI Codex AGENTS.md docs | builders using coding agents | template pack, setup service, content lead magnet | GitHub, blog, YouTube Shorts | 4 | 4 | 3 | 3 | 5 | 4 | After `AGE-1470` closes, publish a generic before/after of scoped agent memory + source freshness metadata; keep private facts out | active-candidate-2026-05-19 |
| Apple Ads / ASA Evidence-First Tuning Kit | `App Marketing Intelligence OS`, `App Marketing Daily Tuning Report`, 4 live ASA apps as testbed | indie iOS builders running paid spend | template pack + private OS service + consulting | GitHub, SEO, ASA community | 4 | 4 | 3 | 3 | 5 | 4 | Pull one redacted ASA daily-tuning example and a "no CSV, no budget change" gate rule into a public template | candidate |
| Provider Secret Leakage Guardrail Pack | `Security And Secrets Policy`, `Railway Secrets Inventory`, `brain-railway-run` wrapper | builders shipping Railway/Vercel/Heroku apps with agents | template pack + setup service | GitHub, blog, agent-builder communities | 4 | 4 | 2 | 2 | 5 | 4 | Document the `railway variables --json` + targeted-key pattern as a reusable agent guardrail (no real secrets in the repo) | research |
| App Review + Paid Evidence Dashboard Kit | App Store review queue, App Marketing Daily Tuning Report, ASA export gate, Obsidian Bases, Linear `AGE-1474` | indie iOS builders and Paulo's app portfolio | template pack, consulting, internal launch OS | GitHub, blog, pierrondi.dev, App Store communities | 4 | 5 | 3 | 3 | 5 | 4 | Use `AGE-1474` as the canonical validation spine; build one redacted queue temp
...[truncated]

## 04_Areas/Product/App Refinement Backlog.md

---
type: backlog
area: product-refinement
tags:
  - apps
  - product
  - backlog
---
# App Refinement Backlog

Backlog de melhorias nos apps/produtos existentes. A automacao noturna deve priorizar itens por impacto comercial, esforco, risco e proximidade de release.

> 2026-05-20 review: [[Automation App Improvements Linear Review 2026-05-20]] consolidou automacoes Codex, sessoes Kimi e Vault em issues Linear executaveis: `AGE-1492` a `AGE-1498`. Prioridade imediata: FaithSchool entitlement/billing/eventos/prova autenticada, App Review queue Bandle/Adivinha/Parabens, InvestCoach ativacao/compliance screenshots.

| Project | Current thesis | Highest-value refinement | Revenue/impact path | Effort | Risk | Next action | Status |
|---|---|---|---|---|---|---|---|
| pierrondi-ia | Agency/site + marketing OS | Make creative/video workflow visible as productized service | leads + service packages | M | M | ✅ Landing copy + 3 sample creative packages (InvestCoach/FaithSchool/Muse) em [[Pre-Launch Pack 2026-05-17]] §4. Pendente humano: publicar em pierrondi.dev/criativo | pack-shipped-2026-05-17 |
| ppt_engine | Executive deck generation CLI/product | Productize one repeatable executive deck flow | template/API/SaaS/services | M | M | ✅ Demo deck outline (10-slide Bradesco Q2 update) + 3-tier pricing (R$197 pay-per-deck, R$497/seller/mês, R$3.997/time/mês) em [[Pre-Launch Pack 2026-05-17]] §3. Pendente: rodar ppt_engine pra gerar o demo .pptx + landing | pack-shipped-2026-05-17 |
| aura-affirmations | TTS affirmation app, 3 IAPs ready | Submitted for review 2026-05-15; prep 5 audio-led Reels/TikTok variants + 1 CPP hypothesis for post-approval | subscription | S | M | ✅ 5 hooks (4 mood-led + 1 sleep-led) com scripts completos + CPP A/B hypothesis (mood vs sleep) decisão de priorizar mood em [[Pre-Launch Pack 2026-05-17]] §1. Pendente: aguardar aprovação Apple + gravar audio + screenshots | pack-ready-2026-05-17 |
| mytone-app | Music/audio app with Railway backend; App Store v1.0 now `REJECTED` / `UNRESOLVED_ISSUES` in 2026-05-19 daily pulse | Convert rejection into a clean fix/evidence/resubmission gate before US TikTok/Meta acquisition candidate work | IAP/subscription | M | M | Pull exact ASC rejection reason, map root cause, update StoreKit/export smoke-test checklist with evidence, resubmit, then only after approval record UGC + run smoke test | rejected-review-2026-05-19 |
| mytone-app (post-approval evidence gate) | 2026-05-20 daily marketing pulse shows `MyTone Studio` v1.0.0 as `READY_FOR_SALE` with build `202605192005` | Convert approval into measurable product proof before any TikTok/Meta/ASA work | IAP/subscription | S | M | Validate live App Store page, ringtone generation/export, IAP/paywall smoke and aggregate event plan; paid work waits for export baseline | ready-for-sale-evidence-needed-2026-05-20 |
| adivinha-app | Music quiz, submitted for review 2026-05-15 | On approval: install `APPLE_SHARED_SECRET` in backend secret manager + finish RevenueCat product/entitlement wiring | subscription/IAP | S | M | On approval: set shared secret in provider env (never Markdown), configure RevenueCat app/products/entitlement, redeploy backend, sandbox smoke test | submitted-review |
| parabens-ai-br | Personalized birthday/message app; Linear `AGE-1479` In Progress; Railway healthcheck timeout 300s shipped 2026-05-18 (`d07dda5`) to reduce backend instability as candidate review cause | Resolve App Review/resubmit path and prepare BR proof creatives without paid spend | IAP/server payments + WhatsApp sharing | M | M | Backend reliability fix landed; ASC blocker pull still pending. Manual ASC read required: capture exact review reason, fill rejection checklist, validate IAP/subscription blocker, draft 10 birthday/WhatsApp hooks; no campaign/budget mutation | linear-in-progress-railway-fix-shipped-2026-05-19 |
| faithschool-web | Family homeschool copilot; strongest current US Apple Ads learning candidate | **Repositionar weekly planner → copiloto diário 5min de fé em família** (resolve TikTok 7.9k views/0 cliques + ativação D1). Notificação devocional matinal 60s + lição da semana resumida em 90s na primeira sessão + copy app store "5 min de Deus em família" | subscription | M | M | ✅ ASC copy ([[Repositioning Package 2026-05-16]]) + i18n tagline/devotionalBanner PT-BR/EN + scheduler 7am Capacitor (`src/lib/notifications/`) hookado no `(app)/layout.tsx`. Pendente humano: `npx cap sync ios` + NSUserNotificationUsageDescription no Info.plist | code-shipped-2026-05-17 |
| faithschool-web (GTM evidence sprint) | Faith project updates 2026-05-20: public landing/pricing/legal shipped, OKComputer authenticated Home implemented on web+iOS, public Playwright smoke tests added, hourly backlog automation configured | Convert launch surface into measured subscription funnel before paid scale | subscription | M | M | Next daytime cut should be billing/entitlements + purchase events (`paywall_viewed`, `purchase_started`, `pu
...[truncated]

## 04_Areas/Product/Repo Data Improvement Backlog.md

---
type: backlog
area: repo-data
tags:
  - repos
  - data
  - backlog
  - quality
---
# Repo Data Improvement Backlog

Backlog noturno para melhorar repos, dados e confiabilidade sem fazer mudancas destrutivas automaticamente.

## Categories

| Category | What to look for | Output |
|---|---|---|
| Dirty repo risk | many modified files, ahead/behind, stale branches | proposal in project note or Linear cleanup backlog |
| Release readiness | missing tests, build commands, App Store/TestFlight gaps | checklist tasks |
| Data quality | missing migrations, seed data, analytics events, ownership fields | repo/data task |
| Security | `.env` drift, missing `.env.example`, secrets inventory gaps | metadata-only inventory update |
| Product analytics | missing event names, conversion funnel, retention metric | measurement task |
| Marketing proof | missing screenshots, demo videos, before/after assets | creative task |
| Database health | schema drift, missing backup notes, untracked production dependencies | non-secret review task |

## Current Nightly Targets

| Target | Why | Next action | Status |
|---|---|---|---|
| Dirty repos from Linear Git Sync Report | Many project notes currently show dirty snapshots | Prioritize by active Linear/project revenue relevance | recurring |
| Railway variables inventory | Production apps depend on provider env vars | Keep metadata fresh; never store values | recurring |
| iOS release pipeline | Multiple apps depend on App Store Connect/TestFlight | Use Apple inventory + iOS preflight before upload work | recurring |
| Creative/video assets | Marketing improves only with proof and iteration | Link generated assets, captions, hooks and metrics | recurring |
| Linear mapping for revenue-active repos | 19 repos still show `Needs Linear project mapping` | Draft mappings for MyTone, Aura, Adivinha, specialapp, servicenow-superapp, parabens-ai-br, bandle-br, pierrondi-site first | candidate |
| App Store product-page measurement | Paid app growth needs product page optimization/custom product page discipline | Add PPO/CPP/App Analytics fields to launch package before scaling spend | candidate |
| GitHub secret protection readiness | Many repos are public or near-public and use provider env vars | Check push protection/secret scanning status as metadata only; never store secret values | candidate |
| Agent memory note hygiene | Large always-loaded histories reduce retrieval quality | Keep global instructions concise and link to vault detail instead of copying long histories | candidate |
| Apple Ads / ASA CSV connection | 4 live Apple Ads apps with no CSV connected — no impressions/taps/installs/CR/CPA/spend evidence | Add per-app inventory row in `App Marketing Metrics Inventory` (file path + columns, metadata only, no API tokens); use as gate for budget changes | candidate |
| Railway secret hygiene | `railway variables` (no flag) printed `PGPASSWORD` in plaintext during Muse Edit render | Default to `railway variables --json` + targeted-key extraction or `brain-railway-run -- <cmd>`; never paste output in Markdown, logs or screenshots | candidate |
| FaithSchool resubmission risk | Build 15 uploaded after 5+ rejections | Run a rejection-pattern review against past project-note history before next ASC submit; verify against `App Store Connect Upload Runbook` | candidate |
| pierrondi.ia split hygiene | Repo split into `pierrondi-site` (public) and `pierrondi-os` (internal automation) | Confirm both project notes exist; propose non-destructive Railway service rename; isolate analytics surfaces | candidate |
| App review queue data | Multiple apps are `WAITING_FOR_REVIEW`, one is rejected, and ready-for-sale apps need paid evidence gates | Add safe metadata fields: app, version, build, review state, blocker, post-approval action, evidence path, human owner | candidate |
| Launch-bound repo secret scanning metadata | GitHub docs support secret scanning/push protection as a credential-exposure control | Track whether public or launch-bound repos have secret scanning/push protection readiness checked; store status only, never findings or secret values | candidate |
| Linear connector read nuance | `list_projects` returned 400 when `includeMilestones=true`, but succeeded without that flag | Record tool usage pattern so future automations get live project state reliably | candidate |
| Dirty repo portfolio triage | Latest sync shows 32/32 scanned repos dirty, 8 ahead and 3 behind | Create non-destructive cleanup proposal order by revenue proximity: app review/revenue apps first, then B2B/IP repos, then experiments | candidate |
| Cantus.ai Harmonizer -> exploratorio/CantuStudio mapping | Linear project `Cantus.ai Harmonizer` is `In Progress` but `exploratorio` and `CantuStudio` repos still report `Needs Linear project mapping` | Add the mapping row in `Linear Project Map`; do not write to Linear | candidate |
| creative-video-factory source-of-truth confusion | New standalone repo (2026-
...[truncated]

## 04_Areas/Coding/Checklists/Project Checklist Hub.md

---
type: checklist-hub
tags:
  - checklist
  - coding
  - security
---
# Project Checklist Hub

Este e o hub obrigatorio de checklists para todos os projetos.

## Uso por agentes

Antes de implementar, revisar ou fazer deploy, o agente deve escolher os checklists relevantes:

- Preflight essencial app/web: [[04_Areas/Coding/Checklists/App Web Preflight Checklist]]
- Visual QA/screenshots: [[04_Areas/Coding/Checklists/Screenshots Visual QA Checklist]]
- Frontend: [[04_Areas/Coding/Checklists/Frontend Checklist]]
- Backend/API: [[04_Areas/Coding/Checklists/Backend API Checklist]]
- Web/Next/Node: [[04_Areas/Coding/Checklists/Platform Web Next Node Checklist]]
- Web app quality: [[04_Areas/Coding/Checklists/Web App Preflight Checklist]]
- Mobile/iOS: [[04_Areas/Coding/Checklists/Platform Mobile iOS Checklist]]
- iOS app quality: [[04_Areas/Coding/Checklists/iOS App Preflight Checklist]]
- iOS QA/TestFlight closure: [[04_Areas/Coding/Best Practices/iOS Functional QA And TestFlight Closure Standard]]
- App Store Connect upload: [[04_Areas/Coding/Checklists/App Store Connect Upload Runbook]]
- **🚨 Apple reject resolution (LEITURA OBRIGATÓRIA antes de tocar em qualquer reject):** [[04_Areas/Coding/Checklists/Apple Reject Resolution Audit Checklist]]
- Android app quality: [[04_Areas/Coding/Checklists/Android App Preflight Checklist]]
- Python/Data: [[04_Areas/Coding/Checklists/Platform Python Data Checklist]]
- IA/LLM: [[04_Areas/Coding/Checklists/AI Integrations Checklist]]
- Deploy/Release: [[04_Areas/Coding/Checklists/Release Deploy Checklist]]
- Seguranca: [[04_Areas/Coding/Checklists/Security Checklist]]
- Secrets/API keys: [[04_Areas/Coding/Checklists/Secrets And API Keys Register]]
- Apple/App Store Connect: [[04_Areas/Coding/Checklists/Apple Developer And App Store Connect Inventory]]
- Railway variables: [[04_Areas/Coding/Checklists/Railway Secrets Inventory]]

## Regra dura

O vault guarda inventario, decisoes e referencias. O vault **nao guarda valores reais** de API keys, tokens, senhas, cookies, private keys, refresh tokens ou credenciais de producao.

## Start gate para qualquer projeto

- [ ] Identificar plataforma: web, mobile, backend, IA, data, infra.
- [ ] Abrir nota do projeto em `02_Projects`.
- [ ] Abrir `.brain/PROJECT_CONTEXT.md` quando existir.
- [ ] Rodar `brain-linear-sync` ou ler [[04_Areas/Coding/Linear/Linear Git Sync Report]] para estado Git/local.
- [ ] Para roadmap, bug, status, prioridade, release, sprint/cycle, automacao ou backlog cleanup, ler o projeto/issue vivo no Linear via conector quando disponivel.
- [ ] Selecionar checklists relevantes deste hub.
- [ ] Para app, site, tela, fluxo visual ou store submission, abrir [[04_Areas/Coding/Checklists/App Web Preflight Checklist]].
- [ ] Para mudanca visual, planejar screenshots com [[04_Areas/Coding/Checklists/Screenshots Visual QA Checklist]].
- [ ] Verificar riscos e decisoes antigas.
- [ ] Confirmar onde secrets reais devem ficar.
- [ ] Para iOS/App Store, abrir o inventario Apple antes de pedir IDs ou chaves.
- [ ] Para mudanca iOS significativa, planejar QA funcional instalada e upload TestFlight no fechamento.
- [ ] Definir comandos de lint, test e build.

## Finish gate para qualquer projeto

- [ ] Atualizar nota do projeto.
- [ ] Atualizar Linear quando a realidade da issue/projeto mudou; se nao for apropriado alterar status, registrar proposta clara em [[04_Areas/Coding/Linear/Linear Cleanup Backlog]] ou na nota do projeto.
- [ ] Nao fechar, arquivar, relabelar, reatribuir ou mover issues em massa sem proposta e aprovacao explicita.
- [ ] Atualizar inventario de env vars/secrets sem valores reais.
- [ ] Atualizar inventario Apple quando houver mudanca de Issuer ID, Team ID, Key ID, APNS, IAP ou signing.
- [ ] Registrar comandos rodados.
- [ ] Para iOS significativo, registrar TestFlight build/version/status ou excecao explicita.
- [ ] Registrar paths dos screenshots relevantes ou motivo de nao capturar.
- [ ] Registrar riscos, decisoes e proximos passos.
- [ ] Confirmar que nenhum segredo foi escrito em Markdown, logs, commits ou screenshots.
- [ ] Se isto foi automacao/rotina/job/cloud runner, enviar email final para `pierrondi@gmail.com` conforme [[99_System/Automation Email Policy]].

## Referencias externas

- Apple HIG: https://developer.apple.com/design/human-interface-guidelines
- Apple App Review Guidelines: https://developer.apple.com/app-store/review/guidelines/
- Android Core App Quality: https://developer.android.com/docs/quality-guidelines/core-app-quality
- Android technical quality: https://developer.android.com/quality/technical
- Google Play Developer Program Policy: https://support.google.com/googleplay/android-developer/answer/16933379
- Web Vitals: https://web.dev/articles/vitals
- WCAG 2.2: https://www.w3.org/TR/WCAG22/
- OWASP Top 10 2021: https://owasp.org/Top10/2021/
- OWASP API Security Top 10 2023: https://owasp.org/API-Security/
- OWASP ASVS: https://owasp.org/www-project-application-security-
...[truncated]

## 04_Areas/Coding/Checklists/App Web Preflight Checklist.md

---
type: preflight-checklist
area: app-web-quality
tags:
  - preflight
  - apps
  - web
  - ios
  - android
  - quality
---
# App Web Preflight Checklist

Este e o preflight mais importante antes de criar, alterar ou revisar qualquer app, web app, site, tela, fluxo, release, screenshot ou submission.

## 0. Classificar o trabalho

- [ ] Tipo: web app, site, iOS, Android, cross-platform, backend-for-frontend, landing, dashboard, game, marketing page.
- [ ] Plataforma alvo primaria definida.
- [ ] Plataforma secundaria definida.
- [ ] Usuario alvo e momento de uso definidos.
- [ ] Fluxo principal em uma frase.
- [ ] Risco principal: design, dados, auth, pagamento, store review, performance, privacy, AI, deploy.

## 0.1 Regra maxima de ads tracking

> Todo app novo ou em uso precisa ter tracking de aquisicao e performance de ads como requisito de produto, nao como tarefa de marketing posterior.

- [ ] Mobile app: TikTok App Events SDK ou MMP equivalente planejado/implementado quando o app puder receber TikTok/Meta/social paid.
- [ ] iOS: SKAN/AdServices/ATT/App Privacy/PrivacyInfo revisados e com um unico owner de conversion value.
- [ ] Web/PWA/landing: TikTok Pixel + Events API/UTM capture planejado/implementado quando houver trafego pago/social.
- [ ] Evento de funil minimo definido: app open/install, onboarding completed, ativacao principal, paywall viewed, trial/purchase started, purchase/subscription completed.
- [ ] Reporting central definido: app, channel, campaign, spend, impressions, clicks/taps, installs/leads, CPA/CPT e receita/trial quando existir.
- [ ] Test Events ou equivalente documentado antes de qualquer campanha paga, budget scale, creative refresh pago ou paid launch.
- [ ] Segredos ficam em secret manager/build env/provider env; vault registra somente nomes de env vars e local de armazenamento.

## 1. Ler memoria e padroes

- [ ] Nota do projeto em `02_Projects`.
- [ ] `.brain/PROJECT_CONTEXT.md`.
- [ ] AI history do projeto.
- [ ] `brain-linear-sync` rodado ou [[04_Areas/Coding/Linear/Linear Git Sync Report]] lido.
- [ ] Linear issue/projeto vivo lido via conector quando o trabalho for roadmap, bug, release, status, prioridade, sprint/cycle, backlog ou automacao.
- [ ] [[04_Areas/Coding/Best Practices/Development Best Practices Hub]]
- [ ] [[04_Areas/Coding/Best Practices/Frontend UI UX Best Practices]]
- [ ] [[04_Areas/Coding/Checklists/Project Checklist Hub]]
- [ ] [[04_Areas/Coding/Checklists/Screenshots Visual QA Checklist]]
- [ ] [[04_Areas/Coding/Checklists/Security Checklist]]

## 2. Plataforma

- [ ] Web: [[04_Areas/Coding/Checklists/Web App Preflight Checklist]]
- [ ] iOS: [[04_Areas/Coding/Checklists/iOS App Preflight Checklist]]
- [ ] Android: [[04_Areas/Coding/Checklists/Android App Preflight Checklist]]
- [ ] Backend/API: [[04_Areas/Coding/Checklists/Backend API Checklist]]
- [ ] AI/LLM: [[04_Areas/Coding/Checklists/AI Integrations Checklist]]
- [ ] Release/deploy: [[04_Areas/Coding/Checklists/Release Deploy Checklist]]

## 3. Produto e UX

- [ ] Primeira tela mostra valor real, nao placeholder ou marketing vazio.
- [ ] Todo app tem identidade publica pronta: icone final forte, landing page publica superior e links legais vivos.
- [ ] Mobile app tem opening motion contextual ao dominio do produto, curto, offline, sem spinner generico e sem bloquear o uso.
- [ ] `GET /` do dominio publico entrega landing HTML responsiva, nao JSON cru, pagina vazia ou placeholder.
- [ ] Landing inclui nome do app, promessa clara, visual real/screenshot, CTA, support/privacy/terms, favicon/app icon e Open Graph/Twitter metadata.
- [ ] Fluxo principal tem inicio, acao, feedback, erro e conclusao.
- [ ] Se for app iOS com mudanca significativa, fechamento inclui QA funcional no app instalado e upload TestFlight/App Store Connect.
- [ ] Estados vazios, loading, erro, offline e permissao negada foram tratados.
- [ ] Usuario consegue recuperar de erro sem perder trabalho.
- [ ] Copy esta em idioma correto e nao promete o que app nao entrega.
- [ ] Nenhum texto explica funcionalidade que a UI deveria tornar obvia.

## 4. Qualidade visual

> **Regra zero:** screenshots para loja, marketing ou release sao deliverable de primeira classe, sempre "super awesome", sempre iguais ou melhores que a versao anterior. Ver [[04_Areas/Coding/Checklists/Screenshots Visual QA Checklist]] e [[04_Areas/Coding/Best Practices/App Web Quality Best Practices]].

- [ ] App icon foi validado como final, forte e reconhecivel; nao e placeholder, template cru ou asset generico.
- [ ] App icon esta consistente entre build instalado, App Store/Play, landing, favicon e OG image.
- [ ] Screenshot desktop e mobile foram capturados quando ha mudanca visual.
- [ ] Opening motion mobile foi capturado em screenshot/video curto e o path foi registrado quando houve mudanca de app/release.
- [ ] Para store submission: 6 screenshots composed por idioma e device class, no formato exato (App Store 6.9" = 1320x2868). Sem composer brandado e
...[truncated]

## 04_Areas/Coding/Checklists/Screenshots Visual QA Checklist.md

---
type: checklist
area: visual-qa
tags:
  - screenshots
  - visual-qa
  - quality
---
# Screenshots Visual QA Checklist

> **Regra zero — sempre awesome, nunca degrada.** Toda screenshot destinada a loja, marketing, post, deck ou capa de release e deliverable de primeira classe. Sai composta, brandada, no formato exato do destino, em todos os idiomas relevantes. Nao existe "screenshot ok pra primeira versao". Cada nova versao deve ser igual ou melhor que a anterior — degradacao visual e regressao e bloqueia release.

## Quando capturar

- [ ] Mudanca visual em tela, componente, landing, dashboard ou app.
- [ ] Novo fluxo de onboarding, auth, pagamento, upload, IA ou deploy.
- [ ] Submission App Store/Google Play — **bloqueador**: sem 6 telas finais composed em cada idioma + device class, nao submete.
- [ ] Resubmission apos rejeicao Apple/Google — refazer set inteiro se o build mudou de jeito visivel.
- [ ] Lancamento de feature consumer — pelo menos 1 hero shot artistico para post/release notes.
- [ ] Bug visual, overflow ou responsividade.
- [ ] Antes/depois de refactor de UI — comparar lado-a-lado.
- [ ] Marketing post, anuncio, deck, video preview — formato e dimensoes do canal final, nao reaproveitar de outro lugar.

## Viewports

- [ ] Mobile estreito.
- [ ] Mobile alto.
- [ ] Tablet quando aplicavel.
- [ ] Desktop padrao.
- [ ] Desktop largo quando layout for responsivo.
- [ ] Light/dark mode quando suportado.

## "Super awesome" para store/marketing — checklist obrigatorio

- [ ] Composicao branded: brand gradient/textura + headline tipografica + frame de device realista + footer com wordmark/logo.
- [ ] Headline tipografica forte (display font, peso 800+, tamanho >= 100px no 1320px), idealmente com gradient sutil.
- [ ] Eyebrow curta acima do headline (uppercase, letter-spacing alto, cor accent da marca).
- [ ] Subhead em uma linha que explica o beneficio.
- [ ] Frame de device com bezel realista, Dynamic Island/notch correto, side buttons, drop shadow.
- [ ] Screenshot interna mostra produto em uso real, com dados de demo plausiveis (nao login, nao splash, nao tela vazia).
- [ ] Resolucao EXATA do destino:
  - iPhone 6.9": 1320x2868
  - iPhone 6.7": 1290x2796
  - iPhone 6.5": 1242x2688
  - iPhone 5.5": 1242x2208
  - iPad 13": 2064x2752
  - iPad 12.9": 2048x2732
  - Instagram feed: 1080x1350
  - Instagram story: 1080x1920
  - LinkedIn post: 1200x627
- [ ] Status bar: 9:41, bateria 100%, sinal cheio, sem operadora estranha. `xcrun simctl status_bar` ou device fisico ja configurado.
- [ ] Por idioma do mercado (minimo pt-BR + en-US para Brasil/global; adicionar es-MX/es-AR/pt-PT conforme distribuicao).
- [ ] Storytelling: 6 screenshots = arco (hook -> mecanica -> payoff -> social -> monetizacao -> upgrade).
- [ ] Comparada lado-a-lado com a versao anterior: igual ou melhor. Nunca pior.
- [ ] Comparada lado-a-lado com competidor direto: aguenta sem parecer pior.

## O que reprova

- [ ] Texto cortado.
- [ ] Texto ou controles sobrepostos.
- [ ] Botao muda tamanho no hover/loading.
- [ ] Cards dentro de cards sem motivo.
- [ ] Hero generico sem produto/objeto real.
- [ ] Imagem escura, cortada ou decorativa quando deveria explicar produto.
- [ ] Loading/empty/error com layout quebrado.
- [ ] Conteudo principal abaixo da dobra sem sinal visual.
- [ ] Cores muito monocromaticas sem hierarquia.
- [ ] Screenshot cru de simulator/device enviado para loja ou marketing sem composicao.
- [ ] Screenshot em idioma errado para o mercado.
- [ ] Apenas tela de login, splash ou title art (Apple Guideline 2.3.3 reprova).
- [ ] Resolucao aproximada (1290x2796 enviado como 6.9" e errado — Apple aceita mas perde fidelidade).
- [ ] Reaproveitar screenshot de release anterior sem comparar — risco de regressao silenciosa.
- [ ] Screenshot de dependencia, fixture ou `node_modules` tratado como prova do app.

## Evidencia

- [ ] Paths dos screenshots registrados na nota do projeto.
- [ ] Cada screenshot de QA tem interpretacao humana registrada: o que passou, o que falhou, se bloqueia release e qual e o proximo passo.
- [ ] Screenshot em simulador/device compartilhado com outros apps/agentes nao conta como evidencia final sem confirmar bundle/app/processo.
- [ ] Para iOS/App Store, a evidencia final precisa mostrar produto real em uso, nao apenas login/tour; login/tour conta somente como evidencia auxiliar.
- [ ] Push/ASC ficam bloqueados ate todos os fluxos core terem screenshot ou video curto com resultado pass/fail registrado.
- [ ] Se screenshot contem dado sensivel, nao anexar ao vault; registrar apenas que foi verificado.
- [ ] Falhas visuais viram item no projeto ou Learning Inbox.

## Pipeline canonico — HTML composer + Playwright

Para produzir screenshots "super awesome" reusavel entre projetos:

```
project/marketing/
  composer/
    template.html      # brand gradient + headline + frame + footer
    manifest.json      # {shots: [{id, raw, pt:{eyebrow,headline,subhead}, en:{...}}, ...]}
    render.mjs         #
...[truncated]

## 04_Areas/Coding/Checklists/Web App Preflight Checklist.md

---
type: preflight-checklist
platform: web
tags:
  - preflight
  - web
  - quality
---
# Web App Preflight Checklist

## UX

- [ ] O primeiro viewport mostra produto, estado real ou tarefa principal.
- [ ] Navegacao principal e retorno sao claros.
- [ ] Estados empty/loading/error/success existem.
- [ ] Forms preservam dados em erro.
- [ ] Tabelas/listas funcionam em mobile ou tem alternativa.
- [ ] Conteudo real nao depende de lorem ipsum/placeholder.

## Web performance

- [ ] LCP target: ate 2.5s quando medido em experiencia real.
- [ ] INP target: ate 200ms.
- [ ] CLS target: ate 0.1.
- [ ] Imagens com dimensoes, lazy loading quando adequado e formatos corretos.
- [ ] Fontes nao bloqueiam render sem motivo.
- [ ] JS pesado foi evitado ou code-split.

## Accessibility

- [ ] WCAG 2.2 como alvo de referencia.
- [ ] Focus nao fica escondido.
- [ ] Target size/touch target aceitavel.
- [ ] Drag-and-drop tem alternativa.
- [ ] Autenticacao acessivel.
- [ ] Ajuda consistente em fluxos complexos.

## Technical

- [ ] SEO/metadata quando pagina publica.
- [ ] Canonical/robots/sitemap quando relevante.
- [ ] CSP, CORS e security headers considerados.
- [ ] API client nao carrega secrets.
- [ ] Error boundaries/logging sem PII.
- [ ] Analytics respeitam consent/privacy.

## Visual QA

- [ ] Screenshot desktop.
- [ ] Screenshot mobile.
- [ ] Screenshot de estado de erro/loading se mudou fluxo.
- [ ] Sem overflow horizontal.
- [ ] Sem texto sobrepondo UI.

## Referencias

- Web Vitals: https://web.dev/articles/vitals
- WCAG 2.2: https://www.w3.org/TR/WCAG22/


## 04_Areas/Coding/Checklists/iOS App Preflight Checklist.md

---
type: preflight-checklist
platform: ios
tags:
  - preflight
  - ios
  - app-store
  - quality
---
# iOS App Preflight Checklist

## Produto e UX

- [ ] App segue convencoes iOS/HIG em navegacao, controles, gestos e feedback.
- [ ] App tem opening motion contextual ao dominio, implementado apos LaunchScreen estatico, curto e sem bloquear o uso.
- [ ] Fluxo principal funciona em device/simulador.
- [ ] Fluxos core e feature alterada foram testados no app instalado antes do fechamento.
- [ ] Safe area, Dynamic Type, dark mode e orientacao foram considerados.
- [ ] Permissoes aparecem no momento certo e explicam valor ao usuario.
- [ ] Offline/network slow nao quebra estado.
- [ ] Nenhum segredo real embutido no app.

## App Store review

- [ ] App nao tem placeholders, telas vazias ou conteudo temporario.
- [ ] App icon e final, forte, reconhecivel e consistente com a landing/App Store; nao e placeholder.
- [ ] App icon esta completo no asset catalog/build final da plataforma, nao apenas como PNG 1024 isolado.
- [ ] Backend esta online para review.
- [ ] URL raiz publica (`GET /`) entrega landing HTML responsiva de padrao superior, nao JSON cru.
- [ ] Landing tem nome do app, promessa clara, screenshots/visual real, CTA, suporte, privacy, terms, favicon/app icon e metadata social.
- [ ] Demo account ou demo mode existe quando login e necessario.
- [ ] Se login e necessario, Apple Sign-In e criacao de conta por e-mail foram testados em producao ou build release-like.
- [ ] App Review Information contem usuario demo e senha no App Store Connect; senha nao foi registrada no vault.
- [ ] Metadata, screenshots, descricao e notas de review batem com o app real.
- [ ] Support URL, Privacy URL e Terms URL retornam `200 text/html` antes da submissao.
- [ ] Se o dominio do produto nao estiver pronto, usar `https://www.pierrondi.dev/apps/<app-slug>/support`, `/privacy` e `/terms` como fallback oficial.
- [ ] Gate de release registrado no vault antes de push/upload: comandos, build number, simulator/device, screenshots, pass/fail humano, blockers e decisao final.
- [ ] Se houver outro chat/agente/processo trabalhando no app, usar simulador/device isolado ou registrar conflito; screenshot de device compartilhado nao conta como evidencia final sem confirmar app/bundle/processo.
- [ ] Push/ASC bloqueados se qualquer fluxo core abrir web indevidamente, mostrar app errado, ficar preso em login sem demo account/demo mode, tiver texto truncado, placeholder visual ou acao principal nao validada.
- [ ] Fluxos nativos minimos testados no app instalado: Auth/demo, Home, Planner/AI planner, Coach, Devotional, Records e Settings/sign-out.
- [ ] IAP/subscriptions estao visiveis, funcionais e explicados.
- [ ] Privacy policy e App Privacy Details batem com SDKs e coleta real.
- [ ] Opening motion nao inicializa tracking/ads/marketing antes de consentimento e respeita Reduce Motion.
- [ ] Privacy manifest (`PrivacyInfo.xcprivacy`) bate com dominios reais usados em producao.
- [ ] UGC tem report, block, moderation e contato quando aplicavel.
- [ ] Kids, saude, financeiro, sorteios/jogos, IA ou conteudo sensivel foram revisados.

## Build

- [ ] Bundle ID correto.
- [ ] Version/build number atualizados.
- [ ] Entitlements/capabilities revisados.
- [ ] Signing/provisioning ok.
- [ ] Archive/test build validado.
- [ ] Crash/logs revisados.
- [ ] Para upload/TestFlight/App Store Connect API, [[04_Areas/Coding/Checklists/Apple Developer And App Store Connect Inventory]] foi conferido.
- [ ] Para upload/TestFlight/App Store Connect API, [[04_Areas/Coding/Checklists/App Store Connect Upload Runbook]] foi seguido.
- [ ] `APP_STORE_CONNECT_ISSUER_ID` usa identificador nao-secreto do inventario; `.p8`, shared secrets e certificados ficam em secret manager/provider env vars.
- [ ] Large app icon 1024px nao tem alpha (`sips -g hasAlpha ...` retorna `no`).
- [ ] Asset catalog de AppIcon tem todos os slots/tamanhos exigidos pelo build alvo ou usa configuracao universal comprovadamente aceita pelo Xcode/App Store; validar no app instalado/TestFlight, nao so no arquivo fonte.
- [ ] Build number foi incrementado antes de novo upload.
- [ ] Upload nao sera considerado concluido ate App Store Connect mostrar build processing/`VALID`.
- [ ] Ao fechar mudanca iOS significativa, novo build foi enviado ao TestFlight/App Store Connect ou excecao explicita foi registrada.

## Screenshots

- [ ] Screenshots mostram valor real do app.
- [ ] Sem dados sensiveis.
- [ ] Textos localizados corretamente.
- [ ] Dispositivos/tamanhos exigidos foram cobertos.
- [ ] Idiomas suportados tem screenshots separados no `fastlane/screenshots/<locale>`.
- [ ] Dimensoes dos screenshots foram validadas por script.

## Fechamento TestFlight

- [ ] [[04_Areas/Coding/Best Practices/iOS Functional QA And TestFlight Closure Standard]] foi seguido.
- [ ] Comando de upload usado foi registrado.
- [ ] IPA/archive/dSYM path registrado quando aplicavel.
- [ ] Status App Store Connect regis
...[truncated]

## 04_Areas/Coding/Checklists/Android App Preflight Checklist.md

---
type: preflight-checklist
platform: android
tags:
  - preflight
  - android
  - google-play
  - quality
---
# Android App Preflight Checklist

## Produto e UX

- [ ] App segue Core App Quality e padroes Android.
- [ ] App tem opening motion contextual ao dominio, curto, offline e coerente com Material/brand.
- [ ] Material 3/Compose ou sistema visual escolhido foi aplicado consistentemente.
- [ ] Back navigation funciona e nao perde dados.
- [ ] Estado e restaurado ao voltar do background.
- [ ] Layout funciona em diferentes tamanhos, densidades, orientacoes e fontes.
- [ ] Foldables/tablets foram considerados se o app se beneficiar.
- [ ] Permissoes perigosas sao pedidas so quando ligadas ao caso de uso principal.

## Technical quality

- [ ] Startup, scroll, transicoes e memoria aceitaveis.
- [ ] Opening motion respeita animator duration scale/acessibilidade e nao bloqueia o app por mais de 2s.
- [ ] Crash-free e ANR considerados.
- [ ] Offline/network slow tratado.
- [ ] WorkManager/background work usado de forma apropriada.
- [ ] Battery/network usage nao abusivo.
- [ ] Nenhum segredo real embutido no APK/AAB.

## Google Play

- [ ] Privacy policy publica e dentro do app quando necessario.
- [ ] Data safety section consistente com coleta real e SDKs terceiros.
- [ ] Permissions declaration coerente.
- [ ] Content rating completo.
- [ ] Store listing sem claims enganosos.
- [ ] Account deletion e data deletion quando aplicavel.
- [ ] Test track/review notes preparados.

## Build/release

- [ ] Application ID correto.
- [ ] Version code/name atualizados.
- [ ] Release signing configurado.
- [ ] Android App Bundle pronto.
- [ ] ProGuard/R8 rules revisadas.
- [ ] Smoke test em device/emulator.

## Screenshots

- [ ] Phone screenshots.
- [ ] Tablet/large screen screenshots se aplicavel.
- [ ] Sem dados sensiveis.
- [ ] UI legivel em light/dark mode.

## Referencias

- Android Core App Quality: https://developer.android.com/docs/quality-guidelines/core-app-quality
- Android technical quality: https://developer.android.com/quality/technical
- Google Play policies: https://support.google.com/googleplay/android-developer/answer/16933379

## Fonte verificada

- `2026-05-18`: Android Core App Quality consultado; pagina oficial indica ultimo update em `2026-04-08 UTC`.


## 04_Areas/Coding/Checklists/Security Checklist.md

---
type: checklist
area: security
tags:
  - checklist
  - security
---
# Security Checklist

## Baseline

- [ ] Nenhum segredo real em Markdown, commits, screenshots, logs ou issues.
- [ ] `.env`, private keys, certificates e service account files estao no `.gitignore`.
- [ ] `.env.example` existe quando util, sem valores reais.
- [ ] Dependencias novas foram revisadas.
- [ ] Input externo e validado no servidor.
- [ ] Output sensivel nao e exposto ao cliente.

## OWASP web

- [ ] Broken access control: checar autorizacao por recurso.
- [ ] Cryptographic failures: nao armazenar senha/token em claro.
- [ ] Injection: usar queries parametrizadas e sanitizacao apropriada.
- [ ] Insecure design: revisar abusos obvios do fluxo.
- [ ] Security misconfiguration: headers, CORS, debug e permissao.
- [ ] Vulnerable components: revisar dependencias.
- [ ] Auth failures: sessoes, reset, MFA quando aplicavel.
- [ ] Integrity failures: supply chain, builds, webhooks assinados.
- [ ] Logging/monitoring: eventos criticos sem secrets.
- [ ] SSRF: validar URLs externas e metadata endpoints.

## API

- [ ] BOLA/BFLA: usuario nao acessa objeto/funcoes de outro usuario.
- [ ] Rate limit por user/IP/token.
- [ ] Object properties sensiveis nao aceitam mass assignment.
- [ ] Excessive data exposure evitada.
- [ ] Webhooks e callbacks validam assinatura.
- [ ] Consumo de APIs externas tem timeout, retry e allowlist quando possivel.

## Mobile/client

- [ ] Nenhum segredo real embutido no app.
- [ ] Chaves publicas client-side sao tratadas como publicas.
- [ ] Deep links e callbacks validam destino.
- [ ] Storage local nao guarda token sensivel sem protecao adequada.

## IA

- [ ] Prompt injection e tool abuse foram considerados.
- [ ] Modelo nao recebe segredo real.
- [ ] Output de IA nao executa acao destrutiva sem validacao.
- [ ] Logs de IA redigem PII e secrets.

## Antes de finalizar

- [ ] Rodar busca por padroes de segredo antes de commit quando houver risco.
- [ ] Atualizar [[04_Areas/Coding/Checklists/Secrets And API Keys Register]] se env vars mudaram.
- [ ] Registrar risco residual na nota do projeto.


## 04_Areas/Coding/Checklists/Secrets And API Keys Register.md

---
type: secrets-register
tags:
  - checklist
  - secrets
  - api-keys
  - security
---
# Secrets And API Keys Register

Este arquivo e inventario. Ele **nao guarda valores reais**.

## Regra

Guardar aqui:

- nome da env var;
- fornecedor;
- projeto;
- ambiente;
- onde o valor real esta guardado;
- data de rotacao;
- dono/responsavel;
- risco e escopo.

Nao guardar aqui:

- API key real;
- token;
- senha;
- cookie;
- private key;
- refresh token;
- service account JSON;
- arquivo `.p8`, `.pem`, `.key`, `.p12`, `.mobileprovision` ou equivalente.

## Locais recomendados para valor real

- 1Password ou outro password manager com referencias seguras, por exemplo `op://Developer/OpenAI/api-key`.
- Apple Passwords / iCloud Keychain para senhas/passkeys humanas.
- Apple Keychain local como fallback local.
- GitHub Actions Secrets.
- Vercel/Railway/Netlify/Fly/Render environment variables.
- AWS/GCP/Azure secret manager.
- `.env.local` apenas local, sem commit.

## Modelo de uso

Ver [[99_System/Credential Vault Operating Model]].

- Valor real nunca entra neste arquivo.
- Referencia segura pode entrar, por exemplo `op://vault/item/field`.
- Provider env var pode entrar, por exemplo `Railway Variables -> project/service -> OPENAI_API_KEY`.
- Se `op`/secret manager nao existir no ambiente, deixar acao humana clara em vez de pedir key em chat.
- Intake local seguro disponivel em `/Users/paulopierrondi/.local/bin/brain-secret-intake`; ele pede o valor no prompt do Apple Keychain, sem passar segredo por argumento de shell.
- Intake por arquivo temporario disponivel em `/Users/paulopierrondi/.second-brain-secrets.env`; importar com `/Users/paulopierrondi/.local/bin/brain-secret-intake import /Users/paulopierrondi/.second-brain-secrets.env --delete`.

## Checklist para nova API key

- [ ] Existe env var com nome claro.
- [ ] Valor real esta em secret manager, nao no vault.
- [ ] `.env.example` foi atualizado sem valor real.
- [ ] Se usado arquivo temporario de intake, ele foi apagado apos importacao.
- [ ] Escopo/permissao minima.
- [ ] Ambiente separado: dev/staging/prod.
- [ ] Rotacao/revogacao planejada.
- [ ] Quem usa a key esta documentado.
- [ ] Logs nao imprimem a key.
- [ ] Client nao recebe segredo server-side.

## Incidente de exposicao - 2026-05-19

Valores reais de credenciais foram colados em chat em `2026-05-19`. Tratar como comprometidos. Nenhum valor real deve ser copiado para o vault.

Registro canonico: [[99_System/Secret Exposure Incident - 2026-05-19]].

| Area | Referencias afetadas | Onde o valor novo deve ficar | Status |
| --- | --- | --- | --- |
| Google Gemini | `GEMINI_API_KEY` | 1Password/Apple Keychain + provider env vars | **ROTATE_REQUIRED** - exposta em chat 2026-05-19 |
| ElevenLabs / Eventlabs | `ELEVENLABS_API_KEY`, `EVENTLABS_API_KEY` | 1Password/Apple Keychain + provider env vars | **ROTATE_REQUIRED** - exposta em chat 2026-05-19 |
| Pexels | `PEXELS_API_KEY` | 1Password/Apple Keychain + provider env vars | **ROTATE_REQUIRED** - exposta em chat 2026-05-19 |
| Creatomate | `CREATOMATE_API_KEY` | 1Password/Apple Keychain + provider env vars | **ROTATE_REQUIRED** - exposta em chat 2026-05-19 |
| YourVersion | `YOURVERSION_API_KEY` | 1Password/Apple Keychain + provider env vars | **ROTATE_REQUIRED** - exposta em chat 2026-05-19 |
| Linear | `LINEAR_API_KEY` | 1Password/Apple Keychain + local automation env | **ROTATE_REQUIRED** - exposta em chat 2026-05-19 |
| Railway | `RAILWAY_ACCOUNT_TOKEN`, `RAILWAY_PPT_TOKEN`, `RAILWAY_PIERRONDI_IA_TOKEN`, `RAILWAY_CSDM_TOKEN` | 1Password/Apple Keychain + Railway/GitHub Actions as needed | **ROTATE_REQUIRED** - exposta em chat 2026-05-19 |
| Cantus mobile | test user password | Apple Passwords/1Password; nao Markdown | **ROTATE_REQUIRED** - exposta em chat 2026-05-19 |
| Apple App Store Connect | API key metadata/private key file | Apple Developer Portal + local secure `.p8` path | **VERIFY_AND_ROTATE_IF_PRIVATE_KEY_EXPOSED** |

## Inventario

| Projeto | Env var | Fornecedor | Ambientes | Onde esta o valor real | Escopo | Rotacao | Dono | Status |
|---|---|---|---|---|---|---|---|---|
| _template_ | `OPENAI_API_KEY` | OpenAI | local/staging/prod | 1Password + provider env vars | server-side model calls | trimestral ou incidente | Paulo | planned |
| global-ios | `APP_STORE_CONNECT_ISSUER_ID` | Apple App Store Connect | local/CI/provider env | [[04_Areas/Coding/Checklists/Apple Developer And App Store Connect Inventory]] | identificador nao-secreto para ASC API/TestFlight/upload; private key `.p8` fica fora do vault | n/a salvo troca de conta Apple | Paulo | **ativo** — registrado 2026-05-15 |
| global-ios | `ASC_KEY_ID` / `APP_STORE_CONNECT_KEY_ID` | Apple App Store Connect | local/CI/provider env | [[04_Areas/Coding/Checklists/Apple Developer And App Store Connect Inventory]] | identificador nao-secreto da API key (`95ULBVD2BW`); `.p8` fica fora do vault | n/a salvo rotacao da API key | Paulo | **ativo** — confirmado 2026-05-15 |
| global-ios | `
...[truncated]

## 04_Areas/Coding/Checklists/Apple Developer And App Store Connect Inventory.md

---
type: provider-inventory
provider: apple
tags:
  - apple
  - app-store-connect
  - ios
  - secrets
  - checklist
---
# Apple Developer And App Store Connect Inventory

Este arquivo guarda inventario e identificadores nao-secretos para trabalhos Apple/iOS. Ele nao guarda private keys, tokens, senhas, shared secrets, cookies, provisioning profiles ou certificados.

## Identificadores nao-secretos registrados

| Item | Valor | Escopo | Uso | Status |
|---|---|---|---|---|
| App Store Connect Issuer ID | `20a81f12-b22c-4ff8-8b33-c1e5e411a24b` | App Store Connect API | Upload/TestFlight/API automation quando combinado com API Key ID e `.p8` guardados fora do vault | **ativo** — registrado 2026-05-15 |
| App Store Connect API Key ID | `95ULBVD2BW` | App Store Connect API | JWT/Fastlane/Xcode/Transporter auth metadata; private key separada | **ativo** — confirmado por historico 2026-05-15 |
| Apple Team ID | `8ULNGWJZ6B` | Apple Developer signing/App Store Connect | Signing, provisioning, Fastlane, Xcode export/upload | **ativo** — confirmado por historico 2026-05-15 |
| Canonical local `.p8` path | `~/.appstoreconnect/private_keys/AuthKey_95ULBVD2BW.p8` | Local machine only | Path metadata only; never print file content | **ativo** — confirmar existencia com `test -f`, nunca `cat` |

## Pendencias para automacao Apple completa

| Item | Valor | Onde registrar | Regra |
|---|---|---|---|
| App Store Connect API Key ID | `95ULBVD2BW` | Inventario/provider env vars | Identificador de configuracao; pode ser inventariado, mas nao substitui a `.p8`. |
| App Store Connect `.p8` private key | NUNCA em Markdown | Apple Keychain, 1Password, GitHub Actions Secrets ou provider env vars | Segredo real. Nunca colar em chat, nota, commit ou screenshot. |
| Apple Team ID | `8ULNGWJZ6B` | Inventario/provider env vars | Configuracao usada para signing/APNS. |
| APNS Key ID | TBD | Inventario/provider env vars | Identificador de configuracao; a chave `.p8` continua fora do vault. |
| APNS `.p8` / `APNS_KEY_BASE64` | NUNCA em Markdown | Railway/Vercel/GitHub Actions/secret manager | Segredo real. |
| App-specific shared secret / IAP shared secret | NUNCA em Markdown | Railway/Vercel/GitHub Actions/secret manager | Segredo real para validacao de compras/subscricoes. |
| Provisioning profiles / certificates | NUNCA em Markdown | Apple Developer, Keychain, CI signing store | Material sensivel de assinatura. |

## App Records E Signing Metadata

| Projeto | App Store Connect App ID | Bundle ID | SKU | Provisioning profile | Status |
|---|---:|---|---|---|---|
| FaithSchool | `6764325629` | `com.faithschool.app` | TBD | App Store automatic signing / `App` scheme | `1.0.3 (32)` submetido para review em 2026-05-18; estado `WAITING_FOR_REVIEW` |
| VouDeQue | `6770621754` | `com.paulopierrondi.voudeque` | `voudeque-2026` | `VouDeQue App Store` | App record criado, build `1.0 (1)` enviado e `VALID` em 2026-05-18 |
| ProvadorIA | `6770621817` | `com.paulopierrondi.provadoria` | `provadoria-2026` | `ProvadorIA App Store` | App record criado, build `1.0 (1)` enviado e `VALID` em 2026-05-18 |
| MyTone | `6770047382` | `app.mytone.MyTone` | `mytone-ai-ringtone-2025` | `MyTone AppStore` | Build `202605192005`; versao `1.0.0` + todos 3 IAPs (Pro Monthly, Pro Annual, Pro Lifetime) WAITING_FOR_REVIEW desde 2026-05-20; submission `47c613d3` |

## Regra de uso para coders

- Para qualquer trabalho de App Store Connect, TestFlight, upload, IAP, APNS, signing, entitlement ou review notes, ler este arquivo antes de pedir valores ao Paulo.
- Para upload de build, ler tambem [[04_Areas/Coding/Checklists/App Store Connect Upload Runbook]].
- Usar `APP_STORE_CONNECT_ISSUER_ID=20a81f12-b22c-4ff8-8b33-c1e5e411a24b` apenas como identificador nao-secreto.
- Se precisar de API Key ID, Team ID, APNS Key ID ou Bundle ID, registrar como metadado de configuracao quando fornecido.
- Se precisar de `.p8`, shared secret, certificate, password, token ou cookie, usar secret manager/provider env vars. Nao registrar o valor no vault.
- Para CI/cloud, passar o Issuer ID como env var/config e a `.p8` como segredo do provedor.

## Links relacionados

- [[04_Areas/Coding/Checklists/Secrets And API Keys Register]]
- [[04_Areas/Coding/Checklists/App Store Connect Upload Runbook]]
- [[04_Areas/Coding/Checklists/Platform Mobile iOS Checklist]]
- [[04_Areas/Coding/Checklists/iOS App Preflight Checklist]]
- [[04_Areas/Coding/Checklists/Railway Secrets Inventory]]
- [[99_System/Security And Secrets Policy]]


## 04_Areas/Coding/Checklists/App Store Connect Upload Runbook.md

---
type: runbook
platform: ios
provider: apple
tags:
  - ios
  - app-store-connect
  - testflight
  - upload
  - claude-code
  - checklist
---
# App Store Connect Upload Runbook

Updated: 2026-05-20

Este e o caminho pratico para upload de build iOS para App Store Connect/TestFlight. Use este runbook quando Claude Code, Codex, Kimi ou Gemini estiverem fazendo archive/upload.

Paulo definiu uma regra permanente: ao fechar modificacoes significativas em app iOS, o agente deve testar funcionalidades no app instalado e enviar o novo build para TestFlight/App Store Connect. Ver [[04_Areas/Coding/Best Practices/iOS Functional QA And TestFlight Closure Standard]].

> 🚨 **Se o app foi REJEITADO pela Apple e voce esta vindo aqui pra resubmeter:** PARE. Leia [[04_Areas/Coding/Checklists/Apple Reject Resolution Audit Checklist]] PRIMEIRO. Reject literal cobre ~30% do real problem space — audit completo evita iteracao custosa.

## Answer First

O caminho mais confiavel para Paulo hoje e:

1. Usar o lane/script existente do repo.
2. Autenticar com App Store Connect API key, nao Apple ID/2FA.
3. Usar signing de distribuicao (`Apple Distribution`) e export/upload `app-store-connect`.
4. Validar build/signing/icon antes do upload.
5. Confirmar que o build apareceu e ficou `VALID` no App Store Connect.

Para fechamento de mudanca iOS, upload TestFlight e parte do Definition of Done. Submit for Review continua sendo passo separado.

Nao fazer:

- nao escrever JWT custom em Python/Node quando Fastlane/Xcode/Transporter ja resolvem;
- nao pedir `.p8` ao Paulo se o inventario mostra o caminho local/secret manager;
- nao usar development signing/device provisioning para upload App Store;
- nao confundir upload/TestFlight com submit for review;
- nao marcar mudanca iOS significativa como concluida sem QA funcional instalada e upload TestFlight, salvo excecao explicita;
- nao colar private key, token ou certificado em Markdown/chat.

## Required Context

Antes de agir, ler:

- [[04_Areas/Coding/Checklists/Apple Developer And App Store Connect Inventory]]
- [[04_Areas/Coding/Checklists/iOS App Preflight Checklist]]
- [[04_Areas/Coding/Best Practices/iOS Functional QA And TestFlight Closure Standard]]
- [[04_Areas/Coding/Checklists/Platform Mobile iOS Checklist]]
- [[04_Areas/Coding/Checklists/Secrets And API Keys Register]]
- [[99_System/Security And Secrets Policy]]
- Nota do projeto em [[02_Projects/Projects Index]]
- Historico do projeto em [[03_AI-Chats/AI Chats Index]]

## Known Apple Config Metadata

| Item | Valor |
|---|---|
| Team ID | `8ULNGWJZ6B` |
| App Store Connect Issuer ID | `20a81f12-b22c-4ff8-8b33-c1e5e411a24b` |
| App Store Connect API Key ID | `95ULBVD2BW` |
| Canonical local private key path | `~/.appstoreconnect/private_keys/AuthKey_95ULBVD2BW.p8` |
| Legacy local key path seen in history | `~/Downloads/AuthKey_95ULBVD2BW.p8` |

The `.p8` value is secret. It must never be printed, copied into Markdown, committed or pasted into an LLM chat.

## Choose The Upload Path

| Repo pattern | Prefer this command | Notes |
|---|---|---|
| Capacitor/Next repo with `script/build_ios.sh` and `package.json` script `ios:upload` | `npm run ios:upload` | Known working pattern from `fifa2026bolao`; uses `xcodebuild -exportArchive` with `ios/UploadOptions.plist`. |
| Native iOS repo with `fastlane/Fastfile` lane `local_beta` | `ASC_ISSUER_ID=20a81f12-b22c-4ff8-8b33-c1e5e411a24b bundle exec fastlane local_beta` | Known working pattern from `fashioncore` and `mytone-app`; uses `app_store_connect_api_key`, `sigh`, `gym/build_app`, `pilot/upload_to_testflight`. |
| Repo with CI/match setup | `bundle exec fastlane beta` | Only when `MATCH_GIT_URL`, `MATCH_PASSWORD`, `APPLE_TEAM_ID`, `ASC_KEY_ID`, `ASC_ISSUER_ID`, and key content/path are configured in secret manager. |
| No lane/script exists | Create a repo-local Fastlane lane first, then upload | Do not run ad hoc commands repeatedly without encoding the known-good lane. |
| Manual fallback | Xcode Organizer or Transporter | Use when automation is blocked by signing/profile/account permissions. |

## Preflight Commands

Run from the repo root unless the project note says otherwise.

```bash
xcodebuild -version
security find-identity -v -p codesigning | rg "Apple Distribution|8ULNGWJZ6B" || true
test -f ~/.appstoreconnect/private_keys/AuthKey_95ULBVD2BW.p8
```

For Capacitor/Next:

```bash
npm run lint
npm run build
npm run ios:sync
plutil -p ios/UploadOptions.plist
```

Expected `ios/UploadOptions.plist` shape:

```text
destination = upload
method = app-store-connect
teamID = 8ULNGWJZ6B
signingStyle = automatic or manual
uploadSymbols = true
```

For native/Fastlane:

```bash
cd ios  # or apps/ios, depending on repo
bundle config set path vendor/bundle
bundle install
bundle exec fastlane lanes
ASC_ISSUER_ID=20a81f12-b22c-4ff8-8b33-c1e5e411a24b bundle exec fastlane local_beta
```

For XcodeGen repos:

```bash
cd apps/ios
xcodegen
xcodebuild -list -project *.xcodeproj
```

## Icon A
...[truncated]

## 04_Areas/Marketing/Marketing MOC.md

---
type: moc
area: marketing
tags:
  - marketing
  - creative-os
  - video
  - pierrondi-dev
---
# Marketing MOC

Este e o centro de operacao para criativos, videos curtos, campanhas, legendas, voz, distribuicao social e aprendizado de marketing.

## Pierrondi.dev

- [[04_Areas/Marketing/Pierrondi.dev Creative Video OS]]
- [[04_Areas/Marketing/Creative Forge UGC Video Production OS]]  ← local UGC ad pipeline, M5 Max, ~$0.02/peça
- [[04_Areas/Marketing/Social Video Ad Trends 2026]]  ← hook templates + formats que estão batendo · revalidar a cada 6 semanas
- [[04_Areas/Marketing/ElevenLabs Voice And Subtitle Workflow]]
- [[04_Areas/Marketing/Social Video Platform Specs 2026]]
- [[04_Areas/Marketing/Creative QA Checklist]]
- [[04_Areas/Marketing/Creative Prompt Starters]]
- [[04_Areas/Marketing/Creative Learning Loop]]
- [[04_Areas/Marketing/Marketing Growth Backlog]]
- [[04_Areas/Marketing/Creative Pipeline Secrets Inventory]]

## App Marketing / ASA

- [[04_Areas/Marketing/Ready App Campaign Factory Procedure]]
- [[04_Areas/Marketing/Ready Apps Sales Effectiveness Scorecard]]
- [[04_Areas/Marketing/Apple Connect Ready Apps Campaign Matrix]]
- [[04_Areas/Marketing/App Marketing Intelligence OS]]
- [[04_Areas/Marketing/iOS App Paid Growth Execution OS]]
- [[04_Areas/Marketing/Apple Ads ASA Tuning Runbook]]
- [[04_Areas/Marketing/App Marketing Metrics Inventory]]
- [[04_Areas/Marketing/App Marketing Daily Tuning Report]]
- [[04_Areas/Marketing/App Marketing Tuning Backlog]]
- [[04_Areas/Marketing/TikTok Financial Ads Compliance Runbook]]

## Product / Revenue

- [[04_Areas/Product/Product Revenue MOC]]
- [[04_Areas/Product/Nightly Opportunity Engine]]
- [[04_Areas/Product/Nightly Opportunity Report]]

## Projeto

- [[02_Projects/pierrondi-ia]]
- Repo: `/Users/paulopierrondi/Projects/pierrondi-ia`
- Studio: `/studio/videos`, `/studio/creatives`, `/studio/creatives/factory`, `/studio/campaigns`, `/studio/topics`, `/studio/approvals`, `/studio/health`

## Regra

### Regra de ouro — LinkedIn

- **Ate Paulo dizer explicitamente o contrario, LinkedIn e canal exclusivo de ServiceNow.**
- Nao criar, agendar, aprovar, publicar ou sugerir LinkedIn sobre temas genericos de IA, n8n, WhatsApp, freelancing, automacao para PMEs, produto digital, apps consumer, lifestyle ou build-in-public.
- Temas permitidos para LinkedIn: ServiceNow, Now Assist, AI Agents na ServiceNow, CSDM, CMDB, ITSM/ITOM/SPM, Workflow Data Fabric, AI Control Tower, K26, arquitetura de plataforma ServiceNow, demos ServiceNow, Bradesco/FSI quando apropriado.
- Qualquer excecao precisa de confirmacao explicita do Paulo no momento da execucao. Silencio, ambiguidade ou backlog antigo nao autoriza excecao.
- Antes de agendar/publicar LinkedIn, verificar fila futura e bloquear conteudo fora de ServiceNow.

Todo pedido de criativo deve gerar um pacote, nao apenas uma peca:

- brief;
- roteiro;
- voz;
- legendas;
- visual/b-roll;
- versoes por canal;
- copy de publicacao;
- QA;
- aprendizado/metricas.

### Regra de ouro — Video ads para qualquer app

- Todo ad de app, UGC ou nao UGC, deve passar pelo fluxo nativo `Creative Video Factory` do Pierrondi IA Studio antes de geracao, upload ou publicacao.
- Tela canonica: `/studio/creatives/factory`.
- API canonica: `/api/marketing-os/content-factory/creative-video`.
- Engine canonica: `/Users/paulopierrondi/Projects/pierrondi-ia/lib/marketing-os/content-factory/creative-video-factory.ts`.
- O app standalone `creative-video-factory` e os artefatos do `investcoach_ai` sao biblioteca/prototipo historico, nao a fonte de verdade.
- Primeiro perguntar e registrar: canal principal (`TikTok`, `Instagram`, `LinkedIn`, `YouTube`), objetivo, pago/organico, tela real do app, hook dos 2 primeiros segundos e angulo de venda.
- Sempre que possivel, capturar demo real via Xcode/iOS Simulator antes de usar b-roll generico. A prova de produto deve vir antes de UGC, avatar, Veo ou Pexels.
- O pacote minimo por ad group pago e 4 videos: app real/problema, IA/interface, feature proof, trust/compliance.
- Stack premium preferida: demo real do produto + Veo/Gemini para b-roll + ElevenLabs para voz + Pexels como fallback/complemento.
- Para LinkedIn, manter a regra existente: canal exclusivo de ServiceNow salvo excecao explicita do Paulo.

### Regra de ouro — Paid marketing

- Apple Ads / ASA, Meta, TikTok, YouTube, LinkedIn Ads ou qualquer canal pago podem gerar diagnostico e recomendacao diaria.
- Nenhum agente pode pausar, aumentar budget, mudar bid, criar campanha, publicar criativo pago ou alterar target CPA sem aprovacao explicita do Paulo.
- O vault guarda metricas agregadas, decisoes e hipoteses; segredos de API/OAuth ficam fora do vault.
- Para apps financeiros ou IA financeira no TikTok, `TikTok Financial Ads Compliance Runbook` e preflight obrigatorio antes de upload, duplicacao, edicao, submit ou refresh criativo.

## Templates

- [[06_Templates/Creative Brief]]


## 04_Areas/Marketing/Pierrondi.dev Creative Video OS.md

---
type: operating-system
area: marketing
project: pierrondi-ia
tags:
  - pierrondi-dev
  - creative-os
  - video
  - social
---
# Pierrondi.dev Creative Video OS

## Objetivo

Criar criativos e videos de marketing de alta qualidade para Pierrondi.dev e produtos do portfolio, com um workflow repetivel para LinkedIn, YouTube Shorts, TikTok, Instagram/Reels e campanhas pagas.

O output bom nao e "um video". E um pacote de campanha com roteiro, voz, legendas, assets, variacoes por canal, QA e aprendizado.

## Regra de ouro — LinkedIn

- **LinkedIn fica 100% restrito a ServiceNow ate Paulo dizer explicitamente o contrario.**
- Nao usar LinkedIn para campanhas genericas de IA, n8n, WhatsApp, automacao para PME, freelancing, produto digital, apps consumer ou build-in-public.
- LinkedIn pode usar apenas: ServiceNow, Now Assist, AI Agents na ServiceNow, CSDM, CMDB, ITSM/ITOM/SPM, Workflow Data Fabric, AI Control Tower, K26, arquitetura/demos ServiceNow e Bradesco/FSI quando fizer sentido.
- Se um roteiro/copy/video nao passa nesse filtro, gerar para outro canal ou deixar como rascunho nao agendado; nunca agendar/publicar em LinkedIn.

## Fonte de verdade no repo

- Repo: `/Users/paulopierrondi/Projects/pierrondi-ia`
- Creative Video Factory: `/Users/paulopierrondi/Projects/pierrondi-ia/docs/marketing-os/creative-video-factory.md`
- Studio: `/studio/creatives/factory`
- API: `/api/marketing-os/content-factory/creative-video`
- Engine: `/Users/paulopierrondi/Projects/pierrondi-ia/lib/marketing-os/content-factory/creative-video-factory.ts`
- Creative engine runbook: `/Users/paulopierrondi/Projects/pierrondi-ia/docs/marketing/creative-engine-test-runbook.md`
- Criativos curados: `/Users/paulopierrondi/Projects/pierrondi-ia/assets/creatives/post-images/`
- Background videos: `/Users/paulopierrondi/Projects/pierrondi-ia/assets/video-backgrounds/`
- API force video: `/api/marketing-os/force-video`
- Preflight: `/api/marketing-os/video/preflight`

## Regra de ouro — Creative Video Factory

- Todo pedido de video para TikTok, Instagram/Reels, YouTube Shorts, LinkedIn, UGC ou app ads deve passar por `/studio/creatives/factory`.
- A API canonica e `/api/marketing-os/content-factory/creative-video`; novos apps e coders devem chamar esse endpoint, nao criar pipelines standalone.
- O standalone `creative-video-factory` e os assets do InvestCoach ficam como biblioteca/prototipo historico.
- Perguntar sempre: canal, objetivo, pago/organico, tela real do app, hook dos 2 primeiros segundos e angulo de venda.
- Para ad group pago, planejar no minimo 4 videos: app real/problema, IA/interface, feature proof e trust/compliance.
- Sempre que possivel, usar Xcode/iOS Simulator para demo real antes de Veo, Pexels, avatar ou stock.
- Stack premium: demo real + Veo/Gemini para b-roll + ElevenLabs para voz + Pexels como fallback/complemento.
- Apps financeiros: vender organizacao, clareza, educacao e controle; nunca oportunidade financeira, lucro, renda extra, retorno, enriquecimento ou compra/venda de ativos.

## Pipeline atual

1. Brief do tema, publico, oferta e canal.
2. Script generator cria hook, corpo, CTA, b-roll keywords e UTMs.
3. Agent council revisa clareza, promessa, risco, canal e qualidade.
4. ElevenLabs gera voz com timestamps.
5. Captions convertem timestamps em palavras e ASS karaoke.
6. Visual usa criativos curados primeiro, background videos depois, Pexels como fallback.
7. Render FFmpeg local gera MP4 1080x1920.
8. Creatomate fica como backend premium opcional.
9. QA valida duracao, audio, legenda, safe zone, black frames, CTA, links e formato.
10. Publicacao fica em draft/review/approval antes de ir para canal externo.
11. Metricas entram no aprendizado para remix.

## Regra de qualidade

- Primeiro frame precisa explicar por que parar o scroll.
- Primeiros 2 segundos precisam ter tese, contraste ou prova.
- O roteiro precisa soar falado, nao escrito.
- Legenda precisa ser legivel sem audio e sem cobrir UI do canal.
- Voz precisa combinar com o canal: LinkedIn mais autoridade, TikTok/Reels mais ritmo, YouTube Shorts mais clareza e retenção.
- B-roll precisa reforcar a ideia; se for generico, melhor usar screen/product proof.
- Cada peca precisa ter um unico CTA.
- Nao publicar sem approval quando houver canal externo.

## Formatos canonicos

- Master vertical: MP4 H.264/AAC, 1080x1920, 30fps, 9:16.
- Feed vertical/crop: 1080x1350, 4:5.
- Square fallback: 1080x1080, 1:1.
- LinkedIn professional cut: 9:16 ou 4:5, com SRT sidecar quando possivel.
- Shorts/TikTok/Reels: 9:16, legendas burned-in, safe zones respeitadas.

## Duracao recomendada por intencao

- Prova rapida: 12-20s.
- Hook + tese + CTA: 20-35s.
- Mini tutorial: 35-60s.
- Story/problem-solution: 45-90s.
- YouTube Shorts longo: ate 3 min quando a historia realmente precisa, mas evitar se houver risco de musica/Content ID.

## Assets primeiro, IA depois

O pipeline deve consultar assets curados antes de gerar asset novo:

- imagem/post: `assets/creatives/po
...[truncated]

## 04_Areas/Marketing/ElevenLabs Voice And Subtitle Workflow.md

---
type: workflow
area: marketing
tags:
  - elevenlabs
  - subtitles
  - captions
  - tts
  - video
---
# ElevenLabs Voice And Subtitle Workflow

## Objetivo

Gerar voz natural e legendas sincronizadas para videos de marketing, sem perder qualidade, acessibilidade ou controle de seguranca.

## Fluxo recomendado

1. Escrever roteiro falado, curto e com pausas naturais.
2. Escolher voz por objetivo: founder, autoridade tecnica, energia social, corporate ou analitica.
3. Gerar TTS no ElevenLabs usando endpoint com timestamps.
4. Salvar audio como asset do render, nunca em Markdown.
5. Converter timestamps por caractere para timings por palavra.
6. Gerar dois tipos de legenda:
   - ASS burned-in karaoke para Shorts/TikTok/Reels.
   - SRT sidecar para YouTube e LinkedIn.
7. Renderizar MP4 1080x1920 com FFmpeg local.
8. Rodar QA de sincronia, legibilidade e safe zone.
9. Registrar no projeto: voice slug, roteiro, caminhos de assets, render ID e aprendizados.

## ElevenLabs no repo

- Adapter: `/Users/paulopierrondi/Projects/pierrondi-ia/lib/marketing-os/voice/elevenlabs.ts`
- Captions: `/Users/paulopierrondi/Projects/pierrondi-ia/lib/marketing-os/video/captions.ts`
- Env vars:
  - `ELEVENLABS_API_KEY`
  - `ELEVENLABS_PAULO_VOICE_ID`
  - `JARVIS_ELEVENLABS_VOICE_ID`
  - `ELEVENLABS_DEFAULT_VOICE_ID`

## Regras de roteiro para voz

- Escrever como fala: frases curtas, sem paragrafo longo.
- Evitar siglas sem explicar na primeira vez.
- Colocar pausa onde o video precisa respirar.
- Nao pedir "voz viral"; pedir emocao operacional: calmo, urgente, professoral, provocativo, executivo, founder-led.
- Para PT-BR: revisar acentos, nomes proprios, pronuncia de siglas e palavras inglesas.
- Para EN: evitar literalismo do portugues; reescrever a ideia.

## Legendas

### Burned-in

Use em TikTok, Reels e Shorts quando a retencao depende de ler sem audio.

- 1 ou 2 linhas.
- Janela curta de 3 a 5 palavras.
- Contraste forte e outline.
- Nao ocupar topo com hooks longos.
- Evitar rodape baixo: UI do TikTok/Reels/Shorts cobre a area inferior.
- Usar highlights com parcimonia: uma palavra ativa por vez e suficiente.

### Sidecar

Use como arquivo separado quando a plataforma aceita closed captions.

- YouTube: SRT e VTT sao formatos aceitos; SRT UTF-8 e o default simples.
- LinkedIn: usar SRT simples; nao depender de cor, fonte ou markup.
- Manter o SRT master junto do render e registrar o path.

## Conversao de timing

ElevenLabs retorna `alignment` e `normalized_alignment` com timestamps por caractere. O pipeline deve:

1. preferir `normalized_alignment` quando texto foi normalizado;
2. agrupar caracteres nao-espaco em palavras;
3. usar inicio do primeiro caractere e fim do ultimo;
4. snapar cortes para limites de palavra;
5. validar que o ultimo timestamp fica perto da duracao real do audio.

## QA de voz

- [ ] Voz nao parece leitura monotona.
- [ ] Nomes proprios e termos tecnicos corretos.
- [ ] Pacing cabe no tempo alvo.
- [ ] Sem respiracao, riso ou tag textual renderizada por acidente.
- [ ] Audio sem clipping.
- [ ] Legenda bate com a fala.
- [ ] CTA falado e visivel.
- [ ] Sem uso de voz clonada sem consentimento.

## Referencias oficiais

- ElevenLabs timestamps API: https://elevenlabs.io/docs/api-reference/text-to-speech/convert-with-timestamps
- YouTube caption file formats: https://support.google.com/youtube/answer/2734698
- LinkedIn video captions specs: https://www.linkedin.com/help/linkedin/answer/a424737



## 04_Areas/Marketing/Social Video Platform Specs 2026.md

---
type: reference
area: marketing
tags:
  - platform-specs
  - video
  - linkedin
  - youtube
  - tiktok
  - instagram
---
# Social Video Platform Specs 2026

Verificado em 2026-05-15 com fontes oficiais. Specs mudam; revalidar antes de campanha paga grande.

## Master recomendado

Use este master sempre que possivel:

- MP4
- H.264 video
- AAC audio
- 1080x1920
- 9:16
- 30fps
- legendas burned-in para short-form
- SRT sidecar para canais que aceitam caption upload

## YouTube Shorts

- Square ou vertical ate 3 minutos e classificado como Shorts.
- Upload via YouTube app ou YouTube Studio.
- Se tiver Content ID claim e durar mais de 1 minuto, pode ser bloqueado globalmente.
- Recomendo: 15-60s para performance; usar 60-180s somente quando a historia precisa.
- Caption: SRT simples ou VTT; manter master SRT.

## TikTok

- Recomendado: vertical 9:16.
- Non-Spark ads suportam 9:16, 16:9 e 1:1; vertical recomendado.
- Minimo vertical oficial: >= 540x960.
- Formatos: MP4, MOV e outros aceitos para ads.
- Tamanho: ate 500 MB para in-feed ads.
- Duração de ads Non-Spark: ate 10 minutos; Spark Ads puxa specs do video organico.
- Direct Post API exige consentimento explicito e clients nao auditados ficam restritos a private mode.
- Recomendo criativo organico/pago: 15-45s, key message dentro de safe zone.

## Instagram / Reels / Meta

- Reels aceitam proporcao entre 1.91:1 e 9:16.
- Minimo oficial: 30 FPS e resolucao minima de 720px.
- Para Reels ads, Meta recomenda criativos 9:16 com audio e key elements em safe zone.
- Recomendo: 1080x1920, 9:16, audio claro, legendas burned-in, CTA visual acima da UI inferior.
- Cover Reels: referencia oficial 420x654.

## LinkedIn

- Video ads: MP4.
- File size: 75 KB a 500 MB.
- Codec: H.264 ou VP8.
- Audio: AAC ou MPEG4.
- Frame rate: menor que 30 FPS segundo spec oficial de ads.
- Captions: SRT, somente texto; nao contar com cor, fonte ou markup.
- Videos menores que 30s podem loopar ate completar 30s de playback.
- Video precisa ser upload direto no LinkedIn, nao link do YouTube/Vimeo.
- Recomendo: 20-45s para founder/proof, 45-90s para tutorial executivo.

## Export matrix

| Canal | Export principal | Legenda | Melhor uso |
|---|---|---|---|
| YouTube Shorts | 1080x1920 MP4 | Burned-in + SRT | prova, tutorial, narrativa |
| TikTok | 1080x1920 MP4 | Burned-in | hook agressivo, trend, discovery |
| Instagram Reels | 1080x1920 MP4 | Burned-in | visual proof, social proof, product story |
| LinkedIn | 1080x1920 ou 1080x1350 MP4 | SRT + opcional burned-in leve | autoridade, case, tese B2B |
| LinkedIn feed image/carousel | 1080x1350 PNG/JPG | texto no card | resumo, framework, prova |

## Safe-zone padrao

- Manter textos e rosto/produto entre y=220 e y=1500 no master 1080x1920.
- Evitar CTA no rodape.
- Nao colocar texto essencial perto de bordas laterais.
- Testar primeiro frame como thumbnail.

## Referencias oficiais

- YouTube Shorts 3 minutos: https://support.google.com/youtube/answer/15424877
- YouTube caption formats: https://support.google.com/youtube/answer/2734698
- TikTok In-Feed Ads specs: https://ads.tiktok.com/help/article/tiktok-auction-in-feed-ads
- TikTok Direct Post API: https://developers.tiktok.com/doc/content-posting-api-reference-direct-post
- Instagram Reels size/aspect ratio: https://www.facebook.com/help/1038071743007909
- Meta Reels ads guidance: https://www.facebook.com/business/ads/facebook-instagram-reels-ads
- LinkedIn video ad specs: https://www.linkedin.com/help/linkedin/answer/a424737



## 04_Areas/Marketing/Creative QA Checklist.md

---
type: checklist
area: marketing
tags:
  - qa
  - creative
  - video
  - social
---
# Creative QA Checklist

## Antes de gerar

- [ ] Objetivo claro: awareness, leads, prova, produto, retargeting, authority.
- [ ] Canal primario definido: TikTok, Instagram, LinkedIn ou YouTube.
- [ ] Perguntas obrigatorias respondidas: canal, objetivo, pago/organico, tela real do app, hook e angulo.
- [ ] Produto/oferta e CTA definidos.
- [ ] Publico e dor especificos.
- [ ] Prova ou demo real escolhida; para app iOS, preferir Xcode/iOS Simulator sempre que possivel.
- [ ] Assets obrigatorios listados.
- [ ] Riscos de marca/compliance revisados.
- [ ] Nenhum segredo ou PII em screenshots/assets.
- [ ] Se for app do portfolio, manifest criado no `Creative Video Factory` nativo do Pierrondi IA Studio (`/studio/creatives/factory` ou API `/api/marketing-os/content-factory/creative-video`).
- [ ] Para ad group pago, existem 4 videos planejados/ativos: app real/problema, IA/interface, feature proof e trust/compliance.
- [ ] Se usar Veo/Gemini, ElevenLabs ou Pexels, eles complementam uma prova de produto real; nao substituem demo real quando ela e possivel.

## Script

- [ ] Hook nos primeiros 2 segundos.
- [ ] Uma tese principal, nao tres.
- [ ] Linguagem falada.
- [ ] CTA unico.
- [ ] Duracao estimada bate com o canal.
- [ ] Sem promessa que produto nao entrega.
- [ ] Sem claims de resultado sem prova.
- [ ] Para finanças/TikTok, sem linguagem de oportunidade, lucro, renda extra, retorno, enriquecimento ou compra/venda de ativos.

## Voz

- [ ] Voice slug escolhido.
- [ ] Pacing escolhido: slow, normal ou fast.
- [ ] Pronuncia de nomes e siglas revisada.
- [ ] Audio sem clipping.
- [ ] Voz combina com canal.
- [ ] Voz clonada tem consentimento e uso permitido.

## Legendas

- [ ] Burned-in legivel no celular.
- [ ] SRT gerado quando canal aceita caption upload.
- [ ] Sincronia palavra/fala validada.
- [ ] Texto dentro de safe zone.
- [ ] Sem legenda cobrindo CTA, rosto, produto ou UI importante.

## Visual

- [ ] Usa produto real, screenshot, demo Xcode/iOS Simulator ou b-roll relevante.
- [ ] O primeiro frame prova o produto, o hook ou o problema sem parecer stock generico.
- [ ] Criativos curados foram verificados antes de gerar via IA.
- [ ] Background videos locais foram verificados antes de Pexels.
- [ ] Primeiro frame funciona como thumbnail.
- [ ] Nenhum frame todo preto/branco ou quebrado.
- [ ] Sem stock generico quando a peca precisa provar algo.

## Export

- [ ] MP4 H.264/AAC.
- [ ] 1080x1920 para short-form.
- [ ] 1080x1350 ou 1080x1080 gerado se feed precisar.
- [ ] Duracao dentro do alvo.
- [ ] File size dentro do canal.
- [ ] SRT/VTT salvo quando aplicavel.
- [ ] Caminhos de output registrados.

## Publicacao

- [ ] Approval gate criado quando externo.
- [ ] Copy por canal revisada.
- [ ] Copy digitada na plataforma revisada contra typos antes de submit.
- [ ] UTM correto.
- [ ] Thumbnail/capa validada.
- [ ] Canal/conector pronto.
- [ ] Se TikTok Direct Post ainda nao auditado, tratar como draft/private/native completion.
- [ ] Para TikTok financeiro, [[04_Areas/Marketing/TikTok Financial Ads Compliance Runbook]] concluido.
- [ ] Se conteudo tiver IA, checkbox/rotulo AI-generated marcado e assets correspondentes selecionados.

## Aprendizado

- [ ] Hipotese do criativo registrada.
- [ ] Canal e variacao registrados.
- [ ] Metricas de 24h, 72h e 7d planejadas.
- [ ] O que remixar definido.
- [ ] Aprendizado registrado em [[04_Areas/Marketing/Creative Learning Loop]].


## 04_Areas/Marketing/Creative Prompt Starters.md

---
type: prompt-library
area: marketing
tags:
  - prompts
  - creative
  - video
  - social
---
# Creative Prompt Starters

Use estes prompts com Codex, Claude Code, Kimi, Gemini ou dentro do Studio. Sempre peça pacote completo, nao peca "um post".

## Criativo completo

```text
Use o vault e o repo pierrondi-ia. Leia:
- 04_Areas/Marketing/Pierrondi.dev Creative Video OS.md
- 04_Areas/Marketing/ElevenLabs Voice And Subtitle Workflow.md
- 04_Areas/Marketing/Social Video Platform Specs 2026.md
- 04_Areas/Marketing/Creative QA Checklist.md
- 02_Projects/pierrondi-ia.md
- /Users/paulopierrondi/Projects/pierrondi-ia/docs/marketing-os/video-render-pipeline.md

Crie um pacote de criativo para:
Produto/oferta: <produto>
Canal primario: <linkedin | youtube_shorts | tiktok | instagram_reels>
Canais secundarios: <...>
Publico: <quem>
Dor: <dor>
Prova/demo: <prova>
CTA: <cta>
Idioma: <pt-BR | en>
Duracao alvo: <15s | 30s | 45s | 60s>
Tom: <founder-led, tecnico, provocativo, executivo, tutorial>

Entregue:
1. brief
2. 5 hooks
3. roteiro final falado
4. direcao de voz ElevenLabs
5. legenda/caption plan
6. b-roll/screenshot plan
7. export targets
8. copy por canal
9. checklist de QA
10. aprendizado esperado e metricas para acompanhar

Nao publique. Nao use segredos. Se precisar de API key, cite apenas o nome da env var.
```

## YouTube Shorts

```text
Crie um YouTube Shorts para <tema>. Target 35-60s, 1080x1920, hook em 2s, roteiro falado, CTA unico e SRT sidecar. Use voz founder se fizer sentido. Gere tambem titulo, descricao com UTM, 3 thumbnails textuais e plano de remix caso retenção caia antes de 5s.
```

## TikTok/Reels

```text
Crie uma versao TikTok/Reels para <tema>. Target 15-35s, visual proof antes de explicacao, captions burned-in, safe zone vertical, ritmo mais rapido e linguagem menos corporativa. Entregue 3 aberturas alternativas e uma versao "menos polida, mais nativa".
```

## LinkedIn

Regra obrigatoria: LinkedIn e exclusivo para ServiceNow ate Paulo dizer explicitamente o contrario. Prompts LinkedIn devem tratar de ServiceNow, Now Assist, AI Agents na ServiceNow, CSDM, CMDB, ITSM/ITOM/SPM, Workflow Data Fabric, AI Control Tower, K26, demos/arquitetura ServiceNow ou Bradesco/FSI. Nao gerar LinkedIn para IA generica, n8n, WhatsApp, freelancing, automacao PME, produto digital, apps consumer ou build-in-public.

```text
Crie uma versao LinkedIn para <tema>. Target 30-60s, tom founder/executivo, prova concreta, sem hype. Entregue video script, SRT simples, copy do post, headline, CTA e 3 comentarios de follow-up que Paulo pode postar depois.
```

## Creative remix

```text
Pegue o criativo abaixo e gere 5 remixes mudando apenas um eixo por vez:
1. hook
2. prova
3. visual
4. CTA
5. pacing/voz

Preserve a tese principal. Para cada remix, diga por que pode performar melhor e qual metrica validaria.

Criativo atual:
<colar resumo ou path>
```

## Pedir execucao no repo

```text
No repo /Users/paulopierrondi/Projects/pierrondi-ia, use o pipeline existente de video factory. Antes de mexer, rode/consulte o preflight do video. Gere apenas draft/review, sem publicar automaticamente. Use RENDER_BACKEND=ffmpeg como default e registre output paths, renderId, scriptId, custos, blockers e proximos passos no vault.
```

## Kimi Claw - radar diario de video ads

2026-05-18: prompt operacional criado para tarefa diaria no Kimi Claw as 22:40, com pesquisa avancada de video ads por plataforma, ranking de tendencias, matriz de IA por custo-beneficio, prompts por ferramenta e backlog de criativos. Arquivo: `/Users/paulopierrondi/Documents/Codex/2026-05-18/quero-um-prompt-para-o-kimi-2/kimi-claw-daily-video-ads-intelligence-prompt.md`.

2026-05-19: prompt ampliado para Kimi Claw / Kimi CLI como `Kimi Growth War Room`, cobrindo pesquisa ampla de marketing digital, comunidades, ferramentas/agentes, ASO/ASA, App Store, melhoria de apps por receita, pacotes de campanha, criativos, posts e escrita segura no vault. Arquivo: `/Users/paulopierrondi/Documents/Codex/2026-05-19/me-da-um-super-maximo-prompt/kimi-claw-marketing-growth-superprompt.md`.


## 04_Areas/Marketing/Marketing Growth Backlog.md

---
type: backlog
area: marketing
tags:
  - marketing
  - growth
  - creative
  - backlog
---
# Marketing Growth Backlog

Backlog noturno para transformar projetos, aprendizados e assets em marketing executavel.

## Regra de ouro — LinkedIn

- LinkedIn e exclusivo para ServiceNow ate nova ordem explicita do Paulo.
- Ideias fora de ServiceNow devem ir para X, Shorts, TikTok, Reels, blog, email ou backlog de produto, mas nao para LinkedIn.
- Se uma linha antiga deste backlog sugerir LinkedIn fora de ServiceNow, tratar como obsoleta.

## Growth Moves

| Product/asset | Channel | Hook angle | Proof needed | CTA | Metric | Status |
|---|---|---|---|---|---|---|
| pierrondi.ia creative workflow | site/email/Shorts | "I can turn one product idea into a full creative package" | screen recording + output examples | book a productized creative sprint | leads | candidate |
| CSDM/Data Quality Analyzer | LinkedIn | "Your CMDB quality problem is measurable before it is political" | anonymized report screenshot | request sample assessment | qualified conversations | candidate |
| ppt_engine | YouTube Shorts/GitHub/blog | "Executive decks should be generated from structured thinking, not slides first" | before/after deck demo | join waitlist/request template | signups | candidate |
| App Store Launch Copilot | SEO/GitHub/blog | "Every iOS rejection becomes a reusable checklist" | checklist screenshots + examples | download checklist | downloads | candidate |
| FaithSchool/family copilot | Instagram/Reels/SEO | "One parent workflow to reduce weekly homeschool chaos" | product walkthrough | early access | waitlist | candidate |
| MyTone | TikTok/Reels/Meta | "Your iPhone ringtone does not have to sound like 2009" | real screen recording: import -> AI hook -> export | download on App Store after approval | install -> export -> purchase | submitted-review |
| Aura | TikTok/Reels/Meta | "Uma afirmação para ouvir, não para ler" | real app audio + player + practice flow | download on App Store after approval | install -> first listen -> trial/purchase | submitted-review |
| Adivinha | TikTok/Reels/Stories | "Acerte a musica brasileira do dia em 6 trechos" | real gameplay + share card | download after App Store approval | install -> first game -> share | submitted-review |
| InvestCoach.AI | TikTok Ads/Reels after approval | "Quanto guardar por mês para chegar em uma meta?" | iOS 1.0.3 build 13 approval + real goal-planner onboarding proof + compliant voiceover | App Store BR URL after manual release | install -> plan_created -> trial | waiting-review-1.0.3-build-13 |
| pierrondi.dev creative sprint proof | site + Shorts | "One idea -> full creative package in 48h" | Muse/InvestCoach asset walkthrough (site-only, not LinkedIn) | book a creative sprint via pierrondi.dev | site form submissions | candidate |
| Apple Ads / ASA daily tuning | internal report | "Before any budget change, the CSV must be on disk" | per-app CSV pulled into `App Marketing Metrics Inventory` | gate for budget changes | budget-change gate pass rate | candidate |
| FaithSchool US paid learning sprint | Apple Ads + TikTok/Reels proof clips | "Plan the homeschool week without rebuilding it from scratch" | Apple Ads export + US product-page/onboarding audit + screen recording | download/try on App Store after page audit | install -> plan_created -> lesson_generated -> trial | candidate-first |
| Muse Edit creative QA sprint | TikTok/Reels/Meta review package | "Get a real outfit idea from clothes you already own" | existing UGC MP4s + App Store/paywall/tracking check | download on App Store after approval | install -> look_generated -> edit_saved -> purchase | candidate-review |
| FaithSchool post-pause relaunch | TikTok App Promotion / Reels proof clips | "Planeje a semana de estudos sem reconstruir tudo do zero" | v1.0.3 approval + advertiser separation + Events SDK Test Events | download after v1.0.3 approval | install -> plan_created -> lesson_generated -> trial | paused-pending-events |
| App review + paid evidence kit | blog/GitHub/pierrondi.dev | "Every iOS review and ad dollar needs a decision log" | redacted queue template + export-field checklist | download template | downloads -> consult requests | candidate |
| Apple Ads keyword evidence template | GitHub/blog/pierrondi.dev | "Do not touch bids until the keyword report can defend it" | fake-data CSV/API report with decision columns | download template | downloads -> paid audit requests | research |
| Bandle rejection-to-resubmission story | blog/GitHub/internal checklist | "A rejection is only useful after it becomes a checklist" | redacted rejection reason + evidence path + resubmission gate | download review checklist | checklist downloads -> app review consults | candidate |
| ASA export gate proof | internal/reporting template | "Every paid recommendation starts with the export, not the screenshot" | one sanitized Apple Ads CSV template + before/after decision log | use as daily budget-change g
...[truncated]

## 04_Areas/Marketing/Creative Pipeline Secrets Inventory.md

---
type: secrets-inventory
area: marketing
tags:
  - secrets
  - marketing
  - no-secret-values
---
# Creative Pipeline Secrets Inventory

Esta nota registra apenas nomes e finalidade. Nao registrar valores reais.

## Regra

- Valor real fica em Railway env, GitHub Actions Secrets, provider OAuth ou secret manager.
- Vault registra nome, escopo, ambiente e rotacao.
- Nunca colar API key em prompt, Markdown, screenshot, log ou commit.

## Pierrondi.dev video/creative env vars

| Env var | Uso | Onde o valor real deve ficar | Observacao |
|---|---|---|---|
| `ELEVENLABS_API_KEY` | TTS/voice generation | Railway env + local `.env.local` | Necessaria para voz |
| `ELEVENLABS_PAULO_VOICE_ID` | Voz founder | Railway env + local `.env.local` | Nao e segredo forte, mas tratar como config sensivel |
| `JARVIS_ELEVENLABS_VOICE_ID` | Voz Jarvis | Railway env | Opcional |
| `ELEVENLABS_DEFAULT_VOICE_ID` | Fallback voice | Railway env | Opcional |
| `PEXELS_API_KEY` | B-roll fallback | Railway env | Pode ser dispensada com background local |
| `CREATOMATE_API_KEY` | Render premium opcional | Railway env | Opcional quando `RENDER_BACKEND=ffmpeg` |
| `CREATOMATE_TEMPLATE_DEFAULT_ID` | Template premium | Railway env | Config |
| `VIDEO_STORAGE_ROOT` | Storage de videos | Railway env/volume | Nao e segredo |
| `VIDEO_SIGNING_SECRET` | URLs assinadas de video | Railway env | Segredo |
| `YOUTUBE_CLIENT_ID` | YouTube OAuth | Railway env | Config/OAuth |
| `YOUTUBE_CLIENT_SECRET` | YouTube OAuth | Railway env | Segredo |
| `YOUTUBE_REFRESH_TOKEN` | YouTube upload | Railway env | Segredo critico |
| `TIKTOK_CLIENT_KEY` | TikTok API | Railway env | Config/OAuth |
| `TIKTOK_CLIENT_SECRET` | TikTok API | Railway env | Segredo |
| `TIKTOK_REFRESH_TOKEN` | TikTok API | Railway env | Segredo critico |
| `TIKTOK_ACCESS_TOKEN` | TikTok API | Railway env | Segredo curto |
| `LINKEDIN_CLIENT_ID` | LinkedIn OAuth | Railway env | Config/OAuth |
| `LINKEDIN_CLIENT_SECRET` | LinkedIn OAuth | Railway env | Segredo |
| `LINKEDIN_AUTHOR_URN` | Autor LinkedIn | Railway env | Config |
| `META_APP_ID` | Instagram/Meta OAuth | Railway env | Config/OAuth |
| `META_APP_SECRET` | Instagram/Meta OAuth | Railway env | Segredo |
| `INSTAGRAM_REDIRECT_URI` | Instagram OAuth | Railway env | Config |
| `MARKETING_OS_TOKEN_ENCRYPTION_KEY` | Criptografia de tokens conectados | Railway env | Segredo critico |
| `CRON_SECRET` | Cron/API gated calls | Railway env | Segredo |

## Rotacao

- Rotacionar tokens de OAuth quando houver erro de refresh, troca de app ou suspeita de vazamento.
- Rotacionar `VIDEO_SIGNING_SECRET`, `CRON_SECRET` e encryption key com plano de migracao.
- Sempre atualizar inventario sem escrever o valor real.

## Links

- [[99_System/Security And Secrets Policy]]
- [[04_Areas/Coding/Checklists/Secrets And API Keys Register]]
- [[04_Areas/Coding/Checklists/Railway Secrets Inventory]]



## 04_Areas/Marketing/App Marketing Intelligence OS.md

---
type: operating-system
area: marketing
status: active
tags:
  - marketing
  - apple-ads
  - asa
  - app-store
  - tuning
---
# App Marketing Intelligence OS

Status: active
Owner: Paulo
Updated: 2026-05-17

## Purpose

Manter um loop diario para apps que rodam ou podem rodar Apple Ads / ASA e outros canais de marketing, com foco em tuning, aprendizado e melhoria do vault.

Este sistema coleta sinais, interpreta performance e gera propostas. Ele nao muda budget, bid, campanha, criativo, publicacao ou segmentacao automaticamente.

## Regra maxima — tracking obrigatorio em todo app

Todo app novo, em desenvolvimento, em review, publicado ou ja em uso precisa nascer e permanecer com tracking de aquisicao pago pronto. Nao existe app "pequeno demais" ou "ainda cedo demais" para isso.

Padrao minimo obrigatorio:

- Mobile iOS/Android: TikTok App Events SDK ou MMP equivalente quando o app puder receber TikTok/Meta/social paid; SKAN/AdServices/ATT/privacy labels coerentes; ownership unico de conversion value; eventos `app_opened/install`, `onboarding_completed`, ativacao principal, `paywall_viewed`, `trial_started`/`purchase_started` e `purchase_completed`/`subscription_started`.
- Web/PWA/landing: TikTok Pixel + Events API quando houver trafego pago/social; UTM capture; dedupe/event_id quando aplicavel; eventos de lead, signup, checkout e purchase.
- Todos os apps: reporting central em `pierrondi-ia` ou inventario equivalente com app, campanha, channel, spend, impressions, clicks/taps, installs/leads, CPA/CPT, trial/purchase/revenue quando existir.
- Todo repo de app deve ter doc ou checklist de tracking dizendo: provider, env var names, eventos, privacy/store impact, Test Events status e ultimo build validado.

Gate duro:

- App novo nao fecha MVP/release sem plano de tracking.
- App existente nao recebe campanha paga nova, budget scale, creative refresh pago ou App Store paid launch sem SDK/pixel/MMP, eventos e reporting validados.
- Se o app ainda nao tem credenciais de provider, registrar o gap e bloquear paid launch ate preencher via secret manager/build env. Nunca escrever segredo no vault.
- Essa regra nao autoriza mutacao de campanha. Budget, bid, target CPA, publicacao, criativo e audiencia continuam exigindo aprovacao humana.

## Daily Inputs

- [[04_Areas/Marketing/App Marketing Metrics Inventory]]
- [[04_Areas/Marketing/iOS App Paid Growth Execution OS]]
- [[04_Areas/Marketing/Apple Ads ASA Tuning Runbook]]
- [[04_Areas/Marketing/App Marketing Daily Tuning Report]]
- [[04_Areas/Marketing/App Marketing Tuning Backlog]]
- [[04_Areas/Marketing/TikTok Financial Ads Compliance Runbook]]
- [[04_Areas/Product/App Refinement Backlog]]
- [[04_Areas/Product/Nightly Opportunity Report]]
- [[04_Areas/Marketing/Marketing Growth Backlog]]
- Notas de projeto em [[02_Projects/Projects Index]]
- App Store / TestFlight / ASC state quando existir nas notas de projeto
- Dados exportados para `98_Attachments/marketing-data`

## Daily Flow

1. Rodar `/Users/paulopierrondi/.local/bin/brain-app-marketing-pulse`.
2. Conferir se existe export recente de Apple Ads / ASA, App Store Connect, RevenueCat, web analytics, TikTok, Meta, YouTube ou LinkedIn.
3. Para cada app, atualizar o status de marketing: ativo, pausado, candidato, bloqueado, sem dados.
4. Gerar recomendacoes de tuning separadas por:
   - TikTok Ads / Meta Ads;
   - Apple Ads / ASA;
   - App Store product page / CPP;
   - ASO metadata;
   - criativos sociais;
   - funil de assinatura/IAP;
   - retencao e eventos in-app.
5. Registrar somente propostas seguras em [[04_Areas/Marketing/App Marketing Tuning Backlog]].
6. Se houver aprendizado reutilizavel, atualizar [[04_Areas/Coding/Best Practices/Learning Inbox]] ou [[04_Areas/Marketing/Creative Learning Loop]].

## Tuning Model

| Layer | Question | Output |
|---|---|---|
| Spend | Onde o dinheiro esta indo? | app/campaign/ad group/keyword com spend, taps, installs |
| Efficiency | O CPA/CPT esta aceitavel? | keep / reduce / investigate |
| Conversion | Onde perde usuario? | product page, paywall, onboarding, offer |
| Creative | Qual promessa visual esta convertendo? | screenshot/video/CPP hypotheses |
| Keyword | Quais termos compram usuario certo? | scale, exact, negative, research |
| Revenue | Instala virou trial/purchase/retention? | ROI hypothesis and missing telemetry |
| Risk | Algo pode gastar sem aprendizado? | budget cap / pause proposal / data gap |

## Guardrails

- Nunca armazenar tokens, OAuth secrets, API keys, cookies ou private keys no vault.
- Nunca alterar budget, bid, target CPA, campanha, keyword, criativo ou publicacao automaticamente.
- Nunca tratar tracking de ads como tarefa opcional em app novo ou existente; se nao houver SDK/pixel/MMP, eventos e reporting, o app fica bloqueado para paid acquisition.
- Nunca publicar em LinkedIn fora da regra ServiceNow-only registrada em [[04_Areas/Marketing/Marketing MOC]].
- Qualquer acao paga vira proposta humana.
- Qualquer dado de usuario deve ficar
...[truncated]

## 04_Areas/Marketing/Apple Ads ASA Tuning Runbook.md

---
type: runbook
area: marketing
status: active
tags:
  - apple-ads
  - asa
  - app-store
  - paid-acquisition
  - tuning
---
# Apple Ads ASA Tuning Runbook

Use este runbook para Apple Ads / Apple Search Ads / ASA.

## Answer First

Para tunar ASA direito, o vault precisa saber diariamente:

- app;
- pais/regiao;
- placement: Search Results, Search tab, Today tab, Product pages;
- campaign;
- ad group;
- keyword/search term;
- spend;
- impressions;
- taps;
- installs;
- TTR;
- CR;
- Avg CPT;
- Avg CPA;
- revenue/trial/purchase quando existir;
- product page / CPP usada;
- mudanca feita e resultado depois.

## Official Metrics To Track

Apple Ads expõe no dashboard metricas como:

| Metric | Use |
|---|---|
| Spend | gasto real |
| Impressions | escala/distribuicao |
| Taps | interesse antes da pagina |
| TTR | qualidade de keyword/ad placement |
| Installs Total / Tap-Through / View-Through | conversao de install |
| New Downloads / Redownloads | aquisicao vs reengajamento |
| CR Total / Tap-Through | eficiencia da pagina/app fit |
| Avg CPT | custo por tap |
| Avg CPA | custo por install/conversao |
| Avg Daily Spend | ritmo de gasto |
| Daily Budget / Target CPA / bid strategy | controle operacional |

## Placement Mapping

Apple Ads aparece em AdAttributionKit como `com.apple.ads`.

| Placement | Campaign ID |
|---|---|
| Search results | `10` |
| Search tab | `20` |
| Today tab | `30` |
| Product pages | `40` |

## Daily Tuning Rules

| Signal | Interpretation | Proposed action |
|---|---|---|
| Spend > 0 and installs = 0 | dinheiro sem conversao | revisar keyword, product page, country, bid, screenshot promise |
| High impressions, low TTR | keyword/ad mismatch | reduzir bid, negativar termo, melhorar metadata/creative |
| High taps, low installs | product page/payoff fraco | testar screenshots, CPP, title/subtitle, reviews, price |
| Low impressions, good CR | falta escala | testar bid maior ou keyword variants |
| High CPA, no revenue signal | risco de gastar no escuro | exigir trial/purchase/retention tracking antes de escalar |
| Generic keyword expensive | pouca intencao | mover para exact/high-intent ou discovery controlado |
| Search Match trazendo lixo | discovery sem limpeza | extrair termos bons e negativar ruins |
| Good keyword, bad paywall | monetizacao bloqueia | ajustar offer, pricing, trial, onboarding |

## Keyword Recommendation Guardrail

Apple Ads keyword recommendations must not be bulk-accepted. Treat the list as a candidate pool, not as approval.

Recommended handling:

- accept only terms with clear user intent, competitor/context fit, or strong ASO adjacency;
- place generic/social/platform terms only in an exact-match discovery ad group with low bid and short review window;
- reject or leave unselected broad utilities, dating, messaging, VPN, search engine and unrelated entertainment terms unless there is explicit product-page rationale;
- record accepted keywords, rejected keywords, campaign, ad group, max CPT and review date;
- do not change campaign status, budget, target CPA or bid scale while accepting recommendations;
- verify the Apple Ads UI shows the target ad group saved before clicking Apply.

For fashion/visual-content apps like Muse Edit, social-intent exact terms can be tested only as controlled discovery. Example: `[instagram]`, `[tiktok]`, `[tik tok]` may be plausible because the app helps create outfit/style content, but they should not be mixed with unrelated broad terms.

## Data Collection Paths

Preferred:

1. Apple Ads Campaign Management API reports.
2. Manual CSV export from Apple Ads dashboard into `98_Attachments/marketing-data`.
3. App Store Connect / RevenueCat / backend analytics to connect install -> trial -> purchase -> retention.

Allowed in vault:

- aggregated metrics;
- campaign names;
- keyword/search term names;
- spend/CPA/CPT/CR;
- decisions and tuning proposals.

Blocked in vault:

- OAuth client secret;
- private key;
- access/refresh token;
- user-level attribution payloads;
- raw PII;
- screenshots with credentials.

## Minimum CSV Export Columns

When exporting manually, include as many of these as possible:

```text
App, Campaign Name, Ad Group Name, Keyword, Search Term, Country or Region,
Ad Placement, Spend, Impressions, Taps, TTR, Installs (Total),
Installs (Tap-Through), Installs (View-Through), CR (Total),
Avg CPT, Avg CPA (Total), Date
```

## Decision Template

```md
### YYYY-MM-DD — app / campaign

- Finding:
- Evidence:
- Hypothesis:
- Proposed action:
- Guardrail:
- Check again:
```

## Sources

- Apple Ads Campaign Management API: https://ads.apple.com/app-store/help/campaigns/0022-use-the-campaign-management-api
- Apple Ads dashboard metrics: https://ads.apple.com/app-store/help/reporting/0024-view-campaigns-dashboard-metrics
- Apple Ads attribution / AdServices: https://ads.apple.com/app-store/help/attribution/0028-measuring-ad-performance
- Campaign-level reports endpoint: https://developer.apple.com/documentation/a
...[truncated]

## 04_Areas/Marketing/App Marketing Metrics Inventory.md

---
type: inventory
area: marketing
status: active
tags:
  - marketing
  - metrics
  - apple-ads
  - app-store
---
# App Marketing Metrics Inventory

Este inventario diz quais apps devem entrar no loop diario de marketing/ASA.

## Data Sources

| Source | Location | Status | Notes |
|---|---|---|---|
| Apple Ads / ASA API | Apple Ads API user + OAuth client | not connected | Guardar apenas nomes de env vars no vault. |
| Apple Ads CSV exports | `98_Attachments/marketing-data` | ready | Colocar exports de dashboard aqui quando houver. |
| App Store Connect | App/project notes + ASC exports | partial | Usado para status de build, review, screenshots, product page. |
| RevenueCat / IAP | provider exports or backend metrics | pending | Necessario para CPA -> revenue. |
| Backend analytics | Railway/API endpoints por app | partial | Usar somente agregados. |
| Social marketing | pierrondi.dev Marketing OS | active for ServiceNow content | LinkedIn e ServiceNow-only ate nova ordem. |
| Meta Ads | Meta Business Manager / Ads Manager exports | account recovery needed | Prioridade para apps iOS consumer no mercado US depois de Account Quality, billing, verificacao e tracking iOS estarem limpos. |
| TikTok Ads | TikTok Ads Manager / Events Manager exports | candidate | Canal forte para validar criativos de apps iOS consumer no mercado US; exige App Events/MMP, SKAN e leitura cautelosa de atribuicao em baixo volume. |

## Apps To Track

| App / Project | Repo note | ASA status | Other marketing channels | Revenue signal | Current next tuning question |
|---|---|---|---|---|---|
| Adivinha! | [[02_Projects/adivinha-app]] | needs Apple Ads source confirmation | App Store product page, WhatsApp/iMessage/Stories sharing | IAP pending | Depois da aprovacao, testar Search Results para keywords high-intent de musica/quiz BR e medir install -> Pro. |
| Aura Daily Affirmations | [[02_Projects/aura-affirmations]] | ASC build valid; App Privacy pending | TikTok/Reels wellness/audio demos, then Meta/TikTok paid | IAPs ready to submit | Fechar App Privacy na UI ASC, submeter, preparar criativos por ritual diario/audio. |
| MyTone | [[02_Projects/mytone-app]] | App Store version `1.0` now `REJECTED` / `UNRESOLVED_ISSUES` in 2026-05-19 daily pulse | TikTok/Shorts demo loops, App Store | IAP planned / StoreKit native in repo | Capturar motivo exato da rejeicao, fix evidence e resubmission gate; nao iniciar paid antes de approval + StoreKit/export evidence. |
| Parabens IA BR | [[02_Projects/parabens-ai-br]] | `WAITING_FOR_REVIEW` v1.1.0 build 4; Railway public URL validated; App Store public URL still 404 | App Store, TikTok/Reels, birthday/event SEO; 4 HyperFrames + 4 UGC PT-BR videos ready | IAP/server payments planned; backend `/health` DB ready | Aguardar `READY_FOR_SALE`; depois validar App Store URL + events/tracking e rodar teste BR controlado `R$30/dia x 3 dias` com 4 creatives. |
| FIFA 2026 Bolao | [[02_Projects/fifa2026bolao]] | candidate near tournament timing | App Store, social/SEO, football communities | ads/IAP/subscription TBD | Nao gastar antes de fixtures/retention loop; preparar keyword research Copa 2026. |
| Bandle BR / Music Quiz | [[02_Projects/bandle-br]] | submitted for review | App Store, TikTok, music communities | subscription/IAP TBD | Aguardar review; validar retencao/share organic antes de paid. |
| pierrondi.dev Marketing OS | [[02_Projects/pierrondi-ia]] | not ASA; social/content engine | LinkedIn ServiceNow-only, X, video, site | leads/services | Medir pipeline ServiceNow content -> approvals -> posts -> replies/leads. |
| InvestCoach.AI | [[02_Projects/investcoach_ai]] | `READY_FOR_SALE` v1.0.3 in 2026-05-19 daily pulse; live Apple Ads BR/US campaigns seen in prior screenshot | Apple Ads + TikTok BR draft; SDK code implemented, build/env pending | unknown | Post-approval QA + manual release/readiness check; verify Apple Ads install/CR/CPA and compliant TikTok Test Events before any scale. |
| FaithSchool | [[02_Projects/faithschool-web]] | live Apple Ads BR/US campaigns seen in screenshot | TikTok BR rodando dentro do advertiser `InvestCoach AI BR` com objetivo errado (Video Views, 0 destination clicks); Apple Ads BR/US ativo; SDK iOS integrado mas `TIKTOK_EVENTS_ENABLED=0` | subscription TBD | App Store v1.0.3 em review; pausar ad group Video Views; criar advertiser FaithSchool proprio; ativar TikTok Events SDK e Test Events antes de migrar para App Promotion. |
| Muse Edit | [[02_Projects/fashioncore]] | v1.0.3 `REJECTED` / `UNRESOLVED_ISSUES` in 2026-05-19 daily pulse; live Apple Ads BR/US campaigns seen in prior screenshot | Strong TikTok/Meta visual candidate + Apple Ads | subscription/affiliate TBD | Capture exact App Review reason and fix evidence; keep paid growth blocked until resubmitted/approved and export baseline exists. |
| CantuStudio | [[02_Projects/exploratorio]] | `READY_FOR_SALE` v1.0.5 in 2026-05-19 daily pulse; live Apple Ads BR/US campaigns seen in prior screenshot | Apple Ads
...[truncated]

## 04_Areas/Marketing/App Marketing Daily Tuning Report.md

---
type: daily-report
area: marketing
status: active
tags:
  - marketing
  - tuning
  - apple-ads
---
# App Marketing Daily Tuning Report

Generated: `2026-05-20 07:22:01`

This report stores aggregate marketing intelligence only. It does not store secrets, tokens, OAuth credentials, cookies or user-level PII.

## Executive Summary

- Tracked apps/projects: `11`
- Marketing data files found: `0` actionable CSV/TSV exports
- Data folder: `98_Attachments/marketing-data`
- Current automation stance: propose tuning; do not mutate paid campaigns automatically.
- Do not change Apple Ads bids/budgets yet unless export-level metrics support the decision.
- Best next learning candidate: FaithSchool US.
- Biggest current risk: spend without install -> trial/purchase linkage.

## App Readiness Snapshot

| App | Project note | Marketing/store state |
| --- | --- | --- |
| InvestCoach.AI | [[02_Projects/investcoach_ai\|InvestCoach.AI]] | tracked |
| FaithSchool | [[02_Projects/faithschool-web\|FaithSchool]] | tracked |
| Muse Edit | [[02_Projects/fashioncore\|Muse Edit]] | tracked |
| CantuStudio | [[02_Projects/exploratorio\|CantuStudio]] | tracked |
| Adivinha! | [[02_Projects/adivinha-app\|Adivinha!]] | tracked |
| Aura Daily Affirmations | [[02_Projects/aura-affirmations\|Aura]] | tracked |
| MyTone | [[02_Projects/mytone-app\|MyTone]] | tracked |
| Parabens IA BR | [[02_Projects/parabens-ai-br\|Parabens]] | tracked |
| FIFA 2026 Bolao | [[02_Projects/fifa2026bolao\|FIFA]] | tracked |
| Bandle BR / Music Quiz | [[02_Projects/bandle-br\|Bandle]] | tracked |
| pierrondi.dev Marketing OS | [[02_Projects/pierrondi-ia\|pierrondi.dev]] | content engine |

## App Store Connect Live State

|  | App | Version | appStoreState | Latest review | Build (processing) |
| --- | --- | --- | --- | --- | --- |
| WATCH | Adivinha! | 1.0 | WAITING_FOR_REVIEW | WAITING_FOR_REVIEW | 3 (VALID) |
| WATCH | Aura - Afirmacoes Diarias | 1.0 | WAITING_FOR_REVIEW | WAITING_FOR_REVIEW | 1779216004 (VALID) |
| WATCH | Bandle BR | 1.0 | REJECTED | UNRESOLVED_ISSUES | 8 (VALID) |
| WATCH | Guia 2026 | 1.0 | WAITING_FOR_REVIEW | WAITING_FOR_REVIEW | 7 (VALID) |
| WATCH | Parabéns IA | 1.1.0 | REJECTED | UNRESOLVED_ISSUES | 12 (VALID) |
| WATCH | ProvadorIA | 1.0 | PREPARE_FOR_SUBMISSION | - | 3 (VALID) |
| WATCH | VouDeQue | 1.0 | PREPARE_FOR_SUBMISSION | - | 2 (VALID) |
| OK | CantuStudio | 1.0.5 | READY_FOR_SALE | COMPLETE | 23 (VALID) |
| OK | Casa Clara | 1.0 | READY_FOR_SALE | COMPLETE | 22 (VALID) |
| OK | FaithSchool | 1.0.3 | READY_FOR_SALE | COMPLETE | 36 (VALID) |
| OK | InvestCoach.AI | 1.0.3 | READY_FOR_SALE | COMPLETE | 13 (VALID) |
| OK | Muse Edit - Style Closet | 1.0.3 | READY_FOR_SALE | COMPLETE | 10 (VALID) |
| OK | MyTone Studio | 1.0.0 | READY_FOR_SALE | COMPLETE | 202605192005 (VALID) |
| OK | SuperApp ServiceNow | 1.0 | READY_FOR_SALE | COMPLETE | 2 (VALID) |

## Active Apple Ads Readiness Queue

| Rank | App | Current signal | Recommendation | Human decision needed |
| --- | --- | --- | --- | --- |
| 1 | FaithSchool US | Visible Apple Ads US spend in prior dashboard screenshot; no export-level install/CR/CPA data yet. | Export Search Results campaign/ad group/keyword metrics; audit US App Store page and onboarding. | Approve data export and product/page audit. |
| 2 | Muse Edit BR/US | BR had minimal delivery; US had budget but no spend in prior screenshot. | Diagnose keyword eligibility, bids, storefront, product-page fit and Search Match before spend changes. | Review generated creative assets before upload/spend. |
| 3 | InvestCoach.AI BR | Highest visible active-app spend among prior Apple Ads screenshot; finance category has trust/compliance risk. | Hold spend; verify TikTok approval/Test Events and Apple Ads install/CR/CPA before scaling. | Approve only after downstream telemetry exists. |
| 4 | CantuStudio BR/US | No delivery in prior dashboard screenshot. | Run keyword/ASO/product-page audit before broad paid social. | Decide target ICP: choir teacher, arranger, church musician or music student. |

## Data Sources Seen

_No recent Apple Ads / marketing CSV exports found in `98_Attachments/marketing-data`._

Minimum next export needed: `App, Campaign Name, Ad Group Name, Keyword, Search Term, Country or Region, Ad Placement, Spend, Impressions, Taps, TTR, Installs (Total), CR (Total), Avg CPT, Avg CPA (Total), Date`.

## 2026-05-20 07:24 BRT Interpretation

- `brain-app-marketing-pulse` generated this report at `2026-05-20 07:22:01`; safe folder check still found only `README.md` in `98_Attachments/marketing-data`, so today remains export-blocked for quantitative bid/budget/keyword decisions.
- Positive store movement versus the 2026-05-19 morning snapshot: `FaithSchool`, `Muse Edit`, `MyTone Studio`, `Casa Clara`, `CantuStudio` and `InvestCoach.AI` appear as `READY_FOR_SALE` in today pulse output. These apps are eligible for post-approval QA and export-only analysis, not automatic paid scaling.
- Review blockers in tod
...[truncated]

## 04_Areas/Marketing/App Marketing Tuning Backlog.md

---
type: backlog
area: marketing
status: active
tags:
  - marketing
  - tuning
  - apple-ads
  - app-store
---
# App Marketing Tuning Backlog

Backlog para ajustes de ASA, App Store, ASO, criativos, product page, funil e canais sociais.

| Date | App | Channel | Finding | Proposed tuning | Evidence | Human approval needed | Status |
|---|---|---|---|---|---|---|---|
| 2026-05-20 07:24 BRT | Apple Ads portfolio | ASA export gate | Daily pulse generated report `2026-05-20 07:22:01`, but `98_Attachments/marketing-data` still contains only `README.md`; no current campaign/ad group/keyword/search-term CSV exists after yesterday's approved Apple Ads mutations. | Pull one Apple Ads export covering FaithSchool BR/US, CantuStudio BR, Muse Edit BR/US, InvestCoach BR/US and any running campaigns with spend, impressions, taps, installs, TTR, CR, Avg CPT and Avg CPA. Do not change bids, budgets, target CPA, keywords or campaign status from this automation. | [[04_Areas/Marketing/App Marketing Daily Tuning Report]] section `2026-05-20 07:24 BRT Interpretation`; folder check `98_Attachments/marketing-data` | yes for platform export/auth; yes for any mutation | open |
| 2026-05-20 07:24 BRT | FaithSchool | Apple Ads + funnel | Pulse shows `READY_FOR_SALE`; prior 2026-05-19 live work found BR winner behavior and US uncertainty, but no export exists after the approved BR budget/bid and US keyword changes. | Run post-approval QA, confirm BR/US App Store pages, map `plan_created` and `lesson_generated`, then review current Apple Ads export before any further budget/bid/keyword decision. | [[04_Areas/Marketing/App Marketing Daily Tuning Report]]; prior backlog rows `2026-05-19 13:45 BRT` and `2026-05-19 19:25 BRT` | yes for any paid mutation | monitoring |
| 2026-05-20 07:24 BRT | Muse Edit / MyTone | App Store post-approval gate | Daily pulse moved both apps to `READY_FOR_SALE`, replacing yesterday morning's rejected snapshot. This removes the review blocker but not the paid-growth evidence gate. | Validate live product page, paywall/IAP, activation events and prepared creative assets. For Muse Edit, review BR/US UGC before upload; for MyTone, verify ringtone generation/export/IAP smoke. Pull Apple Ads/App Store aggregate export before paid scale. | [[04_Areas/Marketing/App Marketing Daily Tuning Report]]; [[04_Areas/Product/App Refinement Backlog]] | yes for creative upload, budget, bid, keyword or campaign changes | open |
| 2026-05-20 07:24 BRT | Bandle BR / Parabéns IA | App Review / paid growth block | Daily pulse shows both as `REJECTED` / `UNRESOLVED_ISSUES` despite valid builds. Paid traffic would route into unresolved App Store risk. | Keep Apple Ads/TikTok/Meta launch or reactivation blocked. Capture exact App Review reasons, fix evidence, resubmission checklist and post-approval event/export plan before any campaign planning. | [[04_Areas/Marketing/App Marketing Daily Tuning Report]] App Store Connect Live State | yes for any paid-channel action | blocked-review |
| 2026-05-20 07:24 BRT | daily app marketing automation | Automation reliability | Local 07:00 LaunchAgent log still shows `PermissionError` reading `02_Projects/investcoach_ai.md`, while manual pulse completed and wrote the report. | Patch `brain-app-marketing-pulse` to catch unreadable project notes per app, emit a warning row and keep generating the report/email. | `/Users/paulopierrondi/.local/var/log/brain-app-marketing-pulse.log`; [[04_Areas/Marketing/App Marketing Daily Tuning Report]] | no paid approval; engineering fix only | open |
| 2026-05-19 19:25 BRT | FaithSchool | Apple Ads emergency pause | App hotfix/TestFlight was urgent because native login exposed raw Apple authorization error and demo entry in configured iOS build. FaithSchool BR/US Apple Ads were still visible as `Running` in the Apple Ads dashboard before the pause attempt. | FaithSchool BR (`2143850980`) and US (`2143851058`) rows were selected and `Actions -> Pause` was clicked. UI entered `Saving` and did not complete; refresh/auth validation redirected to Apple Sign In. Touch ID/passkey prompt for `pierrondi@gmail.com` is required before status can be verified or the pause retried. | Chrome Apple Ads live table 2026-05-19 19:10-19:25; selected BR/US only; project note [[02_Projects/faithschool-web]] section `2026-05-19 19:25 BRT - iOS 1.0.4 (34) TestFlight + Auth/Demo Hotfix` | already requested by Paulo; needs local passkey/Touch ID to complete verification | blocked-auth |
| 2026-05-19 12:45 BRT | portfolio Apple Ads | ASA executed via Chrome MCP | Live readout das 8 campanhas via Chrome MCP confirmou: spend total `US$62.26` em 7d com apenas `6 installs` (4 CantuStudio BR, 1 Muse BR, 1 Muse US, 0 InvestCoach BR/US/CantuStudio US). InvestCoach BR `US$28.04` com 0 installs (CR `0%` em 34 taps com keywords alta-intenção `[finanças pessoais]`, `[controle de gastos]`, etc — sinal de paywall/product-page bottleneck, não keyword). CantuStudio US `US$7.15` com TTR `<1%` em Search Mat
...[truncated]

## 07_MOCs/AI History MOC.md

---
type: moc
status: active
tags:
  - ai-history
  - agents
  - second-brain
---
# AI History MOC

## Purpose

Camada de leitura para historicos de agentes sem abrir arquivos gigantes primeiro.

Regra: raw archives ficam preservados; humanos e agentes devem comecar pelos indices e historicos por projeto.

## Entry Points

- [[03_AI-Chats/AI Chats Index]]
- [[03_AI-Chats/Codex Sessions]]
- [[03_AI-Chats/Claude Code Sessions]]
- [[03_AI-Chats/Kimi CLI Sessions]]
- [[03_AI-Chats/Gemini CLI]]
- [[03_AI-Chats/Claude-Mem Observations]]
- [[03_AI-Chats/Claude-Mem Session Summaries]]
- [[03_AI-Chats/Claude-Mem Recent User Prompts]]

## Project Histories

Project-specific history notes live under `03_AI-Chats/Projects/`.

Use them before searching global archives when the work is repo/project-specific.

## Operating Rules

- Do not paste raw transcript dumps into project notes.
- Do not store secrets in AI history.
- Summarize durable decisions into the matching project note.
- Keep large raw generated indexes searchable, but read smaller project/topic notes first.

## Next Layer

- Create topic/date indexes only when a large archive is repeatedly used for the same decision class.
- Candidate topics: App Store Review, Railway Deploys, Marketing Video, Linear/Git Sync, Apple Ads.


## 07_MOCs/App Store Evidence MOC.md

---
type: moc
status: active
tags:
  - app-store
  - evidence
  - qa
  - product
---
# App Store Evidence MOC

## Purpose

Route App Store review evidence, rejection notes, resubmission packages and followups into one navigable surface.

## Core Dashboards

- [[04_Areas/Product/App Store Apps Dashboard]]
- [[04_Areas/Product/App Store Priorities]]
- [[04_Areas/Coding/Checklists/App Store Connect Upload Runbook]]
- [[04_Areas/Coding/Checklists/Apple Developer And App Store Connect Inventory]]
- [[04_Areas/Coding/Best Practices/Apple IAP Submission Attachment Lesson]]

## Evidence Folders

- `02_Projects/*/Rejection Evidence*`
- `04_Areas/Product/App Store Followups/`
- `01_Daily/*App-Store*`

## Rules

- Capture evidence path, build, version, review state and residual risk.
- Never paste credentials or raw private App Store Connect content.
- Distinguish `WAITING_FOR_REVIEW`, `REJECTED`, `READY_FOR_SALE`, `DEVELOPER_REJECTED` and unknown/manual states.
- Paid marketing stays proposal-only until app state and metric evidence are fresh.


## 07_MOCs/Automation Evidence MOC.md

---
type: moc
status: active
tags:
  - automation
  - evidence
  - email
  - second-brain
---
# Automation Evidence MOC

## Purpose

Route automation runs, email drafts, logs and improvement reports.

## Core Notes

- [[07_MOCs/Automation MOC]]
- [[99_System/Automation Email Policy]]
- [[99_System/Automation Email Drafts]]
- [[99_System/Second Brain Intelligence Report]]
- [[99_System/Vault Improvement Review - 2026-05-20]]
- [[Hub_Agentes/03_Outputs/automation_reviews/2026-05-20-automation-improvement-report]]

## Rules

- Every automation must end with email or an explicit safe draft/failure record.
- Secrets are redacted from email body, logs and Obsidian.
- Keep automation memory/run notes concise; link to logs rather than copying noisy output.


## 07_MOCs/Design QA MOC.md

---
type: moc
status: active
tags:
  - design
  - visual-qa
  - screenshots
  - frontend
---
# Design QA MOC

## Purpose

Route design QA, screenshot reviews and visual evidence for apps/web.

## Core Notes

- [[04_Areas/Coding/Best Practices/App Web Quality Best Practices]]
- [[04_Areas/Coding/Checklists/Screenshots Visual QA Checklist]]
- [[04_Areas/Coding/Checklists/App Web Preflight Checklist]]
- [[04_Areas/Marketing/Creative QA Checklist]]

## Evidence Folders

- `04_Areas/Design/Web Design QA/`
- `98_Attachments/`
- project-specific `artifacts/`, screenshots and review evidence paths recorded in project notes.

## Rules

- Visual QA must include viewport, file path, state checked and decision.
- Do not attach screenshots showing credentials, private keys, tokens, provider dashboards with secrets or PII.
- For frontend work, keep screenshots as evidence and promote reusable lessons into best-practice notes.


## 07_MOCs/Orphan Routing MOC.md

---
type: moc
status: active
tags:
  - second-brain
  - cleanup
  - routing
---
# Orphan Routing MOC

## Purpose

Reduce orphan-like notes without deleting useful history.

This note routes categories that naturally appear as standalone notes: evidence, daily improvements, automation drafts, design QA, app followups and generated reports.

## Routes

| Category | Route |
| --- | --- |
| AI chat archives | [[07_MOCs/AI History MOC]] |
| App Store rejection/followup/evidence | [[07_MOCs/App Store Evidence MOC]] |
| Automation drafts/runs/reviews | [[07_MOCs/Automation Evidence MOC]] |
| Design screenshots/QA | [[07_MOCs/Design QA MOC]] |
| Daily project intelligence | [[01_Daily/2026-05-20-All-Projects-Intelligence]] and [[99_System/Kimi Daily Operator]] |
| Product/revenue ideas | [[04_Areas/Product/Product Revenue MOC]] |
| Second brain cleanup | [[04_Areas/Second Brain/Second Brain Improvement Inbox]] |

## Rule

Do not delete orphan-like notes just because they are orphaned. First decide whether they are:

- evidence;
- raw archive;
- temporary draft;
- candidate for MOC routing;
- candidate for archive after confirmed obsolete.


## 99_System/Automation Email Policy.md

---
type: policy
status: active
tags:
  - automation
  - email
  - notification
---
# Automation Email Policy

Regra fixa: toda automacao, independente de rodar em Codex, Claude, Kimi/OpenClaw, Gemini, LaunchAgent local, cloud runner ou script agendado, deve enviar um email de encerramento para `pierrondi@gmail.com`.

## Obrigatorio

- Enviar email ao final de cada run, tanto em sucesso quanto em falha.
- Destinatario padrao unico: `pierrondi@gmail.com`.
- Assunto deve identificar automacao e status.
- Corpo deve incluir:
  - nome/id da automacao;
  - status final;
  - horario;
  - principais mudancas/achados;
  - arquivos/relatorios atualizados;
  - decisoes humanas pendentes;
  - falhas ou bloqueios.
- Redigir segredos antes do envio.

## Transporte Local Padrao

Em automacoes locais no Mac, usar:

```bash
/Users/paulopierrondi/.local/bin/brain-send-automation-email --automation "<id>" --status "<success|failed>" --log "<path>"
```

Para LaunchAgents ou `run.sh`, usar o wrapper/trap:

```bash
/Users/paulopierrondi/.local/bin/brain-run-with-email --automation "<id>" --log "<path>" -- <command>
```

ou:

```bash
source /Users/paulopierrondi/.local/bin/brain-automation-email-trap
brain_automation_email_setup "<id>"
```

## Cloud / Connector Rule

Se a automacao rodar fora do Mac local:

- usar o conector/ferramenta de email disponivel para enviar a `pierrondi@gmail.com`;
- se nao houver transporte de email disponivel, criar um draft em Markdown e registrar `EMAIL_FAILED` em [[99_System/Automation Email Log]];
- a falha de transporte deve aparecer no relatorio final e no vault.

## Guardrails

- Esta regra e a unica excecao padrao a "nao enviar mensagens externas".
- Nao enviar email para terceiros automaticamente.
- Nao anexar `.env`, tokens, API keys, cookies, private keys, credenciais, dumps de banco, PII bruta ou logs sem redacao.
- Nao usar `/usr/bin/mail` direto para Gmail; usar Mail.app/iCloud local quando no Mac.
- Se o email falhar, salvar draft seguro em [[99_System/Automation Email Drafts]].


## 99_System/Vault Sanity Sweep Report.md

---
type: audit-report
status: active
tags:
  - vault
  - second-brain
  - linear
  - checklists
  - agents
---
# Vault Sanity Sweep Report

## Executive Summary - 2026-05-18 21:42 -03

Status geral: bom, com gaps claros.

O vault esta operacional como second brain para coders, projetos, Linear, App Store, marketing e automacoes. A varredura confirmou que os arquivos globais de Codex, Claude, Gemini e Kimi estao alinhados; tambem corrigi gaps em OpenClaw/Kimi workspace/Hermes, reforcei checklists e criei notas canonicas para links App Store que estavam orfaos.

Principal risco restante: `AGE-1471` ainda precisa resolver `22` repos com mapeamento Linear incompleto. Nao e bloqueio para trabalhar, mas reduz rastreabilidade de desenvolvimento.

## O Que Foi Rodado

- `/Users/paulopierrondi/.local/bin/brain-linear-sync`
- `/Users/paulopierrondi/.local/bin/obsidian-second-brain-sync`
- Leitura viva do Linear via conector:
  - issues recentes;
  - projeto `Second Brain Operating System`;
  - ciclos Agentcore atuais/proximos.
- Auditoria local de:
  - global agent configs;
  - Kimi/OpenClaw/Hermes agent files;
  - checklists em `04_Areas/Coding/Checklists`;
  - Linear project map / cleanup backlog;
  - links App Store recorrentes.
- `/Users/paulopierrondi/.local/bin/brain-cloud-ready --all` para refrescar snapshots cloud em `32` repo paths.

## Estado Atual

| Area | Resultado |
| --- | --- |
| Repos indexados | `35` |
| Repos dirty | `34` |
| Repos ahead | `10` |
| Repos behind | `1` |
| Repos precisando Linear mapping | `22` |
| Codex sessions indexadas | `541` |
| Claude sessions indexadas | `3662` |
| Kimi sessions indexadas | `32` |
| Claude-mem observations | `5712` |
| Linear live read | OK |

## Correcoes Aplicadas

| Area | Correcao |
| --- | --- |
| OpenClaw | `/Users/paulopierrondi/.openclaw/skills/obsidian-second-brain/SKILL.md` agora inclui Linear live gate e Automation Email Policy. |
| Kimi/OpenClaw workspace | `/Users/paulopierrondi/.kimi_openclaw/workspace/AGENTS.md` agora inclui second-brain, Linear, checklists e email final obrigatorio. |
| Hermes | `/Users/paulopierrondi/.hermes/hermes-agent/AGENTS.md` agora inclui second-brain, Linear, checklists e email final obrigatorio. |
| Checklists | [[04_Areas/Coding/Checklists/Project Checklist Hub]] e [[04_Areas/Coding/Checklists/App Web Preflight Checklist]] agora exigem Linear start/finish gate. |
| Automation MOC | Regra de external messages corrigida para excecao do email final obrigatorio. |
| App Store vault links | Criadas notas canonicas [[04_Areas/Product/App Store Apps Dashboard]], [[04_Areas/Product/App Store Priorities]] e [[01_Daily/2026-05-17-App-Store-Intelligence]]. |
| Standards refs | Links WCAG atualizados para `https://www.w3.org/TR/WCAG22/`; Android checklist recebeu fonte verificada. |
| Linear notes | [[04_Areas/Coding/Linear/Linear Project Map]] e [[04_Areas/Coding/Linear/Linear Cleanup Backlog]] atualizados com a leitura de `2026-05-18 21:42 -03`. |
| Cloud snapshots | `brain-cloud-ready --all` rodou em `32` repo paths; snapshots Claude cloud agora incluem App Store dashboard/priorities e este sanity report. |

## Linear Snapshot

Projeto vivo: `Second Brain Operating System`.

| Issue | Status | Decisao |
| --- | --- | --- |
| `AGE-1469` Second Brain Linear app + repo mapping | In Progress | Continua tracker principal. |
| `AGE-1470` Propagar regra Linear app | In Progress | Movido de Todo para In Progress nesta varredura; nao fechar ainda ate as proximas automacoes provarem live Linear read no output. |
| `AGE-1471` Mapear repos ativos sem projeto/issue Linear | Todo | Proximo trabalho critico: fechar os `22` repos sem mapping confiavel. |
| `AGE-1472` Leitura diaria Linear nas automations | Todo | Validar na proxima rotina diaria que cada automation cita Linear read/live status. |
| `AGE-1473` Relatorio semanal de higiene Linear | Todo | Continua backlog de rotina semanal. |
| `AGE-1489` Cleanup planned/backlog antigos | Done | Ja aplicado anteriormente; manter como historico. |

Cycles lidos no Linear:

- `Sprint 5 - Pre-Sales AI`: `2026-05-19` a `2026-06-02`.
- `Sprint 8 - PostHog Analytics`: `2026-05-19` a `2026-06-02`.
- `Sprint 4`: `2026-05-19` a `2026-06-02`.
- Proximo: `Sprint 9 - TVM, Lottie & CDN`: `2026-06-02` a `2026-06-16`.

## Checklist Health

Checklists presentes:

- [[04_Areas/Coding/Checklists/Project Checklist Hub]]
- [[04_Areas/Coding/Checklists/App Web Preflight Checklist]]
- [[04_Areas/Coding/Checklists/Web App Preflight Checklist]]
- [[04_Areas/Coding/Checklists/iOS App Preflight Checklist]]
- [[04_Areas/Coding/Checklists/Android App Preflight Checklist]]
- [[04_Areas/Coding/Checklists/Screenshots Visual QA Checklist]]
- [[04_Areas/Coding/Checklists/Frontend Checklist]]
- [[04_Areas/Coding/Checklists/Backend API Checklist]]
- [[04_Areas/Coding/Checklists/AI Integrations Checklist]]
- [[04_Areas/Coding/Checklists/Release Deploy Checklist]]
- [[04_Areas/Coding/Checklists/Security Checklist]]
- [[04_Areas/
...[truncated]

## 99_System/Security And Secrets Policy.md

---
type: policy
tags:
  - security
  - secrets
  - second-brain
---
# Security And Secrets Policy

## Regra principal

O vault e o lugar para memoria, inventario, decisoes e referencias de credenciais. O vault nao guarda segredo real em Markdown.

Modelo canonico: [[99_System/Credential Vault Operating Model]].

## Permitido no vault

- Nome de env var.
- Nome do fornecedor.
- Projeto que usa a chave.
- Ambiente: local, staging, prod.
- Local onde o valor real esta guardado.
- Data de criacao/rotacao.
- Dono/responsavel.
- Escopo/permissao da chave.
- Procedimento de revogacao.

## Proibido no vault

- Valores reais de API keys.
- Tokens de acesso ou refresh tokens.
- Senhas.
- Cookies.
- Private keys.
- Service account JSON.
- Certificados privados.
- Arquivos `.env` completos.
- Screenshots que mostrem credenciais.

## Padrao para projetos

- `.env.local` para desenvolvimento local e fora do Git.
- `.env.example` com nomes e valores falsos.
- Secret manager/provider env vars para producao.
- GitHub Actions Secrets para CI.
- Nunca passar segredo para LLM quando nao for estritamente necessario.

## Regra para coders

- Nao pedir Paulo para colar API key/token em chat quando houver alternativa.
- Consultar [[04_Areas/Coding/Checklists/Secrets And API Keys Register]] e usar a referencia/local de armazenamento.
- Preferir `op://...` + `op run` quando 1Password CLI estiver disponivel.
- Se o secret manager nao estiver configurado, registrar acao humana e bloquear a parte que depende do segredo.

## Quando uma key vaza

1. Revogar imediatamente no fornecedor.
2. Criar nova key com permissao minima.
3. Atualizar secret manager/provider.
4. Rodar testes/deploy necessario.
5. Registrar incidente na nota do projeto sem repetir a key.
6. Procurar e remover vazamento em logs/commits se aplicavel.

Incidente aberto: [[99_System/Secret Exposure Incident - 2026-05-19]].

## Intake local seguro

Quando 1Password CLI ainda nao estiver disponivel, usar `/Users/paulopierrondi/.local/bin/brain-secret-intake` para gravar valores novos/rotacionados no Apple Keychain. O script nao recebe segredo por argumento; ele deixa o proprio Keychain pedir o valor.

Runbook manual no vault: [[99_System/Manual Credential Intake]].

Para importacao em lote, usar arquivo temporario fora do vault:

```bash
/Users/paulopierrondi/.local/bin/brain-secret-intake import /Users/paulopierrondi/.second-brain-secrets.env --delete
```

O arquivo temporario nao deve entrar em Obsidian, Git, Linear, email ou screenshot.

## Links

- [[99_System/Credential Vault Operating Model]]
- [[99_System/Manual Credential Intake]]
- [[99_System/Secret Exposure Incident - 2026-05-19]]
- [[04_Areas/Coding/Checklists/Secrets And API Keys Register]]
- [[04_Areas/Coding/Checklists/Railway Secrets Inventory]]
- [[04_Areas/Coding/Checklists/Security Checklist]]
- [[04_Areas/Coding/Checklists/Project Checklist Hub]]


## 99_System/Credential Vault Operating Model.md

---
type: policy
status: active
tags:
  - security
  - secrets
  - credentials
  - second-brain
---
# Credential Vault Operating Model

## Answer First

O Obsidian pode ser o **cofre operacional** das credenciais, mas nao deve guardar o **valor real** de API keys, tokens, senhas, cookies, private keys ou arquivos `.env`.

Modelo correto:

```text
Obsidian = indice, inventario, runbook, owner, escopo, rotacao, referencia
Secret manager = valor real
Provider env vars = runtime/producao
```

## Por que nao guardar segredo real em Markdown

- O Obsidian guarda notas como arquivos Markdown em texto plano no filesystem local.
- Obsidian Sync pode proteger o remote vault, mas o vault local continua legivel para qualquer processo/usuario com acesso ao Mac desbloqueado.
- Plugins, indexadores, backups, search, logs, screenshots e agentes podem acabar lendo o conteudo.
- LLMs e automacoes devem usar referencias e inventario, nao receber valor real.

## Onde guardar o valor real

| Uso | Local recomendado | Motivo |
| --- | --- | --- |
| Senhas/passkeys pessoais | Apple Passwords / iCloud Keychain ou 1Password | Sync seguro com devices aprovados. |
| API keys de desenvolvimento | 1Password Developer / 1Password CLI | Permite `op://...` references e `op run` sem plaintext. |
| Secrets de producao Railway/Vercel/Netlify/Fly/Render | Provider env vars | O runtime injeta sem passar pelo vault. |
| CI/CD | GitHub Actions Secrets ou provider equivalente | Separacao de acesso por repo/env. |
| Cloud enterprise | AWS/GCP/Azure secret manager | IAM, audit, rotacao e least privilege. |
| Fallback local Mac | Apple Keychain | Bom para credenciais humanas; menos pratico para automacao multi-projeto que 1Password CLI. |

## O que o vault deve guardar

Guardar em [[04_Areas/Coding/Checklists/Secrets And API Keys Register]]:

- Nome da env var.
- Provider.
- Projeto/repos que usam.
- Ambiente: local, staging, prod, CI.
- Onde o valor real esta guardado.
- Referencia segura, quando houver, como `op://vault/item/field`.
- Escopo/permissao.
- Owner.
- Data de criacao/rotacao.
- Procedimento de revogacao.
- Evidencia de que `.env.example` existe sem valor real.

## O que o vault nunca deve guardar

- API key real.
- Bearer token, refresh token, session token ou cookie.
- Senha.
- Private key `.p8`, `.pem`, `.key`, `.p12`.
- Service account JSON.
- `.env` completo.
- Screenshot mostrando credenciais.
- Output de CLI que imprima secrets.

## Padrao recomendado para Paulo

### 1. 1Password como cofre principal de developer secrets

Quando `op` estiver instalado:

```bash
export OPENAI_API_KEY="op://Developer/OpenAI/api-key"
op run -- npm run dev
```

Para arquivos:

```bash
op run --env-file .env.op -- npm run dev
```

Regra: `.env.op` pode guardar referencias `op://...`; `.env.local` com valor real fica local e gitignored.

### 2. Apple Passwords / iCloud Keychain para credenciais humanas

Usar para contas, passkeys, senhas de apps e acesso no iPhone/Mac. Bom para uso humano; nao e o melhor formato para automacoes de coders porque nao tem referencias `op://...` portaveis por repo.

### 3. Provider env vars para producao

Railway/Vercel/GitHub/etc. continuam fonte de runtime. O vault guarda somente:

```text
RAILWAY_PROJECT=x
RAILWAY_SERVICE=y
ENV_VAR_NAME=OPENAI_API_KEY
stored_at=Railway Variables
value=never stored here
```

## Regras para coders

- Nunca pedir que Paulo cole uma key no chat se houver alternativa.
- Procurar primeiro o registro em [[04_Areas/Coding/Checklists/Secrets And API Keys Register]].
- Se precisar de uma credencial:
  - usar provider env vars;
  - usar `op run` quando 1Password CLI existir;
  - usar script/provider oficial;
  - ou deixar uma acao humana clara.
- Nunca imprimir secrets em logs, Markdown, Linear, screenshots ou email.
- Ao encontrar secret real no vault, tratar como incidente: remover, rotacionar e registrar sem repetir valor.

## Intake seguro local

Fallback ja configurado neste Mac:

```bash
/Users/paulopierrondi/.local/bin/brain-secret-intake
```

Uso correto:

- inserir somente valores novos/rotacionados;
- nunca inserir valor ja exposto em chat;
- nao passar segredo como argumento de comando;
- usar Apple Keychain como fallback local;
- migrar para 1Password CLI para uso multi-maquina, cloud coder e referencias `op://...`.

Importacao por arquivo temporario:

```bash
/Users/paulopierrondi/.local/bin/brain-secret-intake template /Users/paulopierrondi/.second-brain-secrets.env
/Users/paulopierrondi/.local/bin/brain-secret-intake import /Users/paulopierrondi/.second-brain-secrets.env --delete
```

Runbook visual/manual no Obsidian: [[99_System/Manual Credential Intake]].

Regras do arquivo temporario:

- usar apenas valores novos/rotacionados;
- permissao `600`;
- nunca colocar dentro do Obsidian, repo Git, iCloud Drive compartilhado ou pasta de sync nao-controlada;
- apagar apos importacao;
- o importador grava no Apple Keychain e nao imprime valores.

Para scripts locais que precisem ler um se
...[truncated]

## 99_System/Manual Credential Intake.md

---
type: runbook
status: active
tags:
  - security
  - secrets
  - runbook
  - second-brain
---
# Manual Credential Intake

## Answer First

Nao coloque valores reais de keys dentro do Obsidian.

O modo manual correto e:

```text
Obsidian = esta pagina, inventario, checklist, referencia e status
Arquivo temporario = preenchimento rapido
Apple Keychain = valor real
```

## Caminho rapido

1. Abrir o arquivo temporario:

```bash
open -e /Users/paulopierrondi/.second-brain-secrets.env
```

2. Preencher somente valores novos/rotacionados.

3. Importar para o Apple Keychain e apagar o arquivo:

```bash
/Users/paulopierrondi/.local/bin/brain-secret-intake import /Users/paulopierrondi/.second-brain-secrets.env --delete
```

4. Verificar sem mostrar valores:

```bash
/Users/paulopierrondi/.local/bin/brain-secret-intake status
```

## Template do arquivo temporario

Arquivo local fora do vault:

```text
/Users/paulopierrondi/.second-brain-secrets.env
```

Campos aceitos:

```env
GEMINI_API_KEY=
ELEVENLABS_API_KEY=
EVENTLABS_API_KEY=
PEXELS_API_KEY=
CREATOMATE_API_KEY=
YOURVERSION_API_KEY=
LINEAR_API_KEY=
RAILWAY_ACCOUNT_TOKEN=
RAILWAY_PPT_TOKEN=
RAILWAY_PIERRONDI_IA_TOKEN=
RAILWAY_CSDM_TOKEN=
CANTUS_TEST_USER_PASSWORD=
```

## Tabela manual no vault

Preencher esta tabela manualmente, sem valor real:

| Env var | Provider | Projeto/uso | Valor real fica em | Status | Ultima rotacao |
| --- | --- | --- | --- | --- | --- |
| `GEMINI_API_KEY` | Google Gemini | apps/LLM | Apple Keychain `paulo-second-brain/GEMINI_API_KEY` | pending |  |
| `ELEVENLABS_API_KEY` | ElevenLabs | audio/video/marketing | Apple Keychain `paulo-second-brain/ELEVENLABS_API_KEY` | pending |  |
| `EVENTLABS_API_KEY` | Eventlabs/alias | confirmar provider | Apple Keychain `paulo-second-brain/EVENTLABS_API_KEY` | pending |  |
| `PEXELS_API_KEY` | Pexels | assets/creative | Apple Keychain `paulo-second-brain/PEXELS_API_KEY` | pending |  |
| `CREATOMATE_API_KEY` | Creatomate | video/render | Apple Keychain `paulo-second-brain/CREATOMATE_API_KEY` | pending |  |
| `YOURVERSION_API_KEY` | YourVersion | app/API externa | Apple Keychain `paulo-second-brain/YOURVERSION_API_KEY` | pending |  |
| `LINEAR_API_KEY` | Linear | sync/automacoes | Apple Keychain `paulo-second-brain/LINEAR_API_KEY` | pending |  |
| `RAILWAY_ACCOUNT_TOKEN` | Railway | CLI/global infra | Apple Keychain `paulo-second-brain/RAILWAY_ACCOUNT_TOKEN` | pending |  |
| `RAILWAY_PPT_TOKEN` | Railway | ppt-engine | Apple Keychain `paulo-second-brain/RAILWAY_PPT_TOKEN` | pending |  |
| `RAILWAY_PIERRONDI_IA_TOKEN` | Railway | pierrondi-ia | Apple Keychain `paulo-second-brain/RAILWAY_PIERRONDI_IA_TOKEN` | pending |  |
| `RAILWAY_CSDM_TOKEN` | Railway | CSDM | Apple Keychain `paulo-second-brain/RAILWAY_CSDM_TOKEN` | pending |  |
| `CANTUS_TEST_USER_PASSWORD` | Cantus | test user | Apple Keychain `paulo-second-brain/CANTUS_TEST_USER_PASSWORD` | pending |  |

## Regras duras

- Nao colar valor real nesta nota.
- Nao anexar screenshot de provider mostrando key.
- Nao colocar `.env`, `.p8`, `.pem`, `.key`, `.p12` ou JSON de service account no vault.
- Nao salvar `/Users/paulopierrondi/.second-brain-secrets.env` no Obsidian.
- Se um valor real cair no vault, tratar como incidente e rotacionar.

## Links

- [[99_System/Credential Vault Operating Model]]
- [[99_System/Security And Secrets Policy]]
- [[99_System/Secret Exposure Incident - 2026-05-19]]
- [[04_Areas/Coding/Checklists/Secrets And API Keys Register]]


## 99_System/Secret Exposure Incident - 2026-05-19.md

---
type: security-incident
status: open
severity: high
created: 2026-05-19
tags:
  - security
  - secrets
  - incident
---
# Secret Exposure Incident - 2026-05-19

## Executive Summary

Valores reais de credenciais foram colados em chat em `2026-05-19`.

Regra: tratar todos os valores citados como **comprometidos**, mesmo que alguns sejam identificadores publicos ou chaves com escopo limitado. O vault nao guarda nenhum valor real deste incidente.

## Escopo afetado

| Area | Credencial / referencia | Acao |
| --- | --- | --- |
| Google Gemini | `GEMINI_API_KEY` | Revogar/rotacionar todas as keys reutilizadas em apps, Railway, `.env.local` e CI. |
| ElevenLabs / Eventlabs | `ELEVENLABS_API_KEY` / `EVENTLABS_API_KEY` | Revogar/rotacionar; atualizar pipelines de criativos e video. |
| Pexels | `PEXELS_API_KEY` | Revogar/rotacionar; atualizar workflows de assets. |
| Creatomate | `CREATOMATE_API_KEY` | Revogar/rotacionar; confirmar se a key tem escopo publico ou privado. |
| YourVersion | `YOURVERSION_API_KEY` | Revogar/rotacionar; mapear apps/rotas que consomem. |
| Linear | `LINEAR_API_KEY` | Revogar/rotacionar; atualizar sync do second brain e automacoes. |
| Railway | `RAILWAY_ACCOUNT_TOKEN`, `RAILWAY_PPT_TOKEN`, `RAILWAY_PIERRONDI_IA_TOKEN`, `RAILWAY_CSDM_TOKEN` | Revogar/rotacionar; atualizar CLI, automacoes e provider env vars. |
| Cantus mobile | test user password | Alterar senha do usuario de teste; revisar se a conta tem acesso administrativo. |
| Apple App Store Connect | API key metadata/private key file | Confirmar se private key `.p8` ficou sempre local; se houve qualquer exposicao do arquivo, revogar a API key e gerar nova. |

## Rotacao obrigatoria

- [ ] Criar novas credenciais nos providers afetados.
- [ ] Revogar as credenciais antigas.
- [ ] Inserir os novos valores no secret manager ou no Apple Keychain local via `/Users/paulopierrondi/.local/bin/brain-secret-intake`.
- [ ] Atualizar Railway/Vercel/GitHub Actions/EAS/CI onde aplicavel.
- [ ] Atualizar `.env.local` apenas quando inevitavel e sempre com `.gitignore`.
- [ ] Rodar smoke tests dos apps/workflows que dependem das keys.
- [ ] Atualizar [[04_Areas/Coding/Checklists/Secrets And API Keys Register]] com data/status de rotacao.
- [ ] Confirmar que nenhum log, screenshot, nota, issue Linear ou commit contem valores reais.

## Regra para coders

- Nao pedir o valor antigo ou novo em chat.
- Usar [[99_System/Credential Vault Operating Model]] como fonte canonica.
- Para runtime local, preferir Keychain/1Password/provider env vars.
- Para runtime cloud, usar provider env vars e secrets nativos.

## Links

- [[99_System/Security And Secrets Policy]]
- [[99_System/Credential Vault Operating Model]]
- [[04_Areas/Coding/Checklists/Secrets And API Keys Register]]


## AI History Snapshot

---
type: project-ai-history
project: "servicenow-agent-army"
status: generated
generated_at: "2026-05-20 18:04:05"
tags:
  - ai-history
  - project-history
  - generated
---
# servicenow-agent-army - AI History

Projeto: [[02_Projects/servicenow-agent-army|servicenow-agent-army]]

- Path: `/Users/paulopierrondi/Projects/servicenow-agent-army`
- Codex relacionado: `0`
- Claude Code relacionado: `1`
- Kimi relacionado: `0`
- Claude-Mem observations relacionadas: `16`
- Claude-Mem summaries relacionados: `0`

## Codex

_Nenhuma sessao Codex relacionada encontrada._

## Claude Code

| Atualizado | Titulo | Primeiro pedido | Fonte |
| --- | --- | --- | --- |
| 2026-04-27T13:45:20.447Z | vamos continuar com esse repo para eu criar conteudo no linkedin e claro usar tbm no meu trabalho | vamos continuar com esse repo para eu criar conteudo no linkedin e claro usar tbm no meu trabalho | /Users/paulopierrondi/.claude/projects/-Users-paulopierrondi-Downloads-servicenow-agent-army/2db700f4-1651-496e-baed-7e7e859e9986.jsonl |

## Kimi

_Nenhuma sessao Kimi relacionada encontrada._

## Claude-Mem

| Criado | Tipo | Titulo | Resumo |
| --- | --- | --- | --- |
| 2026-04-27T17:34:45.265Z | discovery | servicenow-agent-army: ServiceNow UI Theme Verified in Browser at 1440x900 | ["Headless Chrome screenshot taken at 1440x900 dark mode confirmed ServiceNow palette visually applied.","CSS variable grep confirmed: --color-bg: #001d2b, --color-accent: #00b0e5, --color-now-green: #62d84 ...[truncated] |
| 2026-04-27T17:33:26.876Z | feature | servicenow-agent-army: Full ServiceNow-Themed UI Overhaul Applied | ["globals.css color palette replaced: bg #001d2b (deep teal), accent #00b0e5 (ServiceNow action blue), now-green #62d84e (ServiceNow brand green) — previously Linear-style dark neutrals with indigo #5e6ad2 ...[truncated] |
| 2026-04-27T17:31:13.962Z | decision | pierrondi-ia: ServiceNow Look & Feel Adopted — UI Quality Uplift Direction Set | ["User explicitly rejected current \"AI generated\" look and feel of the app UI.","ServiceNow design language chosen as the reference visual system for the redesign.","Scope includes both the app UI and the ...[truncated] |
| 2026-04-27T17:25:40.776Z | discovery | agent-army-promo: Final Video Frame Verification at 7 Timestamps | ["Project located at /Users/paulopierrondi/Projects/servicenow-agent-army/marketing/video-2026-04-27/agent-army-promo","ffmpeg used to extract frames at timestamps: 0s, 4s, 9s, 17s, 27s, 38s, 47s — suggest ...[truncated] |
| 2026-04-27T16:52:09.467Z | discovery | servicenow-agent-army: Dev Server Running on Port 3003 — All Routes 200, Deliberate API Streaming SSE | ["Port 3000 was occupied by process 21275; port 3002 also in use; server fell back to port 3003.","Smoke test confirmed HTTP 200 for /, /agents, and /gallery routes.","POST /api/deliberate streams SSE event ...[truncated] |
| 2026-04-27T16:42:56.043Z | change | servicenow-agent-army: Full Linear-Aesthetic UI Polish Sweep Across All Components | ["Nav.tsx: header height reduced from h-14 to h-12; logo icon changed from circle to rotated diamond (rotate-45 rounded-sm); nav links switched from plain text hover to .btn .btn-ghost; ⌘K kbd hint added; v ...[truncated] |
| 2026-04-27T16:40:25.319Z | change | servicenow-agent-army: globals.css Overhauled to Linear-Inspired Design System | ["Accent color changed from #dc2626 (red) to #5e6ad2 (Linear indigo) with new --color-accent-glow: rgba(94,106,210,0.18) for focus rings and pulse animation.","New color tokens added: --color-card-hover, -- ...[truncated] |
| 2026-04-27T16:36:32.308Z | discovery | servicenow-agent-army: Node Version Mismatch — .nvmrc=22 vs Running v25.9.0 | ["pnpm-workspace.yaml declares two workspace globs: apps/* and packages/*.",".nvmrc specifies Node 22 but the shell is running Node v25.9.0.","No node_modules directory exists at the repo root or apps/web — ...[truncated] |
| 2026-04-27T16:32:49.368Z | discovery | servicenow-agent-army: Web App Architecture — Next.js 16 + Linear-Style Design System | ["Project located at /Users/paulopierrondi/Projects/servicenow-agent-army with apps/web (Next.js) and apps/cli (tsup CLI) workspaces.","Web app uses Next.js 16.2.4, React 19, Tailwind CSS 4, Biome for lint ...[truncated] |
| 2026-04-27T16:32:07.348Z | decision | pierrondi-ia: LinkedIn Demo Video — App Polish + Linear Look-and-Feel Directive | ["User requested the app UI be finalized with Linear's look and feel before recording a demo video.","Demo video angle: value proposition of creating skills and agents via Claude Code and/or Codex (Now Assi ...[truncated] |
| 2026-04-27T13:55:50.785Z | feature | servicenow-agent-army: Three Private Operational Workfiles Created for Week of 2026-04-27 | ["private/weekly-operations-2026-04-27.md created as a single daily-open ops dashboard combining Daily Promo checklist, Follow-up funnel board (Sinal through Handoff), telemetry capture, blockers, cycle hea ...[truncated] |
| 2026-04-27T13:53:21.891Z | feature | servicenow-agent-army: LinkedIn Sprint 2026-04-27 Created — 5 Posts + 2 Reserves, All Validated | ["Sprint file created at docs/marketing/sprints/sprint-2026-04-27.md with 5 scheduled posts (Mon-Fri) and 2 fallback reserves following the demo-storyteller-v2 contract.","Rotation: Pierrondi EA 2x (Mon, Th ...[truncated] |
| 2026-04-27T13:48:26.085Z | discovery | servicenow-agent-army: Full Marketing Documentation Architecture Discovered | ["Voice guide at docs/marketing/voice-guide.md governs all LinkedIn content: Constructive Challenger persona, banned word list, EN+PT-BR bilingual rule, 10-item done checklist before publishing.","Gallery c ...[truncated] |
| 2026-04-27T13:48:26.085Z | discovery | servicenow-agent-army: Gallery Contains 10 Validated FSI Brazil Case Studies | ["Case 01 (incident-triage-fsi): 800 incidents/day FSI tier-1 bank, p95 time-to-assignment 40% reduction target in 90 days using Now Assist for ITSM Resolution Suggestion + Guardian PII filter.","Case 02 (c
...[truncated]
