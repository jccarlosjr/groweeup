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
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-xl font-semibold transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-600 disabled:opacity-60 disabled:cursor-not-allowed'

const sizes: Record<Size, string> = {
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
}

const variants: Record<Variant, string> = {
  primary: 'bg-brand-600 text-white hover:bg-brand-900',
  secondary:
    'border border-border bg-surface text-ink hover:border-brand-600 hover:bg-canvas',
  ghost: 'text-text-secondary hover:text-text-primary',
}

const motionProps = {
  whileHover: { y: -2 },
  whileTap: { scale: 0.98 },
  transition: { type: 'spring' as const, stiffness: 400, damping: 22 },
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
  const wide = className.includes('w-full')
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`
  const wrap = wide ? 'flex w-full' : 'inline-flex'

  if ('to' in props && props.to) {
    return (
      <motion.div {...motionProps} className={wrap}>
        <Link to={props.to} onClick={onClick} className={classes}>
          {children}
        </Link>
      </motion.div>
    )
  }

  if ('href' in props && props.href) {
    return (
      <motion.div {...motionProps} className={wrap}>
        <a href={props.href} onClick={onClick} className={classes}>
          {children}
        </a>
      </motion.div>
    )
  }

  return (
    <motion.button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...motionProps}
    >
      {children}
    </motion.button>
  )
}
