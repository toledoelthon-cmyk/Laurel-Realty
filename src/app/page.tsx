import type { Metadata } from "next";
import {
  CheckCircle2,
  Home,
  KeyRound,
  Search,
  ShieldCheck,
  UserRoundCheck
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PropertyGrid } from "@/components/catalog/PropertyGrid";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { TestimonialPlaceholder } from "@/components/sections/TestimonialPlaceholder";
import { getFeaturedProperties } from "@/data/properties";
import { whatsappHref } from "@/lib/constants";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Laurel Realty | Asesoría inmobiliaria en Cancún y Riviera Maya",
  description:
    "Laurel Realty ofrece asesoría y gestión inmobiliaria para vender, rentar o encontrar propiedades en Cancún y Riviera Maya."
};

const mainPaths = [
  {
    title: "Quiero vender una propiedad",
    description:
      "Te ayudamos a valorar, preparar, promocionar y negociar tu propiedad con una estrategia clara.",
    ctaLabel: "Vender mi propiedad",
    href: "/vender",
    icon: <Home aria-hidden size={21} />
  },
  {
    title: "Quiero rentar mi propiedad",
    description:
      "Gestionamos la promoción, el filtro de interesados y la coordinación del proceso para rentar con mayor tranquilidad.",
    ctaLabel: "Rentar mi propiedad",
    href: "/rentar-mi-propiedad",
    icon: <KeyRound aria-hidden size={21} />
  },
  {
    title: "Estoy buscando propiedad",
    description:
      "Cuéntanos qué necesitas y te contactaremos cuando tengamos opciones que se ajusten a tu búsqueda.",
    ctaLabel: "Enviar mi búsqueda",
    href: "/busco-propiedad",
    icon: <Search aria-hidden size={21} />
  }
];

const ownerBenefits = [
  "Valoración inicial",
  "Promoción de inmuebles",
  "Filtro de interesados",
  "Coordinación de visitas",
  "Asesoría documental básica",
  "Administración de rentas",
  "Acompañamiento hasta el cierre"
];

const processSteps = [
  {
    title: "Escuchamos tu objetivo",
    description:
      "Entendemos si quieres vender, rentar, buscar o recibir orientación inicial."
  },
  {
    title: "Analizamos tu necesidad o propiedad",
    description:
      "Revisamos información clave para conocer el punto de partida y las prioridades."
  },
  {
    title: "Definimos una estrategia",
    description:
      "Ordenamos una ruta de acción clara, realista y alineada con tus tiempos."
  },
  {
    title: "Gestionamos los siguientes pasos",
    description:
      "Coordinamos comunicación, interesados, visitas y seguimiento profesional."
  },
  {
    title: "Te acompañamos hasta el cierre",
    description:
      "Mantenemos claridad durante cada etapa para que tomes decisiones con mayor control."
  }
];

const concerns = [
  "No saber cuánto vale una propiedad",
  "Perder tiempo con interesados no calificados",
  "No entender documentos o condiciones",
  "No saber cómo promocionar correctamente",
  "Temor a tomar una mala decisión"
];

function HomeVisual() {
  return (
    <div className="surface-panel overflow-hidden p-3 lg:ml-auto lg:max-w-[520px]">
      <div className="relative h-[420px] overflow-hidden rounded-[0.35rem] bg-laurel sm:h-[480px] lg:h-[500px]">
        <div className="absolute inset-6 border border-gold/35" />
        <div className="absolute inset-x-10 top-16 h-px bg-gold/25" />
        <div className="absolute bottom-12 left-10 right-10 h-px bg-gold/35" />
        <div className="absolute left-10 top-16 h-44 w-px bg-gold/25" />
        <div className="absolute right-12 top-28 h-40 w-px bg-gold/20" />
        <div className="absolute right-10 top-16 h-28 w-28 border border-gold/20" />
        <div className="absolute bottom-28 left-10 grid grid-cols-3 gap-3">
          <span className="h-20 w-16 border border-ivory/18 bg-ivory/8" />
          <span className="h-28 w-16 border border-ivory/18 bg-ivory/10" />
          <span className="h-16 w-16 border border-ivory/18 bg-ivory/8" />
        </div>
        <div className="absolute bottom-8 left-8 right-8 border-t border-gold/40 pt-5">
          <p className="font-display text-3xl text-ivory">
            Cancún · Riviera Maya
          </p>
          <p className="mt-3 text-sm text-ivory/70">
            Gestión inmobiliaria con criterio, atención personalizada y visión
            patrimonial.
          </p>
        </div>
      </div>
    </div>
  );
}

