import { copy } from "@/config/copy";
import { siteConfig } from "@/config/site";
import { waLink } from "@/lib/whatsapp";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { Reveal, RevealItem } from "@/components/ui/Reveal";

export function Closing() {
  const { closing } = copy;

  return (
    <Section background="dark" className="relative overflow-hidden">
      {/* Aurora naranja — mismos orbes que HowItWorks / Comparison para cerrar en la misma clave. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -z-0 h-[560px] w-[820px] -translate-x-1/2 rounded-full bg-veloz-orange/25 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 left-[10%] -z-0 h-[380px] w-[520px] rounded-full bg-veloz-orange/12 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 right-[8%] -z-0 h-[320px] w-[420px] rounded-full bg-veloz-orange/10 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-0 opacity-[0.06] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <Reveal className="relative mx-auto max-w-4xl text-center">
        <RevealItem>
          <h2 className="font-display text-3xl font-bold leading-[1.15] tracking-tight text-veloz-white sm:text-4xl lg:text-5xl">
            {closing.taglineLead}
          </h2>
        </RevealItem>

        {/* V mark como firma — reemplaza a la palabra "Veloz" del lema. */}
        <RevealItem>
          <div className="mt-6 flex items-center justify-center gap-1 sm:mt-8">
            {/* Sizes explícitos porque Logo fija width/height inline. */}
            <span className="inline-flex sm:hidden">
              <Logo variant="mark" height={56} />
            </span>
            <span className="hidden sm:inline-flex lg:hidden">
              <Logo variant="mark" height={72} />
            </span>
            <span className="hidden lg:inline-flex">
              <Logo variant="mark" height={92} />
            </span>
            <span
              aria-hidden="true"
              className="translate-y-[6px] font-display text-4xl font-bold text-veloz-orange sm:translate-y-2 sm:text-5xl lg:translate-y-3 lg:text-6xl"
            >
              .
            </span>
          </div>
        </RevealItem>

        <RevealItem>
          <p className="mx-auto mt-6 max-w-xl text-base text-veloz-white/70 sm:text-lg">
            {closing.subtitle}
          </p>
        </RevealItem>

        <RevealItem>
          <Button
            as="a"
            href={waLink(siteConfig.whatsappMessages.contact)}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="lg"
            className="mt-10 shadow-[0_20px_50px_-20px_rgba(255,90,10,0.55)]"
          >
            {closing.ctaLabel}
          </Button>
        </RevealItem>
      </Reveal>
    </Section>
  );
}
