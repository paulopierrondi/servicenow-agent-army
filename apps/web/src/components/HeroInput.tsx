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
      <form onSubmit={submit} className="surface p-5 md:p-7 flex flex-col gap-4">
        <label className="text-sm text-[var(--color-fg-muted)]" htmlFor="problem">
          Describe your ServiceNow problem (EN or PT-BR)
        </label>
        <textarea
          id="problem"
          required
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
          rows={3}
          placeholder={PLACEHOLDER}
          className="bg-[var(--color-bg-soft)] border border-[var(--color-border)] rounded-md px-3 py-2.5 text-[15px] text-[var(--color-fg)] focus:outline-none focus:border-[var(--color-fg-muted)] resize-y"
        />
        <div className="flex flex-wrap gap-3 items-end">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs text-[var(--color-fg-muted)]" htmlFor="domain">
              Domain
            </label>
            <select
              id="domain"
              value={domain}
              onChange={(e) => setDomain(e.target.value as DomainId)}
              className="bg-[var(--color-bg-soft)] border border-[var(--color-border)] rounded-md px-3 py-2 text-sm"
            >
              {DOMAINS.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.label}
                </option>
              ))}
            </select>
          </div>
          <label className="flex items-center gap-2 text-sm text-[var(--color-fg-muted)] py-2">
            <input
              type="checkbox"
              checked={hasSubProd}
              onChange={(e) => setHasSubProd(e.target.checked)}
              className="accent-[var(--color-accent)]"
            />
            I have a sub-production instance
          </label>
          <div className="flex-1" />
          <button type="submit" className="btn btn-primary">
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
