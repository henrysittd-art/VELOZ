import { ArrowRight, ArrowDown } from "lucide-react";
import { copy } from "@/config/copy";
import { Section } from "@/components/ui/Section";
import { Reveal, RevealItem } from "@/components/ui/Reveal";

export function Problem() {
  const { problem } = copy;

  return (
    <Section
      background="gray"
      id={problem.id}
      className="relative overflow-hidden"
    >
      {/* Radial glow naranja sutil detrás del bloque — profundidad sin dominar. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-veloz-orange/[0.06] blur-3xl"
      />

      <Reveal className="relative mx-auto max-w-3xl text-center">
        <RevealItem>
          <span className="inline-flex items-center gap-2 rounded-full bg-veloz-white px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-veloz-orange ring-1 ring-veloz-orange/20">
            <span className="h-1.5 w-1.5 rounded-full bg-veloz-orange" />
            {problem.eyebrow}
          </span>
        </RevealItem>
        <RevealItem>
          <h2 className="mt-6 font-display text-[2rem] font-bold leading-[1.05] tracking-tight text-veloz-dark sm:text-5xl lg:text-6xl">
            {problem.titleLead}{" "}
            <span className="text-veloz-orange">{problem.titleAccent}</span>
          </h2>
        </RevealItem>
        <RevealItem>
          <p className="mx-auto mt-6 max-w-2xl text-base text-veloz-text sm:text-lg">
            {problem.body}
          </p>
        </RevealItem>
      </Reveal>

      <Reveal className="relative mt-16 lg:mt-24">
        <RevealItem>
          <div className="mx-auto mb-8 flex max-w-5xl items-center gap-4 sm:mb-10 lg:mb-12">
            <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-veloz-orange">
              {problem.solutionEyebrow}
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-veloz-orange/40 to-transparent" />
            <span className="font-display text-lg font-semibold text-veloz-dark sm:text-xl">
              {problem.solutionTitle}
            </span>
          </div>
        </RevealItem>
        <RevealItem>
          <ol className="mx-auto flex max-w-5xl flex-col items-stretch gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-4">
            {problem.steps.map((step, i) => (
              <li key={step.number} className="contents">
                <div className="group relative flex flex-1 flex-col justify-between rounded-2xl bg-veloz-white p-5 text-left ring-1 ring-veloz-dark/5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-25px_rgba(7,19,31,0.25)] hover:ring-veloz-orange/30 sm:p-6 lg:min-h-[140px]">
                  <span className="font-display text-2xl font-bold leading-none text-veloz-orange sm:text-3xl">
                    {step.number}
                  </span>
                  <span className="mt-6 font-display text-sm font-semibold leading-snug text-veloz-dark sm:text-base lg:mt-8">
                    {step.label}
                  </span>
                  {/* Barra inferior naranja al hover — micro-detalle editorial. */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-5 bottom-0 h-0.5 origin-left scale-x-0 rounded-full bg-veloz-orange transition-transform duration-300 group-hover:scale-x-100"
                  />
                </div>
                {i < problem.steps.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="flex items-center justify-center text-veloz-orange/70"
                  >
                    <ArrowDown className="h-5 w-5 lg:hidden" strokeWidth={2} />
                    <ArrowRight className="hidden h-5 w-5 lg:block" strokeWidth={2} />
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
        </RevealItem>
      </Reveal>
    </Section>
  );
}
