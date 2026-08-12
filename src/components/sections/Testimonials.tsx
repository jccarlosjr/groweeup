import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { testimonials } from '@/data/content'

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const current = testimonials[index]

  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setIndex((i) => (i + 1) % testimonials.length)

  return (
    <section id="depoimentos" className="relative scroll-mt-28 py-20 md:py-28">
      <div className="container-site">
        <SectionHeading
          eyebrow="Depoimentos"
          title={
            <>
              Quem cresce <span className="text-gradient">recomenda</span>
            </>
          }
          description="Depoimentos placeholder. Troque nomes, cargos e citações pelos reais."
          align="center"
          className="mb-12"
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="overflow-hidden rounded-[1.5rem] border border-border-subtle bg-bg-surface/80 p-8 md:p-12">
            <Quote className="size-8 text-accent-primary/70" aria-hidden />
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={current.id}
                initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -12, filter: 'blur(6px)' }}
                transition={{ duration: 0.35 }}
                className="mt-6"
              >
                <p className="font-display text-2xl leading-snug font-medium tracking-tight text-text-primary md:text-3xl">
                  “{current.quote}”
                </p>
                <footer className="mt-8">
                  <p className="font-semibold text-text-primary">{current.name}</p>
                  <p className="mt-1 text-sm text-text-secondary">{current.role}</p>
                </footer>
              </motion.blockquote>
            </AnimatePresence>

            <div className="mt-10 flex items-center justify-between gap-4">
              <div className="flex gap-2">
                {testimonials.map((t, i) => (
                  <button
                    key={t.id}
                    type="button"
                    aria-label={`Ver depoimento ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === index ? 'w-8 bg-accent-primary' : 'w-3 bg-border-subtle'
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Depoimento anterior"
                  className="inline-flex size-11 items-center justify-center rounded-xl border border-border-subtle text-text-primary transition hover:border-accent-primary/40"
                >
                  <ChevronLeft className="size-4" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Próximo depoimento"
                  className="inline-flex size-11 items-center justify-center rounded-xl border border-border-subtle text-text-primary transition hover:border-accent-primary/40"
                >
                  <ChevronRight className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
