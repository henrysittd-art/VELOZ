"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 bg-veloz-white/95 backdrop-blur transition-shadow duration-300 ${
        scrolled
          ? "shadow-[0_1px_2px_rgba(7,19,31,0.06),0_6px_20px_rgba(7,19,31,0.05)]"
          : ""
      }`}
    >
      <Container>
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Link
            href="/"
            aria-label={siteConfig.name}
            className="flex items-center"
          >
            <Logo variant="mark" height={32} priority className="lg:hidden" />
            <Logo variant="mark" height={40} priority className="hidden lg:inline-block" />
          </Link>

          <nav
            aria-label="Navegación principal"
            className="hidden items-center gap-8 lg:flex"
          >
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-veloz-text transition-colors hover:text-veloz-dark"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button
              as="a"
              href={siteConfig.auth.loginHref}
              variant="secondary"
              size="md"
            >
              {siteConfig.auth.loginLabel}
            </Button>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-veloz-dark transition-colors hover:bg-veloz-gray lg:hidden"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {menuOpen ? (
                <>
                  <path d="M6 6l12 12" />
                  <path d="M18 6L6 18" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>

        {menuOpen ? (
          <div
            id="mobile-menu"
            className="border-t border-veloz-gray py-6 lg:hidden"
          >
            <nav
              aria-label="Navegación móvil"
              className="flex flex-col gap-1"
            >
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-md px-2 py-3 text-base font-medium text-veloz-dark transition-colors hover:bg-veloz-gray"
                >
                  {item.label}
                </Link>
              ))}
              <Button
                as="a"
                href={siteConfig.auth.loginHref}
                variant="secondary"
                size="md"
                className="mt-4 w-full"
                onClick={closeMenu}
              >
                {siteConfig.auth.loginLabel}
              </Button>
            </nav>
          </div>
        ) : null}
      </Container>
    </header>
  );
}
