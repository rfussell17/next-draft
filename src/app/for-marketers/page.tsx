import CardList from '@/components/card-list'
import { CTAFull } from '@/components/cta-full'
import SocialProof from '@/components/social-proof'
import Testimonial from '@/components/testimonial'
import TestimonialsGroup from '@/components/testimonials-group'
import Header from '@/components/who-we-help/for-marketers/header'
import Why from '@/components/who-we-help/for-marketers/why'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description:
    'Radiant helps you sell more by revealing sensitive information about your customers.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function ForMarketers(): JSX.Element {
  const ctaProps = [
    'marketing-specific content in here',
    'Flexible work hours',
    '30 days of paid vacation',
    'Annual team retreats',
    'Benefits for you and your family',
    'A great work environment',
  ]

  const cardListPropsOne = [
    'Private forum access',
    'SEO Keyword and topic ideation',
    'Diagrams, and code samples',
    'Technical reviews',
    'Professional editing',
    'Social media collateral',
  ]

  const cardListPropsTwo = [
    'Technical ebooks',
    'Executive ghostwriting',
    'Video tutorials',
  ]

  return (
    <div>
      <Header />
      <main>
        <Why />

        <div className="bg-gradient-brand">
          <SocialProof />
        </div>
        <CardList
          title="Ongoing technical content"
          subtitle="Build a steady stream of technical content that scales with your business."
          includedFeatures={cardListPropsOne}
          addonTitle="Add-on services"
          addonFeatures={cardListPropsTwo}
          requestPricingHref="#"
          requestPricingText="Request pricing"
        />
        <Testimonial
          quote="In a matter of weeks, our referral traffic and organic keyword rankings increased by 3x. One post also hit Hacker News which resulted in 5 demo requests in a single day!"
          name="Robert Gibb"
          role="Content Marketing Manager"
          company="Fabric"
          imageSrc="/testimonials/robert_gibb_fabric_inc_draft_dev.png"
          imageAlt="Robert Gibb"
        />

        {/* <LogoCloud /> */}

        <TestimonialsGroup />
        <CTAFull
          title="Book a discovery call"
          description="Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam."
          imageSrc="/site/cta.jpg"
          imageAlt="Team environment"
          list={ctaProps}
          linkHref="/discovery-call"
          linkText="Book a Discovery Call"
        />
      </main>
    </div>
  )
}
