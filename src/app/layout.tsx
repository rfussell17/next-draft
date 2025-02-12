import FAQ from '@/components/global/faq'
import { Footer } from '@/components/global/footer'
import DynamicNavbar from '@/components/global/navbar-dynamic'
import '@/styles/tailwind.css'
import type { Metadata } from 'next'
import { Fira_Code, Fira_Sans } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Your Site Title',
  description:
    'Radiant helps you sell more by revealing sensitive information about your customers.',
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    types: {
      'application/rss+xml': [
        {
          title: 'The Radiant Blog',
          url: '/blog/feed.xml',
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
    <html lang="en" className={`${firaSans.variable} ${firaCode.variable}`}>
      <head>
        <meta data-grammarly-disable="true" />
      </head>
      <body className="bg-white antialiased">
        <DynamicNavbar />
        <div className="flex min-h-screen flex-col">
          <main className="flex-grow">{children}</main>
          <FAQ />
          <Footer />
        </div>
      </body>
    </html>
  )
}
