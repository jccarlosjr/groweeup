import type { ReactNode } from 'react'

export function Badge({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`caption-mono inline-flex items-center rounded-full border border-border bg-surface px-3 py-1.5 text-brand-900 ${className}`}
    >
      {children}
    </span>
  )
}
