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
      className="surface surface-hover p-4 flex flex-col gap-2.5 transition-colors"
    >
      <span className="tag w-fit">
        <span className="tag-dot tag-dot--now" />
        {item.domain.toUpperCase()}
      </span>
      <h3 className="text-[14.5px] font-bold tracking-tight leading-snug">{item.title}</h3>
      <p className="text-[12.5px] text-[var(--color-fg-muted)] leading-relaxed">{item.summary}</p>
    </Link>
  );
}
