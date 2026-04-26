import Link from "next/link";

import { formatPostDate, type PostListItem } from "@/lib/posts";

import { Tag } from "@/components/Tag";

type PostCardProps = {
  post: PostListItem;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="grid gap-4 md:grid-cols-[10rem_minmax(0,1fr)] md:gap-8">
      <div className="space-y-3 text-sm text-muted">
        <Tag>{post.category}</Tag>
        <p>{formatPostDate(post.date)}</p>
        <p>{post.readingTime}</p>
      </div>

      <div className="space-y-4">
        <div className="space-y-3">
          <h2 className="font-display text-3xl leading-tight tracking-[-0.03em] text-text">
            <Link href={`/writing/${post.slug}`} className="transition-colors hover:text-muted">
              {post.title}
            </Link>
          </h2>
          <p className="max-w-2xl text-base leading-8 text-text sm:text-lg">{post.description}</p>
        </div>
        <Link
          href={`/writing/${post.slug}`}
          className="text-sm font-medium text-text underline decoration-line underline-offset-4"
        >
          Read post
        </Link>
      </div>
    </article>
  );
}
