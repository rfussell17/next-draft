import Image from 'next/image'
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
  imageSrc?: string
  imageAlt?: string
  showLogos?: boolean
  className?: string
}

const ServiceHeader: React.FC<ServiceHeaderProps> = ({
  title,
  description,
  primaryCTA,
  secondaryCTA,
  imageSrc,
  imageAlt = '',
  className = '',
}) => {
  return (
    <div className={`bg-gradient-brand pt-20 ${className}`}>
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

              {imageSrc && (
                <div className="mt-14 hidden w-96 lg:block">
                  <div className="rounded-4xl bg-white/15 p-2 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5">
                    <div className="overflow-hidden rounded-3xl shadow-2xl outline outline-1 -outline-offset-1 outline-black/10">
                      <Image
                        alt={imageAlt}
                        height={1000}
                        width={1000}
                        src={imageSrc}
                        className="aspect-[2/3] w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ServiceHeader
