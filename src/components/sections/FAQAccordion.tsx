import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  items: FAQItem[];
  className?: string;
};

export function FAQAccordion({ items, className }: FAQAccordionProps) {
  return (
    <div className={cn("divide-y divide-gold/20 rounded-soft border border-gold/20 bg-white/65", className)}>
      {items.map((item) => (
        <details className="group" key={item.question}>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 text-left text-sm font-semibold text-laurel transition hover:bg-gold/5">
            <span>{item.question}</span>
            <ChevronDown
              aria-hidden
              className="h-5 w-5 shrink-0 text-gold transition group-open:rotate-180"
            />
          </summary>
          <div className="px-5 pb-5 text-sm text-deepBlue/70">
            <p>{item.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
