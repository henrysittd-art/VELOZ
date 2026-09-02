import Link from "next/link";
import { siteConfig } from "@/config/site";
import { copy } from "@/config/copy";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const { footer } = copy;

  return (
    <footer className="bg-veloz-dark text-veloz-white/80">
      <Container>
        <div className="grid grid-cols-1 gap-10 border-t border-veloz-white/10 py-14 sm:grid-cols-3 sm:gap-8 lg:py-16">
          <div>
            <Logo variant="onDark" height={56} />
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              {footer.tagline}
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-veloz-white">
              {footer.nav.title}
            </h4>
            <ul className="mt-4 space-y-2">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm transition-colors hover:text-veloz-orange"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={siteConfig.auth.loginHref}
                  className="text-sm transition-colors hover:text-veloz-orange"
                >
                  {siteConfig.auth.loginLabel}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-veloz-white">
              {footer.contact.title}
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="transition-colors hover:text-veloz-orange"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                  className="transition-colors hover:text-veloz-orange"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>{siteConfig.contact.address}</li>
              <li>
                <a
                  href={siteConfig.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-veloz-orange"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
                  </svg>
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-veloz-white/10 py-6">
          <p className="text-xs text-veloz-white/50">{footer.rights}</p>
        </div>
      </Container>
    </footer>
  );
}
