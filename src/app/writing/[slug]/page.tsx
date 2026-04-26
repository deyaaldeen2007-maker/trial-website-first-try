import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

import { PageContainer } from "@/components/PageContainer";
import { Tag } from "@/components/Tag";
import { formatPostDate, getAllPosts, getPostBySlug } from "@/lib/posts";
import { buildPageMetadata } from "@/lib/site";

type WritingPostPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: WritingPostPageProps): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Writing",
    };
  }

  return buildPageMetadata({
    title: post.title,
    description: post.description,
    path: `/writing/${post.slug}`,
    type: "article",
  });
}

export default function WritingPostPage({ params }: WritingPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <section className="section-space border-b border-line">
        <PageContainer className="space-y-6">
          <p className="eyebrow">Writing</p>
          <Link href="/writing" className="text-sm font-medium text-muted underline decoration-line underline-offset-4">
            Back to archive
          </Link>
          <div className="space-y-5">
            <div className="flex flex-wrap gap-3 text-sm text-muted">
              <Tag>{post.category}</Tag>
              <span>{formatPostDate(post.date)}</span>
              <span>{post.readingTime}</span>
            </div>
            <h1 className="max-w-4xl font-display text-4xl leading-tight tracking-[-0.04em] text-text sm:text-5xl">
              {post.title}
            </h1>
            <p className="max-w-2xl text-base leading-8 text-text sm:text-lg">{post.description}</p>
          </div>
        </PageContainer>
      </section>

      <section className="py-16 sm:py-20">
        <PageContainer>
          <article className="prose prose-neutral max-w-none prose-headings:tracking-[-0.02em] prose-p:leading-8 prose-a:text-text prose-a:underline prose-a:decoration-line prose-a:underline-offset-4 prose-strong:text-text prose-li:text-text prose-blockquote:border-line prose-blockquote:text-muted">
            <MDXRemote source={post.content} />
          </article>
        </PageContainer>
      </section>
    </>
  );
}
