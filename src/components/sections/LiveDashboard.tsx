import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Activity, MousePointerClick, MessagesSquare, TrendingUp } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const feed = [
  'Campanha Prospecting · CTR +0.4pp',
  'WhatsApp · 12 conversas qualificantes',
  'Retarget · CPA -8% vs ontem',
  'Criativo A/B · vencedor definido',
  'Pixel · evento Purchase ok',
  'Social · post com 2.1k alcance',
]

export function LiveDashboard() {
  const reduced = useReducedMotion()
  const [roas, setRoas] = useState(3.42)
  const [feedIndex, setFeedIndex] = useState(0)
  const [pulse, setPulse] = useState(0)

  useEffect(() => {
    if (reduced) return
    const id = window.setInterval(() => {
      setRoas((v) => Number((v + (Math.random() - 0.45) * 0.08).toFixed(2)))
      setFeedIndex((i) => (i + 1) % feed.length)
      setPulse((p) => p + 1)
    }, 2200)
    return () => window.clearInterval(id)
  }, [reduced])

  const chart = Array.from({ length: 24 }, (_, i) => {
    const t = (pulse + i) * 0.35
    return 28 + Math.sin(t) * 18 + Math.cos(t * 0.6) * 10 + i * 0.8
  })

  return (
    <section id="dashboard" className="relative scroll-mt-28 py-20 md:py-28">
      <div className="container-site">
        <SectionHeading
          eyebrow="Operação ao vivo"
          title={
            <>
              A sensação de um <span className="text-gradient">cockpit de growth</span>
            </>
          }
          description="Mock animado de dashboard — só para atmosfera. Depois você troca por prints reais ou remove."
        />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mt-12 overflow-hidden rounded-[1.5rem] border border-border-subtle bg-bg-surface shadow-[0_0_80px_rgba(0,100,255,0.12)]"
        >
          <div className="flex items-center justify-between border-b border-border-subtle px-5 py-3">
            <div className="flex items-center gap-2">
              <span className="size-2.5 rounded-full bg-brand-300 shadow-[0_0_10px_var(--brand-300)] animate-pulse" />
              <span className="caption-mono text-accent-glow">Live mock</span>
            </div>
            <span className="caption-mono text-text-secondary">Growee Up · Control Room</span>
          </div>

          <div className="grid gap-4 p-5 md:grid-cols-4">
            <Kpi
              icon={TrendingUp}
              label="ROAS"
              value={roas.toFixed(2)}
              delta="+0.12"
            />
            <Kpi icon={MousePointerClick} label="CTR" value="2.8%" delta="+0.3pp" />
            <Kpi icon={MessagesSquare} label="Chats" value="186" delta="+24" />
            <Kpi icon={Activity} label="Conv." value="9.1%" delta="+1.1pp" />
          </div>

          <div className="grid gap-4 px-5 pb-5 lg:grid-cols-[1.4fr_0.8fr]">
            <div className="rounded-2xl border border-border-subtle bg-bg-surface/40 p-4">
              <p className="caption-mono mb-4 text-text-secondary">Aquisição · 24h</p>
              <svg viewBox="0 0 240 80" className="h-36 w-full" aria-hidden>
                <defs>
                  <linearGradient id="dashFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0064FF" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#0064FF" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <motion.polyline
                  fill="none"
                  stroke="#C2D9FC"
                  strokeWidth="2"
                  points={chart
                    .map((y, i) => `${(i / (chart.length - 1)) * 240},${80 - y}`)
                    .join(' ')}
                  animate={{ opacity: [0.85, 1, 0.85] }}
                  transition={{ duration: 2.2, repeat: Infinity }}
                />
                <polygon
                  fill="url(#dashFill)"
                  points={`0,80 ${chart
                    .map((y, i) => `${(i / (chart.length - 1)) * 240},${80 - y}`)
                    .join(' ')} 240,80`}
                />
              </svg>
            </div>

            <div className="rounded-2xl border border-border-subtle bg-bg-surface/40 p-4">
              <p className="caption-mono mb-4 text-text-secondary">Event stream</p>
              <ul className="space-y-3">
                {feed.map((item, i) => {
                  const active = i === feedIndex
                  return (
                    <li
                      key={item}
                      className={`rounded-xl px-3 py-2 text-sm transition ${
                        active
                          ? 'bg-accent-primary/15 text-text-primary'
                          : 'text-text-secondary'
                      }`}
                    >
                      {item}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Kpi({
  icon: Icon,
  label,
  value,
  delta,
}: {
  icon: typeof TrendingUp
  label: string
  value: string
  delta: string
}) {
  return (
    <div className="rounded-2xl border border-border-subtle bg-bg-surface/40 p-4">
      <div className="mb-3 flex items-center justify-between">
        <Icon className="size-4 text-accent-primary" />
        <span className="text-xs font-medium text-accent-glow">{delta}</span>
      </div>
      <p className="caption-mono text-text-secondary">{label}</p>
      <p className="mt-1 font-display text-2xl font-semibold text-text-primary">{value}</p>
    </div>
  )
}
