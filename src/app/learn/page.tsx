import { getCursor } from '@/app/lib/pagination'
import { getWpPosts } from '@/app/lib/wordpress'
import { MedHeader } from '@/components/global/headers/med-header'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

function ServerPagination({
  hasNextPage,
  currentPage,
  baseUrl,
}: {
  hasNextPage: boolean
  currentPage: number
  baseUrl: string
}) {
  const createPageURL = (pageNumber: number) => {
    if (pageNumber === 1) return baseUrl
    return `${baseUrl}?page=${pageNumber}`
  }

  return (
    <div className="mt-8 flex justify-between border-t border-gray-200 pt-6">
      {currentPage > 1 ? (
        <Link
          href={createPageURL(currentPage - 1)}
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Previous
        </Link>
      ) : (
        <div></div> // Empty div for spacing when no previous button
      )}

      <div className="text-center text-sm text-gray-700">
        Page {currentPage}
      </div>

      {hasNextPage && (
        <Link
          href={createPageURL(currentPage + 1)}
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Next
        </Link>
      )}
    </div>
  )
}

export const metadata: Metadata = {
  description:
    'The Draft.dev Blog publishes information around Content Marketing Best Practices, Software Development topics, and more.',
  robots: {
    index: false,
    follow: false,
  },
}

// Number of posts per page
const POSTS_PER_PAGE = 4

function Header() {
  return (
    <MedHeader title="Draft.dev blog" descriptionOne="" descriptionTwo={''} />
  )
}

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function BlogPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  // Get the current page from URL query parameters
  const pageParam = searchParams?.page
  const currentPage = pageParam ? parseInt(pageParam as string) : 1

  // Get the cursor for pagination
  const cursor = await getCursor(currentPage, POSTS_PER_PAGE)

  // Fetch posts with pagination
  const { posts, pageInfo } = await getWpPosts(
    POSTS_PER_PAGE,
    cursor,
    currentPage,
  )

  return (
    <div className="overflow-hidden">
      <Header />
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
        <div className="space-y-12">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col gap-8 sm:flex-row sm:items-start"
            >
              <div className="relative w-full sm:w-1/3">
                {post.featuredImage && (
                  <Image
                    src={post.featuredImage.node.sourceUrl}
                    alt={String(post.title)}
                    className="w-full rounded-2xl bg-gray-100 object-cover"
                    width={800}
                    height={600}
                  />
                )}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>

              <div className="w-full sm:w-2/3">
                <div className="group relative">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-600 sm:text-2xl">
                    <Link href={`/learn/${post.slug}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p
                    className="mt-4 line-clamp-3 text-base text-gray-600"
                    dangerouslySetInnerHTML={{ __html: post.excerpt }}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination controls */}
        <ServerPagination
          hasNextPage={pageInfo.hasNextPage}
          currentPage={pageInfo.currentPage}
          baseUrl="/learn"
        />
      </div>
    </div>
  )
}
