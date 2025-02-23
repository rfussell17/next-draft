'use client'

import { CheckIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'
import type { FC, ReactNode } from 'react'

interface ServiceCardProps {
  title: ReactNode
  subtitle: string
  includedFeatures: string[]
  imageURL: string
  imageAlt: string
}

const ServiceCard: FC<ServiceCardProps> = ({
  title,
  subtitle,
  includedFeatures,
  imageURL,
  imageAlt,
}) => {
  return (
    <div className="bg-gradient-brand py-10 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto text-white sm:py-6 lg:mx-0 lg:flex">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="subheader-light">{title}</h3>
            <div className="my-10 flex max-w-2xl items-center gap-x-8">
              <h4 className="flex-none rounded-sm px-6 py-1 text-lg font-semibold ring-2 ring-white">
                {subtitle}
              </h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul className="text-md mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
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
            <div className="mt-6 flex flex-col items-start gap-x-6 sm:mt-16 sm:flex-row sm:items-center">
              <Link
                href="#"
                className="my-2 text-sm font-semibold text-white hover:text-gray-200 sm:my-0 sm:text-base"
              >
                Learn more about our Lead Generation Package{' '}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="p-2 lg:flex lg:w-full lg:max-w-md lg:flex-col lg:justify-center">
            <div className="rounded-2xl bg-white/10 shadow-lg ring-1 ring-inset ring-white/20">
              <div className="p-2">
                <div className="aspect-square overflow-hidden rounded-xl shadow-2xl">
                  <Image
                    alt={imageAlt}
                    src={imageURL}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover"
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

export default ServiceCard
