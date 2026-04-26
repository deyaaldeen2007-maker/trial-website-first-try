import clsx from "clsx";

type SectionDividerProps = {
  label?: string;
  className?: string;
};

export function SectionDivider({ label, className }: SectionDividerProps) {
  if (!label) {
    return <div aria-hidden="true" className={clsx("border-t border-line", className)} />;
  }

  return (
    <div aria-hidden="true" className={clsx("flex items-center gap-4", className)}>
      <div className="h-px flex-1 bg-line" />
      <span className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-muted">{label}</span>
      <div className="h-px flex-1 bg-line" />
    </div>
  );
}
