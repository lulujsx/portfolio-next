import { Locale, TerminalIdentity, UiCopy } from '../types/portfolio'

type Props = {
  terminal: TerminalIdentity
  sections: { id: string; label: string }[]
  locale: Locale
  labels: UiCopy
  onToggleLocale: () => void
  children: React.ReactNode
}

export default function TerminalWindow({
  terminal,
  sections,
  locale,
  labels,
  onToggleLocale,
  children,
}: Props) {
  const title = `${terminal.user}@${terminal.host}: ~`

  return (
    <div className="rounded-lg border border-line bg-panel shadow-[0_24px_80px_-32px_rgba(0,0,0,0.9)]">
      <header className="sticky top-0 z-20 rounded-t-[7px] border-b border-line bg-bar/95 backdrop-blur-sm">
        <div className="flex items-center gap-3 px-3 py-2 sm:px-4">
          <div className="flex shrink-0 items-center gap-1.5" aria-hidden>
            <span className="size-3 rounded-full bg-red/90" />
            <span className="size-3 rounded-full bg-amber/90" />
            <span className="size-3 rounded-full bg-green/90" />
          </div>

          <div className="flex min-w-0 items-center gap-2 rounded-md border border-line bg-panel px-2.5 py-1">
            <span className="shrink-0 text-[11px] text-pink" aria-hidden>
              &gt;_
            </span>
            <span className="truncate text-[11px] text-muted sm:text-xs">{title}</span>
          </div>

          <span className="hidden shrink-0 text-sm text-dim sm:inline" aria-hidden>
            +
          </span>

          <div className="ml-auto flex items-center gap-3 sm:gap-4">
            <nav aria-label={labels.sections} className="hidden items-center gap-4 text-xs md:flex">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="text-muted transition-colors hover:text-pink"
                >
                  {section.label}
                </a>
              ))}
            </nav>

            <button
              type="button"
              onClick={onToggleLocale}
              aria-label={labels.switchLanguage}
              title={labels.switchLanguage}
              className="flex items-center gap-1 rounded-sm border border-line px-1.5 py-0.5 text-[11px] tracking-wide transition-colors hover:border-pink/50"
            >
              <span className={locale === 'en' ? 'text-pink' : 'text-dim'}>EN</span>
              <span className="text-dim" aria-hidden>
                /
              </span>
              <span className={locale === 'es' ? 'text-pink' : 'text-dim'}>ES</span>
            </button>

            <div className="flex shrink-0 items-center gap-3 text-xs text-dim" aria-hidden>
              <span>–</span>
              <span>□</span>
              <span>✕</span>
            </div>
          </div>
        </div>

        <nav
          aria-label={labels.sections}
          className="flex gap-4 overflow-x-auto border-t border-line px-3 pb-2 pt-1.5 text-[11px] md:hidden"
        >
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="shrink-0 text-muted transition-colors hover:text-pink"
            >
              {section.label}
            </a>
          ))}
        </nav>
      </header>

      <div className="space-y-9 px-4 py-7 sm:space-y-10 sm:px-6 sm:py-9 md:px-9 md:py-10">{children}</div>
    </div>
  )
}
