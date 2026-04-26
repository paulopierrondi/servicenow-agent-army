# Best Practices — ITSM

> Lente: TAE FSI Brasil. Comentarios refletem padroes vistos em campo, nao recomendacao oficial ServiceNow.
> Family release alvo: Yokohama / Zurich. Onde Apr 2026 docs nao confirmam, marca [VERIFICAR FAMILY RELEASE].

## Incident Management

### Best practices

- **Classification accuracy primeiro, automacao depois.** Sem categoria/subcategoria coerentes, Now Assist for ITSM resolution suggestion alucina porque grounding e ruim.
- **Major Incident playbooks (MIM)** com Communication Tasks pre-definidos. Em FSI Brasil, regulador (BACEN/ANBIMA) exige timeline auditavel.
- **SLA contractual vs operacional separados.** Mistura quebra reporting executivo. Use `task_sla` + breakdown em PA.
- **Now Assist for ITSM resolution suggestion** ativada com KB tags rigorosas. Nao deixe consumir KB inteiro — alucinacao garantida em ambiente com 30k+ artigos.
- **Resolve code obrigatorio**, validado por UI policy, nao por business rule (UI policy roda no client e da feedback imediato).
- **Caller != Assignee != Watch list** — papel claro reduz noise em notificacao.

### Now Assist surfaces

| Surface | Quando usa | Quando evita |
| --- | --- | --- |
| Resolution Suggestion (ITSM domain skill) | Volume alto (>500 incidents/mes) com KB maduro | KB pobre, categorias bagunçadas |
| Incident Summarization | Hand-off entre tiers, post-incident review | Incidents simples — overhead de credit |
| Generative Q&A em KB | Self-service portal, deflection | KB com info conflitante / desatualizada |
| Agent Workspace summarization | Agent recebe ticket escalado, precisa contexto rapido | Tickets curtos (<5 comentarios) |

### Anti-patterns ITSM (visto em campo)

1. **Assignment group "Service Desk"** que recebe tudo e re-escala manualmente. Mata SLA. Solucao: Assignment Rules + ML Predictor com re-treino trimestral
2. **Catalog request virando incident** porque o time nao quer aprender Catalog. Polui dados de incident, distorce metricas
3. **Resolve code "Other - see notes"** representa > 20% dos tickets. KB nao gera, ML predictor nao aprende, dashboards mentem
4. **Now Assist for ITSM ativado sem KB hygiene**. Agente sugere artigo desatualizado de 2019 sobre processo que mudou. Confianca do usuario cai, adoption morre
5. **Business Rule on Incident `current.update()`** dentro de outra BR — loop infinito. Performance impact em pico
6. **Major Incident criado manualmente** sem trigger por priority/severity. Time esquece de escalar, breach contratual
7. **Customer-facing incident comm via email script** customizado — vira non-customer-update, quebra upgrade de Family
8. **SLA paused sem audit trail claro** — auditoria interna pega "ticket parado 3 dias sem motivo"

### Links oficiais (acesso 2026-04-26)

