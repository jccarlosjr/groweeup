import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { faqs } from '@/data/content'

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null)

  return (
    <section id="faq" className="relative scroll-mt-28 py-20 md:py-28">
      <div className="container-site grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Perguntas <span className="text-gradient">frequentes</span>
            </>
          }
        />

        <div className="space-y-3">
          {faqs.map((item, index) => {
            const open = openId === item.id
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="overflow-hidden rounded-[var(--radius-card)] border border-border-subtle bg-bg-surface/70"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer"
                  aria-expanded={open}
                  onClick={() => setOpenId(open ? null : item.id)}
                >
                  <span className="font-display text-base font-semibold text-text-primary md:text-lg">
                    {item.question}
                  </span>
                  <span
                    className={`inline-flex size-9 shrink-0 items-center justify-center rounded-xl border border-border-subtle transition ${open ? 'rotate-45 bg-bg-elevated text-accent-glow' : 'text-text-secondary'
                      }`}
                  >
                    <Plus className="size-4" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-text-secondary md:text-base">
                        {item.answer}
                      </p>
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
