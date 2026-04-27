# 30-Day Promo Backlog — ServiceNow Agent Army

> Thirty publishable LinkedIn posts. EN + PT-BR per day. Light review only; no placeholders. Source of truth: gallery/, docs/now-assist-playbook.md, docs/anti-patterns.md, docs/pierrondi-ea-positioning.md.

Distribution:
- Days 1-7 — Pierrondi EA Week (hero recurrence)
- Days 8-14 — Gallery cases (7 of 10)
- Days 15-21 — Now Assist surfaces deep-dives
- Days 22-28 — SADA Framework (pillars, anti-patterns, governance)
- Days 29-30 — Launch + roadmap

Repo link literal: `github.com/paulopierrondi/servicenow-agent-army`

---

## Dia 1 — 2026-04-27 — Outcome obsession

**Pillar/Hero**: Pierrondi EA

**Hook**: Most ServiceNow advice is theater.

**Métrica alvo**: impressions + saves

### Versão EN

Most ServiceNow advice is theater.

Decks. Target-state diagrams. North-star architecture without a number attached. Then a roadmap with twelve items and nobody can rank them by value.

Pierrondi EA was built to answer one question first: what changes in 90 days, and what is it worth?

Until that is answered, it refuses to draw. No boxes-and-lines. No "we recommend a phased approach". One outcome metric, one direction, one number, 90-day horizon. If the metric is missing, it asks once and stops.

That is the whole product. The other 19 advisors take over after the value bar is set.

The repo has the brief, the prompt, and ten gallery cases where this discipline ran. Worth ten minutes if your last roadmap had no number on top.

When was the last architecture proposal you signed off on with a 90-day outcome metric?
github.com/paulopierrondi/servicenow-agent-army

### Versão PT-BR

A maior parte do conselho ServiceNow e teatro.

Slides. Target-state. North-star sem numero anexado. Depois um roadmap com 12 itens e ninguem sabe priorizar.

Pierrondi EA existe para responder uma pergunta primeiro: o que muda em 90 dias, e quanto vale?

Enquanto isso nao for respondido, ele recusa desenhar. Sem caixinha-e-flecha. Sem "recomendamos uma abordagem em fases". Uma metrica de outcome, uma direcao, um numero, horizonte de 90 dias. Se faltar a metrica, ele pergunta uma vez e para.

Esse e o produto inteiro. Os outros 19 conselheiros entram depois que a barra de valor esta posta.

O repo tem o brief, o prompt e dez casos de galeria onde essa disciplina rodou. Vale 10 minutos se a sua ultima proposta de arquitetura nao tinha numero em cima.

Qual ultima proposta de arquitetura tinha um numero anexado?
github.com/paulopierrondi/servicenow-agent-army

### Hashtags
#ServiceNow #SADA #FSI

### Engagement question (CTA)
Qual ultima proposta de arquitetura na sua mesa tinha um numero de outcome em 90 dias anexado?

### Source / link
docs/pierrondi-ea-positioning.md

---

## Dia 2 — 2026-04-28 — Four-block contract

**Pillar/Hero**: Pierrondi EA

**Hook**: Antes de desenhar, qual numero vai mudar?

**Métrica alvo**: saves + DM

### Versão EN

Antes de desenhar, qual numero vai mudar?

Pierrondi EA carries a fixed shape on every response. Four blocks. No exceptions.

𝐎𝐮𝐭𝐜𝐨𝐦𝐞 (90 days). One metric, one direction, one number. Example: reduce p95 incident-to-assignment from 7m to 2m.

Value. Currency figure with stated trade-off. Example: BRL 1.2M/yr saved at 18k incidents/yr; cost-of-build BRL 280k one-time + BRL 14k/yr Now Assist credits.

Deliverables. Three to five concrete items, each with one named owner and a date. "The team" is not an owner.

Risks and mitigations. At most three, each with a stated go/no-go threshold.

If any block is missing or weak, the advisor stops and asks. It does not add a fifth block to be helpful.

The four-block contract is what makes the rest of the council usable. Without it, every downstream agent is solving the wrong problem with confidence.

Open the repo and run it against the worst item in your backlog. Watch what it refuses.
github.com/paulopierrondi/servicenow-agent-army

### Versão PT-BR

Antes de desenhar, qual numero vai mudar?

Pierrondi EA tem uma forma fixa em toda resposta. Quatro blocos. Sem excecao.

𝐎𝐮𝐭𝐜𝐨𝐦𝐞 (90 dias). Uma metrica, uma direcao, um numero. Exemplo: reduzir p95 do incident-to-assignment de 7m para 2m.

Valor. Cifra em moeda com trade-off explicito. Exemplo: BRL 1.2M/ano economizado em 18k incidents/ano; custo de build BRL 280k one-time + BRL 14k/ano em creditos Now Assist.

Entregaveis. Tres a cinco itens, cada um com um dono nomeado e uma data. "O time" nao e dono.

Riscos e mitigacoes. No maximo tres, cada um com threshold de go/no-go.

Se qualquer bloco esta fraco ou ausente, o conselheiro para e pergunta. Ele nao adiciona um quinto bloco para ser util.

O contrato de quatro blocos e o que torna o resto do conselho usavel. Sem isso, cada agente downstream resolve o problema errado com confianca.

Abra o repo e rode contra o pior item do seu backlog. Veja o que ele recusa.
github.com/paulopierrondi/servicenow-agent-army

### Hashtags
#ServiceNow #SADA #PT-BR

### Engagement question (CTA)
Qual desses quatro blocos costuma faltar nas propostas que voce aprova?

### Source / link
agents/pierrondi-enterprise-architect.md

---

## Dia 3 — 2026-04-29 — Refusal in action

**Pillar/Hero**: Pierrondi EA + Gallery 01 (incident triage)

**Hook**: I asked Pierrondi EA to architect an incident triage. It refused.

**Métrica alvo**: impressions + comments

### Versão EN

I asked Pierrondi EA to architect an incident triage. It refused.

The user prompt was the kind every TAE in FSI hears weekly: "800 incidents per day, 7-minute average to classify, the risk team blocks anything that touches customer data, fix it with Now Assist."

Pierrondi EA did not draw. It asked one thing: which metric changes in 90 days, and what is it worth?

The first answer was vague. Pierrondi EA stopped. It refused to recommend Now Assist for ITSM, refused to scope NASK skills, refused to size Guardian config.

Once the user came back with "p95 time-to-assignment, target 40 percent reduction in 90 days, measured on incidents that change assignment_group at least once", the council moved. Resolution Suggestion + Incident Summarization. Guardian sensitive-topic on credit data. Cost gate at 80 percent of monthly credit budget.

The refusal is the move. AI on top of a vague outcome burns credits without producing value.

Open gallery case 01 in the repo. Compare the original user prompt with the four-block contract Pierrondi EA produced. The diff is the work.
github.com/paulopierrondi/servicenow-agent-army

### Versão PT-BR

Pedi pro Pierrondi EA arquitetar um triage de incident. Ele recusou.

O prompt do usuario era o que todo TAE em FSI ouve toda semana: "800 incidents por dia, 7 minutos pra classificar, time de risco trava qualquer coisa que toca dado de cliente, resolve com Now Assist".

Pierrondi EA nao desenhou. Ele perguntou uma coisa: qual metrica muda em 90 dias, e quanto vale?

A primeira resposta foi vaga. Pierrondi EA parou. Recusou recomendar Now Assist for ITSM, recusou escopar NASK skill, recusou dimensionar Guardian.

Quando o usuario voltou com "p95 do time-to-assignment, alvo 40 por cento de reducao em 90 dias, medido em incidents que mudam de assignment_group pelo menos uma vez", o conselho avancou. Resolution Suggestion + Incident Summarization. Guardian sensitive-topic em dado de credito. Gate de custo em 80 por cento do orcamento mensal de credito.

A recusa e o movimento. AI em cima de outcome vago queima credito sem gerar valor.

Abre o gallery case 01 no repo. Compara o prompt original com o contrato de quatro blocos que o Pierrondi EA produziu. O diff e o trabalho.
github.com/paulopierrondi/servicenow-agent-army

### Hashtags
#ServiceNow #NowAssist #FSI

### Engagement question (CTA)
Quando foi a ultima vez que voce recusou desenhar arquitetura por falta de outcome?

### Source / link
gallery/01-incident-triage-fsi/case.md

---

## Dia 4 — 2026-04-30 — One owner

**Pillar/Hero**: Pierrondi EA

**Hook**: One owner, never "the team".

**Métrica alvo**: saves

### Versão EN

One owner, never "the team".

Group ownership is not ownership. It is a way to avoid the fight about who is on the hook when the agent goes wrong, when Guardian misclassifies, when Now Assist credits cross the budget.

Pierrondi EA refuses to accept "the platform team owns this", "the AI center of excellence is responsible", or any phrasing that does not name a person. Every deliverable in the four-block contract carries one named role and a date. ITSM lead, by W+2. Security architect, by W+3. Change manager, by W+4.

This is not bureaucracy. It is the pre-condition for SADA Pillar 2 and for the AI agent governance review. An agent without an owner becomes shadow IT the moment something breaks.

The gallery cases follow this rule. Open any case file and the deliverables list reads as a roster, not a committee.

Pull your last AI agent project plan. Count how many deliverables have a named single owner. If the answer is below 80 percent, you have a governance problem before you have an AI problem.

Quem na sua organizacao e dono nominal do ultimo AI agent que voce promoveu?
github.com/paulopierrondi/servicenow-agent-army

### Versão PT-BR

Um dono, nunca "o time".

Ownership de grupo nao e ownership. E forma de evitar a discussao sobre quem leva o tombo quando o agent erra, quando Guardian classifica errado, quando o credito Now Assist passa do orcamento.

Pierrondi EA recusa aceitar "o time de plataforma e dono disso", "o centro de excelencia em AI e responsavel" ou qualquer frase que nao nomeie uma pessoa. Cada entregavel no contrato de quatro blocos tem um papel nomeado e uma data. ITSM lead, W+2. Security architect, W+3. Change manager, W+4.

Isso nao e burocracia. E pre-requisito do SADA Pilar 2 e do governance review de AI agent. Um agent sem dono vira shadow IT no momento em que algo quebra.

Os casos da galeria seguem essa regra. Abra qualquer case file e a lista de entregaveis le como elenco, nao como comite.

Pega seu ultimo plano de projeto de AI agent. Conta quantos entregaveis tem dono unico nomeado. Se a resposta esta abaixo de 80 por cento, voce tem problema de governanca antes de ter problema de AI.

Quem na sua organizacao e dono nominal do ultimo AI agent que voce promoveu?
github.com/paulopierrondi/servicenow-agent-army

### Hashtags
#ServiceNow #AIAgents #SADA

### Engagement question (CTA)
Quantos por cento dos entregaveis no seu ultimo plano de AI agent tem dono unico nomeado?

### Source / link
agents/pierrondi-enterprise-architect.md

---

## Dia 5 — 2026-05-01 — Working hypothesis

**Pillar/Hero**: Pierrondi EA

**Hook**: Working hypothesis is not a value claim.

**Métrica alvo**: saves

### Versão EN

Working hypothesis is not a value claim.

Half the AI business cases that cross my desk start with "this will save millions". No source data. No baseline. Sometimes a vendor slide as the citation.

Pierrondi EA caps every value figure at the source data. If the user has no current metric, the value block is labeled "working hypothesis" and a 14-day baseline becomes a deliverable, not an afterthought.

Example from gallery 01: "BRL 1.2M/yr saved at 18k incidents/yr (analyst time, 5 min/ticket * 4 BRL/min, conservative). Working hypothesis until 14-day baseline confirms incident volume."

