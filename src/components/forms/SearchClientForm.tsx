"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Field, SelectField, TextareaField } from "./FormControls";

export function SearchClientForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="surface-panel grid gap-5 p-6 sm:p-8"
      data-form="search-client"
      method="post"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <input name="source" type="hidden" value="laurel-realty-search-client" />
      {submitted ? (
        <div
          className="rounded-soft border border-gold/30 bg-gold/10 px-4 py-3 text-sm font-semibold text-laurel"
          role="status"
        >
          Gracias. Recibimos tu búsqueda y te contactaremos cuando tengamos
          opciones que puedan ajustarse a lo que necesitas.
        </div>
      ) : null}
      <div className="grid gap-5 md:grid-cols-2">
        <Field
          autoComplete="name"
          label="Nombre completo"
          name="fullName"
          placeholder="Tu nombre"
          required
        />
        <Field
          autoComplete="tel"
          label="WhatsApp"
          name="phone"
          placeholder="+52"
          required
          type="tel"
        />
        <Field
          autoComplete="email"
          label="Correo electrónico"
          name="email"
          placeholder="tu@correo.com"
          type="email"
        />
        <SelectField
          label="Operación"
          name="operation"
          options={[
            { label: "Rentar", value: "rent" },
            { label: "Comprar", value: "buy" },
            { label: "No estoy seguro", value: "not-sure" }
          ]}
          required
        />
        <SelectField
          label="Tipo de propiedad"
          name="propertyType"
          options={[
            { label: "Casa", value: "house" },
            { label: "Apartamento", value: "apartment" },
            { label: "Local", value: "commercial" },
            { label: "Terreno", value: "land" },
            { label: "Oficina", value: "office" },
            { label: "Otro", value: "other" }
          ]}
          required
        />
        <SelectField
          label="Zona deseada"
          name="preferredZone"
          options={[
            { label: "Cancún", value: "cancun" },
            { label: "Playa del Carmen", value: "playa-del-carmen" },
            { label: "Riviera Maya", value: "riviera-maya" },
            { label: "Otra", value: "other" }
          ]}
        />
        <Field
          label="Presupuesto aproximado"
          name="budget"
          placeholder="Rango ideal"
        />
        <Field
          label="Número de habitaciones deseadas"
          name="bedrooms"
          placeholder="Ej. 2"
          type="number"
          min={0}
        />
        <Field
          label="Fecha aproximada en la que necesitas mudarte o comprar"
          name="targetDate"
          type="date"
        />
        <SelectField
          label="¿Tienes mascotas?"
          name="pets"
          options={[
            { label: "Sí", value: "yes" },
            { label: "No", value: "no" },
            { label: "No aplica", value: "not-applicable" }
          ]}
        />
        <TextareaField
          label="Comentarios adicionales"
          name="message"
          placeholder="Amenidades, uso, prioridades, dudas o detalles importantes para tu búsqueda."
        />
      </div>
      <label className="flex gap-3 text-xs leading-relaxed text-deepBlue/65">
        <input className="mt-1 h-4 w-4 rounded border-laurel/20 accent-laurel" name="privacy" required type="checkbox" />
        Acepto ser contactado por Laurel Realty para recibir asesoría sobre mi
        búsqueda inmobiliaria.
      </label>
      <Button className="w-full sm:w-auto" type="submit">
        Enviar mi búsqueda
      </Button>
    </form>
  );
}
