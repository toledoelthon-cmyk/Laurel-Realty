import { Building2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { whatsappHref } from "@/lib/constants";

type EmptyCatalogCTAProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
};

export function EmptyCatalogCTA({
  eyebrow = "Catálogo en preparación",
  title = "Estamos preparando una selección cuidada de propiedades.",
  description = "Estamos incorporando nuevas propiedades en Cancún y Riviera Maya. Mientras tanto, puedes registrar tu búsqueda o publicar tu propiedad con Laurel Realty."
}: EmptyCatalogCTAProps) {
  return (
    <section className="premium-section-compact">
      <div className="site-shell">
        <div className="surface-panel p-8 text-center sm:p-12">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/35 bg-ivory text-gold">
            <Building2 aria-hidden size={24} />
          </div>
          <p className="eyebrow mt-6">{eyebrow}</p>
          <h2 className="mx-auto mt-3 max-w-3xl text-3xl leading-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm text-deepBlue/70 sm:text-base">
            {description}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button external href={whatsappHref}>
              Hablar por WhatsApp
            </Button>
            <Button href="/propietarios" variant="outline">
              Publicar mi propiedad
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