The label changes the conversation. CFO reads "working hypothesis" and asks for the baseline. Without the label, the same CFO signs off and is angry six months later when the savings did not show.

The discipline is not pessimism. It is calibration. A claim with a source data line is harder to argue against. A claim with no source is theater.

Pull your last AI business case. Mark every value claim that has no source line. If more than half are unmarked, you are selling vibes.

Where in your last business case did "working hypothesis" appear?
github.com/paulopierrondi/servicenow-agent-army

### Versão PT-BR

"Hipotese de trabalho" nao e claim de valor.

Metade dos business cases de AI que chegam aqui comecam com "vai economizar milhoes". Sem dado fonte. Sem baseline. As vezes um slide de vendor como citacao.

Pierrondi EA limita toda cifra de valor ao dado fonte. Se o usuario nao tem metrica atual, o bloco de valor leva label "hipotese de trabalho" e um baseline de 14 dias vira entregavel, nao detalhe.

Exemplo do gallery 01: "BRL 1.2M/ano economizado em 18k incidents/ano (tempo de analista, 5 min/ticket * 4 BRL/min, conservador). Hipotese de trabalho ate baseline de 14 dias confirmar volume de incident".

A label muda a conversa. CFO le "hipotese de trabalho" e pede o baseline. Sem a label, o mesmo CFO assina e fica bravo seis meses depois quando o saving nao apareceu.

A disciplina nao e pessimismo. E calibracao. Claim com linha de fonte e mais dificil de discutir. Claim sem fonte e teatro.

Pega seu ultimo business case de AI. Marca toda cifra que nao tem linha de fonte. Se mais que metade nao tem, voce esta vendendo clima.

Onde no seu ultimo business case apareceu "hipotese de trabalho"?
github.com/paulopierrondi/servicenow-agent-army

### Hashtags
#ServiceNow #SADA #FSI

### Engagement question (CTA)
Que percentual das suas claims de valor de AI carregam linha de fonte explicita?

### Source / link
docs/pierrondi-ea-positioning.md

---

## Dia 6 — 2026-05-02 — Refusing Now Assist

**Pillar/Hero**: Pierrondi EA + Gallery 08 (performance ACL chain)

**Hook**: When Pierrondi EA refuses Now Assist.

**Métrica alvo**: impressions + comments

### Versão EN

When Pierrondi EA refuses Now Assist.

Gallery case 08. List view of the case table takes 7 seconds to load on a tier-1 LATAM bank, 200 concurrent CSM agents. The ask: "put Now Assist on top to summarize while it loads".

The council looked at it and said no.

Performance Tuner ran read-only diagnostics and found the top 5 offenders: recursive ACL on `account.industry`, a chained Business Rule with `current.update()` inside another, two unindexed custom fields used as list filters, a GlideAggregate inside a Display Business Rule.

Pierrondi EA refused to add a Now Assist surface. The structural problem stays structural. Adding a summarization on top of a slow list view does not make the list view faster. It adds credit cost on top of latency.

Target after the structural fix: list-view p95 below 1.2 seconds, validated with before-after metrics on prod-equivalent sub-prod data. Zero Now Assist credits spent on this surface.

This is the gallery example that says "no". A council that always recommends Now Assist is a council you cannot trust.

Where in your roadmap is AI being used to mask a platform problem?
github.com/paulopierrondi/servicenow-agent-army

### Versão PT-BR

Quando o Pierrondi EA recusa Now Assist.

Gallery case 08. List view do case demora 7 segundos para carregar num banco tier-1 LATAM, 200 agentes CSM concorrentes. O pedido: "bota Now Assist em cima para sumarizar enquanto carrega".

O conselho olhou e disse nao.

Performance Tuner rodou diagnostico read-only e achou os 5 piores: ACL recursiva em `account.industry`, Business Rule encadeada com `current.update()` dentro de outra, dois custom fields sem indice usados em list filter, GlideAggregate dentro de Display Business Rule.

Pierrondi EA recusou adicionar surface Now Assist. O problema estrutural continua estrutural. Colocar sumarizacao em cima de list view lenta nao deixa o list view mais rapido. Adiciona custo de credito sobre latencia.

Alvo apos fix estrutural: p95 do list view abaixo de 1.2 segundos, validado com metrica antes-depois em sub-prod com volume prod-equivalente. Zero credito Now Assist gasto nessa surface.

Esse e o gallery que diz "nao". Conselho que sempre recomenda Now Assist e conselho em que voce nao pode confiar.

Onde no seu roadmap AI esta mascarando problema de plataforma?
github.com/paulopierrondi/servicenow-agent-army

### Hashtags
#ServiceNow #NowAssist #FSI

### Engagement question (CTA)
Mostra um caso onde AI sobre plataforma quebrada produziu ROI real.

### Source / link
gallery/08-performance-acl-chain/case.md

---

## Dia 7 — 2026-05-03 — Four-block contract recap

**Pillar/Hero**: Pierrondi EA

**Hook**: The four-block contract, in one table.

**Métrica alvo**: saves + repo stars

### Versão EN

The four-block contract, in one table.

Block | Question | Example
--- | --- | ---
Outcome (90 days) | What metric changes? | Reduce p95 incident-to-assignment from 7m to 2m.
Value | What is it worth? | BRL 1.2M/yr saved at 18k incidents/yr; cost-of-build BRL 280k one-time + BRL 14k/yr Now Assist credits.
Deliverables | What ships, who owns, when? | Skill prompt v1, owner ITSM lead, by W+2.
Risks | What kills it, where do we stop? | Credit burn over 4k/mo blocks rollout; cap at 3.5k via daily quota.

If any block is missing, Pierrondi EA stops. The other 19 advisors do not move until the contract is in place.

This is the entire mechanism. Not the prompt, not the agent stack, not the SDK scaffold. The discipline of refusing to draw before the contract is filled.

The repo has the agent, the brief, ten gallery cases that ran this discipline, and a 30-day post backlog. Twelve minutes to clone and run against your backlog.

Test it Monday. Pick the noisiest item on your roadmap. Fill the four blocks. If you cannot, that item drops out of Q2.

What item on your roadmap survives the four-block contract?
github.com/paulopierrondi/servicenow-agent-army

### Versão PT-BR

O contrato de quatro blocos, em uma tabela.

Bloco | Pergunta | Exemplo
--- | --- | ---
Outcome (90 dias) | Que metrica muda? | Reduzir p95 do incident-to-assignment de 7m para 2m.
Valor | Quanto vale? | BRL 1.2M/ano economizado em 18k incidents/ano; custo de build BRL 280k one-time + BRL 14k/ano em creditos Now Assist.
Entregaveis | O que vai, quem dono, quando? | Skill prompt v1, dono ITSM lead, W+2.
Riscos | O que mata, onde paramos? | Credito acima de 4k/mes bloqueia rollout; cap em 3.5k via cota diaria.

Se qualquer bloco falta, Pierrondi EA para. Os outros 19 conselheiros nao se movem ate o contrato estar pronto.

Esse e o mecanismo inteiro. Nao e o prompt, nao e a stack de agente, nao e o scaffold SDK. E a disciplina de recusar desenhar antes do contrato estar preenchido.

O repo tem o agent, o brief, dez gallery cases que rodaram essa disciplina e um backlog de 30 posts. Doze minutos para clonar e rodar contra seu backlog.

Testa segunda. Escolhe o item mais barulhento do seu roadmap. Preenche os quatro blocos. Se nao conseguir, esse item sai do Q2.

Qual item do seu roadmap sobrevive ao contrato de quatro blocos?
github.com/paulopierrondi/servicenow-agent-army

### Hashtags
#ServiceNow #SADA #PT-BR

### Engagement question (CTA)
Quais itens do seu Q2 sobrevivem ao contrato de quatro blocos?

### Source / link
docs/pierrondi-ea-positioning.md

---

## Dia 8 — 2026-05-04 — Gallery 01 incident triage

**Pillar/Hero**: Gallery 01

**Hook**: 800 incidents per day. 7-minute classification. Risk team blocks PII.

**Métrica alvo**: impressions

### Versão EN

800 incidents per day. 7-minute classification. Risk team blocks PII.

Tier-1 Brazilian bank, 50 percent of incidents from internet banking and PIX, KB at ~1,400 articles with mixed quality. The ask sounded simple: turn on Now Assist for ITSM.

The council split the work. Business Analyst Agent separated Resolution Suggestion (KB-grounded, faster ROI) from Incident Summarization (tier hand-off). ITSM Specialist confirmed OOTB domain skill fits the volume; no NASK custom skill warranted.

CTA Agent set the boundary: Now Assist domain skill plus KB tagging. No schema extension. Now Assist Coach mapped Guardian sensitive-topic to any incident touching credit data. Cite-source mandatory on every suggestion. Guardrails Reviewer pushed back on auto-resolution; credit-related incidents need manual approval before close.

Targets: p95 time-to-assignment down 40 percent in 90 days, measured on incidents changing assignment_group at least once. AHT down 15 percent secondary metric. Rollout to 30 percent of analysts first; full rollout only after 2-week qualitative review.

Cost gate: monthly Now Assist credit budget with alarm at 80 percent. Without the budget, the program does not pass design review.

Acceptance: top-3 Resolution Suggestion reviewed monthly on stratified sample. Precision below 70 percent sends KB hygiene back to top of backlog before any further surface activation.

Open the case file. Notice no AHT savings claim is made before baseline.
github.com/paulopierrondi/servicenow-agent-army

### Versão PT-BR

800 incidents por dia. Classificacao em 7 minutos. Time de risco trava PII.

Banco tier-1 brasileiro, 50 por cento dos incidents vindo de internet banking e PIX, KB com ~1,400 artigos de qualidade mista. O pedido parecia simples: liga Now Assist for ITSM.

O conselho dividiu o trabalho. Business Analyst separou Resolution Suggestion (com KB grounding, ROI mais rapido) de Incident Summarization (handoff entre tiers). ITSM Specialist confirmou que domain skill OOTB cabe no volume; NASK custom skill nao se justifica.

CTA Agent fixou o boundary: Now Assist domain skill + KB tagging. Zero extensao de schema. Now Assist Coach mapeou Guardian sensitive-topic em todo incident que toca dado de credito. Cite-source obrigatorio em toda sugestao. Guardrails Reviewer recusou auto-resolution; incidents de credito precisam de aprovacao manual antes do close.

Alvos: p95 do time-to-assignment cai 40 por cento em 90 dias, medido em incidents que mudam de assignment_group pelo menos uma vez. AHT cai 15 por cento como metrica secundaria. Rollout para 30 por cento dos analistas primeiro; rollout total so depois de review qualitativo de 2 semanas com o lider de service desk.

Gate de custo: orcamento mensal de credito Now Assist com alarme em 80 por cento. Sem o orcamento, o programa nao passa no design review.

Aceitacao: top-3 da Resolution Suggestion revisada mensal em sample estratificada. Precision abaixo de 70 por cento manda KB hygiene de volta pro topo do backlog antes de ativar qualquer outra surface.

Abre o case file. Note que nenhuma claim de saving de AHT e feita antes do baseline.
github.com/paulopierrondi/servicenow-agent-army

### Hashtags
#ServiceNow #NowAssist #FSI

### Engagement question (CTA)
Qual e a sua precisao alvo na Resolution Suggestion antes de declarar adocao?

### Source / link
gallery/01-incident-triage-fsi/case.md

---

## Dia 9 — 2026-05-05 — Gallery 02 CMDB health

**Pillar/Hero**: Gallery 02

**Hook**: 80k CIs. Completeness at 62 percent. Quarterly mutirao does not move the number.

**Métrica alvo**: saves

