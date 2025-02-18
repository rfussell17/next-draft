import Image from 'next/image'

type PersonProps = {
  name: string
  description: string
  img: string
}

const Person = ({ name, description, img }: PersonProps) => {
  return (
    <li>
      <div className="w-48 rounded-4xl bg-white/15 p-1 shadow ring-1 ring-black/5">
        <div className="rounded-3xl p-1 shadow-md shadow-black/5">
          <div className="overflow-hidden rounded-3xl shadow-2xl outline outline-1 -outline-offset-1 outline-black/10">
            <Image
              alt={`${name} - ${description}`}
              src={img}
              width={200}
              height={200}
              className="aspect-square w-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="text-md mt-4">
        <h3 className="font-medium text-white">{name}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </li>
  )
}

type TeamMember = {
  name: string
  description: string
  img: string
}

const teamMembers: TeamMember[] = [
  {
    name: 'Karl Hughes',
    description: 'Founder, CEO',
    img: '/draft/team/karl_hughes_draft_dev.jpg',
  },
  {
    name: 'Manuel Weiss',
    description: 'Co-owner, title',
    img: '/draft/team/manuel_weiss_draft_dev.jpg',
  },
  {
    name: 'Clayton Kast',
    description: 'Account Director',
    img: '/draft/team/clayton_kast_draft_dev.jpg',
  },
  {
    name: 'Annika Puura',
    description: 'Operations Manager',
    img: '/draft/team/annika_puura_draft_dev.jpg',
  },
  {
    name: 'Jakkie Koekemoer',
    description: 'Engineering Manager',
    img: '/draft/team/jakkie_koekemoer_draft_dev.jpg',
  },
  {
    name: 'Elzet Blaauw',
    description: 'Managing Editor',
    img: '/draft/team/elzet_blaauw_draft_dev.jpg',
  },
]

const Team = () => {
  return (
    <div className="bg-gradient-brand py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="subheader-light">The team</h2>
        <p className="paragraph-light my-5 max-w-5xl">
          Draft.dev is a <strong>content marketing agency</strong> focused on
          creating in-depth, technical content for companies in tech. We work
          with subject matter experts from around the world to create{' '}
          <strong>tutorials</strong>, <strong>blog posts</strong>, and{' '}
          <strong>e-books</strong> for our clients. We're a small but quickly
          growing team of technologists, writers, marketers, and editors.
        </p>
        <p className="paragraph-light my-5">
          Want to join us? Learn more about our open roles here.
        </p>
        <hr className="mt-6 border-t border-gray-200/20" />
        <ul className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <Person
              key={member.name}
              name={member.name}
              description={member.description}
              img={member.img}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Team
