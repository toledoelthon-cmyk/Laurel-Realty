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

export function AdvisoryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  return (
    <form
      className="surface-panel grid gap-5 p-6 sm:p-8"
      data-form="advisory"
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
          "Hola, quiero solicitar asesoría inmobiliaria con Laurel Realty.",
          "",
          `Nombre: ${getFormValue(formData, "fullName")}`,
          `WhatsApp: ${getFormValue(formData, "phone")}`,
          `Correo: ${optionalValue(getFormValue(formData, "email"))}`,
          `Tema: ${getFormValue(formData, "need")}`,
          `Mensaje: ${getFormValue(formData, "message")}`
        ]);

        setError("");
        setSubmitted(true);
      }}
    >
      <input name="source" type="hidden" value="laurel-realty-advisory" />
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
          label="¿Qué necesitas?"
          name="need"
          options={[
            { label: "Vender", value: "sell" },
            { label: "Rentar", value: "rent-property" },
            { label: "Comprar", value: "buy" },
            { label: "Buscar renta", value: "search-rent" },
            { label: "Valorar propiedad", value: "property-valuation" },
            { label: "Administración de rentas", value: "rental-management" },
            { label: "Otro", value: "other" }
          ]}
          required
        />
        <Field
          label="Ciudad o zona"
          name="zone"
          placeholder="Cancún, Playa del Carmen, Riviera Maya..."
        />
        <TextareaField
          label="Mensaje"
          name="message"
          placeholder="Cuéntanos brevemente tu situación o la duda que quieres resolver."
          required
        />
      </div>

      <label className="flex gap-3 text-xs leading-relaxed text-deepBlue/65">
        <input
          className="mt-1 h-4 w-4 rounded border-laurel/20 accent-laurel"
          name="privacy"
          required
          type="checkbox"
        />
        Acepto ser contactado por Laurel Realty para recibir asesoría
        inmobiliaria inicial.
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
