import { CTAFull } from '@/components/cta-full'
import PageHeader from '@/components/global/page-header'
import TestimonialsGroup from '@/components/testimonials-group'

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
export default function BookDiscoveryCall() {
  return (
    <main className="overflow-hidden">
      <PageHeader
        seoTitle="Schedule A Discovery Call"
        header="It's time for your SaaS business to invest in technical content"
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
    </main>
  )
}
