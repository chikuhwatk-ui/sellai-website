import { useEffect, useState } from 'react'

type OS = 'mac' | 'win' | 'linux' | 'other'

const APP_VERSION = '1.0.0'
const RELEASE_DATE = 'April 2026'

// Replace these with your real CDN / GitHub Releases URLs once builds are signed.
const DOWNLOADS = {
  mac: {
    universal: '/downloads/Sellai-Business-1.0.0-universal.dmg',
    appleSilicon: '/downloads/Sellai-Business-1.0.0-aarch64.dmg',
    intel: '/downloads/Sellai-Business-1.0.0-x64.dmg',
    sizeLabel: '~58 MB',
  },
  win: {
    msi: '/downloads/Sellai-Business-1.0.0-x64.msi',
    exe: '/downloads/Sellai-Business-1.0.0-x64-setup.exe',
    sizeLabel: '~52 MB',
  },
}

function detectOS(): OS {
  if (typeof navigator === 'undefined') return 'other'
  const ua = navigator.userAgent
  const platform = (navigator as unknown as { userAgentData?: { platform?: string } }).userAgentData?.platform || ''
  if (/Mac/i.test(platform) || /Mac/i.test(ua)) return 'mac'
  if (/Win/i.test(platform) || /Win/i.test(ua)) return 'win'
  if (/Linux/i.test(platform) || /Linux/i.test(ua)) return 'linux'
  return 'other'
}

const FEATURES = [
  { icon: 'desktop_windows', title: 'A bigger view of your day', body: 'See your leads, chats, and offers side by side instead of swiping between screens.' },
  { icon: 'keyboard_command_key', title: 'Keyboard-first', body: 'Cmd-K command palette and shortcuts for every action — type your offers with a real keyboard.' },
  { icon: 'notifications_active', title: 'OS-level notifications', body: 'macOS and Windows notification center alerts, even when the app is in the background.' },
  { icon: 'cloud_off', title: 'Drafts that survive offline', body: "Compose offers without a connection — they send themselves when you're back online." },
  { icon: 'sync', title: 'Same Sellai account', body: 'Sign in with your existing phone number. Mobile and desktop stay in sync in real time.' },
  { icon: 'shield_lock', title: 'Code-signed & notarized', body: 'Apple-notarized .dmg and Microsoft-signed .msi. Install with no scary OS warnings.' },
]

const SYSTEM_REQS = {
  mac: ['macOS 11 Big Sur or later', 'Apple Silicon or Intel', '200 MB free disk', '4 GB RAM minimum'],
  win: ['Windows 10 (build 1809) or later', '64-bit processor', '200 MB free disk', '4 GB RAM minimum', 'WebView2 Runtime (preinstalled on Win10+)'],
}

