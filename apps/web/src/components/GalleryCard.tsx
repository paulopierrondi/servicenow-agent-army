import Link from "next/link";

export type GalleryCardProps = {
  slug: string;
  title: string;
  domain: string;
  summary: string;
};

export function GalleryCard({ item }: { item: GalleryCardProps }) {
  return (
    <Link
      href={`/gallery/${item.slug}`}
      className="surface p-5 flex flex-col gap-3 hover:border-[var(--color-fg-muted)] transition-colors"
    >
      <span className="tag w-fit">{item.domain.toUpperCase()}</span>
      <h3 className="text-sm font-semibold">{item.title}</h3>
      <p className="text-xs text-[var(--color-fg-muted)] leading-relaxed">{item.summary}</p>
    </Link>
  );
}
