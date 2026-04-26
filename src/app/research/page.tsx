import type { Metadata } from "next";
import Link from "next/link";

import { AnchorNav } from "@/components/AnchorNav";
import { FeatureCard } from "@/components/FeatureCard";
import { PageContainer } from "@/components/PageContainer";
import { PageHeader } from "@/components/PageHeader";
import { PublicationCard } from "@/components/PublicationCard";
import { SectionDivider } from "@/components/SectionDivider";
import { buildPageMetadata } from "@/lib/site";

const mentorUrl = "https://www.abdullahourani.com/";

const anchors = [
  { href: "#overview", label: "Overview" },
  { href: "#programs", label: "Programs" },
  { href: "#publications", label: "Publications" },
  { href: "#impact", label: "Impact" },
] as const;

const programs = [
  {
    category: "Active Study Cluster",
    title: "Imaging biomarkers and computational cardiology",
    description:
      "Current work focuses on extracting clinically useful prediction from accessible cardiovascular data. The strongest public-facing study treats chest radiographs as a biomarker of biological aging and mortality risk, while adjacent concept work explores ECG-to-structure translation.",
    meta: "Cardiology · imaging · AI",
    footer: (
      <div className="mt-8 space-y-3 border-t border-line pt-6 text-sm leading-7 text-muted">
        <p>
          The CXR-age project used 404,812 frontal chest radiographs across five datasets and achieved a preliminary
          mean absolute error of 3.6 years with a Pearson correlation of 0.85.
        </p>
        <p>
          A parallel ECG concept project asks whether 12-lead electrical data can support probabilistic 3D structural
          estimation in time-sensitive, low-resource clinical settings.
        </p>
      </div>
    ),
  },
  {
    category: "Research Proposal",
    title: "Preoperative infectious risk modeling in cardiac surgery",
    description:
      "A developing collaboration at the boundary of parasitology and computational medicine, focused on building a predictive framework for Toxoplasma gondii reactivation risk in cardiac surgery and immunosuppressed patients.",
    meta: "Parasitology · risk stratification",
    footer: (
      <div className="mt-8 space-y-3 border-t border-line pt-6 text-sm leading-7 text-muted">
        <p>
          The proposal combines literature synthesis, predictive variable mapping, and an explainable machine-learning
          prototype for preoperative risk scoring.
        </p>
        <p>
          The long-term aim is not just a paper, but a clinically interpretable decision-support tool that could become
          useful before surgery rather than after complications have already developed.
        </p>
      </div>
    ),
  },
  {
    category: "Concept Note",
    title: "Neurocommunication and clinical NLP",
    description:
      "A clinical natural language processing direction centered on Wernicke's aphasia, asking whether Transformer-based attention mechanisms can help decode patient intent from fluent but semantically disrupted speech.",
    meta: "Neurology · clinical NLP",
    footer: (
      <div className="mt-8 space-y-3 border-t border-line pt-6 text-sm leading-7 text-muted">
        <p>
          The concept is structured as a three-phase programme: build a labeled intent corpus, fine-tune a model for
          intent classification, and validate the approach prospectively in clinical settings.
        </p>
        <p>
          If successful, the work could lead not only to a paper and dataset, but also to the foundation of a bedside
          communication aid for post-stroke patients.
        </p>
      </div>
    ),
  },
] as const;

