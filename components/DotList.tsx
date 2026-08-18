import { Fragment } from 'react'

type Props = {
  items: string[]
  className?: string
}

export default function DotList({ items, className = 'text-muted' }: Props) {
  return (
    <span className={`flex flex-wrap items-center gap-x-2 gap-y-1 ${className}`}>
      {items.map((item, index) => (
        <Fragment key={item}>
          {index > 0 ? (
            <span className="text-dim" aria-hidden>
              ·
            </span>
          ) : null}
          <span>{item}</span>
        </Fragment>
      ))}
    </span>
  )
}
