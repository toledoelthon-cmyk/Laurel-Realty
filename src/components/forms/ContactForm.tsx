"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Field, SelectField, TextareaField } from "./FormControls";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="surface-panel grid gap-5 p-6 sm:p-8"
      data-form="contact"
      method="post"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <input name="source" type="hidden" value="laurel-realty-contact" />
      {submitted ? (
        <div
          className="rounded-soft border border-gold/30 bg-gold/10 px-4 py-3 text-sm font-semibold text-laurel"
          role="status"
        >
          Gracias. Recibimos tu mensaje y te contactaremos pronto.
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
          label="Motivo de contacto"
          name="reason"
          options={[
            { label: "Quiero vender", value: "sell" },
            { label: "Quiero rentar mi propiedad", value: "owner-rent" },
            { label: "Busco propiedad para rentar", value: "search-rent" },
            { label: "Busco propiedad para comprar", value: "search-buy" },
            { label: "Necesito asesoría", value: "advisory" },
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
          placeholder="Comparte brevemente cómo podemos ayudarte."
          required
        />
      </div>
      <label className="flex gap-3 text-xs leading-relaxed text-deepBlue/65">
        <input className="mt-1 h-4 w-4 rounded border-laurel/20 accent-laurel" name="privacy" required type="checkbox" />
        Acepto ser contactado por Laurel Realty para dar seguimiento a mi
        solicitud.
      </label>
      <p className="text-xs leading-relaxed text-deepBlue/60">
        Tus datos serán utilizados únicamente para contactarte sobre tu
        solicitud inmobiliaria.
      </p>
      <Button className="w-full sm:w-auto" type="submit">
        Enviar mensaje
      </Button>
    </form>
  );
}
