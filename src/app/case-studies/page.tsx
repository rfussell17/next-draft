import DarkLandingPage from '@/components/landing-page-dark'
import TestimonialsGroup from '@/components/testimonials-group'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description:
    'Radiant helps you sell more by revealing sensitive information about your customers.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function CaseStudy() {
  const landingPageProps = {
    hero: {
      title: 'How Earthly Increased Its Monthly Blog Visitors by 346%',
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
        { label: 'Increase in monthly blog visitors', value: '346%' },
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
            'Creating valuable technical content',
            'Ramping up content production',
            'Lacking SEO knowledge',
          ],
        },
        {
          name: 'Solution',
          description: [
            'Consistent content creation process providing excellent results',
            'SEO and keyword research',
            'Subject matter expert writers',
            'Professionally edited and ready-to-publish content',
            'Supportive and helpful customer support team',
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
      <TestimonialsGroup />
    </>
  )
}
