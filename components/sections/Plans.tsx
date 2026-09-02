import Link from "next/link";
import { copy } from "@/config/copy";
import {
  plans,
  formatPlanPrice,
  planWhatsappMessage,
  type Plan,
} from "@/config/plans";
import { waLink } from "@/lib/whatsapp";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal, RevealItem } from "@/components/ui/Reveal";

function PlanCard({ plan, ctaLabel }: { plan: Plan; ctaLabel: string }) {
  const isHighlight = Boolean(plan.highlight);

  return (
    <article
      className={`relative flex h-full flex-col rounded-2xl bg-veloz-white p-6 transition-all duration-300 lg:p-8 ${
        isHighlight
          ? "border-2 border-veloz-orange shadow-[0_20px_50px_-25px_rgba(255,90,10,0.35)]"
          : "border border-veloz-dark/8 hover:border-veloz-dark/20"
      }`}
    >
      {isHighlight ? (
        <span className="absolute -top-3 left-6 rounded-full bg-veloz-orange px-3 py-1 text-xs font-semibold uppercase tracking-wider text-veloz-white">
          {plan.highlight}
        </span>
      ) : null}

      <h3 className="font-display text-xl font-semibold text-veloz-dark">
        {plan.name}
      </h3>
      <p className="mt-1 text-sm text-veloz-text">
        {plan.services} servicios / mes
      </p>

      <div className="mt-6 flex items-baseline gap-1">
        <span className="font-display text-5xl font-bold text-veloz-dark lg:text-6xl">
          {formatPlanPrice(plan)}
        </span>
        <span className="text-sm text-veloz-text">/ mes</span>
      </div>

      <div className="mt-auto pt-8">
        <Button
          as="a"
          href={waLink(planWhatsappMessage(plan))}
          target="_blank"
          rel="noopener noreferrer"
          variant={isHighlight ? "primary" : "secondary"}
          size="md"
          className="w-full"
        >
          {ctaLabel}
        </Button>
      </div>
    </article>
  );
}

export function Plans() {
  const { plans: plansCopy } = copy;

  return (
    <Section background="white" id={plansCopy.id}>
      <Reveal className="mx-auto max-w-3xl text-center">
        <RevealItem>
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-veloz-dark sm:text-4xl lg:text-5xl">
            {plansCopy.title}
          </h2>
        </RevealItem>
        <RevealItem>
          <p className="mt-5 text-base text-veloz-text sm:text-lg">
            {plansCopy.subtitle}
          </p>
        </RevealItem>
      </Reveal>

      <Reveal className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-6">
        {plans.map((plan) => (
          <RevealItem key={plan.id} className="h-full">
            <PlanCard plan={plan} ctaLabel={plansCopy.ctaLabel} />
          </RevealItem>
        ))}
      </Reveal>

      <Reveal className="mt-14 text-center">
        <RevealItem>
          <p className="text-base text-veloz-text sm:text-lg">
            {plansCopy.customBlurb}
          </p>
          <Link
            href={plansCopy.customCtaHref}
            className="mt-3 inline-flex items-center gap-1 font-display text-sm font-semibold text-veloz-orange underline-offset-4 hover:underline"
          >
            {plansCopy.customCtaLabel} →
          </Link>
        </RevealItem>
      </Reveal>
    </Section>
  );
}
