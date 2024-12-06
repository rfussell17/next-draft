import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Call Us',
  description:
    'Companies all over the world have closed millions of deals with Radiant. Sign up today and start selling smarter.',
}
export default function Call() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>

      <Footer />
    </main>
  )
}
