import { CheckIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import type { FC, ReactNode } from 'react'
import { Gradient } from './gradient'
import { Heading, Subheading } from './text'

interface BodyDetailListProps {
  title: ReactNode
  subtitle: ReactNode
  includedFeatures: string[]
  addonTitle: ReactNode
  addonFeatures: string[]
  requestPricingHref: string
  requestPricingText: string
}

const BodyDetailList: FC<BodyDetailListProps> = ({
  title,
  subtitle,
  includedFeatures,
  addonTitle,
  addonFeatures,
  requestPricingHref,
  requestPricingText,
}) => {
  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl sm:text-center">
          <Heading as="h2">{title}</Heading>
        </div>
        <Gradient className="rounded-xl">
          <div className="ring-gray-200 text-white mx-auto mt-16 max-w-2xl sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <Subheading
                as="h3"
                textColor="light"
                className="text-4xl font-semibold"
              >
                {subtitle}
              </Subheading>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm/6 font-semibold">
                  What’s included
                </h4>
                <div className="bg-gray-100 h-px flex-auto" />
              </div>
              <ul
                role="list"
                className="mt-6 grid grid-cols-1 gap-2 text-sm/6 sm:grid-cols-2 sm:gap-2"
              >
                {includedFeatures.map((feature) => (
                  <li key={feature} className="flex gap-x-2">
                    <CheckIcon
                      aria-hidden="true"
                      className="text-white h-6 w-5 flex-none"
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
                    {addonTitle}
                  </p>
                  <span className="mt-6 flex items-baseline justify-center gap-x-2">
                    <ul
                      role="list"
                      className="text-gray-600 mt-2 grid grid-cols-1 gap-4 text-base sm:gap-6"
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
                  </span>
                  <Link
                    href={requestPricingHref}
                    className="text-white mt-10 block w-full rounded-md bg-primary px-3 py-2 text-center text-base font-semibold shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    {requestPricingText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Gradient>
      </div>
    </div>
  )
}

export default BodyDetailList
