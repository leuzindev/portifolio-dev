import { ElementType } from 'react'

interface ButtonPrimaryIconProps {
  icon: ElementType
}

export function ButtonPrimaryIcon({ icon: Icon }: ButtonPrimaryIconProps) {
  return <Icon color="#D3B7FF" size="20px" />
}
