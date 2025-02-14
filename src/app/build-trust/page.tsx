import CardList from '@/components/card-list'
import { CTAFull } from '@/components/cta-full'
import CaseStudyLight from '@/components/mini-case-earthly'
import SocialProof from '@/components/social-proof'
import TestimonialsGroup from '@/components/testimonials-group'
import Header from '@/components/use-cases/build-trust/header'
import Why from '@/components/use-cases/build-trust/why'
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
} from '@heroicons/react/20/solid'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description:
    'Radiant helps you sell more by revealing sensitive information about your customers.',
  robots: {
    index: false,
    follow: false,
  },
}

const features = [
  {
    name: 'Technical Writing that Convinces',
    description:
      'Everything we produce is written by subject matter experts, technically reviewed and professionally edited by our in-house team, delivered to you in a ready-to-publish format along with social posts and SEO meta descriptions.',
    href: '#',
    cta: 'See Technical Writing Examples',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Thought Leadership Content',
    description:
      'We provide you with written and video material that allows for a consistent output of high-quality content. The topics we work on are defined by experienced developers and are guaranteed to resonate with your readers.',
    href: '#',
    cta: 'About Our Thought Leadership Content Marketing',
    icon: LockClosedIcon,
  },
  {
    name: 'Build Respect with Your Technical Audience',
    description:
      'Our internal subject matter experts evaluate your product and will take care of writing, reviewing, and editing content pieces, be it blog posts, ebooks, or white papers about your industry or your product specifically.',
    href: '#',
    cta: 'Outsource Your Technical Writing',
    icon: ArrowPathIcon,
  },
]

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
      <Header />
      <Why />
      <SocialProof />
      <CaseStudyLight />
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
