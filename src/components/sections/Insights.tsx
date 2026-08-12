import { motion } from 'framer-motion'
import { ArrowRight, Clock3 } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { insights } from '@/data/content'

export function Insights() {
  return (
    <section id="insights" className="relative scroll-mt-28 py-20 md:py-28">
      <div className="container-site">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Insights"
            title={
              <>
                Conteúdo para <span className="text-gradient">pensar growth</span>
              </>
            }
            description="Cards genéricos de blog/insights. Depois ligue a posts reais ou remova a seção."
          />
          <a
            href="#contato"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent-primary transition hover:gap-3"
          >
            Ver todos (em breve)
            <ArrowRight className="size-4" />
          </a>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {insights.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07, duration: 0.5 }}
            >
              <Card className="flex h-full flex-col">
                <div className="mb-5 flex items-center justify-between gap-3">
                  <span className="caption-mono text-accent-glow">{item.tag}</span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-text-secondary">
                    <Clock3 className="size-3.5" />
                    {item.readTime}
                  </span>
                </div>
                <div
                  className="mb-5 h-28 rounded-2xl border border-border-subtle"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(59,130,246,0.25), rgba(94,234,212,0.12))',
                  }}
                  aria-hidden
                />
                <h3 className="font-display text-xl font-semibold text-text-primary">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">
                  {item.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-text-primary">
                  Ler insight
                  <ArrowRight className="size-3.5 text-accent-primary" />
                </span>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
