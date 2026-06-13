import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  CalendarCheck,
  Home,
  KeyRound,
  Mail,
  MapPin,
  MessageCircle,
  Search,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { JsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { brand, whatsappHref } from "@/lib/constants";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute: "Contacto | Laurel Realty"
  },
  description:
    "Contacta a Laurel Realty para vender, rentar, buscar propiedad o recibir asesoría inmobiliaria gratuita en Cancún y Riviera Maya.",
  alternates: {
    canonical: absoluteUrl("/contacto")
  },
  openGraph: {
    title: "Contacto | Laurel Realty",
    description:
      "Contacta a Laurel Realty para asesoría inmobiliaria en Cancún y Riviera Maya.",
    url: absoluteUrl("/contacto"),
    type: "website"
  }
};

const contactOptions = [
  {
    title: "Tengo una propiedad para vender",
    description: "Solicita una valoración inicial gratuita.",
    ctaLabel: "Solicitar valoración",
    href: "/vender",
    icon: <Home aria-hidden size={21} />
  },
  {
    title: "Tengo una propiedad para rentar",
    description:
      "Recibe orientación para publicarla, promocionarla o administrarla.",
    ctaLabel: "Publicar mi propiedad",
    href: "/propietarios",
    icon: <KeyRound aria-hidden size={21} />
  },
  {
    title: "Estoy buscando propiedad",
    description: "Registra tu búsqueda para futuras opciones.",
    ctaLabel: "Enviar mi búsqueda",
    href: "/busco-propiedad",
    icon: <Search aria-hidden size={21} />
  },
  {
    title: "Necesito asesoría",
    description: "Conversemos sobre tu situación y próximos pasos.",
    ctaLabel: "Solicitar asesoría",
    href: "#formulario",
    icon: <Sparkles aria-hidden size={21} />
  }
];

const contactDetails = [
  {
    label: "WhatsApp",
    value: brand.whatsapp,
    href: whatsappHref,
    icon: <MessageCircle aria-hidden size={20} />
  },
  {
    label: "Correo",
    value: brand.email,
    href: `mailto:${brand.email}`,
    icon: <Mail aria-hidden size={20} />
  },
  {
    label: "Zona de servicio",
    value: "Cancún, Playa del Carmen y Riviera Maya",
    icon: <MapPin aria-hidden size={20} />
  },
  {
    label: "Atención",
    value: "Digital y con cita previa",
    icon: <CalendarCheck aria-hidden size={20} />
  },
  {
    label: "Asesoría inicial",
    value: "Gratuita",
    icon: <ShieldCheck aria-hidden size={20} />
  }
];

const faqs = [
  {
    question: "¿Puedo contactar aunque no esté listo para vender o rentar?",
    answer:
      "Sí. Puedes contactarnos para recibir orientación inicial, aclarar dudas y entender posibles siguientes pasos."
  },
  {
    question: "¿Atienden por WhatsApp?",
    answer:
      "Sí. WhatsApp es una vía directa para iniciar la conversación y coordinar seguimiento."
  },
  {
    question: "¿Puedo solicitar asesoría inicial gratuita?",
    answer:
      "Sí. La asesoría inicial es gratuita y sirve para entender tu situación inmobiliaria."
  },
  {
    question: "¿En qué zonas trabajan?",
    answer:
      "Laurel Realty trabaja en Cancún, Playa del Carmen y Riviera Maya."
  },
  {
    question: "¿Cuánto tardan en responder?",
    answer:
      "Te contactaremos lo antes posible según la disponibilidad de atención digital y con cita previa."
  },
  {
    question: "¿La atención es presencial o digital?",
    answer:
      "La atención inicial es digital. También se pueden coordinar citas previas cuando el caso lo requiera."
  }
];

