import { MedHeader } from '@/components/global/headers/med-header'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import PastWebinars from '@/components/page-components/webinars/past-webinars'
import UpcomingWebinars from '@/components/page-components/webinars/upcoming'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description:
    'Radiant helps you sell more by revealing sensitive information about your customers.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function Webinars() {
  return (
    <>
      <MedHeader
        title="Draft.Dev Webinars"
        descriptionOne="Elevate your developer marketing expertise with our monthly webinar series."
        descriptionTwo=""
      />
      <UpcomingWebinars />
      <PastWebinars />
      <TestimonialsGroup />
    </>
  )
}
