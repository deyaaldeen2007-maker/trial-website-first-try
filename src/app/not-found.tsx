import Link from "next/link";
import { PageContainer } from "@/components/PageContainer";

export default function NotFound() {
  return (
    <PageContainer className="section-space">
      <div className="max-w-xl space-y-6">
        <p className="eyebrow">404</p>
        <h1 className="font-display text-4xl leading-tight tracking-[-0.04em] text-text sm:text-5xl">
          Page not found.
        </h1>
        <p className="text-base leading-8 text-muted sm:text-lg">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="/"
            className="rounded-full border border-text px-5 py-3 text-sm font-medium text-text transition hover:bg-text hover:text-canvas"
          >
            Go home
          </Link>
          <Link
            href="/research"
            className="rounded-full border border-line px-5 py-3 text-sm font-medium text-text transition hover:border-text"
          >
            View research
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
  );
}
