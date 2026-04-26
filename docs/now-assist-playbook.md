# Now Assist Playbook — decision tree por caso

> "Tenho problema X → use Now Assist Y". 12 casos canonicos.
> Lente: TAE FSI Brasil. Family alvo: Yokohama / Zurich. [VERIFICAR FAMILY RELEASE] onde Apr 2026 docs nao confirmam.
> Complementa [docs/best-practices/now-assist.md](best-practices/now-assist.md).

---

## Caso 1: Incident triage (volume alto, KB maduro)

**Sintoma**: Service Desk recebe > 500 incidents/dia. Tier 1 perde tempo classificando e buscando KB. AHT alto.

**Persona**: Service Desk agent + Service Desk manager.

**Surface Now Assist**: Now Assist for ITSM (Resolution Suggestion + Incident Summarization).

**Por que essa**: domain skill OOTB com KB binding nativo; sem custom prompt engineering; integra Agent Workspace.

**Configuracao minima**:
- KB tagged por categoria/produto, com >= 200 artigos relevantes
- Categorias de incident coerentes (max 20 categorias top-level)
- Resolution Suggestion ativada; Incident Summarization ativada
- Guardian: prompt injection + offensiveness on
- SLO: AHT reducao 15%+ em 90 dias

**Risco / Guardian**: KB com info conflitante = alucinacao; Guardian sensitive topic se incident toca PII; revisao mensal de top-3 sugestoes da Now Assist por sample.

**ROI vs solucao caseira**: caseira (custom NASK skill com KB lookup) consome ~10x mais tempo de plataforma + nao tem upgrade path. OOTB: cap mensal de credit conhecido.

**Agentes do batalhao envolvidos**: Business Analyst Agent (validar KB + categorias), Guardrails Reviewer (Guardian config), Token Saver Specialist (otimizar prompt em sub-prod test).

---

## Caso 2: KB authoring (deflection ratio baixa)

**Sintoma**: portal self-service com deflection < 20%. KB articles desatualizados, dificeis de buscar.

**Persona**: Knowledge Manager + Service Desk Tier 2/3 (autores).

**Surface Now Assist**: Now Assist for KB (article generation from incident resolution + summarization).

**Por que essa**: gera draft de KB a partir de incidents resolvidos; reduz friccao do autor.

**Configuracao minima**:
- Trigger: incident closed com close_notes > 100 chars + flag "Promote to KB"
- Now Assist gera draft, autor revisa + publica
- KB taxonomy versionada
- Approval gate humano antes de publicar
- SLO: cadencia de articles publicados, deflection ratio +X%

**Risco / Guardian**: PII em close_notes vazando para KB publico; redacao de cliente nao autorizada. Guardian sensitive topic + manual redaction step.

**ROI vs solucao caseira**: caseira (template Word + autor escreve do zero) cadencia tipica 2-3 articles/mes. Now Assist: 10-15/mes com qualidade comparavel.

**Agentes do batalhao envolvidos**: Workflow Composer (flow trigger), Guardrails Reviewer (PII review), Business Analyst (taxonomy alignment).

---

## Caso 3: Catalog search (catalogo grande, busca ruim)

**Sintoma**: catalogo > 200 items, usuario nao encontra item certo, abre incident "preciso de X" em vez de submit catalog.

**Persona**: Employee end-user + Catalog Manager.

**Surface Now Assist**: Now Assist Catalog Search (Generative Search).

**Por que essa**: busca semantica > keyword search; entende intent ("preciso instalar visual studio" → Software Request item).

**Configuracao minima**:
- Catalog items com description rica, nao so titulo
- Categories curated (max 15-20 top-level)
- Catalog metadata sem typos / inconsistency
- Now Assist Catalog Search ativado em portal
- A/B test contra busca legacy por 30 dias

**Risco / Guardian**: usuario PJ vendo item de outro tenant em multi-account scenario. ACL Catalog item rigoroso; Guardian baseline.

**ROI vs solucao caseira**: caseira (custom search via portal widget + tags) demanda manutencao de tags. Now Assist: zero tag manual, mas exige descricao rica.

**Agentes do batalhao envolvidos**: Workflow Composer (catalog hygiene), Business Analyst Agent.

---

## Caso 4: Change risk recommendation

**Sintoma**: Normal changes acumulam em CAB; risk assessment manual demora; changes baixo-risco esperam aprovacao desnecessaria.

**Persona**: Change Manager + CAB members.

**Surface Now Assist**: Now Assist Change Risk Recommendation [VERIFICAR FAMILY RELEASE para Zurich naming].

**Por que essa**: ML + GenAI sobre historico de change + incidents pos-change. Recomendacao + justificativa em texto.

**Configuracao minima**:
- Historico minimo: 12 meses de change records com close_code + outcome
- Risk Conditions revisadas
- Manual override permitido com audit (nao silent override)
- Validacao: 2-3 ciclos de CAB com humano reviewing recomendacao antes de confiar

**Risco / Guardian**: change critico aprovado automaticamente porque modelo nao viu pattern similar. Mitigation: never auto-approve high-risk; humano sempre confirma.

**ROI vs solucao caseira**: caseira (Risk Assessment Questionnaire + scoring estatico) defasa rapidamente. Now Assist: aprende com historico sem retreino manual.

**Agentes do batalhao envolvidos**: Enterprise Architect Agent (validar dado historico), Guardrails Reviewer.

---

## Caso 5: Discovery noise reduction

**Sintoma**: Event Management gera 50k alerts/dia, time NOC desativa filtro client-side. Real incident perdido.

**Persona**: NOC operator + ITOM architect.

**Surface Now Assist**: Now Assist for AIOps (anomaly detection + alert correlation summarization) [VERIFICAR FAMILY RELEASE].

**Por que essa**: sumariza root cause across alerts correlated; detecta anomaly fora de baseline.

**Configuracao minima**:
- Service Mapping completo para servicos criticos
- Alert correlation rules baseline (mesmo CI + tempo)
- Baseline >= 3 meses de data clean
- Now Assist AIOps ativado, dashboard de incident generated
- SLO: noise ratio < 30% (alerts → incidents)

**Risco / Guardian**: anomaly em metric com seasonality (banco e-commerce em Black Friday, fechamento mensal) = false positive. Tuning + exclusion windows.

**ROI vs solucao caseira**: caseira (Splunk/Datadog + custom correlation) = duplicate spend + hand-off ruim com ITSM. Now Assist OOTB: tudo em ServiceNow context.

**Agentes do batalhao envolvidos**: Enterprise Architect Agent.

---

## Caso 6: Agent Workspace summarization (CSM)

**Sintoma**: Case escalada Tier 2/3 com 30+ comentarios; agente perde 5-10 min lendo historico antes de agir.

**Persona**: CSM agent Tier 2/3.

**Surface Now Assist**: Now Assist for CSM Case Summarization.

**Por que essa**: contextualizacao em segundos; agente foca em resolver, nao em ler.

**Configuracao minima**:
- Case Workspace ativado
- Now Assist CSM domain skill ativado para case summarization
- Guardian: prompt injection + offensiveness
- KPI: AHT reducao em casos escalados

**Risco / Guardian**: PII no case sendo sumarizada; sumario poderia escapar para email gen. Guardian sensitive topic + agent training.

**ROI vs solucao caseira**: caseira (template manual de sumario) = nao escala. OOTB: zero esforco do agente.

**Agentes do batalhao envolvidos**: Guardrails Reviewer.

---

## Caso 7: Code completion para developer (Now Assist for Code)

**Sintoma**: developer demora em boilerplate (ACL, BR, client script template).

**Persona**: ServiceNow Developer + Architect.

**Surface Now Assist**: Now Assist for Code (Studio + IDE/SDK).

