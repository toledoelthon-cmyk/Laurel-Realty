import type { Metadata } from "next";
import {
  BookOpen,
  Building2,
  FileText,
  Home,
  KeyRound,
  Search,
  ShieldCheck,
  UserRound
} from "lucide-react";
import { GuideInterestForm } from "@/components/forms/GuideInterestForm";
import { GuideCard } from "@/components/guides/GuideCard";
import { JsonLd, breadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { whatsappHref } from "@/lib/constants";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute: "Guías inmobiliarias | Laurel Realty"
  },
  description:
    "Consejos de Laurel Realty para vender, rentar, comprar, buscar y administrar propiedades en Cancún y Riviera Maya.",
  alternates: {
    canonical: absoluteUrl("/guias")
  },
  openGraph: {
    title: "Guías inmobiliarias | Laurel Realty",
    description:
      "Guías y consejos inmobiliarios para tomar mejores decisiones en Cancún y Riviera Maya.",
    url: absoluteUrl("/guias"),
    type: "website"
  }
};

const categories = [
  { label: "Para propietarios", icon: <Home aria-hidden size={20} /> },
  { label: "Para vender", icon: <Building2 aria-hidden size={20} /> },
  { label: "Para rentar", icon: <KeyRound aria-hidden size={20} /> },
  { label: "Para compradores", icon: <Search aria-hidden size={20} /> },
  { label: "Para inquilinos", icon: <UserRound aria-hidden size={20} /> },
  { label: "Administración de rentas", icon: <ClipboardIcon /> },
  { label: "Documentación y proceso", icon: <FileText aria-hidden size={20} /> },
  { label: "Consejos de seguridad", icon: <ShieldCheck aria-hidden size={20} /> }
];

const guides = [
  {
    category: "Para propietarios",
    title: "Cómo saber si conviene vender o rentar una propiedad",
    summary:
      "Puntos clave para comparar objetivos, tiempos, flujo de renta y necesidades patrimoniales.",
    readTime: "5 min de lectura",
    href: "/guias/vender-o-rentar"
  },
  {
    category: "Para inquilinos",
    title: "Qué revisar antes de rentar una casa o apartamento",
    summary:
      "Aspectos básicos de ubicación, condiciones, documentación y expectativas antes de decidir.",
    readTime: "4 min de lectura",
    href: "/guias/que-revisar-antes-de-rentar"
  },
  {
    category: "Para propietarios",
    title: "Errores comunes al publicar una propiedad",
    summary:
      "Situaciones que pueden afectar la percepción del inmueble y retrasar conversaciones serias.",
    readTime: "5 min de lectura",
    href: "/guias/errores-al-publicar"
  },
  {
    category: "Para vender",
    title: "Cómo preparar una propiedad para tomar mejores fotos",
    summary:
      "Recomendaciones sencillas para ordenar espacios, luz y presentación antes de fotografiar.",
    readTime: "4 min de lectura",
    href: "/guias/preparar-propiedad-para-fotos"
  },
  {
    category: "Documentación y proceso",
    title: "Qué información necesita un asesor para ayudarte mejor",
    summary:
      "Datos útiles para que la primera conversación sea más clara y productiva.",
    readTime: "3 min de lectura",
    href: "/guias/informacion-para-asesor"
  },
  {
    category: "Para compradores",
    title: "Cómo definir un presupuesto realista para buscar propiedad",
    summary:
      "Una guía inicial para ordenar prioridades, rangos y costos relacionados con la búsqueda.",
    readTime: "5 min de lectura",
    href: "/guias/presupuesto-para-buscar"
  },
  {
    category: "Administración de rentas",
    title: "Qué considerar antes de administrar una renta",
    summary:
      "Elementos de seguimiento, comunicación y orden que conviene contemplar desde el inicio.",
    readTime: "4 min de lectura",
    href: "/guias/administrar-una-renta"
  },
  {
    category: "Para propietarios",
    title: "Cómo preparar una propiedad para el mercado en Cancún y Riviera Maya",
    summary:
      "Recomendaciones para presentar mejor un inmueble en un mercado competitivo y dinámico.",
    readTime: "6 min de lectura",
    href: "/guias/preparar-propiedad-cancun-riviera-maya"
  }
];

const faqs = [
  {
    question: "¿Las guías sustituyen una asesoría personalizada?",
    answer:
      "No. Las guías ayudan a resolver dudas generales, pero cada propiedad y cada situación requieren una revisión particular."
  },
  {
    question: "¿Puedo pedir ayuda si tengo una duda específica?",
    answer:
      "Sí. Puedes contactarnos para revisar tu caso y recibir orientación inicial."
  },
  {
    question: "¿Publicarán consejos para propietarios?",
    answer:
      "Sí. Esta sección incluirá contenido para propietarios que quieren vender, rentar o administrar su inmueble."
  },
  {
    question: "¿También habrá guías para personas que buscan rentar?",
    answer:
      "Sí. Habrá guías para inquilinos y personas que buscan propiedades en renta."
  },
  {
    question: "¿La asesoría inicial es gratuita?",
    answer:
      "Sí. La asesoría inicial con Laurel Realty es gratuita y sirve para orientar los primeros pasos."
  }
];

