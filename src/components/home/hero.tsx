import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { NavbarDark } from '../global/navbar-dark'

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-brand">
      <NavbarDark />
      <main className="relative isolate">
        <div
          aria-hidden="true"
          className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
        ></div>
        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
            <div className="mx-auto max-w-2xl gap-x-12 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              <div className="relative w-full lg:max-w-2xl lg:shrink-0 xl:max-w-3xl">
                <h1 className="header-light mb-6 py-4">
                  The Leader in Developer Marketing
                </h1>
                <p className="text-lg text-gray-200 sm:text-2xl">
                  We are a technical content marketing agency helping Marketing
                  and Developer Relations teams in Tech Companies drive
                  awareness, capture leads, and build trust.
                </p>
                <div className="mt-6 flex flex-col items-start gap-x-6 sm:mt-16 sm:flex-row sm:items-center">
                  <Link
                    href="#"
                    className="my-2 rounded-sm px-3.5 py-2.5 text-base font-semibold text-white shadow-sm ring-2 ring-white hover:bg-white hover:text-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:my-0 sm:text-lg"
                  >
                    See our content marketing services
                  </Link>
                  <Link
                    href="#"
                    className="my-2 text-base font-semibold text-white hover:text-gray-200 sm:my-0 sm:text-lg"
                  >
                    Technical writing examples <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
              {/* Image cluster: hidden on screens smaller than sm */}
              <div className="mt-14 hidden justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:flex lg:pl-0">
                <div className="mr-auto w-44 flex-none space-y-8 pt-16 sm:mr-0">
                  <div className="rounded-4xl bg-white/15 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5">
                    <div className="rounded-4xl p-2 shadow-md shadow-black/5">
                      <div className="overflow-hidden rounded-3xl shadow-2xl outline outline-1 -outline-offset-1 outline-black/10">
                        <Image
                          alt=""
                          height={1000}
                          width={1000}
                          src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
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
                          src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
                          className="aspect-[2/3] w-full rounded-xl object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                  <div className="rounded-4xl bg-white/15 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5">
                    <div className="rounded-4xl p-2 shadow-md shadow-black/5">
                      <div className="overflow-hidden rounded-3xl shadow-2xl outline outline-1 -outline-offset-1 outline-black/10">
                        <Image
                          alt=""
                          height={1000}
                          width={1000}
                          src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
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
                          src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                          className="aspect-[2/3] w-full rounded-xl object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End of image cluster */}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Hero
