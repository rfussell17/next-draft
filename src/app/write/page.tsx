import { MedHeader } from '@/components/global/med-header'
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
    <div>
      <MedHeader
        title="Write for Draft.dev"
        descriptionOne="If you're a software developer and you want to build your personal brand while getting paid to write about interesting technical topics, you've come to the right place. "
        descriptionTwo="We create content that will be read by a wide range of readers around the world. As such, we're committed to supporting diversity in our writers and encourage everyone at all experience levels to apply."
        image={{
          src: '/site/headers/write_draft_dev.jpg',
          alt: 'Trust Draft Dev',
        }}
      />
      <main className="block">
        <AirtableEmbed />
      </main>
    </div>
  )
}
