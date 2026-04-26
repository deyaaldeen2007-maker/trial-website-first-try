import { SectionDivider } from "@/components/SectionDivider";
import { Tag } from "@/components/Tag";

type PublicationCardProps = {
  year: string;
  status: string;
  title: string;
  venue: string;
  citation: string;
  note: string;
};

export function PublicationCard({ year, status, title, venue, citation, note }: PublicationCardProps) {
  return (
    <article className="grid gap-6 py-8 md:grid-cols-[6rem_minmax(0,1fr)] md:gap-8">
      <div className="space-y-3 text-sm text-muted">
        <p className="font-medium text-text">{year}</p>
        <Tag variant="outline">{status}</Tag>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="font-display text-2xl leading-tight tracking-[-0.02em] text-text">{title}</h3>
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-muted">{venue}</p>
        </div>
        <p className="text-sm leading-7 text-text">{citation}</p>
        <SectionDivider className="my-6" />
        <p className="text-sm leading-7 text-muted">{note}</p>
      </div>
    </article>
  );
}
