import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { PageContainer } from "@/components/PageContainer";
import { PhotoLightbox } from "@/components/PhotoLightbox";
import { buildPageMetadata } from "@/lib/site";

const mentorGallery = [
  {
    src: "/images/deya-hourani-wimc.jpg",
    alt: "Deya Al Drabee standing with Dr. Abdulla Hourani at WIMC in Warsaw.",
    caption: "With Dr. Abdulla Hourani after WIMC in Warsaw, 2026.",
  },
] as const;

const milestones = [
  {
    year: "2026",
    title: "First-place recognition for CXR-age at WIMC",
    detail: "The chest X-ray age project received first place in Warsaw and became the clearest public expression of the current research direction.",
  },
  {
    year: "2026",
    title: "First-place recognition at LIMC across two projects",
    detail: "Both the CXR-age presentation and the 3D ECG concept project received first-place recognition at LIMC.",
  },
  {
    year: "2026",
    title: "Expanded work across cardiology, parasitology, and clinical NLP",
    detail: "Current projects now span mortality prediction, ECG-based structural estimation, preoperative infectious risk, and language-centered clinical research.",
  },
  {
    year: "Current",
    title: "Medical training at the Medical University of Warsaw",
    detail: "Medical study in Warsaw continues alongside conference work, interdisciplinary research, and the development of a longer academic portfolio.",
  },
] as const;

export const metadata: Metadata = buildPageMetadata({
  title: "About",
  description:
    "About Deya Aldeen Anas Turki Al Drabee, a medical student and researcher at the Medical University of Warsaw working across clinical prediction, computational medicine, and long-form scientific writing.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="section-space border-b border-line">
        <PageContainer className="space-y-8">
          <p className="eyebrow">About</p>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.9fr)] lg:items-start">
            <div className="space-y-6">
              <h1 className="max-w-4xl font-display text-4xl leading-tight tracking-[-0.04em] text-text sm:text-5xl">
                Medical training, interdisciplinary research, and a growing public body of work.
              </h1>

              <div className="max-w-2xl space-y-6 text-base leading-8 text-text sm:text-lg">
                <p>
                  I&apos;m Deya Aldeen Anas Turki Al Drabee, a medical student at the Medical University of Warsaw,
                  English Division. My work is shaped by a strong interest in how medicine changes when clinical
                  questions are examined through research, prediction, and technical design rather than routine alone.
                </p>
                <p>
                  My current research interests center on computational medicine, especially the use of accessible
                  imaging and physiological data to support clearer clinical reasoning. That includes work on chest
                  X-ray age prediction, ECG-based structural estimation, preoperative infectious risk modeling, and
                  language-centered clinical research.
                </p>
                <p>
                  Alongside medicine, I also write about science more broadly. I&apos;m the author of{" "}
                  <em>Beyond the Edge of Certainty: Controversies That Define Modern Physics</em>, a long-form book on
                  the debates and unresolved questions that continue to shape modern physics. My academic direction is
                  also being sharpened through mentorship under Dr. Abdulla Hourani.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <PhotoLightbox
                  title="A mentorship moment from WIMC"
                  description="A conference image with Dr. Abdulla Hourani from WIMC in Warsaw."
                  images={mentorGallery}
                  triggerLabel="Open mentor photo"
                  triggerVariant="pill"
                  meta="WIMC · Warsaw · 2026"
                />
                <Link
                  href="/research"
                  className="rounded-full border border-text px-5 py-3 text-sm font-medium text-text transition hover:bg-text hover:text-canvas"
                >
                  View research
                </Link>
                <Link
                  href="/writing#book"
                  className="rounded-full border border-line px-5 py-3 text-sm font-medium text-text transition hover:border-text"
                >
                  Read the book
                </Link>
              </div>
            </div>

            <aside className="glass-card overflow-hidden rounded-[1.75rem] border border-line shadow-[0_30px_90px_rgba(20,20,20,0.14)]">
              <figure className="space-y-0">
                <div className="relative aspect-[3/4] overflow-hidden bg-paper">
                  <Image
                    src="/images/deya-presenting-focus.jpg"
                    alt="Deya Al Drabee presenting CXR-age research findings in Warsaw."
                    fill
                    sizes="(min-width: 1024px) 32rem, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="border-t border-line px-6 py-5 text-sm leading-7 text-muted sm:px-7">
                  Presenting CXR-age results in Warsaw during the 2026 conference season.
                </figcaption>
              </figure>
            </aside>
          </div>
        </PageContainer>
      </section>

      <section className="py-16 sm:py-20">
        <div className="chrome-shell space-y-8">
          <div className="max-w-2xl space-y-3">
            <p className="eyebrow">Milestones</p>
            <h2 className="font-display text-3xl leading-tight tracking-[-0.03em] text-text sm:text-4xl">
              A few markers in the work so far.
            </h2>
          </div>

          <ol className="divide-y divide-line border-y border-line">
            {milestones.map((item) => (
              <li key={`${item.year}-${item.title}`} className="grid gap-4 py-8 md:grid-cols-[8rem_minmax(0,1fr)]">
                <p className="text-sm font-medium uppercase tracking-[0.14em] text-muted">{item.year}</p>
                <div className="space-y-2">
                  <h3 className="font-display text-2xl leading-tight tracking-[-0.02em] text-text">{item.title}</h3>
                  <p className="max-w-3xl text-sm leading-7 text-text">{item.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
