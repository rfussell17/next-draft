import ServiceHeader from '@/components/global/headers/service-header'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import Examples from '@/components/page-components/content-types/examples'
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

export default function ContentTypes() {
  return (
    <>
      <ServiceHeader
        title="Content Types by Draft.dev"
        primaryCTA={{
          text: 'Book a Discovery Call',
          href: '/call',
        }}
        secondaryCTA={{
          text: 'Tutorial Examples',
          href: '#examples',
        }}
        description="Explore different content types we create for technical audiences."
      />
      <ServiceInfo />
      <Examples />
      <TestimonialsGroup />
    </>
  )
}
