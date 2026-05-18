import { Field, SelectField } from "@/components/forms/FormControls";

export function PropertyFilters() {
  return (
    <form className="surface-panel grid gap-5 p-5 sm:grid-cols-2 lg:grid-cols-5">
      <SelectField
        label="Venta o renta"
        name="operation"
        options={[
          { label: "Venta", value: "venta" },
          { label: "Renta", value: "renta" }
        ]}
      />
      <SelectField
        label="Tipo de propiedad"
        name="propertyType"
        options={[
          { label: "Casa", value: "casa" },
          { label: "Apartamento", value: "apartamento" },
          { label: "Terreno", value: "terreno" },
          { label: "Local", value: "local" },
          { label: "Oficina", value: "oficina" }
        ]}
      />
      <SelectField
        label="Ubicación"
        name="location"
        options={[
          { label: "Cancún", value: "cancun" },
          { label: "Playa del Carmen", value: "playa-del-carmen" },
          { label: "Riviera Maya", value: "riviera-maya" },
          { label: "Otra", value: "otra" }
        ]}
      />
      <Field label="Rango de precio" name="priceRange" placeholder="Ej. $20,000 - $35,000" />
      <Field label="Habitaciones" min={0} name="bedrooms" placeholder="Ej. 2" type="number" />
    </form>
  );
}
