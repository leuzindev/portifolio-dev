import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonPrimaryRootProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children: ReactNode
}

export function ButtonPrimaryRoot({
  className,
  children,
  ...rest
}: ButtonPrimaryRootProps) {
  return (
    <button
      {...rest}
      className={`${className} flex h-12 items-center justify-center rounded-md bg-purple-4 px-3 shadow-button  transition-colors hover:bg-purple-2
      `}
    >
      {children}
    </button>
  )
}
