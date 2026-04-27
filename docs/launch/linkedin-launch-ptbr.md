# LinkedIn launch post — PT-BR

> Formato: long-form, story-driven. Audiencia: ServiceNow Brasil + FSI LATAM. Maximo dois **bold** Unicode. Tres hashtags. Tom: Constructive Challenger. Sem palavras banidas.

## Titulo (arquivo)

ServiceNow Agent Army — kit AI agent outcome-first, publico, MIT.

## Gancho (linha 1, scroll-stopper)

A maioria do conselho ServiceNow e teatro. Entao eu construi um conselheiro que se recusa a desenhar arquitetura antes da pergunta de valor ser respondida.

## Corpo

A maioria do conselho ServiceNow e teatro. Entao eu construi um conselheiro que se recusa a desenhar arquitetura antes da pergunta de valor ser respondida.

O padrao que vejo em campo, especialmente em FSI Brasil: um builder pleno recebe "um AI agent pra ITSM", abre AI Agent Studio guided setup, ve Now Assist Skill Kit no menu, ve Build Agent na mesma release, e trava. Tres surfaces novas a cada family release. Sem conselheiro consistente. O CTA aprova o spec porque parece defensavel. O time de plataforma descobre em producao.

O problema nao e tecnico. E editorial. Ninguem faz a pergunta de valor primeiro.

Entao construi o **Pierrondi EA** — headliner de um kit open-source no GitHub. Toda resposta do Pierrondi EA tem a mesma forma, sem excecao:

- Outcome em 90 dias: uma metrica, uma direcao, um numero.
- Valor: numero em moeda com o trade-off explicito.
- Entregaveis: tres a cinco itens concretos, um dono nomeado por item, com data.
- Riscos: maximo tres, cada um com threshold de go/no-go.

Se algum dos quatro blocos esta fraco, o Pierrondi EA para e pergunta. Ele nao desenha caixa pra ser util. Depois que a pergunta de valor e respondida, o resto do batalhao segue: Business Analyst captura requirements, CTA define boundaries, Workflow Composer desenha os passos do AI Agent Studio, Guardrails Reviewer fecha o fluxo de aprovacao, especialistas ITSM/ITOM/CSM puxam best practices de dominio, Now Assist Coach escolhe a surface, ATF Test Generator monta a suite de regressao. **Vinte advisors.** Pierrondi EA lidera.

O kit traz dois MCP servers. Um read-only por construcao — zero codigo de escrita no binario. Outro guarded — toda alteracao em producao passa por dry-run, token de aprovacao assinado, audit log JSONL append-only, e rollback por registro. Inventariei nove MCP servers ServiceNow da comunidade. Nenhum entrega essa cadeia inteira. Esse e o espaco que esse repo ocupa.

O que e open-source: os 20 cards de advisor, o SADA Framework, os dois MCP servers, o web app catalog em Next.js, o validator, os prompt packs. Licenca MIT. O que fica privado e opcional: os archetypes FSI Brasil, o rubric do SADA scoring, a telemetria operacional. O batalhao funciona sem eles.

Honesto sobre o que o ServiceNow expoe via Fluent SDK 4.6 (`AiAgentWorkflow`, NASK APIs, auto-ACL) e o que ainda passa por guided setup (Now Assist Guardian policy, orquestracao do AI Agent Studio). Sem REST API inventada.

Repo: github.com/paulopierrondi/servicenow-agent-army

Qual foi a ultima proposta de arquitetura ServiceNow que voce viu com numero de valor anexado?

#ServiceNow #NowAssist #SADA

## Visual / anexo

- Primario: video de 90s upload nativo (track PT-BR de `agent-army-launch-90s-ptbr.mp4`).
- Fallback: imagem OG PT-BR (`docs/assets/og-ptbr.png`).

## Checklist de publicacao

- [ ] Post entre 09:00 e 10:30 BRT, terca ou quarta.
- [ ] Sem tag de pessoa na primeira hora (suprime alcance organico).
- [ ] URL do repo no corpo, nao em comentario.
- [ ] Hashtags so no fim, tres maximo.
- [ ] Apos 60 minutos, comentario seguinte: "EN version: linkedin.com/in/paulopierrondi/recent-activity/posts/" para puxar audiencia bilingue.
- [ ] Responder todo comentario nas primeiras 4 horas.

## O que funciona no thread

- "Qual foi a ultima proposta com numero de valor anexado?" — abre replies.
- "Pierrondi EA recusa desenho sem metrica. Qual metrica esta faltando no seu projeto Now Assist?" — convida nominal a comentaristas.
- Cair em um exemplo concreto: cole um dos quatro blocos do gallery 01 (incident triage FSI). Nao cole o README inteiro.

## O que nao funciona

- Pedir estrela no D0 — promocional, derruba ranking.
- Marcar ServiceNow Brasil, Anthropic, OpenAI — parece pedida de luz.
- Cross-post pagina pessoal -> pagina empresa antes do post original ranquear.
- Hashtags genericas tipo `#IA`, `#tecnologia`, `#bancodigital` — diluem o targeting.

## Sweep de palavras banidas antes de publicar

Reler e confirmar zero uso de: ensure, crucial, vital, journey, embark, unleash, dive, delve, plethora, indulge, unlock, unveil, elevate, landscape, navigate, daunting, game changer, stand out, unique blend, enhancing, just (standalone). Plus em PT: jornada, mergulhar, desbravar, alavancar, transformacional, divisor de aguas — banidos da mesma forma.

## Sanity de tamanho

- LinkedIn corta o feed em ~210 caracteres. Gancho aqui termina em 145. OK.
- Total target: 2000-2400 chars (LinkedIn permite 3000). O corpo acima esta proximo de 2050. Dentro do orcamento.
