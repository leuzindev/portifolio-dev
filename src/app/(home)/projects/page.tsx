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

const coffeDelivery = ['Next', 'Typescript', 'Tailwind', 'React', 'Redux']

const DtMoney = ['React', 'Typescript', 'Vite', 'Styled Components', 'Zod']

const igniteTimer = ['React', 'Typescript', 'Vite', 'Styled Components', 'Zod']

const cineflow = ['React Native', 'Typescript', 'Expo', 'Styled Components']

const todo = ['React', 'Next', 'Typescript', 'Tailwind', 'Zod', 'Redux']

export default function Projects() {
  return (
    <>
      <div className="bg-image-header flex min-h-[750px] items-center justify-center p-6">
        <TitlePage
          title="Meus Projetos"
          subtitle="../projetos"
          description="Aqui você poderá ver alguns dos trabalhos que eu desenvolvi. Navegue à vontade e explore os projetos para ver como foram criados, as tecnologias utilizadas e as funcionalidades implementadas."
        />
      </div>
      <main className="m-auto mt-28 max-w-[1200px] p-6">
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
            description="O Coffee Delivery é uma aplicação responsiva que simula a gestão de um carrinho de compras em uma cafeteria. 
            Utilizando Redux, proporciona uma experiência intuitiva e conveniente para os clientes, permitindo adicionar itens, visualizar o resumo da compra e finalizar o pedido de forma eficiente. 
            Uma solução perfeita para os amantes de café em busca de praticidade."
            techs={coffeDelivery}
            reverse
          />
          <Project
            image={dtMoneyImg}
            title="DT Money"
            description="
            O DT Money é uma ferramenta de controle financeiro pessoal que permite aos usuários cadastrar entradas e saídas, 
            calculando o saldo total com base nos dados inseridos. Com busca facilitada e interface intuitiva,
            o DT Money ajuda a manter o controle das finanças de forma eficiente."
            techs={DtMoney}
          />
          <Project
            image={igniteTimerImg}
            title="Ignite Timer"
            description="O Ignite Timer é um projeto pomodoro que permite aos usuários cronometrar suas tarefas diárias.
            Além disso, ele oferece um histórico completo de todas as tarefas já realizadas, permitindo aos usuários acompanhar seu progresso.
            Também é possível remover tarefas quando necessário. Melhore sua produtividade com o Ignite Timer."
            techs={igniteTimer}
          />
          <Project
            image={cineFlowImg}
            title="Cine Flow"
            description="O Cine Flow é um aplicativo de streaming que oferece aos usuários acesso a uma ampla variedade de conteúdo de entretenimento, 
            como filmes, séries e programas de TV. Com uma interface intuitiva e fácil de usar, os usuários podem navegar pelo catálogo e descobrir novos programas para assistir.
            Desfrute de horas de diversão com o Cine Flow."
            techs={cineflow}
            reverse
          />
          <Project
            image={todoListImg}
            title="Todo"
            description="
            O TODO é uma aplicação de lista de tarefas que permite aos usuários criar, marcar como concluídas e excluir tarefas. 
            Desenvolvida com Redux, a aplicação oferece uma experiência de gerenciamento de tarefas eficiente e organizada.
            Com o TODO, você pode manter o controle de suas tarefas diárias e garantir que nada seja esquecido.
            Simplifique sua vida com o TODO e torne seu dia mais produtivo."
            techs={todo}
            reverse
          />
        </section>
      </main>
    </>
  )
}
