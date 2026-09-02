import { ArrowRight } from 'lucide-react'
import { useMeta } from '../hooks/useMeta'
import { Button, Container, Pill } from '../components/ui'
import { Reveal, Stagger, StaggerItem } from '../components/motion'
import { DesktopDownloadSection } from '../components/DesktopDownloadSection'

export default function Business() {
  useMeta('Sellai Business for desktop', 'The Sellai seller app for Windows, with Mac in progress. Same account as your phone, designed around a bigger screen and a real keyboard.', '/desktop')

  return (
    <main className="pt-16">
      <section className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[480px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(30,194,122,0.14),transparent_70%)] pointer-events-none" aria-hidden="true" />
        <Container narrow className="relative text-center pt-16 pb-6 md:pt-24 md:pb-10">
          <Stagger onLoad>
            <StaggerItem>
              <div className="flex items-center justify-center gap-2 mb-5">
                <span className="eyebrow">Sellai Business</span>
                <Pill tone="warning">For sellers</Pill>
              </div>
            </StaggerItem>
            <StaggerItem>
              <h1 className="text-[2.75rem] leading-[1.02] md:text-[4rem] font-extrabold text-ink">
                The same Sellai. <span className="text-primary-text">On your computer.</span>
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl mx-auto">
                Available for Windows today. Mac is in progress. Sign in with the phone number you already use, and everything stays in sync.
              </p>
            </StaggerItem>
          </Stagger>
        </Container>
      </section>

      <DesktopDownloadSection showHeader={false} />

      <section className="py-20">
        <Container narrow>
          <Reveal>
            <div className="rounded-[20px] bg-surface border border-hairline p-8 md:p-12 text-center shadow-[var(--shadow-card)]">
              <h2 className="text-2xl md:text-3xl font-extrabold text-ink mb-3">New to Sellai?</h2>
              <p className="text-muted leading-relaxed max-w-xl mx-auto mb-6">
                You can sign up from either app with your phone number. Most sellers find the ID check quicker on a phone, because snapping a selfie and an ID is easier with a phone camera. Everything else works the same on both.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button to="/for-sellers" variant="forest">How selling works</Button>
                <Button to="/contact" variant="link">Talk to us <ArrowRight size={16} aria-hidden="true" /></Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  )
}