### Versão EN

80k CIs. Completeness at 62 percent. Quarterly mutirao does not move the number.

Global manufacturer LATAM, hybrid cloud plus three on-prem DCs. Discovery patterns partial. Identification rules last reviewed 18 months ago. Constraint: no production writes during the analysis cycle.

The council refused to put Now Assist on top. CTA Agent flagged the cited anti-pattern: fixing CMDB without revising Identification & Reconciliation rules first is the gateway move. Activating Now Assist for ITOM on a polluted CMDB produces confident bad recommendations.

Business Analyst Agent translated the request into three measurable KPIs: completeness, duplicate rate, orphan rate. Demanded targets per CI class, not a global average that hides poor classes.

Enterprise Architect Agent split the work into read-only assessment plus a write phase governed by change control. Imposed cross-class review before any rule change. Workflow Composer routed all writes through Flow Designer with approval, never direct writes from the agent.

Targets: completeness 62 to 80 percent in two quarters. Duplicate rate down 25 percent. Orphan rate by class. Hard constraint: zero CMDB writes from the agent.

Quarterly review board signs off on the remediation plan. Follow-up review 30 days after each rule change.

Where do you have AI on top of polluted CMDB data right now?
github.com/paulopierrondi/servicenow-agent-army

### Versão PT-BR

80k CIs. Completeness em 62 por cento. Mutirao trimestral nao move o numero.

Manufacturer global LATAM, cloud hibrida mais tres DCs on-prem. Patterns de Discovery parciais. Regras de Identification revisadas pela ultima vez ha 18 meses. Restricao: zero write em prod durante a analise.

O conselho recusou colocar Now Assist em cima. CTA Agent apontou o anti-pattern citado: arrumar CMDB sem revisar Identification & Reconciliation primeiro e o movimento de entrada. Ativar Now Assist for ITOM em CMDB poluido produz recomendacao errada com confianca.

Business Analyst traduziu o pedido em tres KPIs mensuraveis: completeness, duplicate rate, orphan rate. Exigiu alvo por classe de CI, nao media global que esconde classes ruins.

Enterprise Architect dividiu o trabalho em assessment read-only mais fase de write sob change control. Imps cross-class review antes de qualquer mudanca de regra. Workflow Composer rotou todo write por Flow Designer com aprovacao, nunca write direto do agent.

Alvos: completeness de 62 para 80 por cento em dois trimestres. Duplicate rate cai 25 por cento. Orphan rate por classe. Restricao dura: zero write em CMDB pelo agent.

Quarterly review board assina o plano de remediacao. Follow-up 30 dias depois de cada mudanca de regra.

Onde voce tem AI rodando em cima de CMDB poluido agora?
github.com/paulopierrondi/servicenow-agent-army

### Hashtags
#ServiceNow #AIAgents #SADA

### Engagement question (CTA)
Qual a sua orphan rate atual por classe de CI critica?

### Source / link
gallery/02-cmdb-health-quarterly/case.md

---

## Dia 10 — 2026-05-06 — Gallery 03 change risk BACEN

**Pillar/Hero**: Gallery 03

**Hook**: CAB virou teatro. 90 normal changes em 1 hora. Ninguem discute risco real.

**Métrica alvo**: comments + DM

### Versão EN

CAB virou teatro.

That was the user's exact framing. Tier-1 Brazilian bank, ~120 Normal changes per month plus ~250 Standard. CAB approves in an hour and nobody discusses risk. Risk team wants Now Assist Change Risk but does not trust a black-box model. BACEN auditors are the constraint.

Business Analyst Agent reframed the request: CAB is a process problem first, not a model problem. Recommended decoupling Standard fast-track from the Now Assist activation.

ServiceNow Architect Coach (SADA) forced three alternatives: keep manual, Now Assist Change Risk + manual override, custom NASK skill on top of historical change data. Selected the OOTB option for upgrade safety and field-tested ROI. Custom NASK rejected on upgrade-path risk.

Enterprise Architect Agent validated 18 months of clean history and demanded blackout windows be machine-readable, not text in a CAB invite.

Guardrails Reviewer enforced: never auto-approve high-risk; manual override requires structured justification field; 2-3 CAB cycles in shadow mode before activation.

Targets: 30 percent reduction in CAB review time on Normal changes inside 90 days. Zero auto-approve for high-risk. Manual-override rate below 15 percent. Above that means the model is wrong or the conditions are stale.

Open the case file. Notice the Yokohama-to-Zurich upgrade question routed to the backlog as a separate gallery example. The council does not fold open questions into the design.
github.com/paulopierrondi/servicenow-agent-army

### Versão PT-BR

CAB virou teatro.

Frase exata do usuario. Banco tier-1 brasileiro, ~120 Normal changes por mes mais ~250 Standard. CAB aprova em 1 hora e ninguem discute risco. Risco quer Now Assist Change Risk mas nao confia em black-box. Auditor BACEN e a restricao.

Business Analyst reframou: CAB e problema de processo primeiro, nao de modelo. Recomendou desacoplar Standard fast-track da ativacao de Now Assist.

ServiceNow Architect Coach (SADA) forcou tres alternativas: manter manual, Now Assist Change Risk + override manual, NASK custom em cima de historico. Escolheu o OOTB por upgrade safety e ROI testado em campo. NASK custom recusado por risco de upgrade-path.

Enterprise Architect validou 18 meses de historico limpo e exigiu janelas de blackout machine-readable, nao texto em invite de CAB.

Guardrails Reviewer exigiu: nunca auto-approve em high-risk; override manual exige campo estruturado de justificativa; 2-3 ciclos de CAB em shadow mode antes de ativar.

Alvos: 30 por cento de reducao no tempo de review do CAB em Normal changes em 90 dias. Zero auto-approve em high-risk. Manual-override rate abaixo de 15 por cento. Acima disso, ou o modelo esta errado, ou as conditions estao defasadas.

Abre o case file. Note que a pergunta sobre upgrade Yokohama-Zurich foi rotada pro backlog como gallery separado. O conselho nao mistura pergunta aberta com design.
github.com/paulopierrondi/servicenow-agent-army

### Hashtags
#ServiceNow #NowAssist #FSI

### Engagement question (CTA)
Qual a sua manual-override rate em Now Assist Change Risk hoje?

### Source / link
gallery/03-change-risk-bacen/case.md

---

## Dia 11 — 2026-05-07 — Gallery 04 catalog laptop

**Pillar/Hero**: Gallery 04

**Hook**: 230 catalog items. Inconsistent naming. Users open incidents instead.

**Métrica alvo**: impressions

### Versão EN

230 catalog items. Inconsistent naming. Users open incidents instead.

Brazilian retail chain, 12k employees across 280 stores. ~30 percent of items without rich descriptions. Three laptop SKUs: standard, power-user, manager. Regional logistics partner with 5-day lead time. Sub-prod available; ATF used for catalog regression elsewhere.

Business Analyst Agent caught the real pattern: incidents-as-requests. The request alone does not fix it; catalog hygiene plus search relevance does.

Catalog Designer ran the duplicate-item check first per its guardrail. Found two stale laptop items from 2023 to retire. Designed dependent variables (role, store size, peripheral selection) using UI Policies, never Client Scripts.

Workflow Composer designed the fulfillment subflow with three Catalog Tasks: hardware allocation, imaging, shipping. Explicit dependencies, not "see attached".

ATF Test Generator produced regression coverage for the variable matrix and the dependency chain. Failure of the suite blocks merge.

Targets: 25 percent shift from incident-as-request to catalog submission within 60 days. SLA breach rate below 5 percent on the new item. Zero regressions on adjacent items, validated by ATF.

Acceptance: Now Assist Catalog Search ranks the new item top 3 for "preciso de notebook" and equivalent intents in PT-BR.

This is the case where Now Assist Catalog Search earns its credit. Catalog hygiene plus generative search beats keyword search on intent. Without the hygiene, neither would work.

What is your incidents-as-requests rate this quarter?
github.com/paulopierrondi/servicenow-agent-army

### Versão PT-BR

230 itens de catalog. Naming inconsistente. Usuario abre incident em vez de pedir.

Varejista brasileiro, 12k funcionarios em 280 lojas. ~30 por cento dos itens sem description rica. Tres SKUs de laptop: standard, power-user, manager. Parceiro logistico regional com lead time de 5 dias. Sub-prod disponivel; ATF ja usada em regressao de catalog em outros itens.

Business Analyst pegou o padrao real: incidents-as-requests. O pedido sozinho nao resolve; higiene de catalog mais relevancia de busca resolve.

Catalog Designer rodou o duplicate-item check primeiro, conforme guardrail. Achou dois itens de laptop de 2023 stale para retirar. Desenhou variables dependentes (role, store size, peripheral) com UI Policies, nunca Client Scripts.

Workflow Composer desenhou o subflow de fulfillment com tres Catalog Tasks: alocacao de hardware, imaging, shipping. Dependencias explicitas, nao "ver anexo".

ATF Test Generator produziu cobertura de regressao da matriz de variables e da cadeia de dependencias. Suite quebrada bloqueia merge.

Alvos: 25 por cento de shift de incident-as-request para submission em catalog em 60 dias. SLA breach rate abaixo de 5 por cento no item novo. Zero regressao em itens adjacentes, validado por ATF.

Aceitacao: Now Assist Catalog Search ranqueia o item novo no top 3 para "preciso de notebook" e intents equivalentes em PT-BR.

Esse e o caso onde Now Assist Catalog Search ganha o credito. Higiene de catalog mais generative search vence keyword search em intent. Sem a higiene, nenhum dos dois funciona.

Qual a sua taxa de incidents-as-requests neste trimestre?
github.com/paulopierrondi/servicenow-agent-army

### Hashtags
#ServiceNow #NowAssist #PT-BR

### Engagement question (CTA)
Quantos itens stale de catalog voce identificaria rodando o duplicate-item check hoje?

### Source / link
gallery/04-catalog-laptop-refresh/case.md

---

## Dia 12 — 2026-05-08 — Gallery 06 CSM PT-BR

**Pillar/Hero**: Gallery 06

**Hook**: 80k cases por mes. Marketing quer ver fonte da resposta. Juridico nervoso com LGPD.

**Métrica alvo**: comments

### Versão EN

80k cases per month on the consumer portal. Marketing wants source citation. Legal is nervous about LGPD.

Brazilian retail chain, B2C. KB at ~600 articles, mixed quality. Customer-facing subset: ~120 vetted by communications. Languages: PT-BR primary, EN secondary for international SKUs.

Business Analyst Agent caught the marketing concern early. Q&A without source citation breaks trust. Demanded cite-source on every answer.

CSM Specialist split the KB into "vetted customer-facing" and "internal operational" scopes. Refused to mix them in the same Q&A scope.

Knowledge Curator chunked the 120 vetted articles, normalized headings, set ACLs to consumer-portal-readable.

Now Assist Coach mapped the surface to Now Assist Q&A on the customer portal with Guardian sensitive-topic for LGPD. Guardrails Reviewer required: Guardian on, cite-source on every answer, fallback-to-human button always visible, no auto-translate without native PT-BR review.

Targets: deflection ratio from 15 to 30 percent in 90 days on top-10 case categories. CSAT on resolved-by-Q&A cases at least equal to baseline. Zero LGPD incidents linked to Q&A.

Acceptance: legal team sign-off on the vetted KB scope and Guardian configuration before launch.

This is the gallery example that says "Q&A without grounding is hallucination dressed up as service".

Where in your portal is Q&A answering without a source line?
github.com/paulopierrondi/servicenow-agent-army

### Versão PT-BR

80k cases por mes no portal do consumidor. Marketing quer ver fonte. Juridico nervoso com LGPD.

