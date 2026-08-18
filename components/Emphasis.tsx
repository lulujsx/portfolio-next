type Props = {
  text: string
}

/** Renders `**wrapped**` fragments with a brighter weight, everything else as plain text. */
export default function Emphasis({ text }: Props) {
  return (
    <>
      {text.split('**').map((fragment, index) =>
        index % 2 === 1 ? (
          <strong key={index} className="font-medium text-fg">
            {fragment}
          </strong>
        ) : (
          fragment
        )
      )}
    </>
  )
}
