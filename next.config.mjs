/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'draft-test-local.local',
        pathname: '/wp-content/uploads/**',
      },

      {
        protocol: 'https',
        hostname: 'optimistic-insurance.localsite.io',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'nextdraft.netlify.app/',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'app.netlify.com',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
}

export default nextConfig
