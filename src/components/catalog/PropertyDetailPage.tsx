import {
  Bath,
  BedDouble,
  Car,
  CheckCircle2,
  MapPin,
  MessageCircle,
  Ruler
} from "lucide-react";
import { PropertyInterestForm } from "@/components/forms/PropertyInterestForm";
import { Button } from "@/components/ui/Button";
import {
  formatPropertyLabel,
  formatPropertyPrice,
  type Property
} from "@/data/properties";

type PropertyDetailPageProps = {
  property: Property;
};

export function PropertyDetailPage({ property }: PropertyDetailPageProps) {
  const whatsappHref = `https://wa.me/529984032240?text=${encodeURIComponent(
    `Hola, quiero información sobre la propiedad: ${property.title}`
  )}`;

  return (
    <>
      <section className="premium-section bg-ivory">
        <div className="site-shell">
          <p className="eyebrow">Detalle de propiedad</p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <h1 className="text-4xl leading-tight sm:text-5xl">
                {property.title}
              </h1>
              <p className="mt-4 flex items-center gap-2 text-sm text-deepBlue/70">
                <MapPin aria-hidden size={17} />
                {property.addressApproximate || `${property.zone}, ${property.city}`}
              </p>
            </div>
            <div className="rounded-soft border border-gold/20 bg-white/70 p-6 shadow-line">
              <p className="text-xs font-semibold uppercase text-gold">
                {formatPropertyLabel(property.operation)} ·{" "}
                {formatPropertyLabel(property.propertyType)}
              </p>
              <p className="mt-2 font-display text-4xl font-semibold text-laurel">
                {formatPropertyPrice(property)}
              </p>
              <Button className="mt-6 w-full" external href={whatsappHref}>
                <MessageCircle aria-hidden size={18} />
                Pedir información por WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="premium-section-compact">
        <div className="site-shell">
          {property.images.length ? (
            <div className="grid gap-4 md:grid-cols-3">
              {property.images.map((image) => (
                <img
                  alt={image.alt}
                  className="aspect-[4/3] w-full rounded-soft object-cover"
                  key={image.src}
                  src={image.src}
                />
              ))}
            </div>
          ) : (
            <div className="flex min-h-80 items-center justify-center rounded-soft border border-gold/20 bg-laurel text-center text-ivory">
              <p className="max-w-md px-6 text-sm text-ivory/70">
                Galería preparada para fotografías reales de esta propiedad.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="premium-section bg-white/45">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <h2 className="text-3xl leading-tight">Características</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <DetailStat icon={<BedDouble aria-hidden size={18} />} label="Habitaciones" value={property.bedrooms ?? "N/D"} />
              <DetailStat icon={<Bath aria-hidden size={18} />} label="Baños" value={property.bathrooms ?? "N/D"} />
              <DetailStat icon={<Car aria-hidden size={18} />} label="Estacionamientos" value={property.parkingSpaces ?? "N/D"} />
              <DetailStat icon={<Ruler aria-hidden size={18} />} label="Área" value={property.area ? `${property.area} m²` : "N/D"} />
            </div>
          </div>
          <div className="surface-panel p-6 sm:p-8">
            <h2 className="text-3xl leading-tight">Descripción</h2>
            <p className="mt-5 text-sm text-deepBlue/72 sm:text-base">
              {property.description}
            </p>
            {property.features.length ? (
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {property.features.map((feature) => (
                  <li className="flex items-start gap-3 text-sm text-deepBlue/74" key={feature}>
                    <CheckCircle2
                      aria-hidden
                      className="mt-0.5 h-5 w-5 shrink-0 text-gold"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </section>

      <section className="premium-section" id="interes">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="eyebrow">Interés en la propiedad</p>
            <h2 className="mt-3 text-3xl leading-tight">
              Solicita más información
            </h2>
            <p className="mt-4 text-sm text-deepBlue/72 sm:text-base">
              Comparte tus datos y Laurel Realty podrá orientarte sobre esta
              propiedad.
            </p>
          </div>
          <PropertyInterestForm propertyTitle={property.title} />
        </div>
      </section>
    </>
  );
}

type DetailStatProps = {
  icon: React.ReactNode;
  label: string;
  value: string | number;
};

function DetailStat({ icon, label, value }: DetailStatProps) {
  return (
    <div className="rounded-soft border border-laurel/10 bg-white/70 p-4 shadow-line">
      <div className="flex items-center gap-2 text-gold">{icon}</div>
      <p className="mt-3 text-xs font-semibold uppercase text-deepBlue/50">
        {label}
      </p>
      <p className="mt-1 text-lg font-semibold text-laurel">{value}</p>
    </div>
  );
}
