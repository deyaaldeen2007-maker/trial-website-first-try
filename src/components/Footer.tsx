import Link from "next/link";

import { site, type SiteLink } from "@/lib/site";
import { Tag } from "@/components/Tag";

function FooterItem({ link }: { link: SiteLink }) {
  if (link.placeholder) {
    return (
      <span className="inline-flex items-center gap-2 text-muted">
        <span>{link.label}</span>
        <Tag variant="muted">Placeholder</Tag>
      </span>
    );
  }

  if (link.external) {
    return (
      <a href={link.href} target="_blank" rel="noreferrer" className="transition-colors hover:text-text">
        {link.label}
      </a>
    );
  }

  return (
    <Link href={link.href} className="transition-colors hover:text-text">
      {link.label}
    </Link>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-line">
      <div className="chrome-shell py-10 sm:py-12">
        <div
          className={
            site.legalLinks.length > 0
              ? "grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]"
              : "grid gap-10"
          }
        >
          <section className="space-y-4">
            <p className="eyebrow">Profiles And Contact</p>
            <p className="max-w-xl text-sm leading-7 text-muted">
              Public email, contact details, and ORCID provide the clearest routes for correspondence and academic
              attribution.
            </p>
            <ul className="space-y-2 text-sm">
              {site.profileLinks.map((link) => (
                <li key={link.label}>
                  <FooterItem link={link} />
                </li>
              ))}
            </ul>
          </section>

          {site.legalLinks.length > 0 ? (
            <section className="space-y-4">
              <p className="eyebrow">Legal</p>
              <ul className="space-y-2 text-sm">
                {site.legalLinks.map((link) => (
                  <li key={link.label}>
                    <FooterItem link={link} />
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>

        <div className="mt-10 border-t border-line pt-4 text-sm text-muted">
          &copy; {year} {site.name}. Personal academic website.
        </div>
      </div>
    </footer>
  );
}
