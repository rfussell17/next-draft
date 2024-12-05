import { CheckIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

const includedFeatures: string[] = [
  'Private forum access',
  'SEO Keyword and topic ideation',
  'Screenshots, diagrams, and code samples',
  'Technical reviews',
  'Professional editing',
  'Social media collateral',
]

const addonFeatures: string[] = [
  'Technical ebooks',
  'Executive ghostwriting',
  'Video tutorials',
]

export default function Pricing(): JSX.Element {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl sm:text-center">
          <h2 className="text-pretty text-5xl font-semibold tracking-tight text-primary sm:text-balance sm:text-6xl">
            Request Pricing
          </h2>
        </div>
        <div className="ring-gray-200 mx-auto mt-16 max-w-2xl rounded-3xl ring-1 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-3xl font-semibold tracking-tight text-primary">
              Ongoing Technical Content
            </h3>
            <p className="text-gray-600 mt-6 text-base/7">
              Build a steady stream of technical content that scales with your
              business.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm/6 font-semibold text-primary">
                What’s included
              </h4>
              <div className="bg-gray-100 h-px flex-auto" />
            </div>
            <ul
              role="list"
              className="text-gray-600 mt-8 grid grid-cols-1 gap-4 text-sm/6 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    aria-hidden="true"
                    className="text-indigo-600 h-6 w-5 flex-none"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:shrink-0">
            <div className="bg-gray-50 ring-gray-900/5 rounded-2xl py-10 text-center ring-1 ring-inset lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-gray-600 text-base font-semibold">
                  Add-on Services
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <ul
                    role="list"
                    className="text-gray-600 mt-2 grid grid-cols-1 gap-4 text-sm/6 sm:gap-6"
                  >
                    {addonFeatures.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <CheckIcon
                          aria-hidden="true"
                          className="h-6 w-5 flex-none text-primary"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </p>
                <Link
                  href="#"
                  className="text-white mt-10 block w-full rounded-md bg-primary px-3 py-2 text-center text-sm font-semibold shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Book a Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
