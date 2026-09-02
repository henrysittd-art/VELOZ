"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, AlertCircle, ArrowRight, ShieldCheck } from "lucide-react";
import { copy } from "@/config/copy";
import { siteConfig } from "@/config/site";
import { waLink } from "@/lib/whatsapp";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal, RevealItem } from "@/components/ui/Reveal";

type Status = "idle" | "loading" | "success" | "error";

const inputBase =
  "block w-full rounded-xl border border-veloz-dark/10 bg-veloz-white px-4 py-3 text-base text-veloz-dark placeholder:text-veloz-text/45 " +
  "focus:border-veloz-orange focus:outline-none focus:ring-4 focus:ring-veloz-orange/15 hover:border-veloz-dark/20 " +
  "disabled:cursor-not-allowed disabled:opacity-60 transition-all duration-200";

const labelBase =
  "mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-veloz-dark";

export function LeadForm() {
  const { leadForm } = copy;
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;

    const formEl = e.currentTarget;
    const fd = new FormData(formEl);
    const payload = Object.fromEntries(fd.entries());

    setStatus("loading");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("bad response");
      setStatus("success");
      formEl.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <Section
      background="gray"
      id={leadForm.id}
      className="relative overflow-hidden"
    >
      {/* Radial glow naranja detrás del titular — mismo tratamiento que Problem/ValueAdded. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-8 -z-0 h-[460px] w-[820px] -translate-x-1/2 rounded-full bg-veloz-orange/[0.09] blur-[110px]"
      />

      <Reveal className="relative mx-auto max-w-3xl text-center">
        <RevealItem>
          <span className="inline-flex items-center gap-2 rounded-full bg-veloz-white px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-veloz-orange ring-1 ring-veloz-orange/20">
            <span className="h-1.5 w-1.5 rounded-full bg-veloz-orange" />
            {leadForm.eyebrow}
          </span>
        </RevealItem>
        <RevealItem>
          <h2 className="mt-6 font-display text-[2rem] font-bold leading-[1.05] tracking-tight text-veloz-dark sm:text-5xl lg:text-6xl">
            {leadForm.titleLead}{" "}
            <span className="text-veloz-orange">{leadForm.titleAccent}</span>
          </h2>
        </RevealItem>
        <RevealItem>
          <p className="mx-auto mt-5 max-w-xl text-base text-veloz-text sm:text-lg">
            {leadForm.subtitle}
          </p>
        </RevealItem>
      </Reveal>

      <Reveal className="relative mx-auto mt-12 max-w-2xl lg:mt-16">
        <RevealItem>
          {status === "success" ? (
            <div
              role="status"
              className="relative overflow-hidden rounded-3xl bg-veloz-white p-8 text-center shadow-[0_30px_60px_-30px_rgba(7,19,31,0.2)] ring-1 ring-veloz-dark/5"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-veloz-orange/10 text-veloz-orange">
                <CheckCircle2 className="h-8 w-8" strokeWidth={1.75} />
              </div>
              <h3 className="font-display text-2xl font-semibold text-veloz-dark">
                {leadForm.successTitle}
              </h3>
              <p className="mt-2 text-base text-veloz-text">
                {leadForm.successBody}
              </p>
              <Button
                type="button"
                variant="secondary"
                size="md"
                className="mt-6"
                onClick={() => setStatus("idle")}
              >
                Enviar otra solicitud
              </Button>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              noValidate
              className="relative overflow-hidden rounded-3xl bg-veloz-white p-6 shadow-[0_30px_60px_-30px_rgba(7,19,31,0.2),0_10px_30px_-20px_rgba(255,90,10,0.12)] ring-1 ring-veloz-dark/5 sm:p-8 lg:p-10"
            >
              {/* Barra superior de acento naranja. */}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-veloz-orange to-transparent opacity-70"
              />

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label htmlFor="nombre" className={labelBase}>
                    {leadForm.fields.nombre.label}
                    <span aria-hidden="true" className="h-1 w-1 rounded-full bg-veloz-orange" />
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder={leadForm.fields.nombre.placeholder}
                    disabled={status === "loading"}
                    className={inputBase}
                  />
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="empresa" className={labelBase}>
                    {leadForm.fields.empresa.label}
                    <span aria-hidden="true" className="h-1 w-1 rounded-full bg-veloz-orange" />
                  </label>
                  <input
                    id="empresa"
                    name="empresa"
                    type="text"
                    required
                    autoComplete="organization"
                    placeholder={leadForm.fields.empresa.placeholder}
                    disabled={status === "loading"}
                    className={inputBase}
                  />
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="cargo" className={labelBase}>
                    {leadForm.fields.cargo.label}
                  </label>
                  <input
                    id="cargo"
                    name="cargo"
                    type="text"
                    autoComplete="organization-title"
                    placeholder={leadForm.fields.cargo.placeholder}
                    disabled={status === "loading"}
                    className={inputBase}
                  />
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="telefono" className={labelBase}>
                    {leadForm.fields.telefono.label}
                    <span aria-hidden="true" className="h-1 w-1 rounded-full bg-veloz-orange" />
                  </label>
                  <input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder={leadForm.fields.telefono.placeholder}
                    disabled={status === "loading"}
                    className={inputBase}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="correo" className={labelBase}>
                    {leadForm.fields.correo.label}
                    <span aria-hidden="true" className="h-1 w-1 rounded-full bg-veloz-orange" />
                  </label>
                  <input
                    id="correo"
                    name="correo"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder={leadForm.fields.correo.placeholder}
                    disabled={status === "loading"}
                    className={inputBase}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="volumen" className={labelBase}>
                    {leadForm.fields.volumen.label}
                    <span aria-hidden="true" className="h-1 w-1 rounded-full bg-veloz-orange" />
                  </label>
                  <select
                    id="volumen"
                    name="volumen"
                    required
                    defaultValue=""
                    disabled={status === "loading"}
                    className={inputBase}
                  >
                    <option value="" disabled>
                      {leadForm.fields.volumen.placeholder}
                    </option>
                    {leadForm.volumes.map((v) => (
                      <option key={v.value} value={v.value}>
                        {v.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {status === "error" ? (
                <div
                  role="alert"
                  className="mt-6 flex items-start gap-3 rounded-xl bg-red-50 p-4 text-sm text-red-900"
                >
                  <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0" strokeWidth={2} />
                  <div>
                    <p className="font-semibold">{leadForm.errorTitle}</p>
                    <p className="mt-1">
                      {leadForm.errorBody}{" "}
                      <a
                        href={waLink(siteConfig.whatsappMessages.contact)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-2 font-medium"
                      >
                        WhatsApp
                      </a>
                      .
                    </p>
                  </div>
                </div>
              ) : null}

              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={status === "loading"}
                className="mt-8 w-full"
              >
                {status === "loading" ? leadForm.submitting : leadForm.submit}
                {status !== "loading" ? (
                  <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                ) : null}
              </Button>

              {/* Línea de garantía — reassurance debajo del CTA. */}
              <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-veloz-text/70">
                <ShieldCheck className="h-3.5 w-3.5 text-veloz-orange" strokeWidth={2} />
                {leadForm.reassurance}
              </p>
            </form>
          )}
        </RevealItem>
      </Reveal>
    </Section>
  );
}
