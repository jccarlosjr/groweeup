import { Link } from 'react-router-dom'
import wordmark from '@/assets/name.png'

type Props = {
  className?: string
  showWordmark?: boolean
  size?: 'sm' | 'md' | 'lg'
}

const wordSizes = {
  sm: 'h-5',
  md: 'h-6',
  lg: 'h-8',
}

export function Logo({ className = '', showWordmark = true, size = 'md' }: Props) {
  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-3 transition-opacity hover:opacity-90 ${className}`}
      aria-label="Growee Up — página inicial"
    >
      {showWordmark ? (
        <img
          src={wordmark}
          alt="Growee Up"
          className={`${wordSizes[size]} w-auto object-contain`}
          height={size === 'lg' ? 32 : size === 'md' ? 24 : 20}
        />
      ) : null}
    </Link>
  )
}
