import { Outlet, Link, useLocation } from 'react-router-dom'

const topLinks = [
  { label: 'Dashboard', href: '/buyer-dashboard' },
  { label: 'Leads', href: '/seller-feed' },
  { label: 'Tracking', href: '/runner-hub' },
  { label: 'Security', href: '/trust-center' },
]

const sideLinks = [
  { label: 'Buyer', icon: 'shopping_bag', href: '/buyer-dashboard' },
  { label: 'Seller', icon: 'leaderboard', href: '/seller-feed' },
  { label: 'Runner', icon: 'local_shipping', href: '/runner-hub' },
  { label: 'Trust', icon: 'verified_user', href: '/trust-center' },
]

export function AppPreviewLayout() {
  const location = useLocation()

  return (
    <div className="min-h-screen">
      {/* Top Bar */}
      <header className="bg-white/55 backdrop-blur-xl sticky top-0 z-50 shadow-[0_48px_100px_rgba(16,185,129,0.04)]">
        <div className="flex justify-between items-center w-full px-8 py-4 max-w-full mx-auto">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-2xl font-bold tracking-tighter text-emerald-600 font-[Manrope]">Sellai</Link>
            <nav className="hidden md:flex gap-6 items-center">
              {topLinks.map(l => (
                <Link
                  key={l.label}
                  to={l.href}
                  className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                    location.pathname === l.href
                      ? 'text-emerald-600 border-b-2 border-emerald-500 pb-1'
                      : 'text-slate-500 hover:text-emerald-500'
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center bg-surface-container rounded-full px-4 py-2 text-on-surface-variant">
              <span className="material-symbols-outlined text-sm">search</span>
              <input className="bg-transparent border-none focus:ring-0 text-sm ml-2 outline-none" placeholder="Search..." />
            </div>
            <Link to="/" className="bg-primary-container text-on-primary-container px-6 py-2 rounded-xl font-bold text-sm active:scale-95 transition-transform">
              Back to Home
            </Link>
            <div className="flex items-center gap-2">
              <button className="p-2 text-slate-500 hover:bg-emerald-50 rounded-full transition-all duration-300">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <button className="p-2 text-slate-500 hover:bg-emerald-50 rounded-full transition-all duration-300">
                <span className="material-symbols-outlined">settings</span>
              </button>
            </div>
            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-sm">
              A
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Side Nav */}
        <aside className="hidden lg:flex flex-col h-[calc(100vh-76px)] w-64 p-4 space-y-6 sticky top-[76px] bg-emerald-50/50">
          <div className="flex items-center gap-3 px-2 mb-4">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-sm">workspace_premium</span>
            </div>
            <div>
              <h3 className="text-lg font-black text-emerald-900 leading-tight">Sellai Workspace</h3>
              <p className="text-xs text-slate-500 font-medium">Local Intelligence</p>
            </div>
          </div>
          <div className="space-y-1">
            {sideLinks.map(l => (
              <Link
                key={l.label}
                to={l.href}
                className={`flex items-center gap-3 w-full p-3 rounded-xl hover:translate-x-1 transition-transform duration-200 ${
                  location.pathname === l.href
                    ? 'bg-white text-emerald-600 shadow-sm'
                    : 'text-slate-500'
                }`}
              >
                <span className="material-symbols-outlined" style={location.pathname === l.href ? { fontVariationSettings: "'FILL' 1" } : undefined}>{l.icon}</span>
                <span className="font-medium text-sm">{l.label}</span>
              </Link>
            ))}
          </div>
          <div className="pt-6">
            <button className="w-full bg-emerald-900 text-white p-3 rounded-xl font-bold text-sm shadow-lg shadow-emerald-900/20 hover:scale-[1.02] transition-transform">
              New Request
            </button>
          </div>
          <div className="mt-auto space-y-1">
            <button className="flex items-center gap-3 w-full p-3 text-slate-500 hover:translate-x-1 transition-transform duration-200">
              <span className="material-symbols-outlined">help_outline</span>
              <span className="font-medium text-sm">Support</span>
            </button>
            <Link to="/" className="flex items-center gap-3 w-full p-3 text-slate-500 hover:translate-x-1 transition-transform duration-200">
              <span className="material-symbols-outlined">logout</span>
              <span className="font-medium text-sm">Back to Site</span>
            </Link>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 overflow-hidden">
          <Outlet />
        </main>
      </div>

      {/* Mobile Nav */}
      <footer className="md:hidden fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg px-6 py-3 flex justify-between items-center z-50 border-t border-emerald-100/50">
        {sideLinks.map(l => (
          <Link
            key={l.label}
            to={l.href}
            className={`flex flex-col items-center gap-1 ${location.pathname === l.href ? 'text-emerald-600' : 'text-slate-400'}`}
          >
            <span className="material-symbols-outlined">{l.icon}</span>
            <span className="text-[10px] font-bold uppercase">{l.label}</span>
          </Link>
        ))}
      </footer>
    </div>
  )
}
