# Best Practices — CSM (Customer Service Management)

> Lente: TAE FSI Brasil. Family alvo: Yokohama / Zurich. [VERIFICAR FAMILY RELEASE] onde Apr 2026 docs nao confirmam.

## Case Management core

### Best practices

- **Account / Contact / Consumer hierarchy clara** — em FSI B2C, Consumer (cliente PF) vs Contact (PJ representante) confunde se nao for desenhado
- **Case classification** com taxonomia versionada e revisada trimestralmente. Sem taxonomia, ML predictor + Now Assist for CSM perdem acuracia
- **Auto-assignment** baseado em entitlement (contract / SLA contractual), nao em round-robin generico
- **SLA contractual** referenciado em campo de servico contratado, nao "default 24h"
- **Case Hierarchy** (parent-child) para multi-product cases — ex: cliente PJ com problema em internet banking + maquina de cartao
- **Case Type** distincao Inquiry / Complaint / Request / Issue mantida — em FSI Brasil, Complaint dispara processo regulado (Procon, Banco Central SAC)
- **Closure code** estruturado, sem free text — alimenta KB e ML

### Customer Service Workspace

- **Agent Workspace > legacy form** sempre que possivel — multi-tab, contextual side panel, Now Assist embedded
- **Playbook por case type** com guided steps — onboarding de agente novo cai pra dias em vez de meses
- **Dynamic interaction routing** para canais sincronos (chat, voice) vs async (email, web form)
- **Now Assist for CSM agent assist** [VERIFICAR FAMILY RELEASE] — sumarizacao, prox melhor acao, draft de resposta. Ativar com Guardian em customer-facing reply
- **Sentiment** capturado via Now Assist e roteado para senior agent quando negativo

### Now Assist surfaces

| Surface | Quando usa | Quando evita |
| --- | --- | --- |
| Case Summarization | Hand-off entre tiers, post-resolution review | Cases curtos (<5 interacoes) |
| Generative Q&A em KB customer portal | Self-service deflection FSI (limites, taxas, processos publicos) | KB com info conflitante; risco de hallucination em info regulada |
| Agent assist (draft response) | Volume alto, alta repetitividade | Resposta a complaint regulado — humano valida sempre |
| Sentiment routing | Volume > 1000 cases/dia | Case alta complexidade ja triada por humano |
| Voice transcription + summarization | Call center com gravacao autorizada | Onde gravacao nao tem consent legal explicito |

---

## B2B vs B2C nuances (FSI Brasil)

### B2B (PJ corporativo, cliente premium FSI)

- **Account team model** — relationship manager + technical support + back office, todos com visibility no case
- **Entitlement contract complexa** — customer success plan, premium support, dedicated SLA. Modelar em `service_contract` + `entitlement`
- **Communication channel formal** — email, portal authenticated, voice escalation. Chat nao predominante
- **SLAs frequentemente penalizados financeiramente** — breach virou multa contratual, audit precisa ser bulletproof
- **Multi-stakeholder approval** em mudanca de servico

### B2C (PF banking customer)

- **Volume alto, baixa complexidade media** — millions of cases/year, foco em deflection
- **Self-service portal > agent** sempre que possivel — agent so para casos com complexidade ou regulacao
- **Multi-channel** — app mobile, internet banking, chatbot WhatsApp, agencia. Caso unico atravessa canais
- **Procon / SAC integration** — complaint via canal regulado tem prazo legal, classifier tem que detectar e priorizar
- **LGPD em primeiro plano** — qualquer Now Assist surface que toca dado de cliente PF passa por Guardian + DPO review

### Anti-patterns B2C FSI

1. **Chatbot generico sem grounding em produto/processo do banco** — alucina sobre taxa, limite, prazo regulatorio. Reclamacao no Procon
2. **Agente humano vendo PII completa por default** — LGPD principle of minimization quebrado
3. **Voice recording + Now Assist transcription** sem consentimento explicito do cliente — violacao LGPD

---

## Self-service portal + Now Assist

### Best practices

