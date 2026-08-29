import CommandLine from './CommandLine'
import Reveal from './Reveal'
import SectionBanner from './SectionBanner'
import { TerminalIdentity } from '../types/portfolio'

type Props = {
  id: string
  terminal: TerminalIdentity
  command: string
  title: string
  subtitle: string
  /** Optional content between the command and the ABOUT-style heading (e.g. ASCII name). */
  afterCommand?: React.ReactNode
  children: React.ReactNode
}

export default function TerminalSection({
  id,
  terminal,
  command,
  title,
  subtitle,
  afterCommand,
  children,
}: Props) {
  return (
    <section id={id} aria-label={title} className="scroll-mt-24 space-y-3 sm:space-y-4 md:scroll-mt-20">
      <CommandLine terminal={terminal} command={command} />
      {afterCommand}
      <SectionBanner title={title} subtitle={subtitle} />
      <Reveal>{children}</Reveal>
    </section>
  )
}
