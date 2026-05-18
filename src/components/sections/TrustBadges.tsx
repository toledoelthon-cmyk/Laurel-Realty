import { CheckCircle2 } from "lucide-react";
import { trustBadges as defaultBadges } from "@/lib/constants";
import { cn } from "@/lib/utils";

type TrustBadgesProps = {
  badges?: string[];
  className?: string;
};

export function TrustBadges({ badges = defaultBadges, className }: TrustBadgesProps) {
  return (
    <div
      className={cn(
        "grid gap-3 sm:grid-cols-2 lg:grid-cols-5",
        className
      )}
    >
      {badges.map((badge) => (
        <div
          className="flex min-h-20 items-center gap-3 rounded-soft border border-gold/20 bg-white/65 px-4 py-3 text-sm font-semibold text-laurel shadow-line"
          key={badge}
        >
          <CheckCircle2 aria-hidden className="h-5 w-5 shrink-0 text-gold" />
          <span>{badge}</span>
        </div>
      ))}
    </div>
  );
}
