"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Field, TextareaField } from "./FormControls";
import {
  FormStatus,
  getFormValue,
  openWhatsAppMessage,
  optionalValue,
  validateNameAndPhone
} from "./whatsapp";

type PropertyInterestFormProps = {
  propertyTitle: string;
};

export function PropertyInterestForm({ propertyTitle }: PropertyInterestFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  return (
    <form
      className="surface-panel grid gap-5 p-6 sm:p-8"
      data-form="property-interest"
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

        const fullName = getFormValue(formData, "fullName");
        const phone = getFormValue(formData, "phone");
        const email = getFormValue(formData, "email");
        const message = getFormValue(formData, "message");
        const propertyUrl = window.location.href;

        openWhatsAppMessage([
          "Hola, quiero solicitar más información sobre una propiedad de Laurel Realty.",
          "",
          `Nombre: ${fullName}`,
          `WhatsApp: ${phone}`,
          `Correo: ${optionalValue(email)}`,
          `Mensaje: ${optionalValue(message)}`,
          `Propiedad: ${propertyTitle}`,
          `URL de la propiedad: ${propertyUrl}`
        ]);

        setError("");
        setSubmitted(true);
      }}
    >
      <input name="source" type="hidden" value="laurel-realty-property-interest" />
      <input name="propertyTitle" type="hidden" value={propertyTitle} />
      <FormStatus error={error} submitted={submitted} />
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Nombre completo" name="fullName" placeholder="Tu nombre" required />
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
        <TextareaField
          label="Mensaje"
          name="message"
          placeholder="Cuéntanos qué te gustaría saber sobre esta propiedad."
        />
      </div>
      <Button className="w-full sm:w-auto" type="submit">
        Solicitar información
      </Button>
    </form>
  );
}
