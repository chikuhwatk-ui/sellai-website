import { ArrowRight, BadgeCheck, BellRing, Check, Coins, Eye, Filter, Gift, LayoutGrid, LockOpen, MessageCircle, Send, Truck, UserPlus, X, Infinity as InfinityIcon, Target } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { useMeta } from '../hooks/useMeta'
import { Button, Card, Container, IconDisc, PhoneFrame, Pill, Section, SectionHeader } from '../components/ui'
import { Reveal, Stagger, StaggerItem } from '../components/motion'
import { EASE } from '../components/ease'
import { SellerScreen } from '../components/AppScreens'
import { DownloadSection } from '../components/DownloadSection'
import { DesktopDownloadSection } from '../components/DesktopDownloadSection'

const pains = [
  'Relying on word of mouth and hoping customers find you',
  'Paying for social media ads that reach the wrong people',
  'Losing sales because nearby buyers don’t know you exist',
  'Hours in group chats with no idea who is actually buying',
]

const upgrade = [
  { icon: Eye, old: 'You post and hope someone sees it', now: 'Buyers post demands. You reply to people already looking.' },
  { icon: Filter, old: 'Spam drowns out your offers', now: 'Credits keep the noise out. Only serious sellers reply.' },
  { icon: Truck, old: 'No delivery, the buyer arranges pickup', now: 'Book a runner from the chat. The buyer pays them at handoff.' },
  { icon: BadgeCheck, old: 'No trust signal, you are one of thousands', now: 'A verified rosette and a trust score buyers see on every offer.' },
]

const steps = [
  { n: '01', icon: UserPlus, title: 'Register', body: 'Your phone number and what you sell. Under two minutes.' },
  { n: '02', icon: LayoutGrid, title: 'Pick your product types', body: 'Choose the categories and tags that match your stock. This is what buyers’ demands are matched against.' },
  { n: '03', icon: BellRing, title: 'Get notified', body: 'When a buyer near you posts something in your categories, it lands on your phone.' },
  { n: '04', icon: Send, title: 'Send an offer', body: 'Your price, your terms, one credit. Chat with the buyer and close the deal.' },
]

const creditFacts = [
  { icon: Coins, title: '1 credit = 1 offer', body: 'When a request matches what you sell, spend one credit to reply with your price and terms. Never more than one.' },
  { icon: InfinityIcon, title: 'Credits never expire', body: 'Product-type slots give you 30 days of matching per bundle. Renew only when you choose. No auto-renewals, ever.' },
  { icon: Target, title: 'Browse free, pay to reply', body: 'You see every matching request for free. A credit is only spent when you decide a request is worth it.' },
  { icon: LayoutGrid, title: 'Slots control your reach', body: 'A slot is one product type you sell in: phones, dresses, plumbing. More slots, more requests matched to you.' },
]

/* Bundle catalogue from backend/prisma/migrations/20260418100000_add_bundle_table */
const bundles = [
  { name: 'Free trial', price: 'Free', credits: 5, slots: '3 product types', per: null, body: 'See real requests before you spend anything.', cta: 'Start free', featured: false },
  { name: 'Starter', price: '$7', credits: 15, slots: '5 product types', per: '$0.47', body: 'Try it properly for a month.', cta: 'Get credits', featured: false },
  { name: 'Pro Dealer', price: '$20', credits: 50, slots: '15 product types', per: '$0.40', body: 'Best value for a growing shop.', cta: 'Get Pro Dealer', featured: true },
  { name: 'Market Mover', price: '$45', credits: 150, slots: '40 product types', per: '$0.30', body: 'For sellers replying every day.', cta: 'Get credits', featured: false },
  { name: 'Big Boss', price: '$120', credits: 500, slots: 'Unlimited product types', per: '$0.24', body: 'Every category, maximum reach.', cta: 'Get credits', featured: false },
]

