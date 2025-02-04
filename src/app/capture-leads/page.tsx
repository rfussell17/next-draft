import CardList from '@/components/card-list'
import { CTA } from '@/components/cta'
import { LogoCloud } from '@/components/logo-cloud'
import TestimonialsGroup from '@/components/testimonials-group'
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
} from '@heroicons/react/20/solid'
import type { Metadata } from 'next'
import { ServiceIntro } from '../../components/service-intro'

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
      <ServiceIntro
        eyebrow="Consistently turn organic traffic into MQLs and SQLs"
        title="Inbound Lead Generation and Technical Copy Writing"
        subtitle="We have implemented our lead generation engines at tech companies driving 100s of millions in recurring revenue, predictably driving traffic and leads."
        features={features}
      />
      <LogoCloud />
      <TestimonialsGroup />
      <CardList
        title="Ongoing technical content"
        subtitle="Build a steady stream of technical content that scales with your business."
        includedFeatures={cardListPropsOne}
        addonTitle="Add-on services"
        addonFeatures={cardListPropsTwo}
        requestPricingHref="#"
        requestPricingText="Request pricing"
      />
      <CTA
        title="Book a discovery call"
        description="Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam."
        imageSrc="https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        imageAlt="Team environment"
        list={ctaProps}
        linkHref="#"
        linkText="See our job postings"
      />
    </>
  )
}
