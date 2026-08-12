import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type Props = {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}: Props) {
  const alignClass = align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start'

  return (
    <motion.div
      className={`flex max-w-2xl flex-col gap-4 ${alignClass} ${className}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {eyebrow ? <span className="caption-mono text-accent-primary">{eyebrow}</span> : null}
      <h2 className="font-display text-[2.25rem] leading-[1.1] font-semibold tracking-tight text-text-primary md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-relaxed text-text-secondary md:text-lg">{description}</p>
      ) : null}
    </motion.div>
  )
}
