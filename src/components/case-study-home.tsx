import { Button } from './button'

const CaseStudyHome = () => {
  return (
    <div>
      <main className="relative isolate bg-gradient-brand py-10">
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2
              className="header-light pt-16 sm:text-7xl"
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
            </h2>
            <p className="lead-light mt-8">
              ...and ramped up its content production with Draft.dev
            </p>
          </div>
          {/* <div className="mx-auto mt-10 max-w-6xl px-6 text-center lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
              <dl className="ring-whitegrid-cols-1 grid gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-3">
                <div className="mx-auto flex flex-col-reverse gap-y-3">
                  <dt className="text-lg text-gray-300">
                    Blog visitors per workday
                  </dt>
                  <dd className="text-6xl font-semibold tracking-tight text-white">
                    1,500
                  </dd>
                </div>
                <div className="mx-auto flex flex-col-reverse gap-y-3">
                  <dt className="text-lg text-gray-300">
                    Increase in monthly blog visitors
                  </dt>
                  <dd className="text-6xl font-semibold tracking-tight text-white">
                    346%
                  </dd>
                </div>
                <div className="mx-auto flex flex-col-reverse gap-y-3">
                  <dt className="text-lg text-gray-300">
                    Blog conversion rate
                  </dt>
                  <dd className="text-6xl font-semibold tracking-tight text-white">
                    6%
                  </dd>
                </div>
              </dl>
            </div>
          </div> */}
        </div>

        <div className="flex flex-col justify-center gap-x-6 gap-y-4 py-16 sm:flex-row sm:py-14">
          <Button
            variant="primary"
            href="/case-studies"
            className="font-semibold"
          >
            View case studies
          </Button>
          <Button variant="outline" colorMode="light" href="/case-studies">
            See our content marketing services
          </Button>
        </div>
      </main>
    </div>
  )
}

export default CaseStudyHome
