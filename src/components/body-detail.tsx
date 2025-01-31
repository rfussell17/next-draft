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
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2>{title}</h2>

          <h3 className="md:sm-lg">
            <div>{subtitleTop}</div>
            <div> {subtitleBottom}</div>
          </h3>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-12 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-bold text-primary">
                  {feature.name}
                </dt>
                <dd className="mt-2 flex flex-auto flex-col">
                  <p className="my-1 flex-auto">{feature.description1}</p>
                  <p className="my-1 flex-auto">{feature.description2}</p>
                  <p className="z-50 mt-2">
                    <Link
                      href={feature.href}
                      className="font-semibold text-secondary"
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
