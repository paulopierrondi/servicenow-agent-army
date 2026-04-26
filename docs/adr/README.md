# Architecture Decision Records (ADRs)

Decisoes de arquitetura registradas em formato MADR (Markdown Any Decision Records). Cada ADR captura contexto, decisao, alternativas descartadas, consequencias e open questions.

## Index

| # | Titulo | Status | Data | Arquivo |
| --- | --- | --- | --- | --- |
| ADR-001 | Stack do app real (web + CLI + MCP servers) | accepted | 2026-04-26 | [ADR-001-stack.md](./ADR-001-stack.md) |
| ADR-002 | Contrato skill -> tool -> MCP com guardrails | accepted | 2026-04-26 | [ADR-002-skill-tool-contract.md](./ADR-002-skill-tool-contract.md) |

## Como adicionar um novo ADR

1. **Copiar template**. Use o ADR-001 ou ADR-002 como base.
2. **Numero sequencial**. Proximo numero em ordem (`ADR-003`, `ADR-004`, ...). Nao reuse numeros.
3. **Filename**. `ADR-NNN-kebab-case-titulo.md`.
4. **Status inicial**. Use `proposed` para PRs em discussao; mude para `accepted` ao mergear; `superseded by ADR-XXX` se for substituido; `deprecated` se sair de uso sem sucessor.
5. **Frontmatter minimo**:
   - Status
   - Date (ISO yyyy-mm-dd)
   - Deciders (nome + papel)
   - Context source (links/referencias usadas para fundamentar)
   - Depende de (outros ADRs, opcional)
6. **Secoes obrigatorias**: Context, Decision, Consequences (positivas + negativas + open questions).
7. **Citacoes**. Sempre cite fontes da pesquisa (`docs/research-2026-04.md secao X.Y`, `docs/mcp-landscape.md secao N`) por afirmacao nao-trivial.
8. **Atualize este index**. Adicione linha nova na tabela acima.

## Convencoes

- Markdown ASCII puro. Sem emojis. Sem caracteres especiais que quebrem em terminais ASCII-only.
- Trade-offs honestos. Nao evangelize stacks; documente o que foi descartado e por que.
- Open questions explicitas. Itens marcados [VERIFICAR INSTANCIA] na pesquisa devem aparecer como open questions no ADR.
- ADR e imutavel apos `accepted`. Mudancas de rumo viram **novo ADR** que marca o anterior como `superseded`.
