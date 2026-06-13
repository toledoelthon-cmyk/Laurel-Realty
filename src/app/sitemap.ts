import type { MetadataRoute } from "next";
import { getProperties } from "@/data/properties";
import { absoluteUrl, mainPages } from "@/lib/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const properties = await getProperties();
  const now = new Date();

  return [
    ...mainPages.map((page) => ({
      url: absoluteUrl(page.path),
      lastModified: now,
      changeFrequency: page.path === "/" ? ("weekly" as const) : ("monthly" as const),
      priority: page.path === "/" ? 1 : 0.8
    })),
    ...properties.map((property) => ({
      url: absoluteUrl(`/propiedades/${property.slug}`),
      lastModified: property.createdAt ? new Date(property.createdAt) : now,
      changeFrequency: "weekly" as const,
      priority: property.featured ? 0.9 : 0.7
    }))
  ];
}
