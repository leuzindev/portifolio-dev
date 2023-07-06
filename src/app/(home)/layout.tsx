'use client'
import { ReactNode } from 'react'

import { HeaderNav } from '@/components/HeaderNav'
import { FooterContact } from '@/components/FooterContatc'
import { motion, useScroll, useSpring } from 'framer-motion'

export default function Layout({ children }: { children: ReactNode }) {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })
  return (
    <>
      <motion.div className="progress-bar z-50 bg-red-300" style={{ scaleX }} />

      <HeaderNav />
      <main className="min-h-screen font-body">{children}</main>
      <FooterContact id="contact" />
    </>
  )
}
