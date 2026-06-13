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

type Mode = "search" | "owner";

export function CatalogQuickForm() {
  const [mode, setMode] = useState<Mode>("search");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const isSearch = mode === "search";

  return (
    <form
      className="surface-panel grid gap-5 p-6 sm:p-8"
      data-form="catalog-quick"
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

        if (isSearch) {
          openWhatsAppMessage([
            "Hola, estoy buscando una propiedad con Laurel Realty.",
            "",
            `Nombre: ${getFormValue(formData, "fullName")}`,
            `WhatsApp: ${getFormValue(formData, "phone")}`,
            "Correo: No proporcionado",
            `Compra o renta: ${getFormValue(formData, "operation")}`,
            `Tipo de propiedad: ${getFormValue(formData, "propertyType")}`,
            `Zona deseada: ${optionalValue(getFormValue(formData, "zone"))}`,
            `Presupuesto: ${optionalValue(getFormValue(formData, "budget"))}`,
            "Recámaras: No proporcionado",
            "Comentarios: Solicitud enviada desde el formulario rápido del catálogo."
          ]);
        } else {
          openWhatsAppMessage([
            "Hola, quiero publicar mi propiedad con Laurel Realty.",
            "",
            `Nombre: ${getFormValue(formData, "fullName")}`,
            `WhatsApp: ${getFormValue(formData, "phone")}`,
            "Correo: No proporcionado",
            `Tipo de propiedad: ${getFormValue(formData, "ownerPropertyType")}`,
            `Operación: ${getFormValue(formData, "ownerOperation")}`,
            `Ubicación: ${getFormValue(formData, "propertyLocation")}`,
            "Precio estimado: No proporcionado",
            `Descripción o comentarios: ${optionalValue(getFormValue(formData, "message"))}`
          ]);
        }

        setError("");
        setSubmitted(true);
      }}
    >
      <input name="source" type="hidden" value="laurel-realty-catalog-quick" />
      <input name="mode" type="hidden" value={mode} />

      <div className="grid gap-2 rounded-soft border border-laurel/10 bg-ivory/70 p-2 sm:grid-cols-2">
        <button
          className={`rounded-soft px-4 py-3 text-sm font-semibold transition ${
            isSearch ? "bg-laurel text-ivory" : "text-laurel hover:bg-white/70"
          }`}
          onClick={() => {
            setMode("search");
            setSubmitted(false);
            setError("");
          }}
          type="button"
        >
          Busco propiedad
        </button>
        <button
          className={`rounded-soft px-4 py-3 text-sm font-semibold transition ${
            !isSearch ? "bg-laurel text-ivory" : "text-laurel hover:bg-white/70"
          }`}
          onClick={() => {
            setMode("owner");
            setSubmitted(false);
            setError("");
          }}
          type="button"
        >
          Tengo propiedad
        </button>
      </div>

      <FormStatus error={error} submitted={submitted} />

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Nombre" name="fullName" placeholder="Tu nombre" required />
        <Field
          autoComplete="tel"
          label="WhatsApp"
          name="phone"
          placeholder="+52"
          required
          type="tel"
        />

        {isSearch ? (
          <>
            <SelectField
              label="Operación"
              name="operation"
              options={[
                { label: "Venta", value: "venta" },
                { label: "Renta", value: "renta" }
              ]}
              required
            />
            <SelectField
              label="Tipo de propiedad"
              name="propertyType"
              options={[
                { label: "Casa", value: "casa" },
                { label: "Apartamento", value: "apartamento" },
                { label: "Terreno", value: "terreno" },
                { label: "Local", value: "local" },
                { label: "Oficina", value: "oficina" }
              ]}
              required
            />
            <SelectField
              label="Zona"
              name="zone"
              options={[
                { label: "Cancún", value: "cancun" },
                { label: "Playa del Carmen", value: "playa-del-carmen" },
                { label: "Riviera Maya", value: "riviera-maya" },
                { label: "Otra", value: "otra" }
              ]}
            />
            <Field
              label="Presupuesto"
              name="budget"
              placeholder="Rango aproximado"
            />
          </>
        ) : (
          <>
            <SelectField
              label="Tipo de propiedad"
              name="ownerPropertyType"
              options={[
                { label: "Casa", value: "casa" },
                { label: "Apartamento", value: "apartamento" },
                { label: "Terreno", value: "terreno" },
                { label: "Local", value: "local" },
                { label: "Oficina", value: "oficina" }
              ]}
              required
            />
            <SelectField
              label="Operación"
              name="ownerOperation"
              options={[
                { label: "Vender", value: "vender" },
                { label: "Rentar", value: "rentar" }
              ]}
              required
            />
            <Field
              label="Ubicación"
              name="propertyLocation"
              placeholder="Zona, colonia o desarrollo"
              required
            />
            <TextareaField
              label="Comentarios"
              name="message"
              placeholder="Cuéntanos lo más relevante de tu propiedad."
            />
          </>
        )}
      </div>

      <Button className="w-full sm:w-auto" type="submit">
        {isSearch ? "Enviar mi búsqueda" : "Publicar mi propiedad"}
      </Button>
    </form>
  );
}
