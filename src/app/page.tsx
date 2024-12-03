import { Footer } from '@/components/footer'
import { LogoCloud } from '@/components/media/logo-cloud'
import { Testimonials } from '@/components/media/testimonials'
import { Navbar } from '@/components/navbar'
import { Button } from '@/components/utils/button'
import { Container } from '@/components/utils/container'
import { Link } from '@/components/utils/link'
import { Screenshot } from '@/components/utils/screenshot'
import { Heading } from '@/components/utils/text'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description:
    'Radiant helps you sell more by revealing sensitive information about your customers.',
}

function Hero() {
  return (
    <div className="bg-primary relative">
      <Container className="relative">
        <Navbar
          banner={
            <Link
              href="/blog/radiant-raises-100m-series-a-from-tailwind-ventures"
              className="bg-secondary data-[hover]:bg-secondary flex items-center gap-1 rounded-full px-3 py-0.5 text-sm/6 font-medium text-white"
            >
              Radiant raises $100M Series A from Tailwind Ventures
              <ChevronRightIcon className="size-4" />
            </Link>
          }
        />
        <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32">
          <h1 className="font-display text-balance text-6xl/[0.9] font-medium tracking-tight text-white sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Scale your marketing content.
          </h1>
          <p className="mt-8 max-w-lg text-xl/7 font-medium text-white sm:text-2xl/8">
            We create blog posts and video tutorials designed to reach software
            developers, devops practitioners, data engineers, and more.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="#">Get started</Button>
            <Button variant="secondary" href="/pricing">
              See pricing
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
        <Heading as="h2" className="max-w-3xl text-white">
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
        <Container className="mt-10">
          <LogoCloud />
        </Container>
        <div className="bg-gradient-to-b from-white from-50% to-gray-100 py-32">
          <FeatureSection />
        </div>
      </main>
      <Testimonials />
      <Footer />
    </div>
  )
}
