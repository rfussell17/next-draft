/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: ['cdn.sanity.io'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/images/**',
      },
    ],
    domains: ['draft-test-local.local'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'draft-test-local.local',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
}

export default nextConfig
