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

export function SellPropertyForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  return (
    <form
      className="surface-panel grid gap-5 p-6 sm:p-8"
      data-form="sell-property"
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
          "Hola, quiero vender mi propiedad con Laurel Realty.",
          "",
          `Nombre: ${getFormValue(formData, "fullName")}`,
          `WhatsApp: ${getFormValue(formData, "phone")}`,
          `Correo: ${optionalValue(getFormValue(formData, "email"))}`,
          `Tipo de propiedad: ${getFormValue(formData, "propertyType")}`,
          "Operación: venta",
          `Ubicación: ${getFormValue(formData, "propertyLocation")}`,
          `Precio estimado: ${optionalValue(getFormValue(formData, "expectedPrice"))}`,
          `Descripción o comentarios: ${optionalValue(getFormValue(formData, "message"))}`
        ]);

        setError("");
        setSubmitted(true);
      }}
    >
      <input name="source" type="hidden" value="laurel-realty-sell-property" />
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
            { label: "Terreno", value: "land" },
            { label: "Local", value: "commercial-space" },
            { label: "Oficina", value: "office" },
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
          label="Tamaño aproximado"
          name="approximateSize"
          placeholder="Ej. 180 m²"
        />
        <Field
          label="Habitaciones"
          name="bedrooms"
          placeholder="Opcional"
          type="number"
          min={0}
        />
        <SelectField
          label="Estado actual"
          name="propertyStatus"
          options={[
            { label: "Habitada", value: "occupied" },
            { label: "Desocupada", value: "vacant" },
            { label: "Rentada", value: "rented" },
            { label: "En remodelación", value: "renovation" }
          ]}
        />
        <Field
          helper="Opcional. Sirve como referencia inicial para la conversación."
          label="Precio esperado"
          name="expectedPrice"
          placeholder="Ej. $4,500,000 MXN"
        />
        <SelectField
          label="¿Qué tan pronto quieres vender?"
          name="sellingTimeline"
          options={[
            { label: "Inmediatamente", value: "immediately" },
            { label: "1-3 meses", value: "1-3-months" },
            { label: "3-6 meses", value: "3-6-months" },
            { label: "Solo quiero orientación", value: "guidance" }
          ]}
          required
        />
        <TextareaField
          label="Comentarios"
          name="message"
          placeholder="Cuéntanos detalles relevantes, dudas o contexto de la venta."
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
        la venta de mi propiedad.
      </label>
      <p className="text-xs leading-relaxed text-deepBlue/60">
        Tus datos serán utilizados únicamente para contactarte sobre tu
        solicitud inmobiliaria.
      </p>
      <Button className="w-full sm:w-auto" type="submit">
        Solicitar valoración gratuita
      </Button>
    </form>
  );
}
