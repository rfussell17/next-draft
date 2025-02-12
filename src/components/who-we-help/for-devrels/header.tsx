import { LogosFlex } from '@/components/logos-flex'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-brand pt-20">
      <main className="relative isolate pb-16">
        <div
          aria-hidden="true"
          className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
        ></div>
        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 py-6 sm:py-16 lg:px-8">
            <div className="mx-auto max-w-2xl gap-x-12 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              <div className="relative w-full lg:shrink-0 xl:max-w-2xl">
                <h1 className="sm:header-light mb-6 pb-4 font-code text-3xl font-semibold text-white">
                  Developer Marketing that Resonates
                </h1>
                <p className="sm:paragraph-light pb-6 text-base text-gray-100 sm:pb-0">
                  We support Developer Relations and Developer Advocate Teams by
                  consistently delivering content that technical audiences truly
                  care about and respect.
                </p>
                <div className="mt-6 flex flex-col items-start gap-x-6 sm:mt-16 sm:flex-row sm:items-center">
                  <Link
                    href="#"
                    className="my-2 rounded-sm px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm ring-2 ring-white hover:bg-white hover:text-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:my-0 sm:text-base"
                  >
                    Book a Discovery Call
                  </Link>
                  <Link
                    href="#"
                    className="my-2 text-sm font-semibold text-white hover:text-gray-200 sm:my-0 sm:text-base"
                  >
                    See Our Lead Generation Package{' '}
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>

              <div className="mt-14 hidden w-96 lg:block">
                <div className="rounded-4xl bg-white/15 p-2 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5">
                  <div className="overflow-hidden rounded-3xl shadow-2xl outline outline-1 -outline-offset-1 outline-black/10">
                    <Image
                      alt=""
                      height={1000}
                      width={1000}
                      src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
                      className="aspect-[2/3] w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* <SocialProofSmall /> */}
            <LogosFlex />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Header
