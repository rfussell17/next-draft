import type { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import type {
  AwaitedReactNode,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
} from 'react'
import { getWpPosts } from '../lib/wordpress'

export default async function BlogPage() {
  const posts = await getWpPosts()

  console.log('Posts in BlogPage:', posts) // Log here

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Blog</h1>
      <div className="grid gap-8">
        {posts.length > 0 ? (
          posts.map(
            (post: {
              id: Key | null | undefined
              featuredImage: { node: { sourceUrl: string | StaticImport } }
              title:
                | string
                | number
                | bigint
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | Iterable<ReactNode>
                | ReactPortal
                | Promise<AwaitedReactNode>
                | null
                | undefined
              excerpt: any
              slug: any
            }) => (
              <article key={post.id} className="border-b pb-8">
                {post.featuredImage && (
                  <div className="relative mb-4 aspect-video">
                    <Image
                      src={post.featuredImage.node.sourceUrl}
                      alt={String(post.title) || 'Blog post image'}
                      fill
                      className="rounded-lg object-cover"
                      sizes="(max-width: 768px) 100vw, 768px"
                    />
                  </div>
                )}
                <h2 className="mb-2 text-2xl font-bold">{post.title}</h2>
                <div
                  className="text-gray-600 mb-4"
                  dangerouslySetInnerHTML={{ __html: post.excerpt }}
                />
                <a
                  href={`/blog/${post.slug}`}
                  className="text-blue-600 hover:text-blue-800"
                >
                  Read more →
                </a>
              </article>
            ),
          )
        ) : (
          <p>No posts found.</p>
        )}
      </div>
    </div>
  )
}
