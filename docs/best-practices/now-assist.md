# Best Practices — Now Assist (playbook tatico)

> Quando usar cada surface Now Assist. Family alvo: Yokohama / Zurich. [VERIFICAR FAMILY RELEASE] onde Apr 2026 docs nao confirmam.
> Custos sao em **Now Assist credits**. Modelo de pricing varia por SKU (Pro, Pro Plus). Confirme com licensing — este doc NAO substitui SOW.

## Mapa rapido de surfaces

| Surface | Persona | Family confirmado | SKU tipico |
| --- | --- | --- | --- |
| Now Assist Q&A / Discovery | End user / customer / employee | Yokohama+, enriched Zurich | Pro+ |
| Now Assist Context Menu (NACM) | Anyone editing text in record | Yokohama P3 / Xanadu P9+ | Pro |
| Now Assist for Code | Developer (scoped/global) | Zurich | Pro Plus |
| Now Assist for Creator | Workflow developer / app builder | Zurich | Pro Plus |
| Now Assist domain skills (ITSM/CSM/HR/FSM/SecOps) | Agent / fulfiller in workspace | Yokohama+, Zurich enriched | Pro / Pro Plus depending |
| AI Agents (AI Agent Studio) | Agent author / orchestrator | Zurich | Pro Plus |
| Now Assist Skill Kit (NASK) | Skill builder | Yokohama+ | Pro Plus |

