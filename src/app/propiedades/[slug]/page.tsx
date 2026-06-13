import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PropertyDetailPage } from "@/components/catalog/PropertyDetailPage";
import {
  formatPropertyLabel,
  getPropertyBySlug
} from "@/data/properties";
import {
  absoluteUrl,
  getPropertyDescription,
  getPropertyImageAlt
} from "@/lib/seo";
import { urlForPropertyImage } from "@/sanity/lib/image";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const property = await getPropertyBySlug(slug);

  if (!property) {
    return {
      title: "Propiedad no encontrada | Laurel Realty",
      robots: {
        index: false,
        follow: false
      }
    };
  }

  const canonical = absoluteUrl(`/propiedades/${property.slug}`);
  const description = `${getPropertyDescription(property)} ${property.zone ? `Zona: ${property.zone}.` : ""} Operación: ${formatPropertyLabel(property.operation)}. Tipo: ${formatPropertyLabel(property.propertyType)}.`;
  const image = property.images[0]
    ? urlForPropertyImage(property.images[0], {
        width: 1200,
        height: 630,
        quality: 86
      })
    : undefined;

  return {
    title: `${property.title} | Laurel Realty`,
    description,
    alternates: {
      canonical
    },
    openGraph: {
      title: `${property.title} | Laurel Realty`,
      description,
      url: canonical,
      type: "article",
      images: image
        ? [
            {
              url: image,
              width: 1200,
              height: 630,
              alt: getPropertyImageAlt(property)
            }
          ]
        : undefined
    }
  };
}

export default async function PropertyPage({ params }: PageProps) {
  const { slug } = await params;
  const property = await getPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  return <PropertyDetailPage property={property} />;
}
