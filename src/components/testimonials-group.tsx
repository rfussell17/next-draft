import Image from 'next/image'

import randall from '/public/testimonials/randall_degges_snyk_draft_dev.png'
import rich from '/public/testimonials/rich_loft_labs_draft_dev.png'
import robert from '/public/testimonials/robert_gibb_fabric_inc_draft_dev.png'

type Testimonial = {
  body: string
  author: {
    name: string
    company: string
    imageUrl: string
  }
}

const testimonials: Testimonial[] = [
  {
    body: "I was thoroughly impressed by the smooth onboarding and ability to adapt to our product suite. Draft.dev's attention to detail and dedication to aligning content with our brand have significantly impacted our developer-focused content strategy. The high-quality technical blog posts have been well-received internally, and we're excited to see the full impact on our content program.",
    author: {
      name: 'Emily Blitstein',
      company: 'SINCH MAILGUN',
      imageUrl: rich.src,
    },
  },
  {
    body: 'Partnering with Draft.dev has accelerated our technical content output while also extending the bandwidth of our developer relations team to focus more on core product activities. It is truly high-quality content written by devs for devs, helping devs in the process.',
    author: {
      name: 'Abhishek Iyer',
      company: 'DESCOPE',
      imageUrl: robert.src,
    },
  },
  {
    body: 'Draft.dev is our go-to for practical, well-written content that actually resonates with technical audiences and helps us inspire the developer community. It has been invaluable (for our internal team and my sanity) to have their brilliant writers, editors, and PMs in our content corner!',
    author: {
      name: 'Jenny Medeiros',
      company: 'REDPANDA',
      imageUrl: randall.src,
    },
  },
  {
    body: 'Draft.dev has been an amazing partner, helping us scale our content program by creating thoughtful and technically-sound developer content and training materials. We’re constantly iterating to build the best educational materials for developer security and Draft.dev has been instrumental in helping us realize these ambitions.',
    author: {
      name: 'Randall Degges',
      company: 'SNYK',
      imageUrl: randall.src,
    },
  },
  {
    body: "Having draft.dev source quality technical content for the Loft Labs blog has been a competitive advantage. It's given us a steadier flow of content, which has helped our brand's visibility, and some of the posts are among the most popular ones we've published.",
    author: {
      name: 'Rich Burroughs',
      company: 'LOFT LABS',
      imageUrl: rich.src,
    },
  },
  {
    body: 'In a matter of weeks, our referral traffic and organic keyword rankings increased by 3x. One post also hit Hacker News which resulted in 5 demo requests in a single day!',
    author: {
      name: 'Robert Gibb',
      company: 'FABRIC. INC',
      imageUrl: robert.src,
    },
  },
  // Add more testimonials here...
]

export default function TestimonialsGroup() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="header-gradient">Testimonials</h2>
          <h3 className="">What our clients are saying</h3>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author.company}
                className="pt-8 sm:inline-block sm:w-full sm:px-4"
              >
                <figure className="rounded-2xl bg-gray-50 p-8 text-base ring-2 ring-gradient-2">
                  <blockquote className="text-gray-900">
                    <p>{`“${testimonial.body}”`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <Image
                      alt={`${testimonial.author.name}'s profile`}
                      src={testimonial.author.imageUrl}
                      width={100}
                      height={100}
                      className="h-10 w-10 rounded-full bg-gray-50"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.author.name}
                      </div>
                      <div className="text-gray-600">{`@${testimonial.author.company}`}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
