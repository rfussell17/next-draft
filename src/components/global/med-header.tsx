import { LogosFlex } from '@/components/media/logos-flex'
import React from 'react'

interface MedHeaderProps {
  title: string
  descriptionOne: string
  descriptionTwo: string
  image?: {
    src: string
    alt: string
  }
  className?: string
}

export const MedHeader: React.FC<MedHeaderProps> = ({
  title,
  descriptionOne,
  descriptionTwo,
  image,
  className = '',
}) => {
  return (
    <div className={`bg-gradient-brand pt-36 ${className}`}>
      <main className="relative isolate pb-16">
        <div
          aria-hidden="true"
          className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl"
        />
        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 py-6 sm:pt-16 lg:px-8">
            <div className="m-auto max-w-2xl items-center gap-x-12 lg:mx-0 lg:flex lg:max-w-none">
              <div className="relative w-full lg:shrink-0 xl:max-w-4xl">
                <h1 className="sm:header-light mb-6 pb-4 font-code text-3xl font-semibold text-white">
                  {title}
                </h1>
                <p className="sm:paragraph-light pb-6 text-base text-gray-100 sm:pb-0">
                  {descriptionOne}
                </p>
                <p className="sm:paragraph-light py-6 text-base text-gray-100 sm:pb-0">
                  {descriptionTwo}
                </p>
                <div className="flex flex-col items-start gap-x-6 sm:mt-16 sm:flex-row sm:items-center"></div>
              </div>

              {/* {image && (
                <div className="mt-14 hidden w-full lg:block">
                  <div className="rounded-4xl bg-white/15 p-2 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5">
                    <div className="overflow-hidden rounded-3xl shadow-2xl outline outline-1 -outline-offset-1 outline-black/10">
                      <Image
                        alt={image.alt}
                        height={400}
                        width={600}
                        src={image.src}
                        className=""
                      />
                    </div>
                  </div>
                </div>
              )} */}
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
