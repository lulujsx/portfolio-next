import DotList from './DotList'

type Props = {
  data: string[]
}

export default function Hobbies({ data }: Props) {
  return <DotList items={data} className="text-[13px] text-muted" />
}
