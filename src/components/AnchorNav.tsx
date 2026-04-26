import Link from "next/link";

import clsx from "clsx";

type AnchorNavItem = {
  href: string;
  label: string;
};

type AnchorNavProps = {
  ariaLabel: string;
  items: readonly AnchorNavItem[];
  className?: string;
};

export function AnchorNav({ ariaLabel, items, className }: AnchorNavProps) {
  return (
    <nav aria-label={ariaLabel} className={clsx("overflow-x-auto border-y border-line py-4", className)}>
      <ul className="flex min-w-max gap-3 text-sm text-muted md:min-w-0 md:flex-wrap">
        {items.map((item) => (
          <li key={item.href} className="shrink-0">
            <Link
              href={item.href}
              className="inline-flex rounded-full border border-line px-3 py-2 transition hover:border-text hover:text-text"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
