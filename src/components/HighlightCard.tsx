import Link from "next/link";
import type { ReactNode } from "react";

import clsx from "clsx";

type HighlightCardProps = {
  value: string;
  label: string;
  description: string;
  href: string;
  linkLabel: string;
  footer?: ReactNode;
  className?: string;
};

export function HighlightCard({ value, label, description, href, linkLabel, footer, className }: HighlightCardProps) {
  return (
    <article
      className={clsx(
        "glass-card rounded-[1.5rem] border border-line px-6 py-6 shadow-[0_20px_55px_rgba(20,20,20,0.05)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(20,20,20,0.1)] sm:px-7 sm:py-7",
        className,
      )}
    >
      <div className="space-y-4">
        <p className="font-display text-5xl leading-none tracking-[-0.05em] text-text">{value}</p>
        <div className="space-y-2">
          <h3 className="text-sm font-medium uppercase tracking-[0.16em] text-muted">{label}</h3>
          <p className="text-sm leading-7 text-text">{description}</p>
        </div>
      </div>

      {footer ?? (
        <div className="mt-8 pt-6">
          <Link href={href} className="text-sm font-medium text-text underline decoration-line underline-offset-4">
            {linkLabel}
          </Link>
        </div>
      )}
    </article>
  );
}
