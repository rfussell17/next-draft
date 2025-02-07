import { CheckCircleIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'

interface CTAProps {
  title: string
  description: string
  imageSrc: string
  imageAlt?: string
  list: string[]
  linkHref: string
  linkText: string
}

export const CTA: FC<CTAProps> = ({
  title,
  description,
  imageSrc,
  imageAlt = 'CTA Image',
  list,
  linkHref,
  linkText,
}) => {
  return (
    <div className="py-12 sm:py-16">
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-gradient-brand px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
            <div className="flex-none rounded-4xl bg-white/15 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 lg:max-w-sm">
              <div className="rounded-4xl p-2 shadow-md shadow-black/5">
                <div className="overflow-hidden rounded-3xl shadow-2xl outline outline-1 -outline-offset-1 outline-black/10">
                  <Image
                    alt={imageAlt}
                    width={500}
                    height={500}
                    src={imageSrc}
                    className="h-96 w-full rounded-xl object-cover lg:aspect-square lg:h-auto"
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex-auto">
              <h2 className="header-light">{title}</h2>
              {/* <h4 className="lead-light">{description}</h4> */}
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
    </div>
  )
}