function ClipboardIcon() {
  return <BookOpen aria-hidden size={20} />;
}

function GuidesHeroVisual() {
  return (
    <div className="surface-panel overflow-hidden p-3 lg:ml-auto lg:max-w-[520px]">
      <div className="relative h-[420px] overflow-hidden rounded-[0.35rem] bg-laurel sm:h-[480px] lg:h-[500px]">
        <div className="absolute inset-6 border border-gold/35" />
        <div className="absolute left-10 right-10 top-16 h-px bg-gold/25" />
        <div className="absolute left-10 top-16 h-48 w-px bg-gold/25" />
        <div className="absolute right-12 top-28 h-28 w-px bg-gold/20" />
        <div className="absolute bottom-28 left-10 right-10 grid grid-cols-2 gap-4">
          <span className="h-28 border border-ivory/20 bg-ivory/8" />
          <span className="h-20 border border-ivory/20 bg-ivory/10" />
        </div>
        <div className="absolute bottom-8 left-8 right-8 border-t border-gold/40 pt-5">
          <p className="font-display text-3xl text-ivory">Centro de recursos</p>
          <p className="mt-3 text-sm text-ivory/70">
            Información clara para avanzar con mayor seguridad inmobiliaria.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function GuiasInmobiliariasPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", url: absoluteUrl("/") },
          { name: "Guías", url: absoluteUrl("/guias") }
        ])}
      />
      <PageHero
        eyebrow="Centro de recursos"
        primaryCTA={{ label: "Solicitar asesoría gratuita", href: "/contacto" }}
        subtitle="Consejos prácticos para vender, rentar, buscar y administrar propiedades con mayor claridad y seguridad."
        title="Guías inmobiliarias para tomar mejores decisiones"
        image="/images/hero/hero-interior-premium-03.webp"
        imageAlt="Interior premium para guías inmobiliarias en Cancún y Riviera Maya"
      />

      <section className="premium-section">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <SectionHeading
            description="Una buena operación inmobiliaria empieza con información clara. En esta sección encontrarás guías para resolver dudas frecuentes y avanzar con más confianza."
            title="Aprende antes de decidir"
          />
          <div className="quiet-panel p-7 sm:p-9">
            <BookOpen aria-hidden className="h-8 w-8 text-gold" />
            <p className="mt-5 text-base leading-8 text-deepBlue/72">
              Este centro de recursos está preparado para crecer con contenido
              educativo sobre venta, renta, búsqueda y administración de
              propiedades en Cancún y Riviera Maya.
            </p>
          </div>
        </div>
      </section>

      <section className="premium-section bg-white/45">
        <div className="site-shell">
          <SectionHeading
            alignment="center"
            description="Explora los temas principales que iremos desarrollando para propietarios, compradores e inquilinos."
            title="Categorías"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <div
                className="flex min-h-20 items-center gap-3 rounded-soft border border-gold/20 bg-white/70 px-4 py-3 text-sm font-semibold text-laurel shadow-line"
                key={category.label}
              >
                <span className="text-gold">{category.icon}</span>
                <span>{category.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="premium-section">
        <div className="site-shell">
          <SectionHeading
            alignment="center"
            description="Cards editables y rutas preparadas para publicar el contenido completo cuando esté listo."
            title="Guías sugeridas"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide) => (
              <GuideCard key={guide.href} {...guide} />
            ))}
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
                ¿Tienes una propiedad y necesitas orientación?
              </h2>
              <p className="mt-4 text-sm text-ivory/74 sm:text-base">
                Podemos ayudarte a analizar tu caso y definir una estrategia
                para venderla, rentarla o administrarla.
              </p>
            </div>
            <Button href="/propietarios" variant="secondary">
              Solicitar asesoría para mi propiedad
            </Button>
          </div>
        </div>
      </section>

      <section className="premium-section" id="interes">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeading
            description="Déjanos tu correo o WhatsApp y te enviaremos información útil sobre venta, renta y búsqueda de propiedades."
            title="Recibe orientación inmobiliaria"
          />
          <GuideInterestForm />
        </div>
      </section>

      <section className="premium-section bg-white/45">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeading
            description="Respuestas iniciales sobre el uso de estas guías y la asesoría de Laurel Realty."
            title="Preguntas frecuentes"
          />
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTASection
        description="Si necesitas orientación personalizada, conversemos sobre tu caso."
        primaryHref="/contacto"
        primaryLabel="Solicitar asesoría gratuita"
        secondaryHref={whatsappHref}
        secondaryLabel="Hablar por WhatsApp"
        title="Cada propiedad y cada decisión son diferentes"
      />
    </>
  );
}

