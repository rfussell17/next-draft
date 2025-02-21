import Link from 'next/link'
import React from 'react'

interface ServiceHeaderProps {
  title: string
  description: string
  primaryCTA?: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
}

const ServiceHeader: React.FC<ServiceHeaderProps> = ({
  title,
  description,
  primaryCTA,
  secondaryCTA,
}) => {
  return (
    <div className="bg-gradient-brand pt-32">
      <main className="relative isolate pb-16">
        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 py-6 sm:py-16 lg:px-8">
            <div className="mx-auto max-w-5xl gap-x-12 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              <div className="relative w-full lg:shrink-0 xl:max-w-5xl">
                <h1 className="sm:header-light mb-6 pb-4 font-code text-3xl font-semibold text-white">
                  {title}
                </h1>
                <p className="sm:paragraph-light pb-6 text-base text-gray-100 sm:pb-0">
                  {description}
                </p>
                <div className="mt-6 flex flex-col items-start gap-x-6 sm:mt-16 sm:flex-row sm:items-center">
                  {primaryCTA && (
                    <Link
                      href={primaryCTA.href}
                      className="my-2 rounded-sm px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm ring-2 ring-white hover:bg-white hover:text-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:my-0 sm:text-base"
                    >
                      {primaryCTA.text}
                    </Link>
                  )}
                  {secondaryCTA && (
                    <Link
                      href={secondaryCTA.href}
                      className="my-2 text-sm font-semibold text-white hover:text-gray-200 sm:my-0 sm:text-base"
                    >
                      {secondaryCTA.text} <span aria-hidden="true">→</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ServiceHeader