- **Service Portal customer-facing** com KB scoped para customer (nao expor KB interno operacional)
- **Now Assist Generative Q&A** com sources tagged: KB articles aprovados pelo time de comunicacao + FAQ
- **Fallback humano** sempre claro — botao "falar com atendente" visivel, nao escondido
- **Multi-language** — portugues PT-BR primario, ingles secundario. NASK skill com translation pode ajudar mas valide localizacao com humano nativo
- **Form pre-fill** baseado em authenticated user reduz friction
- **Case status tracking** transparent — cliente ve etapa, prazo, proxima acao

### Anti-patterns portal + Now Assist

1. **Now Assist Q&A sem Guardian** em portal autenticado — risco de PII leak via prompt injection
2. **KB customer e KB interno misturados** — agente busca artigo interno e expoe processo confidencial
3. **Generative answer sem citacao da fonte** — cliente nao confia, contesta, agent humano gasta tempo justificando
4. **Self-service obrigatorio antes de chat** — ferra cliente premium / idoso / situacao critica

---

## Now Assist for CSM (specific)

[Now Assist for CSM docs](https://www.servicenow.com/docs/r/zurich/intelligent-experiences/now-assist-csm.html), acesso 2026-04-26.

Capabilities tipicas (validar versao):
- Case Summarization
- Email Generation (draft de resposta)
- Resolution Notes Generation
- Sentiment Analysis
- Chat Reply Generation

Custos (Now Assist credits) variam por skill. **Em FSI com volume alto, modelar credit budget mensal e alarme em 80% e SADA-mandatory** (ver [docs/sada-framework.md](../sada-framework.md)).

---

## Field Service handoff

### Best practices

- **Case → Work Order** com contexto preservado, nao "see case description"
- **Skills + Territory** matching no Field Service Dispatch — Now Assist pode sugerir despachante mas humano confirma em FSI por regulacao
- **Customer signature mobile** para servico realizado — comprovacao sem papel
- **Inventory / Part request** integrado a Field Service workflow

### Anti-patterns FSM handoff

1. **Work Order criado sem WO type / category** — reporting de FSM quebra
2. **Tecnico em campo sem mobile offline** — em area rural Brasil, conexao instavel mata produtividade
3. **Customer expectation desalinhada** — Case promete 2h, Field Service tem 8h SLA

---

## Anti-patterns CSM gerais (FSI Brasil)

1. **Case sem account / contact** — relacionamento perdido, customer journey invisivel
2. **Closure code "Other"** dominante — Now Assist insights inutil, KB nao gera
3. **Now Assist customer-facing sem regression test** depois de Family upgrade — comportamento muda, reclamacao explode no primeiro dia
4. **Agent Workspace customizado pesadamente** — perde upgrade path, vira tech debt
5. **Multi-tenant data leakage** — agente B2B ve case de cliente concorrente porque ACL fraco. Em FSI Brasil, breach contratual + LGPD

---

## Links oficiais (acesso 2026-04-26)

- [Customer Service Management](https://www.servicenow.com/docs/r/zurich/customer-service-management/customer-service-management.html)
- [Now Assist for CSM](https://www.servicenow.com/docs/r/zurich/intelligent-experiences/now-assist-csm.html)
- [Customer Service Workspace](https://www.servicenow.com/docs/r/zurich/customer-service-management/customer-service-agent-workspace.html)
- [Service Portal customer-facing](https://www.servicenow.com/docs/r/zurich/build-workflows/service-portal/service-portal-landing.html)
- [Field Service Management](https://www.servicenow.com/docs/r/zurich/field-service-management/field-service-management.html)

---

## Para o batalhao

- **Business Analyst Agent** distingue B2B vs B2C cedo — drasticamente diferente em design
- **Enterprise Architect Agent** desenha multi-tenant ACL antes de qualquer Now Assist customer-facing
- **Guardrails Reviewer** revisa LGPD sempre que touch point e cliente PF
- **Workflow Composer** preserva contexto em handoff Case > Work Order