Varejista brasileiro, B2C. KB com ~600 artigos de qualidade mista. Subset customer-facing: ~120 vetados pela comunicacao. Linguagens: PT-BR primaria, EN secundaria para SKUs internacionais.

Business Analyst pegou a preocupacao do marketing cedo. Q&A sem cite-source quebra a confianca. Exigiu cite-source em toda resposta.

CSM Specialist dividiu o KB em "vetted customer-facing" e "operational interno". Recusou misturar os dois no mesmo escopo de Q&A.

Knowledge Curator chunkou os 120 artigos vetados, normalizou headings, setou ACL como consumer-portal-readable.

Now Assist Coach mapeou a surface como Now Assist Q&A no portal de consumidor com Guardian sensitive-topic para LGPD. Guardrails Reviewer exigiu: Guardian ligado, cite-source em toda resposta, botao de fallback humano sempre visivel, sem auto-translate sem review nativo PT-BR.

Alvos: deflection ratio de 15 para 30 por cento em 90 dias nas top-10 categorias de case. CSAT em cases resolvidos por Q&A pelo menos igual ao baseline. Zero incidente LGPD ligado a Q&A.

Aceitacao: juridico assina o escopo do KB vetado e a config de Guardian antes do launch.

Esse e o gallery que diz "Q&A sem grounding e alucinacao vestida de servico".

Onde no seu portal o Q&A responde sem linha de fonte?
github.com/paulopierrondi/servicenow-agent-army

### Hashtags
#ServiceNow #NowAssist #PT-BR

### Engagement question (CTA)
Qual a sua deflection ratio atual e qual seria o alvo realista em 90 dias?

### Source / link
gallery/06-csm-self-service-ptbr/case.md

---

## Dia 13 — 2026-05-09 — Gallery 10 vendor performance

**Pillar/Hero**: Gallery 10

**Hook**: Two weeks per quarter on a vendor review. Legal: nem pensar em escrever em contrato.

**Métrica alvo**: saves

### Versão EN

Two weeks per quarter on a vendor review. Legal: nem pensar em escrever em contrato sem humano aprovar.

Global manufacturer LATAM, ~40 strategic vendors. Data sources in scope: vendor records, contracts, incidents linked to vendor CIs, change_request linked to vendor changes, SLA breaches. Quarterly cycle: ~5k incidents, ~600 changes, ~80 SLA breaches.

This is the gallery example for AI Agent Studio done right.

Business Analyst Agent confirmed the use case fits Caso 11 of the Now Assist Playbook. Sized the data: ~40 vendors per cycle.

Workflow Composer designed an AI Agent Studio agent with a tool whitelist: read-only Table API on vendor, contracts, incidents, changes, SLAs. No write tool; period.

Knowledge Curator wrote a structured summarization NASK skill with explicit fields (delivery, quality, response, contract compliance) so drafts are comparable across vendors.

Guardrails Reviewer enforced human approval before any contract or penalty change. Required Guardian sensitive-topic on financial data and audit log retention for procurement audit.

Targets: review cycle from 10 business days to 2 (one day for the agent draft, one day for human refinement). Zero auto-actioned penalties. Structured fields for quarterly comparison.

Acceptance: 3 quarters of shadow runs alongside the manual process before the agent draft becomes the official starting point.

The constraint is the design. Tool whitelist read-only, structured output, human approval mandatory, audit trail. Without those, agentic workflows are unsupervised liability.

Where would your procurement team trade 8 days for a structured draft?
github.com/paulopierrondi/servicenow-agent-army

### Versão PT-BR

Duas semanas por trimestre num vendor review. Juridico: nem pensar em escrever em contrato sem humano aprovar.

Manufacturer global LATAM, ~40 vendors estrategicos. Fontes em escopo: vendor records, contratos, incidents linkados em CIs de vendor, change_request em mudancas de vendor, SLA breaches. Ciclo trimestral: ~5k incidents, ~600 changes, ~80 SLA breaches.

Esse e o gallery de AI Agent Studio feito direito.

Business Analyst confirmou que o caso cai no Caso 11 do Now Assist Playbook. Dimensionou: ~40 vendors por ciclo.

Workflow Composer desenhou agent em AI Agent Studio com whitelist de tools: Table API read-only em vendor, contratos, incidents, changes, SLAs. Zero write tool. Ponto.

Knowledge Curator escreveu skill NASK de sumarizacao estruturada com campos explicitos (delivery, quality, response, contract compliance) pra draft ser comparavel entre vendors.

Guardrails Reviewer exigiu aprovacao humana antes de qualquer mudanca em contrato ou penalty. Exigiu Guardian sensitive-topic em dado financeiro e retencao de audit log para procurement audit.

Alvos: ciclo de review de 10 dias uteis para 2 (um dia pro draft do agent, um dia pra refinamento humano). Zero penalty auto-acionada. Campos estruturados pra comparacao trimestral.

Aceitacao: 3 trimestres de shadow run em paralelo com o processo manual antes do draft do agent virar oficial.

A restricao e o desenho. Whitelist read-only de tool, output estruturado, aprovacao humana obrigatoria, audit trail. Sem isso, workflow agentic e passivo nao supervisionado.

Onde o seu procurement trocaria 8 dias por draft estruturado?
github.com/paulopierrondi/servicenow-agent-army

### Hashtags
#ServiceNow #AIAgents #FSI

### Engagement question (CTA)
Quais campos estruturados voce exigiria num draft de vendor review pra liberar o processo?

### Source / link
gallery/10-vendor-performance-review/case.md

---

## Dia 14 — 2026-05-10 — Galleries side-by-side

**Pillar/Hero**: Gallery 01, 06, 08

**Hook**: Three gallery cases, three different verdicts.

**Métrica alvo**: saves

### Versão EN

Three gallery cases, three different verdicts.

Gallery 01 — incident triage at a tier-1 LATAM bank. Verdict: ship Now Assist for ITSM, with cost gate and PII Guardian. Targets: p95 time-to-assignment down 40 percent in 90 days.

Gallery 06 — CSM self-service Q&A in PT-BR for a Brazilian retail chain. Verdict: ship Now Assist Q&A on customer portal, scoped to vetted KB only, cite-source mandatory, legal sign-off as gate. Targets: deflection 15 to 30 percent in 90 days.

Gallery 08 — list-view 7-second load on a tier-1 LATAM bank, 200 concurrent CSM agents. Verdict: refuse Now Assist. Fix the ACL chain, the chained Business Rule, the unindexed fields, the GlideAggregate in Display Business Rule. Targets: list-view p95 below 1.2 seconds. Zero Now Assist credits.

Same army. Three different answers. The pattern that holds across all three is the pre-condition: every recommendation carries a value number, a named owner, and a refusal threshold.

A council that always says yes to AI is not advising. It is selling.

The repo has all ten gallery cases. Each one has the same shape: case description, council deliberation summary, outcome targets, anti-pattern flagged. Twenty minutes to read all ten.

Which of these three patterns matches the case on your desk this week?
github.com/paulopierrondi/servicenow-agent-army

### Versão PT-BR

Tres gallery cases, tres veredictos diferentes.

Gallery 01 — triage de incident num banco tier-1 LATAM. Veredicto: liga Now Assist for ITSM, com cost gate e Guardian PII. Alvo: p95 do time-to-assignment cai 40 por cento em 90 dias.

Gallery 06 — Q&A self-service em PT-BR num varejista brasileiro. Veredicto: liga Now Assist Q&A no portal, escopo so KB vetado, cite-source obrigatorio, sign-off do juridico como gate. Alvo: deflection 15 para 30 por cento em 90 dias.

Gallery 08 — list-view de 7 segundos num banco tier-1 LATAM, 200 agentes CSM concorrentes. Veredicto: recusa Now Assist. Arruma a ACL chain, o Business Rule encadeado, os campos sem indice, o GlideAggregate em Display BR. Alvo: p95 abaixo de 1.2 segundos. Zero credito Now Assist.

Mesmo batalhao. Tres respostas diferentes. O padrao que se mantem nas tres e a pre-condicao: toda recomendacao carrega numero de valor, dono nomeado e threshold de recusa.

Conselho que sempre diz sim pra AI nao esta aconselhando. Esta vendendo.

O repo tem os dez gallery cases. Cada um tem o mesmo shape: descricao, deliberacao do conselho, alvos de outcome, anti-pattern apontado. Vinte minutos pra ler os dez.

Qual desses tres padroes bate com o caso na sua mesa esta semana?
github.com/paulopierrondi/servicenow-agent-army

### Hashtags
#ServiceNow #NowAssist #SADA

### Engagement question (CTA)
Qual gallery case voce levaria pro proximo design review?

### Source / link
gallery/

---

## Dia 15 — 2026-05-11 — Now Assist Q&A

**Pillar/Hero**: Now Assist Q&A surface

**Hook**: Q&A without grounding is hallucination dressed up as service.

**Métrica alvo**: comments

### Versão EN

Q&A without grounding is hallucination dressed up as service.

Now Assist Q&A is the surface most often misconfigured in FSI. Two failure modes show up repeatedly.

One. KB scope mixed. Internal operational articles in the same scope as customer-facing. Q&A retrieves an internal credit policy doc and exposes it to a B2C consumer. LGPD breach in 90 seconds.

Two. No cite-source. The portal answers but does not show which article it pulled from. Marketing notices, legal escalates, deflection ratio climbs but trust drops.

The fix is simple, the discipline is hard. Split the KB into vetted customer-facing and internal operational. Set ACLs to consumer-portal-readable on the vetted scope only. Mandate cite-source on every answer. Guardian sensitive-topic on for LGPD. Fallback-to-human button always visible.

Gallery 06 ran exactly this fix. Targets: deflection 15 to 30 percent in 90 days, zero LGPD incidents linked to Q&A, legal sign-off as launch gate.

If your Q&A surface is live without a vetted KB scope, the question is not "how to optimize". The question is "how fast can we pause".

Where in your Q&A is cite-source missing today?
github.com/paulopierrondi/servicenow-agent-army

### Versão PT-BR

Q&A sem grounding e alucinacao vestida de servico.

Now Assist Q&A e a surface mais frequentemente mal configurada em FSI. Dois modos de falha aparecem sempre.

Um. Escopo de KB misturado. Artigo operacional interno no mesmo escopo que customer-facing. Q&A puxa policy interna de credito e expoe pra consumidor B2C. Breach LGPD em 90 segundos.

Dois. Sem cite-source. O portal responde mas nao mostra de qual artigo veio. Marketing percebe, juridico escala, deflection ratio sobe mas a confianca cai.

O fix e simples, a disciplina e dura. Divide o KB em vetted customer-facing e operacional interno. ACL consumer-portal-readable so no escopo vetado. Cite-source obrigatorio em toda resposta. Guardian sensitive-topic ligado pra LGPD. Botao fallback humano sempre visivel.

Gallery 06 rodou exatamente esse fix. Alvos: deflection 15 para 30 por cento em 90 dias, zero incidente LGPD ligado a Q&A, sign-off do juridico como gate de launch.

Se a sua surface de Q&A esta ao vivo sem KB vetado, a pergunta nao e "como otimizar". A pergunta e "quao rapido a gente pausa".

Onde no seu Q&A o cite-source esta faltando hoje?
github.com/paulopierrondi/servicenow-agent-army

### Hashtags
#ServiceNow #NowAssist #FSI

### Engagement question (CTA)
Que percentual das respostas do seu Q&A em prod tem cite-source visivel?

### Source / link
docs/now-assist-playbook.md (Caso 12)

---

## Dia 16 — 2026-05-12 — Now Assist for Code

