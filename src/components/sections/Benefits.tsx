import { motion } from 'framer-motion'
import { BarChart3, Link2, Rocket, UsersRound } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { benefits } from '@/data/content'

const icons = [BarChart3, Rocket, Link2, UsersRound]

export function Benefits() {
  return (
    <section id="diferenciais" className="relative scroll-mt-28 py-20 md:py-28">
      <div className="container-site">
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_1.1fr]">
          <SectionHeading
            eyebrow="O que nos diferencia"
            title={
              <>
                Crescimento com <span className="text-gradient">excelência operacional</span>
              </>
            }
            description="Profissionalismo, expertise técnica e atualizações constantes do mercado."
          />
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {benefits.map((item, index) => {
            const Icon = icons[index % icons.length]
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.06, duration: 0.5 }}
              >
                <Card className="h-full">
                  <div className="mb-5 flex items-center gap-4">
                    <div className="inline-flex size-11 items-center justify-center rounded-2xl border border-border-subtle bg-bg-elevated text-accent-glow">
                      <Icon className="size-5" />
                    </div>
                    <span className="caption-mono text-text-secondary">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary md:text-base">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
