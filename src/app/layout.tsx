import { BookDiscoveryCall } from '@/components/global/cta/book-discovery-call'
import FAQ from '@/components/global/faq'
import { Footer } from '@/components/global/footer'
import GoogleAnalytics from '@/components/global/google-analytics'
import GoogleTagManagerNoScript from '@/components/global/gtm-noscript'

import DynamicNavbar from '@/components/global/navbar-dynamic'
import '@/styles/tailwind.css'
import type { Metadata } from 'next'
import { Fira_Code, Fira_Sans } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Content Creation Agency for Technical Audiences - Draft.dev',
  description:
    'We are a technical content marketing agency helping Marketing and Developer Relations teams in Tech Companies drive awareness, capture leads, and build trust.',
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    types: {
      'application/rss+xml': [
        {
          title: 'Draft.dev Blog',
          url: '/learn/feed.xml',
        },
      ],
    },
  },
}

const firaSans = Fira_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-fira-sans',
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-fira-code',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${firaSans.variable} ${firaCode.variable} !scroll-smooth`}
    >
      <head>
        <meta data-grammarly-disable="true" />
      </head>
      <body className="bg-white antialiased">
        <GoogleTagManagerNoScript />
        <GoogleAnalytics />
        <DynamicNavbar />
        <div className="flex min-h-screen flex-col">
          <main className="flex-grow">{children}</main>
          <BookDiscoveryCall />
          <FAQ />
          <Footer />
        </div>
      </body>
    </html>
  )
}

// import { BookDiscoveryCall } from '@/components/global/cta/book-discovery-call'
// import FAQ from '@/components/global/faq'
// import { Footer } from '@/components/global/footer'
// import DynamicNavbar from '@/components/global/navbar-dynamic'
// import '@/styles/tailwind.css'
// import type { Metadata } from 'next'
// import { Fira_Code, Fira_Sans } from 'next/font/google'

// export const metadata: Metadata = {
//   title: 'Content Creation Agency for Technical Audiences - Draft.dev',
//   description:
//     'We are a technical content marketing agency helping Marketing and Developer Relations teams in Tech Companies drive awareness, capture leads, and build trust.',
//   robots: {
//     index: false,
//     follow: false,
//   },
//   alternates: {
//     types: {
//       'application/rss+xml': [
//         {
//           title: 'Draft.dev Blog',
//           url: '/learn/feed.xml',
//         },
//       ],
//     },
//   },
// }

// const firaSans = Fira_Sans({
//   subsets: ['latin'],
//   weight: ['400', '500', '600', '700'],
//   display: 'swap',
//   variable: '--font-fira-sans',
// })

// const firaCode = Fira_Code({
//   subsets: ['latin'],
//   weight: ['400', '500', '600', '700'],
//   display: 'swap',
//   variable: '--font-fira-code',
// })

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html
//       lang="en"
//       className={`${firaSans.variable} ${firaCode.variable} !scroll-smooth`}
//     >
//       <head>
//         <meta data-grammarly-disable="true" />
//       </head>
//       <body className="bg-white antialiased">
//         <DynamicNavbar />
//         <div className="flex min-h-screen flex-col">
//           <main className="flex-grow">{children}</main>
//           <BookDiscoveryCall />
//           <FAQ />
//           <Footer />
//         </div>
//       </body>
//     </html>
//   )
// }
