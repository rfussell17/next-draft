import { CTAFull } from '@/components/global/cta-full'
import CaseStudyMain from '@/components/media/case-studies/case-study-main'
import { LogosDark } from '@/components/media/logos-dark'
import TestimonialsGroup from '@/components/media/testimonials/testimonials-group'
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
    content: {
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
      description: 'lorem ipsom',
      clients: [
        {
          name: 'Henry Poydar',
          role: 'Founder & CEO',
          imageUrl: '/media/testimonials-sm/henry_poydar_steady_draft_dev.jpg',
          company: 'Status Hero',
        },
        {
          name: 'Rahul Patwardhan',
          role: 'Senior Director, Demand Generation',
          imageUrl:
            '/media/testimonials-sm/rahul_patwardhan_loft_labs_draft_dev.jpg',
          company: 'Loft Labs',
        },
      ],
    },
  }

  return (
    <>
      <CaseStudyMain />
      <LogosDark />

      <TestimonialsGroup />
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
