import CardList from '@/components/card-list'
import { CTAFull } from '@/components/cta-full'
import CaseStudyLight from '@/components/mini-case-earthly'
import SocialProof from '@/components/social-proof'
import TestimonialsGroup from '@/components/testimonials-group'
import Header from '@/components/use-cases/capture-leads/header'
import Why from '@/components/use-cases/capture-leads/why'
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
    name: 'Predictable Leads',
    description:
      'We help you establish and maintain a predictable lead generation engine based on ebooks, whitepapers, landing page copywriting and social media posts, that automatically works for you in the background.',
    href: '#',
    cta: 'B2B Tech Marketing',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Lead Qualification',
    description:
      'With our proven lead qualification system and our expert guidance you will consistently convert organic traffic into high-quality Marketing Qualified Leads and Sales Qualified Leads your Sales organization can close.',
    href: '#',
    cta: 'lead generation for saas companies LP',
    icon: LockClosedIcon,
  },
  {
    name: 'Recurring check-ins',
    description:
      'Maximize your lead generation ROI with our analytical data-driven approach. Recurring check-ins ensure we adapt our content production plan according to the latest learnings.',
    href: '#',
    cta: 'See our Content Strategy Services',
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
