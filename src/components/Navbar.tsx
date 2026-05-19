import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ANDROID_APK_URL, WINDOWS_MSI_URL } from '../constants/downloads'

const links = [
  { label: 'Product', href: '/product' },
  { label: 'For Sellers', href: '/for-sellers' },
  { label: 'For Runners', href: '/for-runners' },
  { label: 'On Desktop', href: '/desktop' },
  { label: 'About', href: '/about' },
]

export function Navbar() {
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const [getOpen, setGetOpen] = useState(false)
  const getRef = useRef<HTMLDivElement | null>(null)

  // Close "Get Sellai" dropdown on outside click / Esc
  useEffect(() => {
    if (!getOpen) return
    const onClick = (e: MouseEvent) => {
      if (getRef.current && !getRef.current.contains(e.target as Node)) setGetOpen(false)
    }
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setGetOpen(false) }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => { document.removeEventListener('mousedown', onClick); document.removeEventListener('keydown', onKey) }
  }, [getOpen])

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/55 backdrop-blur-xl shadow-sm">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 py-4">
        <div className="flex items-center gap-12">
          <Link to="/" className="text-2xl font-bold tracking-tighter text-emerald-600 font-[Manrope]">Sellai</Link>
          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <Link
                key={l.label}
                to={l.href}
                className={`tracking-widest text-xs font-semibold uppercase hover:scale-105 transition-transform duration-200 ${
                  location.pathname === l.href
                    ? 'text-emerald-600 font-semibold border-b-2 border-emerald-500'
                    : 'text-slate-600 hover:text-emerald-500'
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="hidden md:inline-block text-slate-600 hover:text-emerald-500 tracking-widest text-xs font-semibold uppercase transition-colors"
          >
            Contact
          </Link>

          {/* Platform-agnostic "Get Sellai" with dropdown */}
          <div className="relative" ref={getRef}>
            <button
              onClick={() => setGetOpen(o => !o)}
              aria-haspopup="menu"
              aria-expanded={getOpen}
              className="bg-primary-container text-on-primary-container px-5 py-2.5 rounded-xl font-bold hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg shadow-primary-container/20 flex items-center gap-1.5"
            >
              Get Sellai
              <span className={`material-symbols-outlined text-base transition-transform ${getOpen ? 'rotate-180' : ''}`}>expand_more</span>
            </button>
            {getOpen && (
              <div role="menu" className="absolute right-0 top-full mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
                <div className="px-4 pt-3 pb-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">On your phone <span className="text-slate-300 font-medium normal-case tracking-normal">— for everyone</span></div>
                <a
                  href={ANDROID_APK_URL}
                  onClick={() => setGetOpen(false)}
                  className="flex items-center gap-3 px-4 py-2.5 hover:bg-emerald-50 transition-colors"
                >
                  <span className="material-symbols-outlined text-slate-700">android</span>
                  <div>
                    <div className="text-sm font-bold text-slate-900">Android</div>
                    <div className="text-[10px] text-slate-500">Direct .apk download</div>
                  </div>
                </a>
                <a href="#download" onClick={() => setGetOpen(false)} className="flex items-center gap-3 px-4 py-2.5 hover:bg-emerald-50 transition-colors">
                  <span className="material-symbols-outlined text-slate-700">phone_iphone</span>
                  <div>
                    <div className="text-sm font-bold text-slate-900">iPhone</div>
                    <div className="text-[10px] text-slate-500">App Store</div>
                  </div>
                </a>
                <div className="border-t border-slate-100 my-1" />
                <div className="px-4 pt-2 pb-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">On your computer <span className="text-slate-300 font-medium normal-case tracking-normal">— for sellers</span></div>
                <Link to="/desktop" onClick={() => setGetOpen(false)} className="flex items-center gap-3 px-4 py-2.5 hover:bg-emerald-50 transition-colors">
                  <svg className="w-5 h-5 text-slate-700" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M16.365 1.43c0 1.14-.46 2.226-1.21 3.013-.81.838-2.13 1.483-3.213 1.398-.13-1.116.42-2.27 1.166-3.046C13.94 1.926 15.27 1.34 16.365 1.43zm3.96 17.058c-.62 1.39-.92 2.01-1.71 3.24-1.1 1.7-2.66 3.81-4.59 3.83-1.71.02-2.15-1.12-4.47-1.1-2.32.01-2.81 1.13-4.52 1.11-1.93-.02-3.4-1.95-4.5-3.65-3.07-4.74-3.39-10.31-1.5-13.27 1.34-2.11 3.46-3.34 5.45-3.34 2.04 0 3.32 1.12 5.01 1.12 1.64 0 2.64-1.12 5-1.12 1.78 0 3.66.97 5 2.65-4.39 2.4-3.68 8.67.83 10.53z" />
                  </svg>
                  <div>
                    <div className="text-sm font-bold text-slate-900">Mac</div>
                    <div className="text-[10px] text-slate-500">macOS native app</div>
                  </div>
                </Link>
                <a
                  href={WINDOWS_MSI_URL}
                  onClick={() => setGetOpen(false)}
                  className="flex items-center gap-3 px-4 py-2.5 hover:bg-emerald-50 transition-colors"
                >
                  <svg className="w-5 h-5 text-slate-700" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M0 3.449L9.75 2.1v9.451H0V3.449zm0 17.052V12h9.75v9.602L0 20.501zm10.949-19.06L24 0v11.4H10.949V1.441zM10.949 24V12.6H24V24l-13.051-1.06z" />
                  </svg>
                  <div>
                    <div className="text-sm font-bold text-slate-900">Windows</div>
                    <div className="text-[10px] text-slate-500">Direct .msi download</div>
                  </div>
                </a>
              </div>
            )}
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2">
            <span className="material-symbols-outlined">{open ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-white/90 backdrop-blur-xl px-8 pb-6 space-y-4">
          {links.map(l => (
            <Link
              key={l.label}
              to={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-semibold uppercase tracking-widest text-slate-600 hover:text-emerald-500"
            >
              {l.label}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} className="block text-sm font-semibold uppercase tracking-widest text-slate-600 hover:text-emerald-500">
            Contact
          </Link>
        </div>
      )}
    </nav>
  )
}
