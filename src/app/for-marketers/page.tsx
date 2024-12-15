import BodyDetail from '@/components/body-detail'
import { Container } from '@/components/container'
import { CTA } from '@/components/cta'
import { Gradient } from '@/components/gradient'
import { HeroSecondary } from '@/components/hero-secondary'
import { LogoCloud } from '@/components/logo-cloud'
import TestimonialsGroup from '@/components/testimonials-group'

export default function ForMarketers(): JSX.Element {
  const ctaProps = [
    'marketing-specific content in here',
    'Flexible work hours',
    '30 days of paid vacation',
    'Annual team retreats',
    'Benefits for you and your family',
    'A great work environment',
  ]

  const features1 = [
    {
      name: 'Drive Awareness',
      description1:
        'We drive traffic with a consistent cadence of content, freeing up your marketers and developers to focus on other priorities. Benefit from a dedicated content strategist who uses proven frameworks to make sure your content program delivers the highest ROI for your business.',
      description2: '',
      href: '/learn-more',
    },
    {
      name: 'Capture Leads',
      description1:
        'Our teams provide you with technical ebooks, whitepapers, landing page copywriting, and social media posts. Capture leads by implementing a predictable lead-generation engine that converts organic traffic automatically into high-quality MQLs and SQLs.',
      description2: '',
      href: '/content',
    },
    {
      name: 'Build Trust',
      description1:
        'We deliver high-quality tech content that is written and reviewed by experienced developers and edited by professional editors. Build credibility with your technical audiences through a consistent stream of quality content, tailored specifically to their needs and interests.',
      description2: '',
      href: '/delivery',
    },
  ]

  return (
    <div>
      <HeroSecondary
        title="Technical Marketing that Converts"
        description="We specialize in content marketing for tech companies and create lead generation engines based on blog posts, eBooks, and video tutorials for Marketers looking to attract a technical audience."
        eyebrowLabel="We support Marketing Teams with technical content"
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
          title="Content marketing for tech companies"
          subtitleTop="We create lead-generation engines based on blog posts, eBooks, and video tutorials for Marketers looking to attract a technical audience. "
          subtitleBottom=""
          features={features1}
          learnMoreText="See how we"
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
      </main>
    </div>
  )
}
