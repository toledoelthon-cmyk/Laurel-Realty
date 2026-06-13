import type { Metadata } from "next";
import { StudioPageClient } from "@/components/studio/StudioPageClient";

export const metadata: Metadata = {
  title: "Sanity Studio | Laurel Realty",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false
    }
  }
};

export default function StudioPage() {
  return <StudioPageClient />;
}
