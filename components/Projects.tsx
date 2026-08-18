import DotList from './DotList'
import { Project, UiCopy } from '../types/portfolio'

type Props = {
  data: Project[]
  labels: UiCopy
}

export default function Projects({ data, labels }: Props) {
  return (
    <ul className="space-y-3">
      {data.map((project) => {
        const hasLive = Boolean(project.link) && project.link !== project.code

        return (
          <li
            key={project.id}
            className="rounded-md border border-line bg-bar/40 p-4 transition-colors hover:border-pink/40"
          >
            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
              <h3 className="flex items-center gap-2 text-[13px] font-medium text-fg sm:text-sm">
                <span className="text-pink" aria-hidden>
                  ▸
                </span>
                {project.name}
              </h3>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
                {hasLive ? (
                  <a href={project.link} target="_blank" rel="noreferrer" className="terminalLink">
                    [{labels.live}]
                  </a>
                ) : null}
                {project.code ? (
                  <a href={project.code} target="_blank" rel="noreferrer" className="terminalLink">
                    [{labels.code}]
                  </a>
                ) : null}
              </div>
            </div>

            <p className="mt-2 max-w-[72ch] text-[13px] leading-relaxed text-muted">{project.description}</p>

            {project.technologies.length > 0 ? (
              <DotList items={project.technologies} className="mt-2.5 text-xs text-dim" />
            ) : null}
          </li>
        )
      })}
    </ul>
  )
}
