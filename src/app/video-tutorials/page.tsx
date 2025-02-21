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

export default function VideoTutorials() {
  return (
    <>
      <ServiceHeader
        title="Video Tutorials by Draft.dev"
        primaryCTA={{
          text: 'Book a Discovery Call',
          href: '/call',
        }}
        secondaryCTA={{
          text: 'Video Tutorial Examples',
          href: '#examples',
        }}
        description="We create high-quality video tutorials for a technical audience."
      />
      <ServiceInfo />
      <Examples />
      <TestimonialsGroup />
    </>
  )
}
