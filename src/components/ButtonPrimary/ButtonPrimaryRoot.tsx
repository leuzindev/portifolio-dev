'use client'
import { Link } from 'react-scroll'

import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonPrimaryRootProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children: ReactNode
  href?: string
}

export function ButtonPrimaryRoot({
  className,
  children,
  href,
  ...rest
}: ButtonPrimaryRootProps) {
  if (href) {
    return (
      <Link to={href} smooth={true}>
        <button
          {...rest}
          className={`${className} flex h-12 items-center justify-center rounded-md bg-purple-4 px-3 shadow-button  transition-colors hover:bg-purple-2`}
        >
          {children}
        </button>
      </Link>
    )
  }

  return (
    <button
      {...rest}
      className={`${className} flex h-12 items-center justify-center rounded-md bg-purple-4 px-3 shadow-button  transition-colors hover:bg-purple-2`}
    >
      {children}
    </button>
  )
}
