import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { integrations } from '@/data/content'

export function Integrations() {
  return (
    <section id="integracoes" className="relative scroll-mt-28 py-20 md:py-28">
      <div className="container-site">
        <SectionHeading
          eyebrow="Integrações"
          title={
            <>
              Ferramentas do <span className="text-gradient">ecossistema de growth</span>
            </>
          }
          description="Lista genérica de plataformas. Atualize com o stack oficial que vocês operam no dia a dia."
        />

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {integrations.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04, duration: 0.4 }}
              whileHover={{ y: -3 }}
              className="rounded-[var(--radius-card)] border border-border-subtle bg-bg-surface/70 px-4 py-5 text-center"
            >
              <p className="caption-mono mb-2 text-accent-glow">{item.category}</p>
              <p className="font-display text-base font-semibold text-text-primary">{item.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
