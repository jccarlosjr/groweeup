import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Logo } from '@/components/ui/Logo'
import { Button } from '@/components/ui/Button'
import { useScrolled } from '@/hooks/useScrolled'

const links = [
  { label: 'Serviços', to: '/#produtos', hash: true },
  { label: 'Método', to: '/#processo', hash: true },
  { label: 'Diferenciais', to: '/#diferenciais', hash: true },
  { label: 'Sobre', to: '/sobre' },
  { label: 'Contato', to: '/#contato', hash: true },
]

export function Header() {
  const scrolled = useScrolled()
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const handleNav = (to: string, hash?: boolean) => {
    setOpen(false)
    if (hash && to.includes('#')) {
      const id = to.split('#')[1]
      if (location.pathname === '/') {
        requestAnimationFrame(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
        })
      }
    }
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200 ${
        scrolled || open
          ? 'border-border bg-surface/95 shadow-sm backdrop-blur-md'
          : 'border-transparent bg-canvas/90 backdrop-blur-md'
      }`}
    >
      <div className="container-site flex h-16 items-center justify-between">
        <Logo size="md" />

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Principal">
          {links.map((link) =>
            link.hash ? (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => handleNav(link.to, true)}
                className="rounded-md px-1 py-2 text-sm font-medium text-text-secondary transition-colors duration-200 hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-600"
              >
                {link.label}
              </Link>
            ) : (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  `rounded-md px-1 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-600 ${
                    isActive ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ),
          )}
          <Button to="/#contato" size="md" onClick={() => handleNav('/#contato', true)}>
            Solicitar diagnóstico
          </Button>
        </nav>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-xl border border-border bg-surface text-text-primary lg:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            id="menu-mobile"
            className="border-t border-border bg-surface lg:hidden"
            aria-label="Mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <div className="container-site flex flex-col gap-1 py-4">
              {links.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link
                    to={link.to}
                    onClick={() => handleNav(link.to, link.hash)}
                    className="block rounded-lg px-3 py-3 text-base font-medium text-text-primary hover:bg-canvas"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-2 px-3">
                <Button
                  to="/#contato"
                  size="lg"
                  className="w-full"
                  onClick={() => handleNav('/#contato', true)}
                >
                  Solicitar diagnóstico
                </Button>
              </div>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
