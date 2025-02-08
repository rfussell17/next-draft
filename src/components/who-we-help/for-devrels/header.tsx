import Image from 'next/image'
import Link from 'next/link'

export const Header = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-brand">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-24">
        {/* Left Section */}
        <div className="mx-auto max-w-2xl lg:mx-0 lg:shrink-0 lg:pt-8">
          <h2 className="mt-24 sm:mt-32 lg:mt-16">
            <Link
              href="/announcements/feature-launch"
              className="inline-flex space-x-6"
            >
              <span className="hero-eyebrow">For Marketing Teams</span>
            </Link>
          </h2>

          <h1 className="header-light">Transform your workflow</h1>
          <h3 className="p-light">
            Get more done with our intuitive platform designed for modern teams.
          </h3>

          <div className="mt-10 flex items-center gap-x-6 text-lg">
            <Link href="/get-started" className="hero-cta-primary">
              Get started
            </Link>
            <Link href="/learn-more" className="hero-cta-secondary">
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="relative mx-auto mt-16 hidden sm:mt-24 sm:block lg:ml-10 lg:mt-0 xl:ml-32">
          <div className="hero-image-container -mr-48 overflow-visible">
            <Image
              alt="Platform dashboard screenshot"
              src="/site/team_draft_dev.jpg"
              width={2048}
              height={1152}
              className="w-[76rem] rounded-md shadow-2xl ring-1 ring-primary/10"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}
