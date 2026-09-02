import { NextResponse } from "next/server";
import { Resend } from "resend";
import { db, type Lead } from "@/lib/db";
import { siteConfig } from "@/config/site";

/** Node runtime — necesitamos fs para el adaptador JSON local. */
export const runtime = "nodejs";

const requiredFields: Array<keyof Lead> = [
  "nombre",
  "empresa",
  "telefono",
  "correo",
  "volumen",
];

function isString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

function isEmail(v: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  for (const field of requiredFields) {
    if (!isString(body[field])) {
      return NextResponse.json(
        { error: `Falta el campo ${field}` },
        { status: 400 },
      );
    }
  }
  if (!isEmail(body.correo as string)) {
    return NextResponse.json({ error: "Correo inválido" }, { status: 400 });
  }

  const lead: Lead = {
    nombre: (body.nombre as string).trim(),
    empresa: (body.empresa as string).trim(),
    cargo: isString(body.cargo) ? (body.cargo as string).trim() : "",
    telefono: (body.telefono as string).trim(),
    correo: (body.correo as string).trim(),
    volumen: (body.volumen as string).trim(),
    createdAt: new Date().toISOString(),
  };

  try {
    await db.saveLead(lead);
  } catch (err) {
    console.error("[leads] db.saveLead failed", err);
    return NextResponse.json(
      { error: "No se pudo guardar el lead" },
      { status: 500 },
    );
  }

  const { RESEND_API_KEY, RESEND_FROM, RESEND_TO } = process.env;
  if (RESEND_API_KEY && RESEND_FROM && RESEND_TO) {
    try {
      const resend = new Resend(RESEND_API_KEY);
      const text = [
        `Nuevo lead desde ${siteConfig.url}`,
        "",
        `Nombre:   ${lead.nombre}`,
        `Empresa:  ${lead.empresa}`,
        `Cargo:    ${lead.cargo || "-"}`,
        `Teléfono: ${lead.telefono}`,
        `Correo:   ${lead.correo}`,
        `Volumen:  ${lead.volumen}`,
        `Fecha:    ${lead.createdAt}`,
      ].join("\n");

      await resend.emails.send({
        from: RESEND_FROM,
        to: RESEND_TO,
        replyTo: lead.correo,
        subject: `Nuevo lead VELOZ — ${lead.empresa}`,
        text,
      });
    } catch (err) {
      // No bloquea la respuesta al usuario si el email falla:
      // el lead ya quedó persistido.
      console.error("[leads] resend.emails.send failed", err);
    }
  }

  return NextResponse.json({ ok: true });
}
