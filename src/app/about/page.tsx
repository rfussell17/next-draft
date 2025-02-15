import PageHeader from '@/components/global/page-header'
import { LogosDark } from '@/components/media/logos-dark'
import SocialProof from '@/components/media/social-proof'
import How from '@/components/page-components/company/how'
import What from '@/components/page-components/company/what'
import Why from '@/components/page-components/company/why'
import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  description:
    'Radiant helps you sell more by revealing sensitive information about your customers.',
  robots: {
    index: false,
    follow: false,
  },
}

function Person({
  name,
  description,
  img,
}: {
  name: string
  description: string
  img: string
}) {
  return (
    <li>
      <div className="w-[200px] rounded-3xl bg-white/15 p-1 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5">
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
      <div className="mt-4 text-sm/6">
        <h3 className="font-medium text-white">{name}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </li>
  )
}

function Team() {
  return (
    <div className="m-auto bg-gradient-brand py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="subheader-light">The team</h2>
        <hr className="mt-6 border-t border-gray-200/20" />
        <ul
          role="list"
          className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          <Person
            name="Karl Hughes"
            description="Founder, CEO"
            img="/draft/team/karl_hughes_draft_dev.jpg"
          />
          <Person
            name="Manuel Weiss"
            description="Co-owner, title"
            img="/draft/team/manuel_weiss_draft_dev.jpg"
          />
          <Person
            name="Clayton Kast"
            description="Account Director"
            img="/draft/team/clayton_kast_draft_dev.jpg"
          />
          <Person
            name="Annika Puura"
            description="Operations Manager"
            img="/draft/team/annika_puura_draft_dev.jpg"
          />
          <Person
            name="Jakkie Koekemoer"
            description="Engineering Manager"
            img="/draft/team/jakkie_koekemoer_draft_dev.jpg"
          />
        </ul>
      </div>
    </div>
  )
}

export default function About() {
  return (
    <main className="overflow-hidden">
      <PageHeader header="About Draft.dev" />
      <What />
      <Team />
      <Why />
      <SocialProof />
      <How />
      <LogosDark />
    </main>
  )
}
