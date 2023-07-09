'use client'

import { TitlePage } from '@/components/TitlePage'

import Image from 'next/image'

import { Pagination, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default function Certificates() {
  const imagens = []

  for (let i = 1; i <= 17; i++) {
    const imagem = require(`@/assets/certificates/certificado_${i}.png`)
    imagens.push(imagem)
  }

  return (
    <>
      <div className="bg-image-header flex min-h-[750px] items-center justify-center p-6">
        <TitlePage
          title="Meus Certificados"
          subtitle="../certificados"
          description="Aqui você poderá ver alguns dos certificados que obtive. Fique à vontade para explorar e conhecer as conquistas que adquiri ao longo do tempo.."
        />
      </div>
      <main className="m-auto mt-28 max-w-[1200px] p-6">
        <section className="flex justify-center">
          <Swiper
            pagination={{
              type: 'fraction',
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper shadow-gradient flex justify-center"
          >
            {imagens.map((imagem, index) => (
              <SwiperSlide key={index}>
                <Image src={imagem} alt={`Certificado ${index + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </main>
    </>
  )
}
