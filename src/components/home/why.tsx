import Link from 'next/link'

const Why = () => {
  return (
    <div className="py-16 sm:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl lg:text-center">
          <h2 className="subheader-gradient">The Draft.dev Difference</h2>

          <h3 className="paragraph-dark">
            {' '}
            Partner with technical content experts who understand your industry
            and deliver results.{' '}
          </h3>
          <h3 className="lead-dark mt-4">
            {' '}
            You'll only pay for content if you're 100% satisfied.{' '}
          </h3>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-12 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-lg font-semibold text-secondary">
                Subject Matter Experts
              </dt>
              <dd className="mt-2 flex flex-auto flex-col text-base sm:text-lg">
                <p className="my-2 flex-auto">
                  We create expert-driven technical content for software
                  professionals. Our global network of developers and subject
                  matter experts delivers in-depth coverage across diverse
                  technologies.
                </p>

                <p className="z-50 mt-4">
                  <Link
                    href="/expert-writers"
                    className="font-semibold text-gray-700"
                  >
                    About our Vetted Technical Writers
                    <span aria-hidden="true"> →</span>
                  </Link>
                </p>
              </dd>
            </div>

            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-lg font-semibold text-secondary">
                Consistent Quality and Style
              </dt>
              <dd className="mt-2 flex flex-auto flex-col text-base sm:text-lg">
                <p className="my-2 flex-auto">
                  If you've worked with freelancers before, you know the quality
                  can vary. Our editors ensure that every piece of content is
                  technically accurate, meets our quality standards, and has a
                  consistent style.{' '}
                </p>

                <p className="z-50 mt-4">
                  <Link
                    href="/content-quality"
                    className="font-semibold text-gray-700"
                  >
                    About our Quality-Focused Content
                    <span aria-hidden="true"> →</span>
                  </Link>
                </p>
              </dd>
            </div>

            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-lg font-semibold text-secondary">
                Content You Can Count On
              </dt>
              <dd className="mt-2 flex flex-auto flex-col text-base sm:text-lg">
                <p className="my-2 flex-auto">
                  Never worry about whether you'll have a new post ready for
                  your blog again. When you work with Draft.dev, you'll get
                  ready-to-publish blog posts or videos every 1-2 weeks
                  depending on your needs.
                </p>

                <p className="z-50 mt-4">
                  <Link
                    href="/delivery-process"
                    className="font-semibold text-gray-700"
                  >
                    About our delivery process
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
