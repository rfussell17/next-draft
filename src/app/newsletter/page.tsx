import { FormHeader } from '@/components/global/headers/form-header'
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

export default function Newsletter() {
  return (
    <>
      <div className="m-auto">
        <FormHeader
          title={'Sign up for our Newsletter'}
          descriptionOne="Resources, tips, and case studies to help you reach developers."
          descriptionTwo="Delivered to your inbox every month."
        />
      </div>

      <TestimonialsGroup />
    </>
  )
}
