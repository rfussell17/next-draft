import Link from 'next/link'
import type { FC } from 'react'

interface Feature {
  name: string
  description1: string
  description2: string
  href: string
}

interface BodyDetailProps {
  title: string
  subtitleTop: string
  subtitleBottom: string
  features: Feature[]
  learnMoreText?: string
}

const BodyDetail: FC<BodyDetailProps> = ({
  title,
  subtitleTop,
  subtitleBottom,
  features,
  learnMoreText = 'Learn more',
}) => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="bg-gradient-primary text-transparent bg-clip-text text-4xl font-semibold tracking-tight sm:text-5xl">
            {title}
          </h2>
          <p className="text-gray-600 mt-6 text-lg">{subtitleTop}</p>
          <p className="text-gray-600 mt-4 text-lg md:mt-2">{subtitleBottom}</p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-bold text-primary">
                  {feature.name}
                </dt>
                <dd className="text-gray-600 mt-4 flex flex-auto flex-col text-base">
                  <p className="flex-auto">{feature.description1}</p>
                  <p className="flex-auto">{feature.description2}</p>
                  <p className="z-50 mt-6">
                    <Link
                      href={feature.href}
                      className="text-primary-light text-sm font-semibold"
                    >
                      Discover our {feature.name}
                      <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default BodyDetail
