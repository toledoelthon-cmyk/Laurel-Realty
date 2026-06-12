import { defineField, defineType } from "sanity";

const operationOptions = [
  { title: "Venta", value: "venta" },
  { title: "Renta", value: "renta" }
];

const propertyTypeOptions = [
  { title: "Casa", value: "casa" },
  { title: "Departamento", value: "departamento" },
  { title: "Terreno", value: "terreno" },
  { title: "Local", value: "local" },
  { title: "Oficina", value: "oficina" },
  { title: "Villa", value: "villa" },
  { title: "Penthouse", value: "penthouse" }
];

const zoneOptions = [
  { title: "Cancún", value: "Cancún" },
  { title: "Playa del Carmen", value: "Playa del Carmen" },
  { title: "Puerto Morelos", value: "Puerto Morelos" },
  { title: "Tulum", value: "Tulum" },
  { title: "Riviera Maya", value: "Riviera Maya" }
];

const statusOptions = [
  { title: "Disponible", value: "disponible" },
  { title: "Apartada", value: "apartada" },
  { title: "Vendida", value: "vendida" },
  { title: "Rentada", value: "rentada" }
];

function formatPreviewPrice(price?: number, currency?: string) {
  if (!price) {
    return "Precio a consultar";
  }

  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: currency || "MXN",
    maximumFractionDigits: 0
  }).format(price);
}

function resolvePreviewPrice(
  price?: number,
  currency?: string,
  priceText?: string
) {
  return priceText || formatPreviewPrice(price, currency);
}

export const property = defineType({
  name: "property",
  title: "Propiedad",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: "operation",
      title: "Operación",
      type: "string",
      options: {
        layout: "radio",
        list: operationOptions
      }
    }),
    defineField({
      name: "propertyType",
      title: "Tipo de propiedad",
      type: "string",
      options: {
        list: propertyTypeOptions
      }
    }),
    defineField({
      name: "price",
      title: "Precio",
      type: "number",
      description: "Valor numérico para filtros y ordenamiento."
    }),
    defineField({
      name: "priceText",
      title: "Texto de precio",
      type: "string",
      description:
        "Texto visible en la web. Ej. $18,000 MXN / mes, Precio a consultar, Desde $2,800,000 MXN."
    }),
    defineField({
      name: "currency",
      title: "Moneda",
      type: "string",
      initialValue: "MXN",
      options: {
        list: [
          { title: "MXN", value: "MXN" },
          { title: "USD", value: "USD" }
        ]
      }
    }),
    defineField({
      name: "location",
      title: "Ubicación",
      type: "string"
    }),
    defineField({
      name: "zone",
      title: "Zona",
      type: "string",
      options: {
        list: zoneOptions
      }
    }),
    defineField({
      name: "bedrooms",
      title: "Recámaras",
      type: "number"
    }),
    defineField({
      name: "bathrooms",
      title: "Baños",
      type: "number",
      description: "Valor numérico para filtros."
    }),
    defineField({
      name: "bathroomsText",
      title: "Texto de baños",
      type: "string",
      description:
        "Texto visible en la web. Ej. 2 baños y medio, 1 baño, A consultar."
    }),
    defineField({
      name: "parkingSpaces",
      title: "Estacionamientos",
      type: "number"
    }),
    defineField({
      name: "constructionSize",
      title: "Metros de construcción",
      type: "number",
      description: "Superficie de construcción en m²."
    }),
    defineField({
      name: "landSize",
      title: "Metros de terreno",
      type: "number",
      description: "Superficie de terreno en m²."
    }),
    defineField({
      name: "shortDescription",
      title: "Descripción corta",
      type: "text",
      rows: 3
    }),
    defineField({
      name: "description",
      title: "Descripción",
      type: "text",
      rows: 6
    }),
    defineField({
      name: "amenities",
      title: "Amenidades",
      type: "array",
      of: [{ type: "string" }]
    }),
    defineField({
      name: "images",
      title: "Imágenes",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true
          },
          fields: [
            defineField({
              name: "alt",
              title: "Texto alternativo",
              type: "string",
              description:
                "Describe la imagen para SEO y accesibilidad. Ej. Fachada de casa en Cancún.",
              validation: (Rule) => Rule.required()
            })
          ]
        }
      ]
    }),
    defineField({
      name: "status",
      title: "Estatus",
      type: "string",
      initialValue: "disponible",
      options: {
        list: statusOptions
      }
    }),
    defineField({
      name: "featured",
      title: "Propiedad destacada",
      type: "boolean",
      initialValue: false
    }),
    defineField({
      name: "advisorName",
      title: "Nombre del asesor",
      type: "string"
    }),
    defineField({
      name: "advisorWhatsapp",
      title: "WhatsApp del asesor",
      type: "string"
    }),
    defineField({
      name: "publishedAt",
      title: "Fecha de publicación",
      type: "datetime"
    })
  ],
  preview: {
    select: {
      title: "title",
      operation: "operation",
      price: "price",
      priceText: "priceText",
      currency: "currency",
      zone: "zone",
      media: "images.0"
    },
    prepare({ title, operation, price, priceText, currency, zone, media }) {
      const operationLabel = operation === "renta" ? "Renta" : "Venta";
      const previewPrice = resolvePreviewPrice(price, currency, priceText);
      const previewZone = zone || "Zona por definir";

      return {
        title,
        subtitle: `${operationLabel} · ${previewPrice} · ${previewZone}`,
        media
      };
    }
  }
});
