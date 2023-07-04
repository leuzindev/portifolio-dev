import Link from 'next/link'
import { Project } from '../Project'
import { Separator } from '../Separator'
import { TitleSection } from '../TitleSection'

import dtMoney from '@/assets/projects/dtmoney.svg'
import gitHub from '@/assets/projects/github.svg'
import { BsArrowRightShort } from 'react-icons/bs'

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
      <Link href="/projects">
        <span className="mt-9 flex items-center gap-1 text-grey-1">
          Se interresou? Ver todos{' '}
          <BsArrowRightShort className="text-purple-1" />
        </span>
      </Link>
    </div>
  )
}
