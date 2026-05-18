import Link from "next/link";
import { brand, footerServices, navItems, whatsappHref } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-laurel text-ivory">
      <div className="site-shell py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <p className="font-display text-3xl font-semibold">{brand.name}</p>
            <p className="mt-2 text-sm font-semibold text-ivory/78">
              {brand.descriptor}
            </p>
            <p className="mt-5 max-w-md text-sm text-ivory/76">{brand.phrase}</p>
            <p className="mt-4 max-w-md text-sm text-ivory/76">
              Laurel Realty ofrece asesoría y gestión inmobiliaria en Cancún,
              Playa del Carmen y Riviera Maya.
            </p>
            <p className="mt-3 max-w-md text-sm text-ivory/76">
              Venta y renta de propiedades en Cancún y Riviera Maya con
              asesoría inicial gratuita.
            </p>
            <p className="mt-5 text-sm text-ivory/72">{brand.locations}</p>
            <div className="mt-6 space-y-2 text-sm text-ivory/78">
              <p>
                WhatsApp:{" "}
                <a className="hover:text-gold" href={whatsappHref}>
                  {brand.whatsapp}
                </a>
              </p>
              <p>
                Correo:{" "}
                <a className="hover:text-gold" href={`mailto:${brand.email}`}>
                  {brand.email}
                </a>
              </p>
              <p>{brand.attention}</p>
            </div>
          </div>

          <div>
            <h2 className="font-sans text-sm font-semibold uppercase text-gold">
              Enlaces rápidos
            </h2>
            <nav aria-label="Enlaces rápidos" className="mt-5 grid gap-3">
              {navItems.map((item) => (
                <Link
                  className="text-sm text-ivory/75 transition hover:text-gold"
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                className="text-sm text-ivory/75 transition hover:text-gold"
                href="/aviso-de-privacidad"
              >
                Aviso de privacidad
              </Link>
            </nav>
          </div>

          <div>
            <h2 className="font-sans text-sm font-semibold uppercase text-gold">
              Servicios
            </h2>
            <ul className="mt-5 grid gap-3 text-sm text-ivory/75">
              {footerServices.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-ivory/12 pt-6 text-xs text-ivory/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Derechos reservados © {new Date().getFullYear()} {brand.name}.
          </p>
          <p>{brand.phrase}</p>
        </div>
      </div>
    </footer>
  );
}
