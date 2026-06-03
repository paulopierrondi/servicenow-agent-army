import Link from "next/link";

const NAV_LINKS: { href: string; label: string }[] = [
  { href: "/agents", label: "Agents" },
  { href: "/gallery", label: "Gallery" },
  { href: "https://github.com/paulopierrondi/servicenow-agent-army", label: "GitHub" },
];

export function Nav() {
  const authConfigured = Boolean(process.env.GITHUB_ID && process.env.GITHUB_SECRET);

  return (
    <header className="border-b border-[var(--color-border)] bg-[var(--color-bg)]/90 backdrop-blur sticky top-0 z-30">
      <div className="shell flex items-center justify-between h-14">
        <Link href="/" className="now-mark text-[15px]">
          <span className="dot" aria-hidden="true" />
          <span>servicenow agent army</span>
          <span className="tag ml-2">v0.1</span>
        </Link>
        <nav className="flex items-center gap-1 text-[13px] text-[var(--color-fg-muted)]">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="btn btn-ghost">
              {link.label}
            </Link>
          ))}
          {authConfigured ? (
            <Link href="/api/auth/signin" className="btn ml-2">
              Sign in
            </Link>
          ) : null}
        </nav>
      </div>
    </header>
  );
}
