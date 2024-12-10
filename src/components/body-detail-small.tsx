import Link from 'next/link'
import type { FC } from 'react'

interface Feature {
  name: string
  description1: string
  description2: string
  href: string
}

interface BodyDetailSmallProps {
  features: Feature[]
  learnMoreText?: string
  description1: string
  description2: string
}

const BodyDetailSmall: FC<BodyDetailSmallProps> = ({
  features,
  learnMoreText = 'Learn more',
}) => {
  return (
    <div className="sm-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-gray-100 flex items-center gap-x-3 text-base font-bold">
                  {feature.name}
                </dt>
                <dd className="text-white mt-4 flex flex-auto flex-col text-base">
                  <p className="flex-auto">{feature.description1}</p>
                  <p className="flex-auto">{feature.description2}</p>
                  <p className="mt-6">
                    <Link
                      href={feature.href}
                      className="text-gray-100 text-sm font-semibold"
                    >
                      {learnMoreText} <span aria-hidden="true">→</span>
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

export default BodyDetailSmall
