import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Compass,
  Home,
  KeyRound,
  Landmark,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  TrendingUp
} from "lucide-react";
import { PropertyCard } from "@/components/catalog/PropertyCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { getFeaturedProperties, getProperties } from "@/data/properties";
import { brand, siteUrl, whatsappHref } from "@/lib/constants";
import { absoluteUrl } from "@/lib/seo";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Laurel Realty | Asesoría inmobiliaria en Cancún y Riviera Maya",
  description:
    "Laurel Realty ofrece asesoría y gestión inmobiliaria para vender, rentar o encontrar propiedades en Cancún y Riviera Maya.",
  alternates: { canonical: absoluteUrl("/") },
  openGraph: {
    title: "Laurel Realty | Asesoría inmobiliaria en Cancún y Riviera Maya",
    description:
      "Asesoría y gestión inmobiliaria boutique para comprar, vender e invertir en Cancún, Playa del Carmen y Riviera Maya.",
    url: absoluteUrl("/"),
    type: "website"
  }
};

const primaryAccess = [
  ["Comprar", "Encuentra una propiedad alineada con tu objetivo.", "/busco-propiedad", Home],
  ["Vender", "Prepara y promociona tu inmueble con estrategia.", "/vender", Landmark],
  ["Rentar", "Gestiona interesados y visitas con más orden.", "/rentar-mi-propiedad", KeyRound],
  ["Invertir", "Evalúa zonas y oportunidades con claridad.", "/asesoria", TrendingUp]
] as const;

const conversionBlocks = [
  ["Comprar", "Búsqueda ordenada por presupuesto, zona y estilo de vida.", "/busco-propiedad", "Buscar propiedad", Home],
  ["Vender", "Presentación, publicación y seguimiento con enfoque profesional.", "/vender", "Vender mi propiedad", Building2],
  ["Invertir", "Criterio local para analizar oportunidades patrimoniales.", "/asesoria", "Solicitar asesoría", Compass]
] as const;

const trustItems = [
  ["Gestión ordenada", "Seguimiento claro para cada etapa del proceso.", CheckCircle2],
  ["Conocimiento local", "Enfoque en Cancún, Playa del Carmen y Riviera Maya.", MapPin],
  ["Presentación premium", "Comunicación cuidada para elevar el valor percibido.", Sparkles],
  ["Acompañamiento personalizado", "Atención digital y con cita previa cuando se requiere.", ShieldCheck]
] as const;

const zones = ["Cancún", "Playa del Carmen", "Riviera Maya", "Puerto Morelos", "Tulum"];

function PersonalizedSearchCTA() {
  return (
    <div className="mt-8 rounded-soft border border-gold/20 bg-ivory px-6 py-5 shadow-line sm:flex sm:items-center sm:justify-between sm:gap-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
          Búsqueda personalizada
        </p>
        <p className="mt-2 text-sm leading-6 text-deepBlue/72">
          Si no ves una opción ideal, cuéntanos qué buscas y te avisamos cuando haya propiedades compatibles.
        </p>
      </div>
      <Button className="mt-5 shrink-0 sm:mt-0" href="/busco-propiedad" size="sm" variant="outline">
        Recibir opciones
      </Button>
    </div>
  );
}

