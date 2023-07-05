import { TitlePage } from '@/components/TitlePage'

import Image from 'next/image'

export default function Certificates() {
  const imagens = []

  for (let i = 1; i <= 54; i++) {
    const imagem = require(`@/assets/certificates/certificado_${i}.png`)
    imagens.push(imagem)
  }

  return (
    <>
      <div className="bg-image-header flex min-h-[750px] items-center justify-center">
        <TitlePage
          title="Meus Certificados"
          subtitle="../certificados"
          description="Aqui você poderá ver alguns dos certificados que obtive. Fique à vontade para explorar e conhecer as conquistas que adquiri ao longo do tempo.."
        />
      </div>
      <main className="m-auto mt-28 max-w-[1200px]">
        <section className="grid grid-cols-3 gap-6 sm:flex sm:!grid-cols-1 sm:flex-col sm:items-center md:grid-cols-2">
          {imagens.map((imagem, index) => (
            <Image
              key={index}
              src={imagem}
              alt={`Certificado ${index + 1}`}
              width={500}
              height={300} // Define a imagem de carregamento
            />
          ))}
        </section>
      </main>
    </>
  )
}
