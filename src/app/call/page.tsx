import { CTAFull } from '@/components/global/cta-full'
import { MedHeader } from '@/components/global/med-header'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import CalendlyWidget from '@/components/page-components/vendors/calendly'

import type { Metadata } from 'next'

const ctaProps = [
  'marketing-specific content in here',
  'Flexible work hours',
  '30 days of paid vacation',
  'Annual team retreats',
  'Benefits for you and your family',
  'A great work environment',
]

export const metadata: Metadata = {
  title: 'Call Us',
  description:
    'Companies all over the world have closed millions of deals with Radiant. Sign up today and start selling smarter.',
}
export default function Call() {
  return (
    <>
      <MedHeader
        title="Book a Discovery Call"
        descriptionOne="We write technical marketing content designed to reach software developers, DevOps practitioners, data engineers, and engineering managers. If your SaaS business is ready to invest in technical content this year, Draft.dev might be a great fit."
        descriptionTwo="Use the form below to schedule a discovery call or reach out to sales@draft.dev."
        image={{
          src: '/site/headers/terms_draft_dev.jpg',
          alt: 'Draft.dev Newsletter',
        }}
      />
      <main className="overflow-hidden">
        <CalendlyWidget url="https://calendly.com/d/2by-kmh-7q6" />
        <TestimonialsGroup />
        <CTAFull
          title="Book a discovery call"
          description="Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam."
          imageSrc="/site/cta_draft_dev.jpg"
          imageAlt="Team environment"
          list={ctaProps}
          linkHref="/call"
          linkText="Book a Discovery Call"
        />
      </main>
    </>
  )
}
