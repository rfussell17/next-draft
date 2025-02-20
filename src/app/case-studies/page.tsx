import CaseStudyMain from '@/components/media/case-studies/case-study-main'
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

export default function CaseStudy() {
  return (
    <>
      <CaseStudyMain />
      <LogosDark />
      <TestimonialsGroup />
    </>
  )
}
