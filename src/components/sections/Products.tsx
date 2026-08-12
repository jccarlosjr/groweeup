import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { products } from '@/data/products'

export function Products() {
  return (
    <section id="produtos" className="relative scroll-mt-28 py-20 md:py-28">
      <div className="container-site">
        <SectionHeading
          eyebrow="Produtos"
          title={
            <>
              Seis frentes. <span className="text-gradient">Um sistema de crescimento.</span>
            </>
          }
          description="Do branding à mídia, do WhatsApp à infraestrutura Meta — cada produto reforça o próximo para acelerar resultados."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product, index) => {
            const Icon = product.icon
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  delay: index * 0.07,
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={index === 4 ? 'md:col-span-2 xl:col-span-1' : undefined}
              >
                <Card className="h-full min-h-[240px]">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div className="inline-flex size-12 items-center justify-center rounded-2xl border border-border-subtle bg-bg-elevated text-accent-primary shadow-[0_0_24px_rgba(0,100,255,0.15)]">
                      <Icon className="size-5" />
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
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: 0.35, duration: 0.55 }}
            className="group relative flex min-h-[240px] flex-col justify-between overflow-hidden rounded-[var(--radius-card)] border border-transparent bg-gradient-signature p-6 text-white shadow-[0_20px_60px_rgba(0,100,255,0.25)] md:col-span-2 xl:col-span-3"
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{
                background:
                  'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.45), transparent 40%)',
              }}
            />
            <p className="caption-mono relative text-white/80">Próximo passo</p>
            <div className="relative flex items-end justify-between gap-4">
              <div>
                <h3 className="font-display text-2xl font-semibold tracking-tight md:text-3xl text-white">
                  Não sabe por onde começar?
                </h3>
                <p className="mt-2 max-w-xl text-sm text-white/80 md:text-base">
                  Conte o momento do seu negócio — montamos o mix certo de produtos para o seu
                  estágio de crescimento.
                </p>
              </div>
              <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white/15 transition group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRight className="size-5 text-white" />
              </span>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  )
}
