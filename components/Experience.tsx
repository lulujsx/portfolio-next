import DotList from './DotList'
import Emphasis from './Emphasis'
import { Experience as ExperienceItem } from '../types/portfolio'

type Props = {
  data: ExperienceItem[]
}

export default function Experience({ data }: Props) {
  return (
    <ol className="space-y-7">
      {data.map((job) => (
        <li key={job.id} className="border-l border-line pl-4 sm:pl-5">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <h3 className="text-[13px] font-medium text-pink sm:text-sm">{job.position}</h3>
            {job.badges.map((badge) => (
              <span key={badge} className="tag">
                {badge}
              </span>
            ))}
          </div>

          <p className="mt-1 flex flex-wrap items-center gap-x-2 text-xs">
            <span className="text-fg">{job.company}</span>
            <span className="text-dim" aria-hidden>
              ·
            </span>
            <span className="text-dim">
              {job.date_start} — {job.date_end}
            </span>
          </p>

          <ul className="mt-3 space-y-1.5 text-[13px] leading-relaxed text-muted">
            {job.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2">
                <span className="mt-[0.15em] shrink-0 text-[10px] text-pink" aria-hidden>
                  ▸
                </span>
                <span className="max-w-[72ch]">
                  <Emphasis text={highlight} />
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-3 grid gap-x-4 gap-y-1 text-xs sm:grid-cols-[3.5rem_minmax(0,1fr)]">
            <span className="text-dim">tech</span>
            <DotList items={job.technologies} className="text-muted" />
          </div>
        </li>
      ))}
    </ol>
  )
}
