import type { Metadata } from "next";
import {
  AlertCircle,
  Camera,
  ClipboardCheck,
  FileText,
  Handshake,
  Home,
  Megaphone,
  MessageSquareText,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  TrendingUp
} from "lucide-react";
import { SellPropertyForm } from "@/components/forms/SellPropertyForm";
import { CTASection } from "@/components/sections/CTASection";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { PageHero } from "@/components/sections/PageHero";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { whatsappHref } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    absolute: "Vender mi propiedad en Cancún y Riviera Maya | Laurel Realty"
  },
  description:
    "Vende tu propiedad con Laurel Realty. Recibe valoración inicial gratuita, promoción profesional y acompañamiento inmobiliario en Cancún y Riviera Maya."
};

const commonMistakes = [
  "Publicar sin conocer el valor de mercado",
  "Usar fotos poco atractivas",
  "No filtrar compradores",
  "Aceptar negociaciones sin información",
  "No tener claridad documental",
  "Perder tiempo con curiosos",
  "Comunicar mal los beneficios de la propiedad"
];

const salesSupport = [
  {
    title: "Valoración inicial gratuita",
    description:
      "Revisamos información clave para orientar el valor inicial y el punto de partida comercial.",
    icon: <TrendingUp aria-hidden size={21} />
  },
  {
    title: "Revisión de la propiedad",
    description:
      "Analizamos ubicación, características, estado actual y elementos relevantes para la venta.",
    icon: <Home aria-hidden size={21} />
  },
  {
    title: "Mejor presentación",
    description:
      "Te damos recomendaciones para mejorar cómo se percibe la propiedad antes de publicarla.",
    icon: <Sparkles aria-hidden size={21} />
  },
  {
    title: "Promoción de inmuebles",
    description:
      "Preparamos una comunicación profesional para mostrar beneficios sin exagerar ni improvisar.",
    icon: <Megaphone aria-hidden size={21} />
  },
  {
    title: "Filtro de compradores interesados",
    description:
      "Priorizamos conversaciones con compradores que tienen intención y necesidades compatibles.",
    icon: <SearchCheck aria-hidden size={21} />
  },
  {
    title: "Coordinación de visitas",
    description:
      "Organizamos tiempos, seguimiento y comunicación para cuidar tu disponibilidad.",
    icon: <ClipboardCheck aria-hidden size={21} />
  },
  {
    title: "Apoyo en negociación",
    description:
      "Acompañamos la conversación comercial para avanzar con más claridad y mejor información.",
    icon: <Handshake aria-hidden size={21} />
  },
  {
    title: "Asesoría documental básica",
    description:
      "Orientación inicial sobre documentos, condiciones y dudas comunes antes de avanzar.",
    icon: <FileText aria-hidden size={21} />
  },
  {
    title: "Acompañamiento hasta el cierre",
    description:
      "Seguimiento profesional durante los siguientes pasos de la operación inmobiliaria.",
    icon: <MessageSquareText aria-hidden size={21} />
  }
];

const saleSteps = [
  {
    title: "Evaluamos tu objetivo",
    description: "Entendemos tus tiempos, expectativas y razón principal para vender."
  },
  {
    title: "Revisamos la propiedad",
    description:
      "Analizamos ubicación, estado, características y puntos fuertes del inmueble."
  },
  {
    title: "Definimos precio y estrategia",
    description:
      "Planteamos una ruta comercial clara antes de publicar o negociar."
  },
  {
    title: "Preparamos la publicación",
    description:
      "Ordenamos información, presentación y mensajes principales de la propiedad."
  },
  {
    title: "Promocionamos el inmueble",
    description:
      "Activamos la comunicación con un enfoque profesional y alineado al mercado."
  },
  {
    title: "Filtramos compradores",
    description:
      "Revisamos intención, compatibilidad y datos básicos antes de coordinar avances."
  },
  {
    title: "Coordinamos visitas",
    description:
      "Gestionamos horarios y seguimiento para evitar pérdida de tiempo."
  },
  {
    title: "Acompañamos negociación y cierre",
    description:
      "Te orientamos durante la negociación y los siguientes pasos de la venta."
  }
];

const faqs = [
  {
    question: "¿Puedo vender si todavía vivo en la propiedad?",
    answer:
      "Sí. Podemos orientar la presentación y la coordinación de visitas para cuidar tu privacidad, tus tiempos y el proceso."
  },
  {
    question: "¿Qué pasa si no sé cuánto vale?",
    answer:
      "No necesitas saberlo antes de contactarnos. La valoración inicial ayuda a revisar información y definir un punto de partida."
  },
  {
    question: "¿Me ayudan a preparar la propiedad antes de publicarla?",
    answer:
      "Sí. Te damos recomendaciones para mejorar la presentación y comunicar mejor los atributos de la propiedad."
  },
  {
    question: "¿La valoración inicial tiene costo?",
    answer:
      "La valoración inicial es gratuita y sirve para conocer tu objetivo, la propiedad y los siguientes pasos posibles."
  },
  {
    question: "¿Puedo recibir orientación aunque todavía no esté listo para vender?",
    answer:
      "Sí. Puedes solicitar orientación inicial para entender alternativas, tiempos y preparación antes de tomar una decisión."
  }
];

