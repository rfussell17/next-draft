// 'use client'
// // components/CookieConsent.jsx

// import { useEffect, useState } from 'react'

// export default function CookieConsent() {
//   const [consent, setConsent] = useState(true)

//   useEffect(() => {
//     const userConsent = localStorage.getItem('cookieConsent')
//     setConsent(userConsent === 'accepted')
//   }, [])

//   const acceptCookies = () => {
//     localStorage.setItem('cookieConsent', 'accepted')
//     setConsent(true)

//     window.location.reload()
//   }

//   if (consent) {
//     return null
//   }

//   return (
//     <div className="fixed bottom-0 left-0 right-0 z-50 flex flex-col items-center justify-between gap-4 bg-gray-100 p-4 shadow-md md:flex-row">
//       <p className="text-sm">
//         This website uses cookies to enhance the user experience and analyze
//         site traffic.
//       </p>
//       <div className="flex gap-2">
//         <button
//           onClick={acceptCookies}
//           className="rounded bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-600"
//         >
//           Accept
//         </button>
//       </div>
//     </div>
//   )
// }
