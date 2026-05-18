"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Field, SelectField, TextareaField } from "./FormControls";

export function PropertyOwnerForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="surface-panel grid gap-5 p-6 sm:p-8"
      data-form="property-owner"
      method="post"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <input name="source" type="hidden" value="laurel-realty-property-owner" />
      {submitted ? (
        <div
          className="rounded-soft border border-gold/30 bg-gold/10 px-4 py-3 text-sm font-semibold text-laurel"
          role="status"
        >
          Gracias. Recibimos la información de tu propiedad y te contactaremos
          para orientarte.
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
          label="Tipo de propiedad"
          name="propertyType"
          options={[
            { label: "Casa", value: "house" },
            { label: "Apartamento", value: "apartment" },
            { label: "Terreno", value: "land" },
            { label: "Local", value: "commercial-space" },
            { label: "Oficina", value: "office" },
            { label: "Otro", value: "other" }
          ]}
          required
        />
        <SelectField
          label="Operación"
          name="operation"
          options={[
            { label: "Vender", value: "sell" },
            { label: "Rentar", value: "rent" },
            { label: "No estoy seguro", value: "not-sure" }
          ]}
          required
        />
        <Field
          label="Ubicación de la propiedad"
          name="propertyLocation"
          placeholder="Zona, colonia o desarrollo"
          required
        />
        <Field
          label="Tamaño aproximado en m²"
          name="approximateSize"
          placeholder="Ej. 180 m²"
        />
        <Field
          label="Número de habitaciones"
          name="bedrooms"
          placeholder="Opcional"
          type="number"
          min={0}
        />
        <SelectField
          label="Estado de la propiedad"
          name="propertyStatus"
          options={[
            { label: "Habitada", value: "occupied" },
            { label: "Desocupada", value: "vacant" },
            { label: "Rentada", value: "rented" },
            { label: "En remodelación", value: "renovation" },
            { label: "Otro", value: "other" }
          ]}
        />
        <Field
          helper="Opcional. Sirve solo como referencia inicial."
          label="Precio estimado"
          name="estimatedPrice"
          placeholder="Ej. $4,500,000 MXN"
        />
        <TextareaField
          label="Comentarios adicionales"
          name="message"
          placeholder="Detalles relevantes, dudas, tiempos o contexto de la propiedad."
        />
      </div>
      <label className="flex gap-3 text-xs leading-relaxed text-deepBlue/65">
        <input className="mt-1 h-4 w-4 rounded border-laurel/20 accent-laurel" name="privacy" required type="checkbox" />
        Acepto ser contactado por Laurel Realty para recibir asesoría inicial
        sobre mi propiedad.
      </label>
      <p className="text-xs leading-relaxed text-deepBlue/60">
        Tus datos serán utilizados únicamente para contactarte sobre tu
        solicitud inmobiliaria.
      </p>
      <Button className="w-full sm:w-auto" type="submit">
        Solicitar asesoría gratuita
      </Button>
    </form>
  );
}
