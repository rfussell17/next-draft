import ServiceHeader from '@/components/global/headers/service-header'
import MedCaseLoft from '@/components/media/case-studies/med-case-loft'
import { LogosDark } from '@/components/media/logos-dark'
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
      <LogosDark />
      <TestimonialsGroup />
    </>
  )
}
