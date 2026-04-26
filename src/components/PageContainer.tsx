import type { ReactNode } from "react";

import clsx from "clsx";

type PageContainerProps = {
  children: ReactNode;
  className?: string;
};

export function PageContainer({ children, className }: PageContainerProps) {
  return <div className={clsx("page-shell", className)}>{children}</div>;
}
