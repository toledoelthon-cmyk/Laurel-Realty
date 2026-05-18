import type { Metadata } from "next";
import {
  AlertCircle,
  Building2,
  CalendarCheck,
  ClipboardCheck,
  FileText,
  Home,
  KeyRound,
  Megaphone,
  MessageSquareText,
  SearchCheck,
  ShieldCheck,
  Store,
  Warehouse
} from "lucide-react";
import { RentPropertyForm } from "@/components/forms/RentPropertyForm";
import { CTASection } from "@/components/sections/CTASection";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { PageHero } from "@/components/sections/PageHero";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { whatsappHref } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    absolute: "Rentar mi propiedad en Cancún y Riviera Maya | Laurel Realty"
  },
  description:
    "Renta tu propiedad con Laurel Realty. Promoción, filtro de interesados, coordinación de visitas, asesoría básica y administración de rentas."
};

const ownerPains = [
  "Miedo a malos inquilinos",
  "Falta de tiempo para responder interesados",
  "Visitas desorganizadas",
  "Dudas con requisitos y documentación",
  "No saber cuánto cobrar de renta",
  "Riesgo de acuerdos poco claros",
  "Publicaciones que no atraen interesados adecuados"
];

const rentSupport = [
  {
    title: "Revisión de la propiedad",
    description:
      "Ordenamos la información clave del inmueble antes de iniciar la promoción.",
    icon: <Home aria-hidden size={21} />
  },
  {
    title: "Orientación sobre precio de renta",
    description:
      "Revisamos referencias y características para definir un punto de partida razonable.",
    icon: <KeyRound aria-hidden size={21} />
  },
  {
    title: "Preparación de publicación",
    description:
      "Cuidamos descripción, datos principales y forma de presentar la propiedad.",
    icon: <ClipboardCheck aria-hidden size={21} />
  },
  {
    title: "Promoción en canales adecuados",
    description:
      "Comunicamos el inmueble de forma profesional para atraer prospectos compatibles.",
    icon: <Megaphone aria-hidden size={21} />
  },
  {
    title: "Atención a interesados",
    description:
      "Damos seguimiento inicial a consultas para mantener una comunicación ordenada.",
    icon: <MessageSquareText aria-hidden size={21} />
  },
  {
    title: "Filtro inicial de prospectos",
    description:
      "Ayudamos a identificar perfiles más adecuados antes de avanzar con visitas.",
    icon: <SearchCheck aria-hidden size={21} />
  },
  {
    title: "Coordinación de visitas",
    description:
      "Organizamos horarios, disponibilidad y seguimiento para cuidar tu tiempo.",
    icon: <CalendarCheck aria-hidden size={21} />
  },
  {
    title: "Asesoría documental básica",
    description:
      "Orientación inicial sobre requisitos, condiciones y documentación común.",
    icon: <FileText aria-hidden size={21} />
  },
  {
    title: "Administración de rentas",
    description:
      "Apoyo para propietarios que buscan un seguimiento más ordenado de su renta.",
    icon: <Building2 aria-hidden size={21} />
  },
  {
    title: "Acompañamiento durante el proceso",
    description:
      "Te orientamos desde la preparación hasta formalizar la operación.",
    icon: <ShieldCheck aria-hidden size={21} />
  }
];

const processSteps = [
  {
    title: "Nos compartes los datos de tu propiedad",
    description:
      "Reunimos tipo de inmueble, ubicación, estado y disponibilidad."
  },
  {
    title: "Revisamos características, zona y objetivo de renta",
    description:
      "Entendemos el contexto para orientar mejor precio, requisitos y promoción."
  },
  {
    title: "Definimos una estrategia de publicación",
    description:
      "Preparamos la forma de presentar la propiedad y el perfil deseado."
  },
  {
    title: "Atendemos y filtramos interesados",
    description:
      "Damos seguimiento inicial y priorizamos prospectos con mayor compatibilidad."
  },
  {
    title: "Coordinamos visitas",
    description:
      "Organizamos horarios, comunicación y próximos pasos con orden."
  },
  {
    title: "Te acompañamos hasta formalizar la operación",
    description:
      "Avanzamos con claridad en requisitos, condiciones y seguimiento."
  }
];

const trustItems = [
  "Filtro de interesados",
  "Comunicación ordenada",
  "Claridad en requisitos",
  "Acompañamiento profesional",
  "Administración de rentas"
];

const propertyTypes = [
  { title: "Casas", icon: <Home aria-hidden size={21} /> },
  { title: "Apartamentos", icon: <Building2 aria-hidden size={21} /> },
  { title: "Locales comerciales", icon: <Store aria-hidden size={21} /> },
  { title: "Oficinas", icon: <ClipboardCheck aria-hidden size={21} /> },
  { title: "Terrenos", icon: <Warehouse aria-hidden size={21} /> },
  { title: "Otros inmuebles", icon: <KeyRound aria-hidden size={21} /> }
];

