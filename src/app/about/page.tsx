import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Heading, Lead, Subheading } from '@/components/text'
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

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">Helping companies generate revenue.</Heading>
      <Lead className="mt-6 max-w-3xl">
        We’re on a mission to transform revenue organizations by harnessing vast
        amounts of illegally acquired customer data.
      </Lead>
      <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
        <div className="max-w-lg">
          <h2 className="text-2xl font-medium tracking-tight">Our mission</h2>
          <p className="text-gray-600 mt-6 text-sm/6">
            At Radiant, we are dedicated to transforming the way revenue
            organizations source and close deals. Our mission is to provide our
            customers with an unfair advantage over both their competitors and
            potential customers through insight and analysis. We’ll stop at
            nothing to get you the data you need to close a deal.
          </p>
          <p className="text-gray-600 mt-8 text-sm/6">
            We’re customer-obsessed — putting the time in to build a detailed
            financial picture of every one of our customers so that we know more
            about your business than you do. We are in this together, mostly
            because we are all implicated in large-scale financial crime. In our
            history as a company, we’ve never lost a customer, because if any
            one of us talks, we all go down.
          </p>
        </div>
        <div className="pt-20 lg:row-span-2 lg:-mr-16 xl:mr-auto">
          <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
            <div className="outline-black/10 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1">
              <Image
                alt=""
                src="/company/1.jpg"
                className="block size-full object-cover"
                width={200}
                height={200}
              />
            </div>
            <div className="outline-black/10 -mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 lg:-mt-32">
              <Image
                alt=""
                src="/company/2.jpg"
                className="block size-full object-cover"
                width={200}
                height={200}
              />
            </div>
            <div className="outline-black/10 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1">
              <Image
                alt=""
                src="/company/3.jpg"
                className="block size-full object-cover"
                width={200}
                height={200}
              />
            </div>
            <div className="outline-black/10 -mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 lg:-mt-32">
              <Image
                alt=""
                src="/company/4.jpg"
                className="block size-full object-cover"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
      </section>
    </Container>
  )
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
        <p className="text-gray-500">{description}</p>
      </div>
    </li>
  )
}

function Team() {
  return (
    <Container className="mt-32">
      <Subheading>Meet the team</Subheading>
      <Heading as="h3" className="mt-2">
        Founded by an all-star team.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        Radiant is founded by two of the best sellers in the business and backed
        by investors who look the other way.
      </Lead>
      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="max-w-lg">
          <p className="text-gray-600 text-sm/6">
            Years ago, while working as sales associates at rival companies,
            Thomas, Ben, and Natalie were discussing a big client they had all
            been competing for. Joking about seeing the terms of each other’s
            offers, they had an idea: what if they shared data to win deals and
            split the commission behind their companies’ backs? It turned out to
            be an incredible success, and that idea became the kernel for
            Radiant.
          </p>
          <p className="text-gray-600 mt-8 text-sm/6">
            Today, Radiant transforms revenue organizations by harnessing
            illegally acquired customer and competitor data, using it to provide
            extraordinary leverage. More than 30,000 companies rely on Radiant
            to undercut their competitors and extort their customers, all
            through a single integrated platform.
          </p>
          <div className="mt-6">
            <Button className="w-full sm:w-auto" href="#">
              Join us
            </Button>
          </div>
        </div>
        <div className="max-lg:order-first max-lg:max-w-lg">
          <div className="outline-black/10 aspect-[3/2] overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1">
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
      <Subheading as="h3" className="mt-24">
        The team
      </Subheading>
      <hr className="border-gray-200 mt-6 border-t" />
      <ul
        role="list"
        className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        <Person
          name="Michael Foster"
          description="Co-Founder / CTO"
          img="/team/michael-foster.jpg"
        />
        <Person
          name="Dries Vincent"
          description="Business Relations"
          img="/team/dries-vincent.jpg"
        />
        <Person
          name="Celeste Vandermark"
          description="Front-end Developer"
          img="/team/celeste-vandermark.jpg"
        />
        <Person
          name="Courtney Henry"
          description="Designer"
          img="/team/courtney-henry.jpg"
        />
        <Person
          name="Marcus Eldridge"
          description="Director of Product"
          img="/team/marcus-eldridge.jpg"
        />
        <Person
          name="Whitney Francis"
          description="Copywriter"
          img="/team/whitney-francis.jpg"
        />
        <Person
          name="Leonard Krasner"
          description="Senior Designer"
          img="/team/leonard-krasner.jpg"
        />
        <Person
          name="Nolan Sheffield"
          description="Principal Designer"
          img="/team/nolan-sheffield.jpg"
        />
        <Person
          name="Emily Selman"
          description="VP, User Experience"
          img="/team/emily-selman.jpg"
        />
      </ul>
    </Container>
  )
}

