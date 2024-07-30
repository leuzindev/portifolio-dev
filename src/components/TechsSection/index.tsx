'use client'
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
          experience="2 anos de experiência"
          delay={0.1}
          icon={FaReact}
        />
        <TechCard
          tech="Next"
          delay={0.2}
          experience="2 anos de experiência"
          icon={SiNextdotjs}
        />
        <TechCard
          tech="React Native"
          delay={0.3}
          experience="1 ano de experiência"
          icon={FaReact}
        />
        <TechCard
          tech="NodeJs"
          delay={0.4}
          experience="2 anos de experiência"
          icon={FaNodeJs}
        />
        <TechCard
          tech="Python"
          delay={0.5}
          experience="3 anos de experiência"
          icon={FaPython}
        />
        <TechCard
          tech="VueJs"
          delay={0.6}
          experience="2 anos de experiência"
          icon={FaVuejs}
        />
        <TechCard
          tech="JavaScript"
          delay={0.7}
          experience="3 anos de experiência"
          icon={SiJavascript}
        />
        <TechCard
          tech="TypeScript"
          delay={0.8}
          experience="2 anos de experiência"
          icon={SiTypescript}
        />
      </div>
    </>
  )
}
