# Hub Council Context — servicenow-agent-army

Generated from registry: `2026-05-31T20:33:42.729Z`

## Registry

- Registry id: `servicenow-agent-army`
- Name: `servicenow-agent-army`
- Path: `/Users/paulopierrondi/Projects/servicenow-agent-army`
- Obsidian note: `02_Projects/servicenow-agent-army`
- Linear: `ServiceNow Agent Army`
- Branch: `main`
- Dirty: `26`
- Ahead/behind: `+0/-0`
- Last commit: `51a3732 2026-05-20 fix: stabilize lint checks`

## Product Council

Todo trabalho neste projeto deve acionar:

| Papel | Agente | Pergunta |
| --- | --- | --- |
| Business Owner | `agente_business_owner` | Isso resolve uma necessidade real? |
| Technical Lead | `agente_technical_lead` | Isso esta tecnicamente saudavel? |
| Automation Lead | `agente_automation_lead` | O que deve ser automatizado, com qual guardrail? |
| Test Lead | `agente_test_lead` | Que evidencia prova que funciona? |
| Product User | `agente_product_user` | Um usuario real conseguiria usar e quebrar? |
| Release Lead | `agente_release_lead` | Como shippar com seguranca? |
| Delivery Lead | `agente_delivery_lead` | Qual a proxima acao executavel? |

## Start gate

```bash
/Users/paulopierrondi/agents-hub/scripts/project-council-touchpoint.py --project-id "servicenow-agent-army" --phase start
```

## Finish gate

```bash
/Users/paulopierrondi/agents-hub/scripts/project-council-touchpoint.py --project-id "servicenow-agent-army" --phase finish --summary "<o que mudou; testes; riscos; proximos passos>"
```

## Fontes canonicas

- Registry: `/Users/paulopierrondi/agents-hub/registry/projects_registry.json`
- Council config: `/Users/paulopierrondi/Documents/Obsidian Vault/Hub_Agentes/05_Configuracao/config_product_council.md`
- Council reports: `/Users/paulopierrondi/Documents/Obsidian Vault/Hub_Agentes/03_Outputs/council_reviews/`
- Dashboard: `/Users/paulopierrondi/Documents/Obsidian Vault/Hub_Agentes/04_Dashboards/dashboard_product_council.md`
- Prompt caching policy: `/Users/paulopierrondi/Documents/Obsidian Vault/99_System/Prompt Caching Workflow Policy.md`

## Guardrails

- Nao escrever segredos em Markdown.
- Em workflows recorrentes, manter contexto estavel em prefixo cacheavel e delta dinamico no fim; registrar `prompt_cache` quando disponivel.
- Nao executar deploy, push, App Store submit, ads spend, publicacao, migrations, producao, cron/LaunchAgent mutation ou secret changes sem aprovacao explicita.
- Se o vault local nao existir, use este arquivo como snapshot e registre resultado em `.brain/SESSION_NOTES.md`.
