import { motion } from 'framer-motion'
import { BarChart3, Link2, Rocket, UsersRound } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { benefits } from '@/data/content'
import { reveal } from '@/lib/motion'

const icons = [BarChart3, Rocket, Link2, UsersRound]

export function Benefits() {
  return (
    <section id="diferenciais" className="scroll-mt-20 bg-surface py-20 md:py-24">
      <div className="container-site">
        <SectionHeading
          eyebrow="O que nos diferencia"
          title="Crescimento com excelência operacional"
          description="Profissionalismo, método e atualização constante do mercado — com marketing e tecnologia no mesmo time."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {benefits.map((item, index) => {
            const Icon = icons[index % icons.length]
            return (
              <motion.div key={item.id} {...reveal(index * 0.06)}>
                <Card className="h-full" hover={false}>
                  <div className="mb-5 flex items-center gap-4">
                    <div className="inline-flex size-11 items-center justify-center rounded-xl border border-border bg-canvas text-brand-600">
                      <Icon className="size-5" aria-hidden />
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
