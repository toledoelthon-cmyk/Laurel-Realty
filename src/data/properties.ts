export type PropertyOperation = "venta" | "renta";
export type PropertyType =
  | "casa"
  | "apartamento"
  | "terreno"
  | "local"
  | "oficina"
  | "otro";
export type PropertyStatus =
  | "disponible"
  | "reservada"
  | "vendida"
  | "rentada"
  | "próximamente";

export type PropertyImage = {
  src: string;
  alt: string;
};

export type Property = {
  id: string;
  slug: string;
  title: string;
  operation: PropertyOperation;
  propertyType: PropertyType;
  city: string;
  zone: string;
  addressApproximate: string;
  price: number;
  currency: "MXN" | "USD";
  bedrooms: number | null;
  bathrooms: number | null;
  parkingSpaces: number | null;
  area: number | null;
  images: PropertyImage[];
  description: string;
  features: string[];
  status: PropertyStatus;
  ownerName?: string;
  contactPhone?: string;
  createdAt: string;
};

export const properties: Property[] = [];

export function getPropertyBySlug(slug: string) {
  return properties.find((property) => property.slug === slug);
}

export function formatPropertyPrice(property: Property) {
  if (!property.price) {
    return "Precio por confirmar";
  }

  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: property.currency,
    maximumFractionDigits: 0
  }).format(property.price);
}

export function formatPropertyLabel(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}
