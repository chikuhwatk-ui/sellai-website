import { Check, History, KeyRound, LocateFixed, Phone, ShieldCheck, Zap, ClipboardPen, ArrowLeftRight, Bike, BellRing, Send, TrendingUp, Route, Banknote, Map } from 'lucide-react'
import { useMeta } from '../hooks/useMeta'
import { Card, Container, FeatureList, IconDisc, PhoneFrame, Section, SectionHeader } from '../components/ui'
import { Reveal, Stagger, StaggerItem } from '../components/motion'
import { BuyerScreen, SellerScreen, RunnerScreen } from '../components/AppScreens'
import { DownloadSection } from '../components/DownloadSection'
import { DesktopDownloadSection } from '../components/DesktopDownloadSection'

const buyer = [
  { icon: ClipboardPen, title: 'Post your demand', body: 'What you need, one budget number, your area, and a photo if it helps. Sellers nearby see it within minutes.' },
  { icon: ArrowLeftRight, title: 'Compare offers', body: 'Each offer shows the price, the seller’s distance, and their trust score out of 100. Chat before you decide.' },
  { icon: Bike, title: 'Collect, or have it delivered', body: 'Meet the seller in person, or ask them to send it with a Sellai runner. Runners on Sellai are ID-checked and bid for the job. You watch yours live and confirm the handoff with your 4-digit PIN.' },
]

const seller = [
  { icon: BellRing, title: 'Requests come to you', body: 'When a buyer near you posts something in your categories, you get a notification. No scrolling, no guessing.' },
  { icon: Send, title: 'Send your offer', body: 'Your price and your terms. Sending costs one credit, always. Browsing is free.' },
  { icon: TrendingUp, title: 'Build a reputation that follows you', body: 'Ratings, response time and deals won feed a trust score out of 100 that buyers see on every offer.' },
]

const runner = [
  { icon: Map, title: 'See where the work is', body: 'A live heatmap shows where delivery requests are forming so you can position yourself before they land.' },
  { icon: Route, title: 'Bid, pick up, deliver', body: 'Place a bid on a request. When the seller accepts, follow the route from pickup to dropoff.' },
  { icon: Banknote, title: 'Paid in cash at handoff', body: 'The buyer pays you directly when they enter their PIN. Sellai takes 10% of the delivery fee from your wallet. Nothing to wait for.' },
]

const security = [
  { icon: ShieldCheck, title: 'Seller identity checks', body: 'Every seller submits an ID and a selfie before they can send an offer. Reviewed by a person, usually within 24 hours.' },
  { icon: Phone, title: 'Every account is a real phone number', body: 'Buyers, sellers and runners all sign in with a verified number. Buyers can add an ID check to their profile too.' },
  { icon: KeyRound, title: 'PIN-confirmed handoff', body: 'The buyer holds a 4-digit PIN. The runner cannot mark a delivery complete without it, so nothing goes missing between the two.' },
  { icon: LocateFixed, title: 'Live tracking', body: 'From pickup to dropoff the runner’s position is shared with the buyer on a map, in real time.' },
]

const oldWay = ['Search groups and marketplaces', 'Scroll through hundreds of listings', 'DM sellers, wait for replies', 'Negotiate price back and forth', 'Arrange your own transport, no updates', 'Hope it is what you ordered']
const newWay = ['Post what you need', 'Verified sellers send offers', 'Compare prices and trust scores', 'Accept the best offer', 'Collect in person, or track your runner live', 'Confirm with your PIN. Done.']

