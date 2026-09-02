/**
 * Copy de las secciones 2–11 de la landing VELOZ.
 * Fuente: docs/BRIEF.md.
 * Editar aquí — nunca hardcodear en componentes.
 * Los íconos se resuelven en el componente por `key` (evitar JSX en config).
 */

export const copy = {
  problem: {
    id: "problema",
    eyebrow: "El problema",
    /**
     * Titular en dos partes. La segunda se resalta en naranja.
     * Ejemplo actual: "Tu equipo no debería perder / tiempo en diligencias."
     */
    titleLead: "Tu equipo no debería perder",
    titleAccent: "tiempo en diligencias.",
    body: "Bancos, documentos, firmas, entregas, retiros y trámites consumen horas de trabajo. Con VELOZ tienes un equipo de mensajería disponible cuando lo necesitas.",
    solutionEyebrow: "VELOZ",
    solutionTitle: "La solución.",
    steps: [
      { number: "01", label: "Tu empresa solicita" },
      { number: "02", label: "VELOZ recoge" },
      { number: "03", label: "Entregamos" },
      { number: "04", label: "Confirmamos" },
    ],
  },

  services: {
    id: "servicios",
    eyebrow: "Servicios",
    /**
     * Title en dos partes; la segunda va en naranja como palabra clave.
     * Ej. actual: "¿Qué puedes / enviar?"
     */
    titleLead: "¿Qué puedes",
    titleAccent: "enviar?",
    subtitle:
      "Un solo equipo para todo lo que tu operación necesita mover en la ciudad.",
    items: [
      {
        key: "documentos",
        title: "Documentos",
        description:
          "Contratos, sobres, correspondencia y documentos empresariales.",
      },
      {
        key: "tramites",
        title: "Trámites",
        description:
          "Diligencias y gestiones que requieran traslado físico.",
      },
      {
        key: "paquetes",
        title: "Paquetes",
        description: "Paquetes pequeños y entregas corporativas.",
      },
      {
        key: "firmas",
        title: "Firmas y retiros",
        description: "Llevamos documentos para firma y los regresamos.",
      },
      {
        key: "sucursales",
        title: "Entregas entre sucursales",
        description:
          "Movimiento de documentación o paquetes entre oficinas.",
      },
      {
        key: "especiales",
        title: "Servicios especiales",
        description:
          "La empresa puede solicitar una diligencia específica.",
      },
    ],
  },

  howItWorks: {
    id: "como-funciona",
    title: "De solicitado a entregado. Sin complicaciones.",
    subtitle: "Cuatro pasos. Nada más.",
    steps: [
      { number: "01", title: "Solicita", description: "Solicita el servicio desde tu empresa." },
      { number: "02", title: "Recogemos", description: "Asignamos un mensajero VELOZ." },
      { number: "03", title: "Entregamos", description: "Realizamos la entrega o diligencia." },
      { number: "04", title: "Confirmamos", description: "Recibes confirmación de que el servicio fue completado." },
    ],
  },

  plans: {
    id: "planes",
    title: "Un plan para cada ritmo de trabajo.",
    subtitle:
      "Elige el plan que mejor se ajusta al volumen mensual de tu empresa.",
    ctaLabel: "SOLICITAR PLAN",
    customBlurb:
      "¿Necesitas más servicios? Creamos un plan a la medida de tu empresa.",
    customCtaLabel: "Solicita un plan a la medida",
    customCtaHref: "#contacto",
  },

  valueAdded: {
    eyebrow: "Por qué VELOZ",
    titleLead: "Más que mensajería.",
    titleAccent: "Una extensión de tu equipo.",
    subtitle:
      "Cambia el costo fijo de un mensajero interno por un servicio flexible y escalable.",
    items: [
      { key: "personal", title: "Sin costos de personal", description: "No necesitas contratar un mensajero interno." },
      { key: "moto", title: "Sin moto ni mantenimiento", description: "Nosotros nos encargamos de la operación." },
      { key: "tiempos", title: "Sin tiempos muertos", description: "Utilizas el servicio cuando realmente lo necesitas." },
      { key: "control", title: "Control de tus servicios", description: "Mantienes registro de las diligencias realizadas." },
      { key: "escalable", title: "Escalable", description: "Si tu operación crece, VELOZ crece contigo." },
      { key: "proveedor", title: "Un solo proveedor", description: "Centralizas las diligencias de tu empresa." },
    ],
  },

  comparison: {
    eyebrow: "Comparación",
    titleLead: "Mensajero propio vs.",
    titleAccent: "VELOZ.",
    subtitle: "Un vistazo rápido para entender la diferencia.",
    columns: {
      internal: {
        label: "Mensajero propio",
        items: [
          "Salario",
          "Prestaciones",
          "Moto",
          "Gasolina",
          "Mantenimiento",
          "Ausencias",
          "Capacidad limitada",
        ],
      },
      veloz: {
        label: "VELOZ",
        items: [
          "Plan mensual",
          "Servicios disponibles",
          "Sin activos adicionales",
          "Sin mantenimiento",
          "Escalable",
          "Control de servicios",
        ],
      },
    },
  },

  audience: {
    title: "Hecho para empresas que se mueven.",
    subtitle:
      "Trabajamos con equipos que necesitan mover documentos y trámites todos los días.",
    sectors: [
      { key: "abogados", label: "Firmas de abogados" },
      { key: "aseguradoras", label: "Aseguradoras y corredores" },
      { key: "contadores", label: "Contadores" },
      { key: "inmobiliarias", label: "Inmobiliarias" },
      { key: "bancos", label: "Bancos y financieras" },
      { key: "comerciales", label: "Empresas comerciales" },
      { key: "clinicas", label: "Clínicas" },
      { key: "corporaciones", label: "Corporaciones" },
    ],
    disclaimer:
      "No nos limitamos a estas industrias. Si tu empresa necesita mensajería, hablemos.",
  },

  leadForm: {
    id: "contacto",
    eyebrow: "Hablemos",
    titleLead: "Empieza a moverte con",
    titleAccent: "VELOZ.",
    subtitle:
      "Cuéntanos de tu empresa y te contactamos para armar el plan ideal.",
    reassurance: "Respondemos en menos de 24 horas · Sin compromiso",
    fields: {
      nombre: { label: "Nombre", placeholder: "Tu nombre" },
      empresa: { label: "Empresa", placeholder: "Nombre de tu empresa" },
      cargo: { label: "Cargo", placeholder: "Ej. Gerente de operaciones" },
      telefono: { label: "Teléfono", placeholder: "+507" },
      correo: { label: "Correo", placeholder: "tu@empresa.com" },
      volumen: {
        label: "Cantidad aproximada de servicios mensuales",
        placeholder: "Selecciona un rango",
      },
    },
    volumes: [
      { value: "10-40", label: "10 – 40" },
      { value: "41-60", label: "41 – 60" },
      { value: "61-125", label: "61 – 125" },
      { value: "126-200", label: "126 – 200" },
      { value: "200+", label: "Más de 200" },
    ],
    submit: "QUIERO CONOCER VELOZ",
    submitting: "Enviando...",
    successTitle: "¡Recibido!",
    successBody: "Un asesor de VELOZ te contactará muy pronto.",
    errorTitle: "No pudimos enviar tu solicitud.",
    errorBody:
      "Intenta de nuevo en un momento o escríbenos por WhatsApp.",
  },

  closing: {
    /**
     * Lema principal. En el componente, después del texto se renderiza el
     * V mark (variant="mark") en lugar de escribir la palabra "Veloz".
     */
    taglineLead: "Lo recogemos. Lo entregamos.",
    subtitle: "Mensajería empresarial simple, rápida y confiable.",
    ctaLabel: "SOLICITAR INFORMACIÓN",
  },

  footer: {
    tagline: "Mensajería empresarial para Panamá.",
    nav: {
      title: "Navegación",
    },
    contact: {
      title: "Contacto",
    },
    rights: `© ${new Date().getFullYear()} VELOZ. Todos los derechos reservados.`,
  },
} as const;

export type Copy = typeof copy;
