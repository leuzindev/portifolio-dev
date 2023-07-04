import { TitlePage } from '@/components/TitlePage'

import certificateImg from '@/assets/certificates/cetificate.png'

import Image from 'next/image'

export default function Certificates() {
  return (
    <>
      <div className="bg-image-header flex min-h-[750px] items-center justify-center">
        <TitlePage
          title="Meus Certificados"
          subtitle="../certificados"
          description="Aqui você poderá ver alguns dos trabalhos que eu desenvolvi. Navegue à vontade e explore os projetos para ver como foram criados, as tecnologias utilizadas e as funcionalidades implementadas."
        />
      </div>
      <main className="m-auto mt-28 grid w-[1200px] grid-cols-3 gap-6">
        <Image src={certificateImg} alt="um ceritificado" />
        <Image src={certificateImg} alt="um ceritificado" />
        <Image src={certificateImg} alt="um ceritificado" />
        <Image src={certificateImg} alt="um ceritificado" />
        <Image src={certificateImg} alt="um ceritificado" />
        <Image src={certificateImg} alt="um ceritificado" />
        <Image src={certificateImg} alt="um ceritificado" />
        <Image src={certificateImg} alt="um ceritificado" />
        <Image src={certificateImg} alt="um ceritificado" />
        <Image src={certificateImg} alt="um ceritificado" />
        <Image src={certificateImg} alt="um ceritificado" />
        <Image src={certificateImg} alt="um ceritificado" />
        <Image src={certificateImg} alt="um ceritificado" />
        <Image src={certificateImg} alt="um ceritificado" />
        <Image src={certificateImg} alt="um ceritificado" />
        <Image src={certificateImg} alt="um ceritificado" />
        <Image src={certificateImg} alt="um ceritificado" />
        <Image src={certificateImg} alt="um ceritificado" />
        <Image src={certificateImg} alt="um ceritificado" />
        <Image src={certificateImg} alt="um ceritificado" />
        <Image src={certificateImg} alt="um ceritificado" />
        <Image src={certificateImg} alt="um ceritificado" />
        <Image src={certificateImg} alt="um ceritificado" />
        <Image src={certificateImg} alt="um ceritificado" />
        <Image src={certificateImg} alt="um ceritificado" />
        <Image src={certificateImg} alt="um ceritificado" />
        <Image src={certificateImg} alt="um ceritificado" />
      </main>
    </>
  )
}
