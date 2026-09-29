import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { reveal } from '@/lib/motion'

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
      'Implementamos as estratégias definidas com organização, clareza e foco total nos seus objetivos.',
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
    <section ref={sectionRef} className="scroll-mt-20 py-20 md:py-24" id="processo">
      <div className="container-site">
        <SectionHeading
          eyebrow="Como trabalhamos"
          title="Um processo feito para aprender rápido"
          description="Quatro etapas que conectam estratégia e operação, com decisões baseadas em dados."
        />

        <div className="relative mt-16 grid gap-8 md:grid-cols-[48px_1fr] md:gap-12">
          <div className="relative hidden md:block">
            <div className="absolute top-3 bottom-3 left-1/2 w-px -translate-x-1/2 bg-border-subtle" />
            <div
              ref={lineRef}
              className="absolute top-3 bottom-3 left-1/2 w-px origin-top -translate-x-1/2 bg-gradient-to-b from-accent-primary to-accent-glow"
              style={reduced ? undefined : { transform: 'scaleY(0)' }}
            />
          </div>

          <ol className="grid gap-5 md:grid-cols-2">
            {steps.map((step, i) => (
              <motion.li
                key={step.n}
                className="rounded-[var(--radius-card)] border border-border bg-surface p-6"
                {...reveal(i * 0.08)}
              >
                <span className="caption-mono text-brand-600">{step.n}</span>
                <h3 className="mt-3 font-display text-2xl font-semibold text-text-primary">
                  {step.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-text-secondary">{step.description}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
