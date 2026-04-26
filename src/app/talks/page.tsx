import type { Metadata } from "next";
import Link from "next/link";

import { AnchorNav } from "@/components/AnchorNav";
import { PageHeader } from "@/components/PageHeader";
import { PageContainer } from "@/components/PageContainer";
import { SectionDivider } from "@/components/SectionDivider";
import { TalkCard, type TalkCardData } from "@/components/TalkCard";
import { buildPageMetadata } from "@/lib/site";

const talkGroups: Array<{ year: string; talks: TalkCardData[] }> = [
  {
    year: "2026",
    talks: [
      {
        title: "Chest X-Ray–Predicted Age as a Biomarker for Short- and Long-Term Mortality: Development and Validation of a Deep Learning Model",
        event: "WIMC",
        location: "Warsaw, Poland",
        date: "2026",
        type: "Oral presentation",
        award: "First place",
      },
      {
        title: "Chest X-Ray–Predicted Age as a Biomarker for Short- and Long-Term Mortality: Development and Validation of a Deep Learning Model",
        event: "LIMC",
        location: "Lublin, Poland",
        date: "2026",
        type: "Oral presentation",
        award: "First place",
      },
      {
        title: "Electro-Anatomical Mapping: AI-Driven 3D Structural Estimations from 12-Lead ECG Data",
        event: "LIMC",
        location: "Lublin, Poland",
        date: "2026",
        type: "Research presentation",
        award: "First place",
      },
      {
        title: "Chest X-Ray–Predicted Age as a Biomarker for Short- and Long-Term Mortality: Development and Validation of a Deep Learning Model",
        event: "SIMC",
        location: "Details to be announced",
        date: "Confirmed for 2026",
        type: "Confirmed talk",
        note: "Upcoming presentation confirmed.",
      },
      {
        title: "Chest X-Ray–Predicted Age as a Biomarker for Short- and Long-Term Mortality: Development and Validation of a Deep Learning Model",
        event: "COPM26",
        location: "Details to be announced",
        date: "Confirmed for 2026",
        type: "Confirmed talk",
        note: "Upcoming presentation confirmed.",
      },
    ],
  },
] as const;

const yearFilters = talkGroups.map((group) => ({
  href: `#year-${group.year}`,
  label: `${group.year} (${group.talks.length})`,
}));

const anchors = [
  { href: "#archive", label: "Archive" },
  ...yearFilters,
  { href: "#contact", label: "Contact" },
] as const;

export const metadata: Metadata = buildPageMetadata({
  title: "Talks",
  description:
    "Talks and conference presentations by Deya Aldeen Anas Turki Al Drabee, including award-winning research presentations and confirmed upcoming CXR-age talks.",
  path: "/talks",
});

export default function TalksPage() {
  return (
    <>
      <PageHeader
        eyebrow="Talks"
        title="Conference talks that document the research as it is being built."
        description={
          <>
            <p>
              The current speaking record is centered on cardiology and computational medicine, especially the CXR-age
              project and the ECG-to-structure concept work.
            </p>
            <p className="text-muted">
              First-place recognition at LIMC and WIMC already forms part of the public record, and the CXR-age work
              has two additional confirmed presentations at SIMC and COPM26.
            </p>
          </>
        }
        actions={
          <>
            <Link
              href="/contact"
              className="rounded-full border border-text px-5 py-3 text-sm font-medium text-text transition hover:bg-text hover:text-canvas"
            >
              Speaking inquiries
            </Link>
            <Link
              href="/research"
              className="rounded-full border border-line px-5 py-3 text-sm font-medium text-text transition hover:border-text"
            >
              View research
            </Link>
          </>
        }
        aside={
          <>
            <p className="eyebrow">Speaking Note</p>
            <div className="mt-5 space-y-4 text-sm leading-7 text-muted">
              <p>
                Recent presentations center on cardiology, computational medicine, and the public discussion of
                developing research.
              </p>
              <p>
                Where event details are already known, they are stated directly. Where only confirmation is available
                so far, the archive says that plainly as well.
              </p>
            </div>
          </>
        }
        footer={<AnchorNav ariaLabel="Talk sections" items={anchors} />}
      />

      <section id="archive" className="scroll-mt-28 border-b border-line py-16 sm:py-20">
        <div className="chrome-shell space-y-16">
          <SectionDivider label="Grouped archive" />
          {talkGroups.map((group) => (
            <section key={group.year} id={`year-${group.year}`} className="scroll-mt-28 space-y-6">
              <div className="flex flex-col gap-2 border-b border-line pb-4 sm:flex-row sm:items-end sm:justify-between">
                <h2 className="font-display text-3xl leading-tight tracking-[-0.03em] text-text sm:text-4xl">
                  {group.year}
                </h2>
                <p className="text-sm text-muted">
                  {group.talks.length} {group.talks.length === 1 ? "entry" : "entries"}
                </p>
              </div>

              <div className="grid gap-5 lg:grid-cols-2">
                {group.talks.map((talk) => (
                  <TalkCard key={`${group.year}-${talk.event}-${talk.title}`} talk={talk} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section id="contact" className="scroll-mt-28 py-16 sm:py-20">
        <PageContainer>
          <div className="rounded-[2rem] border border-line px-6 py-8 sm:px-10 sm:py-10">
            <div className="max-w-2xl space-y-5">
              <p className="eyebrow">Speaking Inquiries</p>
              <h2 className="font-display text-3xl leading-tight tracking-[-0.03em] text-text sm:text-4xl">
                For invited speaking, research discussion, or future conference opportunities, the next step is direct contact.
              </h2>
              <p className="text-base leading-8 text-text sm:text-lg">
                Public email and ORCID are available on the contact page for invitations, follow-up, and academic
                correspondence.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full border border-text px-5 py-3 text-sm font-medium text-text transition hover:bg-text hover:text-canvas"
              >
                Go to contact
              </Link>
              <Link
                href="/research"
                className="rounded-full border border-line px-5 py-3 text-sm font-medium text-muted transition hover:border-text hover:text-text"
              >
                Research context
              </Link>
            </div>
          </div>
        </PageContainer>
      </section>
    </>
  );
}
