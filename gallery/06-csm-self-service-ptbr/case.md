# PT-BR self-service Q&A for CSM portal

## Domain
CSM (B2C, Brazilian retail chain)

## Persona
B2C consumer using the customer portal in pt-BR; senior agent oversight on escalation.

## Original problem (as user submitted)
> "Cliente abre case via portal e a maioria pergunta as mesmas 20 coisas:
> politica de troca, prazo de entrega, status do pedido. Queremos Now
> Assist Q&A em portugues, mas o juridico esta nervoso com LGPD e o
> marketing quer ver fonte da resposta."

## Context
- Brazilian retail chain, ~80k cases per month on the consumer portal.
- Existing KB: ~600 articles, mixed quality. Customer-facing subset: ~120 vetted by communications.
- LGPD scope: portal authenticated; consumers see their own data only.
- Languages: pt-BR primary; en secondary for international SKUs.
- Sub-prod available; legal team part of the design review board.

## Council deliberation summary
- Business Analyst Agent caught the marketing concern early. Cited an anti-pattern: Q&A without source citation breaks trust. Demanded cite-source on every answer.
- CSM Specialist split the KB into "vetted customer-facing" and "internal operational" scopes. Refused to mix them in the same Q&A scope.
- Knowledge Curator chunked the 120 vetted articles, normalized headings, and set ACLs to consumer-portal-readable.
- Now Assist Coach mapped the surface to Now Assist Q&A on the customer portal, with Guardian sensitive-topic for LGPD. Cited the docs/best-practices/csm.md self-service section.
- Guardrails Reviewer required: Guardian on, cite-source on every answer, fallback-to-human button always visible, no auto-translate without native PT-BR review.

## Outcome
- Target: deflection ratio from 15 to 30 percent in 90 days on the top-10 case categories.
- Target: customer satisfaction score on resolved-by-Q&A cases at least equal to baseline.
- Target: zero LGPD incidents linked to Q&A.
- Acceptance: legal team sign-off on the vetted KB scope and Guardian configuration before launch.

## Anti-pattern flagged
docs/best-practices/csm.md §B2C anti-patterns lists "chatbot generico sem
grounding". This design grounds on the vetted scope and refuses to answer
out-of-scope questions; the fallback path is always available.
