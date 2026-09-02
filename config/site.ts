/**
 * Configuración global del sitio VELOZ.
 * Editar aquí los datos de contacto, WhatsApp, navegación y copy de secciones.
 * NUNCA hardcodear estos valores dentro de los componentes.
 */

export const siteConfig = {
  name: "VELOZ",
  tagline: "Mensajería empresarial para Panamá",
  description:
    "Servicio de mensajería empresarial B2B en Panamá. Planes mensuales de servicios con recogida y entrega en el mismo día.",
  url: "https://veloz.com.pa",

  contact: {
    email: "hola@veloz.com.pa",
    phone: "+507 0000-0000",
    // Número de WhatsApp en formato internacional SIN símbolos ni espacios.
    // Placeholder — reemplazar cuando el cliente confirme el número real.
    whatsappNumber: "50700000000",
    address: "Ciudad de Panamá, Panamá",
    instagram: "https://instagram.com/veloz",
  },

  /**
   * Mensajes pre-cargados de WhatsApp usados por CTAs generales.
   * El mensaje por plan se genera desde `config/plans.ts` (planWhatsappMessage).
   */
  whatsappMessages: {
    /** Botón flotante presente en toda la navegación. */
    floating: "Hola VELOZ, quisiera información sobre los planes empresariales.",
    /** CTA "Solicitar un servicio" del hero. */
    requestService: "Hola VELOZ, quiero solicitar un servicio de mensajería.",
    /** CTA de la sección de cierre / contacto general. */
    contact: "Hola VELOZ, quisiera información sobre los planes empresariales.",
  },

  /** Navegación del header. Los hrefs son anclas a las secciones de la landing. */
  nav: [
    { label: "Servicios", href: "#servicios" },
    { label: "Cómo funciona", href: "#como-funciona" },
    { label: "Planes", href: "#planes" },
    { label: "Contacto", href: "#contacto" },
  ],

  /** Preparado para la etapa 2 (portal de clientes). La ruta /login no existe todavía. */
  auth: {
    loginLabel: "INICIAR SESIÓN",
    loginHref: "/login",
  },

  /** Copy del bloque Hero. */
  hero: {
    /**
     * Titular en varias líneas. `highlight: true` aplica color veloz-orange.
     * Ejemplo actual: "Lo recogemos. / Lo entregamos. / VELOZ" con VELOZ en naranja.
     */
    titleLines: [
      { text: "Lo recogemos." },
      { text: "Lo entregamos." },
      { text: "VELOZ.", highlight: true },
    ],
    subtitle:
      "Enviamos tus documentos, paquetes y diligencias mientras tu equipo se enfoca en lo importante.",
    primaryCta: "SOLICITAR UN SERVICIO",
    secondaryCta: "VER PLANES",
    /** Ancla al bloque de planes. */
    secondaryHref: "#planes",
    /**
     * Los íconos se resuelven en el componente por `key` para no meter JSX en config.
     * Keys soportados: "rapido" | "seguro" | "seguimiento".
     */
    benefits: [
      { key: "rapido", label: "Rápido" },
      { key: "seguro", label: "Seguro" },
      { key: "seguimiento", label: "Seguimiento de tus servicios" },
    ],
    /** Imagen principal del hero. Reemplazar el archivo dejando el mismo path. */
    motorizadoImage: {
      src: "/images/motorizado-portrait.jpg",
      alt: "Motorizado VELOZ entregando documentos a una ejecutiva",
      width: 1023,
      height: 1537,
    },
  },
} as const;

export type SiteConfig = typeof siteConfig;
