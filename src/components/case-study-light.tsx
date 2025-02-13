import Image from 'next/image'
import Link from 'next/link'

const CaseStudyLight = () => {
  return (
    <div>
      <main className="relative isolate pb-16">
        <div className="mx-auto max-w-7xl px-6 py-6 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-2xl gap-x-12 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <div className="relative w-full lg:shrink-0 xl:max-w-2xl">
              <h1 className="subheader-case-study mb-6 pb-4 font-semibold text-gradient-3">
                See how{' '}
                <span className="bg-gradient-brand px-2 text-white">
                  Earthly
                </span>{' '}
                increased its monthly blog visitors by{' '}
                <span className="bg-gradient-brand px-2 text-white">346%</span>{' '}
                and ramped up its content production with Draft.dev
              </h1>
              <p className="sm:lead-dark pb-6 text-xl sm:pb-0">
                <em>
                  “It’s difficult to find an agency with enough high-quality
                  subject matter expert writers to build up the content pipeline
                  that Draft.dev gives you. It’s a shortcut to building an
                  in-house writing team.”
                </em>
              </p>
              <div className="mt-6 flex flex-col items-start gap-x-6 sm:mt-16 sm:flex-row sm:items-center">
                <Link
                  href="#"
                  className="my-2 rounded-sm bg-gradient-brand px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm ring-2 ring-white hover:bg-white hover:text-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:my-0 sm:text-base"
                >
                  Read this case study
                </Link>
                <Link
                  href="#"
                  className="my-2 text-sm font-semibold text-gray-600 hover:text-gray-800 sm:my-0 sm:text-base"
                >
                  See all case studies <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <div className="mt-14 hidden lg:block">
              <div className="rounded-4xl bg-white/15 p-2 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5">
                <div className="overflow-hidden rounded-3xl shadow-2xl outline outline-1 -outline-offset-1 outline-black/10">
                  <Image
                    alt="Marketing success visualization"
                    height={1000}
                    width={1000}
                    src="/testimonials/adam_bell_draft_dev.jpg"
                    className="aspect-[2/3] w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center uppercase">
            <h2
              className="subheader-gradient pt-16"
              style={{ lineHeight: '1.5' }}
            >
              How{' '}
              <span className="lead-white inline-flex items-center bg-gradient-brand px-3">
                <span className="text-white">Earthly</span>
              </span>{' '}
              Increased Its Monthly Blog Visitors by{' '}
              <span className="inline-flex items-center bg-white p-3 leading-none">
                <span className="header-gradient">346%</span>
              </span>{' '}
              and ramped up its content production with Draft.dev
            </h2>
          </div>
        </div>

        <div className="">
          <div className="mt-6 flex flex-col items-center justify-center gap-x-6 sm:mt-16 sm:flex-row sm:items-center">
            <Link
              href="#"
              className="sm:text-md my-2 rounded-sm bg-gradient-brand px-3.5 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-white hover:text-gray-100 hover:ring-2 hover:ring-gradient-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:my-0"
            >
              See this case study
            </Link>
            <Link
              href="#"
              className="sm:text-md my-2 text-base font-semibold text-gradient-1 hover:text-gray-200 sm:my-0"
            >
              View all case studies <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div> */}
      </main>
    </div>
  )
}

export default CaseStudyLight
