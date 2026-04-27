import { HeroInput } from "@/components/HeroInput";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="shell pt-16 pb-8 md:pt-24 md:pb-12">
        <span className="tag">v0.1 alpha — mock mode</span>
        <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] max-w-3xl">
          Outcome before output.
          <br />
          <span className="text-[var(--color-fg-muted)]">Twenty advisors. Pierrondi EA leads.</span>
        </h1>
        <p className="mt-5 text-lg text-[var(--color-fg-muted)] max-w-2xl leading-relaxed">
          Most ServiceNow advice is theater. Pierrondi EA refuses to draw architecture before the value question is answered. Outcome metric, value figure, deliverables, risks — every time. Then the council moves.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a href="#try" className="btn btn-primary">
            Try it
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
    { label: "Advisors in the council", value: "20 (Pierrondi EA leads)" },
    { label: "Knowledge docs", value: "7" },
    { label: "MCP servers", value: "2 (read + write-with-guardrails)" },
    { label: "Default platform target", value: "AI Agent Studio + NASK + Fluent SDK 4.6" },
  ];

  return (
    <dl className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
      {facts.map((fact) => (
        <div key={fact.label} className="surface p-4">
          <dt className="text-xs text-[var(--color-fg-muted)] uppercase tracking-wide">
            {fact.label}
          </dt>
          <dd className="mt-1.5 text-sm font-medium">{fact.value}</dd>
        </div>
      ))}
    </dl>
  );
}
