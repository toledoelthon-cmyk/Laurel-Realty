import { brand } from "@/lib/constants";

export function getFormValue(formData: FormData, name: string) {
  return String(formData.get(name) || "").trim();
}

export function validateNameAndPhone(formData: FormData) {
  const fullName = getFormValue(formData, "fullName");
  const phone = getFormValue(formData, "phone");

  if (!fullName || !phone) {
    return "Por favor completa tu nombre y WhatsApp para continuar.";
  }

  return "";
}

export function optionalValue(value: string) {
  return value || "No proporcionado";
}

export function openWhatsAppMessage(lines: string[]) {
  const message = lines.join("\n");
  const href = `https://wa.me/${brand.whatsappDigits}?text=${encodeURIComponent(
    message
  )}`;

  window.open(href, "_blank", "noopener,noreferrer");
}

export function FormStatus({
  error,
  submitted
}: {
  error: string;
  submitted: boolean;
}) {
  if (error) {
    return (
      <div
        className="rounded-soft border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700"
        role="alert"
      >
        {error}
      </div>
    );
  }

  if (!submitted) {
    return null;
  }

  return (
    <div
      className="rounded-soft border border-gold/30 bg-gold/10 px-4 py-3 text-sm font-semibold text-laurel"
      role="status"
    >
      Se abrió WhatsApp con tu solicitud prellenada.
    </div>
  );
}
