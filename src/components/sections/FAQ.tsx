import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { faqs } from '@/data/content'
import { reveal } from '@/lib/motion'

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null)

  return (
    <section id="faq" className="scroll-mt-20 py-20 md:py-24">
      <div className="container-site grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <SectionHeading
          eyebrow="FAQ"
          title="Perguntas frequentes"
          description="Escopo, início do trabalho e para quem a parceria faz sentido."
        />

        <div className="space-y-3">
          {faqs.map((item, index) => {
            const open = openId === item.id
            const panelId = `${item.id}-painel`
            return (
              <motion.div
                key={item.id}
                className="overflow-hidden rounded-[var(--radius-card)] border border-border bg-surface"
                {...reveal(index * 0.04)}
              >
                <h3>
                  <button
                    type="button"
                    id={item.id}
                    className="flex min-h-11 w-full items-center justify-between gap-4 px-5 py-4 text-left focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-600"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenId(open ? null : item.id)}
                  >
                    <span className="font-display text-base font-semibold text-text-primary">
                      {item.question}
                    </span>
                    <motion.span
                      className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg border border-border text-text-secondary"
                      animate={{ rotate: open ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <Plus className="size-4" aria-hidden />
                    </motion.span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {open ? (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={item.id}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="px-5 pb-5 text-base leading-relaxed text-text-secondary">{item.answer}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
