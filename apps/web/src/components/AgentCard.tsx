import type { Agent } from "@/types/agent";

export function AgentCard({ agent }: { agent: Agent }) {
  return (
    <article className="surface p-4 flex flex-col gap-2.5 h-full">
      <header className="flex items-center justify-between gap-2">
        <h3 className="text-sm font-semibold leading-tight">{agent.name}</h3>
        <span className="tag">{agent.id}</span>
      </header>
      <p className="text-xs text-[var(--color-fg-muted)] leading-relaxed">{agent.role}</p>
      <p className="text-xs leading-relaxed">{agent.mission}</p>
      <div className="mt-auto flex flex-wrap gap-1 pt-2">
        {agent.outputs.slice(0, 3).map((o) => (
          <span key={o} className="tag">
            {o}
          </span>
        ))}
      </div>
    </article>
  );
}
