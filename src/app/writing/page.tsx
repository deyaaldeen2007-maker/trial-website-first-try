import type { Metadata } from "next";
import Link from "next/link";

import { AnchorNav } from "@/components/AnchorNav";
import { PageHeader } from "@/components/PageHeader";
import { PageContainer } from "@/components/PageContainer";
import { PostCard } from "@/components/PostCard";
import { SectionDivider } from "@/components/SectionDivider";
import { getAllPosts } from "@/lib/posts";
import { buildPageMetadata } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Writing",
  description: "Writing archive, featured book, and long-form notes by Deya Al Drabee.",
  path: "/writing",
});

const anchors = [
  { href: "#overview", label: "Overview" },
  { href: "#book", label: "Book" },
  { href: "#archive", label: "Archive" },
] as const;

export default function WritingPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageHeader
        eyebrow="Writing"
        title="Essays and research notes shaped for slow reading, clear thinking, and future expansion."
        description={
          <>
            <p>
              This page brings together a featured book PDF and a date-sorted archive of essays, notes, and future
              long-form pieces.
            </p>
            <p className="text-muted">
              The book and archive sit together because both belong to the same broader writing practice: explaining
              difficult ideas with care and enough room for real argument.
            </p>
          </>
        }
        aside={
          <>
            <p className="eyebrow">Archive Note</p>
            <div className="mt-5 space-y-4 text-sm leading-7 text-muted">
              <p>The archive includes short essays, research notes, and longer scientific writing.</p>
              <p>The same structure supports both stand-alone book work and smaller pieces written between projects.</p>
            </div>
          </>
        }
        footer={<AnchorNav ariaLabel="Writing sections" items={anchors} />}
      />

      <section id="overview" className="scroll-mt-28 border-b border-line py-16 sm:py-20">
        <PageContainer>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            <div className="space-y-4">
              <p className="eyebrow">Overview</p>
              <h2 className="font-display text-3xl leading-tight tracking-[-0.03em] text-text sm:text-4xl">
                Writing stays close to research, but it also makes room for larger independent questions.
              </h2>
              <p className="text-base leading-8 text-text sm:text-lg">
                The archive is designed for essays and notes that can later grow into talks, project framing documents,
                or longer public-facing pieces without changing the surrounding structure.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-line px-6 py-6 sm:px-7 sm:py-7">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">Archive Principles</p>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-text">
                <li>Featured PDF publications can live beside date-sorted posts.</li>
                <li>Newest posts appear first.</li>
                <li>Each entry carries consistent metadata.</li>
                <li>Single MDX posts render as publication-style reading pages.</li>
              </ul>
            </div>
          </div>
        </PageContainer>
      </section>

      <section id="book" className="scroll-mt-28 border-b border-line py-16 sm:py-20">
        <PageContainer>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.95fr)]">
            <div className="space-y-4">
              <p className="eyebrow">Featured Book</p>
              <h2 className="font-display text-3xl leading-tight tracking-[-0.03em] text-text sm:text-4xl">
                Beyond the Edge of Certainty: Controversies That Define Modern Physics
              </h2>
              <p className="text-base leading-8 text-text sm:text-lg">
                This book is available as a public PDF. It explores the unresolved debates, tensions, and conceptual
                fault lines that continue to shape modern physics.
              </p>
              <p className="text-sm leading-7 text-muted sm:text-base">
                It sits outside the medical core of the portfolio, but it reflects the same habit of following hard
                questions carefully and trying to explain them with clarity rather than noise.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="/books/beyond-the-edge-of-certainty.pdf"
                  className="rounded-full border border-text px-5 py-3 text-sm font-medium text-text transition hover:bg-text hover:text-canvas"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open the book PDF
                </a>
                <Link
                  href="/contact"
                  className="rounded-full border border-line px-5 py-3 text-sm font-medium text-text transition hover:border-text"
                >
                  Get in touch
                </Link>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-line px-6 py-6 sm:px-7 sm:py-7">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">Access Note</p>
              <div className="mt-5 space-y-4 text-sm leading-7 text-text">
                <p>The PDF opens in-browser for direct reading.</p>
                <p className="text-muted">
                  Additional notes, a cover image, or publication context can be added alongside the book over time.
                </p>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      <section id="archive" className="scroll-mt-28 border-b border-line py-16 sm:py-20">
        <PageContainer>
          <div className="space-y-8">
            <div className="space-y-3">
              <p className="eyebrow">Archive</p>
              <h2 className="font-display text-3xl leading-tight tracking-[-0.03em] text-text sm:text-4xl">
                Posts still appear as a chronological archive rather than a loose collection.
              </h2>
            </div>

            <SectionDivider label="Latest posts" />

            {posts.length === 0 ? (
              <div className="rounded-[1.5rem] border border-line px-6 py-7 text-sm leading-7 text-muted">
                No posts have been added yet.
              </div>
            ) : (
              <ol className="divide-y divide-line border-y border-line">
                {posts.map((post) => (
                  <li key={post.slug} className="py-8">
                    <PostCard post={post} />
                  </li>
                ))}
              </ol>
            )}
          </div>
        </PageContainer>
      </section>
    </>
  );
}