const faqs = [
  {
    question: "¿Puedo contactarlos si aún no sé cuánto pedir de renta?",
    answer:
      "Sí. Podemos orientarte con una revisión inicial de la propiedad, zona y características para definir un punto de partida."
  },
  {
    question: "¿Me ayudan a filtrar interesados?",
    answer:
      "Sí. Laurel Realty ayuda con atención inicial y filtro de prospectos antes de avanzar con visitas o acuerdos."
  },
  {
    question: "¿Puedo publicar si la propiedad estará disponible próximamente?",
    answer:
      "Sí. Podemos preparar la información y orientar la estrategia según la fecha estimada de disponibilidad."
  },
  {
    question: "¿También administran rentas?",
    answer:
      "Sí. Ofrecemos administración de rentas para propietarios que buscan seguimiento y comunicación más ordenada."
  },
  {
    question: "¿La asesoría inicial es gratuita?",
    answer:
      "Sí. La asesoría inicial es gratuita y sirve para conocer tu propiedad, dudas y objetivo de renta."
  }
];

function RentHeroVisual() {
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
          <p className="font-display text-3xl text-ivory">Renta profesional</p>
          <p className="mt-3 text-sm text-ivory/70">
            Promoción, filtro y coordinación para un proceso más claro.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function QuieroRentarMiPropiedadPage() {
  return (
    <>
      <PageHero
        eyebrow="Renta de propiedades"
        primaryCTA={{
          label: "Quiero rentar mi propiedad",
          href: "#formulario"
        }}
        secondaryCTA={{ label: "Hablar con Vicky por WhatsApp", href: whatsappHref }}
        subtitle="En Laurel Realty te ayudamos a promocionar tu propiedad, filtrar interesados y llevar un proceso de renta más claro y ordenado."
        title="Renta tu propiedad con mayor seguridad y acompañamiento profesional"
        visual={<RentHeroVisual />}
      />

      <section className="premium-section bg-white/45">
        <div className="site-shell">
          <SectionHeading
            alignment="center"
            description="Rentar implica cuidar el perfil del interesado, los tiempos, la comunicación y las condiciones desde el inicio."
            title="Rentar una propiedad también requiere cuidado"
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {ownerPains.map((pain) => (
              <article
                className="rounded-soft border border-laurel/10 bg-white/70 p-5 shadow-line"
                key={pain}
              >
                <AlertCircle aria-hidden className="h-5 w-5 text-gold" />
                <h2 className="mt-4 font-sans text-base font-semibold leading-snug text-laurel">
                  {pain}
                </h2>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="premium-section">
        <div className="site-shell">
          <SectionHeading
            alignment="center"
            description="Te apoyamos para presentar mejor tu inmueble, atender interesados y avanzar con más claridad."
            title="Te ayudamos a rentar con un proceso más ordenado"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {rentSupport.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="premium-section bg-laurel text-ivory">
        <div className="site-shell">
          <SectionHeading
            alignment="center"
            description="Una ruta sencilla para pasar de la intención de rentar a una operación mejor acompañada."
            title="Así funciona el proceso"
            className="[&_*]:text-ivory [&_.eyebrow]:text-gold"
          />
          <ProcessSteps className="mt-12 lg:grid-cols-3" steps={processSteps} />
        </div>
      </section>

      <section className="premium-section">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            description="Una buena renta no consiste solo en encontrar a alguien rápido. Consiste en encontrar un perfil adecuado, cuidar la comunicación y establecer condiciones claras desde el inicio."
            title="Menos improvisación, más claridad"
          />
          <div className="surface-panel p-6 sm:p-8">
            <ul className="grid gap-4 sm:grid-cols-2">
              {trustItems.map((item) => (
                <li className="flex items-start gap-3 text-sm text-deepBlue/74" key={item}>
                  <ShieldCheck
                    aria-hidden
                    className="mt-0.5 h-5 w-5 shrink-0 text-gold"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="premium-section bg-white/45">
        <div className="site-shell">
          <SectionHeading
            alignment="center"
            description="Laurel Realty puede orientarte en la renta de diferentes tipos de inmuebles en Cancún y Riviera Maya."
            title="Podemos ayudarte con diferentes tipos de inmuebles"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {propertyTypes.map((type) => (
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

      <section className="premium-section" id="formulario">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeading
            description="Comparte la información inicial de tu inmueble y te contactaremos para orientarte sobre el proceso de renta."
            title="Cuéntanos sobre la propiedad que quieres rentar"
          />
          <RentPropertyForm />
        </div>
      </section>

      <section className="premium-section bg-white/45">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeading
            description="Respuestas iniciales para propietarios que quieren rentar con más orden y claridad."
            title="Preguntas frecuentes"
          />
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTASection
        description="Te ayudamos a presentar tu inmueble, atraer interesados adecuados y avanzar con mayor confianza."
        primaryHref="#formulario"
        primaryLabel="Quiero rentar mi propiedad"
        secondaryHref={whatsappHref}
        secondaryLabel="Hablar por WhatsApp"
        title="Renta tu propiedad con un proceso más claro"
      />
    </>
  );
}
