import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { label: 'Product', href: '/product' },
  { label: 'For Sellers', href: '/for-sellers' },
  { label: 'For Runners', href: '/for-runners' },
  { label: 'About', href: '/about' },
]

export function Navbar() {
  const location = useLocation()
  const [open, setOpen] = useState(false)

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
          <a
            href="#download"
            className="bg-primary-container text-on-primary-container px-6 py-2.5 rounded-xl font-bold hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg shadow-primary-container/20"
          >
            Get the App
          </a>
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
