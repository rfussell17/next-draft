import Image from 'next/image'
import Link from 'next/link'

const ServiceInfo = () => {
  return (
    <div className="overflow-hidden bg-white py-14 sm:py-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-center">
          <div className="lg:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto max-w-4xl sm:max-w-4xl lg:mx-0">
              <h2 className="sm:subheader-gradient subheader-mobile-gradient">
                Produce high-quality technical marketing content
              </h2>

              <div className="">
                <h3 className="sm:paragraph-dark py-4">
                  Do you struggle to find writers to cover technical topics? Do
                  you wish you were more consistently writing technical blog
                  posts? Is editing becoming a huge time sink?
                </h3>
              </div>

              <dl className="max-w-xl space-y-8 text-lg text-gray-700 lg:max-w-none">
                <div className="relative">
                  <dd className="lead-dark my-2 text-lg">
                    <strong className="text-gray-500">
                      The Technical Content Manager’s Playbook
                    </strong>{' '}
                    is a collection of resources you can use to manage a
                    top-tier technical blog.
                  </dd>
                </div>
              </dl>
              <p className="lead-dark mt-6 max-w-5xl text-lg font-semibold">
                This playbook includes:
              </p>
              <ul
                className="lead-dark max-w-5xl list-disc pl-5 text-lg"
                role="list"
              >
                <li className="py-2">
                  Template for creating technical content briefs
                </li>
                <li className="py-2">Multi-author publishing calendar</li>
                <li className="py-2">Technical blogging style guide</li>
              </ul>
              <div className="mt-6 flex flex-col items-start gap-x-6 sm:mt-16 sm:flex-row sm:items-center">
                <Link
                  href="https://us02web.zoom.us/webinar/register/WN_mB3ViyRAS2a0Ejl3UBdBKQ#/registration"
                  className="my-2 rounded-sm px-3.5 py-2.5 text-sm font-semibold text-gray-600 shadow-sm ring-2 ring-gray-500 hover:bg-gradient-brand hover:text-white hover:ring-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:my-0 sm:text-base"
                >
                  Book a Discovery Call
                </Link>
                <Link
                  href="#past-webinars"
                  className="my-2 text-base font-semibold text-gray-600 hover:text-gray-700 sm:my-0 sm:text-base"
                >
                  Download the Playbook (temp, need form build inputs)
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="hidden lg:ml-auto lg:block">
            <div className="rounded-4xl bg-white/15 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5">
              <div className="rounded-4xl p-2 shadow-md shadow-black/5">
                <div className="overflow-hidden rounded-3xl shadow-2xl outline outline-1 -outline-offset-1 outline-black/10">
                  <Image
                    alt="webinars"
                    src="/site/med-portrait/playbook_draft_dev.jpeg"
                    width={400}
                    height={600}
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceInfo
