import Link from 'next/link'

import { Project } from '../Project'
import { Separator } from '../Separator'
import { TitleSection } from '../TitleSection'

import igniteCallImg from '@/assets/projects/igniteCall.png'
import spaceTimeImg from '@/assets/projects/nlwSpacetime.png'
import igNewsImg from '@/assets/projects/igNews.png'

import { BsArrowRightShort } from 'react-icons/bs'

const spaceTime = [
  'React',
  'React Native',
  'NodeJs',
  'Next',
  'Tailwind',
  'Expo',
  'Prisma',
]
const igniteCall = [
  'React',
  'Next',
  'Next OAuth',
  'Stitches',
  'TypeScript',
  'MySQL',
  'Prisma',
]

const igNews = ['React', 'Next', 'Prismic', 'Stripe', 'TypeScript', 'SCSS']

export function ProjectsSection() {
  return (
    <div className="mt-24">
      <TitleSection title="Projetos em destaque" subtitle="../destaques" />
      <Separator />
      <Project
        image={igniteCallImg}
        title="Ignite Call"
        description="Ignite Call é uma aplicação que permite agendar compromissos no Google Calendar, 
        tanto no seu próprio calendário quanto no de outras pessoas. 
        Além disso, você pode organizar suas tarefas diárias e planejar compromissos futuros."
        techs={igniteCall}
        projectOnline="https://ignite-call-peach.vercel.app/"
        repo="https://github.com/leuzindev/ignite-call"
      />
      <Project
        image={spaceTimeImg}
        title="SpaceTime"
        description="Spacetime é uma cápsula do tempo digital com recurso de login usando o GitHub. Armazene fotos, vídeos e mensagens importantes para revisitá-los no futuro.
        Organize suas memórias por eventos, datas e temas. Reviva seus melhores momentos com Spacetime."
        techs={spaceTime}
        reverse
        especial
        repo="https://github.com/leuzindev/nlwspacetime"
      />
      <Project
        image={igNewsImg}
        title="Ig.News"
        description="Uma newspaper sobre React Topics criada com Next.js, 
        utilizando o CMS Prismic para gerenciar os posts e 
        integração com o Stripe para oferecer um plano de assinatura ao usuario."
        techs={igNews}
        repo="https://github.com/leuzindev/ig.news"
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
