import { siteConfig } from "@/config/site";

/**
 * Genera un link de WhatsApp con mensaje pre-cargado.
 * Uso: <a href={waLink(siteConfig.whatsappMessages.general)}>Contactar</a>
 */
export function waLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encoded}`;
}
