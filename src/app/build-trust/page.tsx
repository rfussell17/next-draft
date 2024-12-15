import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
} from '@heroicons/react/20/solid'
import { ServiceIntro } from '../../components/service-intro'

const features = [
  {
    name: 'Technical Writing that Convinces',
    description:
      'Everything we produce is written by subject matter experts, technically reviewed and professionally edited by our in-house team, delivered to you in a ready-to-publish format along with social posts and SEO meta descriptions.',
    href: '#',
    cta: 'See Technical Writing Examples',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Thought Leadership Content',
    description:
      'We provide you with written and video material that allows for a consistent output of high-quality content. The topics we work on are defined by experienced developers and are guaranteed to resonate with your readers.',
    href: '#',
    cta: 'About Our Thought Leadership Content Marketing',
    icon: LockClosedIcon,
  },
  {
    name: 'Build Respect with Your Technical Audience',
    description:
      'Our internal subject matter experts evaluate your product and will take care of writing, reviewing, and editing content pieces, be it blog posts, ebooks, or white papers about your industry or your product specifically.',
    href: '#',
    cta: 'Outsource Your Technical Writing',
    icon: ArrowPathIcon,
  },
]

export default function BuildTrust() {
  return (
    <ServiceIntro
      eyebrow="Written by Developers, for Developers"
      title="Our Technical Content Writers are Practicing Professionals"
      subtitle="From articles about your industry, to product tutorials, to B2B Thought Leadership pieces - our writing and editing teams of professional developers have you covered."
      features={features}
    />
  )
}
