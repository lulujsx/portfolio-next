import { TerminalIdentity } from '../types/portfolio'

type Props = {
  terminal: TerminalIdentity
  command?: string
  caret?: boolean
}

export default function CommandLine({ terminal, command, caret = false }: Props) {
  return (
    <p className="flex flex-wrap items-center gap-x-2 text-[13px] sm:text-sm">
      <span className="shrink-0 font-medium">
        <span className="text-fg">{terminal.user}</span>
        <span className="text-pink">@{terminal.host}</span>
        <span className="text-muted">:~$</span>
      </span>
      {command ? <span className="break-all text-fg">{command}</span> : null}
      {caret ? <span className="caret" aria-hidden /> : null}
    </p>
  )
}
