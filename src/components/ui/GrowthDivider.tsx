import { GrowthLine } from '@/components/ui/GrowthLine'

export function GrowthDivider() {
  return (
    <div className="relative h-20 overflow-hidden opacity-50 md:h-28" aria-hidden>
      <GrowthLine className="top-0" opacity={0.55} />
    </div>
  )
}
