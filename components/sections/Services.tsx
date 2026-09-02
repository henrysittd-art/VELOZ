import type { ComponentType, SVGProps } from "react";
import {
  FileText,
  ClipboardCheck,
  Package,
  PenLine,
  Building2,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { copy } from "@/config/copy";
import { Section } from "@/components/ui/Section";
import { Reveal, RevealItem } from "@/components/ui/Reveal";

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

const icons: Record<string, IconType> = {
  documentos: FileText,
  tramites: ClipboardCheck,
  paquetes: Package,
  firmas: PenLine,
  sucursales: Building2,
  especiales: Sparkles,
};

export function Services() {
  const { services } = copy;
  const total = services.items.length.toString().padStart(2, "0");

  return (
    <Section
      background="white"
      id={services.id}
      className="relative overflow-hidden"
    >
      {/* Grid decorativo muy sutil de fondo — tech B2B feel. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(7,19,31,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(7,19,31,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <Reveal className="relative mx-auto max-w-3xl text-center">
        <RevealItem>
          <span className="inline-flex items-center gap-2 rounded-full bg-veloz-orange/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-veloz-orange">
            <span className="h-1.5 w-1.5 rounded-full bg-veloz-orange" />
            {services.eyebrow}
          </span>
        </RevealItem>
        <RevealItem>
          <h2 className="mt-6 font-display text-[2rem] font-bold leading-[1.05] tracking-tight text-veloz-dark sm:text-5xl lg:text-6xl">
            {services.titleLead}{" "}
            <span className="text-veloz-orange">{services.titleAccent}</span>
          </h2>
        </RevealItem>
        <RevealItem>
          <p className="mx-auto mt-5 max-w-2xl text-base text-veloz-text sm:text-lg">
            {services.subtitle}
          </p>
        </RevealItem>
      </Reveal>

      <Reveal className="relative mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-6">
        {services.items.map((item, i) => {
          const Icon = icons[item.key];
          const num = (i + 1).toString().padStart(2, "0");

          return (
            <RevealItem key={item.key}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-veloz-dark/8 bg-veloz-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-veloz-orange/40 hover:shadow-[0_20px_45px_-20px_rgba(7,19,31,0.18)] lg:p-8">
                {/* Barra superior naranja al hover. */}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-veloz-orange transition-transform duration-300 group-hover:scale-x-100"
                />

                {/* Contador esquina superior derecha. */}
                <span
                  aria-hidden="true"
                  className="absolute right-5 top-5 font-display text-xs font-semibold tabular-nums text-veloz-dark/25 transition-colors group-hover:text-veloz-orange lg:right-6 lg:top-6"
                >
                  {num} <span className="text-veloz-dark/15">/ {total}</span>
                </span>

                {/* Ícono con tratamiento premium: fondo suave + ring naranja al hover. */}
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-veloz-orange/10 text-veloz-orange ring-1 ring-inset ring-veloz-orange/10 transition-all duration-300 group-hover:bg-veloz-orange group-hover:text-veloz-white group-hover:ring-veloz-orange">
                  {Icon ? <Icon className="h-5 w-5" strokeWidth={1.75} /> : null}
                </div>

                <h3 className="font-display text-xl font-semibold text-veloz-dark">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-veloz-text sm:text-[15px]">
                  {item.description}
                </p>

                {/* Flecha "abrir" abajo-derecha, aparece en hover. */}
                <span
                  aria-hidden="true"
                  className="mt-auto flex items-center justify-end pt-6 text-veloz-orange opacity-0 transition-all duration-300 group-hover:opacity-100"
                >
                  <ArrowUpRight
                    className="h-5 w-5 -translate-x-2 transition-transform duration-300 group-hover:translate-x-0"
                    strokeWidth={2}
                  />
                </span>
              </article>
            </RevealItem>
          );
        })}
      </Reveal>
    </Section>
  );
}
