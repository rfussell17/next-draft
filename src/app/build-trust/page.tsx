import CardList from '@/components/global/card-list'
import { CTAFull } from '@/components/global/cta-full'
import ServiceHeader from '@/components/global/headers/service-header'
import MedCaseStatusHero from '@/components/media/case-studies/med-case-status-hero'
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
        title="Our Technical Content Writers are Practicing Professionals"
        description="From articles about your industry, to product tutorials, to B2B Thought Leadership pieces - our writing and editing teams of professional developers have you covered."
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
        title="Written by Developers, for Developers"
        subtitle="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
            nostrum voluptatem ducimus id explicabo, quo, voluptates, numqua."
        subtitleBold=""
        features={[
          {
            title: 'Technical Writing that Convinces',
            description:
              'Everything we produce is written by subject matter experts, technically reviewed and professionally edited by our in-house team, delivered to you in a ready-to-publish format along with social posts and SEO meta descriptions.',
            linkText: 'See Technical Writing Examples',
            linkHref: '/expert-writers',
          },
          {
            title: 'Thought Leadership Content',
            description:
              'We provide you with written and video material that allows for a consistent output of high-quality content. The topics we work on are defined by experienced developers and are guaranteed to resonate with your readers',
            linkText: 'About Our Thought Leadership Content Marketing',
            linkHref: '/content-quality',
          },
          {
            title: 'Build Respect with Your Technical Audience',
            description:
              'Our internal subject matter experts evaluate your product and will take care of writing, reviewing, and editing content pieces, be it blog posts, ebooks, or white papers about your industry or your product specifically.',
            linkText: 'Outsource Your Technical Writing',
            linkHref: '/delivery-process',
          },
        ]}
      />
      <SocialProof />
      <MedCaseStatusHero />
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
