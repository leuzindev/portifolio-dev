'use client'
import { BsArrowRightShort } from 'react-icons/bs'
import { ButtonPrimary } from '../ButtonPrimary'

import { useForm } from 'react-hook-form'
import 'react-toastify/dist/ReactToastify.css'

import { useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import emailJs from '@emailjs/browser'

import { Comment } from 'react-loader-spinner'
import { ToastContainer, toast } from 'react-toastify'

const contactFormSchema = z.object({
  name: z.string().min(5, 'Seu nome deve ter pelo menos 5 caracteres'),
  email: z.string().email(),
  message: z.string(),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export function FormContact() {
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  async function handleEmail(data: ContactFormData) {
    setIsLoading(true)

    const templateParams = {
      from_name: data.name,
      email: data.email,
      message: data.message,
    }

    try {
      await emailJs.send(
        'service_c12djtj',
        'template_2d815ue',
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      )

      setIsLoading(false)
      toast.success('Email enviado com sucesso!', {
        theme: 'colored',
        closeButton: false,
        draggable: false,
      })
      reset()
    } catch (error) {
      toast.error('Erro ao enviar o email. Por favor, tente novamente.', {
        theme: 'colored',
        closeButton: false,
        draggable: false,
      })
    }
  }
  return (
    <form
      className="flex flex-col items-center space-y-4 "
      onSubmit={handleSubmit(handleEmail)}
    >
      <input
        type="text"
        className="h-14 w-full rounded-lg bg-inputs p-4 text-grey-1"
        placeholder="Nome"
        required
        {...register('name')}
      />
      <input
        type="email"
        className="h-14 w-full rounded-lg bg-inputs p-4 text-grey-1"
        placeholder="E-mail"
        required
        {...register('email')}
      />
      <textarea
        className=" h-44 max-h-[300px] min-h-[100px] w-full rounded-lg bg-inputs p-4 text-grey-1"
        placeholder="Mensagem"
        required
        {...register('message')}
      />
      {errors.name && (
        <span className="text-red-500">{errors.name.message}</span>
      )}
      <ButtonPrimary.Root disabled={isSubmitting} className="!mt-12">
        {isLoading ? (
          <>
            <ButtonPrimary.Content label="Enviando e-mail" />
            <Comment
              visible={true}
              height="30"
              width="30"
              ariaLabel="comment-loading"
              wrapperStyle={{}}
              wrapperClass="comment-wrapper"
              color="#fff"
              backgroundColor="#100028"
            />
          </>
        ) : (
          <>
            <ButtonPrimary.Content label="Enviar mensagem" />
            <ButtonPrimary.Icon icon={BsArrowRightShort} />
          </>
        )}
        <ToastContainer />
      </ButtonPrimary.Root>
    </form>
  )
}
