import Image from 'next/image'
import headshot1 from '../../../public/testimonials/amy-chase.jpg'
import headshot2 from '../../../public/testimonials/conor-neville.jpg'
import headshot3 from '../../../public/testimonials/dillon-lenora.jpg'
import headshot4 from '../../../public/testimonials/harriet-arron.jpg'
import headshot5 from '../../../public/testimonials/tina-yards.jpg'
import headshot6 from '../../../public/testimonials/veronica-winton.jpg'

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
    body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
    author: {
      name: 'EMILY BLITSTEIN',
      company: 'SINCH MAILGUN',
      imageUrl: headshot1.src,
    },
  },
  {
    body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
    author: {
      name: 'ABHISHEK IYER',
      company: 'DESCOPE',
      imageUrl: headshot2.src,
    },
  },
  {
    body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
    author: {
      name: 'JENNY MEDEIROS',
      company: 'REDPANDA',
      imageUrl: headshot3.src,
    },
  },
  {
    body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
    author: {
      name: 'RANDALL DEGGES',
      company: 'SNYK',
      imageUrl: headshot4.src,
    },
  },
  {
    body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
    author: {
      name: 'RICH BURROUGHS',
      company: 'LOFT LABS',
      imageUrl: headshot5.src,
    },
  },
  {
    body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
    author: {
      name: 'ROBERT GIBB',
      company: 'FABRIC. INC',
      imageUrl: headshot6.src,
    },
  },
  // Add more testimonials here...
]

export default function Testimonials() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold text-primary">Testimonials</h2>
          <p className="text-gray-900 mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
            What our clients are saying
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author.company}
                className="pt-8 sm:inline-block sm:w-full sm:px-4"
              >
                <figure className="bg-gray-50 rounded-2xl p-8 text-sm">
                  <blockquote className="text-gray-900">
                    <p>{`“${testimonial.body}”`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <Image
                      alt={`${testimonial.author.name}'s profile`}
                      src={testimonial.author.imageUrl}
                      width={40}
                      height={40}
                      className="bg-gray-50 h-10 w-10 rounded-full"
                    />
                    <div>
                      <div className="text-gray-900 font-semibold">
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
