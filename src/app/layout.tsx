import '@/styles/tailwind.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s - Radiant',
    default: 'Radiant - Close every deal',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="The Radiant Blog"
          href="/blog/feed.xml"
        />
        <meta name="robots" content="noindex, nofollow, noarchive" />
      </head>
      <body className="text-gray-950 antialiased">{children}</body>
    </html>
  )
}
