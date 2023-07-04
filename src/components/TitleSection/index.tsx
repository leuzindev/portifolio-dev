import { ReactNode } from 'react'

interface TitleSectionProps {
  subtitle: string
  title: string | ReactNode
  className?: string
}

export function TitleSection({
  title,
  subtitle,
  className,
}: TitleSectionProps) {
  return (
    <div className={` ${className} flex flex-col`}>
      <p className="text-base text-purple-2">{subtitle}</p>
      <h3 className="mt-5 text-3xl font-semibold text-grey-1">{title}</h3>
    </div>
  )
}
