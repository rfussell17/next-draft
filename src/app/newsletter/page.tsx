import { CTAFull } from '@/components/global/cta-full'
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
      <div className="m-auto">
        <FormHeader
          title={'Sign up for our Newsletter'}
          descriptionOne="Resources, tips, and case studies to help you reach developers."
          descriptionTwo="Delivered to your inbox every month."
        />
      </div>

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
