import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, RotateCcw } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { serviceFinder, serviceResults } from '@/data/content'

export function ServiceFinder() {
  const step = serviceFinder[0]
  const [resultKey, setResultKey] = useState<string | null>(null)
  const result = resultKey ? serviceResults[resultKey] : null
  const questionRef = useRef<HTMLHeadingElement>(null)
  const resultRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (result) resultRef.current?.focus()
  }, [result])

  return (
    <section id="descoberta" className="scroll-mt-20 py-20 md:py-24">
      <div className="container-site">
        <SectionHeading
          eyebrow="Descoberta"
          title="Monte o mix certo em um passo"
          description="Escolha o gargalo atual e veja quais serviços fazem mais sentido para o momento do negócio."
        />

        <div className="mt-12 rounded-[var(--radius-card)] border border-border bg-surface p-6 md:p-10">
          <AnimatePresence mode="wait">
            {!result ? (
              <motion.div
                key="q"
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.3 }}
              >
                <p className="caption-mono text-brand-900">Passo 01</p>
                <h3
                  ref={questionRef}
                  tabIndex={-1}
                  className="mt-3 font-display text-2xl font-semibold text-text-primary focus:outline-none"
                >
                  {step.question}
                </h3>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {step.options.map((opt) => (
                    <motion.button
                      key={opt.id}
                      type="button"
                      onClick={() => setResultKey(opt.next)}
                      whileHover={{ y: -2 }}
                      className="min-h-11 cursor-pointer rounded-xl border border-border bg-canvas px-5 py-4 text-left transition-colors duration-200 hover:border-brand-600 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-600"
                    >
                      <span className="font-display text-base font-semibold text-text-primary">
                        {opt.label}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="r"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="caption-mono text-brand-900">Recomendação</p>
                <h3
                  ref={resultRef}
                  tabIndex={-1}
                  className="mt-3 font-display text-2xl font-semibold text-text-primary focus:outline-none md:text-3xl"
                >
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
                    onClick={() => {
                      setResultKey(null)
                      requestAnimationFrame(() => questionRef.current?.focus())
                    }}
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