- [Now Assist for ITSM](https://www.servicenow.com/docs/r/zurich/intelligent-experiences/now-assist-itsm.html)
- [Major Incident Management](https://www.servicenow.com/docs/r/zurich/it-service-management/major-incident-management.html)
- [SLA configuration](https://www.servicenow.com/docs/r/zurich/it-service-management/sla.html)

---

## Change Management

### Best practices

- **Risk Conditions versionadas**, nao "Risk Assessment Questionnaire" sozinho. Conditions evoluem com a operacao; questionario fica defasado
- **CAB workflow com Change Advisory Board virtual** para Standard changes (auto-approve com criterio explicito)
- **Blackout windows configuradas** por CI category. Em FSI Brasil: fechamento mensal, parametros BACEN, dias de pagamento de salario
- **Now Assist Change Risk** para Normal changes — recomenda risco baseado em historico. Validar com 2-3 ciclos antes de confiar full
- **Change Implementation Plan obrigatorio** com tarefas; "see attached doc" nao e plano
- **Backout plan testado** uma vez antes de promover para prod. Sem teste, "rollback nao funcionou em prod" e cronica em todos os bancos

### Now Assist surfaces

| Surface | Quando usa |
| --- | --- |
| Change Risk Recommendation | Normal changes com volume > 50/mes |
| Change Summarization | CAB review, post-implementation review |
| Generative Q&A em policy | Onboarding de novo change manager |

### Anti-patterns Change

1. **Standard change sem template versionado** — vira "Normal disfarcado", perde fast-track
2. **Approval por delegate sem audit** — gerente delega para subordinado, ninguem ve. Auditoria fica cega
3. **CAB que aprova tudo em massa** — vira teatro, risco real nao discutido
4. **Change Risk sobrescrito manualmente sem justificativa em campo dedicado** — mata o aprendizado do modelo
5. **Conflito com problem/incident em CMDB** nao detectado — change sobe em CI com problem aberto, causa novo incidente

### Links oficiais

- [Change Management](https://www.servicenow.com/docs/r/zurich/it-service-management/change-management.html)
- [Now Assist Change Risk](https://www.servicenow.com/docs/r/zurich/intelligent-experiences/now-assist-itsm.html) [VERIFICAR FAMILY RELEASE para Zurich-specific surface]

---

## Problem Management

### Best practices

- **Known Error Database (KEDB)** publica para Service Desk e auto-service. KEDB privada perde valor
- **Root Cause Analysis estruturada** (5 Whys / Fishbone) anexada como template, nao texto livre
- **Problem Tasks** para acoes corretivas com owner e SLA distintos do problem record
- **Now Assist Generative Q&A em problem** para ajudar analista a buscar problemas similares
- **Linkagem Incident-Problem obrigatoria** quando incident e classificado "recurring" — UI policy + validation script

### Anti-patterns Problem

1. **Problem aberto e nunca fechado** — vira backlog visual, ninguem usa
2. **RCA descritiva sem causa raiz real** — "user error" como root cause em 40% dos casos
3. **Known Error sem workaround testado** — Service Desk repassa solucao que nao funciona
4. **Problem record sem link para change que corrigiu** — perda de aprendizado historico
5. **Major problem sem comunicacao ao usuario final** — repete incident pattern

### Links oficiais

- [Problem Management](https://www.servicenow.com/docs/r/zurich/it-service-management/problem-management.html)

---

## Request / Service Catalog

### Best practices

- **Catalog hygiene mensal** — items sem uso ha 6 meses revisitados ou retirados. Catalogo grande sem uso esconde itens uteis
- **Variable consistency** entre items relacionados (ex: "department" sempre referenciando `cmn_department.sys_id`, nao string)
- **Fulfillment SLAs por item**, nao genericos. "Email account creation" tem SLA diferente de "VPN access"
- **Catalog UI Policies para campos dependentes**, nao Client Scripts (UI policy upgrade-safe, Client Script vira customizacao orfa)
- **Now Assist Catalog Search** ativado com category curation. Sem curation, busca generativa sugere item errado
- **Multi-row variable sets** para items repetitivos (ex: provisionar 5 usuarios de uma vez)

### Now Assist surfaces

| Surface | Quando usa |
| --- | --- |
| Catalog Search (Now Assist) | Catalogos > 100 items, alta heterogeneidade de naming |
| Catalog Item Generation (Now Creator) | Onboarding de novos servicos, padroniza spec |
| Generative Q&A em catalog descriptions | Self-service deflection de "qual item devo usar?" |

### Anti-patterns Request

1. **Catalog item sem variables consistentes** — Reporting de fulfillment quebra. Solucao: variable set compartilhado
2. **Approval em record producer com `current.update()`** assincronao — race condition em fluxos paralelos
3. **Catalog Task sem dependencia explicita** — task 2 inicia antes de task 1 terminar, fulfillment incoerente
4. **"Other Request" como item generico** que vira fila de tudo — perde reportabilidade
5. **Now Assist Catalog Search sem curation de categories** — busca sugere "Reset Password" para "preciso de laptop"

### Links oficiais

- [Service Catalog](https://www.servicenow.com/docs/r/zurich/build-workflows/service-catalog/service-catalog-landing.html)
- [Now Assist Catalog Search](https://www.servicenow.com/docs/r/zurich/intelligent-experiences/catalog-search-now-assist.html) [VERIFICAR FAMILY RELEASE]

---

## Cross-process anti-patterns (FSI Brasil)

1. **CMDB pobre matando todo o resto** — Incident sem CI, Change sem impact analysis real, Problem sem trend. Resolver CMDB e pre-requisito para qualquer Now Assist com valor
2. **Customizacao do form sem business case** — campo "observacao 2" porque "alguem pediu". Forma de Incident com 60 campos, 80% nunca usados
3. **Reporting via Reports legacy** quando ja tem PA — duplica calculo, dashboard executivo divergente
4. **Now Assist sem Guardian em customer-facing portal** — risco de prompt injection ou PII em log

---

## Para o batalhao

- **Business Analyst Agent** usa este doc para validar se o outcome do cliente cabe em OOTB
- **Guardrails Reviewer** usa anti-patterns como check-list em design review
- **Workflow Composer** referencia surfaces Now Assist quando workflow toca ITSM/Catalog
