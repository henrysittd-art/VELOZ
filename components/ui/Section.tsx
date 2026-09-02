import type { HTMLAttributes } from "react";
import { Container } from "./Container";

type Background = "white" | "gray" | "dark";

type SectionProps = HTMLAttributes<HTMLElement> & {
  /**
   * Color de fondo del bloque. Las secciones alternan white → gray → dark → white
   * para mantener la proporción 60/30/10 del sistema visual VELOZ.
   */
  background?: Background;
  /**
   * Si es true, el contenido se renderiza a ancho completo (sin Container).
   * Útil para heros y bloques con imágenes que sangran hasta el borde.
   */
  bleed?: boolean;
};

const backgroundClass: Record<Background, string> = {
  white: "bg-veloz-white text-veloz-text",
  gray: "bg-veloz-gray text-veloz-text",
  dark: "bg-veloz-dark text-veloz-white",
};

/**
 * Wrapper de sección con padding vertical y ancho máximo consistentes.
 * El padding es más generoso en desktop para preservar el aire del sistema.
 */
export function Section({
  background = "white",
  bleed = false,
  className = "",
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={`${backgroundClass[background]} py-20 sm:py-24 lg:py-32 ${className}`}
      {...props}
    >
      {bleed ? children : <Container>{children}</Container>}
    </section>
  );
}
