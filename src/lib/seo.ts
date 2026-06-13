import type { Property } from "@/data/properties";
import { formatPropertyLabel } from "@/data/properties";
import { brand, siteUrl } from "@/lib/constants";

export const mainPages = [
  { path: "/", name: "Inicio" },
  { path: "/propiedades", name: "Propiedades" },
  { path: "/propietarios", name: "Propietarios" },
  { path: "/busco-propiedad", name: "Busco propiedad" },
  { path: "/asesoria", name: "Asesoría" },
  { path: "/guias", name: "Guías inmobiliarias" },
  { path: "/contacto", name: "Contacto" }
];

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function getPropertyDescription(property: Property) {
  if (property.shortDescription) {
    return property.shortDescription;
  }

  const operation = formatPropertyLabel(property.operation);
  const type = formatPropertyLabel(property.propertyType);
  const zone = property.zone || "Cancún y Riviera Maya";

  return `${type} en ${operation.toLowerCase()} en ${zone}. Propiedad disponible con asesoría personalizada de ${brand.name}.`;
}

export function getPropertyImageAlt(property: Property) {
  const zone = property.zone || "Cancún y Riviera Maya";

  return `${property.title} ${zone} Laurel Realty`;
}
