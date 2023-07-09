import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'
import { animateScroll as scroll } from 'react-scroll'

export function ButtonPushToTop() {
  const [showButton, setShowButton] = useState(false)
  const [ref, inView] = useInView({
    threshold: 0.1,
  })

  const variants = {
    hidden: { opacity: 0, x: 10 },
    visible: { opacity: 1, x: 0 },
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <>
      {showButton && (
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
          className="fixed bottom-4 right-4 z-50"
        >
          <button
            className="rounded bg-purple-7 p-4 transition-opacity"
            onClick={() => scroll.scrollToTop()}
          >
            <FaArrowUp className="text-purple-1" />
          </button>
        </motion.div>
      )}
    </>
  )
}
