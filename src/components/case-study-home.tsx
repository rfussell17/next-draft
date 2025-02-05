import { Button } from './button'

const CaseStudyHome = () => {
  return (
    <div>
      <main className="relative isolate bg-gradient-brand py-10">
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

        <div className="flex flex-col justify-center gap-x-6 gap-y-4 py-16 sm:flex-row sm:py-14">
          <Button
            variant="primary"
            href="/case-studies"
            className="text-lg font-semibold"
          >
            View case studies
          </Button>
          <Button
            variant="outline"
            className="text-lg"
            colorMode="light"
            href="/case-studies"
          >
            See our content marketing services
          </Button>
        </div>
      </main>
    </div>
  )
}

export default CaseStudyHome
