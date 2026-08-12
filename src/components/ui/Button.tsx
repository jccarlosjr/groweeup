import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'md' | 'lg'

type BaseProps = {
  children: ReactNode
  variant?: Variant
  size?: Size
  className?: string
  disabled?: boolean
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

type Props =
  | (BaseProps & { to: string; href?: never })
  | (BaseProps & { href: string; to?: never })
  | (BaseProps & { to?: never; href?: never })

const base =
  'inline-flex items-center justify-center gap-2 rounded-2xl font-display font-semibold transition-shadow cursor-pointer focus-visible:outline-none disabled:opacity-60 disabled:cursor-not-allowed'

const sizes: Record<Size, string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
}

const variants: Record<Variant, string> = {
  primary:
    'bg-gradient-signature text-white shadow-[0_0_0_0_rgba(0,100,255,0)] hover:shadow-[0_8px_32px_rgba(0,100,255,0.35)]',
  secondary:
    'border border-border-subtle bg-bg-elevated/60 text-text-primary backdrop-blur-sm hover:border-accent-primary/50 hover:bg-bg-elevated',
  ghost: 'text-text-secondary hover:text-text-primary',
}

export function Button(props: Props) {
  const {
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    disabled,
    onClick,
    type = 'button',
  } = props
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`

  const motionProps = {
    whileHover: { y: -2 },
    whileTap: { scale: 0.98 },
    transition: { type: 'spring' as const, stiffness: 400, damping: 22 },
  }

  if ('to' in props && props.to) {
    return (
      <motion.div {...motionProps} className="inline-flex">
        <Link to={props.to} onClick={onClick} className={classes}>
          {children}
        </Link>
      </motion.div>
    )
  }

  if ('href' in props && props.href) {
    return (
      <motion.div {...motionProps} className="inline-flex">
        <a href={props.href} onClick={onClick} className={classes}>
          {children}
        </a>
      </motion.div>
    )
  }

  return (
    <motion.button type={type} className={classes} disabled={disabled} onClick={onClick} {...motionProps}>
      {children}
    </motion.button>
  )
}
