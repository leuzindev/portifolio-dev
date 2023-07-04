import { TitleSection } from '../TitleSection'

import certificateImg from '@/assets/certificates/cetificate.png'
import Image from 'next/image'
import Link from 'next/link'
import { BsArrowRightShort } from 'react-icons/bs'

export default function CertificatesSection() {
  return (
    <div className="mt-24">
      <TitleSection
        title="Certificados"
        subtitle="../certificados"
        className="mb-9"
      />
      <section className=" grid grid-cols-3 gap-6 sm:flex sm:!grid-cols-1 sm:flex-col sm:items-center md:grid-cols-2">
        <div className="absolute right-0 z-0 mt-20 h-[400px] w-full bg-decorator lg:hidden" />

        <Image src={certificateImg} alt="um certificado" className="z-10" />
        <Image src={certificateImg} alt="um certificado" className="z-10" />
        <Image src={certificateImg} alt="um certificado" className="z-10" />
        <Image src={certificateImg} alt="um certificado" className="z-10" />
        <Image src={certificateImg} alt="um certificado" className="z-10" />
        <Image src={certificateImg} alt="um certificado" className="z-10" />
      </section>
      <Link href="/certificates">
        <span className="mt-9 flex items-center gap-1 text-grey-1">
          Todos meus certificados
          <BsArrowRightShort className="text-purple-1" />
        </span>
      </Link>
    </div>
  )
}
