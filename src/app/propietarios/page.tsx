import type { Metadata } from "next";
import Image from "next/image";
import {
  AlertCircle,
  ClipboardCheck,
  FileText,
  Handshake,
  Home,
  KeyRound,
  Megaphone,
  MessageSquareText,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  UserRoundCheck
} from "lucide-react";
import { PropertyOwnerForm } from "@/components/forms/PropertyOwnerForm";
import { JsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
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
    absolute: "Publica tu propiedad con Laurel Realty | Cancún y Riviera Maya"
  },
  description:
    "Vende o renta tu propiedad en Cancún y Riviera Maya con asesoría, promoción, filtro de interesados y acompañamiento profesional.",
  alternates: {
    canonical: absoluteUrl("/propietarios")
  },
  openGraph: {
    title: "Publica tu propiedad con Laurel Realty | Cancún y Riviera Maya",
    description:
      "Asesoría para propietarios que quieren vender o rentar inmuebles en Cancún y Riviera Maya.",
    url: absoluteUrl("/propietarios"),
    type: "website"
  }
};

const ownerProblems = [
  "No saber cuánto vale realmente la propiedad",
  "No saber si conviene vender o rentar",
  "Miedo a malos inquilinos",
  "Pérdida de tiempo mostrando la propiedad",
  "Interesados que no están calificados",
  "Dudas con documentos o condiciones",
  "No saber cómo promocionarla correctamente"
];

const appliedServices = [
  {
    title: "Valoración inicial",
    description:
      "Revisión de información clave para orientar el punto de partida de venta o renta.",
    icon: <ClipboardCheck aria-hidden size={21} />
  },
  {
    title: "Captación de propiedades",
    description:
      "Organizamos los datos necesarios para preparar tu inmueble de forma profesional.",
    icon: <Home aria-hidden size={21} />
  },
  {
    title: "Potencial comercial",
    description:
      "Analizamos características, ubicación y atributos relevantes para comunicar mejor su valor.",
    icon: <Sparkles aria-hidden size={21} />
  },
  {
    title: "Mejor presentación",
    description:
      "Te damos recomendaciones para que la propiedad se perciba clara, cuidada y confiable.",
    icon: <Megaphone aria-hidden size={21} />
  },
  {
    title: "Promoción de inmuebles",
    description:
      "Preparamos una comunicación sobria y enfocada para atraer interesados adecuados.",
    icon: <MessageSquareText aria-hidden size={21} />
  },
  {
    title: "Filtro de interesados",
    description:
      "Ayudamos a reducir ruido y priorizar conversaciones con mayor intención.",
    icon: <SearchCheck aria-hidden size={21} />
  },
  {
    title: "Coordinación de visitas",
    description:
      "Gestionamos horarios, seguimiento y comunicación para cuidar tu tiempo.",
    icon: <UserRoundCheck aria-hidden size={21} />
  },
  {
    title: "Asesoría documental básica",
    description:
      "Orientación inicial sobre documentos, condiciones y dudas comunes del proceso.",
    icon: <FileText aria-hidden size={21} />
  },
  {
    title: "Administración de rentas",
    description:
      "Apoyo para propietarios que buscan un manejo más ordenado de sus rentas.",
    icon: <KeyRound aria-hidden size={21} />
  },
  {
    title: "Seguimiento hasta el cierre",
    description:
      "Acompañamiento en negociación, próximos pasos y cierre de la operación.",
    icon: <Handshake aria-hidden size={21} />
  }
];

const processSteps = [
  {
    title: "Nos cuentas sobre tu propiedad",
    description: "Compartes tipo de inmueble, ubicación, estado y objetivo inicial."
  },
  {
    title: "Revisamos información y objetivo",
    description: "Ordenamos datos clave para entender el contexto comercial del inmueble."
  },
  {
    title: "Definimos estrategia",
    description: "Planteamos una ruta de venta o renta según tus tiempos y prioridades."
  },
  {
    title: "Preparamos y promocionamos",
    description: "Cuidamos presentación, mensaje y comunicación profesional de la propiedad."
  },
  {
    title: "Filtramos, coordinamos y acompañamos el cierre",
    description: "Damos seguimiento a interesados, visitas, negociación y próximos pasos."
  }
];

const values = [
  "Comunicación transparente",
  "Asesoría personalizada",
  "Proceso ordenado",
  "Enfoque en seguridad",
  "Gestión profesional"
];

const faqs = [
  {
    question: "¿Necesito saber el precio exacto antes de contactarlos?",
    answer:
      "No. Puedes contactarnos aunque solo tengas una idea inicial. La asesoría comienza revisando la información disponible y tus objetivos."
  },
  {
    question: "¿Puedo publicar una propiedad aunque todavía esté habitada?",
    answer:
      "Sí. Podemos orientarte sobre cómo manejar la presentación, coordinación de visitas y comunicación para cuidar el proceso."
  },
  {
    question: "¿Me ayudan si no sé si vender o rentar?",
    answer:
      "Sí. Revisamos tu contexto y te ayudamos a comparar ambas rutas para que tomes una decisión más clara."
  },
  {
    question: "¿La asesoría inicial tiene costo?",
    answer:
      "La asesoría inicial es gratuita. Sirve para entender tu propiedad, tu objetivo y los siguientes pasos posibles."
  },
  {
    question: "¿Qué información necesito para empezar?",
    answer:
      "Tipo de propiedad, ubicación, estado actual, tamaño aproximado, objetivo de venta o renta y cualquier detalle relevante que ya tengas."
  },
  {
    question: "¿También administran rentas?",
    answer:
      "Sí. Laurel Realty ofrece administración de rentas para propietarios que buscan un seguimiento más ordenado y profesional."
  }
];