export default async function HomePage() {
  const [featuredProperties, availableProperties] = await Promise.all([
    getFeaturedProperties(),
    getProperties()
  ]);
  const visibleProperties = (featuredProperties.length ? featuredProperties : availableProperties).slice(0, 3);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "RealEstateAgent",
          name: brand.name,
          description:
            "Laurel Realty ofrece asesoría y gestión inmobiliaria en Cancún, Playa del Carmen y Riviera Maya.",
          url: siteUrl,
          email: "vicky481985@gmail.com",
          telephone: "+52 998 403 2240",
          areaServed: ["Cancún", "Playa del Carmen", "Riviera Maya"],
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+52 998 403 2240",
            contactType: "customer service",
            availableLanguage: ["Spanish"]
          }
        }}
      />
      <main>
        <section className="relative isolate min-h-[590px] overflow-hidden bg-laurel text-ivory sm:min-h-[600px] lg:min-h-[610px]">
          <Image
            alt="Villa tropical premium con alberca en la Riviera Maya"
            className="object-cover object-center"
            fill
            priority
            sizes="100vw"
            src="/images/hero/hero-villa-caribe-01.webp"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,39,33,0.72)_0%,rgba(18,39,33,0.55)_35%,rgba(18,39,33,0.18)_65%,rgba(18,39,33,0.04)_100%)]" />
          <div className="relative mx-auto flex min-h-[590px] w-full max-w-[1280px] items-center px-6 py-24 sm:min-h-[600px] sm:px-10 sm:py-24 lg:min-h-[610px] lg:px-16">
            <div className="max-w-[680px] pt-8 sm:pt-10 lg:pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                Asesoría y Gestión Inmobiliaria
              </p>
              <h1 className="mt-5 max-w-[680px] text-[2.55rem] leading-[1] text-ivory sm:text-[3.45rem] lg:text-[4.125rem]">
                Prestigio, confianza y patrimonio en el Caribe Mexicano
              </h1>
              <p className="mt-6 max-w-[600px] text-[17px] font-normal leading-8 text-ivory/95 sm:text-[19px]">
                Asesoría y gestión inmobiliaria boutique para comprar, vender e invertir entre Cancún, Playa del Carmen y la Riviera Maya.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href="/propiedades" variant="primary">Ver propiedades</Button>
                <Button href="/asesoria" variant="secondary">Solicitar asesoría</Button>
                <Button external href={whatsappHref} variant="outline" className="!border-ivory/75 !bg-laurel/60 !text-ivory backdrop-blur-sm hover:!border-ivory hover:!bg-laurel/75">
                  <MessageCircle aria-hidden size={18} />
                  Hablar por WhatsApp
                </Button>
              </div>
              <div className="mt-8 flex max-w-[620px] flex-col gap-2.5 text-sm text-ivory/90 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-3">
                {["Asesoría inicial gratuita", "Atención digital y con cita previa", "Cancún · Riviera Maya"].map((item) => (
                  <span className="inline-flex items-center gap-2" key={item}>
                    <BadgeCheck aria-hidden className="text-gold" size={16} />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-ivory pb-10 pt-12 sm:pt-14 lg:pb-12 lg:pt-16">
          <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-10 lg:px-16">
            <div className="grid gap-6 lg:grid-cols-[220px_1fr_auto] lg:items-center">
              <div>
                <p className="eyebrow">Punto de partida</p>
                <h2 className="mt-2 text-3xl leading-tight">¿Qué estás buscando?</h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {primaryAccess.map(([title, description, href, Icon]) => (
                  <Link
                    className="group flex min-h-[116px] flex-col justify-between rounded-soft border border-laurel/10 bg-white/76 px-4 py-4 shadow-line transition hover:border-gold/45 hover:bg-white"
                    href={href}
                    key={title}
                  >
                    <span className="flex items-center gap-3 font-semibold text-laurel">
                      <Icon aria-hidden className="text-gold" size={18} />
                      {title}
                    </span>
                    <span className="mt-2 block text-xs leading-5 text-deepBlue/62">{description}</span>
                  </Link>
                ))}
              </div>
              <div className="flex gap-4 text-sm font-semibold text-laurel lg:flex-col lg:items-end">
                <Link className="hover:text-gold-700" href="/asesoria">Asesoría</Link>
                <Link className="hover:text-gold-700" href="/propiedades">Ver propiedades</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="site-container">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="eyebrow">Catálogo inmobiliario</p>
                <h2>Propiedades destacadas</h2>
                <p className="mt-4 text-deepBlue/70">Propiedades reales disponibles para comprar, rentar o invertir con acompañamiento profesional.</p>
              </div>
              <Button href="/propiedades" variant="outline">Ver propiedades</Button>
            </div>
            {visibleProperties.length ? (
              <div className="mt-10 grid gap-6 lg:grid-cols-3">
                {visibleProperties.map((property) => <PropertyCard key={property.id} property={property} />)}
              </div>
            ) : (
              <div className="mt-10 rounded-soft border border-gold/20 bg-ivory p-7 text-center shadow-line">
                <p className="text-deepBlue/72">Explora nuestro catálogo de propiedades disponibles en Cancún y Riviera Maya.</p>
                <Button className="mt-5" href="/propiedades" variant="outline">Ver propiedades disponibles</Button>
              </div>
            )}
            <PersonalizedSearchCTA />
          </div>
        </section>

        <section className="section-padding bg-ivory">
          <div className="site-container grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="eyebrow">Operaciones importantes</p>
              <h2>Compra, vende o invierte</h2>
              <p className="mt-4 text-deepBlue/70">
                Una gestión inmobiliaria boutique debe sentirse clara desde el primer paso.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {conversionBlocks.map(([title, text, href, cta, Icon]) => (
                <article className="rounded-soft border border-laurel/10 bg-white/72 p-5 shadow-line" key={title}>
                  <Icon aria-hidden className="h-5 w-5 text-gold" />
                  <h3 className="mt-4 text-2xl">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-deepBlue/66">{text}</p>
                  <Link className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-laurel hover:text-gold-700" href={href}>
                    {cta}
                    <ArrowUpRight aria-hidden size={15} />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-10">
          <div className="site-container flex flex-col gap-5 border-y border-gold/20 py-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="eyebrow">Zonas donde operamos</p>
              <h2 className="text-3xl">Cancún · Playa del Carmen · Riviera Maya</h2>
              <p className="mt-3 text-sm text-deepBlue/68">También atendemos Puerto Morelos y Tulum con cita previa.</p>
            </div>
            <div className="flex flex-wrap gap-2 lg:justify-end">
              {zones.map((zone) => (
                <span className="rounded-full border border-gold/25 bg-ivory px-4 py-2 text-sm text-deepBlue/72" key={zone}>{zone}</span>
              ))}
            </div>
            <Button href="/contacto" variant="outline">Consultar zonas</Button>
          </div>
        </section>

        <section className="section-padding bg-ivory">
          <div className="site-container">
            <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
              <div>
                <p className="eyebrow">Confianza boutique</p>
                <h2>Una asesoría inmobiliaria más clara, cercana y profesional</h2>
                <p className="mt-5 text-sm leading-7 text-deepBlue/70 sm:text-base">
                  En Laurel Realty una propiedad no se trata como un simple anuncio. Cada operación requiere análisis, presentación, seguimiento y confianza.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {trustItems.map(([title, description, Icon]) => (
                  <article className="rounded-soft border border-laurel/10 bg-white/72 p-5 shadow-line" key={title}>
                    <Icon aria-hidden className="text-gold" size={20} />
                    <h3 className="mt-4 text-xl">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-deepBlue/66">{description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="site-container">
            <div className="rounded-soft border border-gold/25 bg-laurel px-6 py-12 text-center text-ivory shadow-soft sm:px-10 lg:px-16">
              <p className="eyebrow text-gold">Primer paso</p>
              <h2 className="mx-auto max-w-3xl text-4xl text-ivory sm:text-5xl">¿Estás pensando en comprar, vender o invertir?</h2>
              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-ivory/76 sm:text-base">
                Hablemos de tu objetivo inmobiliario y revisemos juntos la mejor estrategia para avanzar con seguridad.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button href="/asesoria" variant="primary">Solicitar asesoría</Button>
                <Button external href={whatsappHref} variant="secondary">
                  <MessageCircle aria-hidden size={18} />
                  Hablar por WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}










