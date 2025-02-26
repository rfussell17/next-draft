/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'draft-test-local.local',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'optimistic-insurance.localsite.io',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'heartfelt-parfait-e90b6d.netlify.app',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'nextdraft.netlify.app',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'app.netlify.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.gravatar.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'lh7-us.googleusercontent.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'tailwindui.com',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'draft-migrate-test.local',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'i.imgur.com',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
