import Link from 'next/link'

const Why = () => {
  return (
    <div data-navbar-color="light" className="py-16 sm:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl lg:text-center">
          <h2 className="subheader-mobile-gradient sm:subheader-gradient">
            Developer Marketing that Resonates
          </h2>

          <h3 className="paragraph-dark py-3">
            We support Developer Relations and Developer Advocate Teams by
            consistently delivering content that technical audiences truly care
            about and respect.
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
                  With a track record of predictably creating demand, our
                  content strategists help implement proven frameworks that
                  drive traffic and inbound leads. We ensure our blog posts,
                  eBooks and video tutorials are accurate, engaging, and
                  resonate with your technical audience.
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
                  Our subject matter experts evaluate your product and help
                  build out your content roadmap, turning readers into leads,
                  and leads into new customers. Recurring check-ins ensure we
                  adapt our content production plan according to the latest
                  learnings.
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
                  Everything we deliver to you is written and reviewed by
                  practicing technical professionals and edited by professional
                  editors. Outsource the creation of technical content to us and
                  build respect and engagement with software developers, DevOps,
                  data engineers, and more.
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
