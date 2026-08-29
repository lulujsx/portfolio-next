'use client'

import { useEffect, useRef, useState } from 'react'

const ASCII_FULL = [
  '  _   _   _  _   _  _   _    __   ___   _    _    ___   _  ___  ___ ',
  ' | | | | | |/_\\ | \\| | /_\\   \\ \\ / /_\\ | |  | |  | __| | |/ _ \\/ __|',
  ' | |_| |_| / _ \\| .` |/ _ \\   \\ V / _ \\| |__| |__| _| || | (_) \\__ \\',
  ' |____\\___/_/ \\_\\_|\\_/_/ \\_\\   \\_/_/ \\_\\____|____|___\\__/ \\___/|___/',
].join('\n')

const ASCII_FIRST = [
  '  _   _   _  _   _  _   _   ',
  ' | | | | | |/_\\ | \\| | /_\\  ',
  ' | |_| |_| / _ \\| .` |/ _ \\ ',
  ' |____\\___/_/ \\_\\_|\\_/_/ \\_\\',
].join('\n')

const ASCII_LAST = [
  ' __   ___   _    _    ___   _  ___  ___ ',
  ' \\ \\ / /_\\ | |  | |  | __| | |/ _ \\/ __|',
  '  \\ V / _ \\| |__| |__| _| || | (_) \\__ \\',
  '   \\_/_/ \\_\\____|____|___\\__/ \\___/|___/',
].join('\n')

const BASE_SIZE = 13
const SPLIT_AT = 520

function ScaledAscii({ text, baseSize = BASE_SIZE }: { text: string; baseSize?: number }) {
  const shellRef = useRef<HTMLDivElement>(null)
  const preRef = useRef<HTMLPreElement>(null)
  const [scale, setScale] = useState(0)
  const [height, setHeight] = useState<number | undefined>(undefined)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const shell = shellRef.current
    const pre = preRef.current
    if (!shell || !pre) return

    const update = () => {
      const available = shell.clientWidth
      const natural = pre.scrollWidth
      const next = natural > 0 ? Math.min(1, available / natural) : 1
      setScale(next)
      setHeight(pre.scrollHeight * next)
      setReady(true)
    }

    update()
    const observer = new ResizeObserver(update)
    observer.observe(shell)
    return () => observer.disconnect()
  }, [text, baseSize])

  return (
    <div ref={shellRef} className="min-w-0 overflow-hidden" style={{ height }}>
      <pre
        ref={preRef}
        className="m-0 w-max whitespace-pre font-mono leading-[1.15] text-fg select-none"
        style={{
          fontSize: baseSize,
          transform: `scale(${scale})`,
          transformOrigin: 'left top',
          opacity: ready ? 1 : 0,
        }}
      >
        {text}
      </pre>
    </div>
  )
}

export default function AsciiNameBanner() {
  const rootRef = useRef<HTMLDivElement>(null)
  const [split, setSplit] = useState(false)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const update = () => setSplit(root.clientWidth < SPLIT_AT)
    update()
    const observer = new ResizeObserver(update)
    observer.observe(root)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={rootRef} className="min-w-0 py-0.5" aria-hidden>
      {split ? (
        <div className="space-y-1">
          <ScaledAscii text={ASCII_FIRST} baseSize={14} />
          <ScaledAscii text={ASCII_LAST} baseSize={13} />
        </div>
      ) : (
        <ScaledAscii text={ASCII_FULL} baseSize={BASE_SIZE} />
      )}
    </div>
  )
}
