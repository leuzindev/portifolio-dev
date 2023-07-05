import { Project } from '@/components/Project'
import { TitlePage } from '@/components/TitlePage'

import dtMoneyImg from '@/assets/projects/dtMoney.png'
import cineFlowImg from '@/assets/projects/cineFlow.png'
import coffeDeliveryImg from '@/assets/projects/coffeDelivery.png'
import igNewsImg from '@/assets/projects/igNews.png'
import igniteCallImg from '@/assets/projects/igniteCall.png'
import igniteTimerImg from '@/assets/projects/igniteTimer.png'
import nlwSpacetimeImg from '@/assets/projects/nlwSpacetime.png'
import todoListImg from '@/assets/projects/todoList.png'

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

export default function Projects() {
  return (
    <>
      <div className="bg-image-header flex min-h-[750px] items-center justify-center">
        <TitlePage
          title="Meus Projetos"
          subtitle="../projetos"
          description="Aqui você poderá ver alguns dos trabalhos que eu desenvolvi. Navegue à vontade e explore os projetos para ver como foram criados, as tecnologias utilizadas e as funcionalidades implementadas."
        />
      </div>
      <main className="m-auto mt-28 max-w-[1200px]">
        <section className="">
          <Project
            image={igNewsImg}
            title="Ig.news"
            description="Uma newspaper sobre React Topics criada com Next.js, 
            utilizando o CMS Prismic para gerenciar os posts e 
            integração com o Stripe para oferecer um plano de assinatura ao usuario."
            techs={igNews}
          />
          <Project
            image={igniteCallImg}
            title="Ignite Call"
            description="Ignite Call é uma aplicação que permite agendar compromissos no Google Calendar, 
            tanto no seu próprio calendário quanto no de outras pessoas. 
            Além disso, você pode organizar suas tarefas diárias e planejar compromissos futuros."
            techs={igniteCall}
          />
          <Project
            image={nlwSpacetimeImg}
            title="SpaceTime"
            description="Spacetime é uma cápsula do tempo digital com recurso de login usando o GitHub. Armazene fotos, vídeos e mensagens importantes para revisitá-los no futuro.
            Organize suas memórias por eventos, datas e temas. Reviva seus melhores momentos com Spacetime."
            techs={spaceTime}
            reverse
            especial
          />
          <Project
            image={coffeDeliveryImg}
            title="Coffe Delivery"
            description="BookWise é uma plataforma de avaliação de livros que foi desenvolvida durante o bootcamp Ignite da Rocketseat. Com apenas um Figma precisávamos desenvolver essa aplicação completa Full Stack com Next.js."
            techs={spaceTime}
            reverse
          />
          <Project
            image={dtMoneyImg}
            title="DT Money"
            description="BookWise é uma plataforma de avaliação de livros que foi desenvolvida durante o bootcamp Ignite da Rocketseat. Com apenas um Figma precisávamos desenvolver essa aplicação completa Full Stack com Next.js."
            techs={spaceTime}
          />
          <Project
            image={igniteTimerImg}
            title="Ignite Timer"
            description="BookWise é uma plataforma de avaliação de livros que foi desenvolvida durante o bootcamp Ignite da Rocketseat. Com apenas um Figma precisávamos desenvolver essa aplicação completa Full Stack com Next.js."
            techs={spaceTime}
          />
          <Project
            image={cineFlowImg}
            title="Cine Flow"
            description="BookWise é uma plataforma de avaliação de livros que foi desenvolvida durante o bootcamp Ignite da Rocketseat. Com apenas um Figma precisávamos desenvolver essa aplicação completa Full Stack com Next.js."
            techs={spaceTime}
            reverse
          />
          <Project
            image={todoListImg}
            title="Todo"
            description="BookWise é uma plataforma de avaliação de livros que foi desenvolvida durante o bootcamp Ignite da Rocketseat. Com apenas um Figma precisávamos desenvolver essa aplicação completa Full Stack com Next.js."
            techs={spaceTime}
            reverse
          />
        </section>
      </main>
    </>
  )
}