Refs: [Now Assist for Creator](https://www.servicenow.com/docs/r/zurich/build-workflows/now-assist-for-creator/now-assist-for-creator-landing.html), [AI Agent Studio](https://www.servicenow.com/docs/r/zurich/intelligent-experiences/ai-agent-studio.html), acesso 2026-04-26.

---

## Surface 1: Now Assist Q&A

**O que faz**: gera resposta em linguagem natural fundamentada em KB articles + outras fontes configuradas.

**Quando usar**:
- Service Portal employee — deflection de dúvida operacional repetitiva
- Customer-facing portal com KB curado e aprovado por comunicacao/legal
- Agent Workspace para busca contextual durante atendimento
- Virtual Agent em chat synchronous

**Quando NAO usar**:
- KB com info conflitante / desatualizada — alucinacao garantida
- Topico com regulacao alta (taxa de juros, contrato) sem grounding em documento oficial
- Customer-facing FSI Brasil sem Guardian + DPO review

**Custo**: medium-high (cada Q&A consome credits). Volume controlado.

**Guardian considerations**: prompt injection protection obrigatoria em surface customer-facing autenticado. Sensitive topic filter em FSI: PII (CPF, conta, agencia), credit decision, KYC info.

**Exemplo concreto**: Banco X usa Q&A em portal de RH para "como solicito ferias" — KB tem 12 artigos aprovados, Now Assist responde com citacao do artigo. Reduz ticket HR em 35% no primeiro trimestre.

---

## Surface 2: Now Assist Context Menu (NACM)

**O que faz**: augment text inline em campo de form (Elaborate, Shorten, Analyze, Translate, etc.).

**Quando usar**:
- Agent escrevendo resolution notes / case comment
- Change manager redigindo implementation plan
- HR agent escrevendo comunicacao para colaborador

**Quando NAO usar**:
- Field com PII direta (CPF, account number) — risco de leak em log de prompt
- Field customer-facing reply em FSI sem revisao humana
- Quando o user depende do augment para fazer trabalho que exige seu julgamento (vira muleta)

**Custo**: low-medium. Por interacao curta.

**Guardian**: offensiveness + sensitive topic ativo. Prompt injection moderado (input vem do usuario interno, mas ainda pode ter copy-paste de input externo).

**Exemplo**: change manager escreve plano em portugues coloquial, NACM "Make formal" reescreve para padrao corporativo + ortografia. Saves ~5 min/change.

---

## Surface 3: Now Assist for Code

**O que faz**: code generation in scoped/global apps, Studio, IDE/SDK. Sugere script include, business rule, client script, ACL com base em comentario ou contexto. Source: [Now Assist for Code](https://www.servicenow.com/docs/bundle/zurich-api-reference/page/script/now-assist-for-code/concept/now-assist-code-landing.html), acesso 2026-04-26.

**Quando usar**:
- Developer escrevendo Fluent ou legacy script
- Geracao de boilerplate (ACL chain, Business Rule template)
- Code completion enquanto desenvolvedor digita

**Quando NAO usar**:
- Codigo de seguranca critica (encryption, password, auth flow) sem revisao senior
- Codigo que toca financial calculation sem teste unitario
- "Faz tudo pra mim" — vira customizacao orfa sem owner

**Custo**: medium por geracao. Pode ser alto se developer abusa.

**Guardian**: sensitive code patterns flag (eval, hardcoded credentials). Output review humano antes de commit.

**Exemplo**: developer escreve `// Business rule: when incident priority changes to 1, send slack notification`, Now Assist gera estrutura. Developer ajusta logica de negocio especifica. **Tempo cai de 30 min para 10 min para boilerplate. Logica core sempre vem do humano.**

---

## Surface 4: Now Assist for Creator

**O que faz**: Flow generation, Flow Insights, Playbook generation, Page Insights, **Build Agent (vibe coding)**. Source: [Now Assist for Creator](https://www.servicenow.com/docs/r/zurich/build-workflows/now-assist-for-creator/now-assist-for-creator-landing.html), 2026-04-26.

**Quando usar**:
- Prototipagem rapida de flow para POC
- Flow simple, well-defined trigger + action
- Page generation em UI Builder a partir de descricao
- Build Agent em sandbox para explorar capabilities

**Quando NAO usar**:
- Flow producao critica sem revisao por arquiteto — generated flow tende a ignorar best practice de error handling, parallelism
- Customizacao em scope global — cria divida tecnica
- Flow tocando customer-facing sem Guardian + test plan

**Custo**: high. Flow generation consome creditos significativos por iteracao.

**Guardian**: code review humano obrigatorio. Build Agent em prod-like requer aprovacao do Platform Owner.

**Exemplo**: arquiteto descreve "quando case for closed e priority foi 1, criar problem record e linkar". Build Agent gera flow base, arquiteto refatora para usar pattern interno do banco (subflow reutilizavel + audit log).

---

## Surface 5: Now Assist domain skills

**O que faz**: pre-built GenAI skills + agents por linha de negocio (ITSM, CSM, HR, FSM, SecOps). Examples:
- ITSM: Resolution Suggestion, Incident Summarization, Change Risk
- CSM: Case Summarization, Email Generation, Resolution Notes
- HR: HR Q&A, Case Summarization
- FSM: Work Order Summarization
- SecOps: Threat Summarization

**Quando usar**:
- Domain workflow OOTB com volume alto (>500 cases/mes ou equivalente)
- KB ou data foundation maduro
- Time treinado para integrar Now Assist em rotina

**Quando NAO usar**:
- Domain com customizacao pesada que ja diverge de OOTB — skills nao funcionam bem com data model alterado
- Volume baixo — overhead de change management nao compensa
- Sem business owner que sustenta SLO

**Custo**: medium-high por skill. Modelar credit budget por skill por mes.

**Guardian**: depende do skill. Customer-facing email generation = Guardian alta. Internal summarization = Guardian baseline.

**Exemplo**: CSM com 50k cases/mes ativa Email Generation + Sentiment. Em 6 meses, AHT (average handle time) cai 18%. **Pre-condicao para esse resultado: closure code estruturado + KB > 200 artigos relevantes.**

---

## Surface 6: AI Agents + AI Agent Studio + Skill Kit

**O que faz**:
- **AI Agent Studio** (Zurich) — guided setup para criar agents com tools, skills, triggers, teams
- **NASK** (Yokohama+) — custom GenAI skill builder (prompt + LLM + outputs + deploy menus)
- **Fluent SDK 4.6** — `AiAgentWorkflow` API source-driven

**Quando usar**:
- Caso de uso fora de OOTB domain skills mas que beneficia de orquestracao
- Workflow agentic onde decisao + acao + verificacao iteram
- Caso onde NASK skill precisa ser tool de um agent maior

**Quando NAO usar**:
- Caso resolvivel com OOTB domain skill — duplicar trabalho
- Caso resolvivel com Flow Designer determinístico — agent overhead nao se paga
- Producao FSI critica sem audit log validado em sub-prod
- "Vamos criar um agent para X" sem business owner e SLO

**Custo**: muito alto comparado as outras surfaces. AI Agent run = multiple LLM calls + tool calls. Modelar budget por agent + alarme.

**Guardian**:
- Prompt injection critical — agent recebe instructions de tool output e KB
- Sensitive topic filter no input + output
- Tool whitelist explicita
- Audit trail completo em `sn_aia_execution_*` + `sys_gen_ai_log_metadata`

**Exemplo**: AI Agent "PIX dispute triage" — recebe disputa via Case, identifica tipo (fraude, erro, processamento), busca historico do cliente em CMDB de produtos, sugere acao (estorno, investigacao, recusa). Agent decide; humano aprova antes de qualquer write. **Sem aprovacao humana, em FSI Brasil isso quebra Resolucao 4.893 BACEN.**

---

## Decision matrix: qual surface escolher?

| Necessidade | Surface preferida |
| --- | --- |
| Resposta a duvida sobre processo/info | Now Assist Q&A |
| Augment de texto inline | NACM |
| Geracao de codigo de plataforma | Now Assist for Code |
| Prototipagem de flow / app | Now Assist for Creator (Build Agent) |
| Workflow OOTB com domain skill existente | Domain skill (ITSM/CSM/etc.) |
| Workflow agentic novo, multi-step, com decisao | AI Agent Studio |
| Skill custom reutilizavel | NASK |
| Tudo isso codificado no repo | Fluent SDK 4.6 |

---

## Cross-cutting Guardian considerations

Now Assist Guardian (Zurich) cobre 4 protections principais ([source](https://www.servicenow.com/docs/r/zurich/intelligent-experiences/now-assist-guardian.html), 2026-04-26):

1. **Prompt injection protection** — detecta injection patterns, bloqueia ou sanitiza
2. **Offensiveness protection** — output filter
3. **Sensitive topic filter** — configuravel; PII, financial, legal
4. **BYOG** — bring your own guardrail provider

**Mandatory em FSI Brasil** (opiniao TAE, nao official guidance):

- Customer-facing surface (Q&A, email gen, voice) → Guardian sempre on
- Agent que toca dado PII → sensitive topic filter on
- Surface em sub-prod ANTES de prod, com mesmo Guardian config
- Audit log validado para auditoria BACEN/LGPD

---

## Credit budget — operacional

Pratica recomendada:

| Componente | Default budget |
| --- | --- |
| Per agent | Cap mensal, alarme 80% |
| Per skill (NASK) | Cap mensal por skill |
| Per surface | Cap por departamento/cost center |
| Total instance | Hard cap com alerta para Platform Owner |

Ferramentas: Performance Analytics indicators sobre `sys_gen_ai_log_metadata`, dashboard de credit burn por skill/agent. **Sem dashboard, surpresa de invoice e cronica.**

---

## Anti-patterns Now Assist (complementa anti-patterns.md)

1. **Ativar todos os domain skills no go-live** — KB nao acompanha, qualidade ruim, adoption morre
2. **Customizacao de prompt do domain skill OOTB** — perde upgrade, suporte ServiceNow nao cobre
3. **NASK skill sem grounding** (prompt + LLM puro) em info regulada — alucinacao + risco regulatorio
4. **AI Agent sem owner + SLO + budget** — shadow IT em 3 meses
5. **Build Agent em prod sem aprovacao** — cria artefato fora do release management
6. **Now Assist Q&A com KB customer e KB interno misturados** — vazamento de info confidencial

---

## Links oficiais (acesso 2026-04-26)

- [AI Agent Studio](https://www.servicenow.com/docs/r/zurich/intelligent-experiences/ai-agent-studio.html)
- [Now Assist Guardian](https://www.servicenow.com/docs/r/zurich/intelligent-experiences/now-assist-guardian.html)
- [Now Assist for Creator](https://www.servicenow.com/docs/r/zurich/build-workflows/now-assist-for-creator/now-assist-for-creator-landing.html)
- [Now Assist for Code](https://www.servicenow.com/docs/bundle/zurich-api-reference/page/script/now-assist-for-code/concept/now-assist-code-landing.html)
- [Now Assist Skill Kit](https://www.servicenow.com/docs/r/intelligent-experiences/now-assist-skill-kit/exploring-now-assist-skill-kit.html)
- [Add Now Assist skill to AI agent](https://www.servicenow.com/docs/r/zurich/intelligent-experiences/add-skill-ai-agent.html)

---

## Para o batalhao

- **Business Analyst Agent** usa decision matrix para escolher surface antes de spec
- **Enterprise Architect Agent** modela credit budget como SLO
- **Guardrails Reviewer** valida Guardian config por surface
- **Workflow Composer** referencia decision matrix
