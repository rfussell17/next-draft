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

export default function BuildTrust() {
  return (
    <>
      <ServiceHeader
        title="Inbound Lead Generation and Technical Copy Writing"
        description="We have implemented our lead generation engines at tech companies driving 100s of millions in recurring revenue, predictably driving traffic and leads."
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
        title="Consistently turn organic traffic into MQLs and SQLs"
        subtitle="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
            nostrum voluptatem ducimus id explicabo, quo, voluptates, numqua."
        subtitleBold=""
        features={[
          {
            title: 'Predictable Leads',
            description:
              'We help you establish and maintain a predictable lead generation engine based on ebooks, whitepapers, landing page copywriting and social media posts, that automatically works for you in the background.',
            linkText: 'B2B Tech Marketing',
            linkHref: '/expert-writers',
          },
          {
            title: 'Lead Qualification',
            description:
              'With our proven lead qualification system and our expert guidance you will consistently convert organic traffic into high-quality Marketing Qualified Leads and Sales Qualified Leads your Sales organization can close.',
            linkText: 'Lead Generation for SaaS Companies',
            linkHref: '/content-quality',
          },
          {
            title: 'Recurring check-ins',
            description:
              'Maximize your lead generation ROI with our analytical data-driven approach. Recurring check-ins ensure we adapt our content production plan according to the latest learnings..',
            linkText: 'Our Content Strategy Services',
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
        imageSrc="/site/cta.jpg"
        imageAlt="Team environment"
        list={ctaProps}
        linkHref="/discovery-call"
        linkText="Book a Discovery Call"
      />
    </>
  )
}
