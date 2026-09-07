import type { Metadata } from "next";
import {
  Building2,
  CheckCircle2,
  Home,
  Search,
} from "lucide-react";
import { PropertyCatalog } from "@/components/catalog/PropertyCatalog";
import { CatalogQuickForm } from "@/components/forms/CatalogQuickForm";
import { JsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { getProperties } from "@/data/properties";
import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: {
    absolute:
      "Propiedades en venta y renta en Cancún y Riviera Maya | Laurel Realty"
  },
  description:
    "Consulta propiedades disponibles en venta y renta en Cancún y Riviera Maya con Laurel Realty.",
  alternates: {
    canonical: absoluteUrl("/propiedades")
  },
  openGraph: {
    title: "Propiedades en venta y renta en Cancún y Riviera Maya | Laurel Realty",
    description:
      "Explora propiedades disponibles en Cancún y Riviera Maya con asesoría inmobiliaria profesional.",
    url: absoluteUrl("/propiedades"),
    type: "website"
  }
};

const ownerBenefits = [
  "Mayor visibilidad",
  "Publicación profesional",
  "Filtro de interesados",
  "Asesoría durante el proceso",
  "Administración de rentas, si aplica"
];

const faqs = [
  {
    question: "¿Cómo se actualiza el catálogo de propiedades?",
    answer:
      "Laurel Realty publica propiedades reales disponibles y actualiza el catálogo conforme se incorporan opciones verificables. No publicamos inventario ficticio."
  },
  {
    question: "¿Puedo dejar mi búsqueda ahora?",
    answer:
      "Sí. Puedes registrar tus preferencias para que podamos considerarlas cuando se integren opciones compatibles."
  },
  {
    question: "¿Puedo publicar mi propiedad en el catálogo?",
    answer:
      "Sí. Puedes compartirnos los datos de tu inmueble para recibir orientación inicial sobre venta o renta."
  },
  {
    question: "¿Qué tipo de propiedades aceptan?",
    answer:
      "Casas, apartamentos, terrenos, locales, oficinas y otros inmuebles en Cancún y Riviera Maya."
  },
  {
    question: "¿Me avisarán cuando haya nuevas propiedades?",
    answer:
      "Si registras tu búsqueda, podremos contactarte cuando existan opciones que puedan ajustarse a tus preferencias."
  }
];

export default async function PropiedadesPage() {
  const properties = await getProperties();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", url: absoluteUrl("/") },
          { name: "Propiedades", url: absoluteUrl("/propiedades") }
        ])}
      />
      <PageHero
        eyebrow="Catálogo inmobiliario"
        subtitle="Explora propiedades en venta y renta seleccionadas por Laurel Realty. Encuentra casas, departamentos y oportunidades inmobiliarias con información clara, atención personalizada y acompañamiento profesional."
        title="Propiedades disponibles en Cancún y Riviera Maya"
        image="/images/hero/hero-condo-playa-02.webp"
        imageAlt="Departamento premium frente al mar en Playa del Carmen como apoyo visual de Laurel Realty"
      />

      <section className="premium-section bg-white/45">
        <div className="site-shell">
          <SectionHeading
            alignment="center"
            description="Elige el camino que corresponde a tu situación actual."
            title="¿Qué quieres hacer ahora?"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <ServiceCard
              ctaLabel="Enviar mi búsqueda"
              description="Déjanos tus datos y preferencias. Te contactaremos cuando tengamos opciones que puedan ajustarse a tu búsqueda."
              href="/busco-propiedad"
              icon={<Search aria-hidden size={21} />}
              title="Estoy buscando propiedad"
            />
            <ServiceCard
              ctaLabel="Publicar mi propiedad"
              description="Si tienes una casa, apartamento, terreno, local u oficina para vender o rentar, Laurel Realty puede ayudarte a incorporarla al catálogo."
              href="/propietarios"
              icon={<Home aria-hidden size={21} />}
              title="Tengo una propiedad para publicar"
            />
          </div>
        </div>
      </section>

      <section className="premium-section">
        <div className="site-shell">
          <SectionHeading
            alignment="center"
            description="Consulta propiedades disponibles en venta y renta, con filtros por operación, tipo y zona."
            title="Catálogo de propiedades disponibles"
          />
          <div className="mt-10">
            <PropertyCatalog properties={properties} />
          </div>
        </div>
      </section>

      <section className="premium-section bg-white/45">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              description="Estamos seleccionando propiedades para venta y renta en Cancún y Riviera Maya. Te ayudamos a prepararla, publicarla y conectarla con interesados adecuados."
              title="¿Quieres que tu propiedad sea parte de nuestro catálogo?"
            />
            <Button className="mt-8" href="/propietarios" size="lg">
              Quiero publicar mi propiedad
            </Button>
          </div>
          <div className="surface-panel p-6 sm:p-8">
            <ul className="grid gap-4 sm:grid-cols-2">
              {ownerBenefits.map((benefit) => (
                <li className="flex items-start gap-3 text-sm text-deepBlue/74" key={benefit}>
                  <CheckCircle2
                    aria-hidden
                    className="mt-0.5 h-5 w-5 shrink-0 text-gold"
                  />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="premium-section" id="formulario-rapido">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeading
            description="Completa una solicitud breve según quieras buscar una propiedad o publicar un inmueble."
            title="Formulario rápido"
          />
          <CatalogQuickForm />
        </div>
      </section>

      <section className="premium-section bg-white/45">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeading
            description="Información inicial sobre el catálogo inmobiliario de Laurel Realty."
            title="Preguntas frecuentes"
          />
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTASection
        description="Ya sea que busques una propiedad o tengas una para vender o rentar, podemos ayudarte a dar el siguiente paso."
        primaryHref="/busco-propiedad"
        primaryLabel="Busco propiedad"
        secondaryHref="/propietarios"
        secondaryLabel="Publicar mi propiedad"
        title="Sé de los primeros en formar parte del catálogo de Laurel Realty"
      />
    </>
  );
}


