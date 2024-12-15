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
      'We help you establish and maintain a predictable lead generation engine based on ebooks, whitepapers, landing page copywriting and social media posts, that automatically works for you in the background. ',
    href: '#',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Lead Qualification',
    description:
      'With our proven lead qualification system and our expert guidance you will consistently convert organic traffic into high-quality Marketing Qualified Leads and Sales Qualified Leads your Sales organization can close.',
    href: '#',
    icon: LockClosedIcon,
  },
  {
    name: 'Recurring check-ins',
    description:
      'Maximize your lead generation ROI with our analytical data-driven approach. Recurring check-ins ensure we adapt our content production plan according to the latest learnings.',
    href: '#',
    icon: ArrowPathIcon,
  },
]

export default function BuildTrust() {
  return (
    <ServiceIntro
      eyebrow="Consistently turn organic traffic into MQLs and SQLs"
      title="Inbound Lead Generation and Technical Copy Writing"
      subtitle="We have implemented our lead generation engines at tech companies driving 100s of millions in recurring revenue, predictably driving traffic and leads."
      features={features}
    />
  )
}
