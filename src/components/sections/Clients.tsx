import { motion } from 'framer-motion'
import { clients } from '@/data/content'

export function Clients() {
  const row = [...clients, ...clients]

  return (
    <section className="relative overflow-hidden py-14 md:py-16" aria-label="Clientes">
      <div className="container-site mb-8 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <p className="caption-mono text-accent-primary">Nossos Serviços</p>
          <h2 className="mt-2 font-display text-xl font-semibold text-text-primary md:text-2xl">
            Para escalar e crescer
          </h2>
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-bg-base to-transparent md:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-bg-base to-transparent md:w-28" />

        <motion.div
          className="flex w-max gap-4"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
        >
          {row.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex h-16 min-w-[160px] items-center justify-center rounded-2xl border border-border-subtle bg-bg-surface/70 px-6"
            >
              <span className="font-display text-sm font-semibold tracking-wide text-text-secondary/90 uppercase">
                {name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
