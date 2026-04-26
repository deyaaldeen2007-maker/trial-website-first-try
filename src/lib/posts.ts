import fs from "node:fs";
import path from "node:path";

import { format, parseISO } from "date-fns";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "src/content/posts");

export type PostFrontmatter = {
  title: string;
  date: string;
  category: string;
  description: string;
  slug: string;
};

export type PostListItem = PostFrontmatter & {
  readingTime: string;
};

export type Post = PostListItem & {
  content: string;
};

function getPostFiles() {
  return fs.readdirSync(postsDirectory).filter((file) => file.endsWith(".mdx"));
}

function calculateReadingTime(content: string) {
  const wordCount = content
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    .replace(/<[^>]+>/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;

  const minutes = Math.max(1, Math.ceil(wordCount / 200));

  return `${minutes} min read`;
}

function assertFrontmatter(data: unknown, fileName: string): PostFrontmatter {
  if (!data || typeof data !== "object") {
    throw new Error(`Missing frontmatter in ${fileName}`);
  }

  const candidate = data as Partial<PostFrontmatter>;
  const dateValue = (data as { date?: unknown }).date;

  if (!candidate.title || typeof candidate.title !== "string") {
    throw new Error(`Missing "title" in ${fileName}`);
  }

  if (!candidate.category || typeof candidate.category !== "string") {
    throw new Error(`Missing "category" in ${fileName}`);
  }

  if (!candidate.description || typeof candidate.description !== "string") {
    throw new Error(`Missing "description" in ${fileName}`);
  }

  if (!candidate.slug || typeof candidate.slug !== "string") {
    throw new Error(`Missing "slug" in ${fileName}`);
  }

  if (!dateValue || (typeof dateValue !== "string" && !(dateValue instanceof Date))) {
    throw new Error(`Missing "date" in ${fileName}`);
  }

  return {
    title: candidate.title,
    date: typeof dateValue === "string" ? dateValue : format(dateValue, "yyyy-MM-dd"),
    category: candidate.category,
    description: candidate.description,
    slug: candidate.slug,
  };
}

function readPostFile(fileName: string): Post {
  const fullPath = path.join(postsDirectory, fileName);
  const source = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(source);
  const frontmatter = assertFrontmatter(data, fileName);

  return {
    ...frontmatter,
    content,
    readingTime: calculateReadingTime(content),
  };
}

export function getAllPosts(): PostListItem[] {
  return getPostFiles()
    .map(readPostFile)
    .sort((a, b) => parseISO(b.date).getTime() - parseISO(a.date).getTime())
    .map(({ content, ...post }) => post);
}

export function getPostBySlug(slug: string): Post | null {
  const postFile = getPostFiles()
    .map((fileName) => readPostFile(fileName))
    .find((post) => post.slug === slug);

  return postFile ?? null;
}

export function formatPostDate(date: string) {
  return format(parseISO(date), "MMMM d, yyyy");
}
