import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>;

const variants: Record<ButtonVariant, string> = {
  primary:
    "border-gold bg-gold text-laurel shadow-line hover:border-gold-600 hover:bg-gold-600 hover:text-ivory",
  secondary:
    "border-stone/80 bg-ivory text-laurel shadow-line hover:border-gold/70 hover:bg-white",
  outline:
    "border-laurel/45 bg-transparent text-laurel hover:border-laurel hover:bg-laurel/8",
  ghost:
    "border-transparent bg-transparent text-laurel hover:bg-laurel/5 hover:text-laurel-800"
};

const sizes: Record<ButtonSize, string> = {
  sm: "min-h-10 px-4 text-xs",
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-12 px-6 text-sm"
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  external,
  className,
  type = "button",
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-soft border font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold disabled:pointer-events-none disabled:opacity-50",
    sizes[size],
    variants[variant],
    className
  );

  if (href) {
    if (external) {
      return (
        <a
          className={classes}
          href={href}
          rel="noreferrer"
          target="_blank"
          {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        className={classes}
        href={href}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      type={type}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}

