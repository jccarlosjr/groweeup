import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { compareRows } from '@/data/content'

export function Compare() {
  return (
    <section id="comparativo" className="relative scroll-mt-28 py-20 md:py-28">
      <div className="container-site">
        <SectionHeading
          eyebrow="Comparativo"
          title={
            <>
              Agência tradicional vs <span className="text-gradient">Growee Up</span>
            </>
          }
          description="Tabela genérica de posicionamento. Ajuste os contrastes para o discurso comercial final."
          align="center"
          className="mb-12"
        />

        <div className="overflow-hidden rounded-[1.25rem] border border-border-subtle">
          <div className="grid grid-cols-[1.1fr_1fr_1fr] border-b border-border-subtle bg-bg-elevated/60 text-sm">
            <div className="px-4 py-4 font-medium text-text-secondary md:px-6">Critério</div>
            <div className="px-4 py-4 font-medium text-text-secondary md:px-6">Tradicional</div>
            <div className="bg-gradient-to-br from-accent-primary/20 to-accent-glow/10 px-4 py-4 font-semibold text-text-primary md:px-6">
              Growee Up
            </div>
          </div>

          {compareRows.map((row, i) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="grid grid-cols-[1.1fr_1fr_1fr] border-b border-border-subtle last:border-b-0"
            >
              <div className="px-4 py-4 text-sm font-medium text-text-primary md:px-6 md:text-base">
                {row.label}
              </div>
              <div className="px-4 py-4 text-sm text-text-secondary md:px-6">{row.traditional}</div>
              <div className="bg-accent-primary/5 px-4 py-4 text-sm font-medium text-accent-glow md:px-6 md:text-base">
                {row.growee}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
