import { CheckCircleIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'
import { Gradient } from './gradient'
import { Heading, Subheading } from './text'

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
          <Gradient className="ring-white/10 mx-auto flex max-w-2xl flex-col gap-16 px-6 py-16 ring-1 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
            <Image
              alt={imageAlt}
              width={500}
              height={500}
              src={imageSrc}
              className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
            />
            <div className="w-full flex-auto">
              <Heading
                as="h2"
                textColor="light"
                className="text-white font-medium tracking-tighter"
              >
                {title}
              </Heading>
              <Subheading as="h4">{description}</Subheading>
              <ul
                role="list"
                className="text-white mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base/7 sm:grid-cols-2"
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
                  className="text-sm/6 font-semibold text-primary"
                >
                  {linkText} <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </Gradient>
        </div>
      </div>
    </div>
  )
}
