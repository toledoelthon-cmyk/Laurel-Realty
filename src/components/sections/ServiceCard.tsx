import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  title: string;
  description: string;
  icon?: ReactNode;
  href?: string;
  ctaLabel?: string;
  className?: string;
};

export function ServiceCard({
  title,
  description,
  icon,
  href,
  ctaLabel = "Conocer más",
  className
}: ServiceCardProps) {
  const content = (
    <>
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/35 bg-ivory text-gold">
        {icon ?? <ArrowUpRight aria-hidden size={20} />}
      </div>
      <h3 className="mt-6 text-2xl leading-tight">{title}</h3>
      <p className="mt-3 text-sm text-deepBlue/70">{description}</p>
      {href ? (
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-laurel">
          {ctaLabel} <ArrowUpRight aria-hidden size={16} />
        </span>
      ) : null}
    </>
  );

  if (href) {
    return (
      <Link
        className={cn(
          "group block rounded-soft border border-laurel/10 bg-white/70 p-6 shadow-line transition hover:-translate-y-0.5 hover:border-gold/50 hover:shadow-soft",
          className
        )}
        href={href}
      >
        {content}
      </Link>
    );
  }

  return (
    <article
      className={cn(
        "rounded-soft border border-laurel/10 bg-white/70 p-6 shadow-line",
        className
      )}
    >
      {content}
    </article>
  );
}
