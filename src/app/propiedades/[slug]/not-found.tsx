import { Building2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { whatsappHref } from "@/lib/constants";

export default function PropertyNotFound() {
  return (
    <section className="premium-section">
      <div className="site-shell">
        <div className="surface-panel mx-auto max-w-3xl p-8 text-center sm:p-12">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/35 bg-ivory text-gold">
            <Building2 aria-hidden size={24} />
          </div>
          <p className="eyebrow mt-6">Propiedad no disponible</p>
          <h1 className="mt-3 text-4xl leading-tight">
            No encontramos esta propiedad.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-sm text-deepBlue/70 sm:text-base">
            Es posible que todavía no haya sido publicada o que el enlace ya no
            esté disponible.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/propiedades">Ver próximas propiedades</Button>
            <Button external href={whatsappHref} variant="outline">
              Hablar por WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
