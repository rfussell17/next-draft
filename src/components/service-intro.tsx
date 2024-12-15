import Link from 'next/link'
import { Heading, Subheading } from './text'

interface Feature {
  name: string
  description: string
  href: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

interface ServiceIntroProps {
  eyebrow?: string
  title: string
  subtitle: string
  features: Feature[]
}

export function ServiceIntro({
  eyebrow,
  title,
  subtitle,
  features,
}: ServiceIntroProps) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl lg:text-center">
          {eyebrow && (
            <Subheading
              as="h3"
              className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary ring-1 ring-inset ring-primary/10"
            >
              {eyebrow}
            </Subheading>
          )}
          <Heading
            as="h1"
            className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance"
          >
            {title}
          </Heading>
          <Subheading className="mt-6 text-lg/8 text-gray-600">
            {subtitle}
          </Subheading>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base/7 font-semibold text-gray-900">
                  <feature.icon
                    aria-hidden="true"
                    className="size-5 flex-none text-indigo-600"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base/7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <Link
                      href={feature.href}
                      className="text-sm/6 font-semibold text-indigo-600"
                    >
                      Learn more <span aria-hidden="true">→</span>
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
