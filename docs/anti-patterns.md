# Anti-patterns ServiceNow — detection guide

> Lista de patterns que o batalhao DEVE detectar em design review ou audit. Lente: TAE FSI Brasil.
> "Como detectar via MCP" assume MCP read-only para Table API e schema introspection (ver [docs/mcp-landscape.md](mcp-landscape.md)).
> [VERIFICAR FAMILY RELEASE] onde comportamento varia.

Format de cada item:

- **Sintoma**: o que voce observa
- **Por que e ruim**: impacto operacional/regulatorio
- **Detection**: query MCP read-only ou check estatico
- **Fix**: como corrigir
- **Quem entra em jogo**: agente do batalhao responsavel

---

## 1. Business Rule infinite loop

**Sintoma**: performance degrada em pico; logs mostram `current.update()` chamado dentro de business rule que ja eh trigger de update.

**Por que e ruim**: instance lock, transaction fail, SLA breach. Em pico FSI (ex: fechamento mensal), pode derrubar plataforma.

**Detection**:
```
# MCP read-only
sn_table_query: sys_script
filter: action_update=true ^scriptLIKEcurrent.update
```
Inspecionar manualmente cada hit; nem todo `current.update` em update BR e bug.

**Fix**: usar `setWorkflow(false)` quando proposital, ou refatorar para after-update sem re-update, ou usar Flow Designer.

**Agente**: Guardrails Reviewer + Enterprise Architect Agent

---

## 2. ACL chain com role check em cada call

**Sintoma**: list view de tabela demora segundos; ACL com `gs.hasRole()` repetido no condition script.

**Por que e ruim**: roles sao avaliados N vezes para cada record. Lista de 1k records = 1k * N evaluations. Performance crash.

**Detection**:
```
sn_table_query: sys_security_acl
filter: scriptLIKEgs.hasRole
```
Para cada hit, ver se script roda em loop (read ACL aplica por record).

**Fix**: cache role check em GlideRecord pre-loop, ou usar role assignment direto no ACL em vez de script.

**Agente**: Guardrails Reviewer

---

## 3. GlideAggregate em UI policy ou client script

**Sintoma**: form abre lento; GlideAjax chamando script include com GlideAggregate.

**Por que e ruim**: GlideAggregate em hot path mata responsiveness. UI policy roda toda vez que field muda.

**Detection**: code review estatico em client scripts e UI policies que chamam script include — verificar se script include faz `GlideAggregate`.

**Fix**: pre-calcular agregacao em scheduled job + cachear em campo, ou em system property se valor estavel.

**Agente**: Guardrails Reviewer

---

## 4. Catalog item sem variables consistentes

**Sintoma**: dois catalog items relacionados (ex: "VPN access" e "VPN modify") usam variable names e tipos diferentes para mesmo conceito (ex: `user_email` vs `usrEmail`, string vs reference).

**Por que e ruim**: reporting de fulfillment quebra; SLA breakdown impossivel; ML predictor confunde.

**Detection**:
```
sn_table_query: item_option_new
group_by: name
```
Hits onde mesmo nome aparece com tipos diferentes = inconsistencia.

**Fix**: variable set compartilhado entre items relacionados. Refactor com escopo de teste em sub-prod.

**Agente**: Workflow Composer

---

## 5. Custom table que devia ser extension

**Sintoma**: tabela `u_meu_problema_custom` com fields como number, state, priority, assignment_group — replica funcionalidade de `task` mas nao extende.

**Por que e ruim**: perde polymorphism (lists task all), workflow integration, SLA, audit, Now Assist domain skills.

**Detection**:
```
mcp__describe_table: u_meu_problema_custom
```
Se a tabela nao `extends task` mas tem >= 5 fields que `task` ja tem, sinal forte.

**Fix**: refactor para extender `task` ou subclasse adequada. Migrar dados + ACLs + UI policies.

**Agente**: Enterprise Architect Agent

---

## 6. Workflow legacy que devia migrar para Flow Designer

**Sintoma**: business process critico em `wf_workflow` (legacy Workflow Editor) com mais de 30 atividades, manutencao dolorosa.

**Por que e ruim**: legacy workflow tem suporte minimo, sem integration com IntegrationHub spokes modernos, ainda mais limitado para AI Agent integration.

**Detection**:
```
sn_table_query: wf_workflow
filter: active=true^stateLIKEpublished
```
Listar workflows ativos com data > 3 anos.

**Fix**: priorizar migracao por valor de negocio. Flow Designer + Subflows. Manter legacy ate refator concluir; nao fazer big-bang.

**Agente**: Enterprise Architect Agent + Workflow Composer

---

## 7. Now Assist sem Guardian em PII

