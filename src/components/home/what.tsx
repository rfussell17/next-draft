import Image from 'next/image'

const What = () => {
  return (
    <div
      data-navbar-color="light"
      className="overflow-hidden bg-white py-14 sm:py-32"
    >
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-center">
          <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto max-w-3xl sm:max-w-4xl lg:mx-0">
              <h2 className="sm:subheader-gradient subheader-mobile-gradient">
                A Content Creation Agency for Technical Writing
              </h2>
              <h3 className="sm:paragraph-dark py-4">
                <span className="sm:lead-dark text-base font-semibold">
                  Transform your technical marketing{' '}
                </span>{' '}
                with expert-written content that resonates with developers and
                generates qualified leads.
              </h3>

              <dl className="mt-6 max-w-xl space-y-8 text-base text-gray-600 sm:text-lg/7 lg:max-w-none">
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

          <div className="rounded-4xl bg-white/15 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:max-w-xs">
            <div className="rounded-4xl p-2 shadow-md shadow-black/5">
              <div className="overflow-hidden rounded-3xl shadow-2xl outline outline-1 -outline-offset-1 outline-black/10">
                <Image
                  alt="Technical content development"
                  src="/site/team_draft_dev.jpg"
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

export default What
