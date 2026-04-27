import { AgentCard } from "@/components/AgentCard";
import { loadAgents } from "@/lib/catalog";
import { AgentGroups } from "@/types/agent";

export const dynamic = "force-static";

export const metadata = {
  title: "Agents — ServiceNow Agent Army",
  description: "The 19 advisors that make up the council, grouped by function.",
};

export default async function AgentsPage() {
  const agents = await loadAgents();
  const byId = new Map(agents.map((a) => [a.id, a]));

  return (
    <section className="shell py-12 md:py-16">
      <header className="mb-10 max-w-2xl">
        <span className="tag">19 advisors · 6 groups</span>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">The Agent Army</h1>
        <p className="mt-3 text-[var(--color-fg-muted)] leading-relaxed">
          Each advisor has a role, a mission, a set of outputs, and a guardrail bound to its
          mission. Pick the group that matches your problem; the home page deliberation runs the
          council end-to-end.
        </p>
      </header>

      <div className="flex flex-col gap-12">
        {AgentGroups.map((group) => {
          const groupAgents = group.members
            .map((id) => byId.get(id))
            .filter((a): a is NonNullable<typeof a> => Boolean(a));
          if (groupAgents.length === 0) return null;
          return (
            <section key={group.id}>
              <header className="flex items-baseline justify-between mb-4">
                <h2 className="text-lg font-medium">{group.label}</h2>
                <span className="text-xs text-[var(--color-fg-muted)]">
                  {groupAgents.length} advisor{groupAgents.length === 1 ? "" : "s"}
                </span>
              </header>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {groupAgents.map((agent) => (
                  <AgentCard key={agent.id} agent={agent} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
}
