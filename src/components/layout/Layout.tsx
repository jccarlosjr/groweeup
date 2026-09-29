import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Header } from './Header'
import { Footer } from './Footer'
import { PageTransition } from './PageTransition'
import { CursorGlow } from '@/components/ui/CursorGlow'

export function Layout() {
  const location = useLocation()

  return (
    <div className="relative min-h-screen">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[80] focus:rounded-lg focus:bg-brand-600 focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
      >
        Pular para o conteúdo
      </a>
      <CursorGlow />
      <Header />
      <main id="conteudo" className="pt-16">
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname}>
            <Outlet />
          </PageTransition>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}
