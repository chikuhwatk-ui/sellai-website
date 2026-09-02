import { Link } from 'react-router-dom'
import { Smartphone } from 'lucide-react'
import { ANDROID_APK_URL, WINDOWS_MSI_URL, IOS_WAITLIST_MAILTO, MAC_WAITLIST_MAILTO, CONTACT_EMAIL } from '../constants/downloads'
import { BrandIcon } from './ui'

function Chip({ href, children, soon = false, label }: { href: string; children: React.ReactNode; soon?: boolean; label: string }) {
  return (
    <a
      href={href}
      aria-label={label}
      className={`inline-flex items-center gap-2 h-9 px-3 rounded-[10px] text-xs font-bold transition-colors ${soon ? 'bg-white/5 text-white/60 hover:text-white' : 'bg-white/10 text-white hover:bg-white/20'}`}
    >
      {children}
      {soon && <span className="text-[9px] uppercase tracking-[0.06em] text-mint-dark">Soon</span>}
    </a>
  )
}

export function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-4 space-y-4">
          <div className="font-display text-xl font-extrabold tracking-[-0.03em] text-mint-dark">Sellai</div>
          <p className="text-white/60 text-sm leading-relaxed max-w-xs">
            Buyers post what they need. Verified local sellers send offers. Runners deliver with a PIN-secured handoff. Built in Harare.
          </p>
        </div>

        <div className="md:col-span-2 flex flex-col gap-3">
          <h2 className="eyebrow eyebrow-on-dark">Product</h2>
          <Link className="text-white/70 hover:text-white transition-colors text-sm" to="/product">How it works</Link>
          <Link className="text-white/70 hover:text-white transition-colors text-sm" to="/for-sellers">For sellers</Link>
          <Link className="text-white/70 hover:text-white transition-colors text-sm" to="/for-runners">For runners</Link>
          <Link className="text-white/70 hover:text-white transition-colors text-sm" to="/desktop">Desktop app</Link>
        </div>

        <div className="md:col-span-2 flex flex-col gap-3">
          <h2 className="eyebrow eyebrow-on-dark">Company</h2>
          <Link className="text-white/70 hover:text-white transition-colors text-sm" to="/about">About</Link>
          <Link className="text-white/70 hover:text-white transition-colors text-sm" to="/contact">Contact</Link>
          <Link className="text-white/70 hover:text-white transition-colors text-sm" to="/privacy">Privacy policy</Link>
          <Link className="text-white/70 hover:text-white transition-colors text-sm" to="/terms">Terms of service</Link>
        </div>

        <div className="md:col-span-4 flex flex-col gap-3" id="download-footer">
          <h2 className="eyebrow eyebrow-on-dark">Get Sellai</h2>
          <p className="text-white/50 text-[11px] uppercase tracking-[0.08em] font-bold">Phone · everyone</p>
          <div className="flex flex-wrap gap-2">
            <Chip href={ANDROID_APK_URL} label="Download Sellai for Android"><BrandIcon name="android" size={14} /> Android</Chip>
            <Chip href={IOS_WAITLIST_MAILTO} label="iPhone app coming soon, email us to be notified" soon><Smartphone size={14} aria-hidden="true" /> iPhone</Chip>
          </div>
          <p className="text-white/50 text-[11px] uppercase tracking-[0.08em] font-bold mt-2">Computer · sellers</p>
          <div className="flex flex-wrap gap-2">
            <Chip href={WINDOWS_MSI_URL} label="Download Sellai Business for Windows"><BrandIcon name="windows" size={13} /> Windows</Chip>
            <Chip href={MAC_WAITLIST_MAILTO} label="Mac app coming soon, email us to be notified" soon><BrandIcon name="apple" size={14} /> Mac</Chip>
          </div>
          <div className="pt-3 text-sm text-white/70">
            <div>Harare, Zimbabwe</div>
            <a className="hover:text-mint-dark transition-colors" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 py-6 border-t border-white/10 text-white/45 text-xs flex flex-col md:flex-row justify-between items-center gap-3">
        <span>&copy; {new Date().getFullYear()} Sellai (Pvt) Ltd. All rights reserved.</span>
        <div className="flex gap-6">
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
        </div>
      </div>
    </footer>
  )
}
