import Image from 'next/image'

interface TestimonialProps {
  quote: string
  authorName: string
  imageSrc: string
  imageAlt?: string
}

const Testimonial = ({
  quote,
  authorName,
  imageSrc,
  imageAlt,
}: TestimonialProps) => {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-brand px-6 lg:px-8">
      <div className="relative mx-auto max-w-2xl py-20 sm:py-28 lg:max-w-4xl">
        <div className="absolute left-1/2 top-0 -z-10 h-[50rem] w-[90rem] -translate-x-1/2 bg-[radial-gradient(50%_100%_at_top,theme(colors.tertiary),white)] opacity-20 lg:left-36" />
        <div className="shadow-primary-600/10 lg:-mr-26 absolute inset-y-0 right-1/2 -z-10 mr-12 w-[150vw] origin-bottom-left skew-x-[-30deg] shadow-xl ring-1 ring-secondary sm:mr-20 md:mr-0 lg:right-full lg:origin-center" />

        <figure className="grid grid-cols-1 items-center gap-x-6 gap-y-8 lg:gap-x-10">
          <div className="relative col-span-2 lg:col-start-1 lg:row-start-2">
            <blockquote className="leading-8 text-gray-100 sm:text-xl">
              <p className="font-code">"{quote}"</p>
            </blockquote>
          </div>

          <div className="col-end-1 w-16 lg:row-span-4 lg:w-72">
            <Image
              alt={imageAlt || authorName}
              src={imageSrc}
              width={500}
              height={500}
              className="bg-primary-light rounded-xl"
            />
          </div>

          <figcaption className="text-lg lg:col-start-1 lg:row-start-3">
            <h2 className="subheader-light">{authorName}</h2>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

export default Testimonial
