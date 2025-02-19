import CardList from '@/components/global/card-list'
import { CTAFull } from '@/components/global/cta-full'
import ServiceHeader from '@/components/global/headers/service-header'
import MedCaseStatusHero from '@/components/media/case-studies/med-case-status-hero'
import SocialProof from '@/components/media/social-proof'
import Testimonial from '@/components/media/testimonials/testimonial'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import How from '@/components/page-components/how'
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

export default function ForDevRels(): JSX.Element {
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
      <ServiceHeader
        title="Developer Marketing that Resonates"
        description="We support Developer Relations and Developer Advocate Teams by consistently delivering content that technical audiences truly care about and respect."
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
      <main>
        <Why
          title="We help DevRels scale their efforts"
          subtitle="We support Developer Relations and Developer Advocate Teams by
            consistently delivering content that technical audiences truly care
            about and respect."
          subtitleBold=""
          features={[
            {
              title: 'Drive Awareness',
              description:
                'With a track record of predictably creating demand, our content strategists help implement proven frameworks that drive traffic and inbound leads. We ensure our blog posts, eBooks and video tutorials are accurate, engaging, and resonate with your technical audience.',
              linkText: 'How we drive awareness',
              linkHref: '/drive-awareness',
            },
            {
              title: 'Capture Leads',
              description:
                'Our subject matter experts evaluate your product and help build out your content roadmap, turning readers into leads, and leads into new customers. Recurring check-ins ensure we adapt our content production plan according to the latest learnings.',
              linkText: 'How we capture leads',
              linkHref: '/capture-leads',
            },
            {
              title: 'Build Trust',
              description:
                'Everything we deliver to you is written and reviewed by practicing technical professionals and edited by professional editors. Outsource the creation of technical content to us and build respect and engagement with software developers, DevOps, data engineers, and more.',
              linkText: 'How we build trust',
              linkHref: '/build-trust',
            },
          ]}
        />

        <div className="bg-gradient-brand">
          <SocialProof />
        </div>
        <How
          title="How to get started with Draft.dev"
          subtitleBold="Here's how we help you create content that resonates with developers."
          subtitleRegular=""
          steps={[
            {
              number: '1',
              title: 'Schedule A Discovery Call',
              description:
                "During this 30-minute consultation, we'll explore your organization's vision and content needs. Together, we'll determine if our expertise aligns with your objectives and discuss next steps.",
            },
            {
              number: '2',
              title: 'Create Your Content Plan',
              description:
                "We'll craft a tailored content roadmap based on your objectives, resources, and target audience. This blueprint ensures clear expectations and measurable outcomes for our collaboration.",
            },
            {
              number: '3',
              title: 'Ready-to-publish Technical Content',
              description:
                "After finalizing your strategy, our expert team begins creating high-quality technical content delivered every 1-2 weeks. Each piece undergoes thorough testing and editing, and we'll refine any content until it meets your standards.",
            },
          ]}
          imageSrc="/site/team_draft_dev.jpg"
          imageAlt="Technical content development"
        />

        <Testimonial
          quote="In a matter of weeks, our referral traffic and organic keyword rankings increased by 3x. One post also hit Hacker News which resulted in 5 demo requests in a single day!"
          name="Robert Gibb"
          role="Content Marketing Manager"
          company="Fabric"
          imageSrc="/media/testimonials-lg/robert_gibb_fabric_draft_dev.jpg"
          imageAlt="Robert Gibb"
        />
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
      </main>
    </div>
  )
}
