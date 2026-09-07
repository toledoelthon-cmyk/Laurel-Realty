import type { Metadata } from "next";
import {
  BellRing,
  Building2,
  CheckCircle2,
  FileText,
  Handshake,
  Home,
  KeyRound,
  MapPin,
  Search,
  ShieldCheck,
  Store,
  WalletCards
} from "lucide-react";
import { SearchClientForm } from "@/components/forms/SearchClientForm";
import { JsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { whatsappHref } from "@/lib/constants";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute: "Buscar propiedad en Cancún y Riviera Maya | Laurel Realty"
  },
  description:
    "Cuéntanos qué propiedad buscas en Cancún o Riviera Maya y Laurel Realty te contactará cuando tenga opciones compatibles.",
  alternates: {
    canonical: absoluteUrl("/busco-propiedad")
  },
  openGraph: {
    title: "Buscar propiedad en Cancún y Riviera Maya | Laurel Realty",
    description:
      "Registra tu búsqueda de casa, departamento o inmueble en Cancún y Riviera Maya.",
    url: absoluteUrl("/busco-propiedad"),
    type: "website"
  }
};

const benefits = [
  {
    title: "Te avisamos cuando haya opciones compatibles",
    description:
      "Registramos tus preferencias para tenerlas presentes cuando se integren propiedades.",
    icon: <BellRing aria-hidden size={21} />
  },
  {
    title: "Entendemos tu presupuesto y zona deseada",
    description:
      "Ordenamos tu rango, ubicación y prioridades antes de comparar opciones.",
    icon: <WalletCards aria-hidden size={21} />
  },
  {
    title: "Evitas revisar propiedades que no se ajustan a ti",
    description:
      "Buscamos entender lo que realmente necesitas para filtrar mejor.",
    icon: <Search aria-hidden size={21} />
  },
  {
    title: "Recibes orientación antes de decidir",
    description:
      "Te ayudamos a identificar qué revisar, preguntar y comparar.",
    icon: <ShieldCheck aria-hidden size={21} />
  },
  {
    title: "Te acompañamos en visita y negociación",
    description:
      "Cuando haya una opción compatible, te orientamos en los siguientes pasos.",
    icon: <Handshake aria-hidden size={21} />
  }
];

const searchTypes = [
  { title: "Casa en renta", icon: <Home aria-hidden size={21} /> },
  { title: "Apartamento en renta", icon: <Building2 aria-hidden size={21} /> },
  { title: "Casa en venta", icon: <Home aria-hidden size={21} /> },
  { title: "Apartamento en venta", icon: <Building2 aria-hidden size={21} /> },
  { title: "Local u oficina", icon: <Store aria-hidden size={21} /> },
  { title: "Otro inmueble", icon: <KeyRound aria-hidden size={21} /> }
];

const educationPoints = [
  "Ubicación",
  "Presupuesto",
  "Condiciones de renta o compra",
  "Estado de la propiedad",
  "Servicios cercanos",
  "Documentación y proceso"
];

const faqs = [
  {
    question: "¿Puedo dejar mi búsqueda aunque todavía no haya propiedades publicadas?",
    answer:
      "Sí. La idea es conocer tus preferencias para considerarlas cuando se integren opciones compatibles."
  },
  {
    question: "¿Me contactarán si aparece una opción compatible?",
    answer:
      "Sí. Si aparece una opción que pueda ajustarse a lo que buscas, Laurel Realty podrá contactarte para compartir los siguientes pasos."
  },
  {
    question: "¿Puedo buscar renta y compra al mismo tiempo?",
    answer:
      "Sí. Puedes indicarlo en comentarios o elegir la opción que mejor refleje tu prioridad actual."
  },
  {
    question: "¿Tiene costo dejar mi solicitud?",
    answer:
      "No. Registrar tu búsqueda no tiene costo y sirve para orientar mejor la atención inicial."
  },
  {
    question: "¿Puedo actualizar mis preferencias después?",
    answer:
      "Sí. Puedes contactarnos por WhatsApp o enviar una nueva solicitud si cambian tu zona, presupuesto o tipo de propiedad."
  }
];

