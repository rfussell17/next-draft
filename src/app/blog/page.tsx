import type { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import Link from 'next/link'
import type {
  AwaitedReactNode,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
} from 'react'
import { getWpPosts } from '../lib/wordpress'

export default async function BlogPage() {
  const posts = await getWpPosts()

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-gray-900 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            From the blog
          </h2>
          <p className="text-gray-600 mt-2 text-lg/8">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map(
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
                | Promise<AwaitedReactNode>
                | null
                | undefined
              date: string | number | Date | undefined
              slug: any
              excerpt: any
              categories: { id: string; name: string }[] // Added categories type
            }) => (
              <article
                key={post.id}
                className="flex flex-col items-start justify-between"
              >
                <div className="relative w-full">
                  {post.featuredImage && (
                    <Image
                      src={post.featuredImage.node.sourceUrl}
                      alt={post.title as string}
                      className="bg-gray-100 aspect-video w-full rounded-2xl object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                      width={800}
                      height={600}
                    />
                  )}
                  <div className="ring-gray-900/10 absolute inset-0 rounded-2xl ring-1 ring-inset" />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <span className="text-gray-500">
                      Published on{' '}
                      <time
                        dateTime={
                          post.date
                            ? new Date(post.date).toISOString()
                            : undefined
                        }
                      >
                        {post.date
                          ? new Date(post.date).toLocaleDateString(undefined, {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric',
                            })
                          : 'Unknown date'}
                      </time>{' '}
                      in{' '}
                      {post.categories?.[0] && (
                        <Link
                          href={`/categories/${post.categories[0].name.toLowerCase()}`}
                          className="text-blue-600 hover:underline"
                        >
                          {post.categories[0].name}
                        </Link>
                      )}
                    </span>
                  </div>
                  <div className="group relative">
                    <h3 className="text-gray-900 group-hover:text-gray-600 mt-3 text-lg/6 font-semibold">
                      <Link href={`/blog/${post.slug}`}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </Link>
                    </h3>
                    <p
                      className="text-gray-600 mt-5 line-clamp-3 text-sm/6"
                      dangerouslySetInnerHTML={{ __html: post.excerpt }}
                    />
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <div className="text-sm/6">
                      <p className="text-gray-900 font-semibold">Author Name</p>
                      <p className="text-gray-600">Author Role</p>
                    </div>
                  </div>
                </div>
              </article>
            ),
          )}
        </div>
      </div>
    </div>
  )
}
