import { HeroInput } from "@/components/HeroInput";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="shell pt-14 pb-10 md:pt-20 md:pb-14">
        <span className="tag">
          <span className="tag-dot tag-dot--now" />
          v0.1 alpha · mock mode
        </span>
        <h1 className="mt-5 text-4xl md:text-[54px] font-black leading-[1.05] tracking-tight max-w-3xl">
          ServiceNow architecture,<br />
          <span className="text-[var(--color-fg-muted)] font-bold">without the deck theater.</span>
        </h1>
        <p className="mt-5 text-[17px] text-[var(--color-fg-muted)] max-w-2xl leading-relaxed">
          Twenty advisors deliberate every problem. Pierrondi EA leads, refuses architecture before
          a value figure is on the table, then hands off the council. Outputs land paste-ready for
          AI Agent Studio, NASK, and the ServiceNow SDK.
        </p>
        <div className="mt-7 flex flex-wrap gap-3 items-center">
          <a href="#try" className="btn btn-primary">
            Run the council
          </a>
          <Link
            href="https://github.com/paulopierrondi/servicenow-agent-army/blob/main/README.md#honest-architecture"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Read the Honest Architecture
          </Link>
        </div>
        <FactsRow />
      </section>

      <div id="try" />
      <HeroInput />
    </>
  );
}

function FactsRow() {
  const facts: { label: string; value: string }[] = [
    { label: "Advisors", value: "20 (Pierrondi EA leads)" },
    { label: "Knowledge docs", value: "7 grounded sources" },
    { label: "MCP servers", value: "Read · write-with-guardrails" },
    { label: "Default surface", value: "AI Agent Studio · NASK · Fluent SDK 4.6" },
  ];

  return (
    <dl className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3">
      {facts.map((fact) => (
        <div key={fact.label} className="surface surface-hover p-4">
          <dt className="section-label">{fact.label}</dt>
          <dd className="mt-2 text-[14px] font-bold leading-tight">{fact.value}</dd>
        </div>
      ))}
    </dl>
  );
}
