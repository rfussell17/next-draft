import Image from 'next/image'
import Link from 'next/link'

export const Header = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-brand">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-24">
        {/* Left Section */}
        <div className="mx-auto max-w-2xl lg:mx-0 lg:shrink-0 lg:pt-8">
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <Link
              href="/announcements/feature-launch"
              className="inline-flex space-x-6"
            >
              <span className="hero-eyebrow">
                For Developer Relations Teams
              </span>
            </Link>
          </div>

          <h1 className="header-light">Transform your workflow</h1>
          <h3 className="lead-light">
            Get more done with our intuitive platform designed for modern teams.
          </h3>

          <div className="mt-10 flex items-center gap-x-6">
            <Link href="/get-started" className="hero-cta-primary">
              Get started
            </Link>
            <Link href="/learn-more" className="hero-cta-secondary">
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="hero-image-container">
              <Image
                alt="Platform dashboard screenshot"
                src="/images/dashboard-preview.png"
                width={2432}
                height={1000}
                className="w-[76rem] rounded-md shadow-2xl ring-1 ring-primary/10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
