import { EmptyCatalogCTA } from "@/components/catalog/EmptyCatalogCTA";
import { PropertyCard } from "@/components/catalog/PropertyCard";
import type { Property } from "@/data/properties";

type PropertyGridProps = {
  properties: Property[];
};

export function PropertyGrid({ properties }: PropertyGridProps) {
  if (properties.length === 0) {
    return (
      <EmptyCatalogCTA
        eyebrow="Sin inventario público por ahora"
        title="Estamos incorporando nuevas propiedades en Cancún y Riviera Maya"
        description="Mientras tanto, puedes registrar tu búsqueda o publicar tu propiedad con Laurel Realty."
      />
    );
  }

  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {properties.map((property) => (
        <PropertyCard key={property.slug} property={property} />
      ))}
    </div>
  );
}
