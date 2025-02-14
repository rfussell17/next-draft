import { CTAFull } from '@/components/global/cta-full'
import PageHeader from '@/components/global/page-header'
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
      <PageHeader
        seoTitle="About Draft.dev"
        header="We believe great marketing content can also be educational"
      />
      <TestimonialsGroup />
      <CTAFull
        title="Book a discovery call"
        description="Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam."
        imageSrc="/site/cta.jpg"
        imageAlt="Team environment"
        list={ctaProps}
        linkHref="/discovery-call"
        linkText="Book a Discovery Call"
      />
    </>
  )
}
