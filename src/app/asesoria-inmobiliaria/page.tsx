import type { Metadata } from "next";
import {
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Handshake,
  Home,
  KeyRound,
  Megaphone,
  MessageSquareText,
  Search,
  SearchCheck,
  ShieldCheck,
  UserRound
} from "lucide-react";
import { AdvisoryForm } from "@/components/forms/AdvisoryForm";
import { JsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { CTASection } from "@/components/sections/CTASection";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { PageHero } from "@/components/sections/PageHero";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { whatsappHref } from "@/lib/constants";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute:
      "Asesoría inmobiliaria en Cancún y Riviera Maya | Laurel Realty"
  },
  description:
    "Recibe asesoría inmobiliaria inicial gratuita para vender, rentar, buscar o administrar propiedades en Cancún y Riviera Maya.",
  alternates: {
    canonical: absoluteUrl("/asesoria")
  },
  openGraph: {
    title: "Asesoría inmobiliaria en Cancún y Riviera Maya | Laurel Realty",
    description:
      "Asesoría inmobiliaria para vender, rentar, buscar o administrar propiedades en Cancún y Riviera Maya.",
    url: absoluteUrl("/asesoria"),
    type: "website"
  }
};

const services = [
  {
    title: "Venta de propiedades",
    description:
      "Orientación para preparar, promocionar y avanzar en un proceso de venta más claro.",
    icon: <Home aria-hidden size={21} />
  },
  {
    title: "Renta de propiedades",
    description:
      "Apoyo para propietarios que desean rentar con mayor orden y filtro inicial.",
    icon: <KeyRound aria-hidden size={21} />
  },
  {
    title: "Captación de propiedades",
    description:
      "Recepción y organización de información para incorporar inmuebles a la gestión.",
    icon: <Building2 aria-hidden size={21} />
  },
  {
    title: "Valoración inicial",
    description:
      "Revisión de datos básicos para entender el punto de partida de una propiedad.",
    icon: <ClipboardCheck aria-hidden size={21} />
  },
  {
    title: "Promoción de inmuebles",
    description:
      "Comunicación profesional para presentar mejor los atributos de una propiedad.",
    icon: <Megaphone aria-hidden size={21} />
  },
  {
    title: "Filtro de interesados",
    description:
      "Atención inicial y revisión de compatibilidad antes de avanzar con visitas.",
    icon: <SearchCheck aria-hidden size={21} />
  },
  {
    title: "Coordinación de visitas",
    description:
      "Organización de horarios, seguimiento y comunicación con mayor claridad.",
    icon: <MessageSquareText aria-hidden size={21} />
  },
  {
    title: "Asesoría documental básica",
    description:
      "Orientación inicial sobre documentos, condiciones y dudas frecuentes.",
    icon: <FileText aria-hidden size={21} />
  },
  {
    title: "Asesoría para compradores",
    description:
      "Apoyo para ordenar prioridades, presupuesto, zona y puntos a revisar.",
    icon: <Search aria-hidden size={21} />
  },
  {
    title: "Asesoría para inquilinos",
    description:
      "Acompañamiento para identificar condiciones, requisitos y señales importantes.",
    icon: <UserRound aria-hidden size={21} />
  },
  {
    title: "Administración de rentas",
    description:
      "Gestión y seguimiento para propietarios que buscan mayor orden en sus rentas.",
    icon: <ShieldCheck aria-hidden size={21} />
  }
];

const audiences = [
  {
    title: "Para propietarios",
    description:
      "Si tienes una propiedad, te ayudamos a definir si conviene vender, rentar, mejorar su presentación o preparar una estrategia."
  },
  {
    title: "Para compradores",
    description:
      "Si quieres comprar, te ayudamos a ordenar tus prioridades y entender qué revisar antes de avanzar."
  },
  {
    title: "Para inquilinos",
    description:
      "Si buscas rentar, podemos ayudarte a identificar opciones, condiciones y puntos clave antes de decidir."
  },
  {
    title: "Para quienes tienen dudas",
    description:
      "Si no sabes por dónde empezar, podemos orientarte con una asesoría inicial gratuita."
  }
];

const methodSteps = [
  {
    title: "Entendemos tu situación",
    description:
      "Escuchamos tu contexto, objetivo y dudas principales antes de proponer una ruta."
  },
  {
    title: "Identificamos riesgos y oportunidades",
    description:
      "Revisamos los puntos que conviene aclarar para avanzar con mayor seguridad."
  },
  {
    title: "Te explicamos tus opciones",
    description:
      "Ordenamos alternativas de venta, renta, búsqueda o administración según tu caso."
  },
  {
    title: "Definimos los próximos pasos",
    description:
      "Planteamos una ruta práctica y clara para que sepas cómo continuar."
  },
  {
    title: "Te acompañamos durante el proceso",
    description:
      "Mantenemos comunicación y seguimiento conforme avance tu operación inmobiliaria."
  }
];

const values = [
  "Transparencia",
  "Orden",
  "Comunicación",
  "Responsabilidad",
  "Acompañamiento",
  "Prestigio"
];

const faqs = [
  {
    question: "¿Puedo pedir asesoría aunque no esté listo para vender o rentar?",
    answer:
      "Sí. La asesoría inicial sirve justamente para entender opciones y aclarar dudas antes de tomar una decisión."
  },
  {
    question: "¿Me pueden ayudar a decidir si vendo o rento?",
    answer:
      "Sí. Podemos revisar tu contexto, objetivos y características de la propiedad para comparar ambas rutas."
  },
  {
    question: "¿También asesoran a compradores e inquilinos?",
    answer:
      "Sí. Laurel Realty orienta a propietarios, compradores, inquilinos y personas que buscan opciones de renta o compra."
  },
  {
    question: "¿La asesoría inicial tiene costo?",
    answer:
      "La asesoría inicial es gratuita y permite identificar el punto de partida de tu solicitud."
  },
  {
    question: "¿Atienden de forma digital o presencial?",
    answer:
      "La atención inicial es digital. También se pueden coordinar citas previas cuando el caso lo requiera."
  }
];