**Por que essa**: code generation contextual em Studio + Fluent SDK.

**Configuracao minima**:
- License Pro Plus
- Developer training: usar como suggestion, nao "faz tudo pra mim"
- Code review humano antes de commit
- SLO: tempo medio de implementacao de boilerplate cai > 50%

**Risco / Guardian**: codigo de seguranca critica gerado sem review; codigo financeiro sem teste. Mitigation: code review + automated test obrigatorio para business rules em hot path.

**ROI vs solucao caseira**: caseira (snippet library pessoal de cada dev) = inconsistencia. Now Assist: padronizacao + speed.

**Agentes do batalhao envolvidos**: Token Saver Specialist (verifica que prompt context e suficiente, nao excessivo), Guardrails Reviewer.

---

## Caso 8: Now Creator scaffolding (POC rapido)

**Sintoma**: business demand POC de fluxo novo; arquiteto demora 2 semanas para entregar prototipo.

**Persona**: Solution Architect + business stakeholder.

**Surface Now Assist**: Now Assist for Creator (Build Agent / Flow generation).

**Por que essa**: prototipagem em horas em vez de semanas.

**Configuracao minima**:
- Sandbox dedicado
- Build Agent ativado
- Spec curta clara (input do humano)
- Refator pos-Build Agent obrigatorio antes de promover (Build Agent gera flow funcional, nao production-ready)
- Promocao para sub-prod com aprovacao Platform Owner

**Risco / Guardian**: Build Agent gera customizacao em scope global; flow sem error handling robust. Mitigation: scope dedicado de POC + gate de promocao.

**ROI vs solucao caseira**: caseira (arquiteto desenha do zero) = 2-4 semanas. Now Creator: 1-3 dias para POC validavel + 3-5 dias para refator.

**Agentes do batalhao envolvidos**: Workflow Composer (refator pos-generation), Enterprise Architect Agent.

---

## Caso 9: Sentiment routing (CSM customer)

**Sintoma**: case com cliente irritado nao roteado para senior agent; escalation tarde, churn risk.

**Persona**: CSM operations + senior agent + churn manager.

**Surface Now Assist**: Now Assist Sentiment Analysis (CSM domain).

**Por que essa**: detecta sentiment negativo em case description + comments; rota / flag automatico.

**Configuracao minima**:
- Domain skill ativado
- Routing rule: sentiment negative + churn risk > X → senior agent
- Guardian: sensitive topic
- A/B test 30 dias para validar acuracia

**Risco / Guardian**: sentiment errado em portuguese coloquial / sarcasm. Tuning multilanguage [VERIFICAR FAMILY RELEASE para PT-BR support level].

**ROI vs solucao caseira**: caseira (regex em comments) = baixa acuracia. Now Assist: melhor mas nao perfeito; humano valida.

**Agentes do batalhao envolvidos**: Business Analyst Agent (validar KPI churn), Guardrails Reviewer.

---

## Caso 10: Multi-language self-service (PT-BR + EN)

**Sintoma**: portal employee global; brasileiros submetem em PT-BR, agente tier 1 anglofono nao entende.

**Persona**: Employee global multi-region + Service Desk multi-region.

**Surface Now Assist**: NASK custom skill com translation + Now Assist Q&A com KB multi-language.

**Por que essa**: NASK skill com translation step pre-search; KB translatado e mantido em ambos idiomas.

**Configuracao minima**:
- KB com versao PT-BR e EN (curadoria humana, nao auto-translate sem review)
- NASK skill: detect language + route to correct KB
- Guardian: sensitive topic
- Fallback humano com language tag claro

**Risco / Guardian**: translation alucinada em info regulada; gloss diferente entre versoes. Mitigation: native speaker review + version diff alarm.

**ROI vs solucao caseira**: caseira (Google Translate widget) = ruim em jargon corporativo. NASK custom: melhor mas exige manutencao.

