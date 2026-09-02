import Image from "next/image";
import {
  LOGO_ONDARK_DATA_URI,
  LOGO_ONDARK_INTRINSIC,
} from "@/lib/logo-data-uri";

/**
 * Fracción vertical visible del PNG fuente COMPLETO (mark + wordmark + tagline).
 * Ocultamos la tagline porque ya vive en el hero.
 */
const VISIBLE_RATIO_FULL = 0.78;
const SRC_WIDTH = 1537;
const SRC_HEIGHT = 1023;
const DISPLAY_ASPECT_FULL = SRC_WIDTH / (SRC_HEIGHT * VISIBLE_RATIO_FULL);

/** Mark aislado (solo V + wings naranja). Bounding box del PNG recortado. */
const MARK_WIDTH = 1067;
const MARK_HEIGHT = 383;
const DISPLAY_ASPECT_MARK = MARK_WIDTH / MARK_HEIGHT;

/**
 * Variantes:
 *  - mark    → solo el V + wings naranja. Ideal para header/spots pequeños.
 *  - onLight → lockup completo (mark + wordmark oscuro). Para fondos claros.
 *  - onDark  → lockup con wordmark blanco, fondo transparente. Para fondos oscuros.
 */
type Variant = "mark" | "onLight" | "onDark";

type LogoProps = {
  /** Alto en px del logo mostrado. El ancho se calcula automáticamente. */
  height?: number;
  variant?: Variant;
  priority?: boolean;
  className?: string;
};

export function Logo({
  height = 40,
  variant = "onLight",
  priority = false,
  className = "",
}: LogoProps) {
  if (variant === "mark") {
    const width = Math.round(height * DISPLAY_ASPECT_MARK);
    return (
      <Image
        src="/images/veloz-mark.png"
        alt="VELOZ"
        width={MARK_WIDTH}
        height={MARK_HEIGHT}
        priority={priority}
        sizes={`${width}px`}
        style={{ width, height }}
        className={`h-auto w-auto select-none ${className}`}
      />
    );
  }

  const width = Math.round(height * DISPLAY_ASPECT_FULL);

  return (
    <span
      role="img"
      aria-label="VELOZ"
      className={`relative inline-block overflow-hidden ${className}`}
      style={{ width, height }}
    >
      {variant === "onDark" ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={LOGO_ONDARK_DATA_URI}
          alt=""
          width={LOGO_ONDARK_INTRINSIC.width}
          height={LOGO_ONDARK_INTRINSIC.height}
          className="pointer-events-none absolute inset-x-0 top-0 h-auto w-full select-none"
        />
      ) : (
        <Image
          src="/images/logo-full.png"
          alt=""
          width={SRC_WIDTH}
          height={SRC_HEIGHT}
          priority={priority}
          sizes={`${width}px`}
          className="pointer-events-none absolute inset-x-0 top-0 h-auto w-full select-none"
        />
      )}
    </span>
  );
}
