import { useEffect, useRef } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

type Props = {
  className?: string
  interactive?: boolean
  opacity?: number
}

export function GrowthLine({ className = '', interactive = false, opacity = 0.7 }: Props) {
  const pathRef = useRef<SVGPathElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    const path = pathRef.current
    if (!path || reduced) return

    const length = path.getTotalLength()
    path.style.strokeDasharray = `${length}`
    path.style.strokeDashoffset = `${length}`
    path.getBoundingClientRect()
    path.style.transition = 'stroke-dashoffset 1.8s cubic-bezier(0.22, 1, 0.36, 1)'
    path.style.strokeDashoffset = '0'
  }, [reduced])

  useEffect(() => {
    if (!interactive || reduced) return
    const svg = svgRef.current
    if (!svg) return

    const onMove = (e: PointerEvent) => {
      const rect = svg.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 24
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 12
      svg.style.transform = `translate3d(${x}px, ${y}px, 0)`
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [interactive, reduced])

  return (
    <svg
      ref={svgRef}
      className={`pointer-events-none absolute inset-0 h-full w-full transition-transform duration-500 ease-out ${className}`}
      viewBox="0 0 1200 420"
      fill="none"
      aria-hidden
      style={{ opacity }}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="growthGrad" x1="0" y1="420" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0B3D89" stopOpacity="0.15" />
          <stop offset="0.45" stopColor="#0064FF" />
          <stop offset="1" stopColor="#C2D9FC" />
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        d="M40 340 C180 330, 220 280, 300 250 C400 210, 420 300, 520 240 C620 180, 660 120, 760 140 C860 160, 900 90, 1000 70 C1060 58, 1120 40, 1160 30"
        stroke="url(#growthGrad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.25"
      />
      <path
        ref={pathRef}
        d="M40 340 C180 330, 220 280, 300 250 C400 210, 420 300, 520 240 C620 180, 660 120, 760 140 C860 160, 900 90, 1000 70 C1060 58, 1120 40, 1160 30"
        stroke="url(#growthGrad)"
        strokeWidth="3"
        strokeLinecap="round"
        filter="url(#glow)"
      />
      <circle cx="1160" cy="30" r="6" fill="#C2D9FC" className="animate-pulse" />
      <circle cx="1160" cy="30" r="14" fill="#C2D9FC" opacity="0.2" />
    </svg>
  )
}
