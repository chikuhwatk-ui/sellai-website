import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="bg-[#0E1B13] text-white">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto px-8 py-16">
        <div className="space-y-6">
          <div className="text-emerald-400 font-bold text-xl font-[Manrope]">Sellai</div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Connecting buyers, sellers, and runners across Zimbabwe. Transparent local commerce, built for trust.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="text-emerald-500 font-bold uppercase tracking-widest text-xs">Product</h5>
          <Link className="text-slate-400 hover:text-white transition-colors text-sm" to="/product">How It Works</Link>
          <Link className="text-slate-400 hover:text-white transition-colors text-sm" to="/for-sellers">For Sellers</Link>
          <Link className="text-slate-400 hover:text-white transition-colors text-sm" to="/for-runners">For Runners</Link>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="text-emerald-500 font-bold uppercase tracking-widest text-xs">Company</h5>
          <Link className="text-slate-400 hover:text-white transition-colors text-sm" to="/about">About Us</Link>
          <Link className="text-slate-400 hover:text-white transition-colors text-sm" to="/contact">Contact</Link>
          <Link className="text-slate-400 hover:text-white transition-colors text-sm" to="/privacy">Privacy Policy</Link>
          <Link className="text-slate-400 hover:text-white transition-colors text-sm" to="/terms">Terms of Service</Link>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="text-emerald-500 font-bold uppercase tracking-widest text-xs">Get in Touch</h5>
          <p className="text-slate-400 text-sm">Harare, Zimbabwe</p>
          <a className="text-slate-400 hover:text-emerald-400 transition-colors text-sm" href="mailto:hello@sellai.africa">hello@sellai.africa</a>
          <div className="pt-2" id="download">
            <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-3">Get the App</p>
            <div className="flex gap-3">
              <a href="#download" className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">android</span> Google Play
              </a>
              <a href="#download" className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">phone_iphone</span> App Store
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 py-8 border-t border-white/5 text-slate-500 text-xs flex flex-col md:flex-row justify-between items-center gap-4">
        <span>&copy; {new Date().getFullYear()} Sellai. All rights reserved.</span>
        <div className="flex gap-6">
          <Link to="/privacy" className="hover:text-slate-300 transition-colors">Privacy</Link>
          <Link to="/terms" className="hover:text-slate-300 transition-colors">Terms</Link>
        </div>
      </div>
    </footer>
  )
}
