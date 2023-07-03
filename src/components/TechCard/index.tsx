import { ElementType } from 'react'

interface TechCardProps {
  tech: string
  experience: string
  icon: ElementType
}

export function TechCard({ tech, experience, icon: Icon }: TechCardProps) {
  return (
    <div className="rounded-md bg-card p-5">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-grey-5">{tech}</p>
        <Icon className="text-grey-5" />
      </div>
      <span className=" text-grey-5">{experience}</span>
    </div>
  )
}
