interface Feature {
  name: string
  description: string
}

const features: Feature[] = [
  {
    name: 'SCHEDULE A DISCOVERY CALL',
    description:
      "In this 30-minute introductory call, we'll learn about your company and marketing strategy. If Draft.dev is a good fit for your business, we can start the onboarding process.",
  },
  {
    name: 'CREATE YOUR CONTENT PLAN',
    description:
      "Based on your budget, goals, and marketing strategy, we'll create your customized content plan. This helps you see exactly what you'll be getting and ensures that we meet your expectations.",
  },
  {
    name: 'PUBLISH CONSISTENT TECHNICAL CONTENT',
    description:
      "Once your content plan is approved and our team will get started, you'll receive tested and edited content that's ready to publish every 1-2 weeks. If our work ever falls short of your expectations, we'll work with you to revise it.",
  },
]

export default function HowItWorks(): JSX.Element {
  return (
    <div className="bg-white overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-primary">
                Deploy faster
              </h2>
              <p className="text-gray-900 mt-2 text-pretty text-4xl font-semibold tracking-tight sm:text-5xl">
                HOW IT WORKS
              </p>
              <p className="text-gray-600 mt-6 text-lg/8">
                You're just one call away from getting started.
              </p>
              <dl className="text-gray-600 mt-10 max-w-xl space-y-8 text-base/7 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative">
                    <dt className="mr-2 font-bold text-primary">
                      {feature.name}
                    </dt>
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="sm:px-6 lg:px-0">
            <div className="relative isolate overflow-hidden bg-primary px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none">
              <div
                aria-hidden="true"
                className="ring-white absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-primary opacity-20 ring-1 ring-inset"
              />
              <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                <img
                  alt="Product screenshot"
                  src="https://tailwindui.com/plus/img/component-images/project-app-screenshot.png"
                  width={2432}
                  height={1442}
                  className="bg-gray-800 ring-white/10 -mb-12 w-[57rem] max-w-none rounded-tl-xl ring-1"
                />
              </div>
              <div
                aria-hidden="true"
                className="ring-black/10 pointer-events-none absolute inset-0 ring-1 ring-inset sm:rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
