import { ArrowRight, BadgeCheck, Bike, Check, ClipboardPen, Handshake, KeyRound, LocateFixed, MapPin, Megaphone, MessageSquareOff, Minus, Navigation, Radio, ShieldCheck, Sparkles, Store, TrendingUp, X, MapPinOff, Phone, Tags } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { useMeta } from '../hooks/useMeta'
import { Button, Card, Container, FeatureList, IconDisc, PhoneFrame, Section, SectionHeader } from '../components/ui'
import { Reveal, Stagger, StaggerItem } from '../components/motion'
import { EASE } from '../components/ease'
import { BuyerScreen, SellerScreen } from '../components/AppScreens'
import { DownloadSection } from '../components/DownloadSection'
import { DesktopDownloadSection } from '../components/DesktopDownloadSection'

const steps = [
  { n: '01', title: 'Post a demand', body: 'Say what you need, your budget and where you are. Add a photo if it helps. Takes under a minute.' },
  { n: '02', title: 'Sellers send offers', body: 'Verified sellers near you who stock what you asked for get notified and reply with a price.' },
  { n: '03', title: 'Choose and close', body: 'Pick the offer you like. Meet the seller to collect, or ask them to send it with a Sellai runner. You track the runner live and confirm the handoff with your PIN.' },
]

/* Buyer-side benefits. Each one maps to something an offer really carries:
   price, seller distance, trust score and rosette, chat, and the collect-or-deliver choice. */
const choosing = [
  { icon: Tags, title: 'Real prices, up front', body: 'Every offer comes with a price. No “DM for price”, no guessing, no chasing.' },
  { icon: Navigation, title: 'Sellers near you, not across the country', body: 'Offers come from sellers close enough to collect from today. You see the distance on each one.' },
  { icon: TrendingUp, title: 'Compare before you commit', body: 'Price, distance and trust score side by side. Chat with any seller before you say yes.' },
  { icon: Handshake, title: 'Your call on how it ends', body: 'Meet the seller and collect, or have a Sellai runner bring it. You never arrange transport yourself, and you confirm the handoff with your PIN.' },
]

const trust = [
  { icon: ShieldCheck, title: 'Seller ID checks', body: 'Every seller passes an identity check before they can send a single offer.' },
  { icon: Phone, title: 'Every account is a real phone number', body: 'Buyers, sellers and runners all sign in with a verified number. No anonymous accounts.' },
  { icon: KeyRound, title: 'PIN-secured handoff', body: 'Only you hold the 4-digit PIN. The runner cannot close the delivery without it.' },
  { icon: LocateFixed, title: 'Live runner tracking', body: 'Every runner is on Sellai, ID-checked and rated. Watch yours move on a map from pickup to your door.' },
]

const roles = [
  { icon: ClipboardPen, tone: 'info' as const, title: 'Buyers', body: 'Post what you need once. Compare real offers from verified sellers nearby. Collect, or get it delivered.', link: '/product', cta: 'How it works' },
  { icon: Store, tone: 'mint' as const, title: 'Sellers', body: 'Get notified the moment a buyer near you wants what you sell. Spend a credit only when you choose to reply.', link: '/for-sellers', cta: 'Start free' },
  { icon: Bike, tone: 'warning' as const, title: 'Runners', body: 'See delivery requests forming around you before you leave home. Get paid in cash at handoff.', link: '/for-runners', cta: 'Become a runner' },
]

const valueProps = [
  { icon: Megaphone, title: 'Post once, get offers', body: 'No more posting in 20 groups and being ignored. Sellers come to you with real prices. No “DM for price”.' },
  { icon: Radio, title: 'Real demand only', body: 'Every buyer on Sellai is actively looking. Sellers reply to people who already want what they sell.' },
  { icon: LocateFixed, title: 'Delivery inside the app', body: 'Ask the seller to send it with a Sellai runner. Verified runners bid for the job, you watch the delivery live, and nothing leaves the app.' },
  { icon: BadgeCheck, title: 'Accountable on both sides', body: 'Sellers are ID-checked. Every account is a real phone number. Ratings follow people around.' },
]

const pains = [
  { icon: MessageSquareOff, headline: 'Seen. Ignored. Out of stock.', body: 'You find a listing, DM the seller, wait, and finally hear “sold out” two days later. Time wasted, still empty-handed.' },
  { icon: TrendingUp, headline: 'Paid for reach. Got nothing.', body: 'You boosted the post, watched the impressions climb, and waited. Not a single serious buyer. Just numbers on a screen.' },
  { icon: MapPinOff, headline: 'Order placed. Runner vanished.', body: 'The seller says it is on the way. You are waiting outside. Nobody knows where the runner is or when they will arrive.' },
]

