import { client } from "@/sanity/lib/client";
import {
  featuredPropertiesQuery,
  propertiesQuery,
  propertyBySlugQuery
} from "@/sanity/lib/queries";

export type PropertyOperation = "venta" | "renta";
export type PropertyType =
  | "casa"
  | "departamento"
  | "terreno"
  | "local"
  | "oficina"
  | "villa"
  | "penthouse";
export type PropertyStatus =
  | "disponible"
  | "apartada"
  | "vendida"
  | "rentada";

type SanityImageObject = {
  _type?: "image";
  asset?: {
    _type?: "reference";
    _ref?: string;
  };
  crop?: {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  };
  hotspot?: {
    x?: number;
    y?: number;
    height?: number;
    width?: number;
  };
};

export type PropertyImage = {
  src: string;
  alt: string;
  source?: SanityImageObject;
};

export type Property = {
  id: string;
  slug: string;
  title: string;
  operation: PropertyOperation;
  propertyType: PropertyType;
  location: string;
  zone: string;
  price: number;
  priceText: string;
  currency: "MXN" | "USD";
  bedrooms: number | null;
  bathrooms: number | null;
  bathroomsText: string;
  parkingSpaces: number | null;
  constructionSize: number | null;
  landSize: number | null;
  shortDescription: string;
  images: PropertyImage[];
  description: string;
  amenities: string[];
  status: PropertyStatus;
  featured: boolean;
  advisorName?: string;
  advisorWhatsapp?: string;
  publishedAt?: string;
  createdAt: string;
};

type SanityPropertyImage = SanityImageObject & {
  src: string;
  alt: string;
};

type SanityProperty = Omit<Property, "id" | "createdAt" | "images"> & {
  _id: string;
  images?: SanityPropertyImage[];
  createdAt?: string;
};

export const properties: Property[] = [];

function mapSanityProperty(property: SanityProperty): Property {
  return {
    id: property._id,
    slug: property.slug,
    title: property.title,
    operation: property.operation ?? "venta",
    propertyType: property.propertyType ?? "casa",
    location: property.location ?? "",
    zone: property.zone ?? "",
    price: property.price ?? 0,
    priceText: property.priceText ?? "",
    currency: property.currency ?? "MXN",
    bedrooms: property.bedrooms ?? null,
    bathrooms: property.bathrooms ?? null,
    bathroomsText: property.bathroomsText ?? "",
    parkingSpaces: property.parkingSpaces ?? null,
    constructionSize: property.constructionSize ?? null,
    landSize: property.landSize ?? null,
    shortDescription: property.shortDescription ?? "",
    images: (property.images ?? []).map((image) => ({
      src: image.src,
      alt: image.alt || property.title,
      source: image
    })),
    description: property.description ?? "",
    amenities: property.amenities ?? [],
    status: property.status ?? "disponible",
    featured: property.featured ?? false,
    advisorName: property.advisorName,
    advisorWhatsapp: property.advisorWhatsapp,
    publishedAt: property.publishedAt,
    createdAt: property.createdAt ?? ""
  };
}

export async function getProperties() {
  try {
    const sanityProperties = await client.fetch<SanityProperty[]>(
      propertiesQuery,
      {},
      { cache: "no-store" }
    );

    return sanityProperties.map(mapSanityProperty);
  } catch {
    return properties;
  }
}

export async function getFeaturedProperties() {
  try {
    const sanityProperties = await client.fetch<SanityProperty[]>(
      featuredPropertiesQuery,
      {},
      { next: { revalidate: 60 } }
    );

    return sanityProperties.map(mapSanityProperty);
  } catch {
    return properties.filter((property) => property.featured);
  }
}

export async function getPropertyBySlug(slug: string) {
  try {
    const property = await client.fetch<SanityProperty | null>(
      propertyBySlugQuery,
      { slug }
    );

    return property ? mapSanityProperty(property) : undefined;
  } catch {
    return properties.find((property) => property.slug === slug);
  }
}

export function getPropertyWhatsappHref(property: Property) {
  const rawPhone = property.advisorWhatsapp || "529984032240";
  const digits = rawPhone.replace(/\D/g, "");
  const phone = digits.startsWith("52") ? digits : `52${digits}`;
  const text = encodeURIComponent(
    `Hola, quiero información sobre la propiedad: ${property.title}`
  );

  return `https://wa.me/${phone}?text=${text}`;
}

export function formatPropertyPrice(property: Property) {
  if (property.priceText) {
    return property.priceText;
  }

  if (!property.price) {
    return "Precio a consultar";
  }

  const formattedPrice = new Intl.NumberFormat("es-MX", {
    maximumFractionDigits: 0
  }).format(property.price);

  return `$${formattedPrice} ${property.currency}`;
}

export function formatPropertyBathrooms(property: Property) {
  if (property.bathroomsText) {
    return property.bathroomsText;
  }

  if (property.bathrooms === null) {
    return "N/D";
  }

  return `${property.bathrooms} ${property.bathrooms === 1 ? "baño" : "baños"}`;
}

export function formatPropertyLabel(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

