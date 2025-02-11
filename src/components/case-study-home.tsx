import Link from 'next/link'

const CaseStudyHome = () => {
  return (
    <div data-navbar-color="dark">
      <main className="relative isolate bg-gradient-brand py-16">
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center uppercase">
            <h2
              className="header-light pt-16 sm:text-6xl"
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
              and ramped up its content production with Draft.dev
            </h2>
          </div>
        </div>

        <div className="">
          <div className="mt-6 flex flex-col items-center justify-center gap-x-6 sm:mt-16 sm:flex-row sm:items-center">
            <Link
              href="#"
              className="my-2 rounded-sm px-3.5 py-2.5 text-base font-semibold text-white shadow-sm ring-2 ring-white hover:bg-white hover:text-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:my-0 sm:text-lg"
            >
              See this case study
            </Link>
            <Link
              href="#"
              className="my-2 text-base font-semibold text-white hover:text-gray-200 sm:my-0 sm:text-lg"
            >
              View all case studies <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

export default CaseStudyHome
