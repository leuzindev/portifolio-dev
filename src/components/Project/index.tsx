import { TechChip } from '../TechChip'

import Logo from '@/assets/logo.png'

import Link from 'next/link'
import Image from 'next/image'
import { BsArrowRightShort } from 'react-icons/bs'

interface ProjectProps {
  image: any
  title: string
  description: string
  techs: Array<string>
  reverse?: boolean
  especial?: boolean
}

export function Project({
  image,
  title,
  description,
  techs,
  reverse,
  especial,
}: ProjectProps) {
  return (
    <>
      {especial ? (
        <div
          className={`relative my-36 flex sm:my-24 md:flex-col ${
            reverse ? 'flex-row-reverse' : ''
          } `}
        >
          <div className="absolute top-1 z-0 -mt-10 mr-36 h-[400px] w-[90vw] bg-decorator md:hidden" />
          <div className="z-10 mr-4 md:flex md:justify-center">
            <Image src={image} alt="macbook com uma imagem do projeto" />
          </div>
          <div className="z-10 w-[60%]  md:w-auto">
            <div className="flex items-center gap-2 md:mt-4">
              <Image src={Logo} alt="logo com um L roxo" />
              <h3 className="text-2xl font-semibold text-grey-1">{title}</h3>
            </div>
            <p className="mb-5 mt-5 text-grey-4">{description}</p>
            <div className="my-3 mb-8 flex max-w-[450px] flex-wrap gap-2">
              {techs.map((tech, index) => (
                <TechChip content={tech} key={index} />
              ))}
            </div>
            <Link href="/" className="flex h-12 ">
              <span className="flex items-center gap-1 rounded-md bg-purple-4 px-4 text-grey-1">
                Ver projeto <BsArrowRightShort />
              </span>
            </Link>
          </div>
        </div>
      ) : (
        <div
          className={`my-36 flex sm:my-24 md:flex-col ${
            reverse ? 'flex-row-reverse' : ''
          } `}
        >
          <div className="mr-4 md:flex md:justify-center">
            <Image src={image} alt="macbook com uma imagem do projeto" />
          </div>
          <div className="mr-auto w-[60%] md:w-auto">
            <div className="flex items-center gap-2 md:mt-4">
              <Image src={Logo} alt="logo com um L roxo" />
              <h3 className="text-2xl font-semibold text-grey-1">{title}</h3>
            </div>
            <p className="mb-5 mt-5 text-grey-4">{description}</p>
            <div className="my-3 mb-8 flex max-w-[450px] flex-wrap gap-2">
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
      )}
    </>
  )
}
