import BodyDetail from '@/components/body-detail'
import HowItWorks from '@/components/how-it-works'

import CTA from '@/components/media/cta'
import FAQ from '@/components/media/faq'
import { LogoCloud } from '@/components/media/logo-cloud'
import Testimonials from '@/components/media/testimonials'
import Pricing from '@/components/pricing'
import { Button } from '@/components/utils/button'
import { Container } from '@/components/utils/container'
import { Screenshot } from '@/components/utils/screenshot'
import { Heading } from '@/components/utils/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description:
    'Radiant helps you sell more by revealing sensitive information about your customers.',
}

function Hero() {
  return (
    <div className="relative bg-primary">
      <Container className="relative">
        <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32">
          <h1 className="font-display text-white text-balance text-6xl/[0.9] font-medium tracking-tight sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Scale your technical marketing content.
          </h1>
          <p className="text-white mt-8 max-w-lg text-xl/7 font-medium sm:text-2xl/8">
            We create <strong>blog posts</strong> and{' '}
            <strong>video tutorials</strong> designed to reach software
            developers, devops practitioners, data engineers, and more.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button variant="primary" href="#" className="font-semibold">
              Book a Call
            </Button>
            <Button variant="outline" href="/pricing">
              See Pricing
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function FeatureSection() {
  const screenshot = '/screenshots/app.png'

  return (
    <div className="overflow-hidden">
      <Container className="pb-24">
        <Heading as="h2" className="text-white max-w-3xl">
          A snapshot of your entire sales pipeline.
        </Heading>
        <Screenshot
          width={1216}
          height={768}
          src={screenshot}
          className="mt-16 h-[36rem] sm:h-auto sm:w-[76rem]"
        />
      </Container>
    </div>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />

      <main>
        <BodyDetail />
        <Container className="bg-primary py-20">
          <LogoCloud />
        </Container>
        <HowItWorks />
        <Pricing />
      </main>
      <Testimonials />
      <CTA />
      <FAQ />
    </div>
  )
}
