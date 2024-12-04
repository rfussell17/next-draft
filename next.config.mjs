/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'draft-test-local.local',
      },

      {
        hostname: 'optimistic-insurance.localsite.io',
      },
      { hostname: 'optimistic-insurance.localsite.io/blog' },
      { hostname: 'optimistic-insurance.localsite.io/graphql' },
      { hostname: 'draft-test-local.local/graphql' },
      {
        hostname: 'nextdraft.netlify.app',
      },
      {
        hostname: 'images.unsplash.com',
      },
      {
        hostname: 'app.netlify.com',
      },
      { hostname: '0.gravatar.com' },
      { hostname: '1.gravatar.com' },
      { hostname: '2.gravatar.com' },
      { hostname: 'secure.gravatar.com' },
      { hostname: 'nextjs-wordpress.local' },
      { hostname: 'images.unsplash.com' },
      { hostname: 'plus.unsplash.com' },
      { hostname: 'amazing-breakfast.flywheelsites.com' },
      { hostname: 'res.cloudinary.com' },
      { hostname: 'img.youtube.com' },
      { hostname: 'lh7-us.googleusercontent.com' },
    ],
  },
}

export default nextConfig
