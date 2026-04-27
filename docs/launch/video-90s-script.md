# 90-second video script — ServiceNow Agent Army

> Target surfaces: LinkedIn native upload, X/Twitter post, README hero (Loom embed). Total 90s. Two language tracks (PT-BR + EN), recorded same day, same setup.

## Production setup (record once, deliver twice)

- Camera: Loom Pro 1080p, 30fps fixed (60fps drops on upload). Face cam top-right corner pinned.
- Mic: Rode NT-USB or Shure MV7 cardioid. -18dBFS average. Pop filter on.
- Screen: macOS, terminal at 16pt, VS Code at 14pt, browser at 100% zoom. Dark mode everywhere.
- Lighting: Elgato Key Light Air at 45 deg, 4500K, 30% intensity. Warm fill optional.
- Background: bookshelf or matte wall. No ServiceNow logo, no client material.
- Cut style: hard cuts only. No transitions. No motion graphics.
- Music: licensed library (Artlist, Epidemic Sound, Soundstripe). Tempo 110-120 BPM. Track style: minimal electronic, no vocals, no drops. -22dBFS under voice. Suggested: "Future Outline" (Artlist), "Deep Focus" (Epidemic Sound). Avoid YouTube Audio Library — pre-cleared but recognizable in tech circles.

## Pre-record checklist

- [ ] Repo at `main`, `pnpm validate` passes, README hero image present.
- [ ] Terminal scrubbed of personal aliases, history cleared, `clear` before take.
- [ ] PDI tab on `sn_aia_agent.list` pre-warmed (cache hit on second open).
- [ ] Audit log file at `/tmp/agent-army-audit.jsonl` truncated to last 5 events.
- [ ] Loom recording app pinned, mic level confirmed at -18dBFS.
- [ ] Phone face down, Slack quit, calendar quit, mail quit, notifications off.
- [ ] Read script aloud once, time check at 90s.
- [ ] Record 30s of silent room tone before take 1 (used for audio repair).

## Beat-by-beat (EN)

### 0:00-0:15 — The pain (face cam)

[VISUAL: face cam, neutral background, subtle key light]

"You opened ServiceNow this week and saw three new surfaces. AI Agent Studio, Now Assist Skill Kit, AI Control Tower. The docs say start anywhere. The reality: a junior builder ships a Now Assist agent on top of a noisy KB, the CTA approves it, and the platform team finds out in production. There is no consistent advisor for this. So I built one."

[CUE: cut to terminal at 0:15]

### 0:15-0:45 — The fix (split screen)

[VISUAL: left half terminal showing Pierrondi EA prompt, right half VS Code with `agents/pierrondi-enterprise-architect.md` open]

"This is **Pierrondi EA**. The headliner of an open-source kit on GitHub: twenty advisors, two MCP servers, and a four-block contract that refuses to draw architecture before the value question is answered. Outcome in 90 days. Value in currency with the trade-off. Three to five deliverables with one named owner each. Three risks with go/no-go thresholds. If any block is weak, Pierrondi EA stops and asks. The other nineteen advisors follow: Business Analyst, CTA, Workflow Composer, Guardrails Reviewer, ITOM, ITSM, CSM, Now Assist Coach. Each with one job."

[CUE: at 0:35 zoom into the four blocks. At 0:45 cut to demo flash.]

### 0:45-1:15 — Three demo cuts (12s each, no narration overlap)

[VISUAL CUT 1, 0:45-0:57: Codex CLI running. Type the prompt visible on screen.]

```
codex run "Use the servicenow-agent-factory skill to draft a CMDB Health Check workflow with guardrails."
```

[Narration over]: "One. Codex CLI generates the workflow JSON, the agent spec, the ATF tests."

[VISUAL CUT 2, 0:57-1:06: AI Agent Studio guided setup paste. Browser tab on the AI Agent Studio agent builder with the generated spec pasted in.]

[Narration over]: "Two. The output pastes into AI Agent Studio guided setup. No fake REST API. Honest path."

[VISUAL CUT 3, 1:06-1:15: terminal showing audit log JSONL after MCP write dry-run.]

```
[mcp-write] dry-run completed
[approval] token signed by paulopierrondi at 14:32:08
[audit] event written to /tmp/agent-army-audit.jsonl
[mcp-write] commit succeeded, rollback id: 7f3a-...
```

[Narration over]: "Three. The MCP write server gates every production change behind dry-run, signed approval token, append-only audit, and per-record rollback. No other community MCP ships that chain end-to-end."

### 1:15-1:30 — CTA (face cam)

[VISUAL: face cam, slight smile, direct]

"It is MIT-licensed. Twenty advisors. Two MCP servers. Honest about what ServiceNow exposes and what still needs guided setup. **github.com/paulopierrondi/servicenow-agent-army**. Ask Pierrondi EA your next ServiceNow problem. If the value number is missing, it will tell you."

[CUE: end card 1.5s static — repo URL + LICENSE: MIT]

## Beat-by-beat (PT-BR)

### 0:00-0:15 — A dor

