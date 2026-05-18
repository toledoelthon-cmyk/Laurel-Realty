"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Field, SelectField } from "./FormControls";

export function GuideInterestForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="surface-panel grid gap-5 p-6 sm:p-8"
      data-form="guide-interest"
      method="post"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <input name="source" type="hidden" value="laurel-realty-guide-interest" />
      {submitted ? (
        <div
          className="rounded-soft border border-gold/30 bg-gold/10 px-4 py-3 text-sm font-semibold text-laurel"
          role="status"
        >
          Gracias. Recibimos tus datos y te enviaremos información útil sobre
          temas inmobiliarios.
        </div>
      ) : null}
      <div className="grid gap-5 md:grid-cols-2">
        <Field
          autoComplete="name"
          label="Nombre"
          name="fullName"
          placeholder="Tu nombre"
          required
        />
        <Field
          autoComplete="email"
          label="Correo electrónico"
          name="email"
          placeholder="tu@correo.com"
          required
          type="email"
        />
        <Field
          autoComplete="tel"
          label="WhatsApp"
          name="phone"
          placeholder="Opcional"
          type="tel"
        />
        <SelectField
          label="Interés"
          name="interest"
          options={[
            { label: "Vender", value: "sell" },
            { label: "Rentar", value: "rent-property" },
            { label: "Comprar", value: "buy" },
            { label: "Buscar renta", value: "search-rent" },
            { label: "Administración de rentas", value: "rental-management" },
            { label: "Asesoría", value: "advisory" }
          ]}
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
        Acepto ser contactado por Laurel Realty para recibir información
        inmobiliaria relacionada con mi interés.
      </label>
      <Button className="w-full sm:w-auto" type="submit">
        Quiero recibir información
      </Button>
    </form>
  );
}
