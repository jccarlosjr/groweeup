import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { reveal } from '@/lib/motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { products } from '@/data/products'

export function Products() {
  return (
    <section id="produtos" className="scroll-mt-20 py-20 md:py-24">
      <div className="container-site">
        <SectionHeading
          eyebrow="Serviços"
          title="Seis frentes. Um sistema de crescimento."
          description="Do branding à mídia, do WhatsApp à infraestrutura Meta — cada frente reforça a próxima."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product, index) => {
            const Icon = product.icon
            return (
              <motion.div
                key={product.id}
                className={index === 4 ? 'md:col-span-2 xl:col-span-1' : undefined}
                {...reveal(index * 0.07)}
              >
                <Card className="h-full">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div className="inline-flex size-11 items-center justify-center rounded-xl border border-border bg-canvas text-brand-600">
                      <Icon className="size-5" aria-hidden />
                    </div>
                    <div className="flex flex-wrap justify-end gap-2">
                      {product.tags.map((tag) => (
                        <span
                          key={tag}
                          className="caption-mono rounded-full border border-border-subtle px-2.5 py-1 text-[0.7rem] text-text-secondary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-semibold tracking-tight text-text-primary">
                    {product.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary md:text-base">
                    {product.description}
                  </p>
                </Card>
              </motion.div>
            )
          })}

          <motion.a
            href="#contato"
            {...reveal(0.35)}
            whileHover={{ y: -3 }}
            className="group flex min-h-44 flex-col justify-between rounded-[var(--radius-card)] bg-brand-900 p-6 text-white transition-colors duration-200 hover:bg-brand-600 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-600 md:col-span-2 xl:col-span-3"
          >
            <p className="caption-mono text-white">Próximo passo</p>
            <div className="mt-8 flex items-end justify-between gap-4">
              <div>
                <h3 className="font-display text-2xl font-semibold tracking-tight text-white">
                  Não sabe por onde começar?
                </h3>
                <p className="mt-2 max-w-xl text-base text-white">
                  Conte o momento do seu negócio. Montamos o mix certo para o estágio atual.
                </p>
              </div>
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/15">
                <ArrowUpRight className="size-5 text-white" aria-hidden />
              </span>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  )
}
