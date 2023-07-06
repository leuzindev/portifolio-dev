'use client'
import Link from 'next/link'

export function HeaderNav() {
  return (
    <div className="flex">
      <div className="fixed left-1/2 top-10 z-50 flex w-[1200px] -translate-x-1/2 -translate-y-1/2 transform items-center justify-between p-6">
        <Link href="/" className="text-2xl font-semibold text-grey-1">
          Leuzin <span className="text-purple-5">DEV</span>
        </Link>
        <div>
          <Link href="/" className="m-4 text-base font-semibold text-grey-1">
            <span className="text-purple-3">#</span> Home
          </Link>
          <Link
            href="/projects"
            className="m-4 text-base font-semibold text-grey-4"
          >
            <span className="text-purple-3">#</span> Projetos
          </Link>
        </div>
      </div>
      {/* <motion.nav
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        custom={height}
        ref={containerRef}
      >
        <motion.div className="background" variants={sidebar} />
        <Navigation />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav> */}
    </div>
  )
}
