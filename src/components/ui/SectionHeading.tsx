import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { reveal } from '@/lib/motion'

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
    <motion.div className={`flex max-w-2xl flex-col gap-3 ${alignClass} ${className}`} {...reveal()}>
      {eyebrow ? <p className="caption-mono text-brand-900">{eyebrow}</p> : null}
      <h2 className="font-display text-3xl leading-tight font-semibold tracking-tight text-text-primary md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-[65ch] text-base leading-relaxed text-text-secondary">{description}</p>
      ) : null}
    </motion.div>
  )
}
