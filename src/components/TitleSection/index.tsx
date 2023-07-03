interface TitleSectionProps {
  subtitle: string
  title: string
}

export function TitleSection({ title, subtitle }: TitleSectionProps) {
  return (
    <div className="flex flex-col">
      <p className="text-base text-purple-2">{subtitle}</p>
      <h3 className="mt-5 text-3xl font-semibold text-grey-1">{title}</h3>
    </div>
  )
}