const publications = [
  {
    year: "2026",
    status: "Presented study",
    title: "Chest X-Ray–Predicted Age as a Biomarker for Short- and Long-Term Mortality: Development and Validation of a Deep Learning Model",
    venue: "Conference study in progress",
    citation:
      "Developed with collaborators Mohammed Belal, Adrian Bednarek, and Abdulla Hourani. Preliminary results from 404,812 frontal chest radiographs across five datasets show age prediction with a mean absolute error of 3.6 years, Pearson correlation of 0.85, and a clinically meaningful association between the CXR-age gap and mortality.",
    note: "This project received first place at both LIMC and WIMC. Two additional presentations are already confirmed at SIMC and COPM26.",
  },
  {
    year: "2026",
    status: "Award-winning concept",
    title: "Electro-Anatomical Mapping: AI-Driven 3D Structural Estimations from 12-Lead ECG Data",
    venue: "Cardiology concept paper",
    citation:
      "A concept project proposing the use of AI to translate 12-lead ECG patterns into probabilistic 3D structural estimations of the heart. The goal is not literal patient-specific anatomy, but faster, more intuitive structural interpretation in acute or low-resource settings.",
    note: "Awarded first place at LIMC. Framed explicitly as a proof-of-concept and research direction rather than a finished clinical product.",
  },
  {
    year: "2026",
    status: "Research proposal",
    title: "A Predictive Model for Toxoplasma gondii Reactivation in Cardiac Surgery Patients",
    venue: "Preoperative parasitology risk stratification",
    citation:
      "A proposal that maps known predictive variables for Toxoplasma gondii reactivation in cardiac surgery populations and outlines an explainable machine-learning framework for preoperative risk scoring. The project sits at the intersection of parasitology, surgery, and computational medicine.",
    note: "Developed as a collaboration proposal connected to the Department of General Biology and Parasitology at the Medical University of Warsaw.",
  },
  {
    year: "2026",
    status: "Concept note",
    title: "Decoding Intent in Wernicke's Aphasia: Applying Transformer-Based Attention Mechanisms to Interpret Aphasic Speech",
    venue: "Clinical NLP and post-stroke communication",
    citation:
      "A research concept proposing the first labeled intent corpus for Wernicke's aphasic speech, followed by fine-tuning of a pre-trained language model for intent classification and prospective clinical validation.",
    note: "Structured as a serious translational programme: dataset creation, model development, and potential future bedside communication support.",
  },
] as const;

const impactAreas = [
  {
    title: "Awards",
    summary:
      "Recognition is already part of the public record, but it is presented here as context for the work rather than as decoration around it.",
    bullets: [
      "First place at LIMC for the CXR-age project",
      "First place at WIMC for the CXR-age project",
      "First place at LIMC for the 3D ECG concept project",
    ],
  },
  {
    title: "Affiliations",
    summary:
      "The research is grounded at the Medical University of Warsaw and is beginning to take shape through interdisciplinary academic collaboration.",
    bullets: [
      "Medical University of Warsaw, English Division",
      "Current mentorship under Dr. Abdulla Hourani",
      "Collaboration with physicians and academic teams across institutions",
      "Current proposal work connected to parasitology and computational medicine",
    ],
  },
  {
    title: "Methods",
    summary:
      "The methodological identity of the work is already clear: use accessible data seriously, keep models interpretable when possible, and connect technical design back to practical clinical questions.",
    bullets: [
      "Deep learning on medical imaging and physiological signals",
      "Explainable predictive modeling and risk stratification",
      "Clinical NLP, literature synthesis, and translational concept design",
    ],
  },
] as const;

