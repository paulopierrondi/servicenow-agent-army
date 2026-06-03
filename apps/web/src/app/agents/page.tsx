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
        <span className="tag">
          <span className="tag-dot tag-dot--now" />
          19 advisors · 6 groups
        </span>
        <h1 className="mt-4 text-3xl md:text-[42px] font-black tracking-tight leading-[1.05]">
          The Agent Army
        </h1>
        <p className="mt-3 text-[15px] text-[var(--color-fg-muted)] leading-relaxed">
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
              <header className="flex items-baseline justify-between mb-3 pb-2 border-b border-[var(--color-border)]">
                <h2 className="text-[15px] font-medium tracking-tight">{group.label}</h2>
                <span className="section-label">
                  {groupAgents.length} advisor{groupAgents.length === 1 ? "" : "s"}
                </span>
              </header>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
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
