/**
 * The pre-launch page. Its job is anticipation without explanation: it says
 * where, it hints at what, and it collects people who want to be told first.
 * It deliberately does not describe how Sellai works.
 */
import { useEffect, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ArrowRight, Check, MapPin, MessageCircle } from 'lucide-react'
import { useMeta } from '../hooks/useMeta'
import { EASE } from '../components/ease'
import { CONTACT_EMAIL } from '../constants/downloads'
import { envValue } from '../config/siteMode'

const WANTS = ['a phone', 'a dress for Saturday', 'a plumber', 'a birthday cake', 'school shoes', 'a sofa', 'a mechanic', 'a laptop charger']

const WAITLIST_ENDPOINT = envValue(import.meta.env.VITE_WAITLIST_ENDPOINT)
const WHATSAPP = envValue(import.meta.env.VITE_WHATSAPP_NUMBER).replace(/[^\d]/g, '')

function Rings() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 w-[min(90vw,720px)] aspect-square">
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className="ring" style={{ animationDelay: `${i * 1.4}s` }} />
        ))}
      </div>
    </div>
  )
}

export default function ComingSoon() {
  useMeta('Sellai · Coming soon to Harare', 'Whatever you are looking for is closer than you think. Something new is coming to the way Harare buys and sells. Be the first to know.', '/')
  const reduce = useReducedMotion()
  const [i, setI] = useState(0)
  const [state, setState] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')

  useEffect(() => {
    if (reduce) return
    const id = setInterval(() => setI((n) => (n + 1) % WANTS.length), 2200)
    return () => clearInterval(id)
  }, [reduce])

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const contact = String(new FormData(form).get('contact') || '').trim()
    if (!contact) return
    if (!WAITLIST_ENDPOINT) {
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Tell me first')}&body=${encodeURIComponent(`Please let me know when Sellai opens.\n\nReach me on: ${contact}`)}`
      setState('done')
      return
    }
    setState('sending')
    try {
      const res = await fetch(WAITLIST_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ contact, source: 'coming-soon', city: 'Harare' }),
      })
      setState(res.ok ? 'done' : 'error')
    } catch {
      setState('error')
    }
  }

  const fade = reduce ? {} : { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 } }

  return (
    <main className="relative min-h-[100svh] bg-forest-deep text-white flex flex-col overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_35%,rgba(30,194,122,0.22),transparent_70%),linear-gradient(180deg,#0B3F2E_0%,#08301F_60%,#06261A_100%)]" aria-hidden="true" />
      <Rings />

      <header className="relative z-10 flex items-center justify-between px-6 md:px-10 h-16">
        <span className="font-display text-[1.45rem] font-extrabold tracking-[-0.03em] text-mint-dark">Sellai</span>
        <span className="eyebrow eyebrow-on-dark flex items-center gap-1.5"><MapPin size={12} aria-hidden="true" /> Harare, Zimbabwe</span>
      </header>

      <section className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 pb-12">
        <motion.div {...fade} transition={{ duration: 0.8, ease: EASE }} className="eyebrow eyebrow-on-dark mb-6">Coming soon</motion.div>

        <motion.h1 {...fade} transition={{ duration: 0.8, delay: 0.1, ease: EASE }} className="font-display font-extrabold text-[2.6rem] leading-[1.05] md:text-[4.6rem] max-w-4xl">
          Whatever you're looking for,
          <span className="block h-[1.15em] overflow-hidden" aria-live="polite">
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={WANTS[i]}
                initial={reduce ? false : { y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: '-100%', opacity: 0 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="block text-mint"
              >
                {WANTS[i]},
              </motion.span>
            </AnimatePresence>
          </span>
          is closer than you think.
        </motion.h1>

        <motion.p {...fade} transition={{ duration: 0.8, delay: 0.25, ease: EASE }} className="mt-7 text-lg md:text-xl text-white/70 leading-relaxed max-w-xl">
          Something new is coming to the way Harare buys and sells. Built here, for here. We will open the doors soon. Be the first through them.
        </motion.p>

        <motion.div {...fade} transition={{ duration: 0.8, delay: 0.4, ease: EASE }} className="mt-9 w-full max-w-md">
          {state === 'done' ? (
            <div className="rounded-2xl bg-white/10 border border-white/15 px-5 py-4 flex items-center gap-3 text-left">
              <span className="w-9 h-9 rounded-full bg-mint text-ink flex items-center justify-center shrink-0"><Check size={18} strokeWidth={3} aria-hidden="true" /></span>
              <div>
                <div className="font-display font-bold">You're on the list.</div>
                <div className="text-sm text-white/65">{WAITLIST_ENDPOINT ? 'One message when we open. Nothing else.' : 'Send the email that just opened and you are in.'}</div>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-2">
              <label htmlFor="contact" className="sr-only">Your phone number or email</label>
              <input
                id="contact"
                name="contact"
                type="text"
                required
                autoComplete="tel"
                inputMode="text"
                placeholder="Phone number or email"
                className="flex-1 h-14 rounded-[12px] bg-white/10 border border-white/20 px-5 text-white placeholder:text-white/45 focus:outline-none focus:border-mint focus:ring-2 focus:ring-mint/30 transition-[border-color,box-shadow]"
              />
              <button
                type="submit"
                disabled={state === 'sending'}
                className="h-14 px-6 rounded-[12px] bg-mint text-ink font-display font-bold inline-flex items-center justify-center gap-2 hover:bg-mint-edge active:translate-y-px transition-[background-color,transform] disabled:opacity-70 whitespace-nowrap"
              >
                {state === 'sending' ? 'One moment' : 'Tell me first'} <ArrowRight size={18} strokeWidth={2.5} aria-hidden="true" />
              </button>
            </form>
          )}
          <p className="mt-3 text-sm text-white/50">
            {state === 'error' ? 'That did not go through. Try again, or email us below.' : 'One message when we open. No spam, ever.'}
          </p>
          {WHATSAPP && state !== 'done' && (
            <a href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hi Sellai, tell me first when you open.')}`} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-mint-dark hover:underline underline-offset-4">
              <MessageCircle size={16} aria-hidden="true" /> Or say hello on WhatsApp
            </a>
          )}
        </motion.div>

        <motion.p {...fade} transition={{ duration: 0.8, delay: 0.55, ease: EASE }} className="mt-14 text-sm text-white/55 max-w-md">
          Sell things, or make deliveries around Harare? We are onboarding a small group of early partners.{' '}
          <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Early partner')}`} className="text-mint-dark font-semibold hover:underline underline-offset-4">Write to us.</a>
        </motion.p>
      </section>

      <footer className="relative z-10 px-6 md:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/45">
        <span>&copy; {new Date().getFullYear()} Sellai (Pvt) Ltd</span>
        <div className="flex items-center gap-5">
          <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white transition-colors">{CONTACT_EMAIL}</a>
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
        </div>
      </footer>
    </main>
  )
}
