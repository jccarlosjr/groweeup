import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { cases } from '@/data/content'

export function CaseStudies() {
  return (
    <section id="cases" className="relative scroll-mt-28 py-20 md:py-28">
      <div className="container-site">
        <SectionHeading
          eyebrow="Cases"
          title={
            <>
              Resultados que <span className="text-gradient">contam a história</span>
            </>
          }
          description="Cases fictícios para estrutura visual. Substitua por resultados reais, setores e métricas oficiais."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {cases.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: index * 0.08, duration: 0.55 }}
              className="group relative flex min-h-[320px] flex-col overflow-hidden rounded-[var(--radius-card)] border border-border-subtle bg-bg-surface/80 p-6"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    'radial-gradient(500px circle at 20% 0%, rgba(59,130,246,0.18), transparent 50%)',
                }}
              />
              <div className="relative z-10 flex flex-1 flex-col">
                <div className="flex items-center justify-between gap-3">
                  <span className="caption-mono text-accent-primary">{item.sector}</span>
                  <span className="caption-mono text-text-secondary">{item.metric}</span>
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-text-primary">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">
                  {item.summary}
                </p>
                <div className="mt-8 flex items-end justify-between gap-4 border-t border-border-subtle pt-5">
                  <div>
                    <p className="caption-mono text-text-secondary">Resultado</p>
                    <p className="mt-1 font-display text-xl font-semibold text-gradient">
                      {item.result}
                    </p>
                  </div>
                  <a
                    href="#contato"
                    className="inline-flex size-10 items-center justify-center rounded-xl border border-border-subtle text-text-secondary transition group-hover:border-accent-primary/40 group-hover:text-text-primary"
                    aria-label={`Saiba mais sobre ${item.title}`}
                  >
                    <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
