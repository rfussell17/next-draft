import BodyDetail from '@/components/body-detail'
import { Container } from '@/components/container'
import { Gradient } from '@/components/gradient'
import { HeroSecondary } from '@/components/hero-secondary'
import { LogoCloud } from '@/components/logo-cloud'

export default function ForMarketers(): JSX.Element {
  const features1 = [
    {
      name: 'Drive Awareness',
      description1:
        'We drive traffic with a consistent cadence of content, freeing up your marketers and developers to focus on other priorities.',
      description2:
        'Benefit from a dedicated content strategist who uses proven frameworks to make sure your content program delivers the highest ROI for your business.',
      href: '/learn-more',
    },
    {
      name: 'Capture Leads',
      description1:
        'Our teams provide you with technical ebooks, whitepapers, landing page copywriting, and social media posts.',
      description2:
        'Capture leads by implementing a predictable lead-generation engine that converts organic traffic automatically into high-quality MQLs and SQLs.',
      href: '/content',
    },
    {
      name: 'Build Trust',
      description1:
        'We deliver high-quality tech content that is written and reviewed by experienced developers and edited by professional editors.',
      description2:
        'Build credibility with your technical audiences through a consistent stream of quality content, tailored specifically to their needs and interests.',
      href: '/delivery',
    },
  ]

  return (
    <div>
      <HeroSecondary
        title="Technical Marketing that Converts"
        description="We support Marketing Teams with technical content."
        eyebrowLabel="We help Marketors scale their efforts"
        eyebrowText="See Our Technical Writing Examples "
        eyebrowHref="#"
        primaryCtaText="Get started"
        primaryCtaHref="#"
        secondaryCtaText="Learn more"
        secondaryCtaHref="#"
        imageSrc="https://tailwindui.com/plus/img/component-images/project-app-screenshot.png"
      />
      <main>
        <BodyDetail
          title="We specialize in content marketing for tech companies"
          subtitleTop="We create lead-generation engines based on blog posts, eBooks, and video tutorials for Marketers looking to attract a technical audience. "
          subtitleBottom=""
          features={features1}
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
