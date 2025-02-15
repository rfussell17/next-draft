import Image from 'next/image'

const How = () => {
  return (
    <div className="overflow-hidden bg-white py-16">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-center">
          <div className="l px-6 lg:px-0 lg:pr-4">
            <div className="mx-auto max-w-3xl sm:max-w-4xl lg:mx-0">
              <h2 className="subheader-mobile-gradient sm:subheader-gradient">
                How Draft.dev works with clients
              </h2>

              <dl className="mt-6 max-w-xl space-y-8 text-lg/7 text-gray-600 lg:max-w-none">
                <div className="relative">
                  <dt className="font-bold text-secondary">
                    1. Discovery Call
                  </dt>
                  <dd className="my-2">
                    Before we begin working with a new client, we want to make
                    sure we’re a good fit for you. In our 30-minute discovery
                    session, we’ll ask you where your business is at, what your
                    content goals are, and the type of content you’re looking to
                    produce.
                  </dd>
                </div>

                <div className="relative">
                  <dt className="font-bold text-secondary">
                    2. Statement of Work and Timeline
                  </dt>
                  <dd className="my-2">
                    We almost always have a backlog of new clients waiting to
                    start, so once you’re ready to reserve a spot in our
                    production calendar, we’ll send over an estimated timeline
                    and statement of work. This allows us to ensure we have
                    enough writers and editors ready to help maintain our
                    rigorous quality standards, and that both parties are on the
                    same page as far as the scope of work is concerned.
                  </dd>
                </div>

                <div className="relative">
                  <dt className="font-bold text-secondary">
                    3. Topic Strategy and Intake
                  </dt>
                  <dd className="my-2">
                    During the topic strategy phase, we’ll define your content
                    goals, requirements, and the preferences of all stakeholders
                    on your team. Your team will be able to provide examples of
                    articles you like and any desired topic ideas you have in
                    mind. All relevant information about your brand and content
                    strategy is helpful to our Technical Content Specialists and
                    can be incorporated into your content plan.
                  </dd>
                </div>
              </dl>
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

export default How
