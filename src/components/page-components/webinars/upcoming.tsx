import { CalendarIcon, ClockIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

const UpcomingWebinars = () => {
  return (
    <div className="overflow-hidden bg-white py-14 sm:py-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-center">
          <div className="lg:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto max-w-4xl sm:max-w-4xl lg:mx-0">
              <h2 className="sm:subheader-gradient subheader-mobile-gradient">
                Upcoming Webinars
              </h2>

              <div className="">
                <h3 className="lead-dark py-4 font-semibold">
                  Navigating Diverse Audiences in Technical Marketing
                </h3>
                <div className="relative">
                  <div className="flex items-center space-x-2 text-xl text-gray-500">
                    <CalendarIcon className="8-4 my-2 h-8" />
                    <p>19 Feb 2025</p>
                  </div>
                  <div className="flex items-center space-x-2 text-xl text-gray-500">
                    <ClockIcon className="8-4 my-2 h-8" />
                    <p>1pm CST</p>
                  </div>{' '}
                </div>
              </div>

              <dl className="mt-6 max-w-xl space-y-8 text-gray-700 lg:max-w-none">
                <div className="relative">
                  <dd className="my-4">
                    Technical professionals come in many roles—developers,
                    DevOps engineers, architects, and leaders—all with distinct
                    goals, challenges, and preferences. Tailoring your marketing
                    efforts to these audiences is essential for driving impact
                    and achieving results.
                  </dd>
                  <dd className="my-4">
                    In this webinar, Tom Williams, Partner at Catchy, and Ryan
                    Paul Gibson, Founder of Content Lift, will share strategies
                    for reaching and resonating with different types of
                    technical professionals. You’ll learn how to segment your
                    audience, craft role-specific messaging, and choose the
                    right platforms to optimize your campaigns.
                  </dd>
                </div>
              </dl>
              <div className="mt-6 flex flex-col items-start gap-x-6 sm:mt-16 sm:flex-row sm:items-center">
                <Link
                  href="#"
                  className="my-2 rounded-sm px-3.5 py-2.5 text-sm font-semibold text-gray-600 shadow-sm ring-2 ring-gray-500 hover:bg-gradient-brand hover:text-white hover:ring-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:my-0 sm:text-base"
                >
                  Register Now
                </Link>
                <Link
                  href="#"
                  className="my-2 text-sm font-semibold text-gray-600 hover:text-gray-700 sm:my-0 sm:text-base"
                >
                  Watch past webinars <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="rounded-4xl bg-white/15 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:max-w-xs">
            <div className="rounded-4xl p-2 shadow-md shadow-black/5">
              <div className="overflow-hidden rounded-3xl shadow-2xl outline outline-1 -outline-offset-1 outline-black/10">
                <Image
                  alt="Technical content development"
                  src="/site/team_draft_dev.jpg"
                  width={500}
                  height={300}
                  className="w-full rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpcomingWebinars
