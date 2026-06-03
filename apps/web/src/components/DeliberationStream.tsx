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

  const doneCount = rows.filter((r) => r.status === "done").length;

  return (
    <div ref={containerRef} className="mt-6 flex flex-col gap-4">
      <div className="surface p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="section-label">Council deliberation</span>
            {!done ? <span className="dot-pulse" aria-label="running" /> : null}
          </div>
          <span className="tag">
            <span className={done ? "tag-dot tag-dot--now" : "tag-dot tag-dot--accent"} />
            {done ? "complete" : `${doneCount} of 7`}
          </span>
        </div>
        <ul className="flex flex-col">
          {rows.map((row, idx) => (
            <li
              key={row.id}
              className={`slide-in flex gap-3 py-2.5 ${
                idx < rows.length - 1 ? "border-b border-[var(--color-border)]" : ""
              }`}
            >
              <div className="flex flex-col items-center pt-1">
                <span
                  className={`inline-block w-2 h-2 rounded-full ${
                    row.status === "done" ? "bg-[var(--color-now-green)]" : "bg-[var(--color-accent)]"
                  }`}
                />
                {idx < rows.length - 1 ? (
                  <span className="flex-1 w-px bg-[var(--color-border)] mt-1" />
                ) : null}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[13.5px] font-bold tracking-tight">{row.label}</span>
                  {row.status === "done" ? (
                    <span className="tag">
                      <span className="tag-dot tag-dot--now" />
                      done
                    </span>
                  ) : (
                    <span className="tag">
                      <span className="dot-pulse" />
                      thinking
                    </span>
                  )}
                </div>
                <ul className="text-[13px] text-[var(--color-fg-muted)] flex flex-col gap-1 leading-relaxed">
                  {row.thoughts.map((t) => (
                    <li key={`${row.id}:${t}`} className="fade-in">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
          {rows.length === 0 ? (
            <li className="text-[13px] text-[var(--color-fg-muted)] py-2">
              <span className="dot-pulse mr-2" />
              Warming up the council…
            </li>
          ) : null}
        </ul>
        {error ? (
          <p className="mt-4 text-[13px] text-[var(--color-danger)]">Error: {error}</p>
        ) : null}
      </div>

      {done && artifacts ? <OutputCards artifacts={artifacts} /> : null}
    </div>
  );
}
