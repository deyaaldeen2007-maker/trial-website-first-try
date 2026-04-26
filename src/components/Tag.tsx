import type { ReactNode } from "react";

import clsx from "clsx";

type TagProps = {
  children: ReactNode;
  className?: string;
  variant?: "solid" | "outline" | "muted";
};

export function Tag({ children, className, variant = "solid" }: TagProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium uppercase tracking-[0.14em]",
        variant === "solid" && "bg-tag text-text",
        variant === "outline" && "border border-line text-text",
        variant === "muted" && "bg-canvas text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
