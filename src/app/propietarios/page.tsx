import type { Metadata } from "next";
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
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { PageHero } from "@/components/sections/PageHero";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { TrustBadges } from "@/components/sections/TrustBadges";
import { whatsappHref } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    absolute: "Publica tu propiedad con Laurel Realty | Cancún y Riviera Maya"
  },
  description:
    "Vende o renta tu propiedad en Cancún y Riviera Maya con asesoría, promoción, filtro de interesados y acompañamiento profesional."
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
    title: "Revisamos ubicación, características y objetivo",
    description:
      "Ordenamos la información para entender el contexto comercial de tu propiedad."
  },
  {
    title: "Definimos estrategia de venta o renta",
    description:
      "Trazamos una ruta clara según tus prioridades, tiempos y tipo de operación."
  },
  {
    title: "Preparamos la publicación",
    description:
      "Cuidamos la presentación, el mensaje y los elementos básicos para promocionarla."
  },
  {
    title: "Promocionamos el inmueble",
    description:
      "Activamos la comunicación de la propiedad con un enfoque profesional y sobrio."
  },
  {
    title: "Filtramos interesados",
    description:
      "Revisamos intención, necesidades y compatibilidad antes de avanzar."
  },
  {
    title: "Coordinamos visitas",
    description:
      "Organizamos tiempos y seguimiento para cuidar tu disponibilidad."
  },
  {
    title: "Te acompañamos en negociación y cierre",
    description:
      "Avanzamos con claridad, información y comunicación durante la etapa final."
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

function OwnerHeroVisual() {
  return (
    <div className="surface-panel overflow-hidden p-3 lg:ml-auto lg:max-w-[520px]">
      <div className="relative h-[420px] overflow-hidden rounded-[0.35rem] bg-laurel sm:h-[480px] lg:h-[500px]">
        <div className="absolute inset-6 border border-gold/35" />
        <div className="absolute left-10 top-10 h-32 w-px bg-gold/30" />
        <div className="absolute right-10 top-16 h-52 w-px bg-gold/20" />
        <div className="absolute left-10 right-10 top-24 h-px bg-gold/25" />
        <div className="absolute bottom-28 left-10 right-10 grid grid-cols-3 gap-4">
          <span className="h-24 border border-ivory/20 bg-ivory/8" />
          <span className="h-32 border border-ivory/20 bg-ivory/10" />
          <span className="h-20 border border-ivory/20 bg-ivory/8" />
        </div>
        <div className="absolute bottom-8 left-8 right-8 border-t border-gold/40 pt-5">
          <p className="font-display text-3xl text-ivory">Propietarios</p>
          <p className="mt-3 text-sm text-ivory/70">
            Preparación, promoción y gestión profesional para tu inmueble.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function PropietariosPage() {
  return (
    <>
      <PageHero
        eyebrow="Para propietarios"
        primaryCTA={{ label: "Solicitar asesoría gratuita", href: "#formulario" }}
        secondaryCTA={{ label: "Hablar por WhatsApp", href: whatsappHref }}
        subtitle="En Laurel Realty te ayudamos a preparar, promocionar y gestionar tu propiedad para conectar con interesados adecuados en Cancún y Riviera Maya."
        title="Renta o vende tu propiedad con una estrategia clara y acompañamiento profesional"
        trustItems={[
          "Asesoría inicial gratuita",
          "Atención digital",
          "Citas personalizadas",
          "Cancún y Riviera Maya"
        ]}
        visual={<OwnerHeroVisual />}
      />

      <section className="premium-section-compact">
        <div className="site-shell">
          <TrustBadges
            badges={[
              "Asesoría inicial gratuita",
              "Atención digital",
              "Citas personalizadas",
              "Cancún y Riviera Maya"
            ]}
            className="lg:grid-cols-4"
          />
        </div>
      </section>

      <section className="premium-section bg-white/45">
        <div className="site-shell">
          <SectionHeading
            alignment="center"
            description="Poner una propiedad en el mercado implica decisiones, tiempos, filtros y comunicación. Empezar con orden cambia la experiencia."
            title="Sabemos que poner una propiedad en el mercado puede generar dudas"
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {ownerProblems.map((problem) => (
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
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {appliedServices.map((service) => (
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
          <SectionHeading
            description="Completa este formulario y Vicky Izquierdo o el equipo de Laurel Realty te contactará para orientarte."
            title="Cuéntanos sobre tu propiedad"
          />
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
