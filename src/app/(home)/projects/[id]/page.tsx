'use client'

import { TitlePage } from '@/components/TitlePage'
import { useSearchParams } from 'next/navigation'

export default function ProjectView() {
  const searchParams = useSearchParams()

  const search = searchParams.get('id')
  return (
    <>
      <div className="bg-image-header flex min-h-[750px] items-center justify-center">
        <TitlePage
          title="Meus Projetos"
          subtitle="../projetos"
          description="Aqui você poderá ver alguns dos trabalhos que eu desenvolvi. Navegue à vontade e explore os projetos para ver como foram criados, as tecnologias utilizadas e as funcionalidades implementadas."
        />
        {search}
      </div>
      <main className="m-auto mt-28 max-w-[1200px]"></main>
    </>
  )
}
