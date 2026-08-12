import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { GrowthLine } from '@/components/ui/GrowthLine'
import { Magnetic } from '@/components/ui/Magnetic'
import logoMark from '@/assets/logo-dark.png'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.25 },
  },
}

const item = {
  hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function Hero() {
  return (
    <section className="relative isolate min-h-[min(92vh,920px)] overflow-hidden pt-8 pb-20 md:pt-16">
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

      <div className="container-site relative z-10 grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
          <motion.div variants={item}>
            <Badge>Agência de marketing · Desenvolvimento</Badge>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-[3.25rem] leading-[0.98] font-semibold tracking-tight text-text-primary sm:text-6xl md:text-7xl"
          >
            <span className="block">Estratégia.</span>
            <span className="text-gradient">Marketing.</span>
            <span className="mt-1 block text-text-primary">Tecnologia.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-text-secondary md:text-xl"
          >
            Unimos marketing, desenvolvimento e produtos digitais para ajudar negócios a escalar.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <Magnetic>
              <Button href="#contato" size="lg">
                Fale com a gente
                <ArrowRight className="size-4" />
              </Button>
            </Magnetic>
            <Button href="#produtos" variant="secondary" size="lg">
              <Play className="size-4 fill-current" />
              Ver produtos
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative mx-auto hidden w-full max-w-md lg:block"
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative aspect-square">
            <div className="absolute inset-8 rounded-[2rem] border border-border-subtle bg-bg-elevated/40 backdrop-blur-md" />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.img
                src={logoMark}
                alt="Growee Up"
                className="relative z-10 h-48 w-48 object-contain drop-shadow-[0_20px_60px_rgba(0,100,255,0.45)]"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
            <motion.div
              className="absolute top-10 right-4 rounded-2xl border border-border-subtle bg-bg-base/80 px-4 py-3 backdrop-blur-md"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <p className="caption-mono text-accent-glow">Estratégia</p>
            </motion.div>
            <motion.div
              className="absolute bottom-12 left-2 rounded-2xl border border-border-subtle bg-bg-base/80 px-4 py-3 backdrop-blur-md"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
            >
              <p className="caption-mono text-accent-primary">Crescimento</p>
            </motion.div>
            <div
              className="absolute inset-16 -z-10 rounded-full opacity-70 blur-3xl"
              style={{
                background: 'radial-gradient(circle, rgba(0,100,255,0.45), transparent 70%)',
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
