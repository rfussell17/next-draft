import Image from 'next/image'

const How = () => {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-center">
          <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto max-w-3xl sm:max-w-4xl lg:mx-0">
              <h2 className="subheader-gradient">
                We help DevRels scale their efforts
              </h2>

              <dl className="mt-6 max-w-xl space-y-8 text-lg/7 text-gray-600 lg:max-w-none">
                <div className="relative">
                  <dt className="font-bold text-secondary">
                    1. Book A Discovery Call
                  </dt>
                  <dd className="my-2">
                    During this 30-minute consultation, we'll explore your
                    organization's vision and content needs. Together, we'll
                    determine if our expertise aligns with your objectives and
                    discuss next steps.
                  </dd>
                </div>

                <div className="relative">
                  <dt className="font-bold text-secondary">
                    2. Create Your Content Plan
                  </dt>
                  <dd className="my-2">
                    We'll craft a tailored content roadmap based on your
                    objectives, resources, and target audience. This blueprint
                    ensures clear expectations and measurable outcomes for our
                    collaboration.
                  </dd>
                </div>

                <div className="relative">
                  <dt className="font-bold text-secondary">
                    3. Ready-to-publish Technical Content
                  </dt>
                  <dd className="my-2">
                    After finalizing your strategy, our expert team begins
                    creating high-quality technical content delivered every 1-2
                    weeks. Each piece undergoes thorough testing and editing,
                    and we'll refine any content until it meets your standards.
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
