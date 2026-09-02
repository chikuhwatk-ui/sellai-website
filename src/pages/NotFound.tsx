import { ArrowRight } from 'lucide-react'
import { useMeta } from '../hooks/useMeta'
import { Button, Container } from '../components/ui'

export default function NotFound() {
  useMeta('Page not found', 'That page does not exist on Sellai.')
  return (
    <main className="pt-16">
      <Container className="py-28 md:py-40 text-center">
        <div className="eyebrow mb-4 tnum">404</div>
        <h1 className="text-[2.5rem] md:text-[3.5rem] leading-[1.05] font-extrabold text-ink max-w-2xl mx-auto">We couldn't find that page.</h1>
        <p className="mt-5 text-lg text-muted max-w-md mx-auto">The link may be old, or the page may have moved. Here is where most people want to go.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Button to="/" variant="forest">Back to home</Button>
          <Button to="/product" variant="ghost" icon={ArrowRight}>How Sellai works</Button>
        </div>
      </Container>
    </main>
  )
}
