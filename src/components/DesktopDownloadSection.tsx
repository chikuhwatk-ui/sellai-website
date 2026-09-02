import { useState } from 'react'
import { Monitor, Command, BellRing, CloudOff, RefreshCw, ArrowRight, Store } from 'lucide-react'
import { WINDOWS_MSI_URL, MAC_WAITLIST_MAILTO } from '../constants/downloads'
import { Button, BrandIcon, Container, Pill, Section, SectionHeader } from './ui'
import { Reveal, Stagger, StaggerItem } from './motion'

type OS = 'mac' | 'win' | 'other'

function detectOS(): OS {
  if (typeof navigator === 'undefined') return 'other'
  const ua = navigator.userAgent
  const platform = (navigator as unknown as { userAgentData?: { platform?: string } }).userAgentData?.platform || ''
  if (/Mac/i.test(platform) || /Mac/i.test(ua)) return 'mac'
  if (/Win/i.test(platform) || /Win/i.test(ua)) return 'win'
  return 'other'
}

/*
 * Every feature below exists in sellai-business today:
 * command palette (src/components/CommandPalette.tsx), offline offer queue
 * (src/lib/offlineQueue.ts), native notifications (src/lib/nativeNotifications.ts),
 * socket sync (src/lib/socket.ts). Sidebar labels and lead tags mirror
 * src/components/Sidebar.tsx and LeadsView.tsx.
 */
const FEATURES = [
  { icon: Monitor, title: 'A bigger view of your day', body: 'Requests, chats and offers side by side instead of swiping between screens.' },
  { icon: Command, title: 'Keyboard-first', body: 'A command palette (⌘K or Ctrl+K) and shortcuts for every view. Type your offers on a real keyboard.' },
  { icon: BellRing, title: 'Notifications from your computer', body: 'Windows and macOS notification centre alerts, even when the app is in the background.' },
  { icon: CloudOff, title: 'Drafts that survive a dropped connection', body: 'Write an offer offline and it sends itself when you are back online.' },
  { icon: RefreshCw, title: 'Same account, in sync', body: 'Sign in with your phone number. Phone and desktop stay in step in real time.' },
  { icon: Store, title: 'Free for sellers', body: 'The desktop app costs nothing. Credits work exactly as they do on your phone.' },
]

const SIDEBAR = ['Dashboard', 'Requests', 'Messages', 'Analytics', 'Credits', 'Deliveries', 'Profile']
const LEADS = [
  { tag: 'HOT', name: 'iPhone 13 · 128GB', loc: 'Borrowdale · 5 km', budget: '$500', tone: 'bg-error-bg text-error-text' },
  { tag: 'NEW', name: 'Office chairs · 20 units', loc: 'Avondale · 12 km', budget: '$3,500', tone: 'bg-mint-100 text-primary-text' },
  { tag: 'SENT', name: 'Wedding cake · 3 tier', loc: 'Mt Pleasant · 8 km', budget: '$240', tone: 'bg-page text-muted' },
  { tag: 'NEW', name: 'Solar inverter 5 kVA + battery', loc: 'Greendale · 15 km', budget: '$2,100', tone: 'bg-mint-100 text-primary-text' },
]

