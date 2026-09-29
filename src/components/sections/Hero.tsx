import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { GrowthLine } from '@/components/ui/GrowthLine'
import { Magnetic } from '@/components/ui/Magnetic'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import logoMark from '@/assets/logo-dark.png'
import { ease } from '@/lib/motion'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease },
  },
}

export function Hero() {
  const reduced = useReducedMotion()

  return (
    <section className="relative isolate overflow-hidden pt-8 pb-16 md:pt-16 md:pb-24">
      <div className="pointer-events-none absolute inset-0 bg-grid-tech opacity-60" aria-hidden />
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            'radial-gradient(closest-side, rgba(0,100,255,0.35), rgba(194,217,252,0.08), transparent)',
        }}
        aria-hidden
      />
      <GrowthLine className="top-[18%] opacity-80 md:top-[12%]" interactive />

      <div className="container-site relative z-10 grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-2xl">
          <motion.div variants={item}>
            <Badge>Agência de marketing e desenvolvimento</Badge>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-5 font-display text-4xl leading-tight font-semibold tracking-tight text-text-primary sm:text-5xl md:text-[3.25rem]"
          >
            Crescimento com método, do diagnóstico à operação.
          </motion.h1>

          <motion.p variants={item} className="mt-5 max-w-[42rem] text-lg leading-relaxed text-text-secondary">
            Unimos tráfego, CRM no WhatsApp, conteúdo e sistemas para empresas que precisam de
            resultado mensurável — com escopo claro e acompanhamento constante.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <Magnetic>
              <Button href="#contato" size="lg">
                Solicitar diagnóstico
                <ArrowRight className="size-4" aria-hidden />
              </Button>
            </Magnetic>
            <Button href="#produtos" variant="secondary" size="lg">
              Ver serviços
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative mx-auto hidden w-full max-w-md lg:block"
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8, ease }}
        >
          <div className="relative aspect-square">
            <div className="absolute inset-8 rounded-[2rem] border border-border bg-surface/70 backdrop-blur-md" />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.img
                src={logoMark}
                alt="Growee Up"
                className="relative z-10 h-48 w-48 object-contain drop-shadow-[0_20px_60px_rgba(0,100,255,0.45)]"
                animate={reduced ? undefined : { y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
            <motion.div
              className="absolute top-10 right-4 rounded-2xl border border-border bg-canvas/90 px-4 py-3 backdrop-blur-md"
              animate={reduced ? undefined : { y: [0, 8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <p className="caption-mono text-brand-600">Estratégia</p>
            </motion.div>
            <motion.div
              className="absolute bottom-12 left-2 rounded-2xl border border-border bg-canvas/90 px-4 py-3 backdrop-blur-md"
              animate={reduced ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
            >
              <p className="caption-mono text-brand-900">Crescimento</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
