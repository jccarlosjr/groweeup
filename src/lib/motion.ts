import type { Transition } from 'framer-motion'

export const ease = [0.22, 1, 0.36, 1] as const

export function reveal(delay = 0): {
  initial: { opacity: number; y: number }
  whileInView: { opacity: number; y: number }
  viewport: { once: true; margin: string }
  transition: Transition
} {
  return {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { delay, duration: 0.55, ease },
  }
}
