import { TechChip } from '../TechChip'

import Logo from '@/assets/logo.png'

import Link from 'next/link'
import Image from 'next/image'
import { BsArrowRightShort } from 'react-icons/bs'

interface ProjectProps {
  image: string
  title: string
  description: string
  techs: Array<string>
  reverse?: boolean
}

export function Project({
  image,
  title,
  description,
  techs,
  reverse,
}: ProjectProps) {
  return (
    <div
      className={`my-24 flex md:flex-col ${reverse ? 'flex-row-reverse' : ''} `}
    >
      <div className="mr-4 md:flex md:justify-center">
        <Image src={image} alt="macbook com uma imagem do projeto" />
      </div>
      <div className="w-[60%] md:w-auto">
        <div className="flex items-center gap-2 md:mt-4">
          <Image src={Logo} alt="logo com um L roxo" />
          <h3 className="text-2xl font-semibold text-grey-1">{title}</h3>
        </div>
        <p className="mb-5 mt-5 text-grey-4">{description}</p>
        <div className="my-3 mb-8 flex gap-2">
          {techs.map((tech, index) => (
            <TechChip content={tech} key={index} />
          ))}
        </div>
        <Link href="/">
          <span className="flex items-center gap-1 text-purple-1">
            Ver projeto <BsArrowRightShort />
          </span>
        </Link>
      </div>
    </div>
  )
}
