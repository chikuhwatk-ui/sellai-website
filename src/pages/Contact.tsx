import { useState, type FormEvent } from 'react'
import { Check, Handshake, Mail, MapPin } from 'lucide-react'
import { useMeta } from '../hooks/useMeta'
import { Button, Card, Container, IconDisc, Section } from '../components/ui'
import { Reveal } from '../components/motion'
import { CONTACT_EMAIL } from '../constants/downloads'
import { DownloadSection } from '../components/DownloadSection'

const subjects = [
  { value: 'General question', label: 'General question' },
  { value: 'Partnership', label: 'Partnership' },
  { value: 'Support', label: 'Help with the app' },
  { value: 'Press', label: 'Press' },
]

const inputCls = 'w-full h-12 bg-surface rounded-[12px] px-4 text-ink placeholder:text-faint border border-hairline focus:border-mint focus:outline-none focus:ring-2 focus:ring-mint/30 transition-[border-color,box-shadow]'

export default function Contact() {
  useMeta('Contact Sellai', 'Questions, partnerships, press or help with the app. Email hello@sellai.africa or send a message from this page.', '/contact')
  const [sent, setSent] = useState(false)

  /*
   * The site has no server of its own, so the form composes an email in the
   * visitor's mail app with everything filled in. When a backend contact
   * endpoint exists, swap this for a fetch and keep the same success state.
   */
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const name = String(f.get('name') || '').trim()
    const email = String(f.get('email') || '').trim()
    const subject = String(f.get('subject') || 'General question')
    const message = String(f.get('message') || '').trim()
    const body = `${message}\n\n— ${name}${email ? ` (${email})` : ''}`
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`${subject} · from the website`)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <main className="pt-16">
      <Section className="!pb-10">
        <Container className="text-center">
          <Reveal>
            <div className="eyebrow mb-4">Get in touch</div>
            <h1 className="text-[2.75rem] leading-[1.02] md:text-[4rem] font-extrabold text-ink max-w-3xl mx-auto">We'd love to hear from you.</h1>
            <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl mx-auto">A question, a partnership idea, or something not working in the app. We read everything.</p>
          </Reveal>
        </Container>
      </Section>

      <Section className="!pt-0">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <Reveal>
                <ul className="list-none m-0 p-0">
                  <li className="flex gap-4 py-5 border-t border-hairline">
                    <IconDisc icon={Mail} />
                    <div>
                      <h2 className="text-[1.05rem] font-bold text-ink mb-1">Email</h2>
                      <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary-text font-semibold hover:underline underline-offset-4">{CONTACT_EMAIL}</a>
                    </div>
                  </li>
                  <li className="flex gap-4 py-5 border-t border-hairline">
                    <IconDisc icon={MapPin} />
                    <div>
                      <h2 className="text-[1.05rem] font-bold text-ink mb-1">Where we are</h2>
                      <p className="text-muted">Harare, Zimbabwe</p>
                    </div>
                  </li>
                  <li className="flex gap-4 py-5 border-t border-b border-hairline">
                    <IconDisc icon={Handshake} />
                    <div>
                      <h2 className="text-[1.05rem] font-bold text-ink mb-1">Partnerships</h2>
                      <p className="text-muted leading-relaxed">Working with sellers’ associations, delivery fleets or payment providers? Say so in the subject and we will reply within a working day.</p>
                    </div>
                  </li>
                </ul>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <Card className="p-7 md:p-9">
                  {sent ? (
                    <div className="text-center py-8">
                      <IconDisc icon={Check} size="lg" className="mx-auto mb-4" />
                      <h2 className="text-2xl font-extrabold text-ink mb-2">Your email app should be open.</h2>
                      <p className="text-muted leading-relaxed max-w-md mx-auto">We filled in your message. Hit send there and it lands with us. If nothing opened, email <a className="text-primary-text font-semibold hover:underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> directly.</p>
                      <Button variant="link" className="mt-6" onClick={() => setSent(false)}>Write another message</Button>
                    </div>
                  ) : (
                    <form onSubmit={onSubmit} className="space-y-5">
                      <h2 className="text-2xl font-extrabold text-ink">Send us a message</h2>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="name" className="block text-sm font-semibold text-ink mb-2">Name</label>
                          <input id="name" name="name" type="text" required autoComplete="name" placeholder="Your name" className={inputCls} />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-semibold text-ink mb-2">Email</label>
                          <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" className={inputCls} />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-semibold text-ink mb-2">What is it about?</label>
                        <select id="subject" name="subject" className={inputCls}>
                          {subjects.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-ink mb-2">Message</label>
                        <textarea id="message" name="message" rows={6} required placeholder="How can we help?" className={`${inputCls} !h-auto py-3 resize-none`} />
                      </div>
                      <Button type="submit" variant="forest" size="lg" className="w-full">Send message</Button>
                      <p className="text-xs text-muted text-center">Opens in your email app, addressed to {CONTACT_EMAIL}.</p>
                    </form>
                  )}
                </Card>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      <DownloadSection tone="tint" />
    </main>
  )
}
