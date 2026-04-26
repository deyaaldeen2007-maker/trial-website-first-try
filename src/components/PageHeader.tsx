import type { ReactNode } from "react";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: ReactNode;
  actions?: ReactNode;
  aside?: ReactNode;
  footer?: ReactNode;
};

export function PageHeader({ eyebrow, title, description, actions, aside, footer }: PageHeaderProps) {
  return (
    <section className="section-space border-b border-line">
      <div className="chrome-shell space-y-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(16rem,1fr)] lg:items-end">
          <div className="space-y-6">
            <p className="eyebrow">{eyebrow}</p>
            <div className="space-y-5">
              <h1 className="max-w-4xl font-display text-4xl leading-tight tracking-[-0.04em] text-text sm:text-5xl lg:text-[4rem]">
                {title}
              </h1>
              <div className="max-w-2xl space-y-5 text-base leading-8 text-text sm:text-lg">{description}</div>
            </div>
            {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
          </div>

          {aside ? <aside className="rounded-[1.75rem] border border-line p-6 sm:p-7">{aside}</aside> : null}
        </div>

        {footer}
      </div>
    </section>
  );
}
