import ServiceHeader from '@/components/global/headers/service-header'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import Examples from '@/components/page-components/tutorials/examples'
import ServiceInfo from '@/components/page-components/tutorials/service-info'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  description:
    'Radiant helps you sell more by revealing sensitive information about your customers.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function Tutorials() {
  return (
    <>
      <ServiceHeader
        title="Developer Tutorials"
        primaryCTA={{
          text: 'Book a Discovery Call',
          href: '/call',
        }}
        secondaryCTA={{
          text: 'See Examples',
          href: '#examples',
        }}
        description="We can help you create in-depth tutorials designed to reach software developers."
      />
      <ServiceInfo />
      <Examples />
      <TestimonialsGroup />
    </>
  )
}
