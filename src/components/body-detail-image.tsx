import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'

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
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <h2 className="header-gradient">{title}</h2>

              <h3 className="lead-dark mt-6">{paragraph}</h3>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative">
                    <dt className="mr-2 font-bold text-secondary">
                      {feature.name}
                    </dt>
                    <dd className="my-1">{feature.description} </dd>
                    <dd>
                      {feature.href && (
                        <Link
                          href={feature.href}
                          className="font-semibold text-gray-600 hover:underline"
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
          <div className="m-auto sm:px-6 lg:px-0">
            <div className="relative isolate hidden overflow-hidden bg-gradient-brand px-6 pt-8 sm:block sm:rounded-3xl sm:pl-8 sm:pr-0">
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 w-[95%] origin-bottom-left skew-x-[-30deg] bg-primary opacity-20 ring-1 ring-inset ring-white"
              />
              <div className="flex min-h-[400px] items-center justify-end">
                <div className="w-auto">
                  <Image
                    alt={mainImage.alt}
                    src={mainImage.src}
                    width={500}
                    height={300}
                    className="w-[500px] rounded-tl-xl bg-gray-800 ring-1 ring-white/10"
                  />
                </div>
              </div>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl"
              />
            </div>

            {/* For mobile - centered, no background */}
            <div className="flex justify-center px-4 sm:hidden">
              <Image
                alt={mainImage.alt}
                src={mainImage.src}
                width={500}
                height={300}
                className="w-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BodyDetailImage
