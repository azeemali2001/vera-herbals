import { motion } from 'framer-motion'
import type { ReactNode, ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  className?: string
  disabled?: boolean
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  isLoading,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-dark hover:shadow-lg',
    secondary: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    ghost: 'text-primary hover:bg-primary/10'
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="mr-2">
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        </span>
      ) : null}
      {children}
    </motion.button>
  )
}

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  dark?: boolean
}

export function Section({ children, className = '', id, dark = false }: SectionProps) {
  return (
    <section id={id} className={`py-20 md:py-28 px-6 ${dark ? 'bg-primary text-white' : ''} ${className}`}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  )
}

interface ContainerProps {
  children: ReactNode
  className?: string
}

export function Container({ children, className = '' }: ContainerProps) {
  return <div className={`max-w-7xl mx-auto px-6 ${className}`}>{children}</div>
}

interface HeadingProps {
  children: ReactNode
  level?: 1 | 2 | 3 | 4 | 5 | 6
  className?: string
}

const headingTags = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
  4: 'h4',
  5: 'h5',
  6: 'h6',
} as const

export function Heading({ children, level = 2, className = '' }: HeadingProps) {
  const Tag = headingTags[level]
  const baseStyles = 'font-heading'
  
  const sizes = {
    1: 'text-4xl md:text-6xl',
    2: 'text-3xl md:text-4xl lg:text-5xl',
    3: 'text-2xl md:text-3xl',
    4: 'text-xl md:text-2xl',
    5: 'text-lg md:text-xl',
    6: 'text-base md:text-lg'
  }
  
  return <Tag className={`${baseStyles} ${sizes[level]} font-bold ${className}`}>{children}</Tag>
}

interface TextProps {
  children: ReactNode
  variant?: 'body' | 'small' | 'large'
  className?: string
}

export function Text({ children, variant = 'body', className = '' }: TextProps) {
  const sizes = {
    body: 'text-base',
    small: 'text-sm',
    large: 'text-lg'
  }
  
  return <p className={`${sizes[variant]} text-text-medium ${className}`}>{children}</p>
}

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'green' | 'gold'
  className?: string
}

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const variants = {
    default: 'bg-secondary text-primary',
    green: 'bg-primary/10 text-primary',
    gold: 'bg-accent text-white'
  }
  
  return (
    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  )
}

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

export function Card({ children, className = '', hover = true, onMouseEnter, onMouseLeave }: CardProps) {
  return (
    <div 
      className={`bg-white rounded-2xl shadow-lg overflow-hidden ${hover ? 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1' : ''} ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  )
}

interface ImageProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
}

export function Image({ src, alt, className = '', priority = false }: ImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={`object-cover ${className}`}
      loading={priority ? 'eager' : 'lazy'}
    />
  )
}