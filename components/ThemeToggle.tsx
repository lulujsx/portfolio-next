type Props = {
  theme: 'dark' | 'light'
  label: string
  onToggle: () => void
}

function SunIcon() {
  return (
    <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden className="block">
      <circle cx="8" cy="8" r="3.1" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M8 1.5v1.6M8 12.9v1.6M1.5 8h1.6M12.9 8h1.6M3.3 3.3l1.1 1.1M11.6 11.6l1.1 1.1M12.7 3.3l-1.1 1.1M4.4 11.6l-1.1 1.1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden className="block">
      <path
        d="M13.2 9.4A5.4 5.4 0 0 1 6.6 2.8 5.5 5.5 0 1 0 13.2 9.4Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function ThemeToggle({ theme, label, onToggle }: Props) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={label}
      title={label}
      className="headerChip size-[26px] shrink-0"
    >
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}
