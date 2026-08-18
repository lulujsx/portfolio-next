import CommandLine from './CommandLine'
import Reveal from './Reveal'
import { TerminalIdentity } from '../types/portfolio'

type Props = {
  id: string
  terminal: TerminalIdentity
  command: string
  children: React.ReactNode
}

export default function TerminalSection({ id, terminal, command, children }: Props) {
  return (
    <section id={id} aria-label={command} className="scroll-mt-24 space-y-3 sm:space-y-4 md:scroll-mt-20">
      <CommandLine terminal={terminal} command={command} />
      <Reveal>{children}</Reveal>
    </section>
  )
}
