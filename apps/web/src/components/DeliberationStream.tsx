"use client";

import type { Artifacts, DeliberationEvent } from "@/lib/deliberate-mock";
import type { DomainId } from "@/lib/domains";
import { useEffect, useRef, useState } from "react";
import { OutputCards } from "./OutputCards";

type AgentRow = {
  id: string;
  label: string;
  thoughts: string[];
  status: "running" | "done";
};

export function DeliberationStream({
  problem,
  domain,
  hasSubProd,
}: {
  problem: string;
  domain: DomainId;
  hasSubProd: boolean;
}) {
  const [rows, setRows] = useState<AgentRow[]>([]);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [artifacts, setArtifacts] = useState<Artifacts | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let cancelled = false;
    const controller = new AbortController();

    async function run() {
      try {
        const res = await fetch("/api/deliberate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ problem, domain, hasSubProd }),
          signal: controller.signal,
        });
        if (!res.ok || !res.body) {
          throw new Error(`Deliberate endpoint returned ${res.status}`);
        }
        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let buffer = "";
        while (true) {
          const { value, done: readerDone } = await reader.read();
          if (readerDone) break;
          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() ?? "";
          for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed.startsWith("data:")) continue;
            const payload = trimmed.slice(5).trim();
            if (!payload) continue;
            try {
              const event: DeliberationEvent = JSON.parse(payload);
              if (cancelled) return;
              applyEvent(event);
            } catch {
              // ignore malformed line
            }
          }
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Unknown error");
        }
      }
    }

    function applyEvent(event: DeliberationEvent) {
      if (event.type === "agent_start") {
        setRows((prev) => [
          ...prev,
          { id: event.agent, label: event.label, thoughts: [], status: "running" },
        ]);
      } else if (event.type === "agent_thought") {
        setRows((prev) =>
          prev.map((row) =>
            row.id === event.agent ? { ...row, thoughts: [...row.thoughts, event.text] } : row,
          ),
        );
      } else if (event.type === "agent_done") {
        setRows((prev) =>
          prev.map((row) => (row.id === event.agent ? { ...row, status: "done" } : row)),
        );
      } else if (event.type === "complete") {
        setArtifacts(event.artifacts);
        setDone(true);
      } else if (event.type === "error") {
        setError(event.message);
      }
    }

    run();
    return () => {
      cancelled = true;
      controller.abort();
    };
  }, [problem, domain, hasSubProd]);

  useEffect(() => {
    containerRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, []);

  return (
    <div ref={containerRef} className="mt-7 flex flex-col gap-4">
      <div className="surface p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium tracking-wide uppercase text-[var(--color-fg-muted)]">
            Council deliberation
          </h3>
          <span className="text-xs text-[var(--color-fg-muted)]">
            {done ? "complete" : `${rows.filter((r) => r.status === "done").length} of 7 done`}
          </span>
        </div>
        <ul className="flex flex-col gap-3">
          {rows.map((row) => (
            <li key={row.id} className="fade-in border-l-2 border-[var(--color-border)] pl-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-medium">{row.label}</span>
                {row.status === "running" ? (
                  <span className="dot-pulse" aria-label="thinking" />
                ) : (
                  <span className="tag">done</span>
                )}
              </div>
              <ul className="text-sm text-[var(--color-fg-muted)] flex flex-col gap-1">
                {row.thoughts.map((t) => (
                  <li key={`${row.id}:${t}`} className="fade-in">
                    {t}
                  </li>
                ))}
              </ul>
            </li>
          ))}
          {rows.length === 0 ? (
            <li className="text-sm text-[var(--color-fg-muted)]">Warming up the council...</li>
          ) : null}
        </ul>
        {error ? <p className="mt-4 text-sm text-[var(--color-accent)]">Error: {error}</p> : null}
      </div>

      {done && artifacts ? <OutputCards artifacts={artifacts} /> : null}
    </div>
  );
}