**Pillar/Hero**: Now Assist for Code surface

**Hook**: Now Assist for Code is not a senior developer.

**Métrica alvo**: saves

### Versão EN

Now Assist for Code is not a senior developer.

It is a strong autocomplete plus context-aware boilerplate. It does not replace code review, ATF, or the architect saying no.

The misuse pattern: developer accepts the suggestion, ships the Business Rule, the BR runs in a hot path on a financial transaction table, no test, no review. The first sign of trouble is an SLA breach during month-end close.

The right configuration is boring. Pro Plus license. Developer training: treat it as suggestion, not "faz tudo pra mim". Code review by a human before commit, no exceptions. Automated test mandatory for business rules in hot path. SLO: average time to ship boilerplate drops by more than 50 percent.

Now Assist Playbook Caso 7 names the discipline. Gallery cases that touch developer flows enforce it.

The ROI is real and easy to overclaim. Pattern-matching boilerplate is faster with the surface than without it. Architectural decisions are not. Saying "Now Assist generates Business Rules" is half-true; "Now Assist generates Business Rule drafts that humans must review" is the operating contract.

If you ship Now Assist for Code without an automated test gate on hot-path business rules, you are renting risk by the line.

Onde o automated test gate esta nas suas business rules de hot path geradas por Now Assist for Code?
github.com/paulopierrondi/servicenow-agent-army

### Versão PT-BR

Now Assist for Code nao e um dev senior.

E autocomplete forte mais boilerplate context-aware. Nao substitui code review, ATF, nem arquiteto que diz nao.

O padrao de mal uso: dev aceita a sugestao, sobe a Business Rule, a BR roda em hot path numa tabela transacional, sem teste, sem review. O primeiro sinal de problema e SLA breach no fechamento mensal.

A configuracao certa e chata. Licenca Pro Plus. Treinamento do dev: tratar como sugestao, nao "faz tudo pra mim". Code review humano antes do commit, sem excecao. Teste automatizado obrigatorio em business rule de hot path. SLO: tempo medio de implementacao de boilerplate cai mais de 50 por cento.

Now Assist Playbook Caso 7 nomeia a disciplina. Gallery cases que tocam fluxos de dev seguem.

O ROI e real e facil de overclaim. Boilerplate de pattern-matching e mais rapido com a surface do que sem. Decisao de arquitetura nao. Dizer "Now Assist gera Business Rules" e meia verdade; "Now Assist gera draft de Business Rule que humano revisa" e o contrato operacional.

Se voce sobe Now Assist for Code sem gate de teste automatizado em business rule de hot path, voce esta alugando risco por linha.

Onde o automated test gate esta nas suas business rules de hot path geradas por Now Assist for Code?
github.com/paulopierrondi/servicenow-agent-army

### Hashtags
#ServiceNow #NowAssist #AIAgents

### Engagement question (CTA)
Que percentual de codigo do Now Assist for Code passa por test gate antes do commit?

### Source / link
docs/now-assist-playbook.md (Caso 7)

---

## Dia 17 — 2026-05-13 — Now Assist Discovery / AIOps

**Pillar/Hero**: Now Assist for AIOps surface

**Hook**: 50k alerts per day. NOC silenced the filter client-side. Real incident missed.

**Métrica alvo**: comments

### Versão EN

50k alerts per day. NOC silenced the filter client-side. Real incident missed.

Now Assist for AIOps adds anomaly detection plus alert correlation summarization. It is the right answer when the platform under it is healthy. It is theater when the platform is not.

Pre-conditions before activation:
- Service Mapping complete on critical services.
- Alert correlation rules baseline (same CI plus time window).
- At least 3 months of clean data as baseline.
- Now Assist AIOps activated, dashboard of incident generated.
- Target: noise ratio below 30 percent (alerts to incidents).

The failure mode that kills credibility: anomaly on a metric with seasonality. Banking e-commerce on Black Friday, monthly close, payroll. False positive volume floods the NOC. They silence the filter, again. AI built the same problem with a different name.

Mitigation: tuning plus exclusion windows. Manual review of false positives weekly until volume drops. Retraining the architect, not just the model.

Now Assist Playbook Caso 5 names the path. Gallery 02 (CMDB health) is the prerequisite. AIOps on top of polluted CMDB and missing Service Mapping is the gallery 08 anti-pattern in disguise.

What is your alerts-to-incidents ratio this week, and what is the seasonality envelope on your top 5 services?
github.com/paulopierrondi/servicenow-agent-army

### Versão PT-BR

50k alerts por dia. NOC desativou filtro client-side. Incident real perdido.

Now Assist for AIOps adiciona deteccao de anomalia mais sumarizacao de correlacao de alert. E a resposta certa quando a plataforma debaixo esta saudavel. E teatro quando nao esta.

Pre-condicoes antes de ativar:
- Service Mapping completo em servicos criticos.
- Regras de correlacao baseline (mesmo CI mais janela de tempo).
- No minimo 3 meses de dado limpo como baseline.
- Now Assist AIOps ativado, dashboard de incident generated.
- Alvo: noise ratio abaixo de 30 por cento (alerts pra incidents).

O modo de falha que mata a credibilidade: anomalia em metrica com sazonalidade. Banking e-commerce em Black Friday, fechamento mensal, folha. Volume de falso positivo afoga o NOC. Eles silenciam o filtro, de novo. AI construiu o mesmo problema com outro nome.

Mitigacao: tuning mais exclusion window. Review manual de falso positivo semanal ate volume cair. Retreina o arquiteto, nao so o modelo.

Now Assist Playbook Caso 5 nomeia o caminho. Gallery 02 (CMDB health) e pre-requisito. AIOps em cima de CMDB poluido e Service Mapping faltando e o anti-pattern do gallery 08 disfarcado.

Qual o seu alerts-to-incidents ratio nesta semana, e qual o envelope de sazonalidade nos seus top 5 servicos?
github.com/paulopierrondi/servicenow-agent-army

### Hashtags
#ServiceNow #NowAssist #FSI

### Engagement question (CTA)
Qual o seu noise ratio (alerts pra incidents) atual nos top 5 servicos criticos?

### Source / link
docs/now-assist-playbook.md (Caso 5)

---

## Dia 18 — 2026-05-14 — Now Creator / Build Agent

**Pillar/Hero**: Now Assist for Creator (Build Agent) surface

**Hook**: Build Agent gera flow funcional. Nao gera flow production-ready.

**Métrica alvo**: saves

### Versão EN

Build Agent generates a functional flow. It does not generate a production-ready flow.

The misuse pattern is the most expensive one in this list. Architect uses Now Assist for Creator to scaffold a POC in 90 minutes, business sees it work, demand to "promote it to prod next week" hits. Three weeks later, error handling is missing, scope is global, and the flow has no rollback path.

The discipline that keeps Build Agent useful:
- Sandbox dedicated, scope dedicated, never global by default.
- Spec short and clear (human input).
- Build Agent generates the draft.
- Refactor post-generation is mandatory before promotion. Build Agent flows are functional, not robust.
- Promotion to sub-prod requires Platform Owner approval.

Now Assist Playbook Caso 8 names the discipline. The ROI is genuine: 1-3 days to a validatable POC instead of 2-4 weeks. But the 1-3 days is the POC, not the production flow.

The architect who skips the refactor step is the architect who answers a Sev1 page at 03:00 on the second weekend.

If your "Built with Now Assist Creator" demo is in a global scope without a refactor pass, the demo is the bug.

Where is your refactor gate between Build Agent draft and sub-prod promotion?
github.com/paulopierrondi/servicenow-agent-army

### Versão PT-BR

Build Agent gera flow funcional. Nao gera flow production-ready.

O padrao de mal uso e o mais caro dessa lista. Arquiteto usa Now Assist for Creator pra scaffoldar um POC em 90 minutos, business ve funcionar, demanda "promove pra prod semana que vem" cai. Tres semanas depois, error handling ta faltando, scope ta global, o flow nao tem rollback.

A disciplina que mantem Build Agent util:
- Sandbox dedicado, scope dedicado, nunca global por default.
- Spec curta e clara (input humano).
- Build Agent gera o draft.
- Refactor pos-geracao obrigatorio antes de promover. Flow do Build Agent e funcional, nao robusto.
- Promocao pra sub-prod exige aprovacao do Platform Owner.

Now Assist Playbook Caso 8 nomeia a disciplina. O ROI e real: 1-3 dias pra POC validavel em vez de 2-4 semanas. Mas os 1-3 dias sao o POC, nao o flow de producao.

Arquiteto que pula o refactor e o arquiteto que atende Sev1 as 03:00 do segundo fim de semana.

Se o seu demo "Built with Now Assist Creator" esta em scope global sem refactor pass, o demo e o bug.

Onde esta o seu refactor gate entre o draft do Build Agent e a promocao pra sub-prod?
github.com/paulopierrondi/servicenow-agent-army

### Hashtags
#ServiceNow #NowAssist #SADA

### Engagement question (CTA)
Quantos flows gerados por Build Agent na sua plataforma passaram por refactor antes da sub-prod?

### Source / link
docs/now-assist-playbook.md (Caso 8)

---

## Dia 19 — 2026-05-15 — Now Assist for ITSM

**Pillar/Hero**: Now Assist for ITSM surface

**Hook**: Now Assist for ITSM is OOTB, not custom. Stop rebuilding it.

**Métrica alvo**: comments

### Versão EN

Now Assist for ITSM is OOTB, not custom. Stop rebuilding it.

Resolution Suggestion plus Incident Summarization handle the volume case (>500 incidents/day, mature KB, sane category structure). Custom NASK skill on top of these is a tax, not a feature.

Why the OOTB path wins:
- KB binding is native; no prompt engineering for retrieval.
- Agent Workspace integration ships with the surface.
- Upgrade path is preserved across Family releases.
- Credit cost has a known monthly cap configurable.

Pre-conditions to activate:
- KB tagged by category and product, ~200 relevant articles minimum.
- Incident categories coherent (max 20 top-level).
- Resolution Suggestion + Incident Summarization on.
- Guardian: prompt injection plus offensiveness on.
- SLO: AHT down 15 percent in 90 days.

Risk to manage: KB with conflicting info produces hallucination. Guardian sensitive-topic on if incident touches PII. Monthly review of top-3 suggestions on stratified sample. Below 70 percent precision means KB hygiene goes back to top of backlog.

Gallery 01 ran this exact configuration. Targets and acceptance signals are in the case file.

The teams that fail here are the ones who built a NASK skill before checking if the OOTB skill covers the case. Now Assist Playbook Caso 1 names the test.

Did your team check OOTB Resolution Suggestion before building NASK?
github.com/paulopierrondi/servicenow-agent-army

### Versão PT-BR

Now Assist for ITSM e OOTB, nao custom. Para de reconstruir.

Resolution Suggestion + Incident Summarization resolvem o caso de volume (>500 incidents/dia, KB maduro, taxonomia sa). NASK custom em cima disso e tax, nao feature.

Por que o caminho OOTB ganha:
- Binding com KB e nativo; sem prompt engineering de retrieval.
- Integracao com Agent Workspace ja vem com a surface.
- Upgrade path preservado entre Family releases.
- Custo de credito tem cap mensal configuravel conhecido.

Pre-condicoes pra ativar:
- KB tagged por categoria e produto, no minimo ~200 artigos relevantes.
- Categorias de incident coerentes (max 20 top-level).
- Resolution Suggestion + Incident Summarization on.
- Guardian: prompt injection + offensiveness on.
- SLO: AHT cai 15 por cento em 90 dias.

Risco a gerir: KB com info conflitante gera alucinacao. Guardian sensitive-topic on se incident toca PII. Review mensal de top-3 sugestoes em sample estratificada. Precision abaixo de 70 por cento manda KB hygiene de volta pro topo do backlog.

