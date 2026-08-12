import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const metrics = [
  { label: 'Controle', value: 320, suffix: '+', hint: 'em múltiplos canais' },
  { label: 'Leads gerados', value: 48, suffix: 'k+', hint: 'qualificados e rastreados' },
  { label: 'Tempo médio de setup', value: 14, suffix: 'd', hint: 'do diagnóstico ao ar' },
  { label: 'Clientes ativos', value: 40, suffix: '+', hint: 'em crescimento contínuo' },
]

function useCountUp(target: number, active: boolean, duration = 1400) {
  const [value, setValue] = useState(0)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (!active) return
    if (reduced) {
      setValue(target)
      return
    }
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      setValue(Math.round(target * eased))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active, duration, reduced, target])

  return value
}

function MetricItem({
  label,
  value,
  suffix,
  hint,
  delay,
}: (typeof metrics)[number] & { delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const count = useCountUp(value, inView)

  return (
    <motion.div
      ref={ref}
      className="relative px-2 py-4 md:px-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      <p className="font-display text-4xl font-semibold tracking-tight text-text-primary md:text-5xl">
        <span className="text-gradient">
          {count}
          {suffix}
        </span>
      </p>
      <p className="mt-2 text-sm font-medium text-text-primary">{label}</p>
      <p className="mt-1 text-xs text-text-secondary">{hint}</p>
    </motion.div>
  )
}

export function Metrics() {
  return (
    <section className="relative py-8 md:py-12" aria-label="Indicadores">
      <div className="container-site">
        <div className="grid grid-cols-2 gap-6 rounded-[var(--radius-card)] border border-border-subtle bg-bg-surface/70 px-4 py-6 shadow-[0_0_0_1px_rgba(59,130,246,0.05)] backdrop-blur-md md:grid-cols-4 md:px-2 md:py-8">
          {metrics.map((m, i) => (
            <MetricItem key={m.label} {...m} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}
