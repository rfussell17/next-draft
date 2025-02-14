import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CaseStudyLight from '../../media/case-studies/mini-case-earthly'

interface StatItem {
  label: string
  value: string
}

interface HighLightItem {
  name: string
  description: string[]
}

interface CaseStudies {
  name: string
  company: string
  imageUrl: string
  role: string
}

interface EarthlyCaseStudyProps {
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

export const EarthlyCaseStudy: React.FC<EarthlyCaseStudyProps> = ({
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
              <div className="mx-auto max-w-4xl text-center uppercase">
                <h2
                  className="subheader-light pt-16"
                  style={{ lineHeight: '1.3' }}
                >
                  How{' '}
                  <span className="bg-white pt-3">
                    <span className="header-gradient px-3">Earthly</span>
                  </span>{' '}
                  Increased Its Monthly Blog Visitors by{' '}
                  <span className="bg-white pt-3">
                    <span className="header-gradient px-3">346%</span>
                  </span>{' '}
                  and ramped up its content production with Draft.dev
                </h2>
              </div>
            </div>

            <div className="mb-12 flex flex-col items-center justify-center gap-x-6 sm:mb-24 sm:mt-12 sm:flex-row">
              <Link
                href="#"
                className="my-2 rounded-sm px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm ring-2 ring-white hover:bg-white hover:text-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:my-0 sm:text-base"
              >
                Download the full case study
              </Link>
              <Link
                href="#"
                className="my-2 text-sm font-semibold text-white hover:text-gray-200 sm:my-0 sm:text-base"
              >
                Just give me the hard facts <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-3">
                {content.stats.map((stat, index) => (
                  <div
                    key={index}
                    className="mx-auto flex max-w-lg flex-col-reverse gap-y-3 rounded-xl bg-white/5 px-16 py-4 text-center"
                  >
                    <dt className="font-code text-lg font-bold text-gray-300">
                      {stat.label}
                    </dt>
                    <dd className="header-light text-center">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        <CaseStudyLight />

        <div className="sm:py-22 mx-auto bg-gradient-brand px-6 py-12 lg:px-8">
          <dl className="mx-auto grid max-w-2xl justify-center justify-items-start gap-8 py-16 text-base/7 text-white sm:grid-cols-2 sm:justify-items-center lg:max-w-7xl lg:grid-cols-3 lg:gap-x-16">
            {highlights.items.map((highlight) => (
              <div
                key={highlight.name}
                className="relative rounded-xl bg-white/5 p-10"
              >
                <dt>
                  <span className="font-code text-xl font-semibold sm:text-3xl">
                    {highlight.name}
                  </span>
                </dt>
                <dd>
                  <ul className="list-disc space-y-2 pl-4 pt-8">
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
          <div className="m-auto flex items-center justify-center gap-x-6 sm:my-10">
            <Link
              href="#"
              className="rounded-sm px-3.5 py-2.5 font-code text-base font-semibold text-white shadow-sm ring-2 ring-white hover:bg-gray-100 hover:text-gradient-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Download the full case study
            </Link>
            <Link
              href="#"
              className="font-code text-base text-white hover:text-gray-300"
            >
              Technical writing examples <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* Case Studies section */}
        <div className="mx-auto my-16 max-w-7xl px-6 py-16 sm:my-24 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="header-gradient">{caseStudy.title}</h2>
            {/* <p className="mt-6 text-lg/8 text-gray-300">
              {caseStudy.description}
            </p> */}
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
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  )
}

export default EarthlyCaseStudy
