import Link from 'next/link'

const Why = () => {
  return (
    <div data-navbar-color="light" className="py-16 sm:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl lg:text-center">
          <h2 className="subheader-mobile-gradient sm:subheader-gradient">
            Written by Developers, for Developers
          </h2>

          <h3 className="paragraph-dark py-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
            nostrum voluptatem ducimus id explicabo, quo, voluptates, numqua.
          </h3>
        </div>
        <div className="mx-auto mt-10 max-w-2xl sm:mt-16 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-12 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-lg font-semibold text-secondary">
                Technical Writing that Convinces
              </dt>
              <dd className="mt-2 flex flex-auto flex-col text-base sm:text-lg">
                <p className="my-2 flex-auto">
                  Everything we produce is written by subject matter experts,
                  technically reviewed and professionally edited by our in-house
                  team, delivered to you in a ready-to-publish format along with
                  social posts and SEO meta descriptions.
                </p>

                <p className="mt-4">
                  <Link
                    href="/company"
                    className="text-base font-semibold text-gradient-3 hover:text-gray-700"
                  >
                    See Technical Writing Examples
                    <span aria-hidden="true"> →</span>
                  </Link>
                </p>
              </dd>
            </div>

            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-lg font-semibold text-secondary">
                Thought Leadership Content
              </dt>
              <dd className="mt-2 flex flex-auto flex-col text-base sm:text-lg">
                <p className="my-2 flex-auto">
                  We provide you with written and video material that allows for
                  a consistent output of high-quality content. The topics we
                  work on are defined by experienced developers and are
                  guaranteed to resonate with your readers
                </p>

                <p className="mt-4">
                  <Link
                    href="/content-quality"
                    className="text-base font-semibold text-gradient-3 hover:text-gray-700"
                  >
                    About Our Thought Leadership Content Marketing
                    <span aria-hidden="true"> →</span>
                  </Link>
                </p>
              </dd>
            </div>

            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-lg font-semibold text-secondary">
                Build Respect with Your Technical Audience
              </dt>
              <dd className="mt-2 flex flex-auto flex-col text-base sm:text-lg">
                <p className="my-2 flex-auto">
                  Our internal subject matter experts evaluate your product and
                  will take care of writing, reviewing, and editing content
                  pieces, be it blog posts, ebooks, or white papers about your
                  industry or your product specifically.
                </p>

                <p className="mt-4">
                  <Link
                    href="/delivery-process"
                    className="text-base font-semibold text-gradient-3 hover:text-gray-700"
                  >
                    Outsource Your Technical Writing
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
