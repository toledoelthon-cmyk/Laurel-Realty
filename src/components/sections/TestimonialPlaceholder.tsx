import { Quote } from "lucide-react";

type TestimonialPlaceholderProps = {
  title?: string;
  description?: string;
};

export function TestimonialPlaceholder({
  title = "Testimonios reales próximamente",
  description = "Este espacio está reservado para experiencias verificables de clientes de Laurel Realty. No publicamos testimonios ficticios."
}: TestimonialPlaceholderProps) {
  return (
    <section className="premium-section-compact">
      <div className="site-shell">
        <div className="quiet-panel p-8 text-center sm:p-10">
          <Quote aria-hidden className="mx-auto h-8 w-8 text-gold" />
          <h2 className="mt-5 text-3xl leading-tight">{title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-deepBlue/70 sm:text-base">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
