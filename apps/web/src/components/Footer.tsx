export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] mt-16">
      <div className="shell py-6 flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-[12px] text-[var(--color-fg-muted)]">
        <span>
          MIT licensed. Not affiliated with ServiceNow, OpenAI, or Anthropic. Brand and product
          names belong to their respective owners.
        </span>
        <span className="flex items-center gap-2">
          <span className="tag-dot tag-dot--now" />
          Built by{" "}
          <a
            className="hover:text-[var(--color-fg)] transition-colors font-bold"
            href="https://www.linkedin.com/in/paulopierrondi/"
            target="_blank"
            rel="noreferrer"
          >
            Paulo Pierrondi
          </a>
          <span className="text-[var(--color-fg-subtle)]">·</span>
          <span>TAE FSI Brazil</span>
        </span>
      </div>
    </footer>
  );
}
