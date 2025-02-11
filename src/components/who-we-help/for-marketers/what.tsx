import Image from 'next/image'

const What = () => {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-center">
          <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto max-w-3xl sm:max-w-4xl lg:mx-0">
              <h2 className="header-gradient">
                We support Marketing Teams with technical content
              </h2>
              <h3 className="p-dark pb-4">
                <span className="lead-dark">Lead Text here </span> Placeholder
                normal text
              </h3>

              <dl className="mt-6 max-w-xl space-y-8 text-lg/7 text-gray-600 lg:max-w-none">
                <div className="relative">
                  <dt className="font-bold text-secondary">Drive Awareness</dt>
                  <dd className="my-2">
                    We drive traffic with a consistent cadence of content,
                    freeing up your marketers and developers to focus on other
                    priorities. Benefit from a dedicated content strategist who
                    uses proven frameworks to make sure your content program
                    delivers the highest ROI for your business.
                  </dd>
                </div>

                <div className="relative">
                  <dt className="font-bold text-secondary">Capture Leads</dt>
                  <dd className="my-2">
                    Our teams provide you with ebooks, whitepapers, landing page
                    copywriting, and social media posts, delivering a
                    predictable lead generation engine that converts organic
                    traffic automatically into high-quality MQLs and SQLs.
                  </dd>
                </div>

                <div className="relative">
                  <dt className="font-bold text-secondary">Build Trust</dt>
                  <dd className="my-2">
                    We deliver high-quality tech content that is written and
                    reviewed by experienced developers and edited by
                    professional editors. Build credibility with your technical
                    audiences through a consistent stream of quality content
                    tailored specifically to their needs and interests.
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
