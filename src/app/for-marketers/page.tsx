import BodyDetailSmall from '@/components/body-detail-small'
import { Gradient } from '@/components/gradient'

export default function ForMarketers(): JSX.Element {
  const features = [
    {
      name: 'Expert Writers',
      description1: 'We have a global network of expert writers.',
      description2: 'Every piece undergoes thorough editorial review.',
      href: '/learn-more',
    },
    {
      name: 'Consistent Content',
      description1: 'Weekly or bi-weekly posts tailored to your audience.',
      description2: 'Quality and style you can trust, every time.',
      href: '/content',
    },
    {
      name: 'Reliable Delivery',
      description1: 'No more scrambling for last-minute content.',
      description2: 'Your editorial calendar stays full and on track.',
      href: '/delivery',
    },
  ]

  return (
    <Gradient className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="text-gray-100 bg-tertiaryBlue inline-block rounded-xl px-5 text-base/7 font-semibold md:px-10">
            We support Marketing Teams with technical content
          </p>
          <h1 className="text-white mt-4 text-pretty text-4xl font-semibold tracking-tight sm:text-5xl lg:text-balance">
            Technical Marketing that Converts
          </h1>
          <h2 className="text-white mt-6 text-lg/8">
            We specialize in content marketing for tech companies and create
            lead generation engines based on blog posts, eBooks, and video
            tutorials for Marketers looking to attract a technical audience.
          </h2>
        </div>
        <BodyDetailSmall
          features={features}
          learnMoreText="Discover More"
          description1="sdasd"
          description2=""
        />
      </div>
    </Gradient>
  )
}