export const metadata: Metadata = buildPageMetadata({
  title: "Research",
  description:
    "Research overview for Deya Aldeen Anas Turki Al Drabee, spanning cardiology imaging biomarkers, computational prediction, parasitology, and clinical NLP.",
  path: "/research",
});

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="max-w-2xl space-y-3">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="font-display text-3xl leading-tight tracking-[-0.03em] text-text sm:text-4xl">{title}</h2>
      <p className="text-base leading-8 text-text sm:text-lg">{description}</p>
    </div>
  );
}

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        eyebrow="Research"
        title="Research across clinical prediction, imaging biomarkers, and computational medicine."
        description={
          <>
            <p>
              The research record is still early, but it is now specific. It already includes an active cardiology
              study with real results, awarded conference work, a parasitology proposal, and a clinical NLP concept
              note aimed at post-stroke communication.
            </p>
            <p className="text-muted">
              I&apos;ve organized the page to distinguish between active studies, proposals, and concept-stage work so
              that ambition stays visible without overstating what has already been formally published.
            </p>
          </>
        }
        actions={
          <>
            <Link
              href="#publications"
              className="rounded-full border border-text px-5 py-3 text-sm font-medium text-text transition hover:bg-text hover:text-canvas"
            >
              Browse publications
            </Link>
            <Link
              href="/talks"
              className="rounded-full border border-line px-5 py-3 text-sm font-medium text-text transition hover:border-text"
            >
              View talks
            </Link>
          </>
        }
        aside={
          <>
            <p className="eyebrow">Research Statement</p>
            <div className="mt-5 space-y-4 text-sm leading-7 text-muted">
              <p>
                The strongest through-line in the portfolio is using accessible clinical data more intelligently:
                imaging, ECG signals, infectious risk variables, and language output all become sites for better
                prediction and interpretation.
              </p>
              <p>
                The portfolio already reflects a consistent direction: accessible clinical data, interpretable
                prediction, and questions that stay close to real clinical use.
              </p>
            </div>
          </>
        }
        footer={<AnchorNav ariaLabel="Research sections" items={anchors} />}
      />

      <section id="overview" className="scroll-mt-28 border-b border-line py-16 sm:py-20">
        <PageContainer>
          <div className="space-y-8">
            <SectionHeading
              eyebrow="Overview"
              title="The portfolio is early, but it already shows a coherent research direction."
              description="Rather than listing unrelated interests, the page groups the work around a common question: how can clinical judgment become more precise when accessible data is modeled more intelligently?"
            />

            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
              <div className="space-y-5 text-base leading-8 text-text sm:text-lg">
                <p>
                  The current record moves through cardiology, parasitology, and neurocommunication, but the logic is
                  shared. Each project begins with a clinical or communication gap, then asks whether computation can
                  help convert scattered or noisy signals into something more useful.
                </p>
                <p className="text-muted">
                  Some entries are active studies and some are concept-stage work. I keep those categories separate on
                  purpose, because clarity about research stage is part of building a credible early academic record.
                </p>
                <p className="text-muted">
                  The direction is also being shaped under the mentorship of{" "}
                  <a
                    href={mentorUrl}
                    className="text-text underline decoration-line underline-offset-4"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Dr. Abdulla Hourani
                  </a>
                  , a physician and PhD candidate whose public work spans medicine, mathematics, and machine learning.
                  That influence reinforces the emphasis on prediction, interpretability, and real-world clinical use.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-line px-6 py-6 sm:px-7 sm:py-7">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">Core Themes</p>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-text">
                  <li>Clinical prediction from accessible imaging and physiological data</li>
                  <li>Interdisciplinary thinking across medicine, AI, and explanation</li>
                  <li>Research design that stays ambitious without becoming vague</li>
                </ul>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      <section id="programs" className="scroll-mt-28 border-b border-line py-16 sm:py-20">
        <div className="chrome-shell space-y-8">
          <SectionHeading
            eyebrow="Programs"
            title="Three strands currently define the research direction."
            description="These program blocks group the work by method and clinical intent, making it easier to show both what is already underway and what is being built next."
          />

          <div className="grid gap-5 lg:grid-cols-3">
            {programs.map((program) => (
              <FeatureCard key={program.title} {...program} />
            ))}
          </div>
        </div>
      </section>

      <section id="publications" className="scroll-mt-28 border-b border-line py-16 sm:py-20">
        <PageContainer>
          <div className="space-y-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <SectionHeading
                eyebrow="Publications"
                title="Active studies, awarded concepts, and proposal-stage work are gathered here in one record."
                description="At this stage, the archive is broader than a traditional publication list because the public record is still forming. I use one structure for all entries so research stage, title, context, and significance stay easy to scan."
              />
              <Link href="/talks" className="text-sm font-medium text-text underline decoration-line underline-offset-4">
                Cross-reference talks
              </Link>
            </div>

            <SectionDivider label="Current record" />

            <ol className="divide-y divide-line border-y border-line">
              {publications.map((publication) => (
                <li key={publication.title}>
                  <PublicationCard {...publication} />
                </li>
              ))}
            </ol>
          </div>
        </PageContainer>
      </section>

      <section id="impact" className="scroll-mt-28 py-16 sm:py-20">
        <div className="chrome-shell space-y-8">
          <SectionHeading
            eyebrow="Impact"
            title="Recognition, institutional context, and methods give the work real shape."
            description="This final section keeps the research record grounded: what has been recognized, where the work is being built, and how the projects are actually approached."
          />

          <div className="grid gap-5 lg:grid-cols-3">
            {impactAreas.map((area) => (
              <article key={area.title} className="rounded-[1.5rem] border border-line px-6 py-6 sm:px-7 sm:py-7">
                <div className="space-y-4">
                  <h3 className="font-display text-2xl leading-tight tracking-[-0.02em] text-text">{area.title}</h3>
                  <p className="text-sm leading-7 text-text">{area.summary}</p>
                </div>
                <ul className="mt-6 space-y-3 border-t border-line pt-6 text-sm leading-7 text-muted">
                  {area.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
