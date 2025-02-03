import BodyDetail from '../../components/body-detail'

import { CTA } from '@/components/cta'
import { HeroSecondary } from '@/components/hero-secondary'
import TestimonialsGroup from '@/components/testimonials-group'
import type { Metadata } from 'next'
import { LogoCloud } from '../../components/logo-cloud'

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
    'DevRel Specific content in here',
    'Flexible work hours',
    '30 days of paid vacation',
    'Annual team retreats',
    'Benefits for you and your family',
    'A great work environment',
  ]

  const features2 = [
    {
      name: 'Drive Awareness',
      description1:
        'With a track record of predictably creating demand, our content strategists help implement proven frameworks that drive traffic and inbound leads.',
      description2:
        'We ensure our blog posts, eBooks and video tutorials are accurate, engaging, and resonate with your technical audience.',
      href: '/drive-awareness',
    },
    {
      name: 'Capture Leads',
      description1:
        'Our subject matter experts evaluate your product and help build out your content roadmap, turning readers into leads, and leads into new customers.',
      description2:
        'Recurring check-ins ensure we adapt our content production plan according to the latest learnings.',
      href: '/capture-leads',
    },
    {
      name: 'Build Trust',
      description1:
        'Everything we deliver to you is written and reviewed by practicing technical professionals and edited by professional editors.',
      description2:
        'Outsource the creation of technical content to us and build respect and engagement with software developers, DevOps, data engineers, and more.',
      href: '/build-trust',
    },
  ]

  return (
    <div>
      <HeroSecondary
        title="Developer Marketing that Resonates"
        description="We support Developer Relations and Developer Advocate Teams by consistently delivering content that technical audiences truly care about and respect."
        eyebrowLabel="We help DevRels scale their efforts"
        eyebrowText="See Our Technical Writing Examples "
        eyebrowHref="#"
        primaryCtaText="Get started"
        primaryCtaHref="#"
        secondaryCtaText="Learn more"
        secondaryCtaHref="#"
        imageSrc="https://tailwindui.com/plus/img/component-images/project-app-screenshot.png"
      />
      <main>
        <BodyDetail
          title="Why Choose Us?"
          subtitleTop="We bring industry experts right to your blog."
          subtitleBottom="Let us handle the complexity of technical content creation."
          features={features2}
          learnMoreText="See how we"
        />
        <LogoCloud />
        <TestimonialsGroup />
        <CTA
          title="Book a discovery call"
          description="Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam."
          imageSrc="https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          imageAlt="Team environment"
          list={ctaProps}
          linkHref="#"
          linkText="See our job postings"
        />
      </main>
    </div>
  )
}
