import type { ComponentType, SVGProps } from "react";
import {
  Scale,
  ShieldCheck,
  Calculator,
  Home,
  Landmark,
  Store,
  Stethoscope,
  Building2,
} from "lucide-react";
import { copy } from "@/config/copy";
import { Section } from "@/components/ui/Section";
import { Reveal, RevealItem } from "@/components/ui/Reveal";

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

const icons: Record<string, IconType> = {
  abogados: Scale,
  aseguradoras: ShieldCheck,
  contadores: Calculator,
  inmobiliarias: Home,
  bancos: Landmark,
  comerciales: Store,
  clinicas: Stethoscope,
  corporaciones: Building2,
};

export function Audience() {
  const { audience } = copy;

  return (
    <Section background="white">
      <Reveal className="mx-auto max-w-3xl text-center">
        <RevealItem>
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-veloz-dark sm:text-4xl lg:text-5xl">
            {audience.title}
          </h2>
        </RevealItem>
        <RevealItem>
          <p className="mt-5 text-base text-veloz-text sm:text-lg">
            {audience.subtitle}
          </p>
        </RevealItem>
      </Reveal>

      <Reveal className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:mt-20 lg:grid-cols-4 lg:gap-4">
        {audience.sectors.map((sector) => {
          const Icon = icons[sector.key];
          return (
            <RevealItem key={sector.key}>
              <div className="flex h-full flex-col items-center justify-center gap-3 rounded-2xl border border-veloz-dark/8 bg-veloz-white p-5 text-center transition-all duration-300 hover:border-veloz-orange/40 hover:shadow-sm sm:p-6">
                <span className="text-veloz-orange">
                  {Icon ? <Icon className="h-6 w-6" strokeWidth={1.75} /> : null}
                </span>
                <span className="text-sm font-medium text-veloz-dark sm:text-[15px]">
                  {sector.label}
                </span>
              </div>
            </RevealItem>
          );
        })}
      </Reveal>

      <Reveal className="mt-10 text-center">
        <RevealItem>
          <p className="mx-auto max-w-2xl text-sm text-veloz-text sm:text-base">
            {audience.disclaimer}
          </p>
        </RevealItem>
      </Reveal>
    </Section>
  );
}
