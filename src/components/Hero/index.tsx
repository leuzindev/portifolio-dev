'use client'
import Image from 'next/image'

import MeImg from '@/assets/me.png'

import { TechChip } from '@/components/TechChip'
import { ButtonPrimary } from '@/components/ButtonPrimary'

import { BsArrowRightShort } from 'react-icons/bs'
import { FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa'

import Link from 'next/link'

import Typewriter from 'react-ts-typewriter'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

export function Hero() {
  const [ref, inView] = useInView({
    threshold: 0.1,
  })

  const variantsMobile = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <>
      <div className="mt-20 lg:mt-10">
        <h5 className="mb-2 text-base text-purple-1">Olá, meu nome é</h5>
        <h1 className="mb-6 font-body text-4xl font-medium text-grey-1 sm:text-3xl">
          <Typewriter text="Leonardo Soares. " />
        </h1>

        <p className="w-[500px] text-base leading-7 text-grey-4 lg:w-auto">
          Sou um desenvolvedor front-end apaixonado por tecnologia. Com mais de{' '}
          <strong>1 ano de experiência.</strong> Meu objetivo é criar interfaces
          de usuário bonitas e funcionais, além de liderar equipes técnicas em
          projetos desafiadores. Estou sempre aberto a novas oportunidades e
          desafios.
        </p>
        <div className="mt-6 flex flex-col">
          <div className="flex space-x-3">
            <TechChip content="React" delay={0.2} />
            <TechChip content="Next.js" delay={0.4} />
            <TechChip content="Tailwind" delay={0.6} />
          </div>
          <div className="mt-3 flex space-x-3">
            <TechChip content="React native" delay={0.8} />
            <TechChip content="Typescript" delay={1} />
          </div>
        </div>
        <div className="mt-12 flex">
          <ButtonPrimary.Root href="contact">
            <ButtonPrimary.Content label="Entre em contato" />
            <ButtonPrimary.Icon icon={BsArrowRightShort} />
          </ButtonPrimary.Root>
          <div className="ml-4 flex items-center gap-4">
            <Link href="https://github.com/leuzindev" target="_blank">
              <FaGithub className="text-grey-6" size="20" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/leonardodevs/"
              target="_blank"
            >
              <FaLinkedin className="text-grey-6" size="20" />
            </Link>
            <FaWhatsapp className="text-grey-6" size="20" />
          </div>
        </div>
      </div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={variantsMobile}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
        }}
        className="-mb-64 lg:mb-0"
      >
        <Image
          src={MeImg}
          alt="uma pessoa branca olhando para o chao"
          className="lg:w-1/2"
        />
      </motion.div>
    </>
  )
}