Gallery 01 rodou essa config exata. Alvos e sinais de aceitacao estao no case file.

Quem falha aqui sao os times que construiram NASK skill antes de checar se a OOTB skill cobre. Now Assist Playbook Caso 1 nomeia o teste.

Seu time checou OOTB Resolution Suggestion antes de construir NASK?
github.com/paulopierrondi/servicenow-agent-army

### Hashtags
#ServiceNow #NowAssist #FSI

### Engagement question (CTA)
Que percentual dos seus skills custom NASK ja foi mapeado contra surface OOTB equivalente?

### Source / link
docs/now-assist-playbook.md (Caso 1)

---

## Dia 20 — 2026-05-16 — Now Assist for CSM

**Pillar/Hero**: Now Assist for CSM surface

**Hook**: Case escalada com 30+ comentarios. Agente perde 5-10 minutos lendo antes de agir.

**Métrica alvo**: saves

### Versão EN

Case escalated with 30+ comments. Agent spends 5-10 minutes reading before acting.

Now Assist for CSM Case Summarization is the surface that pays back fast on this exact pattern. Tier 2/3 agent gets a structured summary the moment they pick up the case. They focus on resolving, not on reading.

Pre-conditions:
- Case Workspace activated.
- Now Assist CSM domain skill activated for case summarization.
- Guardian: prompt injection + offensiveness + sensitive topic for B2C with PII.
- KPI: AHT reduction on escalated cases.

The trap: PII in the case being summarized leaking into a generated email or external comment. Guardian sensitive topic plus agent training on review-before-send is the operating discipline. The summary is a draft, not a customer-facing artifact.

ROI versus alternative: manual summary template does not scale. OOTB CSM summarization needs zero effort from the agent.

Now Assist Playbook Caso 6 names the discipline. Gallery 06 cites the same surface for portal Q&A; the summarization use case is the agent-side counterpart.

Where in your CSM operations is summarization a human task that should be a domain skill?
github.com/paulopierrondi/servicenow-agent-army

### Versão PT-BR

Case escalada com 30+ comentarios. Agente perde 5-10 minutos lendo antes de agir.

Now Assist for CSM Case Summarization e a surface que paga rapido nesse padrao exato. Agente Tier 2/3 recebe um sumario estruturado no momento que pega a case. Foca em resolver, nao em ler.

Pre-condicoes:
- Case Workspace ativado.
- Domain skill Now Assist CSM ativado pra case summarization.
- Guardian: prompt injection + offensiveness + sensitive topic em B2C com PII.
- KPI: reducao de AHT em case escalada.

A armadilha: PII na case sendo sumarizada vazando pra email gerado ou comentario externo. Guardian sensitive topic + treinamento de agente em review-before-send e a disciplina operacional. O sumario e draft, nao artefato customer-facing.

ROI vs alternativa: template manual de sumario nao escala. CSM summarization OOTB nao demanda esforco do agente.

Now Assist Playbook Caso 6 nomeia a disciplina. Gallery 06 cita a mesma surface pro Q&A no portal; o use case de summarization e o lado agent-side.

Onde nas suas operacoes CSM a sumarizacao e tarefa humana que deveria ser domain skill?
github.com/paulopierrondi/servicenow-agent-army

### Hashtags
#ServiceNow #NowAssist #PT-BR

### Engagement question (CTA)
Qual o seu AHT medio em case escalada com mais de 30 comentarios?

### Source / link
docs/now-assist-playbook.md (Caso 6)

---

## Dia 21 — 2026-05-17 — Now Assist Guardian

**Pillar/Hero**: Now Assist Guardian

**Hook**: Now Assist sem Guardian em PII e LGPD breach esperando acontecer.

**Métrica alvo**: comments + DM

### Versão EN

Now Assist without Guardian on PII is an LGPD breach waiting to happen.

Anti-pattern 7 in the repo names it. Now Assist surface (Q&A, agent assist, NASK skill) active in a workflow that touches CPF, account number, KYC info, with no Guardian sensitive-topic configured. Prompt log with PII. DPO audit finds it. Reportable to ANPD.

The detection check is simple. Sample sys_gen_ai_log_metadata for input text matching CPF or account patterns. Cross-reference with sn_aia_agent for agents touching case or incident without Guardian config. The audit is a one-evening job.

The fix is mandatory, not advisory:
- Guardian sensitive topic filter on for any surface touching regulated data.
- Pattern list includes CPF, conta, agencia, KYC fields.
- DPO sign-off W+1 for any new surface activation.
- Audit log review monthly.
- LGPD-incident SLA defined upfront, not invented after.

Gallery 01 (FSI) and Gallery 06 (B2C retail) both ship Guardian as a launch gate, not a phase 2 item. The cost of retrofitting Guardian post-launch is the cost of a public ANPD ruling.

If your Now Assist surface is in production touching regulated data without Guardian sensitive-topic on, pause the surface and the audit. Today.

Where in your Now Assist deployments is Guardian sensitive-topic missing?
github.com/paulopierrondi/servicenow-agent-army

### Versão PT-BR

Now Assist sem Guardian em PII e LGPD breach esperando acontecer.

Anti-pattern 7 do repo nomeia. Surface Now Assist (Q&A, agent assist, NASK skill) ativa em workflow que toca CPF, numero de conta, KYC, sem Guardian sensitive-topic configurado. Prompt log com PII. Auditoria do DPO acha. Reportavel pra ANPD.

O check de deteccao e simples. Sample em sys_gen_ai_log_metadata por input text com CPF ou padrao de conta. Cross-reference com sn_aia_agent pra agentes tocando case ou incident sem config Guardian. A auditoria e trabalho de uma noite.

O fix e obrigatorio, nao advisory:
- Filter sensitive topic Guardian ligado em toda surface tocando dado regulado.
- Lista de padroes inclui CPF, conta, agencia, campos KYC.
- Sign-off DPO em W+1 para ativacao de surface nova.
- Review de audit log mensal.
- SLA pra LGPD-incident definido upfront, nao inventado depois.

Gallery 01 (FSI) e Gallery 06 (B2C retail) os dois sobem Guardian como gate de launch, nao item de fase 2. O custo de retrofitar Guardian pos-launch e o custo de uma decisao publica da ANPD.

Se sua surface Now Assist esta em prod tocando dado regulado sem Guardian sensitive-topic ligado, pausa a surface e abre a auditoria. Hoje.

Onde nos seus deployments Now Assist falta Guardian sensitive-topic?
github.com/paulopierrondi/servicenow-agent-army

### Hashtags
#ServiceNow #NowAssist #FSI

### Engagement question (CTA)
Que percentual das suas surfaces Now Assist tocando dado regulado tem Guardian sensitive-topic on hoje?

### Source / link
docs/anti-patterns.md (Pattern 7)

---

## Dia 22 — 2026-05-18 — SADA Pillar 1 outcome

**Pillar/Hero**: SADA Framework — Pillar 1 (Outcome)

**Hook**: SADA Pilar 1: nenhuma decisao sem outcome de 90 dias.

**Métrica alvo**: saves

### Versão EN

SADA Pillar 1: no architecture decision without a 90-day outcome.

The framework is opinionated by design. Pillar 1 is the gatekeeper. Until a decision has a measurable outcome attached with a 90-day horizon, it does not become a decision. It stays a discussion.

In practice this kills two patterns. First, "we are evaluating Now Assist" without a metric. Evaluation needs a target. Second, "we will measure adoption" without a baseline. Adoption is not an outcome; it is an input to one.

Pierrondi EA enforces this from the top of the council. ServiceNow Architect Coach (SADA) reinforces it through three-alternative framing; you cannot compare alternatives if you do not know which metric matters.

Gallery cases all carry this discipline:
- Gallery 01: p95 time-to-assignment down 40 percent in 90 days.
- Gallery 02: completeness 62 to 80 percent in two quarters.
- Gallery 06: deflection 15 to 30 percent in 90 days.
- Gallery 08: list-view p95 below 1.2 seconds.

Apply the test to your roadmap. Items without an outcome metric are candidates for Q3 deprioritization, not Q2 implementation.

Quantos itens do seu roadmap atual nao passariam no SADA Pilar 1?
github.com/paulopierrondi/servicenow-agent-army

### Versão PT-BR

SADA Pilar 1: nenhuma decisao de arquitetura sem outcome de 90 dias.

O framework e opiniado por design. Pilar 1 e o gatekeeper. Enquanto uma decisao nao tem outcome mensuravel anexado com horizonte de 90 dias, ela nao e decisao. E discussao.

Na pratica isso mata dois padroes. Primeiro, "estamos avaliando Now Assist" sem metrica. Avaliacao precisa de alvo. Segundo, "vamos medir adocao" sem baseline. Adocao nao e outcome; e input pra um.

Pierrondi EA forca isso do topo do conselho. ServiceNow Architect Coach (SADA) reforca via tres alternativas; nao da pra comparar se voce nao sabe qual metrica importa.

Gallery cases todos carregam essa disciplina:
- Gallery 01: p95 do time-to-assignment cai 40 por cento em 90 dias.
- Gallery 02: completeness de 62 para 80 por cento em dois trimestres.
- Gallery 06: deflection de 15 para 30 por cento em 90 dias.
- Gallery 08: p95 do list-view abaixo de 1.2 segundos.

Aplica o teste no seu roadmap. Itens sem outcome metric sao candidatos pra deprionizacao em Q3, nao implementacao em Q2.

Quantos itens do seu roadmap atual nao passariam no SADA Pilar 1?
github.com/paulopierrondi/servicenow-agent-army

### Hashtags
#ServiceNow #SADA #FSI

### Engagement question (CTA)
Qual percentual do seu Q2 sobreviveria ao filtro do SADA Pilar 1?

### Source / link
docs/sada-framework.md

---

## Dia 23 — 2026-05-19 — SADA Pillar 2 ownership

**Pillar/Hero**: SADA Framework — Pillar 2 (Named Ownership)

**Hook**: Anti-pattern 8: AI agent in prod sem owner. Shadow IT em 30 dias.

**Métrica alvo**: comments

### Versão EN

Anti-pattern 8: AI agent in prod without an owner. Shadow IT in 30 days.

SADA Pillar 2 is the discipline that prevents this. Every agent record carries a single named owner. Group ownership is not allowed. The owner is the person who answers when the agent hallucinates, when Guardian misclassifies, when credit cost crosses the budget.

Detection is mechanical:
- sn_aia_agent records with active=true.
- Cross-reference sys_created_by against active employees in sys_user.
- Hits where the creator left the company are candidates for reassignment or retire.

Reassignment policy: 30 days before retirement, 90 days before disable. The audit runs quarterly. Any agent without an owner gets disabled at the end of the cycle, full stop.

This is what governance looks like in practice. Not a slide deck. A query that runs and returns names.

The cost of skipping this is real. An agent without an owner in a regulated environment is a finding waiting for an auditor. In FSI, BACEN auditors look for exactly this kind of orphan automation. The DPO does the same for LGPD-touching agents.

If your AI agent inventory does not have an owner column with a person's name in every row, the inventory is incomplete.

Pull the list of active AI agents in your platform. How many rows have a single named owner?
github.com/paulopierrondi/servicenow-agent-army

### Versão PT-BR

Anti-pattern 8: AI agent em prod sem dono. Shadow IT em 30 dias.

SADA Pilar 2 e a disciplina que previne isso. Todo agent record carrega um dono nomeado unico. Group ownership nao e permitido. O dono e a pessoa que responde quando o agent alucina, quando Guardian classifica errado, quando custo de credito passa do orcamento.

