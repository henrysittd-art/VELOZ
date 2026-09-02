import { copy } from "@/config/copy";
import { Section } from "@/components/ui/Section";
import { Reveal, RevealItem } from "@/components/ui/Reveal";

export function HowItWorks() {
  const { howItWorks } = copy;

  return (
    <Section
      background="dark"
      id={howItWorks.id}
      className="relative overflow-hidden"
    >
      {/* Aurora / brillo naranja de fondo — 3 orbes en distintas posiciones. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -z-0 h-[560px] w-[720px] -translate-x-1/2 rounded-full bg-veloz-orange/25 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-[10%] -z-0 h-[380px] w-[520px] rounded-full bg-veloz-orange/12 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 right-[8%] -z-0 h-[320px] w-[420px] rounded-full bg-veloz-orange/10 blur-[100px]"
      />
      {/* Grid tenue de fondo para textura tech. */}
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
            {howItWorks.subtitle}
          </span>
        </RevealItem>
        <RevealItem>
          <h2 className="mt-6 font-display text-[2rem] font-bold leading-[1.05] tracking-tight text-veloz-white sm:text-5xl lg:text-6xl">
            {howItWorks.title}
          </h2>
        </RevealItem>
      </Reveal>

      <Reveal className="relative mt-20 lg:mt-28">
        {/* Línea conectora horizontal en desktop, punteada, con degradé naranja. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 right-0 top-[52px] hidden lg:block"
        >
          <div className="mx-auto h-px max-w-5xl bg-[linear-gradient(to_right,transparent,rgba(255,90,10,0.5)_15%,rgba(255,90,10,0.5)_85%,transparent)]" />
        </div>

        <ol className="mx-auto grid max-w-5xl grid-cols-1 gap-14 sm:grid-cols-2 sm:gap-12 lg:grid-cols-4 lg:gap-6">
          {howItWorks.steps.map((step) => (
            <RevealItem key={step.number}>
              <li className="relative flex flex-col items-start text-left lg:items-center lg:text-center">
                {/* Nodo circular sobre la línea (desktop). */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute left-0 top-[46px] hidden h-3 w-3 rounded-full bg-veloz-orange shadow-[0_0_0_5px_rgba(7,19,31,1),0_0_20px_4px_rgba(255,90,10,0.6)] lg:left-1/2 lg:block lg:-translate-x-1/2"
                />

                {/* Número gigante con doble drop-shadow naranja para efecto "encendido". */}
                <span
                  className="relative font-display text-[4.5rem] font-bold leading-none tracking-tight text-veloz-orange sm:text-[5rem] lg:text-[5.5rem]"
                  style={{
                    filter:
                      "drop-shadow(0 0 24px rgba(255,90,10,0.35)) drop-shadow(0 0 8px rgba(255,90,10,0.2))",
                  }}
                >
                  {step.number}
                </span>

                <h3 className="mt-6 font-display text-xl font-semibold text-veloz-white sm:text-2xl lg:mt-8">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-veloz-white/65 sm:text-[15px]">
                  {step.description}
                </p>
              </li>
            </RevealItem>
          ))}
        </ol>
      </Reveal>
    </Section>
  );
}
