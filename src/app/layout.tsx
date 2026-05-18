import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { WhatsAppFloatingButton } from "@/components/layout/WhatsAppFloatingButton";
import { brand } from "@/lib/constants";
import "./globals.css";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

const sans = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: `${brand.name} | ${brand.descriptor}`,
    template: `%s | ${brand.name}`
  },
  description:
    "Laurel Realty, asesoría y gestión inmobiliaria en Cancún y Riviera Maya. Venta y renta de propiedades en Cancún y Riviera Maya con atención digital y con cita previa.",
  keywords: [
    "inmobiliaria en Cancún",
    "inmobiliaria en Riviera Maya",
    "asesoría inmobiliaria en Cancún",
    "asesoría inmobiliaria en Riviera Maya",
    "vender propiedad en Cancún",
    "rentar propiedad en Cancún",
    "vender propiedad en Riviera Maya",
    "rentar propiedad en Riviera Maya",
    "casas en renta en Cancún",
    "apartamentos en renta en Cancún",
    "administración de rentas en Cancún",
    "propiedades en Cancún",
    "propiedades en Riviera Maya"
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${display.variable} ${sans.variable}`}>
      <body>
        <StructuredData />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}

function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "RealEstateAgent"],
        "@id": "https://laurelrealty.mx/#business",
        name: brand.name,
        description:
          "Asesoría y Gestión Inmobiliaria en Cancún, Playa del Carmen y Riviera Maya.",
        email: brand.email,
        telephone: brand.whatsapp,
        contactPoint: {
          "@type": "ContactPoint",
          telephone: brand.whatsapp,
          contactType: "customer service",
          availableLanguage: ["es"],
          areaServed: ["Cancún", "Playa del Carmen", "Riviera Maya"]
        },
        areaServed: [
          {
            "@type": "City",
            name: "Cancún"
          },
          {
            "@type": "City",
            name: "Playa del Carmen"
          },
          {
            "@type": "Place",
            name: "Riviera Maya"
          }
        ],
        serviceType: "Asesoría y Gestión Inmobiliaria",
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          description: "Atención digital y con cita previa"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
