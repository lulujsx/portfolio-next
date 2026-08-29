'use client'

import { useRef, useState } from 'react'
import CommandLine from './CommandLine'
import DotList from './DotList'
import { email, movies } from '../lib/personalInfo'
import { TerminalCopy, TerminalIdentity } from '../types/portfolio'

type Props = {
  terminal: TerminalIdentity
  labels: TerminalCopy
}

type Entry = {
  id: number
  command: string
  output: React.ReactNode
}

function HelpOutput({ labels }: { labels: TerminalCopy }) {
  return (
    <ul className="mt-1 space-y-1 text-[13px] sm:text-sm">
      {labels.commands.map((c) => (
        <li key={c.name} className="grid grid-cols-[5.5rem_minmax(0,1fr)] gap-x-4">
          <span className="text-pink">{c.name}</span>
          <span className="text-muted">{c.description}</span>
        </li>
      ))}
    </ul>
  )
}

function MoviesOutput() {
  return <DotList items={movies} className="mt-1 text-[13px] text-fg sm:text-sm" />
}

function EmailOutput({ labels }: { labels: TerminalCopy }) {
  return (
    <p className="mt-1 text-[13px] text-muted sm:text-sm">
      {labels.emailOpening}{' '}
      <a href={`mailto:${email}`} className="terminalLink">
        {email}
      </a>
    </p>
  )
}

function NotFoundOutput({ command, labels }: { command: string; labels: TerminalCopy }) {
  return (
    <p className="mt-1 text-[13px] sm:text-sm">
      <span className="text-red">{labels.notFound}</span> <span className="text-muted">{command}</span>
      <br />
      <span className="text-dim">{labels.notFoundHint}</span>
    </p>
  )
}

let nextId = 0

export default function TerminalPrompt({ terminal, labels }: Props) {
  const [history, setHistory] = useState<Entry[]>([])
  const [input, setInput] = useState('')
  const [past, setPast] = useState<string[]>([])
  const [pastIndex, setPastIndex] = useState<number | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const run = (raw: string) => {
    const trimmed = raw.trim()
    const key = trimmed.split(/\s+/)[0]?.toLowerCase() ?? ''

    if (key === 'clear') {
      setHistory([])
      return
    }

    let output: React.ReactNode = null
    if (key === 'help') {
      output = <HelpOutput labels={labels} />
    } else if (key === 'email') {
      if (typeof window !== 'undefined') window.location.href = `mailto:${email}`
      output = <EmailOutput labels={labels} />
    } else if (key === 'movies') {
      output = <MoviesOutput />
    } else if (key !== '') {
      output = <NotFoundOutput command={trimmed} labels={labels} />
    }

    setHistory((h) => [...h, { id: nextId++, command: trimmed, output }])
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) setPast((p) => [...p, input.trim()])
    setPastIndex(null)
    run(input)
    setInput('')
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (past.length === 0) return
      const nextIndex = pastIndex === null ? past.length - 1 : Math.max(0, pastIndex - 1)
      setPastIndex(nextIndex)
      setInput(past[nextIndex])
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (pastIndex === null) return
      const nextIndex = pastIndex + 1
      if (nextIndex >= past.length) {
        setPastIndex(null)
        setInput('')
      } else {
        setPastIndex(nextIndex)
        setInput(past[nextIndex])
      }
    }
  }

  return (
    <div className="space-y-3 pb-4 sm:pb-6" onClick={() => inputRef.current?.focus()}>
      <p className="text-[13px] text-dim sm:text-sm">
        {labels.hintBefore}
        <code className="text-pink">help</code>
        {labels.hintAfter}
      </p>

      {history.map((entry) => (
        <div key={entry.id}>
          <CommandLine terminal={terminal} command={entry.command} />
          {entry.output}
        </div>
      ))}

      <form onSubmit={handleSubmit} className="flex flex-wrap items-center gap-x-2 text-[13px] sm:text-sm">
        <span className="shrink-0 font-medium">
          <span className="text-fg">{terminal.user}</span>
          <span className="text-pink">@{terminal.host}</span>
          <span className="text-muted">:~$</span>
        </span>
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
          autoComplete="off"
          autoCapitalize="off"
          autoCorrect="off"
          spellCheck={false}
          aria-label={labels.inputLabel}
          className="min-w-[2ch] flex-1 bg-transparent text-fg caret-pink outline-none"
        />
      </form>
    </div>
  )
}
