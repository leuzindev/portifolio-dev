import { CertificatesSection } from '@/components/CertificatesSection'
import { Hero } from '@/components/Hero'
import { ProjectsSection } from '@/components/ProjectsSection'
import { TechSection } from '@/components/TechsSection'

export default function Home() {
  return (
    <>
      <section className="bg-image-header min-h-[750px]">
        <div className="m-auto flex min-h-[750px] max-w-[1200px] items-center justify-between p-6 lg:flex-col-reverse lg:items-start">
          <Hero />
        </div>
      </section>
      <main className="m-auto mt-12 max-w-[1200px] p-6 lg:mt-0">
        <TechSection />
        <ProjectsSection />
        <CertificatesSection />
      </main>
    </>
  )
}
