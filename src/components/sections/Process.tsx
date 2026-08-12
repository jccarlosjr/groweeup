import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { useReducedMotion } from '@/hooks/useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    n: '01',
    title: 'Diagnóstico',
    description:
      'Entendemos sua empresa e mapeamos suas necessidades para traçar o melhor caminho.',
  },
  {
    n: '02',
    title: 'Estratégia',
    description:
      'Com base no diagnóstico, criamos uma estratégia personalizada com metas claras e um roadmap realista.',
  },
  {
    n: '03',
    title: 'Execução',
    description:
      'Implementamos as estratégias definidas com organização,  clareza e foco total nos seus objetivos.',
  },
  {
    n: '04',
    title: 'Otimização',
    description:
      'Monitoramos os resultados, identificamos oportunidades e ajustamos a estratégia continuamente. O crescimento é um sistema que nunca para.',
  },
]

export function Process() {
  const lineRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced || !lineRef.current || !sectionRef.current) return

    const tween = gsap.fromTo(
      lineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          end: 'bottom 70%',
          scrub: 0.6,
        },
      },
    )

    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [reduced])

  return (
    <section ref={sectionRef} className="relative py-20 md:py-28" id="processo">
      <div className="container-site">
        <SectionHeading
          eyebrow="Como trabalhamos"
          title={
            <>
              Um processo feito para <span className="text-gradient">aprender rápido</span>
            </>
          }
          description="Quatro etapas que conectam estratégia e operação — com feedback loops curtos e decisões baseadas em dados."
        />

        <div className="relative mt-16 grid gap-8 md:grid-cols-[48px_1fr] md:gap-12">
          <div className="relative hidden md:block">
            <div className="absolute top-3 bottom-3 left-1/2 w-px -translate-x-1/2 bg-border-subtle" />
            <div
              ref={lineRef}
              className="absolute top-3 bottom-3 left-1/2 w-px origin-top -translate-x-1/2 bg-gradient-to-b from-accent-primary to-accent-glow"
              style={{ transform: 'scaleY(0)' }}
            />
          </div>

          <ol className="grid gap-5 md:grid-cols-2">
            {steps.map((step, i) => (
              <motion.li
                key={step.n}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="relative rounded-[var(--radius-card)] border border-border-subtle bg-bg-surface/70 p-6 backdrop-blur-sm"
              >
                <span className="caption-mono text-accent-glow">{step.n}</span>
                <h3 className="mt-3 font-display text-2xl font-semibold text-text-primary">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary md:text-base">
                  {step.description}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
