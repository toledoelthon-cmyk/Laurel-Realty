import { groq } from "next-sanity";

export const propertiesQuery = groq`
  *[_type == "property" && status == "disponible"] | order(featured desc, publishedAt desc, _createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    operation,
    propertyType,
    location,
    zone,
    price,
    priceText,
    currency,
    bedrooms,
    bathrooms,
    bathroomsText,
    parkingSpaces,
    constructionSize,
    landSize,
    shortDescription,
    images[]{
      ...,
      "src": asset->url,
      "alt": coalesce(alt, ^.title)
    },
    description,
    amenities,
    status,
    featured,
    advisorName,
    advisorWhatsapp,
    publishedAt,
    "createdAt": coalesce(publishedAt, _createdAt)
  }
`;

export const featuredPropertiesQuery = groq`
  *[_type == "property" && status == "disponible" && featured == true] | order(publishedAt desc, _createdAt desc)[0...3] {
    _id,
    title,
    "slug": slug.current,
    operation,
    propertyType,
    location,
    zone,
    price,
    priceText,
    currency,
    bedrooms,
    bathrooms,
    bathroomsText,
    parkingSpaces,
    constructionSize,
    landSize,
    shortDescription,
    images[]{
      ...,
      "src": asset->url,
      "alt": coalesce(alt, ^.title)
    },
    description,
    amenities,
    status,
    featured,
    advisorName,
    advisorWhatsapp,
    publishedAt,
    "createdAt": coalesce(publishedAt, _createdAt)
  }
`;

export const propertyBySlugQuery = groq`
  *[_type == "property" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    operation,
    propertyType,
    location,
    zone,
    price,
    priceText,
    currency,
    bedrooms,
    bathrooms,
    bathroomsText,
    parkingSpaces,
    constructionSize,
    landSize,
    shortDescription,
    images[]{
      ...,
      "src": asset->url,
      "alt": coalesce(alt, ^.title)
    },
    description,
    amenities,
    status,
    featured,
    advisorName,
    advisorWhatsapp,
    publishedAt,
    "createdAt": coalesce(publishedAt, _createdAt)
  }
`;
