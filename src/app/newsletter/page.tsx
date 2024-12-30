import { Container } from '@/components/container'
import { CTA } from '@/components/cta'
import { Gradient } from '@/components/gradient'
import { LogoCloud } from '@/components/logo-cloud'
import PageHeader from '@/components/page-header'
import TestimonialsGroup from '@/components/testimonials-group'
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
        title="Newsletter"
        description="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat."
      />
      <Gradient className="py-20">
        <Container>
          <LogoCloud />
        </Container>
      </Gradient>
      <TestimonialsGroup />
      <CTA
        title="Book a discovery call"
        description="Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam."
        imageSrc="https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        imageAlt="Team environment"
        list={ctaProps}
        linkHref="#"
        linkText="See our job postings"
      />
    </>
  )
}
