import SocialProof from '@/components/media/social-proof'
import Testimonials from '@/components/media/testimonials/testimonials-group'
import CaseStudyHome from '@/components/page-components/home/case-study-home'
import Hero from '@/components/page-components/home/hero'

import How from '@/components/page-components/how'
import ServiceCard from '@/components/page-components/resources/service-card'
import What from '@/components/page-components/what'
import Why from '@/components/page-components/why'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description:
    'Radiant helps you sell more by revealing sensitive information about your customers.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <main>
        <Hero />
        <What
          title="A Content Creation Agency for Technical Writing"
          subtitleBold="Transform your technical marketing"
          subtitleRegular="with expert-written content that resonates with developers and generates qualified leads."
          features={[
            {
              title: 'Drive Technical Authority',
              description:
                "We create in-depth technical tutorials, guides, and documentation that showcase your product's capabilities while building credibility with developers.",
            },
            {
              title: 'Scale Your Content Program',
              description:
                'Our network of technical experts delivers consistent, high-quality content that frees your team to focus on core business priorities.',
            },
            {
              title: 'Generate Developer Interest',
              description:
                'From technical blog posts to product tutorials, we create content that attracts developers and converts them into engaged users.',
            },
          ]}
          imageSrc="/site/med-portrait/pair_programming_draft_dev.jpg"
          imageAlt="Technical content development"
        />
        <SocialProof />
        <Why
          title="The Draft.dev Difference"
          subtitle="Partner with technical content experts who understand your industry and deliver results."
          subtitleBold="You'll only pay for content if you're 100% satisfied."
          features={[
            {
              title: 'Subject Matter Experts',
              description:
                'We create expert-driven technical content for software professionals. Our global network of developers and subject matter experts delivers in-depth coverage across diverse technologies.',
              linkText: 'Our Vetted Technical Writers',
              linkHref: '/expert-writers',
            },
            {
              title: 'Consistent Quality and Style',
              description:
                "If you've worked with freelancers before, you know the quality can vary. Our editors ensure that every piece of content is technically accurate, meets our quality standards, and has a consistent style.",
              linkText: 'Our Quality-Focused Content',
              linkHref: '/content-quality',
            },
            {
              title: 'Content You Can Count On',
              description:
                "Never worry about whether you'll have a new post ready for your blog again. When you work with Draft.dev, you'll get ready-to-publish blog posts or videos every 1-2 weeks depending on your needs.",
              linkText: 'Our delivery process',
              linkHref: '/delivery-process',
            },
          ]}
        />
        <CaseStudyHome />
        {/* <Testimonial
          quote="Having draft.dev source quality technical content for the Loft Labs blog has been a competitive advantage. It's given us a steadier flow of content, which has helped our brand's visibility, and some of the posts are among the most popular ones we've published."
          name="Rich Burroughs"
          role="Developer Advocate"
          company="Loft Labs"
          imageSrc="/media/testimonials-lg/rich_burroughs_loft_labs_draft_dev.jpg"
          imageAlt="Rich Burroughs"
        /> */}

        <How
          title="Your Path to Technical Content"
          subtitleBold="Our streamlined process ensures consistent, high-quality
                  technical content delivered on time."
          subtitleRegular="Here's how we help you create content that resonates with
                developers."
          steps={[
            {
              number: '1',
              title: 'Schedule A Discovery Call',
              description:
                "In this 30-minute introductory call, we'll learn about your company and marketing strategy. If Draft.dev is a good fit for your business, we can start the onboarding process.",
            },
            {
              number: '2',
              title: 'Create Your Content Plan',
              description:
                "Based on your budget, goals, and marketing strategy, we'll create your customized content plan. This helps you see exactly what you'll be getting and ensures that we meet your expectations.",
            },
            {
              number: '3',
              title: 'Ready-to-publish Technical Content',
              description:
                "Once your content plan is approved and our team will get started, you'll receive tested and edited content that's ready to publish every 1-2 weeks. If our work ever falls short of your expectations, we'll work with you to revise it.",
            },
          ]}
          imageSrc="/site/med-portrait/commit_draft_dev.jpg"
          imageAlt="Technical content development"
        />
        <ServiceCard
          title="Lead Generation Package"
          subtitle="$10,000/mo retainer with Draft.dev includes:"
          includedFeatures={[
            'Content Strategy & Program Development',
            'Promotion Strategy',
            'Copy for Landing Page',

            'Monthly Analytics Reviews',

            '4 Blog Posts per month including: Demo Apps, Code Samples, Diagrams, Social Collateral',
            'Downloadable Lead Magnet',
          ]}
          imageURL="/site/med-landscape/terms_draft_dev.jpg"
          imageAlt="Draft.dev Lead Generation Package"
        />

        <Testimonials />
      </main>
    </div>
  )
}
