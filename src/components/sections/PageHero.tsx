import type { ReactNode } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type HeroCTA = {
  label: string;
  href: string;
  external?: boolean;
};

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryCTA?: HeroCTA;
  secondaryCTA?: HeroCTA;
  tertiaryCTA?: HeroCTA;
  trustItems?: string[];
  image?: string;
  imageAlt?: string;
  visual?: ReactNode;
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  tertiaryCTA,
  trustItems,
  image,
  imageAlt,
  visual,
  className
}: PageHeroProps) {
  const primaryIsExternal = primaryCTA?.external ?? primaryCTA?.href.startsWith("http");
  const secondaryIsExternal =
    secondaryCTA?.external ?? secondaryCTA?.href.startsWith("http");
  const tertiaryIsExternal =
    tertiaryCTA?.external ?? tertiaryCTA?.href.startsWith("http");

  return (
    <section className={cn("relative overflow-hidden bg-ivory", className)}>
      <div className="absolute inset-x-0 top-0 h-px bg-gold/30" />
      <div className="site-shell grid min-h-[560px] items-center gap-12 py-14 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
        <div className="max-w-3xl">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1 className="mt-5 text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-6 max-w-2xl text-base text-deepBlue/75 sm:text-lg">
              {subtitle}
            </p>
          ) : null}
          {(primaryCTA || secondaryCTA || tertiaryCTA) && (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {primaryCTA ? (
                <Button external={primaryIsExternal} href={primaryCTA.href} size="lg">
                  {primaryCTA.label}
                </Button>
              ) : null}
              {secondaryCTA ? (
                <Button
                  external={secondaryIsExternal}
                  href={secondaryCTA.href}
                  size="lg"
                  variant="outline"
                >
                  {secondaryCTA.label}
                </Button>
              ) : null}
              {tertiaryCTA ? (
                <Button
                  external={tertiaryIsExternal}
                  href={tertiaryCTA.href}
                  size="lg"
                  variant="ghost"
                >
                  {tertiaryCTA.label}
                </Button>
              ) : null}
            </div>
          )}
          {trustItems?.length ? (
            <ul className="mt-8 grid gap-3 text-sm text-deepBlue/72 sm:grid-cols-2">
              {trustItems.map((item) => (
                <li className="flex items-center gap-3" key={item}>
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <div className="relative">
          {visual ?? (
            <div className="surface-panel overflow-hidden p-3 lg:ml-auto lg:max-w-[520px]">
              {image ? (
                <div className="relative h-[360px] overflow-hidden rounded-[0.35rem] sm:h-[420px] lg:h-[460px]">
                  <Image
                    alt={imageAlt ?? "Imagen de apoyo visual de Laurel Realty"}
                    className="object-cover"
                    fill
                    priority
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    src={image}
                  />
                </div>
              ) : (
                <div className="relative h-[420px] overflow-hidden rounded-[0.35rem] bg-laurel sm:h-[480px] lg:h-[500px]">
                  <div className="absolute inset-6 border border-gold/35" />
                  <div className="absolute left-10 top-10 h-24 w-px bg-gold/35" />
                  <div className="absolute right-10 top-10 h-32 w-px bg-gold/25" />
                  <div className="absolute left-10 right-10 top-20 h-px bg-gold/25" />
                  <div className="absolute bottom-28 right-10 h-24 w-24 border border-gold/20" />
                  <div className="absolute bottom-8 left-8 right-8 border-t border-gold/40 pt-5">
                    <p className="font-display text-3xl text-ivory">
                      Cancún · Riviera Maya
                    </p>
                    <p className="mt-3 text-sm text-ivory/70">
                      Gestión inmobiliaria con presencia, orden y criterio.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
