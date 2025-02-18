import { CTAFull } from '@/components/global/cta-full'
import PageHeader from '@/components/global/page-header'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
import AirtableEmbed from '@/components/page-components/vendors/air-table'

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
  title: 'Write for Draft.dev',
  description:
    'Companies all over the world have closed millions of deals with Radiant. Sign up today and start selling smarter.',
}
export default function Write() {
  return (
    <main className="overflow-hidden">
      <PageHeader header="Write for Draft.dev" />

      <AirtableEmbed />

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
  )
}
