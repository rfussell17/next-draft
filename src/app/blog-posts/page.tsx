import ServiceHeader from '@/components/global/headers/service-header'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import Examples from '@/components/page-components/blog-service/examples'
import ServiceInfo from '@/components/page-components/blog-service/service-info'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  description:
    'Radiant helps you sell more by revealing sensitive information about your customers.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function BlogPosts() {
  return (
    <>
      <ServiceHeader
        title="Content for Your Developer Blog"
        primaryCTA={{
          text: 'Book a Discovery Call',
          href: '/call',
        }}
        secondaryCTA={{
          text: 'Tutorial Examples',
          href: '#examples',
        }}
        description="We help developer marketing teams create blog posts that software engineers actually want to read."
      />
      <ServiceInfo />
      <Examples />
      <TestimonialsGroup />
    </>
  )
}
