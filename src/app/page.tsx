import { CTAFull } from '@/components/global/cta-full'
import SocialProof from '@/components/media/social-proof'
import Testimonial from '@/components/media/testimonials/testimonial'
import Testimonials from '@/components/media/testimonials/testimonials-group'
import CaseStudyHome from '@/components/pages/home/case-study-home'
import Hero from '@/components/pages/home/hero'
import How from '@/components/pages/home/how'
import What from '@/components/pages/home/what'
import Why from '@/components/pages/home/why'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description:
    'Radiant helps you sell more by revealing sensitive information about your customers.',
  robots: {
    index: false,
    follow: false,
  },
}

const ctaProps = [
  'Competitive salaries',
  'Flexible work hours',
  '30 days of paid vacation',
  'Annual team retreats',
  'Benefits for you and your family',
  'A great work environment',
]

interface HeroProps {
  title: string
  subtitle: string
  primaryButtonText: string
  primaryButtonHref: string
  secondaryButtonText: string
  secondaryButtonHref: string
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />

      <main>
        <What />
        <SocialProof />
        <Why />

        <Testimonial
          quote="Having draft.dev source quality technical content for the Loft Labs blog has been a competitive advantage. It's given us a steadier flow of content, which has helped our brand's visibility, and some of the posts are among the most popular ones we've published."
          name="Rich Burroughs"
          role="Developer Advocate"
          company="Loft Labs"
          imageSrc="/media/testimonials-lg/rich_burroughs_loft_labs_draft_dev.jpg"
          imageAlt="Rich Burroughs"
        />
        <How />

        <CaseStudyHome />
      </main>
      <Testimonials />

      <CTAFull
        title="Book a discovery call"
        description="Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam."
        imageSrc="/site/cta.jpg"
        imageAlt="Team environment"
        list={ctaProps}
        linkHref="/discovery-call"
        linkText="Book a Discovery Call"
      />
    </div>
  )
}
