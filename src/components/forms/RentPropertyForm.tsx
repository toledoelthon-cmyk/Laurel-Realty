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

export function RentPropertyForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  return (
    <form
      className="surface-panel grid gap-5 p-6 sm:p-8"
      data-form="rent-property"
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
          "Hola, quiero rentar mi propiedad con Laurel Realty.",
          "",
          `Nombre: ${getFormValue(formData, "fullName")}`,
          `WhatsApp: ${getFormValue(formData, "phone")}`,
          `Correo: ${optionalValue(getFormValue(formData, "email"))}`,
          `Tipo de propiedad: ${getFormValue(formData, "propertyType")}`,
          "Operación: renta",
          `Ubicación: ${getFormValue(formData, "propertyLocation")}`,
          `Precio estimado: ${optionalValue(getFormValue(formData, "expectedRent"))}`,
          `Descripción o comentarios: ${optionalValue(getFormValue(formData, "message"))}`
        ]);

        setError("");
        setSubmitted(true);
      }}
    >
      <input name="source" type="hidden" value="laurel-realty-rent-property" />
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
          label="Tipo de propiedad"
          name="propertyType"
          options={[
            { label: "Casa", value: "house" },
            { label: "Apartamento", value: "apartment" },
            { label: "Local comercial", value: "commercial-space" },
            { label: "Oficina", value: "office" },
            { label: "Terreno", value: "land" },
            { label: "Otro", value: "other" }
          ]}
          required
        />
        <Field
          label="Ubicación"
          name="propertyLocation"
          placeholder="Zona, colonia o desarrollo"
          required
        />
        <Field
          helper="Opcional. Sirve como referencia inicial."
          label="Renta esperada"
          name="expectedRent"
          placeholder="Ej. $28,000 MXN mensuales"
        />
        <SelectField
          label="¿Está amueblada?"
          name="furnished"
          options={[
            { label: "Sí", value: "yes" },
            { label: "No", value: "no" },
            { label: "Parcialmente", value: "partial" }
          ]}
        />
        <SelectField
          label="Estado"
          name="availabilityStatus"
          options={[
            { label: "Disponible", value: "available" },
            { label: "Ocupada", value: "occupied" },
            {
              label: "Próximamente disponible",
              value: "available-soon"
            },
            { label: "En remodelación", value: "renovation" }
          ]}
          required
        />
        <Field
          label="Fecha aproximada de disponibilidad"
          name="availableDate"
          type="date"
        />
        <Field
          label="Tamaño aproximado"
          name="approximateSize"
          placeholder="Ej. 120 m²"
        />
        <Field
          label="Habitaciones"
          name="bedrooms"
          placeholder="Opcional"
          type="number"
          min={0}
        />
        <TextareaField
          label="Comentarios"
          name="message"
          placeholder="Cuéntanos detalles relevantes, requisitos deseados o contexto de la propiedad."
        />
      </div>

      <label className="flex gap-3 text-xs leading-relaxed text-deepBlue/65">
        <input
          className="mt-1 h-4 w-4 rounded border-laurel/20 accent-laurel"
          name="privacy"
          required
          type="checkbox"
        />
        Acepto ser contactado por Laurel Realty para recibir orientación sobre
        el proceso de renta de mi propiedad.
      </label>
      <p className="text-xs leading-relaxed text-deepBlue/60">
        Tus datos serán utilizados únicamente para contactarte sobre tu
        solicitud inmobiliaria.
      </p>
      <Button className="w-full sm:w-auto" type="submit">
        Solicitar asesoría para rentar
      </Button>
    </form>
  );
}
