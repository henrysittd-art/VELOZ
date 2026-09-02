import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "dark";
type Size = "md" | "lg";

type BaseProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    as?: "button";
  };

type ButtonAsLink = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps | "href"> & {
    as: "a";
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-display font-semibold tracking-tight " +
  "transition-all duration-200 ease-out " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-veloz-orange focus-visible:ring-offset-2 " +
  "disabled:opacity-50 disabled:pointer-events-none";

const sizes: Record<Size, string> = {
  md: "h-11 px-6 text-sm",
  lg: "h-14 px-8 text-base",
};

/**
 * Variantes:
 *  - primary   → naranja sólido sobre fondo claro (CTA principal).
 *  - secondary → borde oscuro, fondo transparente (CTA secundario sobre blanco/gris).
 *  - dark      → naranja sobre azul-negro, o CTA usado dentro de bloques dark.
 */
const variants: Record<Variant, string> = {
  primary:
    "bg-veloz-orange text-veloz-white hover:bg-veloz-orange/90 active:bg-veloz-orange/80 shadow-sm",
  secondary:
    "bg-transparent text-veloz-dark border border-veloz-dark hover:bg-veloz-dark hover:text-veloz-white",
  dark:
    "bg-veloz-orange text-veloz-white hover:bg-veloz-orange/90 shadow-sm ring-1 ring-veloz-orange/20",
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: ButtonProps) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (rest.as === "a") {
    const { as: _, ...anchorProps } = rest;
    return (
      <a className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const { as: _, ...buttonProps } = rest;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
