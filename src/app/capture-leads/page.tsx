import ServiceHeader from '@/components/global/headers/service-header'
import MedCaseLoft from '@/components/media/case-studies/med-case-loft'
import { LogosDark } from '@/components/media/logos-dark'
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
      <LogosDark />
      <TestimonialsGroup />
    </>
  )
}
