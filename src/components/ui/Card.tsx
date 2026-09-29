import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className = '', hover = true }: Props) {
  return (
    <motion.div
      className={`group relative overflow-hidden rounded-[var(--radius-card)] border border-border bg-surface p-6 shadow-sm ${className}`}
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ type: 'spring', stiffness: 320, damping: 24 }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(600px circle at var(--mx, 50%) var(--my, 0%), rgba(0,100,255,0.12), transparent 40%)',
        }}
        aria-hidden
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}
