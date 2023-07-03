import { TechCard } from '../TechCard'
import { TitleSection } from '../TitleSection'

import { FaReact } from 'react-icons/fa'

export function TechSection() {
  return (
    <>
      <TitleSection title="Conhecimentos" subtitle="../competências" />
      <div className="mt-12 grid grid-cols-4 gap-4  md:!grid-cols-1 lg:grid-cols-2">
        <TechCard
          tech="React"
          experience="2 anos de experiência"
          icon={FaReact}
        />
        <TechCard
          tech="React"
          experience="2 anos de experiência"
          icon={FaReact}
        />
        <TechCard
          tech="React"
          experience="2 anos de experiência"
          icon={FaReact}
        />
        <TechCard
          tech="React"
          experience="2 anos de experiência"
          icon={FaReact}
        />
        <TechCard
          tech="React"
          experience="2 anos de experiência"
          icon={FaReact}
        />
        <TechCard
          tech="React"
          experience="2 anos de experiência"
          icon={FaReact}
        />
        <TechCard
          tech="React"
          experience="2 anos de experiência"
          icon={FaReact}
        />
        <TechCard
          tech="React"
          experience="2 anos de experiência"
          icon={FaReact}
        />
      </div>
    </>
  )
}
