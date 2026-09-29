import { motion } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'
import { commitments } from '@/data/content'
import { reveal } from '@/lib/motion'

export function Commitments() {
  return (
    <section className="py-16 md:py-20" aria-labelledby="compromissos-titulo">
      <div className="container-site">
        <div className="rounded-[var(--radius-card)] border border-border bg-surface p-6 md:p-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="inline-flex size-11 items-center justify-center rounded-xl bg-canvas text-brand-600">
              <ShieldCheck className="size-5" aria-hidden />
            </div>
            <div>
              <p className="caption-mono text-brand-900">Compromissos</p>
              <h2 id="compromissos-titulo" className="font-display text-xl font-semibold text-text-primary md:text-2xl">
                Como a parceria funciona na prática
              </h2>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {commitments.map((item, i) => (
              <motion.div key={item.title} className="rounded-xl border border-border bg-canvas p-5" {...reveal(i * 0.06)}>
                <h3 className="font-display text-lg font-semibold text-text-primary">{item.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-text-secondary">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
