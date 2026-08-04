import Navbar from '@/app/components/layout/Navbar'
import Footer from '@/app/components/layout/Footer'
import PageTransition from '@/app/components/layout/PageTransition'

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-0">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </>
  )
}