function DesktopMockup() {
  return (
    <div className="relative">
      <div className="rounded-2xl overflow-hidden border border-hairline bg-surface shadow-[var(--shadow-lift)] aspect-[16/10]">
        <div className="h-9 bg-page border-b border-hairline flex items-center px-4 gap-1.5">
          <span className="w-3 h-3 rounded-full bg-hairline" /><span className="w-3 h-3 rounded-full bg-hairline" /><span className="w-3 h-3 rounded-full bg-hairline" />
          <span className="ml-4 text-[10px] font-bold tracking-[0.08em] uppercase text-muted">Sellai Business</span>
        </div>
        <div className="flex h-[calc(100%-36px)]">
          <div className="w-40 border-r border-hairline p-3 space-y-1 bg-page/60">
            {SIDEBAR.map((label, i) => (
              <div key={label} className={`text-xs px-3 py-1.5 rounded-lg ${i === 1 ? 'bg-mint-100 text-primary-text font-semibold' : 'text-muted'}`}>{label}</div>
            ))}
          </div>
          <div className="flex-1 p-4 space-y-2 overflow-hidden">
            <div className="text-[10px] font-bold tracking-[0.08em] uppercase text-muted tnum">Requests near you · 12</div>
            {LEADS.map((lead, i) => (
              <div key={lead.name} className={`flex items-center gap-3 p-2.5 rounded-xl border ${i === 0 ? 'bg-surface border-mint-light shadow-[var(--shadow-card)]' : 'bg-surface/60 border-hairline'}`}>
                <div className={`w-9 h-9 rounded-lg ${lead.tone} flex items-center justify-center text-[9px] font-extrabold`}>{lead.tag}</div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-bold text-ink truncate">{lead.name}</div>
                  <div className="text-[10px] text-muted">{lead.loc}</div>
                </div>
                <div className="text-xs font-bold text-primary-text tnum">{lead.budget}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Reveal delay={0.4} y={12} className="absolute -bottom-4 -right-3 md:-right-6">
        <div className="bg-surface rounded-2xl shadow-[var(--shadow-lift)] border border-hairline px-4 py-3 flex items-center gap-3 max-w-[260px]">
          <div className="w-9 h-9 rounded-full bg-mint flex items-center justify-center text-ink shrink-0"><BellRing size={16} aria-hidden="true" /></div>
          <div>
            <div className="text-xs font-bold text-ink">New request near you</div>
            <div className="text-[11px] text-muted">Buyer in Borrowdale needs an iPhone 13</div>
          </div>
        </div>
      </Reveal>
    </div>
  )
}

export function DesktopDownloadSection({ variant = 'default', showHeader = true }: { variant?: 'default' | 'compact'; showHeader?: boolean }) {
  // Client-only SPA, so reading the user agent in the initializer is safe.
  const [os] = useState<OS>(() => detectOS())

  if (variant === 'compact') return <CompactDesktopBanner />

  const winFirst = os !== 'mac'

  const WindowsCard = (
    <a href={WINDOWS_MSI_URL} className="group block rounded-2xl p-5 bg-forest text-white shadow-[var(--shadow-lift)] transition-colors hover:bg-forest-light" aria-label="Download Sellai Business for Windows">
      <div className="flex items-center gap-4">
        <BrandIcon name="windows" size={30} />
        <div className="flex-1">
          <div className="eyebrow eyebrow-on-dark">{os === 'win' ? 'Recommended for you' : 'Windows'}</div>
          <div className="font-display text-lg font-extrabold">Download for Windows</div>
          <div className="text-xs text-white/60 mt-0.5">Windows 10 or newer · 64-bit · .msi installer</div>
        </div>
        <ArrowRight className="opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" aria-hidden="true" />
      </div>
    </a>
  )
  const MacCard = (
    <a href={MAC_WAITLIST_MAILTO} className="group block rounded-2xl p-5 bg-surface border border-hairline transition-colors hover:border-mint-light" aria-label="Mac app in progress, email us to be notified">
      <div className="flex items-center gap-4">
        <BrandIcon name="apple" size={30} className="text-ink" />
        <div className="flex-1">
          <div className="flex items-center gap-2"><span className="eyebrow">Mac</span><Pill tone="warning">In progress</Pill></div>
          <div className="font-display text-lg font-extrabold text-ink">Tell me when it's ready</div>
          <div className="text-xs text-muted mt-0.5">One email, no spam. Apple Silicon and Intel.</div>
        </div>
        <ArrowRight className="text-muted opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" aria-hidden="true" />
      </div>
    </a>
  )

  return (
    <Section id="download-desktop" tone="tint">
      <Container>
        {showHeader && (
          <Reveal>
            <SectionHeader
              eyebrow="Sellai Business · for sellers"
              title="For sellers who work from a desk."
              lede="A companion to your Sellai seller account. Your phone stays the main way to use Sellai. Desktop is for the days you are at a keyboard, working through requests on a bigger screen."
            />
          </Reveal>
        )}

        <div className="grid lg:grid-cols-5 gap-10 items-center mb-16">
          <Reveal className="lg:col-span-3"><DesktopMockup /></Reveal>
          <div className="lg:col-span-2 space-y-3">
            <div className="eyebrow mb-1">Download</div>
            {winFirst ? <>{WindowsCard}{MacCard}</> : <>{MacCard}{WindowsCard}</>}
            <p className="text-xs text-muted leading-relaxed pt-1">
              Windows may show a SmartScreen prompt on first install while our signing certificate is being set up. Choose “More info”, then “Run anyway”.
            </p>
            <p className="text-xs text-muted">On the go? <a href="#download" className="font-semibold text-primary-text hover:underline">Get the phone app</a> instead.</p>
          </div>
        </div>

        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-2">
          {FEATURES.map((f) => (
            <StaggerItem key={f.title}>
              <div className="flex gap-4 py-4 border-t border-hairline">
                <div className="w-10 h-10 rounded-full bg-mint-100 text-primary-text flex items-center justify-center shrink-0"><f.icon size={20} aria-hidden="true" /></div>
                <div>
                  <h3 className="text-[1rem] font-bold text-ink mb-1">{f.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{f.body}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  )
}

function CompactDesktopBanner() {
  return (
    <Section tone="page" className="!py-10">
      <Container>
        <Reveal>
          <div className="rounded-[20px] bg-forest text-white p-8 md:p-12 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-mint/20 blur-3xl pointer-events-none" aria-hidden="true" />
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="eyebrow eyebrow-on-dark">Sellai Business</span>
                  <Pill tone="dark">For sellers</Pill>
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-extrabold leading-tight mb-3">Sell from a desk? There's a Windows app.</h3>
                <p className="text-white/70 leading-relaxed">Same account as your phone, designed around a bigger screen. Mac is in progress.</p>
              </div>
              <div className="flex flex-col gap-3 md:items-end">
                <Button href={WINDOWS_MSI_URL} variant="mint" size="lg" icon={() => <BrandIcon name="windows" size={18} />} ariaLabel="Download Sellai Business for Windows">Download for Windows</Button>
                <Button to="/desktop" variant="link" className="!text-mint-dark">See what it does <ArrowRight size={16} aria-hidden="true" /></Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
