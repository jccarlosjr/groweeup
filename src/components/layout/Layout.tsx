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
      <CursorGlow />
      <Header />
      <main className="pt-20">
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
