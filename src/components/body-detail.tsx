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
  learnMoreText = 'Learn more about our',
}) => {
  return (
    <div className="py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="header-gradient">{title} </h2>

          <h3 className="lead-dark">
            <div>{subtitleTop}</div>
            <div> {subtitleBottom}</div>
          </h3>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-12 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-lg font-semibold text-secondary">
                  {feature.name}
                </dt>
                <dd className="mt-2 flex flex-auto flex-col text-base">
                  <p className="my-2 flex-auto">{feature.description1}</p>
                  <p className="my-2 flex-auto">{feature.description2}</p>
                  <p className="z-50 mt-4">
                    <Link
                      href={feature.href}
                      className="font-semibold text-gray-700"
                    >
                      {learnMoreText} {feature.name}
                      <span aria-hidden="true"> →</span>
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
