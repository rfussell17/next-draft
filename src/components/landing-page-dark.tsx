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
  hero,
  content,
  featuredImage,
  highlights,
  caseStudy,
  className = '',
}) => {
  return (
    <div className={`${className}`}>
      <main className="relative isolate bg-gradient-brand">
        <div className="px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-4xl pt-24 text-center sm:pt-40">
            <h1 className="header-light sm:text-7xl">{hero.title}</h1>
            <p className="lead-light mt-8">{hero.description}</p>
          </div>
        </div>

        {/* Content section */}
        <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <dl className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-3">
              {content.stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6"
                >
                  <dt className="text-lg text-gray-300">{stat.label}</dt>
                  <dd className="text-6xl font-semibold tracking-tight text-white">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Featured image section */}
        {featuredImage && (
          <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
            <Image
              src={featuredImage.src}
              alt={featuredImage.alt}
              width={1000}
              height={500}
              className="aspect-[9/4] w-full object-cover xl:rounded-3xl"
            />
          </div>
        )}

        {/* Highlights section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {highlights.title}
            </h2>
            <p className="mt-6 text-lg/8 text-gray-300">
              {highlights.description}
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base/7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-16">
            {highlights.items.map((highlight) => (
              <div key={highlight.name} className="relative">
                <dt className="mb-4 font-semibold text-white">
                  {highlight.name}
                </dt>
                <dd>
                  <ul className="list-disc space-y-2 pl-4">
                    {highlight.description.map((item, index) => (
                      <li key={index} className="text-gray-300">
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
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {caseStudy.title}
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
                <h3 className="mt-6 text-lg/8 font-semibold tracking-tight text-white">
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
