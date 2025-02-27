'use client'
// components/global/google-analytics.tsx

import { usePathname, useSearchParams } from 'next/navigation'
import Script from 'next/script'
import { Suspense, useEffect } from 'react'

// This component uses searchParams and needs to be wrapped in Suspense
function AnalyticsPathTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-N4PJMERESN', {
        page_path: pathname + searchParams.toString(),
      })
    }
  }, [pathname, searchParams])

  return null
}

export default function GoogleAnalytics() {
  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=GTM-5W5755G3"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-N4PJMERESN');
          `,
        }}
      />
      <Suspense fallback={null}>
        <AnalyticsPathTracker />
      </Suspense>
    </>
  )
}
