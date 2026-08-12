import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, RotateCcw } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { serviceFinder, serviceResults } from '@/data/content'

export function ServiceFinder() {
  const step = serviceFinder[0]
  const [resultKey, setResultKey] = useState<string | null>(null)
  const result = resultKey ? serviceResults[resultKey] : null

  return (
    <section id="descoberta" className="relative scroll-mt-28 py-20 md:py-28">
      <div className="container-site">
        <SectionHeading
          eyebrow="Descoberta"
          title={
            <>
              Monte o mix certo em <span className="text-gradient">30 segundos</span>
            </>
          }
          description="Um quiz rápido para mapear seu momento atual e sugerir os serviços ideais para o seu negócio."
        />

        <div className="relative mt-12 overflow-hidden rounded-[1.5rem] border border-border-subtle bg-bg-surface/80 p-6 md:p-10">
          <div
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              background:
                'radial-gradient(ellipse 50% 60% at 100% 0%, rgba(94,234,212,0.12), transparent)',
            }}
          />

          <AnimatePresence mode="wait">
            {!result ? (
              <motion.div
                key="q"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="relative"
              >
                <p className="caption-mono text-accent-primary">Passo 01</p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-text-primary md:text-3xl">
                  {step.question}
                </h3>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {step.options.map((opt, i) => (
                    <motion.button
                      key={opt.id}
                      type="button"
                      onClick={() => setResultKey(opt.next)}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ y: -2 }}
                      className="cursor-pointer rounded-2xl border border-border-subtle bg-bg-base/50 px-5 py-5 text-left transition hover:border-accent-primary/50 hover:bg-bg-elevated"
                    >
                      <span className="font-display text-lg font-semibold text-text-primary">
                        {opt.label}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="r"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="relative"
              >
                <p className="caption-mono text-accent-glow">Recomendação ilustrativa</p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-text-primary md:text-4xl">
                  {result.title}
                </h3>
                <div className="mt-6 flex flex-wrap gap-2">
                  {result.products.map((p) => (
                    <span
                      key={p}
                      className="rounded-full border border-border-subtle bg-bg-base/60 px-3 py-1.5 text-sm text-text-secondary"
                    >
                      {p}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href="#contato" size="lg">
                    {result.cta}
                    <ArrowRight className="size-4" />
                  </Button>
                  <Button
                    type="button"
                    variant="secondary"
                    size="lg"
                    onClick={() => setResultKey(null)}
                  >
                    <RotateCcw className="size-4" />
                    Refazer
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
