'use client'
import { TitleSection } from '../TitleSection'

import certificate1Img from '@/assets/certificates/certificado_25.png'
import certificate2Img from '@/assets/certificates/certificado_20.png'
import certificate3Img from '@/assets/certificates/certificado_28.png'
import certificate4Img from '@/assets/certificates/certificado_4.png'
import certificate5Img from '@/assets/certificates/certificado_16.png'
import certificate6Img from '@/assets/certificates/certificado_38.png'

import Image from 'next/image'
import Link from 'next/link'
import { BsArrowRightShort } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function CertificatesSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
  })

  const variants = {
    hidden: { opacity: 0, y: 300 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="mt-24">
      <TitleSection
        title="Certificados"
        subtitle="../certificados"
        className="mb-9"
      />
      <section className=" grid grid-cols-3 gap-6 sm:flex sm:!grid-cols-1 sm:flex-col sm:items-center md:grid-cols-2">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={variants}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
          }}
          className="absolute right-0 z-0 mt-20 h-[400px] w-full bg-decorator lg:hidden"
        />

        <Image src={certificate1Img} alt="um certificado" className="z-10" />
        <Image src={certificate2Img} alt="um certificado" className="z-10" />
        <Image src={certificate3Img} alt="um certificado" className="z-10" />
        <Image src={certificate4Img} alt="um certificado" className="z-10" />
        <Image src={certificate5Img} alt="um certificado" className="z-10" />
        <Image src={certificate6Img} alt="um certificado" className="z-10" />
      </section>
      <Link href="/certificates">
        <span className="mt-9 flex items-center gap-1 text-grey-1">
          Todos meus certificados
          <BsArrowRightShort className="text-purple-1" />
        </span>
      </Link>
    </div>
  )
}
