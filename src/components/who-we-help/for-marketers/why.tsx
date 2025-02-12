import Link from 'next/link'

const Why = () => {
  return (
    <div data-navbar-color="light" className="py-16 sm:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl lg:text-center">
          <h2 className="subheader-mobile-gradient sm:subheader-gradient">
            Technical Marketing that Converts
          </h2>

          <h3 className="paragraph-dark py-3">
            We specialize in content marketing for tech companies and create
            lead generation engines based on <strong>blog posts</strong>,{' '}
            <strong>eBooks</strong>, and <strong>video tutorials</strong> for
            Marketers looking to attract a technical audience.
          </h3>
        </div>
        <div className="mx-auto mt-10 max-w-2xl sm:mt-16 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-12 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-lg font-semibold text-secondary">
                Drive Awareness
              </dt>
              <dd className="mt-2 flex flex-auto flex-col text-base sm:text-lg">
                <p className="my-2 flex-auto">
                  We drive traffic with a consistent cadence of content, freeing
                  up your marketers and developers to focus on other priorities.
                  Benefit from a dedicated content strategist who uses proven
                  frameworks to make sure your content program delivers the
                  highest ROI for your business.
                </p>

                <p className="mt-4">
                  <Link
                    href="/expert-writers"
                    className="text-base font-semibold text-gradient-3 hover:text-gray-700"
                  >
                    How we drive awareness
                    <span aria-hidden="true"> →</span>
                  </Link>
                </p>
              </dd>
            </div>

            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-lg font-semibold text-secondary">
                Capture Leads
              </dt>
              <dd className="mt-2 flex flex-auto flex-col text-base sm:text-lg">
                <p className="my-2 flex-auto">
                  Our teams provide you with ebooks, whitepapers, landing page
                  copywriting, and social media posts, delivering a predictable
                  lead generation engine that converts organic traffic
                  automatically into high-quality MQLs and SQLs.
                </p>

                <p className="mt-4">
                  <Link
                    href="/content-quality"
                    className="text-base font-semibold text-gradient-3 hover:text-gray-700"
                  >
                    How we capture leads
                    <span aria-hidden="true"> →</span>
                  </Link>
                </p>
              </dd>
            </div>

            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-lg font-semibold text-secondary">
                Build Trust
              </dt>
              <dd className="mt-2 flex flex-auto flex-col text-base sm:text-lg">
                <p className="my-2 flex-auto">
                  We deliver high-quality tech content that is written and
                  reviewed by experienced developers and edited by professional
                  editors. Build credibility with your technical audiences
                  through a consistent stream of quality content tailored
                  specifically to their needs and interests.
                </p>

                <p className="mt-4">
                  <Link
                    href="/delivery-process"
                    className="text-base font-semibold text-gradient-3 hover:text-gray-700"
                  >
                    How we build trust
                    <span aria-hidden="true"> →</span>
                  </Link>
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Why
