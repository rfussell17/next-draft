const stats = [
  { id: 1, name: 'Dev Writers & Reviewers ', value: '300+' },
  { id: 2, name: 'Technical Audience', value: '100%' },
  { id: 3, name: 'Clients', value: '100+' },
  { id: 4, name: 'Content Pieces Published', value: '3000+' },
]

export default function SocialProofSmall() {
  return (
    <div className="pb-10 pt-5">
      <div className="text-left">
        <h3 className="subheader-mobile-light pb-3 font-semibold sm:pb-0 sm:text-left sm:text-base">
          Draft.dev has worked with hundreds of successful tech companies
        </h3>
      </div>
      <dl className="mt-4 grid grid-cols-1 gap-0.5 overflow-hidden rounded-lg text-center sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.id} className="flex flex-col bg-white/5 p-8">
            <dt className="text-sm font-semibold leading-6 text-gray-300">
              {stat.name}
            </dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-white">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
