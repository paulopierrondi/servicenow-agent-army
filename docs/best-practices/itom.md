# Best Practices — ITOM

> Lente: TAE FSI Brasil. Family alvo: Yokohama / Zurich. [VERIFICAR FAMILY RELEASE] onde Apr 2026 docs nao confirmam.

## Discovery

### Best practices

- **Scope explicito por discovery schedule** — IP range, credentials, schedule window. Discovery "tudo no /16" gera CMDB poluido
- **Mid Server placement** considera firewall e proximidade de rede; em FSI Brasil tipicamente: 1 mid server por DC + 1 por DMZ + cloud-side mid servers
- **Credential Affinity** depois do primeiro discovery cycle — nao deixe o sistema testar todas as credenciais a cada ciclo
- **Error handling rotineiro** — Discovery Status > Error Threshold com alarme em PA, nao deixar acumular
- **Identification & Reconciliation rules** revisadas antes de subir novo CI type — duplicate CIs depois sao caros de corrigir
- **Now Assist Discovery insights** [VERIFICAR FAMILY RELEASE] para anomalia de configuracao — ainda em evolucao, validar em sub-prod
- **Horizontal vs Pattern-based** — preferir patterns para infra moderna (cloud, container); horizontal so para legacy

### Schedule cadence (FSI tipico)

| Tipo | Cadencia |
| --- | --- |
| Network devices | Weekly |
| Servers (Linux/Windows) | Daily, 2-4 AM janela de baixo trafego |
| Cloud (AWS/Azure/GCP) | Cloud Discovery via service account, hourly delta |
| Storage | Weekly |
| Application | Pattern-driven, sob demanda + weekly full |

### Anti-patterns Discovery

1. **Discovery rodando em horario de pico** — gera incident por degradacao de rede, time pensa que e ataque
2. **Credentials em texto claro** em Discovery Schedule — auditoria interna pega no primeiro mes
3. **Mid Server sem HA** em DC critico — discovery falha, CMDB stale, incident manager descobre quando precisa
4. **CI duplicado por identificacao fraca** (ex: hostname so) — relationships ficam estranhos, change risk perde acuracia
5. **Pattern customizado sobrescrevendo OOTB** — perde upgrade path em Family release
6. **CMDB Health Dashboard ignorado** — completeness baixa nao gera acao corretiva

### Links oficiais (acesso 2026-04-26)

- [Discovery](https://www.servicenow.com/docs/r/zurich/it-operations-management/discovery.html)
- [CMDB Identification & Reconciliation](https://www.servicenow.com/docs/r/zurich/configuration-management-database/identification-reconciliation.html)

---

## Service Mapping

### Best practices

- **Top-down primeiro para servicos criticos.** Owner do servico aprova, discovery baseada em entry point
- **Traffic-based (Tags & Patterns)** para servicos dinamicos — microservices, containers
- **ML-based Service Mapping** [VERIFICAR FAMILY RELEASE] para ambiente com baixa documentacao — accept que vai precisar de revisao humana
- **Business Service vs Technical Service vs Application Service** distincao mantida — colapsar tudo em "Service" mata reporting
- **CIs orphans em Service Map** = sinal de discovery scope errado ou identificacao fraca; nao ignorar

### Anti-patterns Service Mapping

1. **Mapas desenhados manualmente em PowerPoint** que viram fonte de verdade — Service Mapping ignorado
2. **Top-down sem owner** — mapa sobe, ninguem mantem, vira fossil em 6 meses
3. **Service Map gigante de "Plataforma Bancaria"** com 200+ CIs — ninguem entende, nao serve para impact analysis
4. **Mudanca de IP nao atualiza mapa** — Discovery rodou mas Service Mapping nao reagiu, fica stale

### Links oficiais

- [Service Mapping](https://www.servicenow.com/docs/r/zurich/it-operations-management/service-mapping.html)

---

## Event Management

### Best practices

- **Event Rules para noise reduction** antes de Alert. Sem rules, alert flood mata o time de NOC
- **Alert Correlation** baseada em Service Map + tempo + topology — reduz ticket count > 60% tipicamente
- **Now Assist for AIOps** [VERIFICAR FAMILY RELEASE para Zurich naming] — anomaly detection + incident summarization. Ativar so depois de 3 meses de baseline limpa
- **Alert Aggregation** em CMDB CI, nao em hostname string
- **Event source whitelist** — receber so de monitoring tool autorizado evita ataque por evento forjado
- **Alert acknowledgement com SLA** distinto de incident SLA — NOC operator tem 2 minutos para ack, 15 para incident

### Anti-patterns Event Management

1. **Todo alert vira incident** — 50k alerts/dia, 50k incidents/dia, time desiste e cria filtro client-side
2. **Alert correlation rules sobrescrevendo OOTB** sem regression test
3. **Anomaly detection ativado em metric com seasonality** (ex: trafego de e-commerce) sem baseline ajustado — false positive em horario de pico
4. **Source de evento sem health check** — monitoring tool morre, ServiceNow continua "all green"
5. **Alert sem CI binding** — incident criado sem CMDB context, change risk e impact analysis ficam zero

### Links oficiais

- [Event Management](https://www.servicenow.com/docs/r/zurich/it-operations-management/event-management.html)
- [AIOps with Now Assist](https://www.servicenow.com/docs/r/zurich/intelligent-experiences/now-assist-aiops.html) [VERIFICAR FAMILY RELEASE]

---

## Performance Analytics

### Best practices

- **Indicators alinhados a outcome de negocio**, nao "incidents resolved per day"
- **Breakdowns** com hierarquia de business unit > service > assignment group
- **Targets revisados trimestralmente** com Business Owner — target estatico vira ficcao
- **Snapshot frequency** alinhada com cadencia de decisao (daily para operacional, monthly para executivo)
- **Forecast com cuidado** — PA forecast usa modelo simples, nao substitui planejamento de capacidade real

### Anti-patterns PA

1. **Indicator sem owner** — ninguem revisa, ninguem age
2. **Dashboard com 40 widgets** — ninguem usa, performance do portal cai
3. **Calculation script com GlideAggregate em loop** — snapshot demora horas, falha em peak
4. **Targets copiados do dashboard antigo** sem revalidacao — meta defasada vira teatro
5. **PA + Reports legacy mostrando numeros divergentes** — reuniao executiva discute "qual numero esta certo" em vez do problema

### Links oficiais

- [Performance Analytics](https://www.servicenow.com/docs/r/zurich/performance-analytics-reporting/performance-analytics.html)

---

## Cross-cutting (FSI Brasil)

- **CMDB e fundacao para tudo em ITOM e ITSM.** Investir em CMDB Health antes de comprar Now Assist for ITOM
- **NOC operating model** importa mais que ferramenta — Event Management bem configurado em time mal estruturado vira ruido
- **Cloud + on-prem hybrid** e o padrao. Discovery e Service Mapping precisam tratar ambos sem priorizar um

## Para o batalhao

- **CTA Agent** valida se a stack Now Assist (Discovery + AIOps) faz sentido para o tamanho de operacao
- **Enterprise Architect Agent** desenha CMDB scope antes de qualquer agentic workflow tocar CI
- **Guardrails Reviewer** confere que Event Management nao gera alerta sobre PII vazado em log
