import type { ReactNode } from 'react'

export function Badge({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`caption-mono inline-flex items-center gap-2 rounded-full border border-border-subtle bg-bg-elevated/80 px-3 py-1.5 text-accent-glow ${className}`}
    >
      <span className="size-1.5 rounded-full bg-accent-primary shadow-[0_0_8px_var(--brand-600)]" aria-hidden />
      {children}
    </span>
  )
}