A deteccao e mecanica:
- Records sn_aia_agent com active=true.
- Cross-reference sys_created_by contra employees ativos em sys_user.
- Hits onde o criador saiu da empresa sao candidatos a reassignment ou retire.

Politica de reassignment: 30 dias antes de retire, 90 dias antes de disable. A auditoria roda trimestral. Qualquer agent sem dono e desativado no fim do ciclo, fim.

Isso e governance na pratica. Nao slide. Query que roda e retorna nomes.

O custo de pular isso e real. Agent sem dono em ambiente regulado e finding esperando auditor. Em FSI, auditor BACEN procura exatamente esse tipo de automacao orfa. DPO faz o mesmo pra agent que toca LGPD.

Se o seu inventario de AI agent nao tem coluna de owner com nome de pessoa em cada linha, o inventario esta incompleto.

Puxa a lista de AI agents ativos na sua plataforma. Quantas linhas tem dono unico nomeado?
github.com/paulopierrondi/servicenow-agent-army

### Hashtags
#ServiceNow #AIAgents #SADA

### Engagement question (CTA)
Quantos AI agents ativos na sua plataforma teriam dono nomeado se voce rodasse a query agora?

### Source / link
docs/anti-patterns.md (Pattern 8)

---

## Dia 24 — 2026-05-20 — SADA + three alternatives

**Pillar/Hero**: SADA Framework — three alternatives discipline

**Hook**: Tres alternativas ou uma? Qual decisao do seu ultimo trimestre teve tres?

**Métrica alvo**: comments

### Versão EN

Three alternatives or one? Which decision in your last quarter had three?

The ServiceNow Architect Coach (SADA) refuses to recommend a single option without three on the table. Cost, complexity, time-to-value, side effects. Then a written reason for the choice.

The gallery shows the discipline at work. Gallery 03 (change risk under BACEN) had:
- Keep manual.
- Now Assist Change Risk + manual override.
- Custom NASK skill on top of historical change data.

Selected the OOTB option for upgrade safety and field-tested ROI. Custom NASK rejected on upgrade-path risk. The reason is in the case file, in writing. Six months later when someone asks "why did we pick this?", the answer is recoverable.

The pattern that fails is the opposite. Single recommendation, no alternatives, decision made because it sounded right in the meeting. Two quarters later, the same decision is being unwound because the trade-offs were never discussed.

Three alternatives is not bureaucracy. It is the cheapest way to flush out hidden assumptions before they become production debt.

Pick your last big architecture decision. List the three alternatives you compared in writing. If you cannot, the decision was a hunch.

Qual foi a sua ultima decisao de arquitetura que teve tres alternativas escritas?
github.com/paulopierrondi/servicenow-agent-army

### Versão PT-BR

Tres alternativas ou uma? Qual decisao do seu ultimo trimestre teve tres?

ServiceNow Architect Coach (SADA) recusa recomendar opcao unica sem tres na mesa. Custo, complexidade, time-to-value, efeito colateral. Depois razao escrita pra escolha.

A galeria mostra a disciplina rodando. Gallery 03 (change risk sob BACEN) teve:
- Manter manual.
- Now Assist Change Risk + override manual.
- NASK custom em cima do historico.

Escolhido o OOTB por upgrade safety e ROI testado em campo. NASK custom recusado por risco de upgrade-path. A razao esta no case file, escrita. Seis meses depois quando alguem pergunta "por que escolhemos isso?", a resposta e recuperavel.

O padrao que falha e o oposto. Recomendacao unica, sem alternativas, decisao feita porque soou bem na reuniao. Dois trimestres depois, a mesma decisao sendo desfeita porque os trade-offs nunca foram discutidos.

Tres alternativas nao e burocracia. E o jeito mais barato de extrair premissa escondida antes dela virar divida em prod.

Escolhe sua ultima decisao grande de arquitetura. Lista as tres alternativas que voce comparou por escrito. Se nao consegue, a decisao foi palpite.

Qual foi a sua ultima decisao de arquitetura que teve tres alternativas escritas?
github.com/paulopierrondi/servicenow-agent-army

### Hashtags
#ServiceNow #SADA #PT-BR

### Engagement question (CTA)
Onde voce documenta as tres alternativas comparadas, em formato recuperavel seis meses depois?

### Source / link
agents/servicenow-architect-coach.md

---

## Dia 25 — 2026-05-21 — Anti-pattern: AI on broken platform

**Pillar/Hero**: Anti-pattern (gallery 08 + Now Assist playbook)

**Hook**: AI em plataforma quebrada produz queima de credito sem valor.

**Métrica alvo**: saves + comments

### Versão EN

AI on a broken platform produces credit burn without value.

This is the Now Assist Playbook anti-pattern that gallery 08 made famous. ACL chain, chained Business Rule with current.update inside another, unindexed custom fields in list filters, GlideAggregate in Display Business Rule.

Adding Now Assist Case Summarization on top did not make the list view faster. It added latency cost on top of latency. The council refused.

The repo names twenty anti-patterns of this shape:
- Business Rule infinite loop (Pattern 1).
- ACL chain with role check on every call (Pattern 2).
- GlideAggregate in UI policy (Pattern 3).
- NASK skill without grounding (Pattern 12).
- Now Assist without Guardian on PII (Pattern 7).
- AI agent without owner (Pattern 8).
- Closure code "Other" dominant (Pattern 17).

For each, the doc gives a detection query (read-only MCP), a fix, and the council member who owns the call.

The gallery and the anti-patterns doc are the cheapest audit you can run against your platform this quarter. Print them. Walk a CTA through your top 5. Mark which patterns are live in your prod today.

Quais dos vinte anti-patterns estao vivos no seu prod hoje?
github.com/paulopierrondi/servicenow-agent-army

### Versão PT-BR

AI em plataforma quebrada produz queima de credito sem valor.

Esse e o anti-pattern do Now Assist Playbook que gallery 08 imortalizou. ACL chain, Business Rule encadeada com current.update dentro de outra, custom fields sem indice em list filter, GlideAggregate em Display Business Rule.

Adicionar Now Assist Case Summarization em cima nao deixou o list view mais rapido. Adicionou custo de latencia sobre latencia. O conselho recusou.

O repo nomeia vinte anti-patterns desse formato:
- Business Rule infinite loop (Pattern 1).
- ACL chain com role check em cada call (Pattern 2).
- GlideAggregate em UI policy (Pattern 3).
- NASK skill sem grounding (Pattern 12).
- Now Assist sem Guardian em PII (Pattern 7).
- AI agent sem owner (Pattern 8).
- Closure code "Other" dominante (Pattern 17).

Pra cada um, o doc da uma query de deteccao (MCP read-only), um fix e o membro do conselho que e dono da chamada.

A galeria mais o doc de anti-patterns sao a auditoria mais barata que voce roda contra sua plataforma neste trimestre. Imprime. Caminha com um CTA pelos seus top 5. Marca quais patterns estao vivos no seu prod hoje.

Quais dos vinte anti-patterns estao vivos no seu prod hoje?
github.com/paulopierrondi/servicenow-agent-army

### Hashtags
#ServiceNow #SADA #FSI

### Engagement question (CTA)
Roda anti-pattern detection no seu sub-prod. Quantos hits aparecem nos top 5 patterns?

### Source / link
docs/anti-patterns.md

---

## Dia 26 — 2026-05-22 — Anti-pattern: NASK without grounding

**Pillar/Hero**: Anti-pattern 12 (NASK without grounding)

**Hook**: NASK skill sem grounding e alucinacao garantida em FSI.

**Métrica alvo**: comments

### Versão EN

NASK skill without grounding is guaranteed hallucination, especially in FSI.

Anti-pattern 12 in the repo. NASK skill with rich prompt but zero data source. No KB lookup. No Table API call. Pure LLM. The prompt sounds smart, the output sounds confident, the customer receives wrong info on regulated content.

In FSI, the failure is reportable. Customer asks about PIX limit and the skill invents a number. Customer asks about loan policy and the skill paraphrases an outdated KB. The bank breaches BACEN information disclosure rules.

Detection: query sys_genai_assist_skill, inspect each skill's config for missing Tool/Source binding. The audit is one-evening work.

Fix is mandatory: bind a KB lookup or a Table API call inside the skill flow. Test with representative cases before publishing. Cite-source on every response, not optional.

Gallery 06 ran the right pattern: scoped KB, ACL-controlled, cite-source mandatory, fallback-to-human. Gallery 12 from the now-assist-playbook.md (HR Q&A grounding) demands the same shape with Document Intelligence parsing of policy PDFs.

If your NASK skill in production answers regulated questions without a Source binding, pause it before the next BACEN audit cycle.

Quantos NASK skills na sua plataforma respondem sem source binding?
github.com/paulopierrondi/servicenow-agent-army

### Versão PT-BR

NASK skill sem grounding e alucinacao garantida, especialmente em FSI.

Anti-pattern 12 do repo. NASK skill com prompt rico mas zero data source. Sem KB lookup. Sem Table API call. LLM puro. O prompt parece inteligente, o output soa confiante, o cliente recebe info errada em conteudo regulado.

Em FSI, a falha e reportavel. Cliente pergunta sobre limite PIX e a skill inventa numero. Cliente pergunta sobre politica de credito e a skill parafraseia KB defasado. O banco viola regra de disclosure BACEN.

Deteccao: query em sys_genai_assist_skill, inspeciona config de cada skill por Tool/Source binding faltando. A auditoria e trabalho de uma noite.

Fix e obrigatorio: bind de KB lookup ou Table API call no flow da skill. Testa com casos representativos antes de publicar. Cite-source em toda resposta, nao opcional.

Gallery 06 rodou o pattern certo: KB com escopo, ACL controlada, cite-source obrigatorio, fallback humano. Gallery 12 do now-assist-playbook.md (HR Q&A grounding) exige o mesmo formato com Document Intelligence parseando PDFs de politica.

Se seu NASK skill em prod responde pergunta regulada sem Source binding, pausa antes do proximo ciclo de auditoria BACEN.

Quantos NASK skills na sua plataforma respondem sem source binding?
github.com/paulopierrondi/servicenow-agent-army

### Hashtags
#ServiceNow #NowAssist #FSI

### Engagement question (CTA)
Que percentual dos seus NASK skills em prod tem Source binding explicito?

### Source / link
docs/anti-patterns.md (Pattern 12)

---

## Dia 27 — 2026-05-23 — Governance review cadence

**Pillar/Hero**: SADA governance + Guardrails Reviewer

**Hook**: Governance review trimestral nao e cerimonia. E a unica forma de pegar drift.

**Métrica alvo**: saves

### Versão EN

Quarterly governance review is not ceremony. It is the only way to catch drift.

The agent army runs governance as a query, not a meeting. Every quarter, three questions get answered with data:

One. Owner check. Every active sn_aia_agent has a named single owner who is still an active employee. Hit list goes to reassignment or retire.

Two. Guardian audit. Every Now Assist surface touching regulated data has Guardian sensitive-topic on. Sample sys_gen_ai_log_metadata for PII patterns. Findings to DPO.

Three. Outcome verification. Every active agent has its 90-day outcome metric measured. Below target by 50 percent or more triggers a four-block contract reset, not a credit increase.

The Guardrails Reviewer agent runs the static checks against the 20 anti-patterns. The Enterprise Architect Agent reviews dependency drift against the architecture map. The Pierrondi EA reviews the value bar; agents below threshold get retired.

This is governance done at the speed of platform, not the speed of slides. The whole cycle is two days of work per quarter if the queries are wired into Performance Analytics.

Gallery cases show this discipline at design time. The doc shows it at run time. Tying the two is the operating model.