export function DesktopDownloadSection({ variant = 'default' }: { variant?: 'default' | 'compact' }) {
  const [os, setOs] = useState<OS>('other')

  useEffect(() => {
    setOs(detectOS())
  }, [])

  if (variant === 'compact') {
    return <CompactDesktopBanner os={os} />
  }

  const macHref = DOWNLOADS.mac.universal
  const winHref = DOWNLOADS.win.msi
  const macIsRecommended = os === 'mac'
  const winIsRecommended = os === 'win'

  return (
    <section id="download-desktop" className="relative py-32 px-6 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-emerald-200/30 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-emerald-300/20 blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4 flex-wrap">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary bg-primary-container/10 px-4 py-1.5 rounded-full">
              <span className="material-symbols-outlined text-base">desktop_windows</span>
              Sellai for Mac &amp; Windows
            </span>
            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-amber-700 bg-amber-100 px-3 py-1.5 rounded-full">
              <span className="material-symbols-outlined text-sm">storefront</span>
              For Sellers
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight font-[Manrope] text-on-background mb-6 leading-[1.05]">
            For sellers who work from a{' '}
            <span className="bg-gradient-to-r from-[#10B981] to-[#059669] bg-clip-text text-transparent">
              desk
            </span>
            .
          </h2>
          <p className="text-on-surface-variant text-lg leading-relaxed">
            A laptop-friendly companion to your Sellai seller account.
            Mobile is the main way most sellers use Sellai — desktop is for the days
            you're at a keyboard, triaging leads on a bigger screen, with OS-level notifications.
            Same account, same data either way.
          </p>
        </div>

        {/* Hero card with mockup + downloads */}
        <div className="grid lg:grid-cols-5 gap-10 items-center mb-20">
          {/* Mockup */}
          <div className="lg:col-span-3 relative">
            <div className="relative rounded-3xl overflow-hidden border border-emerald-100 bloom-shadow bg-white aspect-[16/10]">
              {/* Window chrome */}
              <div className="absolute top-0 left-0 right-0 h-9 bg-gradient-to-b from-slate-50 to-slate-100 border-b border-slate-200/60 flex items-center px-4 gap-1.5 z-10">
                <span className="w-3 h-3 rounded-full bg-red-400/80" />
                <span className="w-3 h-3 rounded-full bg-amber-400/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
                <div className="ml-4 text-[10px] font-semibold text-slate-500 tracking-widest uppercase">Sellai</div>
              </div>
              {/* Mock content */}
              <div className="absolute inset-0 pt-9 flex">
                {/* Sidebar */}
                <div className="w-44 bg-gradient-to-b from-emerald-50/80 to-white border-r border-slate-200/50 p-4 space-y-2">
                  <div className="text-[10px] font-black tracking-widest text-emerald-700 mb-4 uppercase">Sellai</div>
                  {['Dashboard', 'Leads', 'Messages', 'Orders', 'Analytics', 'Credits', 'Profile'].map((label, i) => (
                    <div key={label} className={`text-xs px-3 py-1.5 rounded-lg ${i === 1 ? 'bg-emerald-500/10 text-emerald-700 font-semibold' : 'text-slate-500'}`}>
                      {label}
                    </div>
                  ))}
                </div>
                {/* Lead pane */}
                <div className="flex-1 p-5 space-y-3 overflow-hidden">
                  <div className="text-xs font-black tracking-widest text-slate-400 uppercase">Leads near you · 12</div>
                  {[
                    { tag: 'HOT', name: 'iPhone 15 Pro Max — 256GB', loc: 'Borrowdale · 5km', budget: '$1,200', accent: 'red' },
                    { tag: 'NEW', name: 'Office chairs — 20 units', loc: 'Avondale · 12km', budget: '$3,500', accent: 'emerald' },
                    { tag: 'SENT', name: 'Wedding cake — 3 tier', loc: 'Mt Pleasant · 8km', budget: '$240', accent: 'slate' },
                    { tag: 'NEW', name: 'Solar inverter 5kVA + battery', loc: 'Greendale · 15km', budget: '$2,100', accent: 'emerald' },
                  ].map((lead, i) => (
                    <div key={i} className={`flex items-center gap-3 p-3 rounded-xl border ${i === 0 ? 'bg-white border-emerald-200 shadow-sm' : 'bg-white/50 border-slate-100'}`}>
                      <div className={`w-9 h-9 rounded-lg ${lead.accent === 'red' ? 'bg-red-100 text-red-600' : lead.accent === 'emerald' ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-500'} flex items-center justify-center text-[10px] font-black`}>
                        {lead.tag}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-bold text-slate-900 truncate">{lead.name}</div>
                        <div className="text-[10px] text-slate-500">{lead.loc}</div>
                      </div>
                      <div className="text-xs font-bold text-emerald-700">{lead.budget}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Floating notification bubble */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl border border-emerald-100 px-5 py-3 flex items-center gap-3 max-w-xs">
              <div className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0">
                <span className="material-symbols-outlined text-lg">notifications</span>
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">New lead near you</div>
                <div className="text-[10px] text-slate-500">Buyer in Borrowdale needs an iPhone 15 Pro</div>
              </div>
            </div>
          </div>

          {/* Download buttons */}
          <div className="lg:col-span-2 space-y-4">
            <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">Download</div>

            {/* macOS */}
            <a
              href={macHref}
              className={`group block rounded-2xl p-6 transition-all hover:scale-[1.02] active:scale-[0.99] ${
                macIsRecommended
                  ? 'bg-gradient-to-br from-[#0E1B13] to-[#0a1f15] text-white shadow-2xl shadow-emerald-900/20 ring-2 ring-emerald-400/40'
                  : 'bg-white border border-slate-200 text-on-surface hover:border-emerald-300 hover:shadow-lg'
              }`}
            >
              <div className="flex items-center gap-4">
                <svg className={`w-10 h-10 ${macIsRecommended ? 'text-white' : 'text-slate-700'}`} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M16.365 1.43c0 1.14-.46 2.226-1.21 3.013-.81.838-2.13 1.483-3.213 1.398-.13-1.116.42-2.27 1.166-3.046C13.94 1.926 15.27 1.34 16.365 1.43zm3.96 17.058c-.62 1.39-.92 2.01-1.71 3.24-1.1 1.7-2.66 3.81-4.59 3.83-1.71.02-2.15-1.12-4.47-1.1-2.32.01-2.81 1.13-4.52 1.11-1.93-.02-3.4-1.95-4.5-3.65-3.07-4.74-3.39-10.31-1.5-13.27 1.34-2.11 3.46-3.34 5.45-3.34 2.04 0 3.32 1.12 5.01 1.12 1.64 0 2.64-1.12 5-1.12 1.78 0 3.66.97 5 2.65-4.39 2.4-3.68 8.67.83 10.53z" />
                </svg>
                <div className="flex-1">
                  <div className={`text-[10px] font-bold uppercase tracking-widest ${macIsRecommended ? 'text-emerald-300' : 'text-on-surface-variant'}`}>
                    {macIsRecommended ? 'Recommended for you' : 'For Mac'}
                  </div>
                  <div className="text-lg font-extrabold">Download for macOS</div>
                  <div className={`text-[11px] mt-0.5 ${macIsRecommended ? 'text-slate-400' : 'text-on-surface-variant'}`}>
                    Universal · {DOWNLOADS.mac.sizeLabel} · v{APP_VERSION}
                  </div>
                </div>
                <span className="material-symbols-outlined opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all">arrow_forward</span>
              </div>
              <div className="mt-3 flex gap-3 text-[11px]">
                <a
                  href={DOWNLOADS.mac.appleSilicon}
                  onClick={(e) => e.stopPropagation()}
                  className={`underline-offset-2 hover:underline ${macIsRecommended ? 'text-emerald-300' : 'text-emerald-700'}`}
                >
                  Apple Silicon (M-series)
                </a>
                <span className={macIsRecommended ? 'text-slate-600' : 'text-slate-300'}>·</span>
                <a
                  href={DOWNLOADS.mac.intel}
                  onClick={(e) => e.stopPropagation()}
                  className={`underline-offset-2 hover:underline ${macIsRecommended ? 'text-emerald-300' : 'text-emerald-700'}`}
                >
                  Intel
                </a>
              </div>
            </a>

            {/* Windows */}
            <a
              href={winHref}
              className={`group block rounded-2xl p-6 transition-all hover:scale-[1.02] active:scale-[0.99] ${
                winIsRecommended
                  ? 'bg-gradient-to-br from-[#0E1B13] to-[#0a1f15] text-white shadow-2xl shadow-emerald-900/20 ring-2 ring-emerald-400/40'
                  : 'bg-white border border-slate-200 text-on-surface hover:border-emerald-300 hover:shadow-lg'
              }`}
            >
              <div className="flex items-center gap-4">
                <svg className={`w-10 h-10 ${winIsRecommended ? 'text-white' : 'text-slate-700'}`} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M0 3.449L9.75 2.1v9.451H0V3.449zm0 17.052V12h9.75v9.602L0 20.501zm10.949-19.06L24 0v11.4H10.949V1.441zM10.949 24V12.6H24V24l-13.051-1.06z" />
                </svg>
                <div className="flex-1">
                  <div className={`text-[10px] font-bold uppercase tracking-widest ${winIsRecommended ? 'text-emerald-300' : 'text-on-surface-variant'}`}>
                    {winIsRecommended ? 'Recommended for you' : 'For Windows'}
                  </div>
                  <div className="text-lg font-extrabold">Download for Windows</div>
                  <div className={`text-[11px] mt-0.5 ${winIsRecommended ? 'text-slate-400' : 'text-on-surface-variant'}`}>
                    64-bit · {DOWNLOADS.win.sizeLabel} · v{APP_VERSION}
                  </div>
                </div>
                <span className="material-symbols-outlined opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all">arrow_forward</span>
              </div>
              <div className="mt-3 flex gap-3 text-[11px]">
                <a
                  href={DOWNLOADS.win.msi}
                  onClick={(e) => e.stopPropagation()}
                  className={`underline-offset-2 hover:underline ${winIsRecommended ? 'text-emerald-300' : 'text-emerald-700'}`}
                >
                  .msi installer
                </a>
                <span className={winIsRecommended ? 'text-slate-600' : 'text-slate-300'}>·</span>
                <a
                  href={DOWNLOADS.win.exe}
                  onClick={(e) => e.stopPropagation()}
                  className={`underline-offset-2 hover:underline ${winIsRecommended ? 'text-emerald-300' : 'text-emerald-700'}`}
                >
                  .exe portable
                </a>
              </div>
            </a>

            {/* Mobile-app reminder (no web fallback — desktop is native only) */}
            <div className="text-center text-xs text-on-surface-variant pt-2">
              On the go? <a href="#download" className="font-semibold text-emerald-700 hover:underline">Get the mobile app</a> instead.
            </div>
          </div>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {FEATURES.map((f) => (
            <div key={f.title} className="glass-card rounded-2xl p-6 border border-white/40 hover:shadow-lg hover:shadow-emerald-900/5 transition-all">
              <div className="w-11 h-11 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-emerald-600">{f.icon}</span>
              </div>
              <h3 className="text-base font-bold text-on-background mb-2">{f.title}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>

        {/* System requirements */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-7">
            <div className="flex items-center gap-3 mb-4">
              <svg className="w-6 h-6 text-slate-700" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M16.365 1.43c0 1.14-.46 2.226-1.21 3.013-.81.838-2.13 1.483-3.213 1.398-.13-1.116.42-2.27 1.166-3.046C13.94 1.926 15.27 1.34 16.365 1.43zm3.96 17.058c-.62 1.39-.92 2.01-1.71 3.24-1.1 1.7-2.66 3.81-4.59 3.83-1.71.02-2.15-1.12-4.47-1.1-2.32.01-2.81 1.13-4.52 1.11-1.93-.02-3.4-1.95-4.5-3.65-3.07-4.74-3.39-10.31-1.5-13.27 1.34-2.11 3.46-3.34 5.45-3.34 2.04 0 3.32 1.12 5.01 1.12 1.64 0 2.64-1.12 5-1.12 1.78 0 3.66.97 5 2.65-4.39 2.4-3.68 8.67.83 10.53z" />
              </svg>
              <h4 className="text-sm font-extrabold uppercase tracking-widest text-on-background">macOS Requirements</h4>
            </div>
            <ul className="space-y-2">
              {SYSTEM_REQS.mac.map((req) => (
                <li key={req} className="flex items-start gap-2 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-emerald-500 text-base mt-0.5">check_circle</span>
                  {req}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-7">
            <div className="flex items-center gap-3 mb-4">
              <svg className="w-6 h-6 text-slate-700" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M0 3.449L9.75 2.1v9.451H0V3.449zm0 17.052V12h9.75v9.602L0 20.501zm10.949-19.06L24 0v11.4H10.949V1.441zM10.949 24V12.6H24V24l-13.051-1.06z" />
              </svg>
              <h4 className="text-sm font-extrabold uppercase tracking-widest text-on-background">Windows Requirements</h4>
            </div>
            <ul className="space-y-2">
              {SYSTEM_REQS.win.map((req) => (
                <li key={req} className="flex items-start gap-2 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-emerald-500 text-base mt-0.5">check_circle</span>
                  {req}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-center text-xs text-on-surface-variant/70 mt-10">
          Released {RELEASE_DATE} · v{APP_VERSION} ·{' '}
          <a href="/changelog" className="underline hover:text-emerald-700">Release notes</a>
        </p>
      </div>
    </section>
  )
}

function CompactDesktopBanner({ os }: { os: OS }) {
  const primaryHref = os === 'win' ? DOWNLOADS.win.msi : DOWNLOADS.mac.universal
  const primaryLabel = os === 'win' ? 'Download for Windows' : 'Download for Mac'
  const otherHref = os === 'win' ? DOWNLOADS.mac.universal : DOWNLOADS.win.msi
  const otherLabel = os === 'win' ? 'Mac' : 'Windows'

  return (
    <section className="px-6 py-20">
      <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-[#0E1B13] via-[#0a1f15] to-[#04130b] p-10 md:p-14 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-emerald-500 blur-[100px]" />
        </div>
        <div className="relative grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-300">
                <span className="material-symbols-outlined text-base">desktop_windows</span>
                Sellai for Mac &amp; Windows
              </span>
              <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-amber-300 bg-amber-300/10 px-2.5 py-1 rounded-full">
                <span className="material-symbols-outlined text-sm">storefront</span>
                For Sellers
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight font-[Manrope] text-white mb-3 leading-tight">
              Are you a seller working from a desk?
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Get Sellai as a native Mac or Windows app — a laptop-friendly companion to your
              seller account. Same login as the mobile app, just designed around a bigger screen.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href={primaryHref}
              className="bg-white text-[#0E1B13] px-6 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.99] transition-all shadow-xl"
            >
              <span className="material-symbols-outlined">download</span>
              {primaryLabel}
            </a>
            <a
              href={otherHref}
              className="text-white/80 hover:text-white text-center text-sm font-semibold transition-colors"
            >
              Also available for {otherLabel} →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