function SellHeroVisual() {
  return (
    <div className="surface-panel overflow-hidden p-3 lg:ml-auto lg:max-w-[520px]">
      <div className="relative h-[420px] overflow-hidden rounded-[0.35rem] bg-laurel sm:h-[480px] lg:h-[500px]">
        <div className="absolute inset-6 border border-gold/35" />
        <div className="absolute left-10 top-10 h-28 w-px bg-gold/30" />
        <div className="absolute left-10 right-10 top-24 h-px bg-gold/25" />
        <div className="absolute right-12 top-16 h-32 w-32 border border-gold/20" />
        <div className="absolute bottom-28 left-10 right-10 grid grid-cols-3 gap-4">
          <span className="h-20 border border-ivory/20 bg-ivory/8" />
          <span className="h-32 border border-ivory/20 bg-ivory/10" />
          <span className="h-24 border border-ivory/20 bg-ivory/8" />
        </div>
        <div className="absolute bottom-8 left-8 right-8 border-t border-gold/40 pt-5">
          <p className="font-display text-3xl text-ivory">Venta estratégica</p>
          <p className="mt-3 text-sm text-ivory/70">
            Valoración, presentación y negociación con acompañamiento
            profesional.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function QuieroVenderPage() {
  return (
    <>
      <PageHero
        eyebrow="Venta de propiedades"
        primaryCTA={{ label: "Solicitar valoración gratuita", href: "#valoracion" }}
        secondaryCTA={{ label: "Hablar con Vicky por WhatsApp", href: whatsappHref }}
        subtitle="En Laurel Realty te ayudamos a valorar, preparar, promocionar y negociar tu propiedad para conectar con compradores adecuados."
        title="Vende tu propiedad con una estrategia clara y asesoría profesional"
        visual={<SellHeroVisual />}
      />

      <section className="premium-section">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <SectionHeading
            description="Una venta inmobiliaria no debe depender de la improvisación. Analizamos tu propiedad, su ubicación, características y objetivo para definir una ruta comercial clara."
            title="Vender bien empieza con una buena estrategia"
          />
          <div className="quiet-panel p-7 sm:p-9">
            <Camera aria-hidden className="h-8 w-8 text-gold" />
            <p className="mt-5 text-base leading-8 text-deepBlue/72">
              La presentación, el precio, la comunicación y el filtro de
              compradores influyen en la calidad del proceso. Laurel Realty te
              ayuda a ordenar cada pieza antes de salir al mercado.
            </p>
          </div>
        </div>
      </section>

      <section className="premium-section bg-white/45">
        <div className="site-shell">
          <SectionHeading
            alignment="center"
            description="Evitar estos puntos ayuda a cuidar el valor percibido de tu propiedad y a tomar mejores decisiones durante la venta."
            title="Errores comunes al vender una propiedad"
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {commonMistakes.map((mistake) => (
              <article
                className="rounded-soft border border-laurel/10 bg-white/70 p-5 shadow-line"
                key={mistake}
              >
                <AlertCircle aria-hidden className="h-5 w-5 text-gold" />
                <h2 className="mt-4 font-sans text-base font-semibold leading-snug text-laurel">
                  {mistake}
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
            description="Trabajamos contigo para preparar la propiedad, comunicar sus beneficios y avanzar con compradores mejor filtrados."
            title="Cómo te ayudamos a vender"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {salesSupport.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="premium-section bg-laurel text-ivory">
        <div className="site-shell">
          <SectionHeading
            alignment="center"
            description="Una ruta clara permite tomar mejores decisiones antes, durante y después de publicar."
            title="Nuestro proceso de venta"
            className="[&_*]:text-ivory [&_.eyebrow]:text-gold"
          />
          <ProcessSteps className="mt-12 lg:grid-cols-4" steps={saleSteps} />
        </div>
      </section>

      <section className="premium-section">
        <div className="site-shell">
          <div className="grid gap-8 rounded-soft border border-gold/20 bg-white/65 p-8 shadow-line sm:p-10 lg:grid-cols-[0.35fr_1fr] lg:items-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-gold/35 bg-ivory text-gold">
              <ShieldCheck aria-hidden size={32} />
            </div>
            <div>
              <h2 className="text-3xl leading-tight sm:text-4xl">
                Vender una propiedad es una decisión importante
              </h2>
              <p className="mt-5 text-sm text-deepBlue/72 sm:text-base">
                Sabemos que puede haber dudas, expectativas y presión por tomar
                la mejor decisión. Por eso te acompañamos con información
                clara, comunicación constante y una estrategia pensada para
                cuidar tu patrimonio.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="premium-section bg-white/45" id="valoracion">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeading
            description="Comparte la información inicial de tu inmueble y te contactaremos para orientarte sobre la venta de tu propiedad."
            title="Solicita una valoración inicial gratuita"
          />
          <SellPropertyForm />
        </div>
      </section>

      <section className="premium-section">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeading
            description="Preguntas frecuentes para propietarios que quieren vender con más claridad antes de publicar."
            title="Preguntas frecuentes"
          />
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTASection
        description="Antes de publicar, conoce el potencial de tu propiedad y la mejor forma de presentarla."
        primaryHref="#valoracion"
        primaryLabel="Solicitar valoración gratuita"
        secondaryHref={whatsappHref}
        secondaryLabel="Hablar por WhatsApp"
        title="Empieza con una valoración clara"
      />
    </>
  );
}