export default function PropietariosPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", url: absoluteUrl("/") },
          { name: "Propietarios", url: absoluteUrl("/propietarios") }
        ])}
      />
      <PageHero
        eyebrow="Para propietarios"
        primaryCTA={{ label: "Solicitar asesoría gratuita", href: "#formulario" }}
        secondaryCTA={{ label: "Hablar por WhatsApp", href: whatsappHref }}
        subtitle="En Laurel Realty te ayudamos a preparar, promocionar y gestionar tu propiedad para conectar con interesados adecuados en Cancún y Riviera Maya."
        title="Renta o vende tu propiedad con una estrategia clara y acompañamiento profesional"
        image="/images/advisory/firma-documentos-02.webp"
        imageAlt="Gestión documental para propietarios en Cancún y Riviera Maya"
      />

      <section className="premium-section bg-white/45">
        <div className="site-shell">
          <SectionHeading
            alignment="center"
            description="Poner una propiedad en el mercado implica decisiones, tiempos, filtros y comunicación. Empezar con orden cambia la experiencia."
            title="Sabemos que poner una propiedad en el mercado puede generar dudas"
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {ownerProblems.slice(0, 6).map((problem) => (
              <article
                className="rounded-soft border border-laurel/10 bg-white/70 p-5 shadow-line"
                key={problem}
              >
                <AlertCircle aria-hidden className="h-5 w-5 text-gold" />
                <h2 className="mt-4 font-sans text-base font-semibold leading-snug text-laurel">
                  {problem}
                </h2>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-center text-base text-deepBlue/72">
            Nuestro trabajo es ayudarte a transformar esas dudas en un proceso
            más claro, ordenado y profesional.
          </p>
        </div>
      </section>

      <section className="premium-section">
        <div className="site-shell">
          <SectionHeading
            alignment="center"
            description="Desde el primer contacto revisamos tu objetivo, tu propiedad y las acciones necesarias para presentarla mejor ante el mercado."
            title="Te acompañamos desde la primera valoración hasta el cierre"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {appliedServices.slice(0, 6).map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="premium-section bg-laurel text-ivory">
        <div className="site-shell">
          <SectionHeading
            alignment="center"
            description="Podemos ayudarte a elegir el camino adecuado y preparar la estrategia según tu objetivo."
            title="¿Qué quieres hacer con tu propiedad?"
            className="[&_*]:text-ivory [&_.eyebrow]:text-gold"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <ServiceCard
              className="bg-ivory text-deepBlue"
              ctaLabel="Vender mi propiedad"
              description="Diseñamos una estrategia para presentar tu propiedad, atraer compradores adecuados y negociar con mayor claridad."
              href="/vender"
              icon={<Home aria-hidden size={21} />}
              title="Quiero vender"
            />
            <ServiceCard
              className="bg-ivory text-deepBlue"
              ctaLabel="Rentar mi propiedad"
              description="Te ayudamos a encontrar interesados adecuados, reducir riesgos y llevar un proceso de renta más ordenado."
              href="/rentar-mi-propiedad"
              icon={<KeyRound aria-hidden size={21} />}
              title="Quiero rentar"
            />
          </div>
        </div>
      </section>

      <section className="premium-section">
        <div className="site-shell">
          <SectionHeading
            alignment="center"
            description="Un proceso estructurado ayuda a cuidar tu tiempo, tu información y la forma en que tu inmueble se presenta."
            title="Así trabajamos contigo"
          />
          <ProcessSteps className="mt-12 lg:grid-cols-4" steps={processSteps} />
        </div>
      </section>

      <section className="premium-section bg-white/45">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            description="Una operación inmobiliaria no se trata solo de encontrar interesados. Se trata de cuidar tu patrimonio, comunicar bien el valor de tu inmueble y avanzar con información clara."
            title="Más que publicar una propiedad, te damos acompañamiento"
          />
          <div className="surface-panel p-6 sm:p-8">
            <ul className="grid gap-4 sm:grid-cols-2">
              {values.map((value) => (
                <li className="flex items-start gap-3 text-sm text-deepBlue/74" key={value}>
                  <ShieldCheck
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

      <section className="premium-section" id="formulario">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <SectionHeading
              description="Completa este formulario y Vicky Izquierdo o el equipo de Laurel Realty te contactará para orientarte."
              title="Cuéntanos sobre tu propiedad"
            />
            <div className="relative mt-8 h-56 overflow-hidden rounded-soft border border-gold/20 shadow-line">
              <Image
                alt="Gestión documental para operación inmobiliaria segura"
                className="object-cover"
                fill
                sizes="(min-width: 1024px) 32vw, 100vw"
                src="/images/advisory/firma-documentos-02.webp"
              />
            </div>
          </div>
          <PropertyOwnerForm />
        </div>
      </section>

      <section className="premium-section bg-white/45">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeading
            description="Respuestas iniciales para propietarios que quieren vender, rentar o evaluar ambas opciones con más claridad."
            title="Preguntas frecuentes"
          />
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTASection
        description="Permite que Laurel Realty te ayude a presentarla de forma profesional y encontrar el camino adecuado para venderla o rentarla."
        primaryHref="#formulario"
        primaryLabel="Solicitar asesoría gratuita"
        secondaryHref={whatsappHref}
        secondaryLabel="Hablar por WhatsApp"
        title="Tu propiedad puede ser el inicio de una nueva oportunidad"
      />
    </>
  );
}