**Agentes do batalhao envolvidos**: Workflow Composer, Guardrails Reviewer (LGPD se PII no fluxo).

---

## Caso 11: Vendor performance review (procurement)

**Sintoma**: procurement review trimestral de vendor demora 2 semanas; reune dados de incidents, changes, SLAs, contratos manualmente.

**Persona**: Procurement manager + vendor manager.

**Surface Now Assist**: AI Agent (AI Agent Studio) com tools para Table API queries + summarization skill.

**Por que essa**: orchestracao multi-step (collect data + summarize + recommend action). Workflow agentic se justifica em volume + complexidade.

**Configuracao minima**:
- Tools: Table API readonly em vendor, contracts, incidents linked, SLAs
- Skill NASK para summarization estruturada
- Trigger: scheduled trimestral ou on-demand
- Output: report draft (humano valida)
- Audit log completo
- Owner nominal: vendor manager

**Risco / Guardian**: agent escreve em tabela errada (defesa: tools whitelist read-only); recomendacao errada de penalty (defesa: human approval). Guardian sensitive topic em contract financial data.

**ROI vs solucao caseira**: caseira (analista monta report manual) = 2 semanas/trimestre. Agent: 1-2 dias com humano refinando.

**Agentes do batalhao envolvidos**: Enterprise Architect Agent, Workflow Composer, Guardrails Reviewer.

---

## Caso 12: Domain skill grounding (HR Q&A)

**Sintoma**: Now Assist HR Q&A em portal employee responde sobre processo de RH desatualizado; HR manager pego de surpresa em compliance audit.

**Persona**: Employee + HR manager + HR ops.

**Surface Now Assist**: Now Assist for HR Service Delivery Q&A com grounding em policy documents + HR KB.

**Por que essa**: domain skill com data fabric explicito de HR policies (KB scoped + Document Intelligence ingestion).

**Configuracao minima**:
- HR KB com policy documents tagged
- Document Intelligence (NASK 7.0+) [VERIFICAR FAMILY RELEASE] para parsing de PDFs de policy
- Q&A respond com cite source obrigatorio
- Guardian: sensitive topic (employee PII, salary, performance)
- Fallback: HR case auto-criado se Q&A nao confiante

**Risco / Guardian**: empregado recebe info errada de processo de demissao / licenca / beneficio. LGPD em PII employee. Mitigation: cite source + Guardian + escalation auto.

**ROI vs solucao caseira**: caseira (HR Q&A bot generico) = alucinacao alta; (FAQ static) = nao escala. Domain skill: melhor balance.

**Agentes do batalhao envolvidos**: Business Analyst Agent (mapping de HR processes), Guardrails Reviewer (LGPD HR), Workflow Composer.

---

## Decision tree resumido

```
Tenho problema com...
├── Volume alto + repetitivo (incident, case, request)?
│   └── Domain skill OOTB (Caso 1, 6, 9)
├── Conteudo a gerar (KB, draft de email, code)?
│   └── Geracao surface (Caso 2, 7, 8)
├── Busca / search?
│   └── Now Assist Q&A / Catalog Search (Caso 3, 12)
├── Decisao com data historico?
│   └── Recommendation surface (Caso 4)
├── Anomalia / correlacao?
│   └── AIOps surface (Caso 5)
└── Multi-step com decisao + acao?
    └── AI Agent Studio (Caso 11)
```

---

## Para o batalhao

- **Business Analyst Agent** entra em todos os casos para mapear outcome → caso canonico
- **Workflow Composer** instancia o caso com config do cliente
- **Guardrails Reviewer** valida Guardian + audit em todos
- **Token Saver Specialist** otimiza prompt onde NASK / custom skill (Caso 10, 11) usa prompt longo

---

## Backlog

- v0.2: 12 casos adicionais (SecOps incident, Procurement contract review, Risk assessment, etc.)
- v0.3: cada caso com Fluent SDK 4.6 example code
- v0.4: cada caso com test plan template (50 casos representativos)
