import type { PropertyCatalogFilters } from "@/components/catalog/PropertyCatalog";
import { Button } from "@/components/ui/Button";
import { SelectField } from "@/components/forms/FormControls";

type PropertyFiltersProps = {
  filters: PropertyCatalogFilters;
  onChange: (filters: PropertyCatalogFilters) => void;
  onClear: () => void;
  resultCount: number;
};

export function PropertyFilters({
  filters,
  onChange,
  onClear,
  resultCount
}: PropertyFiltersProps) {
  function updateFilter(name: keyof PropertyCatalogFilters, value: string) {
    onChange({
      ...filters,
      [name]: value
    });
  }

  return (
    <form className="surface-panel grid gap-5 p-5 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto]">
      <SelectField
        label="Venta o renta"
        name="operation"
        onChange={(event) => updateFilter("operation", event.target.value)}
        options={[
          { label: "Venta", value: "venta" },
          { label: "Renta", value: "renta" }
        ]}
        value={filters.operation}
      />
      <SelectField
        label="Tipo de propiedad"
        name="propertyType"
        onChange={(event) => updateFilter("propertyType", event.target.value)}
        options={[
          { label: "Casa", value: "casa" },
          { label: "Departamento", value: "departamento" },
          { label: "Terreno", value: "terreno" },
          { label: "Local", value: "local" },
          { label: "Oficina", value: "oficina" },
          { label: "Villa", value: "villa" },
          { label: "Penthouse", value: "penthouse" }
        ]}
        value={filters.propertyType}
      />
      <SelectField
        label="Zona"
        name="zone"
        onChange={(event) => updateFilter("zone", event.target.value)}
        options={[
          { label: "Cancún", value: "Cancún" },
          { label: "Playa del Carmen", value: "Playa del Carmen" },
          { label: "Puerto Morelos", value: "Puerto Morelos" },
          { label: "Tulum", value: "Tulum" },
          { label: "Riviera Maya", value: "Riviera Maya" }
        ]}
        value={filters.zone}
      />
      <div className="flex flex-col justify-end gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-deepBlue/50">
          {resultCount} resultado{resultCount === 1 ? "" : "s"}
        </p>
        <Button
          className="w-full"
          onClick={onClear}
          type="button"
          variant="outline"
        >
          Limpiar filtros
        </Button>
      </div>
    </form>
  );
}
