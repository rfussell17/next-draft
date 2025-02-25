import ServiceHeader from '@/components/global/headers/service-header'
import SocialProof from '@/components/media/social-proof'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import ServiceInfo from '@/components/page-components/playbook/service-info'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  description:
    'Download our Technical Marketing Playbook: Learn everything you need to produce high-quality technical marketing content.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function Playbook() {
  return (
    <>
      <ServiceHeader
        title="The Technical Content Manager's Playbook"
        primaryCTA={{
          text: 'Book a Discovery Call',
          href: '/call',
        }}
        secondaryCTA={{
          text: 'Video Tutorial Examples',
          href: '#examples',
        }}
        description="Everything you need to produce high-quality technical marketing content."
      />

      <ServiceInfo />
      <SocialProof />
      <TestimonialsGroup />
    </>
  )
}
