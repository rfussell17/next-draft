import { BoltIcon } from '@heroicons/react/20/solid'
import { UserGroupIcon } from '@heroicons/react/24/outline'
import BodyDetail from '../../components/body-detail'
import { Container } from '../../components/container'
import { Gradient } from '../../components/gradient'
import HeroTPC from '../../components/hero-tpc'
import { LogoCloud } from '../../components/logo-cloud'

export default function ForDevRels(): JSX.Element {
  const customFeatures = [
    {
      name: 'Drive Awareness',
      description:
        'With a track record of predictably creating demand, our content strategists help implement proven frameworks that drive traffic and inbound leads. We ensure our blog posts, eBooks and video tutorials are accurate, engaging, and resonate with your technical audience.',
      href: '/custom-link',
      icon: BoltIcon,
    },
    {
      name: 'Capture Leads',
      description:
        'Our subject matter experts evaluate your product and help build out your content roadmap, turning readers into leads, and leads into new customers. Recurring check-ins ensure we adapt our content production plan according to the latest learnings.',
      href: '/custom-link',
      icon: BoltIcon,
    },
    {
      name: 'Build Trust',
      description:
        'Everything we deliver to you is written and reviewed by practicing technical professionals and edited by professional editors. Outsource the creation of technical content to us and build respect and engagement with software developers, DevOps, data engineers, and more.',
      href: '/custom-link',
      icon: BoltIcon,
    },
    // ... more features
  ]

  const features1 = [
    {
      name: 'Drive Awareness',
      description:
        'With a track record of predictably creating demand, our content strategists help implement proven frameworks that drive traffic and inbound leads. We ensure our blog posts, eBooks and video tutorials are accurate, engaging, and resonate with your technical audience.',
      href: '/custom-link',
      icon: UserGroupIcon,
    },
    {
      name: 'Capture Leads',
      description:
        'Our subject matter experts evaluate your product and help build out your content roadmap, turning readers into leads, and leads into new customers. Recurring check-ins ensure we adapt our content production plan according to the latest learnings.',
      href: '/custom-link',
      icon: UserGroupIcon,
    },
    {
      name: 'Build Trust',
      description:
        'Everything we deliver to you is written and reviewed by practicing technical professionals and edited by professional editors. Outsource the creation of technical content to us and build respect and engagement with software developers, DevOps, data engineers, and more.',
      href: '/custom-link',
      icon: UserGroupIcon,
    },
  ]

  const features2 = [
    {
      name: 'Expert Writers',
      description1:
        'We have a global network of expert writers. Every piece undergoes thorough editorial review.',
      description2:
        'We have a global network of expert writers. Every piece undergoes thorough editorial review.',
      href: '/learn-more',
    },
    {
      name: 'Consistent Content',
      description1:
        'We have a global network of expert writers. Every piece undergoes thorough editorial review.',
      description2:
        'We have a global network of expert writers. Every piece undergoes thorough editorial review.',
      href: '/content',
    },
    {
      name: 'Reliable Delivery',
      description1:
        'We have a global network of expert writers. Every piece undergoes thorough editorial review.',
      description2:
        'We have a global network of expert writers. Every piece undergoes thorough editorial review.',
      href: '/delivery',
    },
  ]

  return (
    <div>
      <HeroTPC
        eyebrow="We help DevRels scale their efforts"
        title="Developer Marketing that Resonates"
        description="We support Developer Relations and Developer Advocate Teams by consistently delivering content that technical audiences truly care about and respect."
        features={customFeatures}
        accentColor="text-primary"
        textColor="text-primary"
        secondaryTextColor="text-gray-600"
      />
      <main>
        <BodyDetail
          title="Why Choose Us?"
          subtitleTop="We bring industry experts right to your blog."
          subtitleBottom="Let us handle the complexity of technical content creation."
          features={features2}
          learnMoreText="Discover More"
        />
        <Gradient className="py-20">
          <Container>
            <LogoCloud />
          </Container>
        </Gradient>
      </main>
    </div>
  )
}
