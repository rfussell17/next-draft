import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Container } from '@/components/utils/container'
import { GradientBackground } from '@/components/utils/gradient'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Companies all over the world have closed millions of deals with Radiant. Sign up today and start selling smarter.',
}
export default function About() {
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
