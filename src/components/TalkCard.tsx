import { SectionDivider } from "@/components/SectionDivider";
import { Tag } from "@/components/Tag";

export type TalkCardData = {
  title: string;
  event: string;
  location: string;
  date: string;
  type: string;
  award?: string;
  note?: string;
};

type TalkCardProps = {
  talk: TalkCardData;
};

export function TalkCard({ talk }: TalkCardProps) {
  return (
    <article className="rounded-[1.5rem] border border-line px-6 py-6 sm:px-7 sm:py-7">
      <div className="flex flex-wrap items-center gap-2">
        <Tag>{talk.type}</Tag>
        {talk.award ? <Tag variant="outline">Award</Tag> : null}
      </div>

      <div className="mt-6 space-y-3">
        <h3 className="font-display text-2xl leading-tight tracking-[-0.02em] text-text">{talk.title}</h3>
        <p className="text-sm font-medium uppercase tracking-[0.14em] text-muted">{talk.event}</p>
      </div>

      <SectionDivider className="my-6" />

      <dl className="grid gap-4 sm:grid-cols-3">
        <div className="space-y-1">
          <dt className="text-xs font-medium uppercase tracking-[0.14em] text-muted">Location</dt>
          <dd className="text-sm leading-7 text-text">{talk.location}</dd>
        </div>
        <div className="space-y-1">
          <dt className="text-xs font-medium uppercase tracking-[0.14em] text-muted">Date</dt>
          <dd className="text-sm leading-7 text-text">{talk.date}</dd>
        </div>
        <div className="space-y-1">
          <dt className="text-xs font-medium uppercase tracking-[0.14em] text-muted">Format</dt>
          <dd className="text-sm leading-7 text-text">{talk.type}</dd>
        </div>
      </dl>

      {talk.award || talk.note ? (
        <div className="mt-6 rounded-[1rem] bg-tag px-4 py-4">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">Recognition And Note</p>
          {talk.award ? <p className="mt-2 text-sm leading-7 text-text">{talk.award}</p> : null}
          {talk.note ? <p className="mt-2 text-sm leading-7 text-muted">{talk.note}</p> : null}
        </div>
      ) : null}
    </article>
  );
}
