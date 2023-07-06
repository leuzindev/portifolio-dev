import { FormContact } from '../FormContact'

interface FooterContactProps {
  id: string
}

export function FooterContact({ id }: FooterContactProps) {
  return (
    <footer
      id={id}
      className="relative mt-24 flex min-h-[900px] w-full flex-col items-center justify-center bg-footer p-6"
    >
      <div className="min-h-[50vh]">
        <div className="mb-8 flex flex-col items-center">
          <p className="text-base text-purple-2">../contato</p>
          <h3 className="mt-5 text-center text-2xl font-semibold text-grey-1">
            Vamos trabalhar juntos?
            <br /> Entre em contato
          </h3>
        </div>
        <FormContact />
      </div>
      <h5 className="absolute bottom-3 text-grey-4">
        Made with 💜 by Leuzindev
      </h5>
    </footer>
  )
}
