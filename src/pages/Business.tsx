import { Link } from 'react-router-dom'
import { DesktopDownloadSection } from '../components/DesktopDownloadSection'

export default function Business() {
  return (
    <main className="pt-32 overflow-hidden">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 mb-4 text-center">
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-4 bg-primary-container/10 px-4 py-1.5 rounded-full">
          Sellai on Desktop
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight font-[Manrope] mb-6 leading-[1.05]">
          The same Sellai. On your{' '}
          <span className="bg-gradient-to-r from-[#10B981] to-[#059669] bg-clip-text text-transparent">Mac and Windows</span>
          .
        </h1>
        <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
          A native desktop app for sellers who use Sellai from a keyboard.
          Same account. Same data. Same backend. Just designed around a bigger screen, mouse,
          and OS-level notifications when you're working at a desk.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-on-surface-variant">
          <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />Free to download</span>
          <span className="text-slate-300">·</span>
          <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />Same account as mobile</span>
          <span className="text-slate-300">·</span>
          <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />Code-signed &amp; notarized</span>
          <span className="text-slate-300">·</span>
          <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />Works offline</span>
        </div>
      </section>

      {/* Download section */}
      <DesktopDownloadSection />

      {/* Companion CTA */}
      <section className="px-6 pb-32">
        <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-slate-200 p-10 md:p-14 text-center bloom-shadow">
          <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight font-[Manrope] mb-4 text-on-background">
            New to Sellai?
          </h3>
          <p className="text-on-surface-variant text-base mb-8 max-w-2xl mx-auto leading-relaxed">
            Start by registering on the Sellai mobile app — that's where onboarding,
            ID verification, and your first credits live. Then sign in to the desktop app
            with the same phone number, on the same Wi-Fi as your phone, and you're set.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link
              to="/for-sellers"
              className="bg-gradient-to-r from-[#10B981] to-[#059669] text-white px-8 py-3.5 rounded-xl font-bold hover:scale-[1.02] active:scale-[0.99] transition-all shadow-lg shadow-emerald-500/20"
            >
              Learn how Sellai works
            </Link>
            <Link
              to="/contact"
              className="text-on-surface-variant hover:text-emerald-700 font-semibold text-sm transition-colors"
            >
              Talk to us →
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
