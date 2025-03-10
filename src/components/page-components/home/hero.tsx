import { LogosFlex } from '@/components/media/logos-flex'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-brand pt-20">
      <main className="relative isolate pb-16">
        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 py-6 sm:py-16 lg:px-8">
            <div className="mx-auto w-full lg:flex lg:items-center lg:justify-between">
              <div className="relative max-w-2xl lg:shrink-0">
                <h1 className="sm:header-light mb-6 pb-4 font-code text-3xl font-semibold text-white">
                  We are a Content Creation Agency for Technical Companies
                </h1>
                <p className="sm:paragraph-light pb-6 text-base text-gray-100 sm:pb-0">
                  Draft.dev helps Marketing
                  and Developer Relations teams in tech businesses drive
                  awareness, capture leads, and build trust.
                </p>
                <div className="mt-6 flex flex-col items-start gap-x-6 sm:mt-16 sm:flex-row sm:items-center">
                  <Link
                    href="/call"
                    className="my-2 rounded-sm px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm ring-2 ring-white hover:bg-white hover:text-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:my-0 sm:text-base"
                  >
                    Book a Discovery Call
                  </Link>
                  <Link
                    href="#lead-generation-package"
                    className="my-2 text-sm font-semibold text-white hover:text-gray-200 sm:my-0 sm:text-base !scroll-smooth"
                  >
                    See Our Lead Generation Package{' '}
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
              <div className="mt-14 hidden justify-end gap-8 sm:-mt-44 sm:pl-20 lg:mt-0 lg:flex lg:pl-0">
                <div className="mr-auto w-44 flex-none space-y-6 pt-16 sm:mr-0">
                  <div className="rounded-4xl bg-white/15 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5">
                    <div className="rounded-4xl p-2 shadow-md shadow-black/5">
                      <div className="overflow-hidden rounded-3xl shadow-2xl outline outline-1 -outline-offset-1 outline-black/10">
                        <Image
                          alt=""
                          height={1000}
                          width={1000}
                          src="/site/small-portrait/coding_draft_dev.jpg"
                          className="aspect-[2/3] w-full rounded-xl object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="rounded-4xl bg-white/15 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5">
                    <div className="rounded-4xl p-2 shadow-md shadow-black/5">
                      <div className="overflow-hidden rounded-3xl shadow-2xl outline outline-1 -outline-offset-1 outline-black/10">
                        <Image
                          alt=""
                          height={1000}
                          width={1000}
                          src="/site/small-portrait/sales_draft_dev.jpg"
                          className="aspect-[2/3] w-full rounded-xl object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-44 flex-none space-y-6 pt-32 sm:pt-0">
                  <div className="rounded-4xl bg-white/15 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5">
                    <div className="rounded-4xl p-2 shadow-md shadow-black/5">
                      <div className="overflow-hidden rounded-3xl shadow-2xl outline outline-1 -outline-offset-1 outline-black/10">
                        <Image
                          alt=""
                          height={1000}
                          width={1000}
                          src="/site/small-portrait/laptop_draft_dev.jpg"
                          className="aspect-[2/3] w-full rounded-xl object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="rounded-4xl bg-white/15 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5">
                    <div className="rounded-4xl p-2 shadow-md shadow-black/5">
                      <div className="overflow-hidden rounded-3xl shadow-2xl outline outline-1 -outline-offset-1 outline-black/10">
                        <Image
                          alt=""
                          height={1000}
                          width={1000}
                          src="/site/small-portrait/commit_draft_dev.jpg"
                          className="aspect-[2/3] w-full rounded-xl object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <LogosFlex />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Hero
