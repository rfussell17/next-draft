import Image from 'next/image'
import { Container } from './container'

interface TestimonialProps {
  imageSrc: string
  imageAlt: string
  quote: string
  name: string
  role: string
  company: string
}

function Testimonial({
  imageSrc,
  imageAlt,
  quote,
  name,
  role,
  company,
}: TestimonialProps) {
  return (
    <div className="mx-2 my-24 rounded-4xl bg-gradient-brand pb-24 pt-72 lg:pt-36">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[384px_1fr_1fr]">
          <div className="-mt-96 lg:-mt-52">
            <div className="-m-2 rounded-4xl bg-white/15 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:max-w-xs">
              <div className="rounded-4xl p-2 shadow-md shadow-black/5">
                <div className="overflow-hidden rounded-3xl shadow-2xl outline outline-1 -outline-offset-1 outline-black/10">
                  <Image
                    height={1000}
                    width={1000}
                    alt={imageAlt}
                    src={imageSrc}
                    className="aspect-[3/4] w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex max-lg:mt-16 lg:col-span-2 lg:px-16">
            <figure className="mx-auto flex max-w-xl flex-col gap-10 max-lg:text-center">
              <blockquote>
                <p className="testimonial-light relative">{quote}</p>
              </blockquote>
              <figcaption className="">
                <p className="font-medium text-white">{name}</p>
                <p className="text-gray-100">
                  {role}, {company}
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Testimonial
