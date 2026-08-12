import { useMemo, useState } from 'react'
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { Sparkles } from 'lucide-react'

function formatBRL(n: number) {
  return n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })
}

export function GrowthSimulator() {
  const [budget, setBudget] = useState(12000)
  const [cpl, setCpl] = useState(45)
  const [conv, setConv] = useState(8)

  const leads = useMemo(() => Math.round(budget / cpl), [budget, cpl])
  const sales = useMemo(() => Math.round(leads * (conv / 100)), [leads, conv])
  const projected = useMemo(() => sales * 890, [sales])

  const glowX = useMotionValue(50)
  const glowY = useMotionValue(20)
  const sx = useSpring(glowX, { stiffness: 80, damping: 20 })
  const sy = useSpring(glowY, { stiffness: 80, damping: 20 })
  const bg = useMotionTemplate`radial-gradient(500px circle at ${sx}% ${sy}%, rgba(0,100,255,0.22), transparent 50%)`

  const bars = useMemo(() => {
    const base = Math.max(leads, 1)
    return Array.from({ length: 12 }, (_, i) => {
      const wave = 0.45 + Math.sin(i * 0.7 + budget / 4000) * 0.25 + i / 40
      return Math.min(100, Math.round((leads / base) * wave * 70 + 18))
    })
  }, [budget, leads])

  return (
    <section id="simulador" className="relative scroll-mt-28 py-20 md:py-28">
      <div className="container-site">
        <SectionHeading
          eyebrow="Simulador"
          title={
            <>
              Projete o impacto do <span className="text-gradient">investimento</span>
            </>
          }
          description="Ferramenta ilustrativa — números genéricos. Ajuste sliders e troque as premissas depois pelos seus benchmarks."
        />

        <motion.div
          className="relative mt-12 overflow-hidden rounded-[1.5rem] border border-border-subtle bg-bg-surface/80 p-6 md:p-10"
          style={{ backgroundImage: bg }}
          onPointerMove={(e) => {
            const r = e.currentTarget.getBoundingClientRect()
            glowX.set(((e.clientX - r.left) / r.width) * 100)
            glowY.set(((e.clientY - r.top) / r.height) * 100)
          }}
        >
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-8">
              <SliderField
                label="Verba mensal de mídia"
                valueLabel={formatBRL(budget)}
                min={3000}
                max={80000}
                step={500}
                value={budget}
                onChange={setBudget}
              />
              <SliderField
                label="CPL estimado"
                valueLabel={formatBRL(cpl)}
                min={15}
                max={180}
                step={1}
                value={cpl}
                onChange={setCpl}
              />
              <SliderField
                label="Taxa de conversão lead → venda"
                valueLabel={`${conv}%`}
                min={2}
                max={25}
                step={1}
                value={conv}
                onChange={setConv}
              />

              <div className="flex flex-wrap gap-3 pt-2">
                <Button href="#contato" size="lg">
                  Quero uma projeção real
                  <Sparkles className="size-4" />
                </Button>
                <p className="self-center text-xs text-text-secondary">
                  *Simulação educacional — não é garantia de resultado.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <StatCard label="Leads / mês" value={leads.toLocaleString('pt-BR')} accent />
              <StatCard label="Vendas estimadas" value={String(sales)} />
              <StatCard
                label="Receita ilustrativa"
                value={formatBRL(projected)}
                className="sm:col-span-2 xl:col-span-2"
              />

              <div className="rounded-2xl border border-border-subtle bg-bg-base/50 p-5 sm:col-span-2 xl:col-span-2">
                <p className="caption-mono mb-4 text-text-secondary">Curva ilustrativa de volume</p>
                <div className="flex h-28 items-end gap-1.5">
                  {bars.map((h, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 rounded-t-md bg-gradient-to-t from-accent-primary/40 to-accent-glow"
                      animate={{ height: `${h}%` }}
                      transition={{ type: 'spring', stiffness: 120, damping: 18 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function SliderField({
  label,
  valueLabel,
  min,
  max,
  step,
  value,
  onChange,
}: {
  label: string
  valueLabel: string
  min: number
  max: number
  step: number
  value: number
  onChange: (v: number) => void
}) {
  return (
    <label className="block">
      <div className="mb-3 flex items-center justify-between gap-3">
        <span className="text-sm text-text-secondary">{label}</span>
        <span className="font-display text-lg font-semibold text-text-primary">{valueLabel}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full cursor-pointer accent-accent-primary"
      />
    </label>
  )
}

function StatCard({
  label,
  value,
  accent,
  className = '',
}: {
  label: string
  value: string
  accent?: boolean
  className?: string
}) {
  return (
    <div className={`rounded-2xl border border-border-subtle bg-bg-base/50 p-5 ${className}`}>
      <p className="caption-mono text-text-secondary">{label}</p>
      <motion.p
        key={value}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className={`mt-2 font-display text-3xl font-semibold tracking-tight ${
          accent ? 'text-gradient' : 'text-text-primary'
        }`}
      >
        {value}
      </motion.p>
    </div>
  )
}
