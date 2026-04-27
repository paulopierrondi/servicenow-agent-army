export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] mt-24">
      <div className="shell py-8 flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-xs text-[var(--color-fg-muted)]">
        <span>
          MIT licensed. Not affiliated with ServiceNow, OpenAI, or Anthropic. Brand and product
          names belong to their respective owners.
        </span>
        <span>
          Built by{" "}
          <a
            className="underline hover:text-[var(--color-fg)]"
            href="https://www.linkedin.com/in/paulopierrondi/"
            target="_blank"
            rel="noreferrer"
          >
            Paulo Pierrondi
          </a>
        </span>
      </div>
    </footer>
  );
}
