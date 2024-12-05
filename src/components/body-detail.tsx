// app/components/Example.tsx

import type { FC } from 'react'

interface Feature {
  name: string
  description1: string
  description2: string
  href: string
}

const features: Feature[] = [
  {
    name: 'SUBJECT MATTER EXPERTS',
    description1:
      'Unlike other content marketing agencies, we specialize in technical content for professionals in the software industry. ',
    description2:
      'We accomplish this by partnering with professional software developers and subject matter experts around the world.',
    href: '#',
  },
  {
    name: 'CONSISTENT QUALITY AND STYLE',
    description1:
      "If you've worked with freelancers before, you know the quality can vary. Our editors ensure that every piece of content is technically accurate, meets our quality standards, and has a consistent style. ",
    description2: "You'll only pay for content if you're 100% satisfied.",
    href: '#',
  },
  {
    name: 'CONTENT YOU CAN COUNT ON',
    description1:
      "Never worry about whether you'll have a new post ready for your blog again. ",
    description2:
      "When you work with Draft.dev, you'll get ready-to-publish blog posts or videos every 1-2 weeks depending on your companies needs.",
    href: '#',
  },
]

const BodyDetail: FC = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-gray-900 mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
            Why Draft.Dev?
          </h2>
          <p className="text-gray-600 mt-6 text-lg">
            Stop begging your software engineers to create technical content.
          </p>
          <p className="text-gray-600 mt-4 text-lg md:mt-2">Let us help.</p>
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
                  <p className="mt-6">
                    <a
                      href={feature.href}
                      className="text-sm font-semibold text-primary"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
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
