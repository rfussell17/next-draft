import Image from 'next/image'
import Link from 'next/link'

const MiniCaseEarthly = () => {
  return (
    <div>
      <main className="relative isolate my-24">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="mx-auto max-w-2xl gap-x-12 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <div className="relative w-full lg:shrink-0 xl:max-w-2xl">
              <div className="relative max-w-xl py-8 pl-8">
                <div className="absolute left-0 top-0 h-full w-1 bg-gray-300" />
                <p className="bg-gradient-brand font-code text-3xl font-semibold text-gradient">
                  "It's difficult to find an agency with enough high-quality
                  subject matter expert writers to build up the content pipeline
                  that Draft.dev gives you. It's a shortcut to building an
                  in-house writing team."
                </p>
                <div className="pt-8 text-gray-600">
                  <p className="case-study-small font-semibold">
                    Adam Gordon Bell
                  </p>
                  <p className="case-study-small">
                    Director of Developer Relations, Earthly
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-col items-center gap-x-6 sm:mt-16 sm:flex-row">
                <Link
                  href="#"
                  className="my-2 rounded-sm bg-gradient-brand px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm ring-2 ring-white hover:bg-white hover:text-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:my-0 sm:text-base"
                >
                  Read the full case study
                </Link>
                <Link
                  href="#"
                  className="my-2 text-sm font-semibold text-gray-600 hover:text-gray-800 sm:my-0 sm:text-base"
                >
                  See all case studies <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <div className="hidden lg:block lg:w-[400px]">
              <div className="rounded-4xl bg-white/15 p-2 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5">
                <div className="overflow-hidden rounded-3xl shadow-2xl outline outline-1 -outline-offset-1 outline-black/10">
                  <Image
                    alt="Adam Gordon Bell"
                    height={1000}
                    width={1000}
                    priority
                    src="/media/testimonials-lg/adam_bell_earthly_draft_dev.jpg"
                    className="aspect-[2/3] w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default MiniCaseEarthly
