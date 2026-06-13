"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Field, SelectField, TextareaField } from "./FormControls";
import {
  FormStatus,
  getFormValue,
  openWhatsAppMessage,
  optionalValue,
  validateNameAndPhone
} from "./whatsapp";

export function SearchClientForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  return (
    <form
      className="surface-panel grid gap-5 p-6 sm:p-8"
      data-form="search-client"
      method="post"
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const validationError = validateNameAndPhone(formData);

        if (validationError) {
          setSubmitted(false);
          setError(validationError);
          return;
        }

        openWhatsAppMessage([
          "Hola, estoy buscando una propiedad con Laurel Realty.",
          "",
          `Nombre: ${getFormValue(formData, "fullName")}`,
          `WhatsApp: ${getFormValue(formData, "phone")}`,
          `Correo: ${optionalValue(getFormValue(formData, "email"))}`,
          `Compra o renta: ${getFormValue(formData, "operation")}`,
          `Tipo de propiedad: ${getFormValue(formData, "propertyType")}`,
          `Zona deseada: ${optionalValue(getFormValue(formData, "preferredZone"))}`,
          `Presupuesto: ${optionalValue(getFormValue(formData, "budget"))}`,
          `Recámaras: ${optionalValue(getFormValue(formData, "bedrooms"))}`,
          `Comentarios: ${optionalValue(getFormValue(formData, "message"))}`
        ]);

        setError("");
        setSubmitted(true);
      }}
    >
      <input name="source" type="hidden" value="laurel-realty-search-client" />
      <FormStatus error={error} submitted={submitted} />
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
