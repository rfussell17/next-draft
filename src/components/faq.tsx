import Link from 'next/link'
import { Heading, Subheading } from './text'

type FAQ = {
  id: number
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: 'How quickly can we get started?',
    answer:
      'Typically, onboarding takes 6-9 weeks between when we sign a statement of work and when your first article is completed. After that, new content will be delivered every week based on your plan. You can see our whole process on our blog.',
  },
  {
    id: 2,
    question: 'What if we want more content?',
    answer:
      'Not a problem. Our standard packages are just a starting point, but we have clients doing anywhere from 12-48 blog posts every quarter.',
  },
  {
    id: 3,
    question: 'What if we just want to try Draft.dev out?',
    answer:
      "We don't offer trials, but we have an extensive catalog of samples we can share. A few are available here, but we can share many more upon request.",
  },
  {
    id: 4,
    question: "What if we don't like an article you send us?",
    answer:
      "We stand by our satisfaction guarantee. If you're ever unsatisfied, we'll work with you to make it right. If we cannot fix the content within two rounds of revisions, we'll offer a complete rewrite or refund for the piece.",
  },
  {
    id: 5,
    question: 'How do payments work?',
    answer:
      'You can opt to either pay a single invoice at the start of each quarter or create a monthly payment plan. Other payment options are available for an additional fee.',
  },
  {
    id: 6,
    question: 'Do you accept bulk orders?',
    answer:
      'We do. The price per article depends on the volume and delivery speed required. Book a call with us to discuss your content needs.',
  },
  // Add more questions here...
]

export default function FAQ(): JSX.Element {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Heading as="h2">Frequently asked questions</Heading>

        <Subheading as="h3" textColor="dark" className="text-lg">
          Have a different question and can’t find the answer you’re looking
          for? Reach out to our support team by{' '}
          <Link
            href="#"
            className="font-semibold text-primary hover:text-secondary"
          >
            sending us an email
          </Link>{' '}
          and we’ll get back to you as soon as we can.
        </Subheading>
        <div className="mt-12">
          <dl className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 sm:space-y-0 lg:gap-x-10">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className="text-base/7 font-semibold text-primary">
                  {faq.question}
                </dt>
                <dd className="text-gray-600 mt-2 text-base/7">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}