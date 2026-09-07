import { Bath, BedDouble, MapPin, MessageCircle, Ruler } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
  formatPropertyBathrooms,
  formatPropertyLabel,
  formatPropertyPrice,
  getPropertyWhatsappHref,
  type Property
} from "@/data/properties";
import { getPropertyImageAlt } from "@/lib/seo";
import { urlForPropertyImage } from "@/sanity/lib/image";

type PropertyCardProps = {
  property: Property;
};

const fallbackImage = "/images/placeholders/property-fallback-premium.webp";

function getPropertyBadge(property: Property) {
  if (property.featured) {
    return "Destacada";
  }

  if (property.createdAt) {
    const createdAt = new Date(property.createdAt).getTime();
    const thirtyDaysAgo = Date.now() - 1000 * 60 * 60 * 24 * 30;

    if (createdAt >= thirtyDaysAgo) {
      return "Nueva";
    }
  }

  return property.operation === "venta" ? "Oportunidad" : "Disponible";
}

function getAreaLabel(property: Property) {
  const area = property.constructionSize || property.landSize;
  return area ? `${area} m²` : "Consultar medidas";
}

function getBedroomLabel(property: Property) {
  if (property.propertyType === "terreno") {
    return "Terreno";
  }

  return property.bedrooms && property.bedrooms > 0 ? `${property.bedrooms}` : "N/D";
}

function getBathroomLabel(property: Property) {
  if (property.propertyType === "terreno") {
    return "Consultar";
  }

  if (property.bathrooms === 0 && !property.bathroomsText) {
    return "N/D";
  }

  return formatPropertyBathrooms(property);
}

export function PropertyCard({ property }: PropertyCardProps) {
  const image = property.images[0];
  const whatsappHref = getPropertyWhatsappHref(property);
  const imageSrc = image
    ? urlForPropertyImage(image, { width: 900, height: 675 })
    : fallbackImage;
  const imageAlt = image
    ? getPropertyImageAlt(property)
    : `Imagen de apoyo visual para ${property.title} en ${property.zone} Laurel Realty`;
  const badge = getPropertyBadge(property);

  return (
    <article className="overflow-hidden rounded-soft border border-laurel/10 bg-white/70 shadow-line transition hover:-translate-y-0.5 hover:border-gold/50 hover:shadow-soft">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-laurel">
        <Image
          alt={imageAlt}
          className="object-cover transition duration-500 hover:scale-[1.03]"
          fill
          priority={property.featured}
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          src={imageSrc}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-laurel/45 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-gold/45 bg-laurel/88 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-gold shadow-line backdrop-blur">
          {badge}
        </span>
        {!image ? (
          <span className="absolute bottom-4 left-4 right-4 text-xs font-medium text-ivory/80">
            Imagen de apoyo visual
          </span>
        ) : null}
      </div>
      <div className="p-6">
        <p className="text-xs font-semibold uppercase text-gold">
          {formatPropertyLabel(property.operation)} ·{" "}
          {formatPropertyLabel(property.propertyType)}
        </p>
        <h2 className="mt-3 text-2xl leading-tight">{property.title}</h2>
        <p className="mt-3 flex items-center gap-2 text-sm text-deepBlue/65">
          <MapPin aria-hidden size={16} />
          {property.zone}
        </p>
        <div className="mt-5 grid grid-cols-3 gap-3 border-t border-gold/15 pt-4 text-xs font-semibold leading-snug text-deepBlue/62">
          <span className="min-w-0 inline-flex items-center gap-1.5">
            <BedDouble aria-hidden className="shrink-0" size={15} />
            <span className="min-w-0 break-words">{getBedroomLabel(property)}</span>
          </span>
          <span className="min-w-0 inline-flex items-center gap-1.5">
            <Bath aria-hidden className="shrink-0" size={15} />
            <span className="min-w-0 break-words">{getBathroomLabel(property)}</span>
          </span>
          <span className="min-w-0 inline-flex items-center gap-1.5">
            <Ruler aria-hidden className="shrink-0" size={15} />
            <span className="min-w-0 break-words">{getAreaLabel(property)}</span>
          </span>
        </div>
        <div className="mt-5 flex items-center justify-between gap-4 border-t border-gold/15 pt-4">
          <span className="text-sm font-semibold text-laurel">
            {formatPropertyPrice(property)}
          </span>
          <Link
            className="text-sm font-semibold text-laurel transition hover:text-gold-700"
            href={`/propiedades/${property.slug}`}
          >
            Ver propiedad
          </Link>
        </div>
        <Button
          className="mt-4 w-full"
          external
          href={whatsappHref}
          size="sm"
          variant="outline"
        >
          <MessageCircle aria-hidden size={16} />
          WhatsApp
        </Button>
      </div>
    </article>
  );
}
