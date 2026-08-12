import { useEffect, useState, type ReactNode } from 'react'
import { motion } from 'framer-motion'

export type LegalSection = {
  id: string
  title: string
  content: ReactNode
}

type Props = {
  eyebrow: string
  title: string
  updatedAt: string
  intro: string
  sections: LegalSection[]
}

export function LegalLayout({ eyebrow, title, updatedAt, intro, sections }: Props) {
  const [active, setActive] = useState(sections[0]?.id)

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    sections.forEach((section) => {
      const el = document.getElementById(section.id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(section.id)
        },
        { rootMargin: '-30% 0px -55% 0px', threshold: 0 },
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [sections])

  return (
    <div className="pb-24">
      <section className="relative overflow-hidden border-b border-border-subtle pt-16 pb-14">
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 20% 0%, rgba(59,130,246,0.25), transparent)',
          }}
        />
        <div className="container-site relative">
          <motion.p
            className="caption-mono text-accent-primary"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {eyebrow}
          </motion.p>
          <motion.h1
            className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight md:text-5xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
          >
            {title}
          </motion.h1>
          <p className="mt-4 text-sm text-text-secondary">Atualizado em {updatedAt}</p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-secondary">{intro}</p>
        </div>
      </section>

      <div className="container-site mt-12 grid gap-12 lg:grid-cols-[240px_minmax(0,680px)] lg:justify-between">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <p className="caption-mono mb-4 text-text-secondary">Sumário</p>
          <nav className="flex flex-row gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-1 lg:overflow-visible lg:pb-0">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`whitespace-nowrap rounded-xl px-3 py-2 text-sm transition ${
                  active === s.id
                    ? 'bg-bg-elevated text-text-primary'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {s.title}
              </a>
            ))}
          </nav>
        </aside>

        <article className="space-y-12">
          {sections.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-28">
              <h2 className="font-display text-2xl font-semibold text-text-primary">{s.title}</h2>
              <div className="prose-legal mt-4 space-y-4 text-[1.05rem] leading-relaxed text-text-secondary">
                {s.content}
              </div>
            </section>
          ))}
          <p className="rounded-2xl border border-border-subtle bg-bg-surface/60 p-5 text-sm text-text-secondary">
            Texto placeholder para fins de estrutura do site. Deve ser revisado e validado por
            assessoria jurídica antes de uso em produção.
          </p>
        </article>
      </div>
    </div>
  )
}