function AdvisoryHeroVisual() {
  return (
    <div className="surface-panel overflow-hidden p-3 lg:ml-auto lg:max-w-[520px]">
      <div className="relative h-[420px] overflow-hidden rounded-[0.35rem] bg-laurel sm:h-[480px] lg:h-[500px]">
        <div className="absolute inset-6 border border-gold/35" />
        <div className="absolute left-10 top-12 h-40 w-px bg-gold/28" />
        <div className="absolute left-10 right-10 top-28 h-px bg-gold/25" />
        <div className="absolute right-12 top-16 h-28 w-28 border border-gold/20" />
        <div className="absolute bottom-28 left-10 right-10 grid grid-cols-3 gap-4">
          <span className="h-24 border border-ivory/20 bg-ivory/8" />
          <span className="h-32 border border-ivory/20 bg-ivory/10" />
          <span className="h-20 border border-ivory/20 bg-ivory/8" />
        </div>
        <div className="absolute bottom-8 left-8 right-8 border-t border-gold/40 pt-5">
          <p className="font-display text-3xl text-ivory">
            Asesoría con claridad
          </p>
          <p className="mt-3 text-sm text-ivory/70">
            Información, criterio y acompañamiento para decidir mejor.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function AsesoriaInmobiliariaPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", url: absoluteUrl("/") },
          { name: "Asesoría", url: absoluteUrl("/asesoria") }
        ])}
      />
      <PageHero
        eyebrow="Asesoría inmobiliaria"
        primaryCTA={{ label: "Solicitar asesoría gratuita", href: "#asesoria" }}
        secondaryCTA={{ label: "Hablar por WhatsApp", href: whatsappHref }}
        subtitle="En Laurel Realty te orientamos en procesos de venta, renta, búsqueda, publicación y administración de propiedades para que avances con claridad y confianza."
        title="Asesoría inmobiliaria para tomar decisiones con mayor seguridad"
        visual={<AdvisoryHeroVisual />}
      />

      <section className="premium-section">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <SectionHeading
            description="Comprar, vender o rentar una propiedad implica decisiones importantes. Nuestro trabajo es ayudarte a entender tus opciones, reducir riesgos y elegir el camino más adecuado."
            title="Una buena decisión inmobiliaria necesita información clara"
          />
          <div className="quiet-panel p-7 sm:p-9">
            <Handshake aria-hidden className="h-8 w-8 text-gold" />
            <p className="mt-5 text-base leading-8 text-deepBlue/72">
              La asesoría inicial permite ordenar prioridades, identificar
              dudas y definir qué información necesitas antes de avanzar.
            </p>
          </div>
        </div>
      </section>

      <section className="premium-section bg-white/45">
        <div className="site-shell">
          <SectionHeading
            alignment="center"
            description="Servicios de asesoría y gestión inmobiliaria para distintos escenarios en Cancún y Riviera Maya."
            title="¿En qué podemos ayudarte?"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="premium-section">
        <div className="site-shell">
          <SectionHeading
            alignment="center"
            description="Cada persona llega con una necesidad distinta. La asesoría se adapta al momento en el que estás."
            title="Asesoría para cada etapa"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {audiences.map((audience) => (
              <article
                className="rounded-soft border border-laurel/10 bg-white/70 p-6 shadow-line"
                key={audience.title}
              >
                <h2 className="text-2xl leading-tight">{audience.title}</h2>
                <p className="mt-4 text-sm text-deepBlue/70">
                  {audience.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="premium-section bg-laurel text-ivory">
        <div className="site-shell">
          <SectionHeading
            alignment="center"
            description="Un método sencillo para entender tu caso y convertir dudas en próximos pasos claros."
            title="Nuestro método de trabajo"
            className="[&_*]:text-ivory [&_.eyebrow]:text-gold"
          />
          <ProcessSteps className="mt-12" steps={methodSteps} />
        </div>
      </section>

      <section className="premium-section">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            description="No creemos en empujar decisiones apresuradas. Creemos en explicar, acompañar y ayudarte a avanzar cuando tengas información suficiente."
            title="Claridad antes que presión"
          />
          <div className="surface-panel p-6 sm:p-8">
            <ul className="grid gap-4 sm:grid-cols-2">
              {values.map((value) => (
                <li className="flex items-start gap-3 text-sm text-deepBlue/74" key={value}>
                  <CheckCircle2
                    aria-hidden
                    className="mt-0.5 h-5 w-5 shrink-0 text-gold"
                  />
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="premium-section bg-white/45" id="asesoria">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeading
            description="Cuéntanos qué necesitas y te contactaremos para orientarte con claridad."
            title="Solicita asesoría inmobiliaria gratuita"
          />
          <AdvisoryForm />
        </div>
      </section>

      <section className="premium-section">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeading
            description="Respuestas iniciales para saber cómo puede ayudarte Laurel Realty."
            title="Preguntas frecuentes"
          />
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTASection
        description="Cuéntanos tu situación y te ayudaremos a entender cuál puede ser el mejor siguiente paso."
        primaryHref="#asesoria"
        primaryLabel="Solicitar asesoría gratuita"
        secondaryHref={whatsappHref}
        secondaryLabel="Hablar por WhatsApp"
        title="Empieza con una conversación clara"
      />
    </>
  );
}
