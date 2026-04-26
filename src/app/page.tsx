import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { FeatureCard } from "@/components/FeatureCard";
import { HighlightCard } from "@/components/HighlightCard";
import { PageContainer } from "@/components/PageContainer";
import { PhotoLightbox } from "@/components/PhotoLightbox";
import { buildPageMetadata, site } from "@/lib/site";

const mentorUrl = "https://www.abdullahourani.com/";

const mentorGallery = [
  {
    src: "/images/deya-hourani-wimc.jpg",
    alt: "Deya Al Drabee standing with Dr. Abdulla Hourani at WIMC in Warsaw.",
    caption: "With Dr. Abdulla Hourani after WIMC in Warsaw, 2026.",
  },
] as const;

const winsGallery = [
  {
    src: "/images/deya-wimc-award.jpg",
    alt: "WIMC radiology session visual announcing first place for Deya Al Drabee.",
    caption: "WIMC radiology session visual announcing first-place recognition for the CXR-age presentation.",
  },
  {
    src: "/images/deya-limc-program.jpg",
    alt: "LIMC programme listing featuring Deya Al Drabee and the CXR-age presentation.",
    caption: "LIMC programme listing featuring the CXR-age presentation in the systematic review track.",
  },
] as const;

const currentFocus = [
  {
    category: "Active Study",
    title: "CXR-age and mortality risk stratification",
    description:
      "A deep learning study on chest radiographs that tests whether the CXR-age gap predicts short- and long-term mortality beyond standard clinical variables.",
    meta: "404,812 radiographs · first place at LIMC and WIMC",
    href: "/research",
    linkLabel: "See research details",
  },
  {
    category: "Award-Winning Concept",
    title: "3D structural estimation from 12-lead ECG",
    description:
      "A cardiology concept project asking whether standard ECG data can support probabilistic 3D structural estimation in low-resource or time-sensitive settings.",
    meta: "First place at LIMC",
    href: "/research",
    linkLabel: "View concept work",
  },
  {
    category: "Research Proposal",
    title: "Toxoplasma gondii risk modeling in cardiac surgery",
    description:
      "A proposal focused on preoperative infectious risk stratification, combining predictive variable mapping with explainable machine-learning design.",
    meta: "Parasitology · risk stratification",
    href: "/research",
    linkLabel: "Read proposal summary",
  },
  {
    category: "Concept Note",
    title: "Intent decoding in Wernicke's aphasia",
    description:
      "A clinical NLP direction centered on whether Transformer-based attention can help recover communicative intent from aphasic speech.",
    meta: "Neurology · clinical NLP",
    href: "/research",
    linkLabel: "Explore the concept",
  },
] as const;

const highlights = [
  {
    value: "03",
    label: "First-Place Awards",
    description:
      "The CXR-age project placed first at both LIMC and WIMC, and the 3D ECG concept also received first place at LIMC.",
    href: "/talks",
    linkLabel: "See talks and awards",
    footer: (
      <div className="mt-8 flex flex-wrap items-center gap-3 pt-6">
        <PhotoLightbox
          title="Award visuals from the current conference record"
          description="Programme placement, public recognition, and the conference setting around the current award record."
          images={winsGallery}
          triggerLabel="Open win gallery"
          triggerVariant="pill"
          meta="LIMC · WIMC · 2026"
        />
        <Link href="/talks" className="text-sm font-medium text-text underline decoration-line underline-offset-4">
          See talks and awards
        </Link>
      </div>
    ),
  },
  {
    value: "02",
    label: "Confirmed Talks",
    description:
      "Two additional CXR-age presentations are already confirmed for SIMC and COPM26.",
    href: "/talks",
    linkLabel: "Open talks archive",
  },
  {
    value: "04",
    label: "Active Projects",
    description:
      "The current work spans imaging biomarkers, ECG-based structural estimation, infectious-risk modeling, and clinical NLP.",
    href: "/research",
    linkLabel: "View research overview",
  },
] as const;

