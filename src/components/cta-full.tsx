import { CheckCircleIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'

interface CTAFullProps {
  title: string
  description: string
  imageSrc: string
  imageAlt?: string
  list: string[]
  linkHref: string
  linkText: string
}

export const CTAFull: FC<CTAFullProps> = ({
  title,
  description,
  imageSrc,
  imageAlt = 'CTA Image',
  list,
  linkHref,
  linkText,
}) => {
  return (
    <div
      data-navbar-color="dark"
      className="relative isolate bg-gradient-brand py-10"
    >
      <div className="mx-auto max-w-full sm:px-6">
        <div className="mx-auto flex max-w-2xl flex-col gap-16 px-6 py-16 sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
          <Image
            alt={imageAlt}
            width={500}
            height={500}
            src={imageSrc}
            className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl ring-2 ring-white lg:aspect-square lg:h-auto lg:max-w-sm"
          />
          <div className="w-full flex-auto">
            <h2 className="header-light">{title}</h2>
            <h4 className="lead-light">{description}</h4>
            <ul
              role="list"
              className="grid grid-cols-1 gap-x-8 gap-y-3 text-base/7 text-white sm:grid-cols-2"
            >
              {list.map((ctaList) => (
                <li key={ctaList} className="flex gap-x-3">
                  <CheckCircleIcon
                    aria-hidden="true"
                    className="h-7 w-5 flex-none"
                  />
                  {ctaList}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex">
              <Link
                href={linkHref}
                className="text-md px-10 py-2 font-semibold text-white ring-2 ring-white"
              >
                {linkText} <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
