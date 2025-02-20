import { CheckCircleIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'

export const BookDiscoveryCall = () => {
  return (
    <div
      data-navbar-color="dark"
      className="relative isolate bg-gradient-brand py-10"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-16 py-16 lg:flex-row lg:items-center lg:py-20 xl:gap-x-20">
          <div className="flex-none px-8 sm:px-0 lg:max-w-sm">
            <div className="rounded-4xl bg-white/15 p-2 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5">
              <div className="overflow-hidden rounded-3xl shadow-2xl outline outline-1 -outline-offset-1 outline-black/10">
                <Image
                  alt="Premium membership benefits illustration"
                  width={500}
                  height={500}
                  src="/site/med-landscape/cta_draft_dev.jpg"
                  className="h-96 w-full object-cover lg:aspect-square lg:h-auto"
                />
              </div>
            </div>
          </div>
          <div className="w-full flex-auto">
            <h2 className="subheader-light">Schedule A Discovery Call</h2>
            <p className="mt-4 text-lg text-white">
              We write technical marketing content designed to reach software
              developers, DevOps practitioners, data engineers, and engineering
              managers. If your SaaS business is ready to invest in technical
              content this year, Draft.dev might be a great fit.
            </p>

            <ul
              role="list"
              className="grid grid-cols-1 gap-x-8 gap-y-3 py-4 text-base/7 text-white sm:grid-cols-2"
            >
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  aria-hidden="true"
                  className="h-7 w-5 flex-none"
                />
                Unlimited projects
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  aria-hidden="true"
                  className="h-7 w-5 flex-none"
                />
                24/7 priority support
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  aria-hidden="true"
                  className="h-7 w-5 flex-none"
                />
                Advanced analytics
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  aria-hidden="true"
                  className="h-7 w-5 flex-none"
                />
                Custom integrations
              </li>
            </ul>

            <div className="mt-10">
              <Link
                href="/pricing/premium"
                className="text-md rounded-sm px-4 py-2 font-semibold text-white ring-2 ring-white hover:bg-white hover:text-gray-600"
              >
                Upgrade now <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
