import { Link, Outlet } from 'react-router-dom'
import { CONTACT_EMAIL } from '../constants/downloads'

/** Used for the legal pages while the site is in coming-soon mode: no product navigation. */
export function MinimalLayout() {
  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-page/85 backdrop-blur-md border-b border-hairline">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="font-display text-[1.45rem] font-extrabold tracking-[-0.03em] text-forest" aria-label="Sellai home">Sellai</Link>
          <span className="eyebrow">Coming soon</span>
        </div>
      </header>
      <Outlet />
      <footer className="bg-dark text-white/50 text-xs">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>&copy; {new Date().getFullYear()} Sellai (Pvt) Ltd</span>
          <div className="flex gap-5">
            <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white transition-colors">{CONTACT_EMAIL}</a>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </footer>
    </>
  )
}
