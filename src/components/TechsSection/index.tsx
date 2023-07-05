import { TechCard } from '../TechCard'
import { TitleSection } from '../TitleSection'

import { SiNextdotjs, SiTypescript, SiJavascript } from 'react-icons/si'
import { FaReact, FaNodeJs, FaPython, FaVuejs } from 'react-icons/fa'

export function TechSection() {
  return (
    <>
      <TitleSection title="Conhecimentos" subtitle="../competências" />
      <div className="mt-12 grid grid-cols-4 gap-4  md:!grid-cols-1 lg:grid-cols-2">
        <TechCard
          tech="React"
          experience="1 ano de experiência"
          icon={FaReact}
        />
        <TechCard
          tech="Next"
          experience="1 ano de experiência"
          icon={SiNextdotjs}
        />
        <TechCard
          tech="React Native"
          experience="1 ano de experiência"
          icon={FaReact}
        />
        <TechCard
          tech="NodeJs"
          experience="1 ano de experiência"
          icon={FaNodeJs}
        />
        <TechCard
          tech="Python"
          experience="1 anos de experiência"
          icon={FaPython}
        />
        <TechCard
          tech="VueJs"
          experience="1 ano de experiência"
          icon={FaVuejs}
        />
        <TechCard
          tech="JavaScript"
          experience="1 ano de experiência"
          icon={SiJavascript}
        />
        <TechCard
          tech="TypeScript"
          experience="1 ano de experiência"
          icon={SiTypescript}
        />
      </div>
    </>
  )
}
