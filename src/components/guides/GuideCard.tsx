import { ArrowUpRight, Clock } from "lucide-react";
import Link from "next/link";

type GuideCardProps = {
  category: string;
  title: string;
  summary: string;
  readTime: string;
  href: string;
};

export function GuideCard({
  category,
  title,
  summary,
  readTime,
  href
}: GuideCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-soft border border-laurel/10 bg-white/70 p-6 shadow-line transition hover:-translate-y-0.5 hover:border-gold/50 hover:shadow-soft">
      <p className="text-xs font-semibold uppercase text-gold">{category}</p>
      <h2 className="mt-4 text-2xl leading-tight">{title}</h2>
      <p className="mt-3 flex-1 text-sm text-deepBlue/70">{summary}</p>
      <div className="mt-6 flex items-center justify-between gap-4 border-t border-gold/15 pt-4">
        <span className="inline-flex items-center gap-2 text-xs font-semibold text-deepBlue/58">
          <Clock aria-hidden size={15} />
          {readTime}
        </span>
        <Link
          className="inline-flex items-center gap-2 text-sm font-semibold text-laurel transition group-hover:text-gold-700"
          href={href}
        >
          Leer guía <ArrowUpRight aria-hidden size={16} />
        </Link>
      </div>
    </article>
  );
}
