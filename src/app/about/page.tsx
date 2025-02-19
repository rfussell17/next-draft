import { MedHeader } from '@/components/global/headers/med-header'
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
    <>
      <MedHeader
        title="About Draft.Dev"
        descriptionOne="Draft.dev is a content marketing agency focused on
          creating in-depth, technical content for companies in tech. We work
          with subject matter experts from around the world to create
          tutorials, blog posts, and e-books for our clients. We're a small but quickly
          growing team of technologists, writers, marketers, and editors."
        descriptionTwo="Want to join us? Learn more about our open roles here."
        image={{
          src: '/site/headers/newsletter_draft_dev.jpg',
          alt: 'Draft.dev Newsletter',
        }}
      />

      <main className="overflow-hidden">
        <What />
        <Team />
        <Why />
        <SocialProof />
        <How />
        <LogosDark />
      </main>
    </>
  )
}
