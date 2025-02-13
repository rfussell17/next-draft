import Link from 'next/link'

const Why = () => {
  return (
    <div data-navbar-color="light" className="py-16 sm:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl lg:text-center">
          <h2 className="subheader-mobile-gradient sm:subheader-gradient">
            Consistently turn organic traffic into MQLs and SQLs
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
                Predictable Leads
              </dt>
              <dd className="mt-2 flex flex-auto flex-col text-base sm:text-lg">
                <p className="my-2 flex-auto">
                  We help you establish and maintain a predictable lead
                  generation engine based on ebooks, whitepapers, landing page
                  copywriting and social media posts, that automatically works
                  for you in the background.
                </p>

                <p className="mt-4">
                  <Link
                    href="/company"
                    className="text-base font-semibold text-gradient-3 hover:text-gray-700"
                  >
                    B2B Tech Marketing
                    <span aria-hidden="true"> →</span>
                  </Link>
                </p>
              </dd>
            </div>

            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-lg font-semibold text-secondary">
                Lead Qualification
              </dt>
              <dd className="mt-2 flex flex-auto flex-col text-base sm:text-lg">
                <p className="my-2 flex-auto">
                  With our proven lead qualification system and our expert
                  guidance you will consistently convert organic traffic into
                  high-quality Marketing Qualified Leads and Sales Qualified
                  Leads your Sales organization can close.
                </p>

                <p className="mt-4">
                  <Link
                    href="/content-quality"
                    className="text-base font-semibold text-gradient-3 hover:text-gray-700"
                  >
                    Lead Generation for SaaS Companies
                    <span aria-hidden="true"> →</span>
                  </Link>
                </p>
              </dd>
            </div>

            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-lg font-semibold text-secondary">
                Recurring check-ins
              </dt>
              <dd className="mt-2 flex flex-auto flex-col text-base sm:text-lg">
                <p className="my-2 flex-auto">
                  Maximize your lead generation ROI with our analytical
                  data-driven approach. Recurring check-ins ensure we adapt our
                  content production plan according to the latest learnings.
                </p>

                <p className="mt-4">
                  <Link
                    href="/delivery-process"
                    className="text-base font-semibold text-gradient-3 hover:text-gray-700"
                  >
                    Our Content Strategy Services
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
