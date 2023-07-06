'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
interface TechChipProps {
  content: string
  delay?: number
}

export function TechChip({ content, delay }: TechChipProps) {
  const [ref, inView] = useInView({
    threshold: 0.1,
  })

  const variants = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
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
      className="flex h-7 items-center rounded-lg bg-purple-7 px-3"
    >
      <span className="text-sm text-grey-4">{content}</span>
    </motion.div>
  )
}
