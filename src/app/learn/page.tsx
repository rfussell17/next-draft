// app/learn/page.tsx
import { getWpPosts } from '@/app/lib/wordpress'
import { MedHeader } from '@/components/global/headers/med-header'
import type { Metadata } from 'next'
import LoadMorePostsClient from './load-more-posts-client'

export const metadata: Metadata = {
  description:
    'The Draft.dev Blog publishes information around Content Marketing Best Practices, Software Development topics, and more.',
  robots: {
    index: true,
    follow: true,
  },
}

// Optional custom header function if you like:
function Header() {
  return (
    <MedHeader title="Draft.dev blog" descriptionOne="" descriptionTwo="" />
  )
}

export const dynamic = 'force-dynamic'
export const revalidate = 0
const POSTS_PER_PAGE = 4

export default async function BlogPage() {
  // Server-render the first 4 posts
  const { posts, pageInfo } = await getWpPosts(POSTS_PER_PAGE, null, 1)

  return (
    <div className="overflow-hidden">
      <Header />
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
        <LoadMorePostsClient initialPosts={posts} initialPageInfo={pageInfo} />
      </div>
    </div>
  )
}
