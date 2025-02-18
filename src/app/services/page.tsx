import { Container } from '@/components/global/container'
import { CTAFull } from '@/components/global/cta-full'
import Testimonial from '@/components/media/testimonials/testimonial'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Companies all over the world have closed millions of deals with Radiant. Sign up today and start selling smarter.',
  robots: {
    index: false,
    follow: false,
  },
}

function Header() {
  return (
    <Container className="mt-16">
      <h1>Content Marketing Services</h1>
      <h3 className="mt-6 max-w-3xl">
        Companies all over the world have closed millions of deals with Radiant.
        Sign up today and start selling smarter.
      </h3>
    </Container>
  )
}

export default function Services() {
  const ctaProps = [
    'Competitive salaries',
    'Flexible work hours',
    '30 days of paid vacation',
    'Annual team retreats',
    'Benefits for you and your family',
    'A great work environment',
  ]

  return (
    <main className="overflow-hidden">
      <Header />

      <Testimonial
        quote="Having draft.dev source quality technical content for the Loft Labs blog has been a competitive advantage. It's given us a steadier flow of content, which has helped our brand's visibility, and some of the posts are among the most popular ones we've published."
        name="Rich Burroughs"
        role="Developer Advocate"
        company="Loft Labs"
        imageSrc="/media/testimonials-lg/rich_burroughs_loft_labs_draft_dev.jpg"
        imageAlt="Rich Burroughs"
      />
      <CTAFull
        title="Book a discovery call"
        description="Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam."
        imageSrc="/site/cta_draft_dev.jpg"
        imageAlt="Team environment"
        list={ctaProps}
        linkHref="/discovery-call"
        linkText="Book a Discovery Call"
      />
    </main>
  )
}
