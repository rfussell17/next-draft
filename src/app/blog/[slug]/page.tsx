import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getWpPost, getWpPosts } from '../../lib/wordpress'

export default async function PostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = await getWpPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="mx-auto max-w-4xl px-4 py-8">
      {post.featuredImage && (
        <div className="relative mb-8 aspect-video">
          <Image
            src={post.featuredImage.node.sourceUrl}
            alt={post.title}
            fill
            className="rounded-lg object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>
      )}
      <h1 className="mb-4 text-4xl font-bold">{post.title}</h1>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  )
}

export async function generateStaticParams() {
  const posts = await getWpPosts(100)

  return posts.map((post: { slug: any }) => ({
    slug: post.slug,
  }))
}
