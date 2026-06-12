"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { brand } from "@/lib/constants";
import { Field, TextareaField } from "./FormControls";

type PropertyInterestFormProps = {
  propertyTitle: string;
};

export function PropertyInterestForm({ propertyTitle }: PropertyInterestFormProps) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="surface-panel grid gap-5 p-6 sm:p-8"
      data-form="property-interest"
      method="post"
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const fullName = String(formData.get("fullName") || "").trim();
        const phone = String(formData.get("phone") || "").trim();
        const email = String(formData.get("email") || "").trim();
        const message = String(formData.get("message") || "").trim();
        const propertyUrl = window.location.href;

        const whatsappMessage = [
          "Hola, quiero solicitar más información sobre una propiedad de Laurel Realty.",
          "",
          `Nombre: ${fullName}`,
          `WhatsApp: ${phone}`,
          `Correo: ${email || "No proporcionado"}`,
          `Mensaje: ${message || "No proporcionado"}`,
          `Propiedad: ${propertyTitle}`,
          `URL de la propiedad: ${propertyUrl}`
        ].join("\n");

        window.open(
          `https://wa.me/${brand.whatsappDigits}?text=${encodeURIComponent(
            whatsappMessage
          )}`,
          "_blank",
          "noopener,noreferrer"
        );
        setSubmitted(true);
      }}
    >
      <input name="source" type="hidden" value="laurel-realty-property-interest" />
      <input name="propertyTitle" type="hidden" value={propertyTitle} />
      {submitted ? (
        <div
          className="rounded-soft border border-gold/30 bg-gold/10 px-4 py-3 text-sm font-semibold text-laurel"
          role="status"
        >
          Se abrió WhatsApp con tu solicitud prellenada.
        </div>
      ) : null}
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
