// app/layout.tsx

import FAQ from '@/components/faq'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'

import '@/styles/tailwind.css'
import type { Metadata } from 'next'
import { Fira_Code, Fira_Sans } from 'next/font/google'

export const metadata: Metadata = {
  title: {
    template: '%s - Radiant',
    default: 'Draft.dev - A Content Creation Agency for Technical Writing',
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
        <link
          rel="alternate"
          type="application/rss+xml"
          title="The Radiant Blog"
          href="/blog/feed.xml"
        />
        <meta name="robots" content="noindex, nofollow, noarchive" />
      </head>
      <body className="text-gray-600 antialiased">
        <Navbar />
        <div className="min-h-screen">
          <main>{children}</main>
        </div>

        <FAQ />
        <Footer />
      </body>
    </html>
  )
}
