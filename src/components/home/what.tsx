import Image from 'next/image'

const What = () => {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto max-w-3xl lg:mx-0 lg:max-w-2xl">
              <h2 className="header-gradient">
                A Content Creation Agency for Technical Writing
              </h2>
              <p className="p-dark pb-4">
                <span className="lead-dark">
                  Transform your technical marketing{' '}
                </span>{' '}
                with expert-written content that resonates with developers and
                generates qualified leads.
              </p>

              <dl className="mt-10 max-w-xl space-y-8 text-lg/7 text-gray-600 lg:max-w-none">
                <div className="relative">
                  <dt className="font-bold text-secondary">
                    Drive Technical Authority
                  </dt>
                  <dd className="my-2">
                    We create in-depth technical tutorials, guides, and
                    documentation that showcase your product's capabilities
                    while building credibility with developers.
                  </dd>
                </div>

                <div className="relative">
                  <dt className="font-bold text-secondary">
                    Scale Your Content Program
                  </dt>
                  <dd className="my-2">
                    Our network of technical experts delivers consistent,
                    high-quality content that frees your team to focus on core
                    business priorities.
                  </dd>
                </div>

                <div className="relative">
                  <dt className="font-bold text-secondary">
                    Generate Developer Interest
                  </dt>
                  <dd className="my-2">
                    From technical blog posts to product tutorials, we create
                    content that attracts developers and converts them into
                    engaged users.
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="m-auto sm:px-6 lg:px-0">
            <div className="relative isolate hidden overflow-hidden bg-gradient-brand px-6 pt-8 sm:block sm:rounded-3xl sm:pl-8 sm:pr-0">
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 w-[95%] origin-bottom-left skew-x-[-30deg] bg-primary opacity-20 ring-1 ring-inset ring-white"
              />
              <div className="flex min-h-[400px] items-center justify-end">
                <div className="w-auto">
                  <Image
                    alt="Technical content development"
                    src="/site/dev_draft_dev.jpg"
                    width={500}
                    height={300}
                    className="w-[500px] rounded-tl-xl bg-gray-800 ring-1 ring-white/10"
                  />
                </div>
              </div>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl"
              />
            </div>

            {/* For mobile - centered, no background */}
            <div className="flex justify-center px-4 sm:hidden">
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
  )
}

export default What
