import Image from 'next/image'
import { Separator } from '../Separator'
import { TitleSection } from '../TitleSection'

import ItotalImg from '@/assets/logos/itotal-logo.png'
import { FaLocationArrow, FaMapPin } from 'react-icons/fa'
import { BsPin, BsPinMap, BsPinMapFill } from 'react-icons/bs'

export function CompanysSection() {
  return (
    <div className="mt-24">
      <TitleSection title="Projetos onde trabalhei" subtitle="../destaques" />
      <Separator />

      <main className="mt-12 flex">
        <div className="flex w-[30%] items-center justify-center ">
          <Image src={ItotalImg} alt="logo itotal" />
        </div>
        <div className="flex w-[20%] items-center justify-center">
          <div className="relative m-auto h-96 w-[1px] bg-purple-6 ">
            <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full border border-purple-7 bg-purple-10 shadow-md ">
              <FaMapPin size="20px" className="text-purple-6" />
            </div>
          </div>
        </div>
        <div className="w-[60%] bg-red-800">d</div>
      </main>
    </div>
  )
}
