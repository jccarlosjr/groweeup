import { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { orbitChannels } from '@/data/content'
import wordmark from '@/assets/name.png'

export function OrbitChannels() {
  const [active, setActive] = useState(orbitChannels[0].id)
  const current = orbitChannels.find((c) => c.id === active) ?? orbitChannels[0]

  return (
    <section id="orbita" className="relative scroll-mt-28 overflow-hidden py-20 md:py-28">
      <div className="container-site grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
        <SectionHeading
          eyebrow="Ecossistema"
          title={
            <>
              Canais em <span className="text-gradient">órbita</span> com o mesmo objetivo
            </>
          }
          description="Nossos canais se movem em sincronia, todos direcionados para o mesmo destino: escalar o seu negócio."
        />

        <div className="relative mx-auto aspect-square w-full max-w-md">
          <div className="absolute inset-[12%] rounded-full border border-border-subtle/80" />
          <div className="absolute inset-[26%] rounded-full border border-dashed border-border-subtle/60" />
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 48, ease: 'linear', repeat: Infinity }}
          >
            {orbitChannels.map((ch) => {
              const rad = (ch.angle * Math.PI) / 180
              const r = 42
              const x = 50 + r * Math.cos(rad)
              const y = 50 + r * Math.sin(rad)
              const isActive = active === ch.id
              return (
                <button
                  key={ch.id}
                  type="button"
                  onClick={() => setActive(ch.id)}
                  className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                  style={{ left: `${x}%`, top: `${y}%` }}
                  aria-pressed={isActive}
                >
                  <motion.span
                    className={`inline-flex h-16 w-16 md:h-18 md:w-18 items-center justify-center rounded-full border p-1 text-xs font-semibold backdrop-blur-md text-center leading-tight shadow-md transition-all ${isActive
                      ? 'border-brand-300 bg-brand-600 text-white shadow-[0_0_24px_rgba(0,100,255,0.45)] ring-2 ring-brand-400/50 scale-105'
                      : 'border-border-subtle bg-bg-elevated/90 text-text-primary'
                      }`}
                    whileHover={{ scale: 1.1 }}
                    style={{ rotate: 0 }}
                  >
                    {/* counter-rotate so labels stay readable */}
                    <motion.span
                      className="block whitespace-nowrap text-[11px] md:text-xs px-0.5 font-semibold"
                      animate={{ rotate: -360 }}
                      transition={{ duration: 48, ease: 'linear', repeat: Infinity }}
                    >
                      {ch.label}
                    </motion.span>
                  </motion.span>
                </button>
              )
            })}
          </motion.div>

          <div className="absolute inset-[33%] flex items-center justify-center rounded-full border border-brand-600/30 bg-bg-base/80 p-4 shadow-[0_0_60px_rgba(0,100,255,0.25)] backdrop-blur-md">
            <img src={wordmark} alt="Growee Up" className="h-6 md:h-8 w-auto object-contain" />
          </div>
        </div>
      </div>

      <div className="container-site mt-8">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl border border-border-subtle bg-bg-surface/70 px-5 py-4 text-sm text-text-secondary md:text-base"
        >
          <span className="font-semibold text-text-primary">{current.label}: </span>
          {current.text}
        </motion.div>
      </div>
    </section>
  )
}
