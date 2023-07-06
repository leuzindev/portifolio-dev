import { BsArrowRightShort } from 'react-icons/bs'
import { ButtonPrimary } from '../ButtonPrimary'

export function FormContact() {
  return (
    <form className="flex flex-col items-center space-y-4">
      <input
        type="text"
        className="h-14 w-full rounded-lg bg-inputs p-4 text-grey-1"
        placeholder="Nome"
      />
      <input
        type="email"
        className="h-14 w-full rounded-lg bg-inputs p-4 text-grey-1"
        placeholder="E-mail"
      />
      <textarea
        className=" h-44 max-h-[300px] min-h-[100px] w-full rounded-lg bg-inputs p-4 text-grey-1"
        placeholder="Mensagem"
      />
      <ButtonPrimary.Root href="#send" className="!mt-12">
        <ButtonPrimary.Content label="Enviar mensagem" />
        <ButtonPrimary.Icon icon={BsArrowRightShort} />
      </ButtonPrimary.Root>
    </form>
  )
}
