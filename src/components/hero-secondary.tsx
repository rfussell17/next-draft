import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'
import { Heading, Subheading } from './text'

interface HeroSecondaryProps {
  title: string
  description: string
  eyebrowLabel?: string
  eyebrowText?: string
  eyebrowHref?: string
  primaryCtaText: string
  primaryCtaHref: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
  imageSrc: string
  imageAlt?: string
}

export const HeroSecondary: FC<HeroSecondaryProps> = ({
  title,
  description,
  eyebrowLabel = "What's new",
  eyebrowText,
  eyebrowHref,
  primaryCtaText,
  primaryCtaHref,
  secondaryCtaText,
  secondaryCtaHref,
  imageSrc,
  imageAlt = 'App screenshot',
}) => {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-24">
        {/* Left Section */}
        <div className="mx-auto max-w-2xl lg:mx-0 lg:shrink-0 lg:pt-8">
          {eyebrowText && eyebrowHref && (
            <div className="mt-24 sm:mt-32 lg:mt-16">
              <Link href={eyebrowHref} className="inline-flex space-x-6">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary ring-1 ring-inset ring-primary/10">
                  {eyebrowLabel}
                </span>
              </Link>
            </div>
          )}

          <Heading className="mt-10 text-5xl font-semibold tracking-tight sm:text-7xl">
            {title}
          </Heading>
          <Subheading as="h3" textColor="dark" className="text-sm sm:text-lg">
            {description}
          </Subheading>
          <div className="mt-10 flex items-center gap-x-6">
            <Link
              href={primaryCtaHref}
              className="text-white hover:bg-secondaryLight focus-visible:outline-secondaryLight rounded-md bg-secondary px-3.5 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              {primaryCtaText}
            </Link>
            {secondaryCtaText && secondaryCtaHref && (
              <Link
                href={secondaryCtaHref}
                className="text-gray-500 text-sm font-semibold"
              >
                {secondaryCtaText} <span aria-hidden="true">→</span>
              </Link>
            )}
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="bg-gray-900/5 ring-gray-900/10 -m-2 rounded-xl p-2 ring-1 ring-inset lg:-m-4 lg:rounded-2xl lg:p-4">
              <Image
                alt={imageAlt}
                src={imageSrc}
                width={2432}
                height={1000}
                className="w-[76rem] rounded-md shadow-2xl ring-1 ring-primary/10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
