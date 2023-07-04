import { Project } from '@/components/Project'
import { TitlePage } from '@/components/TitlePage'

import dtMoney from '@/assets/projects/dtmoney.svg'
const dt_money = ['React', 'Next']

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
            image={dtMoney}
            title="DT Money"
            description="BookWise é uma plataforma de avaliação de livros que foi desenvolvida durante o bootcamp Ignite da Rocketseat. Com apenas um Figma precisávamos desenvolver essa aplicação completa Full Stack com Next.js."
            techs={dt_money}
          />
          <Project
            image={dtMoney}
            title="DT Money"
            description="BookWise é uma plataforma de avaliação de livros que foi desenvolvida durante o bootcamp Ignite da Rocketseat. Com apenas um Figma precisávamos desenvolver essa aplicação completa Full Stack com Next.js."
            techs={dt_money}
          />
          <Project
            image={dtMoney}
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
            reverse
          />
          <Project
            image={dtMoney}
            title="DT Money"
            description="BookWise é uma plataforma de avaliação de livros que foi desenvolvida durante o bootcamp Ignite da Rocketseat. Com apenas um Figma precisávamos desenvolver essa aplicação completa Full Stack com Next.js."
            techs={dt_money}
          />
          <Project
            image={dtMoney}
            title="DT Money"
            description="BookWise é uma plataforma de avaliação de livros que foi desenvolvida durante o bootcamp Ignite da Rocketseat. Com apenas um Figma precisávamos desenvolver essa aplicação completa Full Stack com Next.js."
            techs={dt_money}
          />
          <Project
            image={dtMoney}
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
            reverse
          />
          <Project
            image={dtMoney}
            title="DT Money"
            description="BookWise é uma plataforma de avaliação de livros que foi desenvolvida durante o bootcamp Ignite da Rocketseat. Com apenas um Figma precisávamos desenvolver essa aplicação completa Full Stack com Next.js."
            techs={dt_money}
          />
          <Project
            image={dtMoney}
            title="DT Money"
            description="BookWise é uma plataforma de avaliação de livros que foi desenvolvida durante o bootcamp Ignite da Rocketseat. Com apenas um Figma precisávamos desenvolver essa aplicação completa Full Stack com Next.js."
            techs={dt_money}
          />
          <Project
            image={dtMoney}
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
            reverse
          />
        </section>
      </main>
    </>
  )
}
