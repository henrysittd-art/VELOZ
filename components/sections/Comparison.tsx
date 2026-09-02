import { Check, X } from "lucide-react";
import { copy } from "@/config/copy";
import { Section } from "@/components/ui/Section";
import { Reveal, RevealItem } from "@/components/ui/Reveal";

export function Comparison() {
  const { comparison } = copy;
  const { internal, veloz } = comparison.columns;

  return (
    <Section background="dark" className="relative overflow-hidden">
      {/* Aurora naranja — mismos orbes que HowItWorks para continuidad visual. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -z-0 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-veloz-orange/22 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-[6%] -z-0 h-[360px] w-[500px] rounded-full bg-veloz-orange/12 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 right-[6%] -z-0 h-[320px] w-[420px] rounded-full bg-veloz-orange/10 blur-[100px]"
      />
      {/* Grid tenue de fondo, coherente con la sección oscura de arriba. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-0 opacity-[0.06] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <Reveal className="relative mx-auto max-w-3xl text-center">
        <RevealItem>
          <span className="inline-flex items-center gap-2 rounded-full bg-veloz-orange/15 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-veloz-orange ring-1 ring-veloz-orange/25">
            <span className="h-1.5 w-1.5 rounded-full bg-veloz-orange" />
            {comparison.eyebrow}
          </span>
        </RevealItem>
        <RevealItem>
          <h2 className="mt-6 font-display text-[2rem] font-bold leading-[1.05] tracking-tight text-veloz-white sm:text-5xl lg:text-6xl">
            {comparison.titleLead}{" "}
            <span className="text-veloz-orange">{comparison.titleAccent}</span>
          </h2>
        </RevealItem>
        <RevealItem>
          <p className="mt-5 text-base text-veloz-white/70 sm:text-lg">
            {comparison.subtitle}
          </p>
        </RevealItem>
      </Reveal>

      <Reveal className="relative mx-auto mt-16 max-w-5xl lg:mt-24">
        <div className="relative grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10">
          {/* Badge central "vs" — separador editorial visible en desktop. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 lg:block"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-veloz-dark text-veloz-white ring-1 ring-veloz-white/15 shadow-[0_0_30px_5px_rgba(255,90,10,0.35)]">
              <span className="font-display text-sm font-bold uppercase tracking-wider">
                vs
              </span>
            </div>
          </div>

          {/* Columna 1 — Mensajero propio (contra) */}
          <RevealItem className="h-full">
            <div className="relative h-full rounded-2xl bg-veloz-white/[0.04] p-6 ring-1 ring-veloz-white/10 backdrop-blur-sm sm:p-8">
              <div className="mb-6 flex items-baseline justify-between">
                <h3 className="font-display text-xl font-semibold text-veloz-white/70 sm:text-2xl">
                  {internal.label}
                </h3>
                <span className="font-display text-xs font-semibold uppercase tracking-wider text-veloz-white/30">
                  Costo fijo
                </span>
              </div>
              <ul className="space-y-3.5">
                {internal.items.map((it) => (
                  <li
                    key={it}
                    className="group/item flex items-center gap-3 text-veloz-white/55"
                  >
                    <span className="inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-veloz-white/[0.06] ring-1 ring-veloz-white/10">
                      <X className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </span>
                    <span className="text-sm line-through decoration-veloz-white/20 sm:text-[15px]">
                      {it}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealItem>

          {/* Columna 2 — VELOZ (a favor) */}
          <RevealItem className="h-full">
            <div className="relative h-full overflow-hidden rounded-2xl bg-veloz-white p-6 ring-2 ring-veloz-orange shadow-[0_25px_60px_-25px_rgba(255,90,10,0.55),0_0_0_1px_rgba(255,90,10,0.4)] sm:p-8">
              {/* Wash naranja diagonal muy sutil dentro de la card blanca. */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-0 bg-gradient-to-br from-veloz-orange/5 via-transparent to-veloz-orange/10"
              />
              <div className="relative mb-6 flex items-baseline justify-between">
                <h3 className="font-display text-xl font-semibold text-veloz-dark sm:text-2xl">
                  {veloz.label}
                </h3>
                <span className="rounded-full bg-veloz-orange/10 px-2.5 py-1 font-display text-[10px] font-semibold uppercase tracking-wider text-veloz-orange ring-1 ring-veloz-orange/20">
                  Plan mensual
                </span>
              </div>
              <ul className="relative space-y-3.5">
                {veloz.items.map((it) => (
                  <li key={it} className="flex items-center gap-3 text-veloz-dark">
                    <span className="inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-veloz-orange text-veloz-white shadow-[0_0_0_4px_rgba(255,90,10,0.12)]">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <span className="text-sm font-medium sm:text-[15px]">{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealItem>
        </div>
      </Reveal>
    </Section>
  );
}
