import { Bath, BedDouble, MapPin, MessageCircle, Ruler } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
  formatPropertyLabel,
  formatPropertyPrice,
  formatPropertyBathrooms,
  getPropertyWhatsappHref,
  type Property
} from "@/data/properties";
import { getPropertyImageAlt } from "@/lib/seo";
import { urlForPropertyImage } from "@/sanity/lib/image";

type PropertyCardProps = {
  property: Property;
};

export function PropertyCard({ property }: PropertyCardProps) {
  const image = property.images[0];
  const whatsappHref = getPropertyWhatsappHref(property);
  const imageSrc = image
    ? urlForPropertyImage(image, { width: 900, height: 675 })
    : "";

  return (
    <article className="overflow-hidden rounded-soft border border-laurel/10 bg-white/70 shadow-line transition hover:-translate-y-0.5 hover:border-gold/50 hover:shadow-soft">
      {image ? (
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            alt={getPropertyImageAlt(property)}
            className="object-cover"
            fill
            priority={property.featured}
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            src={imageSrc}
          />
        </div>
      ) : (
        <div className="flex aspect-[4/3] items-center justify-center bg-laurel text-center text-ivory">
          <span className="px-6 text-sm text-ivory/70">
            Imagen real pendiente de integración
          </span>
        </div>
      )}
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
        <div className="mt-5 grid grid-cols-3 gap-3 border-t border-gold/15 pt-4 text-xs font-semibold text-deepBlue/62">
          <span className="inline-flex items-center gap-1.5">
            <BedDouble aria-hidden size={15} />
            {property.bedrooms ?? "N/D"}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Bath aria-hidden size={15} />
            {formatPropertyBathrooms(property)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Ruler aria-hidden size={15} />
            {property.constructionSize
              ? `${property.constructionSize} m²`
              : "N/D"}
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
            Ver detalle
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
