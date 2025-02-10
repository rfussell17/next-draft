import FAQ from '@/components/global/faq'
import { Footer } from '@/components/global/footer'
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
    noarchive: true,
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
    <html
      lang="en"
      data-gramm_editor="false"
      data-enable-grammarly="false"
      className={`${firaSans.variable} ${firaCode.variable}`}
    >
      <body className="bg-white text-gray-600 antialiased">
        {/* <Navbar /> */}
        <div className="min-h-screen">
          <main>{children}</main>
        </div>
        <FAQ />
        <Footer />
      </body>
    </html>
  )
}
