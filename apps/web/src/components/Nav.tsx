import Link from "next/link";

const NAV_LINKS: { href: string; label: string }[] = [
  { href: "/agents", label: "Agents" },
  { href: "/gallery", label: "Gallery" },
  { href: "https://github.com/paulopierrondi/servicenow-agent-army", label: "GitHub" },
];

export function Nav() {
  const authConfigured = Boolean(process.env.GITHUB_ID && process.env.GITHUB_SECRET);

  return (
    <header className="border-b border-[var(--color-border)] bg-[var(--color-bg)]/85 backdrop-blur sticky top-0 z-30">
      <div className="shell flex items-center justify-between h-14">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span
            aria-hidden="true"
            className="inline-block w-2.5 h-2.5 rounded-full bg-[var(--color-accent)]"
          />
          ServiceNow Agent Army
        </Link>
        <nav className="flex items-center gap-5 text-sm text-[var(--color-fg-muted)]">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-[var(--color-fg)] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          {authConfigured ? (
            <Link href="/api/auth/signin" className="btn">
              Sign in
            </Link>
          ) : null}
        </nav>
      </div>
    </header>
  );
}
