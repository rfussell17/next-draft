import { CTAFull } from '@/components/global/cta-full'
import CaseStudyLoftLabs from '@/components/media/case-studies/case-study-loft'
import { LogosDark } from '@/components/media/logos-dark'
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
  'Competitive salaries',
  'Flexible work hours',
  '30 days of paid vacation',
  'Annual team retreats',
  'Benefits for you and your family',
  'A great work environment',
]

export default function CaseStudy() {
  return (
    <>
      <CaseStudyLoftLabs />
      <LogosDark />
      <TestimonialsGroup />
      <CTAFull
        title="Book Discovery Call"
        description="Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam."
        imageSrc="https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        imageAlt="Team environment"
        list={ctaProps}
        linkHref="#"
        linkText="See our job postings"
      />
    </>
  )
}