"Voce abriu ServiceNow essa semana e viu tres surfaces novas. AI Agent Studio, Now Assist Skill Kit, AI Control Tower. A doc diz: comece por onde quiser. Na pratica: um builder junior solta um Now Assist agent em cima de uma KB suja, o CTA aprova, o time de plataforma descobre em producao. Nao tem conselheiro consistente pra isso. Entao eu construi um."

### 0:15-0:45 — O fix

"Esse e o **Pierrondi EA**. Headliner de um kit open-source no GitHub: vinte advisors, dois MCP servers, e um contrato de quatro blocos que se recusa a desenhar arquitetura antes da pergunta de valor ser respondida. Outcome em 90 dias. Valor em R$ com o trade-off. Tres a cinco entregaveis com um dono nomeado cada. Tres riscos com threshold de go/no-go. Se algum bloco esta fraco, ele para e pergunta. O resto do batalhao segue: BA, CTA, Workflow Composer, Guardrails, ITOM, ITSM, CSM, Now Assist Coach. Cada um com uma funcao."

### 0:45-1:15 — Tres cuts demo

[Mesmo visual EN. Narracao PT:]

"Um. Codex CLI gera o workflow JSON, o agent spec, os testes ATF."

"Dois. A saida cola no AI Agent Studio guided setup. Sem REST API inventada. Caminho honesto."

"Tres. O MCP write server fecha toda escrita em producao atras de dry-run, token de aprovacao assinado, audit log append-only, e rollback por registro. Nenhum outro MCP da comunidade entrega essa cadeia inteira."

### 1:15-1:30 — CTA

"Licenca MIT. Vinte advisors. Dois MCP servers. Honesto sobre o que ServiceNow expoe e o que ainda passa por guided setup. **github.com/paulopierrondi/servicenow-agent-army**. Pergunta pro Pierrondi EA o seu proximo problema ServiceNow. Se faltar numero de valor, ele te avisa."

## B-roll suggestions (insert if a cut runs short)

- Close-up of terminal cursor blinking right after Enter on a council prompt (1.5s).
- Slow vertical scroll over `catalog/agents.json` showing the 20 advisors block (2s).
- Mermaid diagram from README architecture section, zoomed at 120% (2s).
- VS Code open on `docs/adr/ADR-002-skill-tool-contract.md` scrolling the JWT approval token spec (2s).
- PDI list view sorted by `sys_updated_on` showing zero recent changes (1.5s).

## Visual cues per beat (cheat sheet)

| Time | Source | Visual |
| --- | --- | --- |
| 0:00-0:15 | Face cam | Speaker direct to camera |
| 0:15-0:35 | Split screen | Terminal + VS Code |
| 0:35-0:45 | Zoom | Four-block contract close-up |
| 0:45-0:57 | Terminal | Codex CLI command, output streaming |
| 0:57-1:06 | Browser | AI Agent Studio guided setup paste |
| 1:06-1:15 | Terminal | Audit log JSONL streaming |
| 1:15-1:30 | Face cam + end card | Direct + repo URL static |

## Subtitle / captions

- Burn captions in EN and PT-BR. Auto-generate via Loom, then hand-correct ServiceNow product names: Now Assist, AI Agent Studio, NASK, AI Control Tower, Guardian, Fluent SDK.
- Banned-words pass: scrub `ensure`, `crucial`, `vital`, `journey`, `embark`, `unleash`, `dive`, `delve`, `plethora`, `indulge`, `unlock`, `unveil`, `elevate`, `landscape`, `navigate`, `daunting`, `game changer`, `stand out`, `unique blend`, `enhancing`, and standalone `just`.
- LinkedIn supports SRT upload — use `.srt` separate file, not burned-in. X/Twitter supports `.srt` only on Premium uploads — burn captions there.

## Post-record checklist

- [ ] Watch full take twice. Time-check at 90s. Cut anything over.
- [ ] Verify no PDI URL or token visible in any frame.
- [ ] Verify no client name, partner name, or unreleased ServiceNow surface visible.
- [ ] Export Loom in 1080p MP4, name `agent-army-launch-90s-en.mp4` and `-ptbr.mp4`.
- [ ] Mirror to Drive folder `Launch / 2026-04 / video-90s/` for backup.
- [ ] Generate captions in EN and PT, hand-correct product names.
- [ ] Create thumbnail: split screen face cam left + four-block contract right, headline "Outcome before output."
- [ ] Update `docs/launch/README.md` with the Loom share link.
- [ ] Update top-level `README.md` hero image embed (after upload).
- [ ] Save take 1 raw + take 2 raw as backup. Keeper take goes to publish folder.

## Pitfalls

- If the demo flash runs past 12s per cut, kill the third cut entirely. Replace with a static screenshot of the audit JSONL and narrate over it. The CTA matters more than the third cut.
- Do not show a real PDI URL with the instance number visible. Use `https://devXXXXX.service-now.com` masked or crop the address bar.
- Do not say "produces production-grade output" — the ServiceNow community will pile on. Say "produces drafts that survive a CAB review."
- Do not show Linear, Slack, or any private artifact during screen captures.
- Do not promise the MCP write server is registry-published yet. The script says "ships dry-run + approval + audit + rollback" — that is the contract, not a registry status claim.
