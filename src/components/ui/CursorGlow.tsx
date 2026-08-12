import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function CursorGlow() {
  const reduced = useReducedMotion()
  const [enabled, setEnabled] = useState(false)
  const x = useMotionValue(-200)
  const y = useMotionValue(-200)
  const sx = useSpring(x, { stiffness: 120, damping: 28 })
  const sy = useSpring(y, { stiffness: 120, damping: 28 })

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    setEnabled(fine && !reduced)
    if (!fine || reduced) return

    const onMove = (e: PointerEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [reduced, x, y])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-30 hidden size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 mix-blend-screen md:block"
      style={{
        x: sx,
        y: sy,
        background:
          'radial-gradient(circle, rgba(0,100,255,0.22) 0%, rgba(194,217,252,0.08) 35%, transparent 70%)',
      }}
    />
  )
}