**Sintoma**: Now Assist surface (Q&A, agent assist, NASK skill) ativa em workflow que toca CPF, account number, KYC info — sem Guardian sensitive topic configurado.

**Por que e ruim**: PII em prompt log; risco LGPD breach. Auditoria DPO encontra.

**Detection**:
```
sn_table_query: sys_gen_ai_log_metadata
filter: input_textLIKEcpf | input_textLIKEconta
```
[VERIFICAR FAMILY RELEASE — campo exato do log pode variar]
Olhar amostra de prompts.

Tambem: `sn_aia_agent` listar agents que tocam case/incident sem Guardian config (verificar via UI ou se houver tabela publica em Apr 2026 [VERIFICAR FAMILY RELEASE]).

**Fix**: ativar Guardian sensitive topic filter; incluir CPF/conta/KYC em pattern. Audit log review pelo DPO antes de promover.

**Agente**: Guardrails Reviewer

---

## 8. AI agent sem owner definido

**Sintoma**: agent em prod sem `sys_created_by` que ainda e empregado, sem owner field documentado.

**Por que e ruim**: shadow IT, ninguem responsavel quando agent alucina ou quebra. SADA Pilar 2 violado.

**Detection**:
```
sn_table_query: sn_aia_agent
filter: active=true
```
Cross-reference `sys_created_by` com active employees (em sys_user). Hit onde owner saiu = candidate.

**Fix**: politica: cada agent record com owner field obrigatorio. Audit trimestral. Reassignment 30 dias antes de retire.

**Agente**: Guardrails Reviewer + Enterprise Architect Agent

---

## 9. Update set hibrido (entre apps / scopes)

**Sintoma**: update set contem records de multiplos scoped apps + global. Promote para sub-prod parte funciona, parte nao.

**Por que e ruim**: deploy quebrado; rollback impossivel cleanly; release managemenent vira improvisacao.

**Detection**:
```
sn_table_query: sys_update_xml
group_by: update_set, sys_scope
```
Update sets com >= 2 scopes diferentes = candidate.

**Fix**: separar update sets por scope. Para futuro: usar Fluent SDK + scoped app boundary.

**Agente**: Enterprise Architect Agent

---

## 10. Customizacao que vira non-customer-update

**Sintoma**: durante upgrade Family release, varios records mostram "Skipped" no upgrade preview porque foram modificados (`sys_metadata.customer_update=true`).

**Por que e ruim**: customizacao orfa, perde feature do upgrade, dificulta troubleshooting com suporte.

**Detection**:
```
sn_table_query: sys_metadata
filter: sys_overridestype=skipped (during upgrade preview)
```
Tambem `sys_update_version` para historia.

**Fix**: cada customizacao precisa business case documentado em ADR. Reverter quando OOTB cobre. Configurar Update Sets para clean separation.

**Agente**: Enterprise Architect Agent + Guardrails Reviewer

---

## 11. Catalog approval com `current.update()` assincronao

**Sintoma**: race condition em fluxos paralelos de approval; aprovacao registra mas estado fica inconsistente.

**Por que e ruim**: aprovacao perdida; auditoria pega "ticket aprovado mas nao cumprido".

**Detection**: code review em scripts de approval. `gr.update()` em loop de approvers sem sync. Logs mostrando approver count != action count.

**Fix**: usar Flow Designer approval activity OOTB. Custom approval logic apenas com state machine bem definido.

**Agente**: Workflow Composer + Guardrails Reviewer

---

## 12. NASK skill sem grounding

**Sintoma**: NASK skill com prompt rico mas zero data source (sem KB lookup, sem table query) — puramente LLM.

**Por que e ruim**: alucinacao garantida em info de processo interno. Em FSI: cliente recebe info errada de regulamento, banco viola informe.

**Detection**:
```
sn_table_query: sys_genai_assist_skill (confirme nome [VERIFICAR FAMILY RELEASE])
```
Inspecionar configs de skill — ausencia de Tool/Source binding.

**Fix**: bind KB lookup ou Table API call no skill flow. Test com casos representativos antes de publicar.

**Agente**: Guardrails Reviewer

---

## 13. Cross-scope read sem ACL exception

**Sintoma**: scoped app A tem script include lendo tabela do scope B sem `Cross Scope Privilege` declarado.

**Por que e ruim**: pode funcionar em DEV (admin), falhar em prod com role normal. Tambem: governanca confusa.

**Detection**:
```
sn_table_query: sys_scope_privilege
filter: target_scopeNOTrequester_scope
```
Listar privileges existentes; comparar com cross-scope reads em script includes.

**Fix**: declarar Cross Scope Privilege explicitamente. Justificativa em commit message.