function RoleBlock({ eyebrow, title, lede, items, screen, flip = false, dark = false, tone = 'mint' as const, label }: {
  eyebrow: string; title: string; lede: string; items: typeof buyer; screen: React.ReactNode; flip?: boolean; dark?: boolean; tone?: 'mint' | 'info' | 'warning'; label: string;
}) {
  return (
    <div className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${flip ? 'lg:[&>*:first-child]:order-2' : ''}`}>
      <Reveal className="lg:col-span-5 flex justify-center">
        <PhoneFrame label={label}>{screen}</PhoneFrame>
      </Reveal>
      <div className="lg:col-span-7">
        <Reveal>
          <div className={`eyebrow mb-3 ${dark ? 'eyebrow-on-dark' : ''} ${tone === 'warning' ? 'eyebrow-runner' : ''}`}>{eyebrow}</div>
          <h2 className={`text-3xl md:text-[2.4rem] md:leading-[1.1] font-extrabold mb-3 ${dark ? 'text-white' : 'text-ink'}`}>{title}</h2>
          <p className={`text-lg leading-relaxed mb-6 ${dark ? 'text-white/70' : 'text-muted'}`}>{lede}</p>
          <FeatureList items={items} tone={tone} onDark={dark} />
        </Reveal>
      </div>
    </div>
  )
}

export default function Product() {
  useMeta('How Sellai works', 'From posting a demand to a PIN-confirmed handoff: what buyers, sellers and runners actually see in the Sellai app.', '/product')

  return (
    <main className="pt-16">
      <Section className="!pb-8 md:!pb-12">
        <Container className="text-center">
          <Reveal>
            <div className="eyebrow mb-4">How it works</div>
            <h1 className="text-[2.75rem] leading-[1.02] md:text-[4rem] font-extrabold text-ink max-w-3xl mx-auto">See how Sellai works.</h1>
            <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl mx-auto">From posting a demand to a PIN-confirmed handoff. Here is what buyers, sellers and runners actually see.</p>
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <RoleBlock eyebrow="Buyers" title="Find what you need, fast." lede="You do the asking once. The sellers do the searching." items={buyer} screen={<BuyerScreen />} tone="info" label="Buyer app showing offers arriving on a demand" />
        </Container>
      </Section>

      <Section tone="tint">
        <Container>
          <RoleBlock eyebrow="Sellers" title="Reach buyers who already want what you sell." lede="No ads, no boosting, no posting into the void. A credit is spent only when you choose to reply." items={seller} screen={<SellerScreen />} flip label="Seller app showing a matched request and the offer form" />
        </Container>
      </Section>

      <Section tone="dark">
        <Container>
          <RoleBlock eyebrow="Runners" title="Deliver where the demand is." lede="Stop waiting outside the mall. See requests forming on the map and go where the work is." items={runner} screen={<RunnerScreen />} dark tone="warning" label="Runner app showing the demand heatmap and a delivery request" />
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal><SectionHeader eyebrow="Built on trust" title="Security at every step" /></Reveal>
          <Stagger className="grid md:grid-cols-2 gap-x-12 gap-y-2">
            {security.map((s) => (
              <StaggerItem key={s.title}>
                <div className="flex gap-4 py-5 border-t border-hairline">
                  <IconDisc icon={s.icon} />
                  <div>
                    <h3 className="text-[1.05rem] font-bold text-ink mb-1">{s.title}</h3>
                    <p className="text-muted leading-relaxed text-[0.95rem]">{s.body}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section tone="tint">
        <Container>
          <Reveal><SectionHeader eyebrow="The shift" title="The old way, and the Sellai way" /></Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            <Reveal>
              <div className="rounded-[20px] border border-hairline p-7 h-full">
                <div className="flex items-center gap-3 mb-6"><IconDisc icon={History} tone="error" size="sm" /><h3 className="text-lg font-bold text-muted">The old way</h3></div>
                <ol className="list-none m-0 p-0 space-y-3">
                  {oldWay.map((s, i) => (
                    <li key={s} className="flex items-center gap-3 text-muted"><span className="w-7 h-7 rounded-full bg-page text-muted text-xs font-bold flex items-center justify-center tnum shrink-0">{i + 1}</span>{s}</li>
                  ))}
                </ol>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <Card lift className="p-7 h-full border-mint-light">
                <div className="flex items-center gap-3 mb-6"><IconDisc icon={Zap} size="sm" /><h3 className="text-lg font-bold text-primary-text">The Sellai way</h3></div>
                <ol className="list-none m-0 p-0 space-y-3">
                  {newWay.map((s) => (
                    <li key={s} className="flex items-center gap-3 text-ink font-medium"><span className="w-7 h-7 rounded-full bg-mint-100 text-primary-text flex items-center justify-center shrink-0"><Check size={14} strokeWidth={3} aria-hidden="true" /></span>{s}</li>
                  ))}
                </ol>
              </Card>
            </Reveal>
          </div>
        </Container>
      </Section>

      <DesktopDownloadSection />
      <DownloadSection tone="forest" />
    </main>
  )
}
