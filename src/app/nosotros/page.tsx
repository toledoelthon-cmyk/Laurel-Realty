import type { Metadata } from "next";
import {
  CheckCircle2,
  HeartHandshake,
  MapPin,
  MessageCircle,
  ShieldCheck,
  UserRound
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { TestimonialPlaceholder } from "@/components/sections/TestimonialPlaceholder";
import { whatsappHref } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    absolute: "Nosotros | Laurel Realty"
  },
  description:
    "Conoce Laurel Realty, firma de asesoría y gestión inmobiliaria en Cancún y Riviera Maya enfocada en confianza, claridad y patrimonio."
};

const values = [
  "Confianza",
  "Claridad",
  "Acompañamiento",
  "Responsabilidad",
  "Comunicación",
  "Profesionalismo",
  "Prestigio",
  "Cuidado del patrimonio"
];

const workSteps = [
  {
    title: "Escuchamos antes de recomendar",
    description:
      "Entendemos tu situación, tus dudas y el objetivo que quieres alcanzar."
  },
  {
    title: "Ordenamos la información",
    description:
      "Reunimos datos clave para convertir la incertidumbre en un punto de partida claro."
  },
  {
    title: "Explicamos opciones",
    description:
      "Te presentamos rutas posibles para que puedas comparar con mayor seguridad."
  },
  {
    title: "Definimos una ruta de acción",
    description:
      "Acordamos siguientes pasos realistas según tu propiedad, búsqueda o necesidad."
  },
  {
    title: "Cuidamos la comunicación hasta el cierre",
    description:
      "Mantenemos seguimiento profesional durante el avance del proceso inmobiliario."
  }
];

