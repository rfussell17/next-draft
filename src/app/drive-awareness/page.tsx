import CardList from '@/components/global/card-list'
import { CTAFull } from '@/components/global/cta-full'
import ServiceHeader from '@/components/global/headers/service-header'
import MedCaseLoft from '@/components/media/case-studies/med-case-loft'
import SocialProof from '@/components/media/social-proof'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import Why from '@/components/page-components/why'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description:
    'Radiant helps you sell more by revealing sensitive information about your customers.',
  robots: {
    index: false,
    follow: false,
  },
}

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

const ctaProps = [
  'DevRel Specific content in here',
  'Flexible work hours',
  '30 days of paid vacation',
  'Annual team retreats',
  'Benefits for you and your family',
  'A great work environment',
]

export default function DriveAwareness() {
  return (
    <>
      <ServiceHeader
        title="Custom Content Marketing that Drives Traffic"
        description="We specialize in creating technical content that gets reach and drives business."
        primaryCTA={{
          text: 'Book a Discovery Call',
          href: '/call',
        }}
        secondaryCTA={{
          text: 'See Our Lead Generation Package',
          href: '/lead-generation',
        }}
        imageSrc="/site/marketing_draft_dev.jpg"
        imageAlt="Developer Marketing"
        showLogos={true}
      />
      <Why
        title="Turn Technical Content into Growth"
        subtitle="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
            nostrum voluptatem ducimus id explicabo, quo, voluptates, numqua."
        subtitleBold=""
        features={[
          {
            title: 'Strategic Content in Every Format',
            description:
              'We drive awareness by providing blog posts, eBooks and video tutorials at a consistent cadence, freeing up your marketers and developers to focus on other priorities. We also suggest promotional strategies that place the content in front of your target audience.',
            linkText: 'Our Business to Business Marketing Agency',
            linkHref: '/expert-writers',
          },
          {
            title: 'For Marketers and DevRels',
            description:
              'Whether you are a Marketer that needs help with technical content or a DevRel that needs support on the strategic side, we create content that puts your product in a good light, helping drive developer engagement with your business and product.',
            linkText: 'Our B2B Tech Marketing',
            linkHref: '/content-quality',
          },
          {
            title: 'Enterprise Content Marketing',
            description:
              'We help enterprises create successful content programs that drive awareness and leads. Our seasoned team of content strategists use proven frameworks to make sure your content delivers the highest ROI for your business.',
            linkText: 'Our Enterprise Content Marketing',
            linkHref: '/delivery-process',
          },
        ]}
      />
      <SocialProof />
      <MedCaseLoft />
      <CardList
        title="Ongoing technical content"
        subtitle="Build a steady stream of technical content that scales with your business."
        includedFeatures={cardListPropsOne}
        addonTitle="Add-on services"
        addonFeatures={cardListPropsTwo}
        requestPricingHref="#"
        requestPricingText="Request pricing"
      />
      <TestimonialsGroup />
      <CTAFull
        title="Book a discovery call"
        description="Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam."
        imageSrc="/site/cta_draft_dev.jpg"
        imageAlt="Team environment"
        list={ctaProps}
        linkHref="/discovery-call"
        linkText="Book a Discovery Call"
      />
    </>
  )
}
