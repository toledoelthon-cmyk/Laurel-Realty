import { Bath, BedDouble, MapPin, Ruler } from "lucide-react";
import Link from "next/link";
import {
  formatPropertyLabel,
  formatPropertyPrice,
  type Property
} from "@/data/properties";

type PropertyCardProps = {
  property: Property;
};

export function PropertyCard({ property }: PropertyCardProps) {
  const image = property.images[0];

  return (
    <article className="overflow-hidden rounded-soft border border-laurel/10 bg-white/70 shadow-line transition hover:-translate-y-0.5 hover:border-gold/50 hover:shadow-soft">
      {image ? (
        <img
          alt={image.alt}
          className="aspect-[4/3] w-full object-cover"
          src={image.src}
        />
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
          {property.zone}, {property.city}
        </p>
        <div className="mt-5 grid grid-cols-3 gap-3 border-t border-gold/15 pt-4 text-xs font-semibold text-deepBlue/62">
          <span className="inline-flex items-center gap-1.5">
            <BedDouble aria-hidden size={15} />
            {property.bedrooms ?? "N/D"}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Bath aria-hidden size={15} />
            {property.bathrooms ?? "N/D"}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Ruler aria-hidden size={15} />
            {property.area ? `${property.area} m²` : "N/D"}
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
      </div>
    </article>
  );
}
