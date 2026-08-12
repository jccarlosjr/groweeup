import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { bentoItems } from '@/data/content'

export function BentoShowcase() {
  return (
    <section id="sistema" className="relative scroll-mt-28 py-20 md:py-28">
      <div className="container-site">
        <SectionHeading
          eyebrow="Bento"
          title={
            <>
              O sistema, em <span className="text-gradient">blocos vivos</span>
            </>
          }
          description="Layout bento genérico — troque textos e destaques conforme a narrativa da marca."
        />

        <div className="mt-12 grid auto-rows-[minmax(160px,auto)] gap-4 lg:grid-cols-3 lg:grid-rows-3">
          {bentoItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: index * 0.06, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className={`group relative overflow-hidden rounded-[1.25rem] border border-border-subtle bg-bg-surface/80 p-6 ${item.span}`}
            >
              <div
                className="pointer-events-none absolute -right-10 -bottom-10 size-40 rounded-full opacity-40 blur-3xl transition duration-500 group-hover:opacity-80"
                style={{
                  background:
                    index % 2 === 0
                      ? 'radial-gradient(circle, rgba(59,130,246,0.55), transparent 70%)'
                      : 'radial-gradient(circle, rgba(94,234,212,0.45), transparent 70%)',
                }}
              />
              <p className="caption-mono relative text-accent-glow">{item.label}</p>
              <h3 className="relative mt-3 font-display text-2xl font-semibold tracking-tight text-text-primary md:text-3xl">
                {item.title}
              </h3>
              <p className="relative mt-3 max-w-md text-sm leading-relaxed text-text-secondary md:text-base">
                {item.text}
              </p>

              {index === 0 ? (
                <div className="relative mt-8 grid grid-cols-3 gap-2">
                  {['Ads', 'CRM', 'Social'].map((chip, i) => (
                    <motion.div
                      key={chip}
                      className="rounded-xl border border-border-subtle bg-bg-base/60 px-3 py-4 text-center"
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <p className="font-display text-sm font-semibold text-text-primary">{chip}</p>
                      <p className="mt-1 text-[10px] text-text-secondary">conectado</p>
                    </motion.div>
                  ))}
                </div>
              ) : null}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
