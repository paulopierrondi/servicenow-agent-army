"use client";

import type { Artifacts } from "@/lib/deliberate-mock";
import { useState } from "react";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      className="btn text-xs py-1 px-2"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setCopied(true);
          setTimeout(() => setCopied(false), 1200);
        } catch {
          // ignore
        }
      }}
    >
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

export function OutputCards({ artifacts }: { artifacts: Artifacts }) {
  const specJson = JSON.stringify(artifacts.agentSpec, null, 2);

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card
        title="Agent spec"
        subtitle="AI Agent Studio JSON"
        actions={<CopyButton text={specJson} />}
      >
        <pre className="code">{specJson}</pre>
      </Card>

      <Card
        title="Workflow steps"
        subtitle={artifacts.workflow.name}
        actions={<CopyButton text={JSON.stringify(artifacts.workflow, null, 2)} />}
      >
        <p className="text-xs text-[var(--color-fg-muted)] mb-2">
          Trigger: {artifacts.workflow.trigger}
        </p>
        <ol className="flex flex-col gap-2 text-sm">
          {artifacts.workflow.steps.map((s) => (
            <li key={s.id} className="flex gap-3">
              <span className="text-[var(--color-fg-muted)] tabular-nums">{s.id}.</span>
              <div>
                <div className="font-medium">{s.title}</div>
                <div className="text-[var(--color-fg-muted)] text-xs">{s.detail}</div>
              </div>
            </li>
          ))}
        </ol>
      </Card>

      <Card
        title="Skill prompt"
        subtitle="Now Assist Skill Kit (NASK)"
        actions={<CopyButton text={artifacts.skillPrompt} />}
      >
        <pre className="code">{artifacts.skillPrompt}</pre>
      </Card>

      <Card
        title="ServiceNow SDK scaffold"
        subtitle={artifacts.sdkScaffold.description}
        actions={<CopyButton text={artifacts.sdkScaffold.commands.join("\n")} />}
      >
        <pre className="code">{artifacts.sdkScaffold.commands.join("\n")}</pre>
      </Card>

      <Card title="Now Assist hook" subtitle={artifacts.nowAssistHook.surface}>
        <p className="text-sm text-[var(--color-fg-muted)]">{artifacts.nowAssistHook.rationale}</p>
      </Card>

      <Card title="Save to gallery" subtitle="Anonymous, no account needed (mock)">
        <p className="text-sm text-[var(--color-fg-muted)] mb-3">
          Pin this draft to a public gallery so other builders can riff on it. The real submission
          flow lands in M5 along with auth + audit viewer.
        </p>
        <button type="button" className="btn">
          Save to gallery
        </button>
      </Card>
    </div>
  );
}

function Card({
  title,
  subtitle,
  actions,
  children,
}: {
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="surface p-5 fade-in">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <h4 className="text-sm font-medium">{title}</h4>
          {subtitle ? <p className="text-xs text-[var(--color-fg-muted)]">{subtitle}</p> : null}
        </div>
        {actions}
      </div>
      {children}
    </div>
  );
}
