import { Smartphone } from 'lucide-react'
import { ANDROID_APK_URL, ANDROID_APK_ARM32_URL, IOS_WAITLIST_MAILTO } from '../constants/downloads'
import { Button, BrandIcon, Container, Section } from './ui'
import { Reveal } from './motion'

type Tone = 'page' | 'tint' | 'dark' | 'forest'

/**
 * The one place the phone download lives. Android is live (direct .apk);
 * iPhone is in progress, so instead of a dead App Store button we offer a
 * one-click "tell me when" email.
 */
export function DownloadSection({ tone = 'page', id = 'download', heading = 'Get Sellai on your phone', lede }: { tone?: Tone; id?: string; heading?: string; lede?: string }) {
  const onDark = tone === 'dark' || tone === 'forest'
  const text = lede ?? 'Free to download. Buyers never pay Sellai. Sellers buy credits only when they want to send an offer.'

  return (
    <Section tone={tone} id={id}>
      <Container narrow className="text-center">
        <Reveal>
          <div className={`eyebrow mb-3 ${onDark ? 'eyebrow-on-dark' : ''}`}>Get started</div>
          <h2 className={`text-3xl md:text-[2.6rem] md:leading-[1.1] font-extrabold ${onDark ? 'text-white' : 'text-ink'}`}>{heading}</h2>
          <p className={`mt-4 text-lg leading-relaxed max-w-xl mx-auto ${onDark ? 'text-white/70' : 'text-muted'}`}>{text}</p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Button href={ANDROID_APK_URL} variant={onDark ? 'mint' : 'forest'} size="lg" icon={() => <BrandIcon name="android" size={20} />} ariaLabel="Download Sellai for Android">
              Download for Android
            </Button>
            <Button href={IOS_WAITLIST_MAILTO} variant={onDark ? 'ghost-dark' : 'ghost'} size="lg" icon={Smartphone} ariaLabel="iPhone app coming soon, email us to be notified">
              iPhone · tell me when
            </Button>
          </div>
          <p className={`mt-4 text-sm ${onDark ? 'text-white/55' : 'text-muted'}`}>
            Android 8 or newer. Direct .apk, so your phone may ask you to allow installs from your browser.
            {ANDROID_APK_ARM32_URL && (
              <span className="block mt-1">Older phone from before 2017? <a href={ANDROID_APK_ARM32_URL} className={`font-semibold hover:underline underline-offset-4 ${onDark ? 'text-mint-dark' : 'text-primary-text'}`}>Get the 32-bit version</a>.</span>
            )}
            <span className="block mt-1">iPhone app in progress.</span>
          </p>
        </Reveal>
      </Container>
    </Section>
  )
}
