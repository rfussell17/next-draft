import { MedHeader } from '@/components/global/headers/med-header'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description:
    'Radiant helps you sell more by revealing sensitive information about your customers.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function TermsOfService() {
  return (
    <>
      <MedHeader
        title="Draft.Dev Terms of Service"
        descriptionOne="..."
        descriptionTwo="..."
        image={{
          src: '/site/headers/terms_draft_dev.jpg',
          alt: 'Draft.dev Newsletter',
        }}
      />
      <TestimonialsGroup />
    </>
  )
}
