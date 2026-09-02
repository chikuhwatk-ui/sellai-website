import type { ComponentType, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import type { LucideProps } from 'lucide-react'

/* ---------- Layout ---------- */

export function Container({ children, className = '', narrow = false }: { children: ReactNode; className?: string; narrow?: boolean }) {
  return <div className={`${narrow ? 'max-w-4xl' : 'max-w-6xl'} mx-auto px-6 ${className}`}>{children}</div>
}

type Tone = 'page' | 'tint' | 'dark' | 'forest' | 'mint'
const sectionTone: Record<Tone, string> = {
  page: '',
  tint: 'bg-mint-50',
  dark: 'bg-dark text-white',
  forest: 'bg-forest text-white',
  mint: 'bg-mint text-ink',
}

export function Section({ children, tone = 'page', id, className = '' }: { children: ReactNode; tone?: Tone; id?: string; className?: string }) {
  return (
    <section id={id} className={`py-20 md:py-28 ${sectionTone[tone]} ${className}`}>
      {children}
    </section>
  )
}

export function SectionHeader({
  eyebrow, title, lede, align = 'center', onDark = false, eyebrowClass = '',
}: { eyebrow?: string; title: ReactNode; lede?: ReactNode; align?: 'center' | 'left'; onDark?: boolean; eyebrowClass?: string }) {
  const center = align === 'center'
  return (
    <div className={`${center ? 'text-center mx-auto' : ''} max-w-2xl mb-12 md:mb-16`}>
      {eyebrow && <div className={`eyebrow ${onDark ? 'eyebrow-on-dark' : ''} ${eyebrowClass} mb-3`}>{eyebrow}</div>}
      <h2 className={`text-3xl md:text-[2.6rem] md:leading-[1.1] font-extrabold ${onDark ? 'text-white' : 'text-ink'}`}>{title}</h2>
      {lede && <p className={`mt-4 text-lg leading-relaxed ${onDark ? 'text-white/70' : 'text-muted'}`}>{lede}</p>}
    </div>
  )
}

/* ---------- Buttons ---------- */

type ButtonVariant = 'forest' | 'mint' | 'ghost' | 'white' | 'ghost-dark' | 'link'
const buttonStyles: Record<ButtonVariant, string> = {
  forest: 'bg-forest text-white hover:bg-forest-light shadow-[0_8px_20px_-10px_rgba(11,63,46,0.6)]',
  mint: 'bg-mint text-ink hover:bg-mint-edge shadow-[0_8px_20px_-10px_rgba(30,194,122,0.6)]',
  ghost: 'border-[1.5px] border-forest text-forest hover:bg-forest/5',
  white: 'bg-white text-forest hover:bg-mint-50',
  'ghost-dark': 'border-[1.5px] border-white/30 text-white hover:bg-white/10',
  link: 'text-primary-text hover:underline underline-offset-4 px-0',
}

export function Button({
  children, to, href, variant = 'forest', size = 'md', icon: Icon, className = '', onClick, type, download, ariaLabel,
}: {
  children: ReactNode; to?: string; href?: string; variant?: ButtonVariant; size?: 'md' | 'lg';
  icon?: ComponentType<LucideProps>; className?: string; onClick?: () => void; type?: 'button' | 'submit'; download?: boolean; ariaLabel?: string;
}) {
  const base = `inline-flex items-center justify-center gap-2 font-display font-bold rounded-[12px] transition-[background-color,transform,box-shadow] duration-200 active:translate-y-px whitespace-nowrap ${
    variant === 'link' ? 'text-base' : size === 'lg' ? 'h-14 px-7 text-[1.05rem]' : 'h-12 px-5 text-[0.95rem]'
  } ${buttonStyles[variant]} ${className}`
  const inner = (
    <>
      {Icon && <Icon size={size === 'lg' ? 20 : 18} strokeWidth={2.25} aria-hidden="true" />}
      {children}
    </>
  )
  if (to) return <Link to={to} className={base} onClick={onClick} aria-label={ariaLabel}>{inner}</Link>
  if (href) return <a href={href} className={base} onClick={onClick} download={download} aria-label={ariaLabel}>{inner}</a>
  return <button type={type ?? 'button'} className={base} onClick={onClick} aria-label={ariaLabel}>{inner}</button>
}

/* ---------- Surfaces ---------- */

export function Card({ children, className = '', lift = false, onDark = false }: { children: ReactNode; className?: string; lift?: boolean; onDark?: boolean }) {
  return (
    <div className={`rounded-[20px] ${onDark ? 'bg-dark-raised border border-dark-hairline' : 'bg-surface border border-hairline'} ${lift ? 'shadow-[var(--shadow-lift)]' : 'shadow-[var(--shadow-card)]'} ${className}`}>
      {children}
    </div>
  )
}

type DiscTone = 'mint' | 'info' | 'warning' | 'error' | 'dark' | 'forest'
const discTone: Record<DiscTone, string> = {
  mint: 'bg-mint-100 text-primary-text',
  info: 'bg-info-bg text-info-text',
  warning: 'bg-warning-bg text-warning-text',
  error: 'bg-error-bg text-error-text',
  dark: 'bg-white/10 text-mint-dark',
  forest: 'bg-forest text-white',
}

export function IconDisc({ icon: Icon, tone = 'mint', size = 'md', className = '' }: { icon: ComponentType<LucideProps>; tone?: DiscTone; size?: 'sm' | 'md' | 'lg'; className?: string }) {
  const dim = size === 'lg' ? 'w-14 h-14' : size === 'sm' ? 'w-9 h-9' : 'w-11 h-11'
  const px = size === 'lg' ? 26 : size === 'sm' ? 18 : 22
  return (
    <div className={`${dim} rounded-full flex items-center justify-center shrink-0 ${discTone[tone]} ${className}`}>
      <Icon size={px} strokeWidth={2} aria-hidden="true" />
    </div>
  )
}

/** Hairline-divided feature list: icon disc, title, body. Replaces "one card per bullet". */
export function FeatureList({ items, tone = 'mint', onDark = false, columns = 1 }: {
  items: { icon: ComponentType<LucideProps>; title: string; body: ReactNode }[];
  tone?: DiscTone; onDark?: boolean; columns?: 1 | 2;
}) {
  return (
    <ul className={`list-none m-0 p-0 ${columns === 2 ? 'grid md:grid-cols-2 gap-x-12' : ''}`}>
      {items.map((it) => (
        <li key={it.title} className={`flex gap-4 py-5 border-t ${onDark ? 'border-white/10' : 'border-hairline'} first:border-t-0 md:[&:nth-child(2)]:border-t-0`}>
          <IconDisc icon={it.icon} tone={onDark ? 'dark' : tone} />
          <div>
            <h3 className={`text-[1.05rem] font-bold mb-1 ${onDark ? 'text-white' : 'text-ink'}`}>{it.title}</h3>
            <p className={`text-[0.95rem] leading-relaxed ${onDark ? 'text-white/65' : 'text-muted'}`}>{it.body}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

export function Pill({ children, tone = 'mint', className = '' }: { children: ReactNode; tone?: DiscTone; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 text-[0.7rem] font-bold uppercase tracking-[0.08em] px-2.5 py-1 rounded-full ${discTone[tone]} ${className}`}>
      {children}
    </span>
  )
}

/* ---------- Device frame ---------- */

export function PhoneFrame({ children, className = '', label }: { children: ReactNode; className?: string; label?: string }) {
  return (
    <figure className={`m-0 ${className}`}>
      <div className="relative w-[288px] rounded-[40px] bg-dark p-[10px] shadow-[var(--shadow-phone)]" aria-hidden={label ? undefined : true}>
        <div className="absolute left-1/2 -translate-x-1/2 top-[10px] w-[88px] h-[24px] rounded-b-[14px] bg-dark z-10" />
        <div className="rounded-[31px] bg-page overflow-hidden h-[600px] relative">
          {children}
        </div>
      </div>
      {label && <figcaption className="sr-only">{label}</figcaption>}
    </figure>
  )
}

/* ---------- Brand marks (lucide has no platform logos) ---------- */

export function BrandIcon({ name, size = 18, className = '' }: { name: 'android' | 'apple' | 'windows'; size?: number; className?: string }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'currentColor', className, 'aria-hidden': true as const }
  if (name === 'apple') return (
    <svg {...common}><path d="M16.365 1.43c0 1.14-.46 2.226-1.21 3.013-.81.838-2.13 1.483-3.213 1.398-.13-1.116.42-2.27 1.166-3.046C13.94 1.926 15.27 1.34 16.365 1.43zm3.96 17.058c-.62 1.39-.92 2.01-1.71 3.24-1.1 1.7-2.66 3.81-4.59 3.83-1.71.02-2.15-1.12-4.47-1.1-2.32.01-2.81 1.13-4.52 1.11-1.93-.02-3.4-1.95-4.5-3.65-3.07-4.74-3.39-10.31-1.5-13.27 1.34-2.11 3.46-3.34 5.45-3.34 2.04 0 3.32 1.12 5.01 1.12 1.64 0 2.64-1.12 5-1.12 1.78 0 3.66.97 5 2.65-4.39 2.4-3.68 8.67.83 10.53z" /></svg>
  )
  if (name === 'windows') return (
    <svg {...common}><path d="M0 3.449L9.75 2.1v9.451H0V3.449zm0 17.052V12h9.75v9.602L0 20.501zm10.949-19.06L24 0v11.4H10.949V1.441zM10.949 24V12.6H24V24l-13.051-1.06z" /></svg>
  )
  return (
    <svg {...common}><path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85a.637.637 0 0 0-.83.22l-1.88 3.24a11.43 11.43 0 0 0-8.94 0L5.65 5.67a.643.643 0 0 0-.87-.2c-.28.18-.37.54-.22.83L6.4 9.48A10.81 10.81 0 0 0 1 18h22a10.81 10.81 0 0 0-5.4-8.52zM7 15.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm10 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z" /></svg>
  )
}
