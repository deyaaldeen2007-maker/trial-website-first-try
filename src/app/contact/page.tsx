import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader } from "@/components/PageHeader";
import { PageContainer } from "@/components/PageContainer";
import { buildPageMetadata } from "@/lib/site";

type ContactChannel = {
  label: string;
  value: string;
  note: string;
  href?: string;
  external?: boolean;
};

const primaryContact: ContactChannel[] = [
  {
    label: "Email",
    value: "deyaaldeen2007@gmail.com",
    note: "Public contact for research correspondence, collaboration, and invited speaking.",
    href: "mailto:deyaaldeen2007@gmail.com",
  },
  {
    label: "Institutional Base",
    value: "Medical University of Warsaw, English Division · Warsaw, Poland",
    note: "Current academic home and the main base for study, research, and conference activity.",
  },
] as const;

const academicProfiles: ContactChannel[] = [
  {
    label: "ORCID",
    value: "0009-0003-6716-3293",
    note: "Active research identifier.",
    href: "https://orcid.org/0009-0003-6716-3293",
    external: true,
  },
] as const;

export const metadata: Metadata = buildPageMetadata({
  title: "Contact",
  description: "Public contact information and academic profile links for Deya Aldeen Anas Turki Al Drabee.",
  path: "/contact",
});

function ContactCard({ item }: { item: ContactChannel }) {
  const content = (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="font-display text-2xl leading-tight tracking-[-0.02em] text-text">{item.label}</h3>
        <p className="break-words text-sm leading-7 text-text">{item.value}</p>
      </div>
      <p className="text-sm leading-7 text-muted">{item.note}</p>
    </div>
  );

  return (
    <article className="rounded-[1.5rem] border border-line px-6 py-6 sm:px-7 sm:py-7">
      {item.href ? (
        <a
          href={item.href}
          className="block transition-colors hover:text-muted"
          target={item.external ? "_blank" : undefined}
          rel={item.external ? "noreferrer" : undefined}
        >
          {content}
        </a>
      ) : (
        content
      )}
    </article>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="A direct public route for research correspondence, conference invitations, and academic contact."
        description={
          <>
            <p>
              Public email and ORCID are the clearest routes for research correspondence, invitations, and academic
              attribution.
            </p>
            <p className="text-muted">
              The contact information here is intended for collaboration, conference communication, and research
              inquiries.
            </p>
          </>
        }
        aside={
          <>
            <p className="eyebrow">Contact Note</p>
            <div className="mt-5 space-y-4 text-sm leading-7 text-muted">
              <p>
                The goal is clarity: if someone wants to reach out after reading the research page or seeing a talk,
                they should not have to search for a real address.
              </p>
              <p>
                ORCID provides a stable research identifier alongside direct email contact.
              </p>
            </div>
          </>
        }
      />

      <section className="border-b border-line py-16 sm:py-20">
        <div className="chrome-shell space-y-8">
          <div className="max-w-2xl space-y-3">
            <p className="eyebrow">Primary Contact</p>
            <h2 className="font-display text-3xl leading-tight tracking-[-0.03em] text-text sm:text-4xl">
              The first destination should be obvious and genuinely usable.
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {primaryContact.map((item) => (
              <ContactCard key={item.label} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section id="academic-profiles" className="border-b border-line py-16 sm:py-20">
        <div className="chrome-shell space-y-8">
          <div className="max-w-2xl space-y-3">
            <p className="eyebrow">Academic Profiles</p>
            <h2 className="font-display text-3xl leading-tight tracking-[-0.03em] text-text sm:text-4xl">
              The public research identity begins with an active ORCID record.
            </h2>
            <p className="text-base leading-8 text-text sm:text-lg">
              The academic profile section stays focused on the identifiers and destinations that are already in active
              use.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {academicProfiles.map((item) => (
              <ContactCard key={item.label} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <PageContainer>
          <div className="rounded-[2rem] border border-line px-6 py-8 sm:px-10 sm:py-10">
            <div className="max-w-2xl space-y-5">
              <p className="eyebrow">Academic Correspondence</p>
              <h2 className="font-display text-3xl leading-tight tracking-[-0.03em] text-text sm:text-4xl">
                Research discussion, invited speaking, and collaboration requests can all start here.
              </h2>
              <p className="text-base leading-8 text-text sm:text-lg">
                For context before reaching out, the research page and talks archive provide the clearest overview of
                current projects and public presentations.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/talks"
                className="rounded-full border border-text px-5 py-3 text-sm font-medium text-text transition hover:bg-text hover:text-canvas"
              >
                Return to talks
              </Link>
              <Link
                href="/research"
                className="rounded-full border border-line px-5 py-3 text-sm font-medium text-muted transition hover:border-text hover:text-text"
              >
                Return to research
              </Link>
            </div>
          </div>
        </PageContainer>
      </section>
    </>
  );
}
