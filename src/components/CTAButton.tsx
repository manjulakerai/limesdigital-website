import { Link } from 'react-router-dom'

interface CTAButtonProps {
  children: React.ReactNode
  to?: string
  href?: string
  variant?: 'primary' | 'secondary'
  className?: string
}

export default function CTAButton({
  children,
  to,
  href,
  variant = 'primary',
  className = '',
}: CTAButtonProps) {
  const base =
    'inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200'
  const styles = {
    primary: 'bg-lime-600 text-white hover:bg-lime-700 shadow-sm hover:shadow-md',
    secondary:
      'bg-white text-lime-700 border-2 border-lime-600 hover:bg-lime-50',
  }

  const classes = `${base} ${styles[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  return <button className={classes}>{children}</button>
}