export const metadata: Metadata = buildPageMetadata({
  title: site.title,
  description:
    "Personal homepage for Deya Aldeen Anas Turki Al Drabee, a medical student at the Medical University of Warsaw working across clinical prediction, computational medicine, and long-form scientific writing.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-line">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(215,204,177,0.18),transparent_45%,rgba(18,18,18,0.04)_100%)]" />
          <div className="absolute inset-x-[24%] top-[10%] h-48 rounded-full bg-[radial-gradient(circle,rgba(215,189,143,0.25),transparent_70%)] blur-3xl" />
          <div className="animate-drift-slow absolute right-[-7rem] top-10 hidden h-[34rem] w-[24rem] overflow-hidden rounded-[2.5rem] opacity-[0.18] shadow-[0_35px_120px_rgba(20,20,20,0.18)] lg:block">
            <Image
              src="/images/deya-presenting-focus.jpg"
              alt=""
              fill
              sizes="26rem"
              className="object-cover"
              aria-hidden="true"
            />
          </div>
          <div className="animate-drift-reverse absolute bottom-[-5rem] left-[-3rem] hidden h-[28rem] w-[20rem] overflow-hidden rounded-[2.25rem] opacity-[0.13] shadow-[0_35px_120px_rgba(20,20,20,0.16)] lg:block">
            <Image
              src="/images/deya-hourani-wimc.jpg"
              alt=""
              fill
              sizes="22rem"
              className="object-cover object-center"
              aria-hidden="true"
            />
          </div>
          <div className="hero-overlay-fade absolute inset-0" />
        </div>

        <PageContainer className="relative section-space section-stack">
          <p className="eyebrow animate-slide-up">Home</p>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.7fr)_minmax(18rem,0.95fr)] lg:items-start">
            <div className="section-stack">
              <p className="animate-slide-up animate-slide-up-delay-1 text-sm font-medium uppercase tracking-[0.16em] text-muted">
                {site.subtitle}
              </p>
              <p className="animate-slide-up animate-slide-up-delay-1 max-w-3xl text-sm leading-7 text-muted">
                Deya Aldeen Anas Turki Al Drabee · Medical University of Warsaw, English Division · Warsaw, Poland
              </p>
              <h1 className="animate-slide-up animate-slide-up-delay-2 max-w-4xl font-display text-4xl leading-tight tracking-[-0.04em] text-text sm:text-5xl lg:text-[4.2rem]">
                Building a research path at the intersection of medicine, prediction, and technology.
              </h1>
              <div className="animate-slide-up animate-slide-up-delay-3 max-w-2xl space-y-6 text-base leading-8 text-text sm:text-lg">
                <p>
                  I&apos;m a medical student at the Medical University of Warsaw, driven by a strong curiosity about how
                  medicine changes through research, data, and technical design. My work centers on how we measure
                  health, how we predict outcomes, and how those predictions can become clinically useful.
                </p>
                <p className="text-muted">
                  Current projects span cardiology, parasitology, and clinical NLP, while my writing extends into
                  broader scientific questions through <em>Beyond the Edge of Certainty</em>. The research direction is
                  also being shaped under the mentorship of Dr. Abdulla Hourani.
                </p>
              </div>

              <div className="animate-slide-up animate-slide-up-delay-3 flex flex-wrap items-center gap-3 pt-1 text-sm text-muted">
                <PhotoLightbox
                  title="A mentorship moment from WIMC"
                  description="A conference image with Dr. Abdulla Hourani from WIMC in Warsaw."
                  images={mentorGallery}
                  triggerLabel="Open mentor photo"
                  triggerVariant="pill"
                  meta="WIMC · Warsaw · 2026"
                />
                <a
                  href={mentorUrl}
                  className="text-sm font-medium text-text underline decoration-line underline-offset-4"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Dr. Abdulla Hourani&apos;s site
                </a>
              </div>

              <div className="animate-slide-up animate-slide-up-delay-3 flex flex-wrap gap-3 pt-2">
                <Link
                  href="/about"
                  className="rounded-full border border-text px-5 py-3 text-sm font-medium text-text transition hover:bg-text hover:text-canvas"
                >
                  About
                </Link>
                <Link
                  href="/research"
                  className="rounded-full border border-line px-5 py-3 text-sm font-medium text-text transition hover:border-text"
                >
                  Research
                </Link>
                <Link
                  href="/writing"
                  className="rounded-full border border-line px-5 py-3 text-sm font-medium text-text transition hover:border-text"
                >
                  Writing
                </Link>
                <Link
                  href="/talks"
                  className="rounded-full border border-line px-5 py-3 text-sm font-medium text-muted transition hover:border-text hover:text-text"
                >
                  Talks
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border border-line px-5 py-3 text-sm font-medium text-muted transition hover:border-text hover:text-text"
                >
                  Contact
                </Link>
              </div>
            </div>

            <aside className="glass-card animate-slide-in-right overflow-hidden rounded-[1.75rem] border border-line shadow-[0_30px_90px_rgba(20,20,20,0.16)]">
              <figure className="space-y-0">
                <div className="relative aspect-[3/4] overflow-hidden bg-paper">
                  <div className="absolute inset-x-0 top-0 z-[1] flex justify-between gap-3 px-5 py-5">
                    <span className="rounded-full border border-white/20 bg-[rgba(17,17,17,0.55)] px-3 py-2 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-white backdrop-blur-md">
                      Research presentation
                    </span>
                    <span className="rounded-full border border-white/20 bg-[rgba(17,17,17,0.45)] px-3 py-2 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-white backdrop-blur-md">
                      Warsaw · 2026
                    </span>
                  </div>
                  <Image
                    src="/images/deya-presenting-focus.jpg"
                    alt="Deya Al Drabee presenting CXR-age research findings at a medical conference in Warsaw."
                    width={960}
                    height={1280}
                    quality={100}
                    sizes="(min-width: 1024px) 32rem, 100vw"
                    className="h-full w-full object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,8,0.08),transparent_30%,rgba(8,8,8,0.1)_100%)]" />
                </div>
                <figcaption className="border-t border-line px-6 py-5 text-sm leading-7 text-muted sm:px-7">
                  Presenting CXR-age results in Warsaw during the 2026 conference season.
                </figcaption>
              </figure>

              <div className="border-t border-line px-6 py-6 sm:px-7">
                <p className="eyebrow">Quick Facts</p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-text">
                  <li>Three first-place conference awards across two research projects.</li>
                  <li>Two additional confirmed CXR-age talks already scheduled.</li>
                  <li>Current work spans cardiology, parasitology, and clinical NLP.</li>
                </ul>
              </div>
            </aside>
          </div>
        </PageContainer>
      </section>

      <section className="border-b border-line py-16 sm:py-20">
        <div className="chrome-shell space-y-8">
          <div className="max-w-2xl space-y-3">
            <p className="eyebrow">Current Focus</p>
            <h2 className="font-display text-3xl leading-tight tracking-[-0.03em] text-text sm:text-4xl">
              Four projects currently define the direction of the work.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {currentFocus.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line py-16 sm:py-20">
        <div className="chrome-shell space-y-8">
          <div className="max-w-2xl space-y-3">
            <p className="eyebrow">Highlights</p>
            <h2 className="font-display text-3xl leading-tight tracking-[-0.03em] text-text sm:text-4xl">
              Awards, talks, and project count provide the clearest snapshot.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {highlights.map((item) => (
              <HighlightCard key={item.label} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <PageContainer>
          <div className="rounded-[2rem] border border-line px-6 py-8 sm:px-10 sm:py-10">
            <div className="max-w-2xl space-y-5">
              <p className="eyebrow">Explore</p>
              <h2 className="font-display text-3xl leading-tight tracking-[-0.03em] text-text sm:text-4xl">
                Follow the work through research, writing, talks, and direct contact.
              </h2>
              <p className="text-base leading-8 text-text sm:text-lg">
                Each section goes deeper into a different part of the record: projects, long-form writing, conference
                presentations, and academic correspondence.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/about"
                className="rounded-full border border-text px-5 py-3 text-sm font-medium text-text transition hover:bg-text hover:text-canvas"
              >
                About
              </Link>
              <Link
                href="/research"
                className="rounded-full border border-line px-5 py-3 text-sm font-medium text-text transition hover:border-text"
              >
                Research
              </Link>
              <Link
                href="/writing"
                className="rounded-full border border-line px-5 py-3 text-sm font-medium text-text transition hover:border-text"
              >
                Writing
              </Link>
              <Link
                href="/talks"
                className="rounded-full border border-line px-5 py-3 text-sm font-medium text-text transition hover:border-text"
              >
                Talks
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-line px-5 py-3 text-sm font-medium text-muted transition hover:border-text hover:text-text"
              >
                Contact
              </Link>
            </div>
          </div>
        </PageContainer>
      </section>
    </>
  );
}