Qual sua cadencia atual de governance review pra AI agents em prod?
github.com/paulopierrondi/servicenow-agent-army

### Versão PT-BR

Governance review trimestral nao e cerimonia. E a unica forma de pegar drift.

O batalhao roda governance como query, nao como reuniao. Todo trimestre, tres perguntas respondidas com dado:

Uma. Owner check. Todo sn_aia_agent ativo tem dono unico nomeado que ainda e employee ativo. Hit list vai pra reassignment ou retire.

Duas. Guardian audit. Toda surface Now Assist tocando dado regulado tem Guardian sensitive-topic on. Sample em sys_gen_ai_log_metadata por padrao de PII. Findings pro DPO.

Tres. Outcome verification. Todo agent ativo tem sua metrica de outcome em 90 dias medida. Abaixo do alvo em 50 por cento ou mais dispara reset do contrato de quatro blocos, nao aumento de credito.

O agent Guardrails Reviewer roda os checks estaticos contra os 20 anti-patterns. O Enterprise Architect Agent revisa drift de dependencia contra o mapa de arquitetura. Pierrondi EA revisa a barra de valor; agentes abaixo do threshold vao pro retire.

Isso e governance na velocidade da plataforma, nao na velocidade do slide. O ciclo todo e dois dias de trabalho por trimestre se as queries estiverem cabladas em Performance Analytics.

Gallery cases mostram a disciplina em design time. O doc mostra em run time. Amarrar os dois e o operating model.

Qual sua cadencia atual de governance review pra AI agents em prod?
github.com/paulopierrondi/servicenow-agent-army

### Hashtags
#ServiceNow #AIAgents #SADA

### Engagement question (CTA)
Quantos dias de trabalho um governance review trimestral consome na sua organizacao hoje?

### Source / link
docs/sada-framework.md + docs/anti-patterns.md

---

## Dia 28 — 2026-05-24 — Council orchestration recap

**Pillar/Hero**: Agent army recap

**Hook**: 20 advisors. One enters first. Each one knows when to hand off.

**Métrica alvo**: saves + repo stars

### Versão EN

20 advisors. One enters first. Each one knows when to hand off.

The army is not 20 agents you call individually. It is a council with a fixed orchestration:

Pierrondi EA enters first. Sets the four-block contract. Refuses to draw without it.

Once the contract is in place, the handoff map runs:
- Architecture trade-offs deeper to ServiceNow Architect Coach (SADA).
- Stakeholder requirements unclear to Business Analyst Agent.
- Now Assist surface choice to Now Assist Coach.
- Approval, audit, rollback specifics to Guardrails Reviewer.
- Catalog item full design to Catalog Designer.
- Integration pattern selection to Integration Mapper.
- Performance diagnostics to Performance Tuner.
- KB authoring to Knowledge Curator.
- ATF and CI rigging to ATF Test Generator.
- Upgrade plan to Upgrade Advisor.
- Domain depth to ITSM, ITOM, or CSM Specialist.
- Compress prompt before publishing to Token Saver Specialist.
- Launch copy to Demo Storyteller.

Each agent has its own guardrails, triggers, outputs, and refusal patterns. Read agents/<id>.md for the contract. Read gallery/<case>/ for the council in action.

Without orchestration, you have 20 prompts. With orchestration, you have a council that catches what no single agent would.

Pierrondi EA + handoff map. That is the product.

Pick the worst item on your roadmap. Open the repo. Run Pierrondi EA against it. Follow the handoff. Twenty minutes.
github.com/paulopierrondi/servicenow-agent-army

### Versão PT-BR

20 conselheiros. Um entra primeiro. Cada um sabe quando passar a bola.

O batalhao nao e 20 agents que voce chama individual. E um conselho com orquestracao fixa:

Pierrondi EA entra primeiro. Coloca o contrato de quatro blocos. Recusa desenhar sem ele.

Com o contrato fechado, o mapa de handoff roda:
- Trade-off de arquitetura mais profundo pro ServiceNow Architect Coach (SADA).
- Requisito de stakeholder confuso pro Business Analyst Agent.
- Escolha de surface Now Assist pro Now Assist Coach.
- Approval, audit, rollback pro Guardrails Reviewer.
- Catalog item completo pro Catalog Designer.
- Selecao de pattern de integracao pro Integration Mapper.
- Diagnostico de performance pro Performance Tuner.
- Autoria de KB pro Knowledge Curator.
- ATF e CI pro ATF Test Generator.
- Plano de upgrade pro Upgrade Advisor.
- Profundidade de dominio pro ITSM, ITOM ou CSM Specialist.
- Compressao de prompt antes de publicar pro Token Saver Specialist.
- Copy de launch pro Demo Storyteller.

Cada agent tem seus guardrails, triggers, outputs e padroes de recusa. Le agents/<id>.md pro contrato. Le gallery/<case>/ pro conselho em acao.

Sem orquestracao, voce tem 20 prompts. Com orquestracao, voce tem conselho que pega o que nenhum agent sozinho pegaria.

Pierrondi EA + mapa de handoff. Esse e o produto.

Escolhe o pior item do seu roadmap. Abre o repo. Roda Pierrondi EA contra ele. Segue o handoff. Vinte minutos.
github.com/paulopierrondi/servicenow-agent-army

### Hashtags
#ServiceNow #AIAgents #SADA

### Engagement question (CTA)
Qual handoff do mapa voce gostaria de testar primeiro com o caso da sua mesa?

### Source / link
agents/

---

## Dia 29 — 2026-05-25 — Launch announce

**Pillar/Hero**: Launch

**Hook**: ServiceNow Agent Army v0.1 esta no ar.

**Métrica alvo**: repo stars + DM

### Versão EN

ServiceNow Agent Army v0.1 is live.

Twenty advisors. Three agentic workflows. Ten gallery cases drawn from FSI Brazil and LATAM enterprise. A 30-day post backlog. A SADA framework brief. Twenty named anti-patterns with detection queries and fixes.

Pierrondi EA leads. The four-block contract is the operating discipline. Outcome metric, value with source data, deliverables with named owner, risks with go/no-go thresholds. Refusal is allowed. Refusal is encouraged.

What this is not: a magic agent. There is no auto-deploy to prod. No SaaS. No vendor lock. The repo is markdown, JSON, and SDK scaffolds. Clone it, run the prompts in your favorite LLM client, copy the gallery cases against your real backlog.

What this is: a council you can adopt this week. Read one gallery case in five minutes. Run Pierrondi EA against your worst backlog item in twenty. Test the four-block contract in your next architecture review.

Built by a TAE in FSI Brazil who got tired of architecture decks without numbers. Now public. MIT license. Pull requests welcome from people who have shipped Now Assist in regulated environments.

Open the repo. Star if it earns it. DM with the gallery case you want me to write next.
github.com/paulopierrondi/servicenow-agent-army

### Versão PT-BR

ServiceNow Agent Army v0.1 esta no ar.

Vinte conselheiros. Tres workflows agenticos. Dez gallery cases tirados de FSI Brasil e enterprise LATAM. Um backlog de 30 posts. Um brief do SADA framework. Vinte anti-patterns nomeados com query de deteccao e fix.

Pierrondi EA lidera. O contrato de quatro blocos e a disciplina operacional. Metrica de outcome, valor com dado fonte, entregaveis com dono nomeado, riscos com threshold de go/no-go. Recusa e permitida. Recusa e incentivada.

O que isso nao e: agent magico. Sem auto-deploy pra prod. Sem SaaS. Sem vendor lock. O repo e markdown, JSON e scaffold de SDK. Clona, roda os prompts no teu cliente LLM favorito, copia os gallery cases contra teu backlog real.

O que isso e: um conselho que voce adota nesta semana. Le um gallery case em cinco minutos. Roda Pierrondi EA contra teu pior item de backlog em vinte. Testa o contrato de quatro blocos no proximo design review.

Construido por um TAE em FSI Brasil que cansou de slide de arquitetura sem numero. Agora publico. Licenca MIT. Pull request bem-vindo de quem ja entregou Now Assist em ambiente regulado.

Abre o repo. Da uma star se ele merece. DM com o gallery case que voce quer ler em seguida.
github.com/paulopierrondi/servicenow-agent-army

### Hashtags
#ServiceNow #AIAgents #FSI

### Engagement question (CTA)
Qual gallery case voce quer ler primeiro? E qual deveria ser o gallery 11?

### Source / link
README.md

---

## Dia 30 — 2026-05-26 — Roadmap + community

**Pillar/Hero**: Launch + community + roadmap

**Hook**: O que vem em v0.2: voce escolhe.

**Métrica alvo**: comments + DM + repo stars

### Versão EN

What comes in v0.2: your call.

The 30-day arc covered Pierrondi EA, ten gallery cases, seven Now Assist surfaces, four SADA pillars, and twenty anti-patterns. The repo is in shape for a community PR cycle.

Three open questions for v0.2 that I want answered with data, not opinion:

One. Which anti-pattern from the list of 20 do you see most often in production today? The detection query in the repo runs read-only; if you can sample your sub-prod, the answer takes one evening.

Two. Which gallery case is missing? Candidates I am tracking: SecOps incident triage in FSI, LGPD-driven Knowledge migration, Performance Analytics dashboard rationalization, HR Service Delivery Q&A grounding. Pick one or propose a new archetype.

Three. Which Now Assist surface deserves a deeper treatment? The playbook has 12 Casos; the deep-dives in this 30-day arc covered 7. The other 5 are open for community contribution.

Pull requests are welcome. The contribution rules: archetype only, no client names; metrics tied to sources; refusal patterns named explicitly when the council says no.

Thank you to every reader who shared a critique in DM and every architect who tested Pierrondi EA against a real backlog item. The army is better for it.

Qual e o gallery case 11 e qual anti-pattern voce mais quer ver coberto em v0.2?
github.com/paulopierrondi/servicenow-agent-army

### Versão PT-BR

O que vem em v0.2: voce escolhe.

O arco de 30 dias cobriu Pierrondi EA, dez gallery cases, sete surfaces Now Assist, quatro pilares SADA e vinte anti-patterns. O repo esta em formato pra ciclo de PR da comunidade.

Tres perguntas abertas pra v0.2 que eu quero responder com dado, nao opiniao:

Uma. Qual anti-pattern da lista de 20 voce mais ve em prod hoje? A query de deteccao no repo roda read-only; se voce conseguir samplear seu sub-prod, a resposta sai numa noite.

Duas. Qual gallery case esta faltando? Candidatos que estou rastreando: SecOps incident triage em FSI, migracao de Knowledge sob LGPD, racionalizacao de dashboard Performance Analytics, grounding de Q&A em HR Service Delivery. Escolhe um ou propoe um arquetipo novo.

Tres. Qual surface Now Assist merece tratamento mais profundo? O playbook tem 12 Casos; os deep-dives deste arco cobriram 7. Os outros 5 estao abertos pra contribuicao da comunidade.

PR bem-vindo. Regras de contribuicao: arquetipo apenas, sem nome de cliente; metrica amarrada a fonte; padrao de recusa nomeado explicitamente quando o conselho diz nao.

Obrigado a todo leitor que mandou critica em DM e a todo arquiteto que testou Pierrondi EA contra item real de backlog. O batalhao esta melhor por isso.

Qual e o gallery case 11 e qual anti-pattern voce mais quer ver coberto em v0.2?
github.com/paulopierrondi/servicenow-agent-army

### Hashtags
#ServiceNow #AIAgents #SADA

### Engagement question (CTA)
Qual anti-pattern da lista de 20 voce mais ve em prod hoje, e qual deveria virar gallery case 11?

### Source / link
README.md + CHANGELOG.md

---