/* The 21 top-level categories seeded in backend/prisma/seed-categories.ts */
const categories = ['Electronics', 'Fashion', 'Home & Living', 'Food & Drinks', 'Vehicles', 'Health & Beauty', 'Sports & Outdoors', 'Books & Media', 'Toys & Kids', 'Pets & Animals', 'Office & Stationery', 'Beauty & Grooming', 'Home Services', 'Repair & Maintenance', 'Professional Services', 'Tech & Digital', 'Education & Training', 'Events & Catering', 'Transport & Logistics', 'Construction & Building', 'Agriculture & Farming']

const verificationBenefits = [
  { icon: LockOpen, title: 'Unlocks sending offers', body: 'Verification is required before you can reply to any request. It is what takes you from browsing to winning deals.' },
  { icon: BadgeCheck, title: 'The rosette on your profile', body: 'Buyers see the verified rosette on your profile and next to your name in every chat.' },
  { icon: MessageCircle, title: 'Buyers only see verified sellers', body: 'Every offer a buyer compares comes from an ID-checked seller. You are in that group, or you are not in the running.' },
]

function VerifiedProfileMock() {
  return (
    <Card lift className="p-6 max-w-sm mx-auto">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-forest text-white font-display font-extrabold flex items-center justify-center text-lg">KE</div>
        <div className="min-w-0">
          <div className="flex items-center gap-1.5 font-display font-bold text-ink text-lg">Kuzz Electronics <BadgeCheck size={18} className="text-primary-text" aria-label="Verified" /></div>
          <div className="text-sm text-muted">Electronics · Mobile phones · Avondale</div>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-2 text-center">
        {[['Trust', '84/100'], ['Deals won', '37'], ['Replies in', '12 min']].map(([k, v]) => (
          <div key={k} className="rounded-xl bg-page py-2.5">
            <div className="text-[10px] uppercase tracking-[0.08em] text-faint font-bold">{k}</div>
            <div className="font-display font-extrabold text-ink tnum">{v}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-xl bg-mint-50 border border-mint-light px-4 py-3 flex items-center gap-3">
        <BadgeCheck size={18} className="text-primary-text shrink-0" aria-hidden="true" />
        <div className="text-sm"><span className="font-semibold text-ink">Identity confirmed.</span> <span className="text-muted">Reviewed by the Sellai team.</span></div>
      </div>
    </Card>
  )
}

export default function ForSellers() {
  useMeta('Sellai for sellers', 'Get notified the moment a buyer near you wants what you sell. Browse free, spend one credit to reply. Start with 5 free credits.', '/for-sellers')
  const reduce = useReducedMotion()

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[560px] bg-[radial-gradient(60%_60%_at_75%_20%,rgba(30,194,122,0.16),transparent_70%)] pointer-events-none" aria-hidden="true" />
        <Container className="relative grid lg:grid-cols-12 gap-10 items-center pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="lg:col-span-7">
            <Stagger onLoad>
              <StaggerItem><div className="eyebrow mb-4">For sellers</div></StaggerItem>
              <StaggerItem>
                <h1 className="text-[2.75rem] leading-[1.02] md:text-[4rem] font-extrabold text-ink">
                  Grow where demand is <span className="text-primary-text">already looking for you.</span>
                </h1>
              </StaggerItem>
              <StaggerItem>
                <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-[34rem]">
                  Ads sell impressions. Group chats bury your message in seconds. On Sellai you are notified the moment a buyer posts exactly what you sell. All you have to do is reply.
                </p>
              </StaggerItem>
              <StaggerItem>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Button href="#download" variant="mint" size="lg">Start free</Button>
                  <Button href="#how-it-works" variant="ghost" size="lg" icon={ArrowRight}>See how it works</Button>
                </div>
                <p className="mt-3 text-sm text-muted">5 free credits · 3 product types · no card needed</p>
              </StaggerItem>
            </Stagger>
          </div>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <PhoneFrame label="Seller app showing a matched request and the offer form"><SellerScreen /></PhoneFrame>
          </motion.div>
        </Container>
      </section>

      {/* Problem */}
      <Section>
        <Container>
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="eyebrow mb-3">The problem</div>
                <h2 className="text-3xl md:text-[2.6rem] md:leading-[1.1] font-extrabold text-ink">Struggling to find customers?</h2>
                <p className="mt-4 text-lg text-muted leading-relaxed">For Zimbabwean sellers, reaching the right buyer is harder than it should be. The usual tools cost time and money and tell you nothing about who is actually buying.</p>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Stagger>
                {pains.map((p) => (
                  <StaggerItem key={p}>
                    <div className="flex items-center gap-4 py-4 border-t border-hairline">
                      <span className="w-8 h-8 rounded-full bg-error-bg text-error-text flex items-center justify-center shrink-0"><X size={15} strokeWidth={3} aria-hidden="true" /></span>
                      <p className="text-ink font-medium">{p}</p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </Container>
      </Section>

      {/* Upgrade */}
      <Section tone="tint">
        <Container>
          <Reveal><SectionHeader eyebrow="The upgrade" title="Why groups and marketplaces aren't enough" /></Reveal>
          <Stagger className="grid md:grid-cols-2 gap-x-12 gap-y-2">
            {upgrade.map((u) => (
              <StaggerItem key={u.now}>
                <div className="flex gap-4 py-5 border-t border-hairline">
                  <IconDisc icon={u.icon} />
                  <div>
                    <p className="text-sm text-muted line-through decoration-error/50 mb-1">{u.old}</p>
                    <p className="text-ink font-semibold">{u.now}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* Steps */}
      <Section id="how-it-works">
        <Container>
          <Reveal><SectionHeader eyebrow="How it works" title="Four steps to your next sale" /></Reveal>
          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
            {steps.map((s) => (
              <StaggerItem key={s.n}>
                <div className="border-t-2 border-forest pt-5">
                  <div className="flex items-center justify-between mb-3">
                    <IconDisc icon={s.icon} size="sm" />
                    <span className="font-display text-sm font-extrabold text-primary-text tnum">{s.n}</span>
                  </div>
                  <h3 className="text-lg font-bold text-ink mb-2">{s.title}</h3>
                  <p className="text-muted leading-relaxed text-[0.95rem]">{s.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* Credits */}
      <Section tone="tint">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="eyebrow mb-3">Credits</div>
                <h2 className="text-3xl md:text-[2.6rem] md:leading-[1.1] font-extrabold text-ink">How credits work</h2>
                <p className="mt-4 text-lg text-muted leading-relaxed">You never pay to look. You pay a small amount to reply, and only when you think a request is worth it.</p>
                <div className="mt-8 rounded-[20px] bg-forest text-white p-6">
                  <div className="eyebrow eyebrow-on-dark mb-3">Bundles at a glance</div>
                  <ul className="list-none m-0 p-0 divide-y divide-white/10">
                    {bundles.slice(1).map((b) => (
                      <li key={b.name} className="flex items-center justify-between py-2.5 text-sm">
                        <span className="font-semibold">{b.name}</span>
                        <span className="text-white/70 tnum">{b.credits} credits · {b.slots.replace(' product types', ' slots')}</span>
                        <span className="font-display font-extrabold tnum">{b.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Stagger>
                {creditFacts.map((c) => (
                  <StaggerItem key={c.title}>
                    <div className="flex gap-4 py-5 border-t border-hairline">
                      <IconDisc icon={c.icon} />
                      <div>
                        <h3 className="text-[1.05rem] font-bold text-ink mb-1">{c.title}</h3>
                        <p className="text-muted leading-relaxed text-[0.95rem]">{c.body}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </Container>
      </Section>

      {/* Categories */}
      <Section tone="dark">
        <Container>
          <Reveal><SectionHeader onDark eyebrow="What sellers list" title="Twenty-one categories, hundreds of product types" lede="Physical goods and services. If people in Harare buy it, there is a place for it on Sellai." /></Reveal>
          <Stagger className="flex flex-wrap justify-center gap-2.5">
            {categories.map((c) => (
              <StaggerItem key={c}>
                <span className="inline-block rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85">{c}</span>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* Verification */}
      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal><VerifiedProfileMock /></Reveal>
            <Reveal delay={0.1}>
              <div className="eyebrow mb-3">Verification</div>
              <h2 className="text-3xl md:text-[2.6rem] md:leading-[1.1] font-extrabold text-ink mb-3">Stand out as a trusted seller</h2>
              <p className="text-lg text-muted leading-relaxed mb-6">One ID photo and one selfie. Reviewed by a person, usually within 24 hours.</p>
              <ul className="list-none m-0 p-0">
                {verificationBenefits.map((b) => (
                  <li key={b.title} className="flex gap-4 py-4 border-t border-hairline">
                    <IconDisc icon={b.icon} />
                    <div>
                      <h3 className="text-[1.05rem] font-bold text-ink mb-1">{b.title}</h3>
                      <p className="text-muted leading-relaxed text-[0.95rem]">{b.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Free trial */}
      <Section tone="tint" className="!py-12">
        <Container narrow>
          <Reveal>
            <div className="rounded-[20px] bg-forest text-white p-8 md:p-10 flex flex-col md:flex-row items-center gap-6">
              <IconDisc icon={Gift} tone="dark" size="lg" />
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-extrabold mb-2">See real buyers before you spend anything.</h3>
                <p className="text-white/70 leading-relaxed">Every new seller starts with 3 product-type slots and 5 free credits. Browse real requests, reply to a few, and upgrade only once Sellai has proved itself.</p>
              </div>
              <Button href="#download" variant="mint" size="lg">Start free</Button>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Pricing */}
      <Section>
        <Container>
          <Reveal><SectionHeader eyebrow="Pricing" title="Bundles for every size of seller" lede="Each bundle includes offer credits and 30 days of product-type slots. Credits never expire. No auto-renewals, no surprise charges." /></Reveal>
          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 items-stretch">
            {bundles.map((b) => (
              <StaggerItem key={b.name} className="h-full">
                <div className={`h-full rounded-[20px] p-6 flex flex-col ${b.featured ? 'bg-forest text-white shadow-[var(--shadow-lift)]' : 'bg-surface border border-hairline'}`}>
                  <div className="min-h-[22px] mb-2">
                    {b.featured && <Pill tone="dark">Best value</Pill>}
                    {b.price === 'Free' && <Pill>No card</Pill>}
                  </div>
                  <h3 className={`font-display font-bold text-lg mb-3 ${b.featured ? 'text-white' : 'text-ink'}`}>{b.name}</h3>
                  <div className={`font-display text-[2.5rem] leading-none font-extrabold tnum ${b.featured ? 'text-white' : 'text-ink'}`}>{b.price}</div>
                  <p className={`mt-3 text-sm ${b.featured ? 'text-white/70' : 'text-muted'}`}>{b.body}</p>
                  <ul className={`mt-4 mb-6 space-y-1.5 text-sm list-none m-0 p-0 ${b.featured ? 'text-white/85' : 'text-ink'}`}>
                    <li className="flex items-center gap-2 tnum whitespace-nowrap"><Check size={14} strokeWidth={3} className={b.featured ? 'text-mint-dark' : 'text-primary-text'} aria-hidden="true" />{b.credits} credits</li>
                    <li className="flex items-center gap-2"><Check size={14} strokeWidth={3} className={b.featured ? 'text-mint-dark' : 'text-primary-text'} aria-hidden="true" />{b.slots}</li>
                    {b.per && <li className={`pl-[22px] text-xs tnum ${b.featured ? 'text-white/55' : 'text-muted'}`}>{b.per} per credit</li>}
                  </ul>
                  <div className="mt-auto">
                    <Button href="#download" variant={b.featured ? 'mint' : 'forest'} className="w-full">{b.cta}</Button>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal><p className="text-center text-sm text-muted mt-8">Pay with EcoCash or card through Paynow, inside the app.</p></Reveal>
        </Container>
      </Section>

      <DesktopDownloadSection variant="compact" />
      <DownloadSection tone="forest" heading="Ready to meet your next customer?" lede="Download the app, add what you sell, and reply to your first request with a free credit." />
    </main>
  )
}
