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
        eyebrow="Sin resultados"
        title="No encontramos propiedades con esos filtros por ahora"
        description="Puedes ajustar tu búsqueda o contactarnos para recibir opciones personalizadas."
        primaryHref="/contacto"
        primaryLabel="Solicitar asesoría"
        secondaryHref="/busco-propiedad"
        secondaryLabel="Registrar mi búsqueda"
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
