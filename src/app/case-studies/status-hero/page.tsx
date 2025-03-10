import CaseStudyStatusHero from '@/components/media/case-studies/case-study-status-hero'
import { LogosDark } from '@/components/media/logos-dark'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Status Hero Case Study - Draft.dev',
  description:
    'Learn how Status Hero grew blog traffic by 211% and increased its trial conversion rate with Draft.dev',
  robots: {
    index: false,
    follow: false,
  },
}

export default function StatusHeroCaseStudy() {
  return (
    <>
      <CaseStudyStatusHero />
      <LogosDark />
      <TestimonialsGroup />
    </>
  )
}
