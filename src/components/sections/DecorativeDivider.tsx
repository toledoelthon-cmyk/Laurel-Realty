import { cn } from "@/lib/utils";

type DecorativeDividerProps = {
  className?: string;
};

export function DecorativeDivider({ className }: DecorativeDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("flex items-center justify-center gap-3", className)}
    >
      <span className="h-px w-20 bg-gradient-to-r from-transparent to-gold/70" />
      <span className="relative flex h-5 w-10 items-center justify-center">
        <span className="absolute h-3 w-3 rotate-45 border border-gold/80" />
        <span className="absolute left-1 h-2 w-4 rounded-full border border-gold/70" />
        <span className="absolute right-1 h-2 w-4 rounded-full border border-gold/70" />
      </span>
      <span className="h-px w-20 bg-gradient-to-l from-transparent to-gold/70" />
    </div>
  );
}
