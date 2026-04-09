import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="bg-[#0E1B13] text-white">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto px-8 py-16">
        <div className="space-y-6">
          <div className="text-emerald-400 font-bold text-xl">Sellai</div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Modernizing local commerce through transparency and trust. Built for performance, designed for people.
          </p>
          <div className="flex gap-4">
            <a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-emerald-400 transition-colors" href="#">
              <span className="material-symbols-outlined text-sm">public</span>
            </a>
            <a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-emerald-400 transition-colors" href="#">
              <span className="material-symbols-outlined text-sm">smart_display</span>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="text-emerald-500 font-bold uppercase tracking-widest text-xs">Product</h5>
          <Link className="text-slate-400 hover:text-white transition-colors text-sm" to="/for-sellers">For Sellers</Link>
          <Link className="text-slate-400 hover:text-white transition-colors text-sm" to="/for-runners">For Runners</Link>
          <Link className="text-slate-400 hover:text-white transition-colors text-sm" to="/buyer-dashboard">Buyer Preview</Link>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="text-emerald-500 font-bold uppercase tracking-widest text-xs">Company</h5>
          <Link className="text-slate-400 hover:text-white transition-colors text-sm" to="/about">About Us</Link>
          <Link className="text-slate-400 hover:text-white transition-colors text-sm" to="/trust-center">Trust Center</Link>
          <a className="text-slate-400 hover:text-white transition-colors text-sm" href="#">Careers</a>
          <a className="text-slate-400 hover:text-white transition-colors text-sm" href="#">Legal</a>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="text-emerald-500 font-bold uppercase tracking-widest text-xs">Contact</h5>
          <p className="text-slate-400 text-sm">Harare, Zimbabwe</p>
          <p className="text-slate-400 text-sm">hello@sellai.africa</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 py-8 border-t border-white/5 text-slate-500 text-xs text-center">
        &copy; {new Date().getFullYear()} Sellai. Built for performance.
      </div>
    </footer>
  )
}