function SearchHeroVisual() {
  return (
    <div className="surface-panel overflow-hidden p-3 lg:ml-auto lg:max-w-[520px]">
      <div className="relative h-[420px] overflow-hidden rounded-[0.35rem] bg-laurel sm:h-[480px] lg:h-[500px]">
        <div className="absolute inset-6 border border-gold/35" />
        <div className="absolute left-10 top-14 h-36 w-px bg-gold/30" />
        <div className="absolute left-10 right-10 top-28 h-px bg-gold/25" />
        <div className="absolute right-12 top-16 h-28 w-28 border border-gold/20" />
        <div className="absolute bottom-28 left-10 right-10 grid grid-cols-3 gap-4">
          <span className="h-20 border border-ivory/20 bg-ivory/8" />
          <span className="h-32 border border-ivory/20 bg-ivory/10" />
          <span className="h-24 border border-ivory/20 bg-ivory/8" />
        </div>
        <div className="absolute bottom-8 left-8 right-8 border-t border-gold/40 pt-5">
          <p className="font-display text-3xl text-ivory">
            Búsqueda personalizada
          </p>
          <p className="mt-3 text-sm text-ivory/70">
            Preferencias claras para encontrar mejores coincidencias.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function BuscoPropiedadPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", url: absoluteUrl("/") },
          { name: "Busco propiedad", url: absoluteUrl("/busco-propiedad") }
        ])}
      />
      <PageHero
        eyebrow="Búsqueda personalizada"
        primaryCTA={{ label: "Enviar mi búsqueda", href: "#busqueda" }}
        secondaryCTA={{ label: "Hablar por WhatsApp", href: whatsappHref }}
        subtitle="Si buscas casa, apartamento o inmueble para vivir, invertir o mudarte en Cancún o Riviera Maya, déjanos tus datos y te contactaremos cuando tengamos opciones compatibles."
        title="Cuéntanos qué propiedad estás buscando"
        image="/images/properties/departamento-playa-02.webp"
        imageAlt="Departamento premium frente al mar en Playa del Carmen"
      />

      <section className="premium-section">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <SectionHeading
            description="Muy pronto tendremos opciones disponibles para venta y renta. Mientras tanto, podemos conocer tus preferencias para ayudarte de forma más personalizada."
            title="Estamos incorporando nuevas propiedades"
          />
          <div className="quiet-panel p-7 sm:p-9">
            <Search aria-hidden className="h-8 w-8 text-gold" />
            <p className="mt-5 text-base leading-8 text-deepBlue/72">
              Esta búsqueda personalizada nos permite entender qué tipo de
              propiedad, zona y presupuesto tienen sentido para ti antes de
              presentarte alternativas.
            </p>
          </div>
        </div>
      </section>

      <section className="premium-section bg-white/45">
        <div className="site-shell">
          <SectionHeading
            alignment="center"
            description="Registrar tu búsqueda ayuda a Laurel Realty a entender tus prioridades desde el primer contacto."
            title="¿Por qué registrar tu búsqueda?"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {benefits.map((benefit) => (
              <ServiceCard key={benefit.title} {...benefit} />
            ))}
          </div>
        </div>
      </section>

      <section className="premium-section">
        <div className="site-shell">
          <SectionHeading
            alignment="center"
            description="Cuéntanos el tipo de inmueble que necesitas y la zona que estás considerando."
            title="Podemos ayudarte si estás buscando"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {searchTypes.map((type) => (
              <article
                className="rounded-soft border border-laurel/10 bg-white/70 p-6 shadow-line"
                key={type.title}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/35 bg-ivory text-gold">
                  {type.icon}
                </div>
                <h2 className="mt-6 text-2xl leading-tight">{type.title}</h2>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="premium-section bg-white/45" id="busqueda">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeading
            description="Comparte tus preferencias principales para que podamos tenerlas en cuenta cuando se incorporen opciones compatibles."
            title="Dinos qué estás buscando"
          />
          <SearchClientForm />
        </div>
      </section>

      <section className="premium-section">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            description="Buscar una propiedad puede ser confuso cuando no sabes qué revisar, qué preguntar o cómo comparar opciones. Nuestro objetivo es ayudarte a tomar una decisión informada."
            title="Te ayudamos a buscar con más claridad"
          />
          <div className="surface-panel p-6 sm:p-8">
            <ul className="grid gap-4 sm:grid-cols-2">
              {educationPoints.map((point) => (
                <li className="flex items-start gap-3 text-sm text-deepBlue/74" key={point}>
                  <CheckCircle2
                    aria-hidden
                    className="mt-0.5 h-5 w-5 shrink-0 text-gold"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="premium-section-compact bg-laurel text-ivory">
        <div className="site-shell">
          <div className="grid gap-8 rounded-soft border border-gold/25 p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase text-gold">
                Para propietarios
              </p>
              <h2 className="mt-3 text-3xl leading-tight text-ivory sm:text-4xl">
                ¿Tienes una propiedad disponible?
              </h2>
              <p className="mt-4 text-sm text-ivory/74 sm:text-base">
                Estamos construyendo nuestro catálogo. Si tienes una propiedad
                para vender o rentar en Cancún o Riviera Maya, podemos ayudarte
                a publicarla.
              </p>
            </div>
            <Button href="/propietarios" variant="secondary">
              Publicar mi propiedad
            </Button>
          </div>
        </div>
      </section>

      <section className="premium-section bg-white/45">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeading
            description="Respuestas iniciales para registrar tu búsqueda y recibir orientación cuando haya opciones compatibles."
            title="Preguntas frecuentes"
          />
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTASection
        description="Cuéntanos qué buscas y mantendremos tu solicitud en cuenta para próximas propiedades."
        primaryHref="#busqueda"
        primaryLabel="Enviar mi búsqueda"
        secondaryHref={whatsappHref}
        secondaryLabel="Hablar por WhatsApp"
        title="Déjanos ayudarte a encontrar una mejor opción"
      />
    </>
  );
}

