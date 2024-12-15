import { Container } from '@/components/container'
import { CTA } from '@/components/cta'
import { Gradient } from '@/components/gradient'
import { LogoCloud } from '@/components/logo-cloud'
import TestimonialsGroup from '@/components/testimonials-group'
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
} from '@heroicons/react/20/solid'
import { ServiceIntro } from '../../components/service-intro'

const features = [
  {
    name: 'Predictable Leads',
    description:
      'We help you establish and maintain a predictable lead generation engine based on ebooks, whitepapers, landing page copywriting and social media posts, that automatically works for you in the background.',
    href: '#',
    cta: 'B2B Tech Marketing',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Lead Qualification',
    description:
      'With our proven lead qualification system and our expert guidance you will consistently convert organic traffic into high-quality Marketing Qualified Leads and Sales Qualified Leads your Sales organization can close.',
    href: '#',
    cta: 'lead generation for saas companies LP',
    icon: LockClosedIcon,
  },
  {
    name: 'Recurring check-ins',
    description:
      'Maximize your lead generation ROI with our analytical data-driven approach. Recurring check-ins ensure we adapt our content production plan according to the latest learnings.',
    href: '#',
    cta: 'See our Content Strategy Services',
    icon: ArrowPathIcon,
  },
]

const ctaProps = [
  'marketing-specific content in here',
  'Flexible work hours',
  '30 days of paid vacation',
  'Annual team retreats',
  'Benefits for you and your family',
  'A great work environment',
]

export default function BuildTrust() {
  return (
    <>
      <ServiceIntro
        eyebrow="Consistently turn organic traffic into MQLs and SQLs"
        title="Inbound Lead Generation and Technical Copy Writing"
        subtitle="We have implemented our lead generation engines at tech companies driving 100s of millions in recurring revenue, predictably driving traffic and leads."
        features={features}
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
