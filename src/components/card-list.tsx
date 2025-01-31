import { CheckIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import type { FC, ReactNode } from 'react'

interface CardListProps {
  title: ReactNode
  subtitle: ReactNode
  includedFeatures: string[]
  addonTitle: ReactNode
  addonFeatures: string[]
  requestPricingHref: string
  requestPricingText: string
}

const CardList: FC<CardListProps> = ({
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
          <h2>{title}</h2>
        </div>
        <div className="rounded-xl bg-gradient-brand">
          <div className="mx-auto mt-16 max-w-2xl text-white ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-4xl font-semibold">{subtitle}</h3>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm/6 font-semibold">
                  What’s included
                </h4>
                <div className="h-px flex-auto bg-gray-100" />
              </div>
              <ul
                role="list"
                className="mt-6 grid grid-cols-1 gap-2 text-sm/6 sm:grid-cols-2 sm:gap-2"
              >
                {includedFeatures.map((feature) => (
                  <li key={feature} className="flex gap-x-2">
                    <CheckIcon
                      aria-hidden="true"
                      className="h-6 w-5 flex-none text-white"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:shrink-0">
              <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <p className="text-base font-semibold text-gray-600">
                    {addonTitle}
                  </p>
                  <span className="mt-6 flex items-baseline justify-center gap-x-2">
                    <ul
                      role="list"
                      className="mt-2 grid grid-cols-1 gap-4 text-base text-gray-600 sm:gap-6"
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
                    className="mt-10 block w-full rounded-md bg-primary px-3 py-2 text-center text-base font-semibold text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    {requestPricingText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardList
