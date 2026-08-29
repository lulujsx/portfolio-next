type Props = {
  title: string
  subtitle: string
}

/**
 * Adaptive terminal-style banner: `┌─ TITLE ──────┐`
 * The middle rule fills remaining width via overflow-clipped ─ characters.
 */
export default function SectionBanner({ title, subtitle }: Props) {
  return (
    <div className="mb-3 min-w-0 sm:mb-3.5">
      <h2 className="flex min-w-0 items-center text-[12px] font-medium tracking-wide text-pink sm:text-[13px]">
        <span className="shrink-0 whitespace-nowrap" aria-hidden>
          ┌─{' '}
        </span>
        <span className="shrink-0 whitespace-nowrap">{title}</span>
        <span className="shrink-0 whitespace-nowrap" aria-hidden>
          {' '}
        </span>
        <span className="min-w-3 flex-1 overflow-hidden whitespace-nowrap select-none" aria-hidden>
          {'─'.repeat(120)}
        </span>
        <span className="shrink-0" aria-hidden>
          ┐
        </span>
      </h2>
      <p className="mt-1.5 text-[11px] text-dim sm:text-xs">{subtitle}</p>
    </div>
  )
}
