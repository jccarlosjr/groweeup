import { motion } from 'framer-motion'
import { clients } from '@/data/content'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function Clients() {
  const reduced = useReducedMotion()
  const row = reduced ? clients : [...clients, ...clients]

  return (
    <section className="relative overflow-hidden border-y border-border py-10 md:py-12" aria-labelledby="frentes-titulo">
      <div className="container-site mb-6">
        <p id="frentes-titulo" className="caption-mono text-brand-900">
          Frentes de trabalho
        </p>
      </div>

      {reduced ? (
        <ul className="container-site flex flex-wrap gap-2">
          {row.map((name) => (
            <li
              key={name}
              className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-text-secondary"
            >
              {name}
            </li>
          ))}
        </ul>
      ) : (
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-canvas to-transparent md:w-28" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-canvas to-transparent md:w-28" />
          <motion.ul
            className="flex w-max gap-4"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
          >
            {row.map((name, i) => (
              <li
                key={`${name}-${i}`}
                className="flex h-16 min-w-[180px] items-center justify-center rounded-2xl border border-border bg-surface px-6"
              >
                <span className="text-sm font-semibold tracking-wide text-text-secondary uppercase">
                  {name}
                </span>
              </li>
            ))}
          </motion.ul>
        </div>
      )}
    </section>
  )
}
