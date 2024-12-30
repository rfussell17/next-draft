import type { Metadata } from 'next'
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
import { Container } from '../../components/container'
import { Heading, Lead } from '../../components/text'
import { getWpPosts } from '../lib/wordpress'

export const metadata: Metadata = {
  description:
    'Radiant helps you sell more by revealing sensitive information about your customers.',
  robots: {
    index: false,
    follow: false,
  },
}

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1" className="font-bold">
        DRAFT.DEV Blog
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        Learn to build a better technical blog.
      </Lead>
    </Container>
  )
}

export default async function BlogPage() {
  const posts = await getWpPosts()
  return (
    <div className="overflow-hidden">
      <Header />
      <div className="mx-auto mt-16 grid grid-cols-1 gap-x-8 gap-y-20 lg:max-w-7xl lg:grid-cols-3">
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
                    className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                    width={800}
                    height={600}
                  />
                )}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
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
                  <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                    <Link href={`/blog/${post.slug}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p
                    className="mt-5 line-clamp-3 text-sm/6 text-gray-600"
                    dangerouslySetInnerHTML={{ __html: post.excerpt }}
                  />
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <div className="text-sm/6">
                    <p className="font-semibold text-gray-900">Author Name</p>
                    <p className="text-gray-600">Author Role</p>
                  </div>
                </div>
              </div>
            </article>
          ),
        )}
      </div>
    </div>
  )
}