function Investors() {
  return (
    <Container className="mt-32">
      <Subheading>Investors</Subheading>
      <Heading as="h3" className="mt-2">
        Funded by industry-leaders.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        We are fortunate to be backed by the best investors in the industry —
        both literal and metaphorical partners in crime.
      </Lead>
      <Subheading as="h3" className="mt-24">
        Venture Capital
      </Subheading>
      <hr className="border-gray-200 mt-6 border-t" />
      <ul
        role="list"
        className="mx-auto mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2"
      >
        <li>
          <Image
            alt="Remington Schwartz"
            src="/investors/remington-schwartz.svg"
            className="h-14"
            width={200}
            height={200}
          />
          <p className="text-gray-500 mt-6 max-w-lg text-sm/6">
            Remington Schwartz has been a driving force in the tech industry,
            backing bold entrepreneurs who explore grey areas in financial and
            privacy law. Their deep industry expertise and extensive political
            lobbying provide their portfolio companies with favorable regulation
            and direct access to lawmakers.
          </p>
        </li>
        <li>
          <Image
            alt="Deccel"
            src="/investors/deccel.svg"
            className="h-14"
            width={200}
            height={200}
          />
          <p className="text-gray-500 mt-6 max-w-lg text-sm/6">
            Deccel has been at the forefront of innovation, investing in
            pioneering companies across various sectors, including technology,
            consumer goods, and healthcare. Their philosophy of ‘plausible
            deniability’ and dedication to looking the other way have helped
            produce some of the world’s most controversial companies.
          </p>
        </li>
      </ul>
      <Subheading as="h3" className="mt-24">
        Individual investors
      </Subheading>
      <hr className="border-gray-200 mt-6 border-t" />
      <ul
        role="list"
        className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        <Person
          name="Kristin Watson"
          description="TechNexus Ventures"
          img="/individual-investors/kristin-watson.jpg"
        />
        <Person
          name="Emma Dorsey"
          description="Innovate Capital Partners"
          img="/individual-investors/emma-dorsey.jpg"
        />
        <Person
          name="Alicia Bell"
          description="FutureWave Investments"
          img="/individual-investors/alicia-bell.jpg"
        />
        <Person
          name="Jenny Wilson"
          description="SynergyTech Equity"
          img="/individual-investors/jenny-wilson.jpg"
        />
        <Person
          name="Anna Roberts"
          description="NextGen Horizons"
          img="/individual-investors/anna-roberts.jpg"
        />
        <Person
          name="Benjamin Russel"
          description="Pioneer Digital Ventures"
          img="/individual-investors/benjamin-russel.jpg"
        />
      </ul>
    </Container>
  )
}

function Testimonial() {
  return (
    <div className="h-90 relative flex aspect-square w-full flex-col justify-end overflow-hidden rounded-3xl sm:aspect-[5/4] lg:aspect-[3/4]">
      <Image
        alt=""
        src="/testimonials/veronica-winton.jpg"
        className="absolute inset-0 object-cover"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div
        aria-hidden="true"
        className="from-black ring-gray-950/10 absolute inset-0 rounded-3xl bg-gradient-to-t from-10% to-75% ring-1 ring-inset lg:from-25%"
      />
      <figure className="relative p-10">
        <blockquote>
          <p className="text-white relative text-xl/7 before:absolute before:-translate-x-full before:content-['“'] after:absolute after:content-['”']">
            We&apos;ve managed to put two of our main competitors out of
            business in 6 months.
          </p>
        </blockquote>
        <figcaption className="border-white/20 mt-6 border-t pt-6">
          <p className="text-white text-sm/6 font-medium">Veronica Winton</p>
          <p className="text-sm/6 font-medium">
            <span className="text-transparent bg-gradient-to-r from-[#fff1be] from-[28%] via-[#ee87cb] via-[70%] to-[#b060ff] bg-clip-text">
              CSO, Planeteria
            </span>
          </p>
        </figcaption>
      </figure>
    </div>
  )
}

function Careers() {
  return (
    <Container className="my-32">
      <Subheading>Careers</Subheading>
      <Heading as="h3" className="mt-2">
        Join our fully remote team.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        We work together from all over the world, mainly from locations without
        extradition agreements.
      </Lead>
      <div className="mt-24 grid grid-cols-1 gap-16 lg:grid-cols-[1fr_24rem]">
        <div className="lg:max-w-2xl">
          <Subheading as="h3">Open positions</Subheading>
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
                    <div className="bg-gray-50 -mx-4 rounded-lg px-4 py-3 text-sm/6 font-semibold">
                      Engineering
                    </div>
                  </th>
                </tr>
                <tr className="border-gray-200 border-b border-dotted text-sm/6 font-normal">
                  <td className="px-0 py-4">iOS Developer</td>
                  <td className="text-gray-600 px-0 py-4">Remote</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
                      View listing
                    </Button>
                  </td>
                </tr>
                <tr className="border-gray-200 border-b border-dotted text-sm/6 font-normal">
                  <td className="px-0 py-4">Backend Engineer</td>
                  <td className="text-gray-600 px-0 py-4">Remote</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
                      View listing
                    </Button>
                  </td>
                </tr>
                <tr className="text-sm/6 font-normal">
                  <td className="px-0 py-4">Product Engineer</td>
                  <td className="text-gray-600 px-0 py-4">Remote</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
                      View listing
                    </Button>
                  </td>
                </tr>
                <tr>
                  <th scope="colgroup" colSpan={3} className="px-0 pb-0 pt-5">
                    <div className="bg-gray-50 -mx-4 rounded-lg px-4 py-3 text-sm/6 font-semibold">
                      Design
                    </div>
                  </th>
                </tr>
                <tr className="border-gray-200 border-b border-dotted text-sm/6 font-normal">
                  <td className="px-0 py-4">Principal Designer</td>
                  <td className="text-gray-600 px-0 py-4">Remote</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
                      View listing
                    </Button>
                  </td>
                </tr>
                <tr className="border-gray-200 border-b border-dotted text-sm/6 font-normal">
                  <td className="px-0 py-4">Designer</td>
                  <td className="text-gray-600 px-0 py-4">Remote</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
                      View listing
                    </Button>
                  </td>
                </tr>
                <tr className="text-sm/6 font-normal">
                  <td className="px-0 py-4">Senior Designer</td>
                  <td className="text-gray-600 px-0 py-4">Remote</td>
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
        <Testimonial />
      </div>
    </Container>
  )
}

export default function About() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Team />
      <Investors />
      <Careers />
    </main>
  )
}
