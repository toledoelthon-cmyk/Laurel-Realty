import { Button } from "@/components/ui/Button";
import { brand, whatsappHref } from "@/lib/constants";
import { cn } from "@/lib/utils";

type CTASectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  className?: string;
};

export function CTASection({
  eyebrow = "Asesoría inicial gratuita",
  title = "Conversemos sobre el siguiente paso para tu propiedad.",
  description = "Laurel Realty ofrece una atención digital y con cita previa para revisar objetivos, tiempos y alternativas con claridad.",
  primaryLabel = "Hablar por WhatsApp",
  primaryHref = whatsappHref,
  secondaryLabel = "Enviar formulario",
  secondaryHref = "/contacto",
  className
}: CTASectionProps) {
  const primaryIsExternal = primaryHref.startsWith("http");
  const secondaryIsExternal = secondaryHref.startsWith("http");

  return (
    <section className={cn("premium-section-compact", className)}>
      <div className="site-shell">
        <div className="overflow-hidden rounded-soft border border-gold/25 bg-laurel p-8 text-ivory shadow-soft sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase text-gold">{eyebrow}</p>
              <h2 className="mt-3 text-3xl leading-tight text-ivory sm:text-4xl">
                {title}
              </h2>
              <p className="mt-4 text-sm text-ivory/74 sm:text-base">
                {description}
              </p>
              <p className="mt-4 text-sm text-ivory/60">{brand.attention}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button external={primaryIsExternal} href={primaryHref} variant="secondary">
                {primaryLabel}
              </Button>
              <Button
                className="border-ivory/35 !text-ivory hover:bg-ivory/10"
                external={secondaryIsExternal}
                href={secondaryHref}
                variant="outline"
              >
                {secondaryLabel}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
