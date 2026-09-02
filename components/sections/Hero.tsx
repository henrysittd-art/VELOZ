"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { waLink } from "@/lib/whatsapp";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.2, 0.65, 0.3, 1] },
  },
};

const benefitIcons: Record<string, ReactNode> = {
  rapido: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M13 2L4 14h7l-1 8 10-13h-7z" />
    </svg>
  ),
  seguro: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3l8 3v6c0 4.5-3.4 8.4-8 9-4.6-.6-8-4.5-8-9V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  seguimiento: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 21s-7-6.5-7-12a7 7 0 1 1 14 0c0 5.5-7 12-7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  ),
};

export function Hero() {
  const { hero } = siteConfig;

  return (
    <Section
      background="white"
      bleed
      className="relative isolate flex min-h-[calc(100svh-4rem)] items-center overflow-hidden lg:min-h-[calc(100svh-5rem)]"
    >
      {/* Trazo de ruta sutil de fondo — pista visual de movimiento, no protagonista. */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
      >
        <path
          d="M -50 720 Q 300 520 620 560 T 1260 260"
          stroke="var(--color-veloz-orange)"
          strokeWidth="1.5"
          strokeDasharray="4 12"
          fill="none"
          opacity="0.22"
        />
      </svg>

      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-14">
          <motion.div
            initial="hidden"
            animate="show"
            variants={container}
            className="order-2 lg:order-1"
          >
            <motion.h1
              variants={item}
              className="font-display text-[2.25rem] font-bold leading-[1.02] tracking-tight text-veloz-dark sm:text-5xl lg:text-[3.75rem] xl:text-[4.5rem]"
            >
              {hero.titleLines.map((line, i) => {
                const isHighlight = "highlight" in line && line.highlight;
                return (
                  <span
                    key={i}
                    className={`block ${isHighlight ? "text-veloz-orange" : ""}`}
                  >
                    {line.text}
                  </span>
                );
              })}
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-base text-veloz-text sm:text-lg lg:text-xl"
            >
              {hero.subtitle}
            </motion.p>

            <motion.div
              variants={item}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center lg:mt-10"
            >
              <Button
                as="a"
                href={waLink(siteConfig.whatsappMessages.requestService)}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
              >
                {hero.primaryCta}
              </Button>
              <Button
                as="a"
                href={hero.secondaryHref}
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                {hero.secondaryCta}
              </Button>
            </motion.div>

            <motion.ul
              variants={item}
              className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
            >
              {hero.benefits.map((b) => (
                <li
                  key={b.key}
                  className="flex items-center gap-2 text-sm font-medium text-veloz-text sm:text-[15px]"
                >
                  <span className="text-veloz-orange">
                    {benefitIcons[b.key]}
                  </span>
                  {b.label}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.2, 0.65, 0.3, 1] }}
            className="relative order-1 lg:order-2"
          >
            {/* Glow naranja difuso detrás — luz de brand sin dominar. */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-10 -z-10 rounded-[3rem] bg-veloz-orange/12 blur-3xl sm:-inset-14 lg:-inset-16"
            />
            {/* Doble marco escalonado atrás — sensación de layering editorial. */}
            <div
              aria-hidden="true"
              className="absolute -right-3 -top-3 -z-10 h-24 w-24 rounded-2xl border-2 border-veloz-orange sm:h-32 sm:w-32 lg:-right-5 lg:-top-5 lg:h-40 lg:w-40"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -left-4 -z-10 h-20 w-20 rounded-2xl bg-veloz-dark/8 sm:h-28 sm:w-28 lg:-bottom-6 lg:-left-6 lg:h-36 lg:w-36"
            />

            <div className="relative mx-auto w-full max-w-[280px] overflow-hidden rounded-[1.75rem] bg-veloz-dark shadow-[0_40px_80px_-30px_rgba(7,19,31,0.55),0_20px_40px_-20px_rgba(255,90,10,0.2)] ring-1 ring-veloz-dark/10 sm:max-w-sm sm:rounded-[2rem] lg:max-w-md lg:rounded-[2.25rem]">
              <Image
                src={hero.motorizadoImage.src}
                alt={hero.motorizadoImage.alt}
                width={hero.motorizadoImage.width}
                height={hero.motorizadoImage.height}
                priority
                sizes="(min-width: 1024px) 448px, (min-width: 640px) 384px, 280px"
                className="block h-auto w-full"
              />
              {/* Overlay de gradiente sutil desde abajo — mejora legibilidad y da profundidad. */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-veloz-dark/40 to-transparent"
              />

              {/* Badge flotante — pill editorial que refuerza territorio. */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-veloz-white/95 px-3 py-1.5 text-xs font-semibold text-veloz-dark backdrop-blur-md sm:bottom-5 sm:left-5 sm:px-4 sm:py-2 sm:text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-veloz-orange/60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-veloz-orange" />
                </span>
                En movimiento · Panamá
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
