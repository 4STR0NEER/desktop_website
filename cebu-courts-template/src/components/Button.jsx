import { Link } from 'react-router-dom'
import { useShowcase } from '../context/ShowcaseContext.jsx'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[0.95rem] font-semibold leading-none select-none disabled:opacity-40 disabled:cursor-not-allowed'

const variants = {
  primary: 'bg-primary text-on-primary hover:brightness-110',
  ghost: 'border border-ink/30 text-ink hover:bg-ink/8',
  inverse: 'bg-on-deep text-deep hover:opacity-90',
  outlineInverse: 'border border-on-deep/40 text-on-deep hover:bg-on-deep/10',
}

export default function Button({ to, href, variant = 'primary', className = '', children, ...rest }) {
  const { tier } = useShowcase()
  // Intermediate: buttons lift and glow on hover. Basic stays static.
  const fx =
    tier === 'intermediate'
      ? `transition-[transform,box-shadow,filter,background-color,opacity] duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 ${
          variant === 'primary' ? 'hover:shadow-[0_14px_30px_-12px_var(--c-primary)]' : 'hover:shadow-[0_14px_30px_-14px_rgb(0_0_0/0.45)]'
        }`
      : ''
  const cls = `${base} ${variants[variant]} ${fx} ${className}`
  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <button type="button" className={cls} {...rest}>
      {children}
    </button>
  )
}
