import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'
import { Heading, Subheading } from './text'

interface Feature {
  name: string
  description: string
  href?: string
}

interface MainImage {
  src: string
  alt: string
  width?: number
  height?: number
}

interface BodyDetailImageProps {
  title: string
  paragraph: string
  features: Feature[]
  mainImage: MainImage
}

const BodyDetailImage: FC<BodyDetailImageProps> = ({
  title,
  paragraph,
  features,
  mainImage,
}) => {
  return (
    <div className="bg-white overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <Heading as="h2">{title}</Heading>

              <Subheading
                as="h3"
                textColor="dark"
                className="text-gray-500 text-base sm:text-lg"
              >
                {paragraph}
              </Subheading>
              <dl className="text-gray-600 mt-10 max-w-xl space-y-8 text-base/7 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative">
                    <dt className="mr-2 font-bold text-primary">
                      {feature.name}
                    </dt>
                    <dd className="my-1">{feature.description} </dd>
                    <dd>
                      {feature.href && (
                        <Link
                          href={feature.href}
                          className="font-semibold text-secondary hover:underline"
                        >
                          Learn more →
                        </Link>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="sm:px-6 lg:px-0">
            <div className="relative isolate overflow-hidden bg-primary px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none">
              <div
                aria-hidden="true"
                className="ring-white absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-primary opacity-20 ring-1 ring-inset"
              />
              <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                <Image
                  alt={mainImage.alt}
                  src={mainImage.src}
                  width={mainImage.width ?? 2432}
                  height={mainImage.height ?? 1442}
                  className="bg-gray-800 ring-white/10 -mb-12 w-[57rem] max-w-none rounded-tl-xl ring-1"
                />
              </div>
              <div
                aria-hidden="true"
                className="ring-black/10 pointer-events-none absolute inset-0 ring-1 ring-inset sm:rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BodyDetailImage
