import { createImageUrlBuilder } from "@sanity/image-url";
import { sanityDataset, sanityProjectId } from "@/sanity/lib/client";
import type { PropertyImage } from "@/data/properties";

const builder = createImageUrlBuilder({
  projectId: sanityProjectId,
  dataset: sanityDataset
});

type SanityImageOptions = {
  width: number;
  height: number;
  quality?: number;
};

export function urlForPropertyImage(
  image: PropertyImage,
  { width, height, quality = 82 }: SanityImageOptions
) {
  if (!image.source) {
    return image.src;
  }

  return builder
    .image(image.source)
    .width(width)
    .height(height)
    .fit("crop")
    .auto("format")
    .quality(quality)
    .url();
}
