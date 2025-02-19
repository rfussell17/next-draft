import Link from 'next/link'
import React from 'react'

interface Feature {
  title: string
  description: string
  linkText: string
  linkHref: string
}

interface WhyProps {
  title: string
  subtitle: string
  subtitleBold: string
  features: Feature[]
  className?: string
}

const Why: React.FC<WhyProps> = ({
  title,
  subtitle,
  subtitleBold,
  features,
  className = '',
}) => {
  return (
    <div data-navbar-color="light" className={`py-16 sm:py-44 ${className}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl lg:text-center">
          <h2 className="subheader-mobile-gradient sm:subheader-gradient">
            {title}
          </h2>

          <h3 className="paragraph-dark py-3">
            {subtitle}
            <span className="lead-dark font-semibold">
              <br />
              {subtitleBold}
            </span>
          </h3>
        </div>
        <div className="mx-auto mt-10 max-w-2xl sm:mt-16 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-12 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-lg font-semibold text-secondary">
                  {feature.title}
                </dt>
                <dd className="mt-2 flex flex-auto flex-col text-base sm:text-lg">
                  <p className="my-2 flex-auto">{feature.description}</p>

                  <p className="mt-4">
                    <Link
                      href={feature.linkHref}
                      className="text-base font-semibold text-gradient-3 hover:text-gray-700"
                    >
                      {feature.linkText}
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

export default Why
