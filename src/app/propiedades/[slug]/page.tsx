import { notFound } from "next/navigation";
import { PropertyDetailPage } from "@/components/catalog/PropertyDetailPage";
import { getPropertyBySlug } from "@/data/properties";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PropertyPage({ params }: PageProps) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  return <PropertyDetailPage property={property} />;
}
