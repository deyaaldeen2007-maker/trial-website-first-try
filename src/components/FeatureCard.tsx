import Link from "next/link";
import type { ReactNode } from "react";

import clsx from "clsx";

type FeatureCardProps = {
  category: string;
  title: string;
  description: string;
  meta?: string;
  href?: string;
  linkLabel?: string;
  className?: string;
  footer?: ReactNode;
};

export function FeatureCard({
  category,
  title,
  description,
  meta,
  href,
  linkLabel,
  className,
  footer,
}: FeatureCardProps) {
  return (
    <article
      className={clsx(
        "glass-card flex h-full flex-col justify-between rounded-[1.5rem] border border-line px-6 py-6 shadow-[0_20px_55px_rgba(20,20,20,0.05)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(20,20,20,0.1)] sm:px-7 sm:py-7",
        className,
      )}
    >
      <div className="space-y-4">
        <div className="space-y-3">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">{category}</p>
          <div className="space-y-3">
            <h3 className="font-display text-2xl leading-tight tracking-[-0.02em] text-text">{title}</h3>
            <p className="text-sm leading-7 text-text">{description}</p>
          </div>
        </div>

        {meta ? <p className="text-xs uppercase tracking-[0.14em] text-muted">{meta}</p> : null}
      </div>

      {footer ?? (href && linkLabel ? (
        <div className="mt-8 pt-6">
          <Link href={href} className="text-sm font-medium text-text underline decoration-line underline-offset-4">
            {linkLabel}
          </Link>
        </div>
      ) : null)}
    </article>
  );
}
