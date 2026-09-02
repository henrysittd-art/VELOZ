import { siteConfig } from "@/config/site";
import { waLink } from "@/lib/whatsapp";

/**
 * Botón flotante de WhatsApp visible en toda la navegación.
 * Posición bottom-right con safe-area en iOS y padding-bottom mayor en móvil
 * para no tapar el submit del formulario.
 */
export function WhatsappFloat() {
  return (
    <a
      href={waLink(siteConfig.whatsappMessages.floating)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-4 right-4 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_25px_-10px_rgba(37,211,102,0.7)] transition-transform duration-200 hover:scale-105 active:scale-95 sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
      style={{
        paddingBottom: "env(safe-area-inset-bottom, 0)",
      }}
    >
      <svg
        viewBox="0 0 32 32"
        className="h-7 w-7 sm:h-8 sm:w-8"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.176-.16-.484-.376-.484-.63 0-.61 1.9-1.42 1.9-2.06 0-.36-1.048-2.914-1.393-3.244-.155-.15-.348-.155-.55-.155-.375 0-.766.077-.995.24-.575.415-1.06 1.34-1.062 2.038 0 .78.24 1.75.87 2.86 1.365 2.42 3.05 4.135 5.48 5.14.42.17.75.28.99.28.577 0 1.87-.72 2.14-1.216.135-.25.135-.47.11-.68-.075-.15-.28-.24-.6-.4z" />
        <path d="M16.002 3C8.867 3 3.067 8.8 3.067 15.935c0 2.31.61 4.59 1.77 6.6L3 29l6.72-1.762a12.87 12.87 0 0 0 6.28 1.63h.006c7.135 0 12.933-5.8 12.933-12.933 0-3.46-1.345-6.71-3.79-9.156A12.878 12.878 0 0 0 16.002 3zm0 23.7h-.005a10.72 10.72 0 0 1-5.463-1.494l-.39-.233-4.055 1.064 1.083-3.955-.255-.404a10.735 10.735 0 0 1-1.646-5.744c0-5.937 4.83-10.766 10.775-10.766 2.876 0 5.578 1.12 7.613 3.155A10.71 10.71 0 0 1 26.775 15.9c0 5.937-4.833 10.8-10.773 10.8z" />
      </svg>
    </a>
  );
}
