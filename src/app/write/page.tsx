import PageHeader from '@/components/global/page-header'
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
      <PageHeader header="Write for Draft.dev" />
      <main className="block">
        <AirtableEmbed />
      </main>
    </div>
  )
}
