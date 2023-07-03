interface TechChipProps {
  content: string
}

export function TechChip({ content }: TechChipProps) {
  return (
    <div className="flex h-7 items-center rounded-lg bg-purple-7 px-3">
      <span className="text-sm text-grey-4">{content}</span>
    </div>
  )
}
