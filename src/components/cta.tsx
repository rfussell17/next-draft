import { CheckCircleIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'
const benefits: string[] = [
  'Competitive salaries',
  'Flexible work hours',
  '30 days of paid vacation',
  'Annual team retreats',
  'Benefits for you and your family',
  'A great work environment',
]

export default function CTA(): JSX.Element {
  return (
    <div className="py-24 sm:py-32">
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="ring-white/10 mx-auto flex max-w-2xl flex-col gap-16 bg-primary px-6 py-16 ring-1 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
            <Image
              alt="Team environment"
              width={500}
              height={500}
              src="https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
            />
            <div className="w-full flex-auto">
              <h2 className="text-white text-pretty text-4xl font-semibold tracking-tight sm:text-5xl">
                Join our team
              </h2>
              <p className="text-gray-300 mt-6 text-pretty text-lg/8">
                Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
                magnam voluptatum cupiditate veritatis in accusamus quisquam.
              </p>
              <ul
                role="list"
                className="text-white mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base/7 sm:grid-cols-2"
              >
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-x-3">
                    <CheckCircleIcon
                      aria-hidden="true"
                      className="h-7 w-5 flex-none"
                    />
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex">
                <Link href="#" className="text-sm/6 font-semibold text-primary">
                  See our job postings <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