function ContactHeroVisual() {
  return (
    <div className="surface-panel overflow-hidden p-3 lg:ml-auto lg:max-w-[520px]">
      <div className="relative h-[420px] overflow-hidden rounded-[0.35rem] bg-laurel sm:h-[480px] lg:h-[500px]">
        <div className="absolute inset-6 border border-gold/35" />
        <div className="absolute left-10 top-12 h-24 w-px bg-gold/30" />
        <div className="absolute right-10 top-20 h-40 w-px bg-gold/20" />
        <div className="absolute left-10 right-10 top-28 h-px bg-gold/25" />
        <div className="absolute bottom-32 left-10 right-10 grid grid-cols-2 gap-4">
          <span className="h-24 border border-ivory/20 bg-ivory/8" />
          <span className="h-32 border border-ivory/20 bg-ivory/10" />
        </div>
        <div className="absolute bottom-8 left-8 right-8 border-t border-gold/40 pt-5">
          <p className="font-display text-3xl text-ivory">Contacto directo</p>
          <p className="mt-3 text-sm text-ivory/70">
            Atención digital, orientación inicial y citas personalizadas.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ContactoPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", url: absoluteUrl("/") },
          { name: "Contacto", url: absoluteUrl("/contacto") }
        ])}
      />
      <PageHero
        eyebrow="Contacto"
        primaryCTA={{
          label: "Hablar por WhatsApp",
          href: whatsappHref
        }}
        secondaryCTA={{ label: "Enviar mensaje", href: "#formulario" }}
        subtitle="Ya sea que quieras vender, rentar, comprar, buscar o recibir asesoría, en Laurel Realty estamos listos para escucharte y orientarte."
        title="Conversemos sobre tu objetivo inmobiliario"
        visual={<ContactHeroVisual />}
      />

      <section className="premium-section bg-white/45">
        <div className="site-shell">
          <SectionHeading
            alignment="center"
            description="Puedes iniciar por el camino que mejor describe tu situación actual."
            title="Elige cómo quieres avanzar"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {contactOptions.map((option) => (
              <ServiceCard key={option.title} {...option} />
            ))}
          </div>
        </div>
      </section>

      <section className="premium-section" id="formulario">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeading
            description="Comparte tu situación y te contactaremos para orientarte con claridad."
            title="Envíanos un mensaje"
          />
          <ContactForm />
        </div>
      </section>

      <section className="premium-section bg-white/45">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeading
            description="Atención profesional para propietarios, compradores, interesados en renta y personas que necesitan asesoría inmobiliaria."
            title="Información de contacto"
          />
          <div className="surface-panel p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {contactDetails.map((detail) => {
                const content = (
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 text-gold">{detail.icon}</span>
                    <div>
                      <p className="text-xs font-semibold uppercase text-deepBlue/55">
                        {detail.label}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-laurel">
                        {detail.value}
                      </p>
                    </div>
                  </div>
                );

                return detail.href ? (
                  <a
                    className="rounded-soft border border-laurel/10 bg-white/65 p-4 transition hover:border-gold/45 hover:bg-gold/5"
                    href={detail.href}
                    key={detail.label}
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    className="rounded-soft border border-laurel/10 bg-white/65 p-4"
                    key={detail.label}
                  >
                    {content}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="premium-section">
        <div className="site-shell">
          <div className="grid gap-8 rounded-soft border border-gold/20 bg-laurel p-8 text-ivory shadow-soft sm:p-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase text-gold">
                Zona de atención
              </p>
              <h2 className="mt-3 text-3xl leading-tight text-ivory sm:text-4xl">
                Atención digital y con cita previa
              </h2>
              <p className="mt-5 text-sm text-ivory/74 sm:text-base">
                Atendemos de forma digital y con cita previa en Cancún, Playa
                del Carmen y Riviera Maya.
              </p>
            </div>
            <div className="min-h-64 rounded-soft border border-ivory/20 bg-ivory/8 p-6">
              <div className="flex h-full min-h-52 items-center justify-center rounded-soft border border-gold/25 text-center">
                <div>
                  <Building2 aria-hidden className="mx-auto h-9 w-9 text-gold" />
                  <p className="mt-4 text-sm text-ivory/72">
                    Espacio preparado para integrar Google Maps en el futuro.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="premium-section bg-white/45">
        <div className="site-shell">
          <div className="quiet-panel p-8 sm:p-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-3xl leading-tight">
                  Tu información será tratada con seriedad
                </h2>
                <p className="mt-4 text-sm text-deepBlue/72 sm:text-base">
                  Usaremos tus datos únicamente para contactarte y orientarte
                  sobre tu solicitud inmobiliaria.
                </p>
              </div>
              <Button href="/aviso-de-privacidad" variant="outline">
                Aviso de privacidad
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="premium-section">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeading
            description="Respuestas rápidas para iniciar una conversación con mayor claridad."
            title="Preguntas frecuentes"
          />
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTASection
        description="Cuéntanos tu situación y te ayudaremos a identificar la mejor forma de avanzar."
        primaryHref="#formulario"
        primaryLabel="Enviar mensaje"
        secondaryHref={whatsappHref}
        secondaryLabel="Hablar por WhatsApp"
        title="Da el primer paso con claridad"
      />
    </>
  );
}
