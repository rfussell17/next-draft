import Image from 'next/image'

const How = () => {
  return (
    <div
      data-navbar-color="light"
      className="overflow-hidden bg-white py-20 sm:py-32"
    >
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-center">
          <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto max-w-3xl sm:max-w-4xl lg:mx-0">
              <h2 className="subheader-mobile-gradient sm:subheader-gradient">
                Your Path to Technical Content
              </h2>
              <h3 className="paragraph-dark py-4">
                <span className="lead-dark">
                  Our streamlined process ensures consistent, high-quality
                  technical content delivered on time.{' '}
                </span>{' '}
                Here's how we help you create content that resonates with
                developers.
              </h3>

              <dl className="mt-6 max-w-xl space-y-8 text-lg/7 text-gray-600 lg:max-w-none">
                <div className="relative">
                  <dt className="font-bold text-secondary">
                    1. Schedule A Discovery Call
                  </dt>
                  <dd className="my-2">
                    In this 30-minute introductory call, we'll learn about your
                    company and marketing strategy. If Draft.dev is a good fit
                    for your business, we can start the onboarding process.
                  </dd>
                </div>

                <div className="relative">
                  <dt className="font-bold text-secondary">
                    2. Create Your Content Plan
                  </dt>
                  <dd className="my-2">
                    Based on your budget, goals, and marketing strategy, we'll
                    create your customized content plan. This helps you see
                    exactly what you'll be getting and ensures that we meet your
                    expectations.
                  </dd>
                </div>

                <div className="relative">
                  <dt className="font-bold text-secondary">
                    3. Ready-to-publish Technical Content
                  </dt>
                  <dd className="my-2">
                    Once your content plan is approved and our team will get
                    started, you'll receive tested and edited content that's
                    ready to publish every 1-2 weeks. If our work ever falls
                    short of your expectations, we'll work with you to revise
                    it.
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="rounded-4xl bg-white/15 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:max-w-xs">
            <div className="rounded-4xl p-2 shadow-md shadow-black/5">
              <div className="overflow-hidden rounded-3xl shadow-2xl outline outline-1 -outline-offset-1 outline-black/10">
                <Image
                  alt="Technical content development"
                  src="/site/dev_draft_dev.jpg"
                  width={500}
                  height={300}
                  className="w-full rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default How
