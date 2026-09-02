import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ChevronDown, Menu, X, Smartphone } from 'lucide-react'
import { ANDROID_APK_URL, WINDOWS_MSI_URL, IOS_WAITLIST_MAILTO, MAC_WAITLIST_MAILTO } from '../constants/downloads'
import { BrandIcon } from './ui'
import { EASE } from './ease'

const links = [
  { label: 'How it works', href: '/product' },
  { label: 'For sellers', href: '/for-sellers' },
  { label: 'For runners', href: '/for-runners' },
  { label: 'Desktop app', href: '/desktop' },
  { label: 'About', href: '/about' },
]

function MenuRow({ href, to, icon, title, sub, soon = false, onPick }: { href?: string; to?: string; icon: React.ReactNode; title: string; sub: string; soon?: boolean; onPick: () => void }) {
  const cls = 'flex items-center gap-3 px-4 py-2.5 hover:bg-mint-50 transition-colors'
  const body = (
    <>
      <span className="w-8 h-8 rounded-full bg-page flex items-center justify-center text-ink shrink-0">{icon}</span>
      <span className="min-w-0">
        <span className="flex items-center gap-2 text-sm font-bold text-ink">
          {title}
          {soon && <span className="text-[10px] font-bold uppercase tracking-[0.06em] text-warning-text bg-warning-bg px-1.5 py-0.5 rounded">Coming soon</span>}
        </span>
        <span className="block text-xs text-muted">{sub}</span>
      </span>
    </>
  )
  if (to) return <Link to={to} onClick={onPick} className={cls} role="menuitem">{body}</Link>
  return <a href={href} onClick={onPick} className={cls} role="menuitem">{body}</a>
}

export function Navbar() {
  const location = useLocation()
  const reduce = useReducedMotion()
  const [open, setOpen] = useState(false)
  const [getOpen, setGetOpen] = useState(false)
  const getRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!getOpen) return
    const onClick = (e: MouseEvent) => { if (getRef.current && !getRef.current.contains(e.target as Node)) setGetOpen(false) }
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setGetOpen(false) }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => { document.removeEventListener('mousedown', onClick); document.removeEventListener('keydown', onKey) }
  }, [getOpen])

  const close = () => setGetOpen(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-page/85 backdrop-blur-md border-b border-hairline">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between" aria-label="Main">
        <div className="flex items-center gap-10">
          <Link to="/" className="font-display text-[1.45rem] font-extrabold tracking-[-0.03em] text-forest" aria-label="Sellai home">Sellai</Link>
          <div className="hidden md:flex items-center gap-7">
            {links.map((l) => {
              const active = location.pathname === l.href
              return (
                <Link
                  key={l.href}
                  to={l.href}
                  aria-current={active ? 'page' : undefined}
                  className={`relative text-[0.9rem] font-semibold transition-colors py-1 ${active ? 'text-forest' : 'text-muted hover:text-ink'}`}
                >
                  {l.label}
                  {active && <motion.span layoutId="nav-underline" className="absolute left-0 right-0 -bottom-0.5 h-[2px] rounded-full bg-mint" />}
                </Link>
              )
            })}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link to="/contact" className="hidden md:inline-block text-[0.9rem] font-semibold text-muted hover:text-ink transition-colors mr-2">Contact</Link>

          <div className="relative" ref={getRef}>
            <button
              onClick={() => setGetOpen((o) => !o)}
              aria-haspopup="menu"
              aria-expanded={getOpen}
              className="h-10 px-4 rounded-[12px] bg-mint text-ink font-display font-bold text-[0.9rem] flex items-center gap-1.5 hover:bg-mint-edge transition-colors"
            >
              Get Sellai
              <ChevronDown size={16} strokeWidth={2.5} className={`transition-transform ${getOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
            </button>
            <AnimatePresence>
              {getOpen && (
                <motion.div
                  role="menu"
                  initial={reduce ? false : { opacity: 0, y: -6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -4, scale: 0.98, transition: { duration: 0.15 } }}
                  transition={{ duration: 0.22, ease: EASE }}
                  className="absolute right-0 top-full mt-2 w-72 bg-surface rounded-2xl shadow-[var(--shadow-lift)] border border-hairline overflow-hidden origin-top-right"
                >
                  <div className="px-4 pt-3 pb-1 eyebrow">On your phone <span className="text-faint font-medium normal-case tracking-normal">· everyone</span></div>
                  <MenuRow href={ANDROID_APK_URL} icon={<BrandIcon name="android" size={16} />} title="Android" sub="Direct .apk download" onPick={close} />
                  <MenuRow href={IOS_WAITLIST_MAILTO} icon={<Smartphone size={16} aria-hidden="true" />} title="iPhone" sub="Tell me when it's ready" soon onPick={close} />
                  <div className="border-t border-hairline my-1" />
                  <div className="px-4 pt-2 pb-1 eyebrow">On your computer <span className="text-faint font-medium normal-case tracking-normal">· sellers</span></div>
                  <MenuRow href={WINDOWS_MSI_URL} icon={<BrandIcon name="windows" size={15} />} title="Windows" sub="Direct .msi download" onPick={close} />
                  <MenuRow href={MAC_WAITLIST_MAILTO} icon={<BrandIcon name="apple" size={16} />} title="Mac" sub="Tell me when it's ready" soon onPick={close} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden w-10 h-10 flex items-center justify-center rounded-[12px] text-ink" aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'}>
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="md:hidden overflow-hidden border-t border-hairline bg-page"
          >
            <div className="px-6 py-4 flex flex-col">
              {[...links, { label: 'Contact', href: '/contact' }].map((l) => (
                <Link key={l.href} to={l.href} onClick={() => setOpen(false)} className={`py-3 text-base font-semibold border-b border-hairline last:border-b-0 ${location.pathname === l.href ? 'text-forest' : 'text-ink'}`}>
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
