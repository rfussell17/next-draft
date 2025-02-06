import { CTAFull } from '@/components/cta-full'
import DarkLandingPage from '@/components/landing-page-dark'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description:
    'Radiant helps you sell more by revealing sensitive information about your customers.',
  robots: {
    index: false,
    follow: false,
  },
}

const ctaProps = [
  'Competitive salaries',
  'Flexible work hours',
  '30 days of paid vacation',
  'Annual team retreats',
  'Benefits for you and your family',
  'A great work environment',
]

export default function CaseStudy() {
  const landingPageProps = {
    hero: {
      title:
        'How Earthly Increased Its Monthly Blog Visitors by 346% and Ramped Up Its Content Production with Draft.dev',
      description: 'and Ramped Up Its Content Production with Draft.dev',
    },
    content: {
      paragraphs: [
        'Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.',
        'Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel.',
        'Erat pellentesque dictumst ligula porttitor risus eget et eget. Ultricies tellus felis id dignissim eget. Est augue maecenas risus nulla ultrices congue nunc tortor.',
        'Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas.',
      ],
      stats: [
        { label: 'Blog visitors per workday', value: '1,500' },
        { label: 'Increase in monthly readers', value: '346%' },
        { label: 'Blog conversion rate', value: '6%' },
      ],
    },
    featuredImage: {
      src: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5',
      alt: 'Team collaboration',
    },
    highlights: {
      title: 'Highlights',
      description:
        'The principles that guide everything we do and every decision we make.',
      items: [
        {
          name: 'Challenges',
          description: [
            'Creating high-quality and valuable technical content',
            'Ramping up content production for technical blog',
            'Lacking SEO knowledge',
          ],
        },
        {
          name: 'Solution',
          description: [
            'Consistent content providing excellent results',
            'SEO and keyword research',
            'Subject matter expert writers',
            'Professional and ready-to-publish content',
            'Supportive and helpful customer support',
          ],
        },
        {
          name: 'Results',
          description: [
            '346% increase in monthly blog visitors',
            '1500 visitors per workday',
            '6% conversion rate on blog content',
            'Ranking in the top 3 for some keywords',
          ],
        },
      ],
    },
    caseStudy: {
      title: 'More Case Studies',
      description:
        "We're a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.",
      clients: [
        {
          name: 'Leslie Alexander',
          role: 'Co-Founder / CEO',
          imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
          company: 'Big Company',
        },
        {
          name: 'Michael Foster',
          role: 'Co-Founder / CTO',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5',
          company: 'Blog Company',
        },
        {
          name: 'Emma Wilson',
          role: 'Head of Design',
          imageUrl:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
          company: 'Tech Company',
        },
        {
          name: 'David Chen',
          role: 'Head of Product',
          imageUrl:
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef',
          company: 'Big Company',
        },
      ],
    },
  }

  return (
    <>
      <DarkLandingPage {...landingPageProps} />
      {/* <Testimonial
        quote="Draft.dev has been an amazing partner, helping us scale our content program by creating thoughtful and technically-sound developer content and training materials. We’re constantly iterating to build the best educational materials for developer security and Draft.dev has been instrumental in helping us realize these ambitions."
        name="Randall Degges"
        role="Head of Developer & Security Relations"
        company="snyk"
        imageSrc="/testimonials/randall_degges_snyk_draft_dev.png"
        imageAlt="Randall Degges"
      />
      <TestimonialsGroup /> */}
      <CTAFull
        title="Book Discovery Call"
        description="Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam."
        imageSrc="https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        imageAlt="Team environment"
        list={ctaProps}
        linkHref="#"
        linkText="See our job postings"
      />
    </>
  )
}
