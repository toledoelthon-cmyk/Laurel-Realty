"use client";

import { useMemo, useState } from "react";
import { PropertyFilters } from "@/components/catalog/PropertyFilters";
import { PropertyGrid } from "@/components/catalog/PropertyGrid";
import type { Property } from "@/data/properties";

type PropertyCatalogProps = {
  properties: Property[];
};

export type PropertyCatalogFilters = {
  operation: string;
  propertyType: string;
  zone: string;
};

const initialFilters: PropertyCatalogFilters = {
  operation: "",
  propertyType: "",
  zone: ""
};

export function PropertyCatalog({ properties }: PropertyCatalogProps) {
  const [filters, setFilters] = useState(initialFilters);

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const matchesOperation =
        !filters.operation || property.operation === filters.operation;
      const matchesType =
        !filters.propertyType || property.propertyType === filters.propertyType;
      const matchesZone = !filters.zone || property.zone === filters.zone;

      return matchesOperation && matchesType && matchesZone;
    });
  }, [filters, properties]);

  return (
    <>
      <PropertyFilters
        filters={filters}
        onChange={setFilters}
        onClear={() => setFilters(initialFilters)}
        resultCount={filteredProperties.length}
      />
      <div className="mt-10">
        <PropertyGrid properties={filteredProperties} />
      </div>
    </>
  );
}
