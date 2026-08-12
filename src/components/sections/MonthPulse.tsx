import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { monthPulse } from '@/data/content'

export function MonthPulse() {
  return (
    <section id="primeiros-30" className="relative scroll-mt-28 overflow-x-hidden py-20 md:py-28">
      <div className="container-site">
        <SectionHeading
          eyebrow="Primeiros 30 dias"
          title={
            <>
              Um mês com <span className="text-gradient">pulso de execução</span>
            </>
          }
          description="Timeline do onboarding. Troque as fases pelo fluxo real da agência."
        />

        <div className="relative mt-12">
          <div
            className="pointer-events-none absolute top-[2.15rem] right-0 left-0 hidden h-px bg-border-subtle md:block"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute top-[2.15rem] left-0 hidden h-px w-full origin-left bg-gradient-to-r from-accent-primary to-accent-glow md:block"
            aria-hidden
            style={{ width: '100%', opacity: 0.55 }}
          />

          <ol className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {monthPulse.map((step, i) => (
              <motion.li
                key={step.day}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="relative"
              >
                <article className="h-full rounded-[1.25rem] border border-border-subtle bg-bg-surface/80 p-6">
                  <div className="mb-6 flex items-center gap-3">
                    <span className="relative z-10 flex size-10 items-center justify-center rounded-full bg-gradient-signature font-display text-sm font-bold text-bg-base shadow-[0_0_24px_rgba(59,130,246,0.35)]">
                      {i + 1}
                    </span>
                    <span className="caption-mono text-accent-primary">{step.day}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-text-primary md:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">{step.detail}</p>
                  <div className="mt-8 h-1.5 overflow-hidden rounded-full bg-border-subtle">
                    <motion.div
                      className="h-full bg-gradient-signature"
                      initial={{ width: '0%' }}
                      whileInView={{ width: `${(i + 1) * 25}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.1 }}
                    />
                  </div>
                </article>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
