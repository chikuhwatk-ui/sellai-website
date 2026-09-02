import { ArrowDown, Banknote, Bike, Car, Clock, EyeOff, Hourglass, IdCard, KeyRound, Map, Rocket, Truck, UserPlus } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { useMeta } from '../hooks/useMeta'
import { Button, Container, IconDisc, PhoneFrame, Section, SectionHeader } from '../components/ui'
import { Reveal, Stagger, StaggerItem } from '../components/motion'
import { EASE } from '../components/ease'
import { RunnerScreen } from '../components/AppScreens'
import { DownloadSection } from '../components/DownloadSection'

const pains = [
  { icon: Hourglass, title: 'Sitting and waiting with no guarantee', body: 'Parked outside a mall at 10am with no idea if you will make $5 or $50 today. Your whole day depends on whether a seller walks out.' },
  { icon: EyeOff, title: 'You only get work if they remember your number', body: 'Your income depends on a seller remembering you exist and still having your contact. There is no way to find the work. You wait and hope it finds you.' },
]

const facts = [
  { icon: Map, title: 'A live map of demand', body: 'See where delivery requests are forming before you leave home, and go there.' },
  { icon: Banknote, title: 'Cash in hand at handoff', body: 'The buyer pays you directly when they enter their PIN. No waiting on a payout.' },
  { icon: Clock, title: '10% of the delivery fee', body: 'Sellai takes ten percent of the delivery fee from your wallet. The rest is yours. Nothing else.' },
]

const steps = [
  { n: '01', icon: UserPlus, title: 'Sign up', body: 'Download the app and register with your phone number. A few minutes.' },
  { n: '02', icon: IdCard, title: 'Submit your ID and vehicle', body: 'Upload your ID and vehicle details. A person reviews it, usually within 24 hours.' },
  { n: '03', icon: Map, title: 'Go online where it is busy', body: 'The heatmap shows where requests are forming. No shifts, no roster. You choose.' },
  { n: '04', icon: Rocket, title: 'Bid. Pick up. Deliver.', body: 'Place a bid on a request. When the seller accepts, collect, deliver, and get paid when the buyer enters their PIN.' },
]

const vehicles = [
  { icon: Bike, title: 'Bicycles', body: 'Short urban runs. No fuel, and busy in the city centre.' },
  { icon: Car, title: 'Motorcycles and cars', body: 'Medium-range runs. The most common way runners work.' },
  { icon: Truck, title: 'Vans', body: 'Bulk and oversized deliveries. Fewer runs, more per run.' },
]

export default function ForRunners() {
  useMeta('Sellai for runners', 'Stop waiting outside. See delivery requests forming near you on a live map, bid on the ones you want, and get paid in cash at handoff.', '/for-runners')
  const reduce = useReducedMotion()

  return (
    <main className="pt-16">
      <section className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[560px] bg-[radial-gradient(60%_60%_at_75%_20%,rgba(199,122,0,0.12),transparent_70%)] pointer-events-none" aria-hidden="true" />
        <Container className="relative grid lg:grid-cols-12 gap-10 items-center pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="lg:col-span-7">
            <Stagger onLoad>
              <StaggerItem><div className="eyebrow eyebrow-runner mb-4">For runners</div></StaggerItem>
              <StaggerItem>
                <h1 className="text-[2.75rem] leading-[1.02] md:text-[4rem] font-extrabold text-ink">
                  Stop waiting outside. <span className="text-warning-text">Deliveries come to you.</span>
                </h1>
              </StaggerItem>
              <StaggerItem>
                <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-[34rem]">
                  See real delivery requests forming in your area before you leave home. No more standing outside malls hoping someone needs a run. Sellai shows you where the work is.
                </p>
              </StaggerItem>
              <StaggerItem>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Button href="#download" variant="forest" size="lg">Become a runner</Button>
                  <Button href="#how-it-works" variant="ghost" size="lg" icon={ArrowDown}>How it works</Button>
                </div>
              </StaggerItem>
            </Stagger>
          </div>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <PhoneFrame label="Runner app showing the demand heatmap and a delivery request"><RunnerScreen /></PhoneFrame>
          </motion.div>
        </Container>
      </section>

      <Section>
        <Container>
          <Reveal><SectionHeader eyebrow="The problem" eyebrowClass="eyebrow-runner" title="Tired of waiting and not knowing?" /></Reveal>
          <Stagger className="grid md:grid-cols-2 gap-x-12 gap-y-2">
            {pains.map((p) => (
              <StaggerItem key={p.title}>
                <div className="flex gap-4 py-5 border-t border-hairline">
                  <IconDisc icon={p.icon} tone="error" />
                  <div>
                    <h3 className="text-lg font-bold text-ink mb-1">{p.title}</h3>
                    <p className="text-muted leading-relaxed">{p.body}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section tone="tint">
        <Container>
          <Stagger className="grid md:grid-cols-3 gap-6">
            {facts.map((f) => (
              <StaggerItem key={f.title}>
                <div className="rounded-[20px] bg-surface border border-hairline p-7 h-full">
                  <IconDisc icon={f.icon} tone="warning" size="lg" className="mb-5" />
                  <h3 className="text-xl font-bold text-ink mb-2">{f.title}</h3>
                  <p className="text-muted leading-relaxed">{f.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section id="how-it-works">
        <Container>
          <Reveal><SectionHeader eyebrow="Getting started" eyebrowClass="eyebrow-runner" title="Four steps to your first run" /></Reveal>
          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
            {steps.map((s) => (
              <StaggerItem key={s.n}>
                <div className="border-t-2 border-warning pt-5">
                  <div className="flex items-center justify-between mb-3">
                    <IconDisc icon={s.icon} tone="warning" size="sm" />
                    <span className="font-display text-sm font-extrabold text-warning-text tnum">{s.n}</span>
                  </div>
                  <h3 className="text-lg font-bold text-ink mb-2">{s.title}</h3>
                  <p className="text-muted leading-relaxed text-[0.95rem]">{s.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section tone="tint">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <Reveal>
                <div className="eyebrow eyebrow-runner mb-3">Vehicles</div>
                <h2 className="text-3xl md:text-[2.6rem] md:leading-[1.1] font-extrabold text-ink mb-3">What can you drive?</h2>
                <p className="text-lg text-muted leading-relaxed">Register the vehicle you have. Bigger vehicles see the bigger jobs.</p>
              </Reveal>
              <Stagger className="mt-6">
                {vehicles.map((v) => (
                  <StaggerItem key={v.title}>
                    <div className="flex gap-4 py-4 border-t border-hairline">
                      <IconDisc icon={v.icon} tone="warning" />
                      <div>
                        <h3 className="text-[1.05rem] font-bold text-ink mb-0.5">{v.title}</h3>
                        <p className="text-muted text-[0.95rem]">{v.body}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
            <Reveal delay={0.1} className="lg:col-span-6">
              <div className="rounded-[20px] bg-forest text-white p-8 md:p-10">
                <IconDisc icon={KeyRound} tone="dark" size="lg" className="mb-5" />
                <h3 className="text-2xl font-extrabold mb-3">The PIN protects you too.</h3>
                <p className="text-white/70 leading-relaxed">The buyer holds a 4-digit PIN and enters it when you hand over the goods. That is the moment the delivery is complete and you are paid. No “I never received it” arguments afterwards.</p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <DownloadSection tone="dark" heading="Stop waiting. Start running." lede="Download the app, get verified, and see live delivery requests in your area. The work is already there. You just need to be on the platform." />
    </main>
  )
}
