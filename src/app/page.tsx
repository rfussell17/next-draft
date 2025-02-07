import BodyDetail from '@/components/body-detail'
import CaseStudyHome from '@/components/case-study-home'
import { CTA } from '@/components/cta'
import Hero from '@/components/home/hero'
import How from '@/components/home/how'
import What from '@/components/home/what'
import { LogoCloud } from '@/components/logo-cloud'
import Testimonial from '@/components/testimonial'
import Testimonials from '@/components/testimonials-group'
import type { Metadata } from 'next'

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

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />

      <main>
        <What />
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
        <How />
        {/* <BodyDetailImage
          title="How it works"
          paragraph=""
          features={bodyDetailImageProps}
          mainImage={{
            src: '/site/team_draft_dev.jpg',
            alt: 'Product screenshot',
          }}
        /> */}

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
