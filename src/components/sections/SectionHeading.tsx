import { DecorativeDivider } from "@/components/sections/DecorativeDivider";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  alignment?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  alignment = "left",
  className
}: SectionHeadingProps) {
  const isCenter = alignment === "center";

  return (
    <div
      className={cn(
        "max-w-3xl",
        isCenter && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-5 text-base text-deepBlue/72 sm:text-lg">{description}</p>
      ) : null}
      {isCenter ? <DecorativeDivider className="mt-7" /> : null}
    </div>
  );
}
