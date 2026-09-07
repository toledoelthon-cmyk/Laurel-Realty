"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { brand, navItems } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-gold/15 bg-ivory/92 shadow-line backdrop-blur">
      <div className="site-shell">
        <div className="flex min-h-20 items-center justify-between gap-4">
          <Link
            aria-label="Ir al inicio de Laurel Realty"
            className="flex flex-col gap-1"
            href="/"
            onClick={() => setIsOpen(false)}
          >
            <span className="font-display text-2xl font-semibold leading-none text-laurel">
              {brand.name}
            </span>
            <span className="text-[0.68rem] font-semibold uppercase text-deepBlue/70">
              {brand.descriptor}
            </span>
          </Link>

          <nav
            aria-label="Navegación principal"
            className="hidden items-center gap-1 lg:flex"
          >
            {navItems.map((item) => (
              <Link
                className="rounded-soft px-3 py-2 text-sm font-medium text-deepBlue/78 transition hover:bg-laurel/5 hover:text-laurel"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button href="/propietarios" size="sm" variant="primary">
              Publicar mi propiedad
            </Button>
          </div>

          <button
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-soft border border-laurel/15 text-laurel transition hover:border-gold hover:bg-gold/10 lg:hidden"
            onClick={() => setIsOpen((current) => !current)}
            type="button"
          >
            {isOpen ? <X aria-hidden size={20} /> : <Menu aria-hidden size={20} />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "lg:hidden",
          isOpen ? "border-t border-gold/15 bg-ivory" : "hidden"
        )}
        id="mobile-menu"
      >
        <div className="site-shell py-4">
          <nav aria-label="Navegación móvil" className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                className="rounded-soft px-3 py-3 text-sm font-semibold text-deepBlue/80 transition hover:bg-laurel/5 hover:text-laurel"
                href={item.href}
                key={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Button
            className="mt-4 w-full"
            href="/propietarios"
            onClick={() => setIsOpen(false)}
            variant="primary"
          >
            Publicar mi propiedad
          </Button>
        </div>
      </div>
    </header>
  );
}