export default async function HomePage() {
  const featuredProperties = await getFeaturedProperties();

  return (
    <>
      <PageHero
        eyebrow="Asesoría y Gestión Inmobiliaria"
        primaryCTA={{ label: "Publicar mi propiedad", href: "/propietarios" }}
        secondaryCTA={{ label: "Solicitar asesoría gratuita", href: "/contacto" }}
        tertiaryCTA={{ label: "Estoy buscando propiedad", href: "/busco-propiedad" }}
        subtitle="En Laurel Realty te acompañamos para vender, rentar o encontrar una propiedad en Cancún y Riviera Maya con claridad, seguridad y atención personalizada."
        title="Prestigio, confianza y patrimonio en el Caribe Mexicano"
        trustItems={[
          "Asesoría inicial gratuita",
          "Atención digital y con cita previa",
          "Cancún · Playa del Carmen · Riviera Maya",
          "Gestión profesional"
        ]}
        visual={<HomeVisual />}
      />

      <section className="premium-section bg-white/45">
        <div className="site-shell">
          <SectionHeading
            alignment="center"
            description="Elige la ruta que mejor describe tu momento. Laurel Realty te orienta con un proceso claro y sin presión."
            title="¿Cómo podemos ayudarte?"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {mainPaths.map((path) => (
              <ServiceCard key={path.title} {...path} />
            ))}
          </div>
        </div>
      </section>

      <section className="premium-section">
        <div className="site-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionHeading
              description="Si tienes una casa, apartamento, terreno, local u otro inmueble en Cancún o Riviera Maya, podemos ayudarte a presentarlo de forma profesional y conectarlo con personas interesadas."
              eyebrow="Para propietarios"
              title="Convierte tu propiedad en una oportunidad real"
            />
            <Button className="mt-8" href="/propietarios" size="lg">
              Solicitar asesoría para mi propiedad
            </Button>
          </div>

          <div className="quiet-panel p-6 sm:p-8">
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

      <section className="premium-section bg-white/45">
        <div className="site-shell">
          <SectionHeading
            alignment="center"
            description={
              featuredProperties.length
                ? "Propiedades disponibles seleccionadas por Laurel Realty en Cancún y Riviera Maya."
                : "Explora nuestro catálogo de propiedades disponibles en Cancún y Riviera Maya."
            }
            title="Propiedades destacadas"
          />
          {featuredProperties.length ? (
            <div className="mt-12">
              <PropertyGrid properties={featuredProperties} />
            </div>
          ) : (
            <div className="mx-auto mt-10 max-w-2xl rounded-soft border border-gold/20 bg-white/70 p-8 text-center shadow-line">
              <p className="text-sm text-deepBlue/72 sm:text-base">
                Explora nuestro catálogo de propiedades disponibles en Cancún y
                Riviera Maya.
              </p>
            </div>
          )}
          <div className="mt-10 flex justify-center">
            <Button href="/propiedades" variant="outline">
              {featuredProperties.length
                ? "Ver propiedades"
                : "Ver propiedades disponibles"}
              </Button>
          </div>
        </div>
      </section>

      <section className="premium-section">
        <div className="site-shell">
          <SectionHeading
            alignment="center"
            description="Cada operación requiere orden. Por eso trabajamos con una ruta sencilla, trazable y acompañada."
            title="Un proceso claro de principio a fin"
          />
          <ProcessSteps className="mt-12" steps={processSteps} />
        </div>
      </section>

      <section className="premium-section bg-white/45">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <SectionHeading
              description="Por eso trabajamos con comunicación clara, asesoría personalizada y un proceso pensado para que tengas mayor control en cada decisión."
              title="Sabemos que una operación inmobiliaria puede generar dudas"
            />
            <p className="mt-6 text-sm text-deepBlue/72 sm:text-base">
              Laurel Realty ayuda a ordenar información, filtrar escenarios y
              avanzar con claridad, orden y acompañamiento profesional.
            </p>
          </div>
          <div className="surface-panel p-6 sm:p-8">
            <ul className="grid gap-4">
              {concerns.map((concern) => (
                <li className="flex gap-3 text-sm text-deepBlue/74" key={concern}>
                  <ShieldCheck
                    aria-hidden
                    className="mt-0.5 h-5 w-5 shrink-0 text-gold"
                  />
                  <span>{concern}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="premium-section">
        <div className="site-shell">
          <div className="grid gap-10 rounded-soft border border-gold/20 bg-white/60 p-8 shadow-line sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full border border-gold/35 bg-ivory text-gold">
              <UserRoundCheck aria-hidden size={34} />
            </div>
            <div>
              <p className="eyebrow">Atención personalizada</p>
              <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">
                Asesoría personalizada con Vicky Izquierdo
              </h2>
              <p className="mt-5 text-sm text-deepBlue/72 sm:text-base">
                Vicky Izquierdo acompaña a propietarios, compradores e
                interesados en renta con una atención cercana, profesional y
                enfocada en generar confianza durante cada etapa del proceso.
              </p>
              <Button
                className="mt-8"
                external
                href={whatsappHref}
                size="lg"
                variant="secondary"
              >
                Hablar con Vicky por WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      <TestimonialPlaceholder
        description="Próximamente compartiremos historias reales de propietarios y clientes acompañados por Laurel Realty."
        title="Experiencias que generan confianza"
      />

      <CTASection
        description="Cuéntanos si quieres vender, rentar, buscar o recibir asesoría. En Laurel Realty te orientamos de forma inicial y gratuita."
        primaryHref="/propietarios"
        primaryLabel="Publicar mi propiedad"
        secondaryHref={whatsappHref}
        secondaryLabel="Hablar por WhatsApp"
        title="Da el primer paso con claridad"
      />
    </>
  );
}
