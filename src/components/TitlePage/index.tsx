import Link from 'next/link'
import { BsArrowLeftShort } from 'react-icons/bs'

interface TitlePageProps {
  subtitle: string
  title: string
  description: string
}

export function TitlePage({ title, subtitle, description }: TitlePageProps) {
  return (
    <div className="mb-8 flex w-[450px] flex-col items-center">
      <p className="text-base text-purple-2">{subtitle}</p>
      <h3 className="mt-5 text-center text-2xl font-semibold text-grey-1">
        {title}
      </h3>
      <p className="mt-5 text-center text-grey-4">{description}</p>
      <Link href="/" className="mt-12 flex items-center gap-1">
        <BsArrowLeftShort className="text-purple-1" />
        <span className=" text-grey-1">voltar para o inicio</span>
      </Link>
    </div>
  )
}
