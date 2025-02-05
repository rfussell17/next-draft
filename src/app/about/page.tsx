import { Button } from '@/components/button'
import { Container } from '@/components/container'
import PageHeader from '@/components/page-header'
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
    <li className="flex items-center gap-4">
      <Image
        alt=""
        src={img}
        className="size-12 rounded-full"
        width={200}
        height={200}
      />
      <div className="text-sm/6">
        <h3 className="font-medium">{name}</h3>
        <p className="text-gray-00">{description}</p>
      </div>
    </li>
  )
}

function IntroOne() {
  return (
    <>
      <PageHeader
        seoTitle="About Draft.dev"
        header="We believe great marketing content can also be educational"
      />
      <Container className="m-auto my-32 max-w-6xl">
        {/* <h1 hidden sr-only>
        About Draft.dev
      </h1>
      <h2 className="header-gradient">
        We believe great marketing content can also be educational
      </h2> */}

        <div className="my-24 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="m-auto max-w-lg">
            <p className="text-xl text-gray-600">
              After spending 8 years as a CTO, building software engineering
              teams in venture-funded startups,{' '}
              <strong>
                Karl Hughes founded Draft.dev to help companies create authentic
                technical content
              </strong>{' '}
              that resonates with software developers.
            </p>
            <p className="mt-8 text-xl text-gray-600">
              Since founding the company in 2020, the team has grown to include
              marketers, editors, engineers, and over 300 engineers who write
              content for us.
            </p>
          </div>
          <div className="max-lg:order-first max-lg:max-w-lg">
            <div className="aspect-[3/2] overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <Image
                alt=""
                src="/company/5.jpg"
                className="block size-full object-cover"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
        <h3 className="lead-gradient mt-16 font-semibold">The team_</h3>
        <hr className="mt-6 border-t border-gray-200" />
        <ul
          role="list"
          className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          <Person
            name="Karl Hughes"
            description="Founder, CEO"
            img="/team/michael-foster.jpg"
          />
          <Person
            name="Clayton Kast"
            description="Account Director"
            img="/team/dries-vincent.jpg"
          />
          <Person
            name="Annika Puura"
            description="Operations Manager"
            img="/team/celeste-vandermark.jpg"
          />
          <Person
            name="Jakkie Koekemoer"
            description="Engineering Manager"
            img="/team/courtney-henry.jpg"
          />
          <Person
            name="Aniket Bhattacharyea"
            description="Developer Advocate"
            img="/team/marcus-eldridge.jpg"
          />
          <Person
            name="Kumar Harsh"
            description="Developer Advocate"
            img="/team/whitney-francis.jpg"
          />
          <Person
            name="Elzet Blaauw"
            description="Managing Editor"
            img="/team/leonard-krasner.jpg"
          />
          <Person
            name="Kirstin Spivey"
            description="Editor"
            img="/team/nolan-sheffield.jpg"
          />
          <Person
            name="Shane Cullen"
            description="Editor"
            img="/team/emily-selman.jpg"
          />
          <Person
            name="Meagan Shelley"
            description="Marketing"
            img="/team/leonard-krasner.jpg"
          />
          <Person
            name="Tim Freese"
            description="Accountant"
            img="/team/nolan-sheffield.jpg"
          />
        </ul>
      </Container>
    </>
  )
}

function IntroTwo() {
  return (
    <Container className="m-auto my-32 max-w-6xl rounded-2xl bg-gradient-brand p-16">
      <h3 className="header-light m-auto max-w-4xl px-8 py-6 ring-2 ring-white">
        What makes Draft.dev different?
      </h3>
      <div className="m-auto mt-16 max-w-4xl">
        <div className="m-auto text-lg text-white">
          <p>
            We work exclusively with companies that are trying to reach{' '}
            <strong>
              software developers, data engineers, and DevOps practitioners
            </strong>
            . Typically, our clients are Developer Relations or Developer
            Marketing teams at companies with 50+ employees or at least Series A
            funding.
          </p>
          <p className="mt-8">
            We specialize in producing technical content (mostly tutorials and
            blog posts), but we can also help you create a content plan, come up
            with suitable topics, or execute on one-time content projects like
            ebooks.
          </p>
          <p className="mt-8">
            <strong>
              Our goal is to create high-quality, technically-deep content.
            </strong>{' '}
            Subject-matter experts are assigned to each article, so every piece
            is detailed and authoritative. Our core team includes experienced
            engineers and editors who make sure that{' '}
            <strong>every piece of content </strong>
            comes to you ready to publish.
          </p>
        </div>
      </div>
    </Container>
  )
}

function Jobs() {
  return (
    <Container className="m-auto mt-32 max-w-6xl">
      <h2 className="header-gradient">Write for Draft.dev_</h2>
      <p className="mt-6 max-w-4xl text-lg">
        If you're a software developer and you want to build your personal brand
        while getting paid to write about interesting technical topics, you've
        come to the right place. We create content that will be read by a wide
        range of readers around the world. As such, we're committed to
        supporting diversity in our writers and encourage everyone at all
        experience levels to apply.
      </p>
      <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-[1fr_24rem]">
        <div className="lg:max-w-5xl">
          <div>
            <table className="w-full text-left">
              <colgroup>
                <col className="w-2/3" />
                <col className="w-1/3" />
                <col className="w-0" />
              </colgroup>
              <thead className="sr-only">
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Location</th>
                  <th scope="col">Read more</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="colgroup" colSpan={3} className="px-0 pb-0 pt-10">
                    <div className="-mx-4 rounded-lg bg-gradient-3 px-4 py-3 text-sm/6 font-semibold text-white">
                      Engineering
                    </div>
                  </th>
                </tr>
                <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                  <td className="px-0 py-4">iOS Developer</td>
                  <td className="px-0 py-4 text-gray-600">Remote</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
                      View listing
                    </Button>
                  </td>
                </tr>
                <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                  <td className="px-0 py-4">Backend Engineer</td>
                  <td className="px-0 py-4 text-gray-600">Remote</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
                      View listing
                    </Button>
                  </td>
                </tr>
                <tr className="text-sm/6 font-normal">
                  <td className="px-0 py-4">Product Engineer</td>
                  <td className="px-0 py-4 text-gray-600">Remote</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
                      View listing
                    </Button>
                  </td>
                </tr>
                <tr>
                  <th scope="colgroup" colSpan={3} className="px-0 pb-0 pt-5">
                    <div className="-mx-4 rounded-lg bg-gradient-1 px-4 py-3 text-sm/6 font-semibold text-white">
                      Design
                    </div>
                  </th>
                </tr>
                <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                  <td className="px-0 py-4">Principal Designer</td>
                  <td className="px-0 py-4 text-gray-600">Remote</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
                      View listing
                    </Button>
                  </td>
                </tr>
                <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                  <td className="px-0 py-4">Designer</td>
                  <td className="px-0 py-4 text-gray-600">Remote</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
                      View listing
                    </Button>
                  </td>
                </tr>
                <tr className="text-sm/6 font-normal">
                  <td className="px-0 py-4">Senior Designer</td>
                  <td className="px-0 py-4 text-gray-600">Remote</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
                      View listing
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default function About() {
  return (
    <main className="overflow-hidden">
      <IntroOne />
      <IntroTwo />
      <Jobs />
    </main>
  )
}
