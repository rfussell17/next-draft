// DarkLandingPage.tsx
import Image from 'next/image'
import React from 'react'

// Types for the component props
interface StatItem {
  label: string
  value: string
}

interface HighLightItem {
  name: string
  description: string[] // Changed to string array
}

interface CaseStudies {
  name: string
  company: string
  imageUrl: string
  role: string
}

interface DarkLandingPageProps {
  hero: {
    title: string
    description: string
  }
  content: {
    paragraphs: string[]
    stats: StatItem[]
  }
  featuredImage?: {
    src: string
    alt: string
  }
  highlights: {
    title: string
    description: string
    items: HighLightItem[]
  }
  caseStudy: {
    title: string
    description: string
    clients: CaseStudies[]
  }
  className?: string
}

export const DarkLandingPage: React.FC<DarkLandingPageProps> = ({
  content,
  highlights,
  caseStudy,
  className = '',
}) => {
  return (
    <div className={`${className}`}>
      <main>
        <div className="relative isolate bg-gradient-brand">
          <div className="relative isolate py-16 sm:py-24">
            <div className="px-6 lg:px-8">
              <div className="mx-auto max-w-5xl text-center uppercase">
                <h2
                  className="header-light py-16 sm:text-6xl"
                  style={{ lineHeight: '1.3' }} // Adjust the value as needed
                >
                  How{' '}
                  <span className="bg-white">
                    <span className="header-gradient px-3 py-0">Earthly</span>
                  </span>{' '}
                  Increased Its Monthly Blog Visitors by{' '}
                  <span className="bg-white">
                    <span className="header-gradient px-3 py-0">346%</span>
                  </span>{' '}
                  and ramped up its content production with Draft.dev_
                </h2>
              </div>
            </div>

            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-3">
                {content.stats.map((stat, index) => (
                  <div
                    key={index}
                    className="mx-auto flex flex-col-reverse gap-y-3"
                  >
                    <dt className="font-code text-lg font-semibold text-gray-300">
                      {stat.label}
                    </dt>
                    <dd className="header-light">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* Content section */}

        <div className="m-auto py-0 sm:py-20">
          <div className="bg-white py-24">
            <div className="mx-auto flex max-w-7xl gap-20 px-6 lg:px-8">
              {/* <ul
                role="list"
                className="divide-y divide-gray-200 xl:col-span-3"
              > */}
              <div className="flex flex-col gap-10 py-12 sm:flex-row">
                <Image
                  alt="Adam Gordon Bell"
                  width={1000}
                  height={1000}
                  src="/testimonials/adam_bell_draft_dev.jpg"
                  className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover"
                />

                <div className="max-w-xl">
                  <p className="my-8 font-code text-lg font-semibold text-gray-600 sm:text-2xl">
                    "It's difficult to find an agency with enough high-quality
                    subject matter expert writers to build up the content
                    pipeline that Draft.dev gives you. It's a shortcut to
                    building an in-house writing team."
                  </p>
                  <h3 className="subheader-gradient">Adam Gordon Bell,</h3>
                  <p className="-mt-4 font-semibold text-gray-700">
                    Director of Developer Relations, Earthly
                  </p>
                </div>
              </div>
              {/* </ul> */}
            </div>
          </div>
        </div>

        {/* Highlights section */}
        <div className="sm:py-22 mx-auto bg-gradient-brand px-6 py-12 lg:px-8">
          <dl className="mx-auto grid max-w-2xl justify-center justify-items-start gap-8 py-16 text-base/7 text-white sm:grid-cols-2 sm:justify-items-center lg:max-w-7xl lg:grid-cols-3 lg:gap-x-16">
            {highlights.items.map((highlight) => (
              <div key={highlight.name} className="relative">
                <dt>
                  <span className="mb-5 inline-block bg-white px-6">
                    <span className="list-header">{highlight.name}</span>
                  </span>
                </dt>
                <dd>
                  <ul className="list-disc space-y-2 pl-4">
                    {highlight.description.map((item, index) => (
                      <li key={index} className="text-lg text-white">
                        {item}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Case Studies section */}
        <div className="mx-auto my-32 max-w-7xl px-6 pb-32 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="m:text-5xl text-pretty text-4xl font-semibold tracking-tight text-gray-800">
              {caseStudy.title} hi
            </h2>
            <p className="mt-6 text-lg/8 text-gray-300">
              {caseStudy.description}
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
          >
            {caseStudy.clients.map((client) => (
              <li key={client.name}>
                <Image
                  src={client.imageUrl}
                  alt=""
                  width={1000}
                  height={1000}
                  className="aspect-[14/13] w-full rounded-2xl object-cover"
                />
                <h3 className="mt-6 text-lg/8 font-semibold tracking-tight text-secondary">
                  {client.company}
                </h3>
                <p className="text-base/7 text-gray-200">{client.name}</p>
                <p className="text-sm/6 text-gray-300">{client.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  )
}

export default DarkLandingPage
