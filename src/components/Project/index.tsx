'use client'
import { TechChip } from '../TechChip'

import Logo from '@/assets/logo.png'

import Link from 'next/link'
import Image from 'next/image'

import { BsArrowRightShort } from 'react-icons/bs'
import { RiGlobalLine } from 'react-icons/ri'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'

interface ProjectProps {
  image: any
  title: string
  description: string
  techs: Array<string>
  reverse?: boolean
  especial?: boolean
  repo?: string
  projectOnline?: string
}

export function Project({
  image,
  title,
  description,
  techs,
  reverse,
  especial,
  repo,
  projectOnline,
}: ProjectProps) {
  const [ref, inView] = useInView({
    threshold: 0.1,
  })

  const variantsMobile = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  const variantsEspecial = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <>
      {especial ? (
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={variantsEspecial}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
          }}
          className={`relative my-36 flex sm:my-24 md:flex-col ${
            reverse ? 'flex-row-reverse' : ''
          } `}
        >
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
            className="absolute top-1 z-0 -mt-10 mr-36 h-[400px] w-[90vw] bg-decorator md:hidden"
          />
          <div className="z-10 mr-4 md:flex md:justify-center">
            <Image src={image} alt="macbook com uma imagem do projeto" />
          </div>
          <div className="z-10 w-[60%]  md:w-auto">
            <div className="flex items-center gap-2 md:mt-10">
              <Image src={Logo} alt="logo com um L roxo" />
              <h3 className="text-2xl font-semibold text-grey-1 ">{title}</h3>
            </div>
            <p className="mb-5 mt-5 text-grey-4">{description}</p>
            <div className="my-3 mb-8 flex max-w-[450px] flex-wrap gap-2">
              {techs.map((tech, index) => (
                <TechChip content={tech} key={index} delay={0.1 * index} />
              ))}
            </div>
            {repo && (
              <Link href={repo} className="flex h-12" target="_blank">
                <span className="flex items-center gap-2 rounded-md bg-purple-4 px-4 text-grey-1 transition-colors hover:bg-purple-5">
                  Ver repositorio <FaGithub />
                </span>
              </Link>
            )}
          </div>
        </motion.div>
      ) : (
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
          className={`my-36 flex sm:my-24 md:flex-col ${
            reverse ? 'flex-row-reverse' : ''
          } `}
        >
          <div className="mr-4 md:flex md:justify-center">
            <Image src={image} alt="macbook com uma imagem do projeto" />
          </div>
          <div className="mr-auto w-[60%] md:w-auto">
            <div className="flex items-center gap-2 md:mt-10">
              <Image src={Logo} alt="logo com um L roxo" />
              <h3 className="text-2xl font-semibold text-grey-1">{title}</h3>
            </div>
            <p className="mb-5 mt-5 text-grey-4">{description}</p>
            <div className="my-3 mb-8 flex max-w-[450px] flex-wrap gap-2">
              {techs.map((tech, index) => (
                <TechChip content={tech} key={index} delay={0.1 * index} />
              ))}
            </div>
            <div className="flex items-center justify-between gap-4">
              {projectOnline && (
                <Link href={projectOnline} target="_blank">
                  <span className="flex items-center gap-2 text-purple-1 transition-colors hover:text-purple-4">
                    Ver projeto Online <RiGlobalLine />
                  </span>
                </Link>
              )}
              {repo && (
                <Link href={repo} target="_blank">
                  <span className="flex items-center gap-1 text-purple-1 transition-colors hover:text-purple-4">
                    Repositorio <BsArrowRightShort />
                  </span>
                </Link>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}
