"use client";

import { DOMAINS, type DomainId } from "@/lib/domains";
import { useState } from "react";
import { DeliberationStream } from "./DeliberationStream";

const PLACEHOLDER =
  "Ex.: Triage P2 incidents in ITSM and propose a Now Assist response with three alternatives.";

export function HeroInput() {
  const [problem, setProblem] = useState("");
  const [domain, setDomain] = useState<DomainId>("itsm");
  const [hasSubProd, setHasSubProd] = useState(true);
  const [run, setRun] = useState<{ problem: string; domain: DomainId; key: number } | null>(null);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!problem.trim()) return;
    setRun({ problem: problem.trim(), domain, key: Date.now() });
  }

  return (
    <section className="shell mt-10 mb-24">
      <form
        onSubmit={submit}
        className="surface p-5 md:p-6 flex flex-col gap-4"
        onKeyDown={(e) => {
          if ((e.metaKey || e.ctrlKey) && e.key === "Enter") submit(e);
        }}
      >
        <div className="flex items-center justify-between">
          <label className="section-label" htmlFor="problem">
            Describe your ServiceNow problem (EN or PT-BR)
          </label>
          <span className="text-[12px] text-[var(--color-fg-muted)]">
            mock mode · no key required
          </span>
        </div>
        <textarea
          id="problem"
          required
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
          rows={3}
          placeholder={PLACEHOLDER}
          className="input resize-y"
        />
        <div className="flex flex-wrap gap-3 items-center">
          <div className="flex flex-col gap-1.5">
            <label className="section-label" htmlFor="domain">
              Domain
            </label>
            <select
              id="domain"
              value={domain}
              onChange={(e) => setDomain(e.target.value as DomainId)}
              className="input"
              style={{ width: "11rem" }}
            >
              {DOMAINS.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.label}
                </option>
              ))}
            </select>
          </div>
          <label className="flex items-center gap-2 text-[13px] text-[var(--color-fg-muted)] py-2 self-end">
            <input
              type="checkbox"
              checked={hasSubProd}
              onChange={(e) => setHasSubProd(e.target.checked)}
              className="accent-[var(--color-accent)]"
            />
            Sub-prod available
          </label>
          <div className="flex-1" />
          <button type="submit" className="btn btn-primary self-end">
            Deliberate
          </button>
        </div>
      </form>

      {run ? (
        <DeliberationStream
          key={run.key}
          problem={run.problem}
          domain={run.domain}
          hasSubProd={hasSubProd}
        />
      ) : null}
    </section>
  );
}
