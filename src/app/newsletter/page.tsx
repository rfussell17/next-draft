import { CTAFull } from '@/components/global/cta-full'
import { MedHeader } from '@/components/global/med-header'
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

const ctaProps = [
  'marketing-specific content in here',
  'Flexible work hours',
  '30 days of paid vacation',
  'Annual team retreats',
  'Benefits for you and your family',
  'A great work environment',
]

export default function Newsletter() {
  return (
    <>
      <MedHeader
        title="Draft.Dev Newsletter"
        descriptionOne="Resources, tips, and case studies to help you reach developers."
        descriptionTwo="Delivered to your inbox every month."
        image={{
          src: '/site/headers/newsletter_draft_dev.jpg',
          alt: 'Draft.dev Newsletter',
        }}
      />

      <TestimonialsGroup />
      <CTAFull
        title="Book a discovery call"
        description="Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam."
        imageSrc="/site/cta_draft_dev.jpg"
        imageAlt="Team environment"
        list={ctaProps}
        linkHref="/discovery-call"
        linkText="Book a Discovery Call"
      />
    </>
  )
}