type Mark = true | false | 'partial'
const comparisons: { feature: string; groups: Mark; social: Mark; sellai: Mark }[] = [
  { feature: 'Sellers notified the moment you post', groups: false, social: false, sellai: true },
  { feature: 'ID-checked sellers', groups: false, social: false, sellai: true },
  { feature: 'Every account a verified phone number', groups: false, social: 'partial', sellai: true },
  { feature: 'Runner delivery with live tracking', groups: false, social: false, sellai: true },
  { feature: 'PIN-confirmed handoff', groups: false, social: false, sellai: true },
  { feature: 'Spam and scam filtering', groups: false, social: 'partial', sellai: true },
  { feature: 'Trust scores and ratings', groups: false, social: 'partial', sellai: true },
  { feature: 'Prices up front, no “DM for price”', groups: false, social: false, sellai: true },
]

function MarkCell({ v }: { v: Mark }) {
  if (v === true) return <span className="inline-flex w-7 h-7 rounded-full bg-mint-100 text-primary-text items-center justify-center"><Check size={15} strokeWidth={3} aria-label="Yes" /></span>
  if (v === 'partial') return <span className="inline-flex w-7 h-7 rounded-full bg-warning-bg text-warning-text items-center justify-center"><Minus size={15} strokeWidth={3} aria-label="Partly" /></span>
  return <span className="inline-flex w-7 h-7 rounded-full bg-page text-faint items-center justify-center"><X size={15} strokeWidth={2.5} aria-label="No" /></span>
}

