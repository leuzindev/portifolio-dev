import Image from 'next/image'

import MeImg from '@/assets/me.png'
import { TechChip } from '@/components/TechChip'
import { ButtonPrimary } from '@/components/ButtonPrimary'

import { BsArrowRightShort } from 'react-icons/bs'
import { FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa'
import Link from 'next/link'

export function Hero() {
  return (
    <>
      <div className="mt-20 lg:mt-10">
        <h5 className="mb-2 text-base text-purple-1">Olá, meu nome é</h5>
        <h1 className="mb-6 text-4xl font-medium text-grey-1">
          Leonardo Soares
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
            <TechChip content="React" />
            <TechChip content="Next.js" />
            <TechChip content="Tailwind" />
          </div>
          <div className="mt-3 flex space-x-3">
            <TechChip content="React native" />
            <TechChip content="Typescript" />
          </div>
        </div>
        <div className="mt-12 flex">
          <ButtonPrimary.Root>
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
      <div className="-mb-64 lg:mb-0">
        <Image
          src={MeImg}
          alt="uma pessoa branca olhando para o chao"
          className="lg:w-1/2"
        />
      </div>
    </>
  )
}
