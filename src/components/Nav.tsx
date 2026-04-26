"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import clsx from "clsx";

import { ThemeToggle } from "@/components/ThemeToggle";
import { site } from "@/lib/site";

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Nav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="nav-backdrop sticky top-0 z-40 border-b border-line backdrop-blur-xl">
      <div className="chrome-shell py-4 sm:py-5">
        <div className="flex items-center justify-between gap-6">
          <Link href="/" className="min-w-0">
            <p className="font-display text-xl tracking-[-0.02em] text-text sm:text-2xl">{site.title}</p>
            <p className="mt-1 text-sm text-muted">{site.subtitle}</p>
          </Link>

          <div className="flex items-center gap-3">
            <nav aria-label="Primary" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm text-muted">
                {site.navigation.map((link) => {
                  const active = isActivePath(pathname, link.href);

                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        aria-current={active ? "page" : undefined}
                        className={clsx(
                          "transition-colors hover:text-text",
                          active ? "font-medium text-text" : "text-muted",
                        )}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <ThemeToggle />

            <button
              type="button"
              className="inline-flex items-center rounded-full border border-line px-4 py-2 text-sm text-text transition hover:border-text md:hidden"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="site-nav-menu"
              onClick={() => setIsOpen((open) => !open)}
            >
              {isOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>

        <nav
          id="site-nav-menu"
          aria-label="Primary"
          className={clsx("overflow-hidden border-t border-line pt-4 md:hidden", isOpen ? "animate-slide-down mt-4 block" : "hidden")}
        >
          <ul className="space-y-3 text-sm">
            {site.navigation.map((link) => {
              const active = isActivePath(pathname, link.href);

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={clsx(
                      "block rounded-xl px-3 py-2 transition-colors",
                      active ? "bg-tag font-medium text-text" : "text-muted hover:bg-tag hover:text-text",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
