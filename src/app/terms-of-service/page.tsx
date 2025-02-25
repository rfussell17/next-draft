import { MedHeader } from '@/components/global/headers/med-header'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description:
    'Read through our Terms of Service - Draft.dev',
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
      />
      <TestimonialsGroup />
    </>
  )
}