function AboutHeroVisual() {
  return (
    <div className="surface-panel overflow-hidden p-3 lg:ml-auto lg:max-w-[520px]">
      <div className="relative h-[420px] overflow-hidden rounded-[0.35rem] bg-laurel sm:h-[480px] lg:h-[500px]">
        <div className="absolute inset-6 border border-gold/35" />
        <div className="absolute left-10 top-14 h-40 w-px bg-gold/30" />
        <div className="absolute left-10 right-10 top-28 h-px bg-gold/25" />
        <div className="absolute right-12 top-16 h-28 w-28 border border-gold/20" />
        <div className="absolute bottom-28 left-10 right-10 grid grid-cols-3 gap-4">
          <span className="h-20 border border-ivory/20 bg-ivory/8" />
          <span className="h-32 border border-ivory/20 bg-ivory/10" />
          <span className="h-24 border border-ivory/20 bg-ivory/8" />
        </div>
        <div className="absolute bottom-8 left-8 right-8 border-t border-gold/40 pt-5">
          <p className="font-display text-3xl text-ivory">Laurel Realty</p>
          <p className="mt-3 text-sm text-ivory/70">
            Asesoría y gestión inmobiliaria con atención cercana y criterio
            profesional.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        eyebrow="Sobre Laurel Realty"
        primaryCTA={{ label: "Hablar con un asesor", href: whatsappHref }}
        subtitle="En Laurel Realty acompañamos a propietarios, compradores e interesados en renta con un proceso basado en confianza, comunicación y claridad."
        title="Una asesoría inmobiliaria cercana, clara y profesional"
        visual={<AboutHeroVisual />}
      />

      <section className="premium-section">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <SectionHeading
            description="Ayudar a las personas a tomar mejores decisiones inmobiliarias en Cancún y Riviera Maya, reduciendo dudas, ordenando el proceso y brindando acompañamiento profesional desde el primer contacto."
            title="Nuestro propósito"
          />
          <div className="quiet-panel p-7 sm:p-9">
            <HeartHandshake aria-hidden className="h-8 w-8 text-gold" />
            <p className="mt-5 text-base leading-8 text-deepBlue/72">
              Acompañamos procesos inmobiliarios con una mirada sobria:
              escuchar, ordenar, explicar y avanzar con cuidado.
            </p>
          </div>
        </div>
      </section>

      <section className="premium-section bg-white/45">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading
            description="Laurel Realty nace con una visión clara: ofrecer asesoría y gestión inmobiliaria con una experiencia personalizada, sobria y profesional, orientada a cuidar el patrimonio de cada cliente."
            title="Prestigio, confianza y patrimonio en el Caribe Mexicano"
          />
          <div className="surface-panel p-7 sm:p-9">
            <ShieldCheck aria-hidden className="h-8 w-8 text-gold" />
            <h2 className="mt-5 text-3xl leading-tight">
              Creemos en procesos claros, no en decisiones apresuradas
            </h2>
            <p className="mt-5 text-sm text-deepBlue/72 sm:text-base">
              El mundo inmobiliario puede generar incertidumbre. Por eso
              trabajamos con un enfoque transparente, explicando cada paso y
              ayudando a que propietarios e interesados avancen con mayor
              seguridad.
            </p>
          </div>
        </div>
      </section>

      <section className="premium-section">
        <div className="site-shell">
          <SectionHeading
            alignment="center"
            description="Principios que sostienen la forma en que asesoramos y gestionamos cada conversación inmobiliaria."
            title="Lo que guía nuestro trabajo"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                className="flex min-h-20 items-center gap-3 rounded-soft border border-gold/20 bg-white/70 px-4 py-3 text-sm font-semibold text-laurel shadow-line"
                key={value}
              >
                <CheckCircle2 aria-hidden className="h-5 w-5 shrink-0 text-gold" />
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="premium-section bg-laurel text-ivory">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <div className="rounded-soft border border-gold/30 bg-ivory/8 p-8 text-center">
            {/* Prepared for a future real professional photograph of Vicky Izquierdo. */}
            <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full border border-gold/35 bg-ivory/10 text-gold">
              <UserRound aria-hidden size={48} />
            </div>
            <p className="mt-5 text-sm text-ivory/62">
              Espacio preparado para fotografía profesional real.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase text-gold">
              Asesora principal
            </p>
            <h2 className="mt-3 text-4xl leading-tight text-ivory">
              Vicky Izquierdo
            </h2>
            <p className="mt-2 text-sm font-semibold text-ivory/70">
              Asesora inmobiliaria
            </p>
            <p className="mt-5 text-sm text-ivory/74 sm:text-base">
              Vicky Izquierdo representa la atención cercana y personalizada de
              Laurel Realty. Su enfoque está orientado a escuchar, orientar y
              acompañar a cada cliente con seriedad, respeto y claridad durante
              el proceso inmobiliario.
            </p>
            <Button
              className="mt-8"
              external
              href={whatsappHref}
              variant="secondary"
            >
              Hablar con Vicky por WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <section className="premium-section">
        <div className="site-shell">
          <SectionHeading
            alignment="center"
            description="Una forma de trabajo pensada para reducir dudas y mantener una conversación clara."
            title="Así acompañamos a nuestros clientes"
          />
          <ProcessSteps className="mt-12" steps={workSteps} />
        </div>
      </section>

      <section className="premium-section bg-white/45">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <SectionHeading
            description="Brindamos atención digital y con cita previa para clientes interesados en vender, rentar, comprar o buscar propiedades en Cancún, Playa del Carmen y distintas zonas de la Riviera Maya."
            title="Cancún, Playa del Carmen y Riviera Maya"
          />
          <div className="surface-panel p-7 sm:p-9">
            <MapPin aria-hidden className="h-8 w-8 text-gold" />
            <p className="mt-5 text-base leading-8 text-deepBlue/72">
              La atención se adapta a cada caso: una conversación inicial
              digital, seguimiento ordenado y citas previas cuando el proceso lo
              requiere.
            </p>
          </div>
        </div>
      </section>

      <TestimonialPlaceholder
        title="Experiencias que generan confianza"
        description="Próximamente compartiremos testimonios reales de propietarios y clientes acompañados por Laurel Realty."
      />

      <section className="premium-section-compact bg-white/45">
        <div className="site-shell">
          <div className="grid gap-8 rounded-soft border border-gold/20 bg-white/70 p-8 shadow-line sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <h2 className="text-3xl leading-tight sm:text-4xl">
                ¿Tienes una propiedad y no sabes por dónde empezar?
              </h2>
              <p className="mt-4 text-sm text-deepBlue/72 sm:text-base">
                Podemos ayudarte a entender tus opciones y definir el mejor
                camino para venderla o rentarla.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button href="/propietarios">Publicar mi propiedad</Button>
              <Button href="/asesoria" variant="outline">
                Solicitar asesoría gratuita
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        description="Ya sea que quieras vender, rentar, comprar o buscar una propiedad, estamos aquí para orientarte."
        primaryHref="/contacto"
        primaryLabel="Contactar ahora"
        secondaryHref={whatsappHref}
        secondaryLabel="Hablar por WhatsApp"
        title="Conversemos sobre tu objetivo inmobiliario"
      />
    </>
  );
}
