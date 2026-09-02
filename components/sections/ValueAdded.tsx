import type { ComponentType, SVGProps } from "react";
import {
  UserMinus,
  Wrench,
  Clock,
  BarChart3,
  Rocket,
  Layers,
  Check,
} from "lucide-react";
import { copy } from "@/config/copy";
import { Section } from "@/components/ui/Section";
import { Reveal, RevealItem } from "@/components/ui/Reveal";

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

const icons: Record<string, IconType> = {
  personal: UserMinus,
  moto: Wrench,
  tiempos: Clock,
  control: BarChart3,
  escalable: Rocket,
  proveedor: Layers,
};

export function ValueAdded() {
  const { valueAdded } = copy;

  return (
    <Section background="gray" className="relative overflow-hidden">
      {/* Glow naranja tenue detrás del titular. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-16 -z-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-veloz-orange/[0.08] blur-[100px]"
      />

      <Reveal className="relative mx-auto max-w-3xl text-center">
        <RevealItem>
          <span className="inline-flex items-center gap-2 rounded-full bg-veloz-white px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-veloz-orange ring-1 ring-veloz-orange/20">
            <span className="h-1.5 w-1.5 rounded-full bg-veloz-orange" />
            {valueAdded.eyebrow}
          </span>
        </RevealItem>
        <RevealItem>
          <h2 className="mt-6 font-display text-[2rem] font-bold leading-[1.05] tracking-tight text-veloz-dark sm:text-5xl lg:text-6xl">
            {valueAdded.titleLead}{" "}
            <span className="text-veloz-orange">{valueAdded.titleAccent}</span>
          </h2>
        </RevealItem>
        <RevealItem>
          <p className="mx-auto mt-5 max-w-2xl text-base text-veloz-text sm:text-lg">
            {valueAdded.subtitle}
          </p>
        </RevealItem>
      </Reveal>

      <Reveal className="relative mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-6">
        {valueAdded.items.map((item) => {
          const Icon = icons[item.key];
          return (
            <RevealItem key={item.key}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-veloz-white p-6 ring-1 ring-veloz-dark/5 transition-all duration-300 hover:-translate-y-0.5 hover:ring-veloz-orange/25 hover:shadow-[0_20px_45px_-25px_rgba(7,19,31,0.18)] lg:p-8">
                {/* Wash naranja diagonal muy sutil al hover. */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-veloz-orange/0 via-veloz-orange/0 to-veloz-orange/[0.04] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                {/* Check badge esquina superior derecha — indica "beneficio incluido". */}
                <span
                  aria-hidden="true"
                  className="absolute right-5 top-5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-veloz-orange/10 text-veloz-orange transition-all duration-300 group-hover:bg-veloz-orange group-hover:text-veloz-white lg:right-6 lg:top-6"
                >
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>

                {/* Ícono en "coin" con doble ring — feel de token/badge premium. */}
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-veloz-orange/15 to-veloz-orange/5 text-veloz-orange ring-1 ring-veloz-orange/20 transition-all duration-300 group-hover:from-veloz-orange group-hover:to-veloz-orange group-hover:text-veloz-white group-hover:ring-veloz-orange">
                  {Icon ? <Icon className="h-6 w-6" strokeWidth={1.75} /> : null}
                </div>

                <h3 className="font-display text-lg font-semibold text-veloz-dark sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-veloz-text sm:text-[15px]">
                  {item.description}
                </p>

                {/* Línea de acento bottom-left que crece al hover. */}
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-6 h-0.5 w-8 origin-left scale-x-0 rounded-full bg-veloz-orange transition-transform duration-300 group-hover:scale-x-100 lg:left-8"
                />
              </article>
            </RevealItem>
          );
        })}
      </Reveal>
    </Section>
  );
}
