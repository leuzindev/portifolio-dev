'use client'
import { ElementType } from 'react'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

interface TechCardProps {
  tech: string
  experience: string
  delay: number
  icon: ElementType
}

export function TechCard({
  tech,
  experience,
  delay,
  icon: Icon,
}: TechCardProps) {
  const [ref, inView] = useInView({
    threshold: 0.1,
  })

  const variants = {
    hidden: { opacity: 0, x: -300 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
        delay,
      }}
      className="rounded-md bg-card p-5"
    >
      <div className="mb-4 flex items-center justify-between">
        <p className="text-grey-5">{tech}</p>
        <Icon className="text-grey-5" />
      </div>
      <span className=" text-grey-5">{experience}</span>
    </motion.div>
  )
}
