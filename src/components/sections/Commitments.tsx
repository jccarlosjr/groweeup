import { motion } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'
import { commitments } from '@/data/content'

export function Commitments() {
  return (
    <section className="relative py-16 md:py-20">
      <div className="container-site">
        <div className="overflow-hidden rounded-[1.5rem] border border-border-subtle bg-bg-elevated/40 p-6 backdrop-blur-md md:p-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="inline-flex size-10 items-center justify-center rounded-xl bg-accent-primary/15 text-accent-glow">
              <ShieldCheck className="size-5" />
            </div>
            <div>
              <p className="caption-mono text-accent-primary">Compromissos</p>
              <h2 className="font-display text-xl font-semibold text-text-primary md:text-2xl">
                Como a parceria funciona na prática
              </h2>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {commitments.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl border border-border-subtle bg-bg-base/50 p-5"
              >
                <h3 className="font-display text-lg font-semibold text-text-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
