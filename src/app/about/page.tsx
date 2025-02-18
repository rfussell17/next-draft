import PageHeader from '@/components/global/page-header'
import { LogosDark } from '@/components/media/logos-dark'
import SocialProof from '@/components/media/social-proof'
import How from '@/components/page-components/company/how'
import Team from '@/components/page-components/company/team'
import What from '@/components/page-components/company/what'
import Why from '@/components/page-components/company/why'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description:
    'Radiant helps you sell more by revealing sensitive information about your customers.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function About() {
  return (
    <main className="overflow-hidden">
      <PageHeader header="About Draft.dev" />
      <What />
      <Team />
      <Why />
      <SocialProof />
      <How />
      <LogosDark />
    </main>
  )
}
