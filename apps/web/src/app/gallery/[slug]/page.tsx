import { loadGallery } from "@/lib/catalog";
import Link from "next/link";
import { notFound } from "next/navigation";

// Fully dynamic until catalog/gallery.json lands. Next 16's static-param
// collection chokes on empty arrays, so we prerender on-demand instead.
export const dynamic = "force-dynamic";

type Params = { slug: string };

export default async function GalleryItemPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const items = await loadGallery();
  const item = items.find((i) => i.slug === slug);
  if (!item) notFound();

  return (
    <section className="shell py-12 md:py-16">
      <Link
        href="/gallery"
        className="text-xs text-[var(--color-fg-muted)] hover:text-[var(--color-fg)]"
      >
        Back to gallery
      </Link>
      <header className="mt-4 mb-6 max-w-2xl">
        <span className="tag">{item.domain.toUpperCase()}</span>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">{item.title}</h1>
        <p className="mt-3 text-[var(--color-fg-muted)] leading-relaxed">{item.summary}</p>
      </header>
      <div className="surface p-5 mb-4">
        <h3 className="text-sm font-medium mb-2">Original problem</h3>
        <pre className="code">{item.problem}</pre>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {item.artifacts.map((a) => (
          <div key={a.type} className="surface p-5">
            <h3 className="text-sm font-medium mb-2">{a.type}</h3>
            <pre className="code">{a.preview}</pre>
          </div>
        ))}
      </div>
    </section>
  );
}
