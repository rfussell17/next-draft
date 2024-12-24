import React from 'react'

export interface StatItem {
  label: string
  value: string
}

export interface ValueItem {
  name: string
  description: string
}

export interface TeamMember {
  name: string
  role: string
  imageUrl: string
}

export interface BlogPost {
  id: number
  title: string
  href: string
  description: string
  imageUrl: string
  date: string
  datetime: string
  author: {
    name: string
    imageUrl: string
  }
}

export interface SocialMediaIcon {
  name: string
  href: string
  icon: (props: React.ComponentProps<'svg'>) => JSX.Element
}

export interface LandingPageProps {
  branding: {
    companyName: string
    logoUrl: string
  }
  hero: {
    title: string
    description: string
    images?: string[]
  }
  mission: {
    title: string
    description: string
    stats: StatItem[]
  }
  values: {
    sectionTitle: string
    sectionDescription: string
    items: ValueItem[]
  }
  team: {
    sectionTitle: string
    sectionDescription: string
    members: TeamMember[]
  }
  blog: {
    sectionTitle: string
    sectionDescription: string
    posts: BlogPost[]
  }
}

export const LandingPage: React.FC<LandingPageProps> = ({
  branding,
  hero,
  mission,
  values,
  team,
  blog,
}) => {
  return (
    <div className="bg-white">
      <main className="isolate">
        {/* Hero section */}
        <div className="relative pt-14">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                {hero.title}
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {hero.description}
              </p>
            </div>
          </div>
        </div>

        {/* Mission section */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {mission.title}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {mission.description}
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {mission.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-600">
                  {stat.label}
                </dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Values section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {values.sectionTitle}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {values.sectionDescription}
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
            {values.items.map((value) => (
              <div key={value.name}>
                <dt className="font-semibold text-gray-900">{value.name}</dt>
                <dd className="mt-1 text-gray-600">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Team section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {team.sectionTitle}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {team.sectionDescription}
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {team.members.map((person) => (
              <li key={person.name}>
                <img
                  className="aspect-[3/2] w-full rounded-2xl object-cover"
                  src={person.imageUrl}
                  alt=""
                />
                <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">
                  {person.name}
                </h3>
                <p className="text-base leading-7 text-gray-600">
                  {person.role}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Blog section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {blog.sectionTitle}
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              {blog.sectionDescription}
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {blog.posts.map((post) => (
              <article key={post.id} className="flex flex-col items-start">
                <div className="relative w-full">
                  <img
                    src={post.imageUrl}
                    alt=""
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime={post.datetime} className="text-gray-500">
                      {post.date}
                    </time>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                      {post.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default LandingPage
