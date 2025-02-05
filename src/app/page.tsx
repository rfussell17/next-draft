import BodyDetail from '@/components/body-detail'
import BodyDetailImage from '@/components/body-detail-image'
import { Button } from '@/components/button'
import CaseStudyHome from '@/components/case-study-home'
import { Container } from '@/components/container'
import { CTA } from '@/components/cta'
import HeroTwo from '@/components/hero-two'
import { LogoCloud } from '@/components/logo-cloud'
import Testimonial from '@/components/testimonial'
import Testimonials from '@/components/testimonials-group'
import type { Metadata } from 'next'
import type { FC } from 'react'

export const metadata: Metadata = {
  description:
    'Radiant helps you sell more by revealing sensitive information about your customers.',
  robots: {
    index: false,
    follow: false,
  },
}

const bodyDetailProps = [
  {
    name: 'Expert Writers',
    description1:
      'We have a global network of expert writers. Every piece undergoes thorough editorial review.',
    description2:
      'We have a global network of expert writers. Every piece undergoes thorough editorial review.',
    href: '/learn-more',
  },
  {
    name: 'Consistent Content',
    description1:
      'We have a global network of expert writers. Every piece undergoes thorough editorial review.',
    description2:
      'We have a global network of expert writers. Every piece undergoes thorough editorial review.',
    href: '/content',
  },
  {
    name: 'Reliable Delivery',
    description1:
      'We have a global network of expert writers. Every piece undergoes thorough editorial review.',
    description2:
      'We have a global network of expert writers. Every piece undergoes thorough editorial review.',
    href: '/delivery',
  },
]

const bodyDetailImageProps = [
  {
    name: '1. Schedule A Discovery Call',
    description:
      "In this 30-minute introductory call, we'll learn about your company and marketing strategy. If Draft.dev is a good fit for your business, we can start the onboarding process.",
    href: '/learn-more',
  },
  {
    name: '2. Create Your Content Plan',
    description:
      "Based on your budget, goals, and marketing strategy, we'll create your customized content plan. This helps you see exactly what you'll be getting and ensures that we meet your expectations.",
    href: '/content',
  },
  {
    name: '3. Ready-to-publish Technical Content',
    description:
      "Once your content plan is approved and our team will get started, you'll receive tested and edited content that's ready to publish every 1-2 weeks. If our work ever falls short of your expectations, we'll work with you to revise it.",
    href: '/delivery',
  },
]

const bodyDetailImageTwoProps = [
  {
    name: 'Drive Technical Authority',
    description:
      "We create in-depth technical tutorials, guides, and documentation that showcase your product's capabilities while building credibility with developers.",
  },
  {
    name: 'Scale Your Content Program',
    description:
      'Our network of technical experts delivers consistent, high-quality content that frees your team to focus on core business priorities.',
  },
  {
    name: 'Generate Developer Interest',
    description:
      'From technical blog posts to product tutorials, we create content that attracts developers and converts them into engaged users.',
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
  'Competitive salaries',
  'Flexible work hours',
  '30 days of paid vacation',
  'Annual team retreats',
  'Benefits for you and your family',
  'A great work environment',
]

interface HeroProps {
  title: string
  subtitle: string
  primaryButtonText: string
  primaryButtonHref: string
  secondaryButtonText: string
  secondaryButtonHref: string
}

const Hero: FC<HeroProps> = ({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
}) => {
  return (
    <div className="relative">
      <Container className="relative bg-gradient-brand py-20">
        <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32">
          <h1 className="header-light max-w-5xl leading-10 text-gray-100 md:text-7xl">
            {title}
          </h1>
          <h2 className="lead-light my-6">{subtitle}</h2>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button
              variant="primary"
              href={primaryButtonHref}
              className="font-semibold"
            >
              {primaryButtonText}
            </Button>
            <Button
              variant="outline"
              colorMode="light"
              href={secondaryButtonHref}
            >
              {secondaryButtonText}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* <Hero
        title="A Content Creation Agency for Technical Writing"
        subtitle="We help Marketers and DevRels attract a technical audience."
        primaryButtonText="See our Content Marketing Services"
        primaryButtonHref="/for-marketers"
        secondaryButtonText="Technical Writing Examples"
        secondaryButtonHref="/for-dev-rels"
      /> */}

      <HeroTwo />

      <main>
        <BodyDetailImage
          title="Technical content that converts"
          paragraph="Transform your technical marketing with expert-written content that resonates with developers and generates qualified leads."
          features={bodyDetailImageTwoProps}
          mainImage={{
            src: '/site/dev_draft_dev.jpg',
            alt: 'Product screenshot',
          }}
        />
        <LogoCloud />
        <BodyDetail
          title="Why Draft.dev?"
          subtitleTop="We bring industry experts right to your blog."
          subtitleBottom="Let us handle the complexity of technical content creation."
          features={bodyDetailProps}
          learnMoreText="Learn more about our"
        />

        <Testimonial
          quote="Having draft.dev source quality technical content for the Loft Labs blog has been a competitive advantage. It's given us a steadier flow of content, which has helped our brand's visibility, and some of the posts are among the most popular ones we've published."
          name="Rich Burroughs"
          role="Developer Advocate"
          company="Loft Labs"
          imageSrc="/testimonials/rich_loft_labs_draft_dev.png"
          imageAlt="Rich Burroughs"
        />

        <BodyDetailImage
          title="How it works"
          paragraph=""
          features={bodyDetailImageProps}
          mainImage={{
            src: '/site/team_draft_dev.jpg',
            alt: 'Product screenshot',
          }}
        />

        <CaseStudyHome />
      </main>
      <Testimonials />

      <CTA
        title="Book Discovery Call"
        description="Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam."
        imageSrc="https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        imageAlt="Team environment"
        list={ctaProps}
        linkHref="#"
        linkText="See our job postings"
      />
    </div>
  )
}
