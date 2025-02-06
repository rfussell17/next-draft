import parse, { type DOMNode } from 'html-react-parser'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import sanitizeHtml from 'sanitize-html'
import { getWpPost } from '../../lib/wordpress'

export const metadata: Metadata = {
  description:
    'Radiant helps you sell more by revealing sensitive information about your customers.',
  robots: {
    index: false,
    follow: false,
  },
}

interface PageProps {
  params: { slug: string } | Promise<{ slug: string }>
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function PostPage({ params, searchParams }: PageProps) {
  const resolvedParams = await (params as Promise<{ slug: string }>)
  const post = await getWpPost(resolvedParams.slug)

  if (!post) {
    notFound()
  }

  const transform = (domNode: DOMNode) => {
    if (domNode.type === 'tag' && domNode.name === 'img' && domNode.attribs) {
      const { src, alt } = domNode.attribs
      return (
        <Image
          src={src || '/default-image.jpg'}
          alt={alt || 'Blog image'}
          width={768}
          height={450}
          className="my-4 rounded-lg object-cover"
        />
      )
    }
    return undefined
  }

  const sanitizedContent = sanitizeHtml(post.content, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'iframe']),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      iframe: ['src', 'allow', 'allowfullscreen', 'frameborder', 'scrolling'],
      img: ['src', 'alt', 'title', 'width', 'height'],
    },
  })

  return (
    <div className="bg-white px-6 py-16 lg:px-8">
      <article className="prose prose-lg mx-auto max-w-none">
        <h1 className="mb-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {post.title}
        </h1>

        <div className="mb-8 flex items-center gap-x-4 text-sm text-gray-500">
          <time
            dateTime={post.date ? new Date(post.date).toISOString() : undefined}
            className="text-gray-500"
          >
            {post.date
              ? new Date(post.date).toLocaleDateString(undefined, {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })
              : 'Unknown date'}
          </time>

          {post.categories?.[0] && (
            <>
              <span>•</span>
              <Link
                href={`/categories/${post.categories[0].name.toLowerCase()}`}
                className="text-blue-600 hover:underline"
              >
                {post.categories[0].name}
              </Link>
            </>
          )}

          <span>•</span>
          <div className="flex items-center">
            <span className="font-medium text-gray-900">Author Name</span>
            <span className="ml-2 text-gray-500">Author Role</span>
          </div>
        </div>

        {parse(sanitizedContent, { replace: transform })}
      </article>
    </div>
  )
}
