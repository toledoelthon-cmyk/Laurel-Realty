export const brand = {
  name: "Laurel Realty",
  descriptor: "Asesoría y Gestión Inmobiliaria",
  phrase: "Prestigio, confianza y patrimonio en el Caribe Mexicano.",
  zone: "Cancún y Riviera Maya",
  locations: "Cancún · Playa del Carmen · Riviera Maya",
  advisor: "Vicky Izquierdo",
  whatsapp: "+52 998 403 2240",
  whatsappDigits: "529984032240",
  whatsappMessage:
    "Hola, me interesa recibir asesoría inmobiliaria con Laurel Realty.",
  email: "vicky481985@gmail.com",
  attention: "Atención digital y con cita previa"
};

export const whatsappHref = `https://wa.me/${brand.whatsappDigits}?text=${encodeURIComponent(
  brand.whatsappMessage
)}`;

export const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Propietarios", href: "/propietarios" },
  { label: "Propiedades", href: "/propiedades" },
  { label: "Busco propiedad", href: "/busco-propiedad" },
  { label: "Asesoría", href: "/asesoria" },
  { label: "Guías", href: "/guias" },
  { label: "Contacto", href: "/contacto" }
];

export const footerServices = [
  "Venta de propiedades",
  "Renta de propiedades",
  "Captación de inmuebles",
  "Valoración inicial",
  "Administración de rentas",
  "Asesoría documental básica"
];

export const trustBadges = [
  "Atención personalizada",
  "Asesoría inicial gratuita",
  "Proceso claro",
  "Gestión profesional",
  "Cancún y Riviera Maya"
];
