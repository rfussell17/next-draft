import CardList from '@/components/card-list'
import { CTAFull } from '@/components/cta-full'
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
    name: 'Strategic Content in Every Format',
    description:
      'We drive awareness by providing blog posts, eBooks and video tutorials at a consistent cadence, freeing up your marketers and developers to focus on other priorities. We also suggest promotional strategies that place the content in front of your target audience.',
    href: '#',
    cta: 'Learn more about our Business to Business Marketing Agency',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'For Marketers and DevRels',
    description:
      'Whether you are a Marketer that needs help with technical content or a DevRel that needs support on the strategic side, we create content that puts your product in a good light, helping drive developer engagement with your business and product.',
    href: '#',
    cta: 'Learn more about our B2B Tech Marketing',
    icon: LockClosedIcon,
  },
  {
    name: 'Enterprise Content Marketing',
    description:
      'We help enterprises create successful content programs that drive awareness and leads. Our seasoned team of content strategists use proven frameworks to make sure your content delivers the highest ROI for your business.',
    href: '#',
    cta: 'Learn more about our Enterprise Content Marketing ',
    icon: ArrowPathIcon,
  },
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
      <ServiceIntro
        eyebrow="Scale your content efforts"
        title="Custom Content Marketing that Drives Traffic"
        subtitle="We specialize in creating technical content that gets reach and drives business."
        features={features}
      />

      <LogoCloud />
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
        imageSrc="https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        imageAlt="Team environment"
        list={ctaProps}
        linkHref="#"
        linkText="See our job postings"
      />
    </>
  )
}
