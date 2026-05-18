import type { Metadata } from "next";
import {
  Building2,
  CheckCircle2,
  Home,
  KeyRound,
  Search,
  ShieldCheck
} from "lucide-react";
import { EmptyCatalogCTA } from "@/components/catalog/EmptyCatalogCTA";
import { PropertyFilters } from "@/components/catalog/PropertyFilters";
import { PropertyGrid } from "@/components/catalog/PropertyGrid";
import { CatalogQuickForm } from "@/components/forms/CatalogQuickForm";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { properties } from "@/data/properties";

export const metadata: Metadata = {
  title: {
    absolute:
      "Propiedades en venta y renta en Cancún y Riviera Maya | Laurel Realty"
  },
  description:
    "Consulta próximas propiedades disponibles en Cancún y Riviera Maya o publica tu inmueble con Laurel Realty."
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
    question: "¿Por qué todavía no hay propiedades publicadas?",
    answer:
      "Laurel Realty está preparando el catálogo con propiedades reales y verificables. No publicamos inventario ficticio."
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

function CatalogHeroVisual() {
  return (
    <div className="surface-panel overflow-hidden p-3 lg:ml-auto lg:max-w-[520px]">
      <div className="relative h-[420px] overflow-hidden rounded-[0.35rem] bg-laurel sm:h-[480px] lg:h-[500px]">
        <div className="absolute inset-6 border border-gold/35" />
        <div className="absolute left-10 right-10 top-20 h-px bg-gold/25" />
        <div className="absolute left-10 top-20 h-40 w-px bg-gold/25" />
        <div className="absolute bottom-28 left-10 right-10 grid grid-cols-3 gap-4">
          <span className="h-24 border border-ivory/20 bg-ivory/8" />
          <span className="h-32 border border-ivory/20 bg-ivory/10" />
          <span className="h-20 border border-ivory/20 bg-ivory/8" />
        </div>
        <div className="absolute bottom-8 left-8 right-8 border-t border-gold/40 pt-5">
          <p className="font-display text-3xl text-ivory">Catálogo futuro</p>
          <p className="mt-3 text-sm text-ivory/70">
            Estructura preparada para propiedades reales en venta y renta.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function PropiedadesPage() {
  return (
    <>
      <PageHero
        eyebrow="Catálogo inmobiliario"
        subtitle="Estamos incorporando nuevas casas, apartamentos e inmuebles para venta y renta. Mientras tanto, puedes registrar tu búsqueda o publicar tu propiedad con Laurel Realty."
        title="Propiedades disponibles en Cancún y Riviera Maya"
        visual={<CatalogHeroVisual />}
      />

      <EmptyCatalogCTA
        title="Próximamente nuevas propiedades"
        description="Todavía no tenemos propiedades publicadas en este catálogo, pero estamos trabajando en incorporar opciones seleccionadas para venta y renta en Cancún y Riviera Maya."
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
            description="Los filtros y la cuadrícula quedan preparados para integrar propiedades reales cuando estén disponibles."
            title="Estructura futura del catálogo"
          />
          <div className="mt-10">
            <PropertyFilters />
          </div>
          <div className="mt-10">
            <PropertyGrid properties={properties} />
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
            description="Información inicial sobre el catálogo futuro de Laurel Realty."
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
