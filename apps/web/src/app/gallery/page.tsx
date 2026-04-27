import { GalleryCard } from "@/components/GalleryCard";
import { loadGallery } from "@/lib/catalog";
import Link from "next/link";

export const dynamic = "force-static";

export const metadata = {
  title: "Gallery — ServiceNow Agent Army",
  description: "Saved deliberations from the council, anonymized.",
};

export default async function GalleryPage() {
  const items = await loadGallery();

  if (items.length === 0) {
    return (
      <section className="shell py-16">
        <header className="mb-8 max-w-2xl">
          <span className="tag">Coming soon</span>
          <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">Gallery</h1>
          <p className="mt-3 text-[var(--color-fg-muted)] leading-relaxed">
            Saved council deliberations land here. Once a builder pins a deliberation as a shareable
            example, it shows up below with the full artifact set: agent spec, workflow, skill
            prompt, SDK scaffold, and the Now Assist surface chosen.
          </p>
        </header>
        <div className="surface p-8 text-sm text-[var(--color-fg-muted)] flex flex-col gap-3">
          <p>Empty for now. Try the home page deliberation and come back.</p>
          <Link href="/" className="btn w-fit">
            Run a deliberation
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="shell py-12 md:py-16">
      <header className="mb-8 max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Gallery</h1>
        <p className="mt-3 text-[var(--color-fg-muted)]">
          Saved deliberations the community pinned as reference examples.
        </p>
      </header>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <GalleryCard key={item.slug} item={item} />
        ))}
      </div>
    </section>
  );
}
