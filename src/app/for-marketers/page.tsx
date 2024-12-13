import BodyDetail from '@/components/body-detail'
import { Container } from '@/components/container'
import { Gradient } from '@/components/gradient'
import Hero from '@/components/hero'
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
      <Hero
        title={
          <>
            Technical Marketing
            <br />
            that Converts
          </>
        }
        subtitle={
          <>
            We support Marketing Teams
            <br />
            with technical content.
          </>
        }
        primaryButtonText="See our Content Marketing Services"
        primaryButtonHref="#"
        secondaryButtonText="Technical Writing Examples"
        secondaryButtonHref="/pricing"
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
