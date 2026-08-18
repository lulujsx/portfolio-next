import DotList from './DotList'
import { Education as EducationItem } from '../types/portfolio'

type Props = {
  data: EducationItem[]
}

export default function Education({ data }: Props) {
  return (
    <ul className="space-y-4">
      {data.map((item) => (
        <li key={item.id} className="border-l border-line pl-4 sm:pl-5">
          <h3 className="text-[13px] font-medium text-pink sm:text-sm">{item.title}</h3>
          <p className="mt-1 text-xs text-fg">{item.institution}</p>
          <DotList items={item.meta} className="mt-1 text-xs text-dim" />
        </li>
      ))}
    </ul>
  )
}
