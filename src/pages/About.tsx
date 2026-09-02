import { Code, Eye, Globe, MapPin, Rocket, ShieldCheck, Store, Users } from 'lucide-react'
import { useMeta } from '../hooks/useMeta'
import { Button, Container, IconDisc, Section, SectionHeader } from '../components/ui'
import { Reveal, Stagger, StaggerItem } from '../components/motion'
import { DownloadSection } from '../components/DownloadSection'

const values = [
  { icon: ShieldCheck, title: 'Trust', body: 'Seller identity checks, PIN-confirmed handoffs, and ratings that follow people around.' },
  { icon: Eye, title: 'Transparency', body: 'Prices up front, live tracking, and honest reviews so every side knows where they stand.' },
  { icon: MapPin, title: 'Local first', body: 'Built for the neighbourhoods we serve. Matching by distance keeps money in the community.' },
  { icon: Users, title: 'Inclusion', body: 'A phone number is enough to start. No shop, no website, no marketing budget required.' },
]

const team = [
  { icon: Code, title: 'Engineering', body: 'The backend, the phone app, the matching engine and the delivery flow were built from scratch in Zimbabwe.' },
  { icon: Store, title: 'Commerce', body: 'We have sold in WhatsApp groups, listed on Facebook and haggled at markets. We know the pain because we have lived it.' },
  { icon: Globe, title: 'Local roots', body: 'Every decision is shaped by the ground here: Paynow over Stripe, EcoCash over Apple Pay, a PIN over a signature.' },
]

export default function About() {
  useMeta('About Sellai', 'Sellai is built in Harare by a Zimbabwean team to make local buying and selling transparent, competitive and trustworthy.', '/about')

  return (
    <main className="pt-16">
      <section className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(30,194,122,0.14),transparent_70%)] pointer-events-none" aria-hidden="true" />
        <Container className="relative pt-16 pb-12 md:pt-24 md:pb-16">
          <Stagger onLoad className="max-w-3xl">
            <StaggerItem><div className="eyebrow mb-4">About Sellai</div></StaggerItem>
            <StaggerItem>
              <h1 className="text-[2.75rem] leading-[1.02] md:text-[4rem] font-extrabold text-ink">
                Local commerce, <span className="text-primary-text">with the guesswork taken out.</span>
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
                We are building the tools that let a buyer and a seller two blocks apart actually find each other, agree a price, and hand over the goods safely. Starting in Harare.
              </p>
            </StaggerItem>
          </Stagger>
        </Container>
      </section>

      <Section className="!pt-0">
        <Container>
          <div className="grid lg:grid-cols-12 gap-6">
            <Reveal className="lg:col-span-7">
              <div className="rounded-[20px] bg-surface border border-hairline p-8 md:p-12 h-full">
                <div className="eyebrow mb-3">Our mission</div>
                <h2 className="text-3xl md:text-[2.4rem] md:leading-[1.1] font-extrabold text-ink mb-4">Make local buying and selling transparent, competitive and trustworthy.</h2>
                <p className="text-lg text-muted leading-relaxed">Zimbabwe’s informal economy runs on relationships and word of mouth. That is its strength and its ceiling. Sellai keeps the relationships and removes the ceiling.</p>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-5">
              <div className="rounded-[20px] bg-forest text-white p-8 md:p-12 h-full flex flex-col justify-end min-h-[300px] relative overflow-hidden">
                <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-mint/25 blur-3xl pointer-events-none" aria-hidden="true" />
                <div className="relative">
                  <div className="eyebrow eyebrow-on-dark mb-3">Our vision</div>
                  <h2 className="text-3xl font-extrabold leading-tight">Harare first. Then every city where people buy and sell the same way.</h2>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section tone="dark">
        <Container narrow className="text-center">
          <Reveal>
            <div className="eyebrow eyebrow-on-dark mb-4">Our story</div>
            <h2 className="text-3xl md:text-[2.6rem] md:leading-[1.1] font-extrabold text-white mb-8">Built in Zimbabwe, for Zimbabwe.</h2>
            <div className="space-y-5 text-lg leading-relaxed text-white/70 max-w-2xl mx-auto">
              <p>We watched a street vendor in Harare lose a day’s income because a buyer could not find her stall after it moved. That same buyer spent hours looking for something that was two blocks away.</p>
              <p className="text-white font-semibold">Abundance on one side. Scarcity on the other. Separated only by information.</p>
              <p>We had tried everything ourselves: posting in group chats, scrolling marketplaces, asking around. The tools existed, but none of them were built for this. None of them understood the trust gap, the delivery problem, or the payment friction of buying and selling locally here.</p>
              <p className="text-white font-semibold">So we built the platform we wished existed.</p>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white/70">
              <span className="flex items-center gap-2"><MapPin size={16} className="text-mint-dark" aria-hidden="true" /> Harare, Zimbabwe</span>
              <span className="hidden sm:block w-px h-5 bg-white/15" aria-hidden="true" />
              <span className="flex items-center gap-2"><Users size={16} className="text-mint-dark" aria-hidden="true" /> Zimbabwean founding team</span>
              <span className="hidden sm:block w-px h-5 bg-white/15" aria-hidden="true" />
              <span className="flex items-center gap-2"><Rocket size={16} className="text-mint-dark" aria-hidden="true" /> Founded 2021</span>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal><SectionHeader eyebrow="What we stand for" title="Four things we will not compromise on" /></Reveal>
          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="border-t border-hairline pt-5">
                  <IconDisc icon={v.icon} className="mb-4" />
                  <h3 className="text-lg font-bold text-ink mb-2">{v.title}</h3>
                  <p className="text-muted leading-relaxed text-[0.95rem]">{v.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section tone="tint">
        <Container>
          <Reveal><SectionHeader eyebrow="The people behind Sellai" title="Small team. Big mission." lede="A small, focused team of Zimbabwean entrepreneurs. We are not here to disrupt anyone. We are here to serve the people already trading." /></Reveal>
          <Stagger className="grid md:grid-cols-3 gap-x-10 gap-y-8">
            {team.map((t) => (
              <StaggerItem key={t.title}>
                <IconDisc icon={t.icon} className="mb-4" />
                <h3 className="text-lg font-bold text-ink mb-2">{t.title}</h3>
                <p className="text-muted leading-relaxed text-[0.95rem]">{t.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section tone="mint">
        <Container narrow className="text-center">
          <Reveal>
            <h2 className="text-3xl md:text-[2.6rem] md:leading-[1.1] font-extrabold text-ink mb-4">Join in.</h2>
            <p className="text-lg text-ink/75 leading-relaxed max-w-xl mx-auto mb-8">Buyer, seller or runner, there is a place for you in the way Zimbabwe trades next.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button href="#download" variant="forest" size="lg">Get the app</Button>
              <Button to="/contact" variant="ghost" size="lg">Contact us</Button>
            </div>
          </Reveal>
        </Container>
      </Section>

      <DownloadSection />
    </main>
  )
}
