import { Project } from '../Project'
import { Separator } from '../Separator'
import { TitleSection } from '../TitleSection'

import dtMoney from '@/assets/dtmoney.svg'
import gitHub from '@/assets/github.svg'

const dt_money = ['React', 'Next']

export function ProjectsSection() {
  return (
    <div className="mt-24">
      <TitleSection title="Projetos em destaque" subtitle="../destaques" />
      <Separator />
      <Project
        image={dtMoney}
        title="DT Money"
        description="BookWise é uma plataforma de avaliação de livros que foi desenvolvida durante o bootcamp Ignite da Rocketseat. Com apenas um Figma precisávamos desenvolver essa aplicação completa Full Stack com Next.js."
        techs={dt_money}
      />
      <Project
        image={gitHub}
        title="DT Money"
        description="BookWise é uma plataforma de avaliação de livros que foi desenvolvida durante o bootcamp Ignite da Rocketseat. Com apenas um Figma precisávamos desenvolver essa aplicação completa Full Stack com Next.js."
        techs={dt_money}
        reverse
        especial
      />
      <Project
        image={dtMoney}
        title="DT Money"
        description="BookWise é uma plataforma de avaliação de livros que foi desenvolvida durante o bootcamp Ignite da Rocketseat. Com apenas um Figma precisávamos desenvolver essa aplicação completa Full Stack com Next.js."
        techs={dt_money}
      />
      <Separator />
    </div>
  )
}
