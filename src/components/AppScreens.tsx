/**
 * Hand-built, animated app screens for the device frames on the marketing site.
 *
 * Drawn in HTML so they always match the current brand palette and cost
 * nothing to load. Every field shown is one the app really has: a single
 * budget number (not a range), a request reference, category and area, offer
 * price and distance, seller trust score out of 100, runner base fee, pickup
 * and dropoff, and the 4-digit handoff PIN the buyer holds. Names and figures
 * are illustrative.
 *
 * Each screen plays a short loop that shows the product doing its job:
 * buyer — offers arrive on a posted demand; seller — a matched request lands;
 * runner — the map shows demand and a run moves along its route.
 */
import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Bell, BadgeCheck, ChevronRight, Clock, MapPin, Navigation, Paperclip, Send, Zap, Home, MessageCircle, User, Bike, KeyRound, Coins, Radio } from 'lucide-react'
import { EASE } from './ease'

function useLoop(steps: number, ms: number, enabled: boolean) {
  const [step, setStep] = useState(enabled ? 0 : steps - 1)
  useEffect(() => {
    if (!enabled) return
    const id = setInterval(() => setStep((s) => (s + 1) % steps), ms)
    return () => clearInterval(id)
  }, [steps, ms, enabled])
  return step
}

function StatusBar({ dark = false }: { dark?: boolean }) {
  return (
    <div className={`flex items-center justify-between px-5 pt-3 pb-1 text-[11px] font-semibold tnum ${dark ? 'text-white/80' : 'text-ink/80'}`}>
      <span>10:29</span>
      <span className="flex items-center gap-1" aria-hidden="true">
        <span className="w-3 h-2 rounded-[2px] border border-current opacity-70" />
        <span className="w-[14px] h-[7px] rounded-[2px] bg-current" />
      </span>
    </div>
  )
}

function TabBar({ active = 0 }: { active?: number }) {
  const tabs = [
    { icon: Home, label: 'Home' },
    { icon: MessageCircle, label: 'Messages' },
    { icon: User, label: 'Profile' },
  ]
  return (
    <div className="absolute bottom-0 inset-x-0 bg-surface border-t border-hairline flex justify-around px-4 pt-2 pb-4">
      {tabs.map((t, i) => (
        <div key={t.label} className={`flex flex-col items-center gap-0.5 text-[10px] font-semibold ${i === active ? 'text-primary-text' : 'text-faint'}`}>
          <t.icon size={18} strokeWidth={2.2} aria-hidden="true" />
          {t.label}
        </div>
      ))}
    </div>
  )
}

const OFFERS = [
  { name: 'Kuzz Electronics', price: '$480', dist: '2.4 km', trust: 84 },
  { name: 'Avondale Phones', price: '$495', dist: '0.8 km', trust: 71 },
]

