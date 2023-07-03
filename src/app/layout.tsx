import { ReactNode } from 'react'
import './globals.css'
import { IBM_Plex_Mono } from 'next/font/google'

const plex = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-plex',
})

export const metadata = {
  title: 'Home | Leonardo Soares',
  description: 'Meu portifolio como Desenvolvedor',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${plex.variable} font-body `}>{children}</body>
    </html>
  )
}
