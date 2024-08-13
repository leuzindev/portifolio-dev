import Image from 'next/image'
import { Separator } from '../Separator'
import { TitleSection } from '../TitleSection'

import ItotalImg from '@/assets/logos/itotal-logo.png'
import KeepersImg from '@/assets/logos/keepers-logo.svg'
import SkateImg from '@/assets/logos/skate-logo.svg'

import { TechChip } from '../TechChip'

export function CompanysSection() {
  return (
    <div className="mt-24">
      <TitleSection title="Empresas onde trabalhei" subtitle="../destaques" />
      <Separator />

      <main className="mt-12 flex flex-col">
        <section className="flex min-h-[800px] lg:mb-10">
          <div className="flex w-[20%] items-center justify-center lg:hidden">
            <div className="relative m-auto h-full w-[1px] bg-purple-6 ">
              <div className="absolute left-1/2 top-1/2 flex h-4 w-4 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full border border-purple-7 bg-purple-6 shadow-lg shadow-md "></div>
            </div>
          </div>
          <div className="flex w-[80%]  flex-col justify-center lg:w-full">
            <Image src={ItotalImg} alt="logo itotal" />
            <div className="mt-12">
              <div className="flex">
                <h3 className="mr-4 text-xl font-medium text-white">Itotal</h3>
                <TechChip content="Full-stack" />
              </div>
              <p className="mt-8 font-medium leading-relaxed text-white">
                Minha primeira experiência como desenvolvedor no mercado de
                trabalho, fui responsável por projetar e implementar um sistema
                de pedidos que integrava diretamente com o ERP Bling. Esse
                sistema foi essencial para otimizar os processos de pedidos da
                empresa, garantindo uma integração eficiente e funcional com a
                plataforma Bling.
              </p>
              <div className="mt-10 text-white">
                <li>Criação e implementação de APIs Rest</li>
                <li>Manipulação de Banco de dados</li>
                <li>Desenvolver novas features</li>
                <li>Criação de Design</li>
                <li>Automação de rotinas</li>
                <li>Integração com sistema ERP | Bling </li>
              </div>
              <div className="mt-8 flex flex-row">
                <TechChip content="07/2022" />
                <span className="mx-4 text-white">-</span>
                <TechChip content="04/2023" />
              </div>
            </div>
          </div>
        </section>
        <section className="flex min-h-[800px] lg:mb-10">
          <div className="flex w-[20%] items-center justify-center lg:hidden">
            <div className="relative m-auto h-full w-[1px] bg-purple-6 ">
              <div className="absolute left-1/2 top-1/2 flex h-4 w-4 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full border border-purple-7 bg-purple-6 shadow-lg"></div>
            </div>
          </div>
          <div className="flex w-[80%]  flex-col justify-center lg:w-full">
            <div className="flex justify-start">
              <Image
                src={SkateImg}
                alt="logo 360 skate"
                className="h-32 w-32"
              />
            </div>
            <div className="mt-12">
              <div className="flex">
                <h3 className="mr-4 text-xl font-medium text-white">
                  360 Skate
                </h3>
                <TechChip content="Mobile" />
              </div>
              <p className="mt-8 font-medium leading-relaxed text-white">
                Durante minha experiência, atuei como desenvolvedor de
                aplicativos móveis, onde fui responsável pelo desenvolvimento de
                um aplicativo de geolocalização voltado para a comunidade de
                skatistas. O projeto, que foi lançado para as plataformas
                Android e iOS, envolveu a implementação de diversos
                microserviços, o que permitiu a criação de um sistema escalável
                e eficiente para a busca e compartilhamento de picos de skate.
                Além do desenvolvimento técnico, também liderei a parte de
                design do aplicativo, garantindo que a interface fosse intuitiva
                e atraente para os usuários, proporcionando uma experiência
                fluida e envolvente.
              </p>
              <div className="mt-10 text-white">
                <li>Redesign de uma aplicação mobile</li>
                <li>Google play Appstore</li>
                <li>Correção de bugs</li>
                <li>Gerenciamento de banco de dados</li>
                <li>Desenvolver novas features para o aplicativo </li>
                <li>Sprints</li>
              </div>
              <div className="mt-8 flex flex-row">
                <TechChip content="07/2022" />
                <span className="mx-4 text-white">-</span>
                <TechChip content="01/2023" />
              </div>
            </div>
          </div>
        </section>
        <section className="flex min-h-[800px] lg:mb-10">
          <div className="flex w-[20%] items-center justify-center lg:hidden">
            <div className="relative m-auto h-full w-[1px] bg-purple-6 ">
              <div className="absolute left-1/2 top-1/2 flex h-4 w-4 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full border border-purple-7 bg-purple-6 shadow-lg shadow-md "></div>
            </div>
          </div>
          <div className="flex w-[80%] flex-col justify-center lg:w-full">
            <Image src={KeepersImg} alt="logo keepers" className="h-32 w-32" />
            <div className="mt-12">
              <div className="flex">
                <h3 className="mr-4 text-xl font-medium text-white">
                  Keepers Logistica
                </h3>
                <TechChip content="Full-stack" />
                <span className="ml-2" />
                <TechChip content="Mobile" />
              </div>
              <p className="mt-8 font-medium leading-relaxed text-white">
                Fui responsável pela prototipação, desenvolvimento e implantação
                de sistemas cruciais para a operação da empresa. Além disso,
                assumi a responsabilidade pelo site e pelo aplicativo móvel da
                empresa, garantindo uma presença digital eficiente e funcional.
                Desenvolvi um sistema robusto de integração de pedidos e notas
                fiscais, assegurando a fluidez e a precisão nas transações
                comerciais. Também criei e mantive um sistema de endereçamento e
                um sistema de conferência de pedidos, essenciais para a
                eficiência operacional. Adicionalmente, desenvolvi microserviços
                especializados para integração com os ERPs Tiny e Bling,
                garantindo que as operações fossem realizadas de maneira eficaz
                e perfeitamente integradas com as plataformas dos clientes.
              </p>
              <div className="mt-10 text-white">
                <li>Prototipação, Desenvolvimento e Implantação</li>
                <li>Desenvolvimento e manutenção em WMS</li>
                <li>Performance e escalabilidade</li>
                <li>Desenvolvimento Front-end, Back-end e Mobile</li>
                <li>Implementação de Testes unitários | E2E | Integração</li>
                <li>Integração com sistemas ERP | Bling | Tiny</li>
              </div>
              <div className="mt-8 flex flex-row">
                <TechChip content="04/2023" />
                <span className="mx-4 text-white">-</span>
                <TechChip content="Atualmente" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
