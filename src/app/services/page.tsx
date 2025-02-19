import { Container } from '@/components/container'
import Testimonial from '@/components/testimonial'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Companies all over the world have closed millions of deals with Radiant. Sign up today and start selling smarter.',
  robots: {
    index: false,
    follow: false,
  },
}

function Header() {
  return (
    <Container className="mt-16">
      <h1>Content Marketing Services</h1>
      <h3 className="mt-6 max-w-3xl">
        Companies all over the world have closed millions of deals with Radiant.
        Sign up today and start selling smarter.
      </h3>
    </Container>
  )
}

function FeatureItem({
  description,
  disabled = false,
}: {
  description: string
  disabled?: boolean
}) {
  return (
    <li
      data-disabled={disabled ? true : undefined}
      className="flex items-start gap-4 text-sm/6 text-gray-950/75 data-[disabled]:text-gray-950/25"
    >
      <span className="inline-flex h-6 items-center">
        <PlusIcon className="size-[0.9375rem] shrink-0 fill-gray-950/25" />
      </span>
      {disabled && <span className="sr-only">Not included:</span>}
      {description}
    </li>
  )
}

function PlusIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 15 15" aria-hidden="true" {...props}>
      <path clipRule="evenodd" d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z" />
    </svg>
  )
}

export default function Services() {
  const cardListPropsOne = [
    'Private forum access',
    'SEO Keyword and topic ideation',
    'Diagrams, and code samples',
    'Technical reviews',
    'Professional editing',
    'Social media collateral',
  ]

  const cardListPropsTwo = [
    'Technical ebooks',
    'Executive ghostwriting',
    'Video tutorials',
  ]

  return (
    <main className="overflow-hidden">
      <Header />

      <Testimonial
        quote="Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur."
        name="Tina Yards"
        role="VP of Sales"
        company="Protocol"
        imageSrc="/testimonials/conor-neville.jpg"
        imageAlt="Tina Yards"
      />
    </main>
  )
}
