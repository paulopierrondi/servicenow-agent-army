# Now Assist hook — CSM PT-BR self-service Q&A

## Surface
Now Assist Q&A on the consumer portal, scoped to a customer-vetted KB
subset; Guardian sensitive-topic active; case create on fallback.

Why this surface: docs/best-practices/csm.md §Self-service portal + Now
Assist names this exact surface for a B2C portal. The case for a custom
NASK skill is rejected because the OOTB Q&A surface plus a tagged scope
delivers the same outcome at lower upgrade risk.

## Configuration minima
- KB scope split: `customer-vetted` (~120 articles initially) and
  `internal-operational` (rest). Q&A reads only from `customer-vetted`.
- Communications and legal sign-off on every article in the vetted scope.
- Now Assist Guardian: prompt-injection, offensiveness, sensitive-topic
  for LGPD all active.
- Cite-source on every answer; mandatory portal widget rendering.
- Fallback button always visible regardless of answer state.
- Multi-language policy: pt-BR primary, en if and only if the cited
  article exists in en. No auto-translate.

## ROI estimate vs in-house solution

| Lever | Now Assist Q&A | DIY (custom NASK skill or chatbot widget) |
| --- | --- | --- |
| Time to first value | 6-8 weeks (KB curation + activation) | 16-20 weeks |
| LGPD compliance posture | Guardian native | Re-implement with BYOG; risk in audit |
| Upgrade path | Family-aligned | Custom widget breaks on portal upgrades |
| Deflection target (working hypothesis) | 15 to 30 percent in 90 days on top-10 categories | Comparable but slower ramp and weaker grounding |

Numbers are working hypotheses based on docs/best-practices/csm.md and
docs/now-assist-playbook.md Caso 12. Not a contractual SLA.

## When NOT to use Now Assist here
- KB scope under 60 vetted articles. Below that, FAQ static page is
  faster and safer.
- Mixed KB without scope split. Cited anti-pattern: agente busca artigo
  interno e expoe processo confidencial.
- Highly regulated answer surface (financial advice, medical) without a
  documented disclaimer and a hard refusal pattern.
- Portal not authenticated. Q&A on an anonymous portal increases
  prompt-injection risk and breaks the LGPD-aware fallback.

## Cross-references
- docs/best-practices/csm.md §B2C nuances and §Self-service portal
- docs/now-assist-playbook.md Caso 10 and Caso 12
- docs/best-practices/now-assist.md §Surface 1 — Now Assist Q&A
- docs/sada-framework.md §Pilar 4: Governance, sensitivity High
