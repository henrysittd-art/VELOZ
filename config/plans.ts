/**
 * Planes de mensajería VELOZ.
 * Editar aquí precios y cantidades — nunca hardcodear en componentes.
 * El mensaje de WhatsApp de cada plan se genera automáticamente a partir de estos datos.
 */

export type Plan = {
  /** Identificador estable, usado en URLs y tracking. */
  id: string;
  /** Nombre visible del plan (ej. "Plan 125"). */
  name: string;
  /** Cantidad de servicios (recogidas + entregas) incluidos al mes. */
  services: number;
  /** Precio mensual en USD. */
  price: number;
  /** Moneda para mostrar (Panamá usa USD y Balboa 1:1). */
  currency: "USD";
  /** Etiqueta opcional para destacar un plan (ej. "Mayor ahorro"). */
  highlight?: string;
};

export const plans: Plan[] = [
  {
    id: "plan-40",
    name: "Basic",
    services: 40,
    price: 350,
    currency: "USD",
  },
  {
    id: "plan-60",
    name: "Essential",
    services: 60,
    price: 500,
    currency: "USD",
  },
  {
    id: "plan-125",
    name: "Business",
    services: 125,
    price: 1000,
    currency: "USD",
    highlight: "Mayor ahorro",
  },
  {
    id: "plan-200",
    name: "Corporate",
    services: 200,
    price: 1500,
    currency: "USD",
  },
];

/**
 * Formatea el precio del plan con separador de miles (ej. "$1,000").
 * Panamá usa USD, sin decimales para precios redondos de planes.
 */
export function formatPlanPrice(plan: Plan): string {
  return `$${plan.price.toLocaleString("en-US")}`;
}

/**
 * Mensaje de WhatsApp pre-cargado para el botón "Solicitar plan" de cada plan.
 * Ej.: "Hola VELOZ, estoy interesado en el plan Business de $1,000."
 */
export function planWhatsappMessage(plan: Plan): string {
  return `Hola VELOZ, estoy interesado en el plan ${plan.name} de ${formatPlanPrice(plan)}.`;
}
