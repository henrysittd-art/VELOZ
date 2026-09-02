# CLAUDE.md — VELOZ

Reglas para futuras sesiones de Claude Code en este repositorio.

## Sobre el proyecto

- Este proyecto es **VELOZ**, un servicio de **mensajería empresarial B2B en Panamá**.
- **Antes de cualquier cambio**, leer `docs/BRIEF.md`. Ese archivo es la fuente de verdad del proyecto.

## Stack técnico

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**

## Configuración editable

- Todos los **textos, precios y planes** viven en archivos de configuración editables:
  - `config/plans.ts` — planes y precios
  - `config/site.ts` — datos de contacto, WhatsApp, mensajes
- **Nunca hardcodear precios ni copy dentro de los componentes.** Siempre importar desde `config/`.

## Diseño

- Minimalista, tecnológico, corporativo.
- Mucho espacio en blanco.
- Tipografía moderna.
- Animaciones sutiles al hacer scroll.
- Debe sentirse como una **startup de logística B2B**, **NO** como courier o app de delivery de comida.

## Identidad visual — Reglas permanentes

### Paleta

Definida como design tokens en `app/globals.css` (variables `--color-veloz-*`) y consumida vía clases Tailwind (`bg-veloz-orange`, `text-veloz-dark`, etc.).

| Token         | Hex       | Uso                                                 |
| ------------- | --------- | --------------------------------------------------- |
| `veloz-orange`| `#FF5A0A` | CTA, botones, íconos, números y palabras clave     |
| `veloz-dark`  | `#07131F` | Fondos oscuros, header, footer, bloques premium    |
| `veloz-white` | `#FFFFFF` | Fondo principal                                     |
| `veloz-gray`  | `#F4F4F4` | Separación de secciones y tarjetas                 |
| `veloz-text`  | `#252A30` | Textos secundarios                                  |

### Proporción 60 / 30 / 10

- **60 % blanco** — domina la página, es el respiro.
- **30 % azul-negro** — estructura: header, footer, bloques premium.
- **10 % naranja** — acento. El naranja **llama la atención, nunca domina**.

### Ritmo de secciones

Las secciones **alternan fondo**: `blanco → gris claro → azul/negro → blanco`. El naranja actúa como **hilo conductor** entre secciones, no como color de fondo.

### Motorizado como elemento de marca

El **motorizado negro con detalles naranja** es un elemento central de la identidad visual y debe aparecer de forma consistente en el hero y bloques clave. No sustituirlo por íconos genéricos de scooter/delivery.

### Restricciones

- **Nunca usar colores fuera de esta paleta sin preguntar.** Si un caso lo requiere (estados de éxito/error, ilustraciones), consultarlo antes.
- **Mucho espacio en blanco, tipografía grande, animaciones sutiles al hacer scroll.** Estética de **startup de logística B2B**, nunca de courier o delivery de comida.

### Tipografía

- **Titulares:** Space Grotesk 700/800 (clase `font-display`).
- **Cuerpo:** Inter 400/500/600 (clase `font-sans`, aplicada por defecto en `<body>`).
- Ambas cargadas con `next/font` en `app/layout.tsx`.

### Componentes base

- `components/ui/Button.tsx` — variantes `primary` / `secondary` / `dark`.
- `components/ui/Section.tsx` — wrapper con prop `background="white" | "gray" | "dark"` que maneja padding vertical y ancho máximo.
- `components/ui/Container.tsx` — ancho máximo consistente para contenido.

Usar siempre estos componentes en lugar de replicar padding/colores a mano.

## Mobile first

- La mayoría del tráfico llega desde **WhatsApp e Instagram**.
- Diseñar y probar primero en mobile, luego desktop.

## Preparado para Etapa 2

- La estructura de carpetas y rutas debe quedar preparada para una **etapa 2** con **portal de clientes y login**.
- No implementar el portal ahora, pero no cerrar la puerta arquitectónicamente.

## Ritmo de trabajo

- **Trabajar sección por sección**, no todo de una vez.
- Esperar confirmación del usuario antes de pasar a la siguiente sección.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
