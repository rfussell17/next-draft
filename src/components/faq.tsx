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
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <h2 className="bg-gradient-primary text-transparent bg-clip-text pb-2 text-5xl font-semibold leading-[1.2] tracking-tight sm:text-balance sm:text-6xl">
          Frequently asked questions
        </h2>

        <p className="text-gray-600 mt-6 max-w-2xl text-base/7">
          Have a different question and can’t find the answer you’re looking
          for? Reach out to our support team by{' '}
          <a
            href="#"
            className="text-indigo-600 hover:text-indigo-500 font-semibold"
          >
            sending us an email
          </a>{' '}
          and we’ll get back to you as soon as we can.
        </p>
        <div className="mt-20">
          <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:gap-x-10">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className="text-gray-900 text-base/7 font-semibold">
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