export default function Home() {
  useMeta('Sellai · Post what you need. Get offers in minutes.', 'Sellai introduces buyers to verified local sellers in Zimbabwe. Post what you need once, compare real offers, then collect in person or have a Sellai runner bring it with a PIN-secured handoff.', '/')
  const reduce = useReducedMotion()

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[560px] bg-[radial-gradient(60%_60%_at_70%_20%,rgba(30,194,122,0.16),transparent_70%)] pointer-events-none" aria-hidden="true" />
        <Container className="relative grid lg:grid-cols-12 gap-10 items-center pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="lg:col-span-6">
            <Stagger onLoad>
              <StaggerItem><div className="eyebrow mb-4 flex items-center gap-2"><MapPin size={13} aria-hidden="true" /> Built in Harare, Zimbabwe</div></StaggerItem>
              <StaggerItem>
                <h1 className="text-[2.75rem] leading-[1.02] md:text-[4rem] font-extrabold text-ink">
                  Post what you need.<br />
                  <span className="text-primary-text">Get offers in minutes.</span>
                </h1>
              </StaggerItem>
              <StaggerItem>
                <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-[34rem]">
                  Tell Sellai what you are looking for. Verified sellers near you reply with real prices. Collect in person, or have a Sellai runner bring it to your door.
                </p>
              </StaggerItem>
              <StaggerItem>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Button href="#download" variant="mint" size="lg">Get the app</Button>
                  <Button to="/product" variant="ghost" size="lg" icon={ArrowRight}>See how it works</Button>
                </div>
              </StaggerItem>
              <StaggerItem>
                <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted list-none p-0 m-0">
                  {['Free for buyers', 'ID-checked sellers', 'PIN-secured delivery'].map((t) => (
                    <li key={t} className="flex items-center gap-1.5"><Check size={15} className="text-primary-text" strokeWidth={3} aria-hidden="true" />{t}</li>
                  ))}
                </ul>
              </StaggerItem>
            </Stagger>
          </div>

          <div className="lg:col-span-6 relative flex justify-center lg:justify-end min-h-[640px]">
            <motion.div
              initial={reduce ? false : { opacity: 0, x: 40, rotate: 4 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
              className="hidden lg:block absolute right-[262px] top-6 scale-[0.86] origin-top-right opacity-90"
            >
              <PhoneFrame label="Seller app showing a matched request"><SellerScreen /></PhoneFrame>
            </motion.div>
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
              className="relative"
            >
              <PhoneFrame label="Buyer app showing offers arriving on a demand"><BuyerScreen /></PhoneFrame>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Three steps */}
      <Section>
        <Container>
          <Reveal><SectionHeader eyebrow="How it works" title="Three steps. No haggling in the dark." /></Reveal>
          <Stagger className="grid md:grid-cols-3 gap-x-10 gap-y-8">
            {steps.map((s) => (
              <StaggerItem key={s.n}>
                <div className="border-t-2 border-forest pt-5">
                  <div className="font-display text-sm font-extrabold text-primary-text tnum mb-3">{s.n}</div>
                  <h3 className="text-xl font-bold text-ink mb-2">{s.title}</h3>
                  <p className="text-muted leading-relaxed">{s.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* Matching + trust */}
      <Section tone="tint" className="!pt-0 md:!pt-0">
        <Container className="pt-20 md:pt-28">
          <Reveal><SectionHeader eyebrow="Why Sellai" title="You choose. Sellers compete. Every step is protected." /></Reveal>
          <div className="grid lg:grid-cols-2 gap-6">
            <Reveal>
              <Card className="p-8 h-full">
                <IconDisc icon={Sparkles} size="lg" className="mb-5" />
                <h3 className="text-2xl font-bold text-ink mb-2">The offers come to you</h3>
                <p className="text-muted leading-relaxed mb-4">You post once. The sellers who actually stock what you asked for reply with real prices, and you pick the one you like.</p>
                <FeatureList items={choosing} />
              </Card>
            </Reveal>
            <Reveal delay={0.1}>
              <Card className="p-8 h-full">
                <IconDisc icon={ShieldCheck} size="lg" className="mb-5" />
                <h3 className="text-2xl font-bold text-ink mb-2">Trust you can check</h3>
                <p className="text-muted leading-relaxed mb-4">Nothing on Sellai relies on a stranger's word. Identity, location and the handoff are all verified.</p>
                <FeatureList items={trust} />
              </Card>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Roles */}
      <Section>
        <Container>
          <Reveal><SectionHeader eyebrow="For every side of a deal" title="Buyers, sellers and runners. One app." /></Reveal>
          <Stagger className="grid md:grid-cols-3 gap-6">
            {roles.map((r) => (
              <StaggerItem key={r.title}>
                <motion.div whileHover={reduce ? undefined : { y: -4 }} transition={{ duration: 0.25, ease: EASE }} className="h-full">
                  <Card className="p-7 h-full flex flex-col">
                    <IconDisc icon={r.icon} tone={r.tone} size="lg" className="mb-5" />
                    <h3 className="text-xl font-bold text-ink mb-2">{r.title}</h3>
                    <p className="text-muted leading-relaxed flex-1">{r.body}</p>
                    <div className="mt-6"><Button to={r.link} variant="link">{r.cta} <ArrowRight size={16} aria-hidden="true" /></Button></div>
                  </Card>
                </motion.div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* Dark band */}
      <Section tone="dark">
        <Container>
          <Reveal><SectionHeader onDark eyebrow="The difference" title="What group chats and social marketplaces can't give you" lede="They got local buying and selling started. Sellai is where it grows up." /></Reveal>
          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
            {valueProps.map((v) => (
              <StaggerItem key={v.title}>
                <div className="border-t border-white/15 pt-5">
                  <IconDisc icon={v.icon} tone="dark" className="mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">{v.title}</h3>
                  <p className="text-white/65 text-[0.95rem] leading-relaxed">{v.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* Pain points */}
      <Section>
        <Container>
          <Reveal><SectionHeader eyebrow="Sound familiar?" title="We've all been there." /></Reveal>
          <Stagger className="grid md:grid-cols-3 gap-x-10 gap-y-8">
            {pains.map((p) => (
              <StaggerItem key={p.headline}>
                <IconDisc icon={p.icon} tone="error" className="mb-4" />
                <h3 className="text-lg font-extrabold text-ink mb-2">{p.headline}</h3>
                <p className="text-muted leading-relaxed">{p.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal><p className="text-center text-ink font-semibold text-lg mt-12">Sellai was built to fix exactly this.</p></Reveal>
        </Container>
      </Section>

      {/* Comparison */}
      <Section tone="tint" className="!pt-0 md:!pt-0">
        <Container narrow className="pt-20 md:pt-28">
          <Reveal><SectionHeader eyebrow="Side by side" title="You already use these. Here's what Sellai adds." /></Reveal>
          <Reveal>
            <Card className="p-2 md:p-4 overflow-x-auto">
              <table className="w-full min-w-[540px] border-collapse text-[0.95rem]">
                <thead>
                  <tr>
                    <th className="text-left font-normal p-3" />
                    <th className="p-3 text-xs font-bold uppercase tracking-[0.08em] text-muted text-center">Group chats</th>
                    <th className="p-3 text-xs font-bold uppercase tracking-[0.08em] text-muted text-center">Social marketplaces</th>
                    <th className="p-3 text-xs font-bold uppercase tracking-[0.08em] text-primary-text text-center">Sellai</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((row) => (
                    <tr key={row.feature} className="border-t border-hairline">
                      <td className="p-3 font-medium text-ink">{row.feature}</td>
                      <td className="p-3 text-center"><MarkCell v={row.groups} /></td>
                      <td className="p-3 text-center"><MarkCell v={row.social} /></td>
                      <td className="p-3 text-center"><MarkCell v={row.sellai} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
          </Reveal>
        </Container>
      </Section>

      <DownloadSection tone="forest" heading="Ready to try Sellai?" lede="Free to download. Post your first demand in under a minute and see who replies." />
      <DesktopDownloadSection variant="compact" />
    </main>
  )
}