**Agente**: Enterprise Architect Agent

---

## 14. Dashboard com 40+ widgets

**Sintoma**: portal dashboard executivo com dezenas de widgets, demora 8-15s para load.

**Por que e ruim**: ninguem usa, ferra portal performance, dados desatualizados de qualquer jeito.

**Detection**: list de portal pages com widget count > 20.

**Fix**: design centrado em decisao — 5-7 widgets max por dashboard, com drill-down. Performance Analytics breakdowns substitui widget gigante.

**Agente**: Enterprise Architect Agent

---

## 15. SLA paused sem audit explicito

**Sintoma**: ticket parado em `awaiting customer` por dias sem record dos eventos pause/resume.

**Por que e ruim**: auditoria vai questionar; cliente pode contestar (FSI: contestacao Procon).

**Detection**:
```
sn_table_query: task_sla
filter: pause_durationGREATERTHAN86400 (1 day in seconds)
```
Cross-reference com `sys_audit` em incident state changes. Gaps = falta de log.

**Fix**: SLA pause condition explicita; audit on Incident state mandatory.

**Agente**: Guardrails Reviewer

---

## 16. Discovery em horario de pico

**Sintoma**: incidents de degradacao de rede correlacionados com horario de discovery schedule.

**Por que e ruim**: gera incident proprio; suspeita de ataque; performance pico afetada.

**Detection**:
```
sn_table_query: discovery_status
filter: started_atBETWEEN08:00 AND 18:00
```
Cross-reference com incident por cmdb_ci e timestamp.

**Fix**: schedule em janela de baixo trafego (ex: 02:00-04:00). Mid Server bem dimensionado.

**Agente**: Enterprise Architect Agent

---

## 17. Closure code "Other" dominante

**Sintoma**: > 20% de tickets com `close_code=Other` ou similar generico.

**Por que e ruim**: Now Assist insight inutil; KB nao gera; ML predictor nao aprende; reporting mente.

**Detection**:
```
mcp__sn_aggregate_count: incident
group_by: close_code
filter: state=closed
```
Listar % do total para "Other".

**Fix**: validar close codes vs realidade operacional. UI policy mandatory close code coerente. Treinamento + feedback loop com Service Desk.

**Agente**: Business Analyst Agent + Workflow Composer

---

## 18. Variable in flow context com PII em log

**Sintoma**: Flow Designer log expondo variable com CPF/conta — log retido por padrao 30+ dias.

**Por que e ruim**: LGPD violation. Mesmo internal log expor PII em ambiente nao restrito viola minimization.

**Detection**:
```
sn_table_query: sys_flow_context
filter: snapshotLIKEcpf
```
[VERIFICAR FAMILY RELEASE — schema do flow context]

**Fix**: marcar variable as sensitive em flow design; usar masking; reduzir retention de log; cleanup script.

**Agente**: Guardrails Reviewer

---

## 19. Customer-facing email com customer reply parsing fragile

**Sintoma**: Inbound Email Action parser com regex que quebra quando cliente responde com formatacao incomum.

**Por que e ruim**: email perdido, case nao atualiza, cliente reclama no Procon.

**Detection**: review de Inbound Email Actions com regex; testar com 20 amostras reais (encoded, HTML, mobile email).

**Fix**: usar Now Assist email parsing skill [VERIFICAR FAMILY RELEASE] ou refactor com lib robusta. Fallback humano sempre.

**Agente**: Workflow Composer + Guardrails Reviewer

---

## 20. Now Assist sem regression test pos Family upgrade

**Sintoma**: Family upgrade realizado, agent comeca a se comportar diferente — bloqueando input legitimo ou alucinando em case que antes funcionava.

**Por que e ruim**: production incident, customer impact, suporte vira fila.

**Detection**: pre-upgrade, capturar 50 cases representativos por Now Assist surface. Post-upgrade, re-rodar e diff response. Diff > tolerance = investigar.

**Fix**: regression test framework como parte de upgrade plan. Manual em primeiro upgrade, automatizado para proximos.

**Agente**: Token Saver Specialist + Guardrails Reviewer

---

## Como o batalhao usa este doc

- **Guardrails Reviewer Agent** roda check estatico contra estes 20 patterns em cada PR / design review
- **Enterprise Architect Agent** consulta antes de aprovar schema decision
- **Business Analyst Agent** usa anti-patterns como warning durante outcome translation
- **Workflow Composer** valida que flow gerado nao reintroduz pattern conhecido

## Backlog

- v0.2: adicionar 10 anti-patterns adicionais (mobile, PA, SecOps)
- v0.3: detection scripts em formato MCP query JSON pronto para colar
- v0.4: cross-link com `docs/sada-framework.md` checklist items
