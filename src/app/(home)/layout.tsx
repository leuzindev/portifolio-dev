import { ReactNode } from 'react'

import { HeaderNav } from '@/components/HeaderNav'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <HeaderNav />
      <main className="min-h-screen font-body">{children}</main>
    </>
  )
}
