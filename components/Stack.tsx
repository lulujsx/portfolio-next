import DotList from './DotList'
import { StackCategory } from '../types/portfolio'

type Props = {
  data: StackCategory[]
}

export default function Stack({ data }: Props) {
  return (
    <ul className="space-y-2.5 text-[13px] sm:space-y-2">
      {data.map((category) => (
        <li key={category.id} className="grid gap-x-6 gap-y-1 sm:grid-cols-[11rem_minmax(0,1fr)]">
          <span className="text-dim">[{category.label}]</span>
          <DotList items={category.items} className="text-muted" />
        </li>
      ))}
    </ul>
  )
}