/* Buyer: a demand is posted, then two offers arrive one after the other */
export function BuyerScreen() {
  const reduce = useReducedMotion()
  const step = useLoop(4, 1900, !reduce) // 0 broadcasting, 1 first offer, 2 both, 3 hold
  const shown = step === 0 ? 0 : step === 1 ? 1 : 2

  return (
    <div className="h-full bg-page text-ink text-[12px]">
      <StatusBar />
      <div className="px-4 pt-2 flex items-center justify-between">
        <div>
          <div className="font-display font-bold text-[15px]">Hello, Tadiwa</div>
          <div className="flex items-center gap-1 text-muted text-[11px]"><MapPin size={11} aria-hidden="true" /> Harare, Zimbabwe</div>
        </div>
        <div className="w-8 h-8 rounded-full bg-surface border border-hairline flex items-center justify-center relative">
          <Bell size={15} aria-hidden="true" />
          <AnimatePresence>
            {shown > 0 && (
              <motion.span
                key="badge"
                initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
                transition={{ type: 'spring', stiffness: 500, damping: 22 }}
                className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-mint text-[8px] font-bold text-ink flex items-center justify-center tnum"
              >{shown}</motion.span>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="mx-4 mt-3 rounded-2xl bg-forest text-white p-3.5">
        <div className="font-display font-extrabold text-[15px] leading-tight">What are you looking for?</div>
        <div className="text-white/70 text-[11px] mt-0.5">Verified sellers near you reply with offers</div>
        <div className="mt-2.5 h-8 rounded-full bg-white/95 flex items-center justify-between pl-3 pr-1">
          <span className="text-faint">Tell us what you need…</span>
          <span className="w-6 h-6 rounded-full bg-mint flex items-center justify-center"><Send size={12} className="text-ink" aria-hidden="true" /></span>
        </div>
      </div>

      <div className="px-4 mt-3 flex items-center justify-between">
        <span className="font-display font-bold text-[13px]">Your demands</span>
        <span className="text-primary-text font-semibold text-[11px]">See all</span>
      </div>

      <div className="mx-4 mt-1.5 rounded-2xl bg-surface border border-hairline p-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <div className="font-semibold text-[13px] leading-tight">iPhone 13 · Apple</div>
            <div className="text-muted text-[11px] mt-0.5">Mobile phones · Newlands</div>
          </div>
          <div className="text-right">
            <div className="eyebrow !text-[9px] !tracking-[0.06em]">Budget</div>
            <div className="font-display font-extrabold text-primary-text tnum">$500</div>
          </div>
        </div>
        <div className="mt-2 flex items-center gap-2 h-5">
          <AnimatePresence mode="wait" initial={false}>
            {shown === 0 ? (
              <motion.span key="b" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="inline-flex items-center gap-1 rounded-full bg-page text-muted px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide">
                <Radio size={10} className="pulse-dot" aria-hidden="true" /> Broadcasting
              </motion.span>
            ) : (
              <motion.span key="o" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="inline-flex items-center gap-1 rounded-full bg-mint-100 text-primary-text px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide tnum">
                {shown} {shown === 1 ? 'offer' : 'offers'}
              </motion.span>
            )}
          </AnimatePresence>
          <span className="text-faint text-[10px] tnum">Ref #REQ-C7DE</span>
        </div>

        <div className="mt-2.5 border-t border-hairline pt-2.5 min-h-[92px] space-y-2 relative">
          <AnimatePresence initial={false}>
            {OFFERS.slice(0, shown).map((o, i) => {
              const best = shown === 2 && i === 0
              return (
                <motion.div
                  key={o.name}
                  layout
                  initial={{ opacity: 0, y: 10, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.45, ease: EASE }}
                  className={`flex items-center justify-between rounded-xl px-3 py-2 border ${best ? 'bg-mint-50 border-mint-light' : 'bg-page border-transparent'}`}
                >
                  <div>
                    <div className="flex items-center gap-1 font-semibold text-[12px]">{o.name}<BadgeCheck size={12} className="text-primary-text" aria-hidden="true" /></div>
                    <div className="text-muted text-[10px] tnum flex items-center gap-2">
                      <span>Trust {o.trust}/100</span><span className="flex items-center gap-0.5"><Navigation size={9} aria-hidden="true" />{o.dist}</span>
                    </div>
                  </div>
                  <div className="font-display font-extrabold text-[14px] text-primary-text tnum">{o.price}</div>
                </motion.div>
              )
            })}
          </AnimatePresence>
          {shown === 0 && (
            <div className="absolute inset-0 flex items-center justify-center text-[11px] text-faint text-center px-4">Sellers nearby are seeing your demand…</div>
          )}
        </div>
      </div>

      <div className="mx-4 mt-2.5 rounded-2xl bg-warning-bg px-3 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bike size={16} className="text-warning-text" aria-hidden="true" />
          <div>
            <div className="font-semibold text-[12px] text-warning-text">Active delivery</div>
            <div className="text-[10px] text-warning-text/80">Runner 5 min away · PIN ready</div>
          </div>
        </div>
        <ChevronRight size={14} className="text-warning-text" aria-hidden="true" />
      </div>

      <TabBar active={0} />
    </div>
  )
}

const REQUESTS = [
  { title: 'iPhone 13 · 128GB, any colour', path: 'Electronics › Mobile phones', budget: '$500', dist: '0.8 km', tags: '3 match', urgent: true, age: 'Just now' },
  { title: 'Office chairs · 20 units', path: 'Home & Living › Office furniture', budget: '$3,500', dist: '12 km', tags: '2 match', urgent: false, age: '4 min ago' },
]

/* Seller: a matched request lands, and the offer form is one credit away */
export function SellerScreen() {
  const reduce = useReducedMotion()
  const step = useLoop(REQUESTS.length, 4200, !reduce)
  const r = REQUESTS[step]

  return (
    <div className="h-full bg-page text-ink text-[12px]">
      <StatusBar />
      <div className="px-4 pt-2 flex items-center justify-between">
        <div className="font-display font-bold text-[15px]">Requests near you</div>
        <span className="inline-flex items-center gap-1 rounded-full bg-mint-100 text-primary-text px-2 py-0.5 text-[10px] font-bold tnum"><Coins size={11} aria-hidden="true" /> 12 credits</span>
      </div>
      <div className="px-4 mt-2 flex gap-2 text-[10px] font-semibold">
        <span className="rounded-full bg-forest text-white px-2.5 py-1 tnum">New · 4</span>
        <span className="rounded-full bg-surface border border-hairline px-2.5 py-1 text-muted tnum">Sent · 9</span>
        <span className="rounded-full bg-surface border border-hairline px-2.5 py-1 text-muted tnum">Won · 3</span>
      </div>

      <div className="mx-4 mt-3 relative h-[168px]">
        <AnimatePresence initial={false}>
          <motion.div
            key={step}
            initial={{ opacity: 0, y: -18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, transition: { duration: 0.25 } }}
            transition={{ duration: 0.5, ease: EASE }}
            className="absolute inset-0 rounded-2xl bg-surface border border-hairline p-3 shadow-[var(--shadow-card)]"
          >
            <div className="flex items-center justify-between">
              {r.urgent ? (
                <span className="inline-flex items-center gap-1 rounded-full bg-error-bg text-error-text px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide"><Zap size={9} aria-hidden="true" /> Needed today</span>
              ) : (
                <span className="inline-flex items-center gap-1 rounded-full bg-info-bg text-info-text px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide">New request</span>
              )}
              <span className="text-faint text-[10px] flex items-center gap-1"><Clock size={10} aria-hidden="true" /> {r.age}</span>
            </div>
            <div className="mt-2 font-semibold text-[13px] leading-tight">{r.title}</div>
            <div className="text-muted text-[11px] mt-0.5">{r.path}</div>
            <div className="mt-2 flex items-center gap-1.5 text-[10px] text-muted">
              <Paperclip size={10} aria-hidden="true" /> reference.jpg
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2 text-center">
              {[['Budget', r.budget], ['Distance', r.dist], ['Tags', r.tags]].map(([k, v]) => (
                <div key={k} className="rounded-xl bg-page py-1.5">
                  <div className="text-[9px] uppercase tracking-wide text-faint font-bold">{k}</div>
                  <div className="font-display font-extrabold text-[13px] tnum">{v}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mx-4 mt-3 rounded-2xl bg-surface border border-hairline p-3">
        <div className="eyebrow !text-[9px] mb-2">Your offer</div>
        <div className="flex items-center justify-between border-b border-hairline pb-2">
          <span className="text-muted">Price</span>
          <span className="font-display font-extrabold text-[16px] text-primary-text tnum">$480</span>
        </div>
        <div className="flex items-center justify-between py-2 border-b border-hairline">
          <span className="text-muted">Condition</span>
          <span className="font-semibold">Brand new, sealed</span>
        </div>
        <div className="flex items-center justify-between pt-2">
          <span className="text-muted">Cost to send</span>
          <span className="font-semibold text-warning-text flex items-center gap-1"><Coins size={12} aria-hidden="true" /> 1 credit</span>
        </div>
        <div className="mt-3 h-10 rounded-xl bg-mint text-ink font-display font-bold text-[13px] flex items-center justify-center gap-1.5">
          <Send size={14} aria-hidden="true" /> Send offer
        </div>
      </div>

      <TabBar active={0} />
    </div>
  )
}

/* Runner: demand heatmap with a run moving along its route, plus an open request */
export function RunnerScreen() {
  const reduce = useReducedMotion()
  const pins: [number, number][] = [
    [22, 30], [40, 22], [58, 34], [70, 18], [30, 55], [52, 60], [78, 48], [64, 74], [36, 76],
  ]
  return (
    <div className="h-full bg-dark text-white text-[12px]">
      <StatusBar dark />
      <div className="px-4 pt-2 flex items-center justify-between">
        <div className="font-display font-bold text-[15px]">Where the work is</div>
        <span className="inline-flex items-center gap-1 rounded-full bg-mint/15 text-mint-dark px-2 py-0.5 text-[10px] font-bold"><span className="w-1.5 h-1.5 rounded-full bg-mint-dark" /> Online</span>
      </div>

      <div className="mx-4 mt-3 rounded-2xl overflow-hidden relative h-[250px] bg-[#0F2A1C]">
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <radialGradient id="hot1"><stop offset="0" stopColor="#1EC27A" stopOpacity="0.55" /><stop offset="1" stopColor="#1EC27A" stopOpacity="0" /></radialGradient>
            <radialGradient id="hot2"><stop offset="0" stopColor="#3BD991" stopOpacity="0.35" /><stop offset="1" stopColor="#3BD991" stopOpacity="0" /></radialGradient>
          </defs>
          <g stroke="#1F3A2B" strokeWidth="0.6" fill="none">
            <path d="M0 20 H100 M0 45 H100 M0 70 H100 M20 0 V100 M45 0 V100 M75 0 V100" />
          </g>
          <path id="route" d="M10 92 C 30 70, 60 62, 88 26" strokeWidth="1.6" stroke="#3BD991" strokeOpacity="0.7" fill="none" strokeLinecap="round" />
          <circle cx="52" cy="58" r="28" fill="url(#hot1)" />
          <circle cx="68" cy="22" r="18" fill="url(#hot2)" />
          {pins.map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="1.8" fill="#3BD991" className={i % 3 === 0 ? 'pulse-dot' : ''} style={{ transformBox: 'fill-box' }} />
          ))}
          <circle cx="10" cy="92" r="2.2" fill="none" stroke="#FFFFFF" strokeWidth="0.8" />
          <circle cx="88" cy="26" r="2.2" fill="#FFFFFF" />
          <g>
            <circle r="3.2" fill="#FFFFFF" />
            <circle r="5.5" fill="none" stroke="#FFFFFF" strokeOpacity="0.45" strokeWidth="0.8" />
            {!reduce && <animateMotion dur="7s" repeatCount="indefinite" rotate="0"><mpath href="#route" /></animateMotion>}
            {reduce && <animateMotion dur="1s" fill="freeze" keyPoints="0.55;0.55" keyTimes="0;1"><mpath href="#route" /></animateMotion>}
          </g>
        </svg>
        <div className="absolute left-3 bottom-3 rounded-lg bg-dark/85 px-2.5 py-1.5 text-[10px] font-semibold text-mint-dark">Hot zone · Avondale</div>
        <div className="absolute right-3 top-3 rounded-lg bg-dark/85 px-2.5 py-1.5 text-[10px] font-semibold text-white/85 tnum">ETA 8 min</div>
      </div>

      <div className="mx-4 mt-3 rounded-2xl bg-dark-raised border border-dark-hairline p-3">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1 rounded-full bg-info-bg text-info-text px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide">New request</span>
          <div className="text-right leading-tight">
            <div className="font-display font-extrabold text-mint-dark text-[15px] tnum">$3.00</div>
            <div className="text-[9px] uppercase tracking-wide text-white/50 font-bold">Base fee</div>
          </div>
        </div>
        <div className="mt-2 grid grid-cols-[10px_1fr] gap-x-2 text-[11px]">
          <div className="flex flex-col items-center pt-1"><span className="w-2 h-2 rounded-full border border-mint-dark" /><span className="flex-1 border-l border-dashed border-white/25 my-1" /><span className="w-2 h-2 rounded-full bg-mint-dark" /></div>
          <div>
            <div className="text-white/50 text-[9px] uppercase tracking-wide font-bold">Pickup</div>
            <div className="font-semibold">Newstead Road, Harare North</div>
            <div className="text-white/50 text-[9px] uppercase tracking-wide font-bold mt-1.5">Dropoff</div>
            <div className="font-semibold">55 Newstead Road, Harare</div>
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-white/60 tnum flex items-center gap-1"><Navigation size={11} aria-hidden="true" /> 11.4 km</span>
          <span className="h-8 px-3 rounded-lg bg-mint text-ink font-display font-bold text-[12px] flex items-center">Place bid</span>
        </div>
      </div>

      <div className="mx-4 mt-3 flex items-center gap-2 text-[10px] text-white/55">
        <KeyRound size={11} aria-hidden="true" /> Buyer confirms handoff with a 4-digit PIN
      </div>
    </div>
  )
}
