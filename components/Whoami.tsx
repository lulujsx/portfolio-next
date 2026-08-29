import { Profile, UiCopy } from '../types/portfolio'

type Props = {
  profile: Profile
  labels: UiCopy
}

export default function Whoami({ profile, labels }: Props) {
  const rows = [
    { label: labels.location, value: profile.location },
    { label: labels.github, value: profile.github, href: `https://${profile.github}` },
    { label: labels.linkedin, value: profile.linkedin, href: `https://${profile.linkedin}` },
  ]

  return (
    <div className="rounded-md border border-pink/25 bg-pink/[0.02] p-4 sm:p-5">
      <h1 className="sr-only">{profile.name}</h1>

      <dl className="space-y-2 text-[13px] sm:space-y-1.5">
        {rows.map((row) => (
          <div key={row.label} className="grid gap-x-6 sm:grid-cols-[7rem_minmax(0,1fr)]">
            <dt className="text-xs text-dim sm:text-[13px]">{row.label}</dt>
            <dd className="break-all">
              {row.href ? (
                <a href={row.href} target="_blank" rel="noreferrer" className="terminalLink">
                  {row.value}
                </a>
              ) : (
                <span className="text-fg">{row.value}</span>
              )}
            </dd>
          </div>
        ))}
      </dl>

      <p className="mt-5 max-w-[68ch] text-[13px] italic leading-relaxed text-muted">{profile.intro}</p>
    </div>
  )
}
