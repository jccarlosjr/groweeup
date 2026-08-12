import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { Logo } from '@/components/ui/Logo'
import { Button } from '@/components/ui/Button'
import { useScrolled } from '@/hooks/useScrolled'

const links = [
  { label: 'Produtos', to: '/#produtos', hash: true },
  { label: 'Simulador', to: '/#simulador', hash: true },
  { label: 'Cases', to: '/#cases', hash: true },
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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-border-subtle/80 bg-bg-base/80 shadow-md backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="container-site flex h-[4.5rem] items-center justify-between py-4 md:h-20">
        <Logo size="md" />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {links.map((link) =>
            link.hash ? (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => handleNav(link.to, true)}
                className="text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
              >
                {link.label}
              </Link>
            ) : (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ),
          )}
          <Button to="/#contato" size="md" onClick={() => handleNav('/#contato', true)}>
            Fale com a gente
            <ArrowUpRight className="size-4" />
          </Button>
        </nav>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-xl border border-border-subtle bg-bg-elevated/50 text-text-primary md:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 top-[72px] z-40 bg-bg-base/95 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <nav className="container-site flex flex-col gap-2 py-8" aria-label="Mobile">
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
                    className="block rounded-2xl px-4 py-4 font-display text-2xl font-semibold text-text-primary"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-4 px-4">
                <Button
                  to="/#contato"
                  size="lg"
                  className="w-full"
                  onClick={() => handleNav('/#contato', true)}
                >
                  Fale com a gente
                </Button>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
