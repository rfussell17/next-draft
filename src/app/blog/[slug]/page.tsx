import {
  CheckCircleIcon,
  InformationCircleIcon,
} from '@heroicons/react/20/solid'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getWpPost } from '../../lib/wordpress'

export default async function PostPage({
  params,
}: {
  params: { slug: string }
}) {
  console.log('Slug received in PostPage:', params.slug) // Debug the slug

  const post = await getWpPost(params.slug)

  if (!post) {
    notFound() // Handle 404 if no post is found
  }

  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="text-gray-700 mx-auto max-w-3xl text-base/7">
        <p className="text-indigo-600 text-base/7 font-semibold">Article</p>
        <h1 className="text-gray-900 mt-2 text-pretty text-4xl font-semibold tracking-tight sm:text-5xl">
          {post.title}
        </h1>
        {post.featuredImage && (
          <figure className="mt-10">
            <Image
              src={post.featuredImage.node.sourceUrl}
              alt={post.title}
              className="bg-gray-50 aspect-video rounded-xl object-cover"
              width={800}
              height={500}
            />
            <figcaption className="text-gray-500 mt-4 flex gap-x-2 text-sm/6">
              <InformationCircleIcon
                aria-hidden="true"
                className="text-gray-300 mt-0.5 size-5 flex-none"
              />
              Featured image of the post
            </figcaption>
          </figure>
        )}
        <div
          className="mt-6 text-xl/8"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <div className="mt-10 max-w-2xl">
          <h2 className="text-gray-900 mt-16 text-pretty text-3xl font-semibold tracking-tight">
            More Highlights
          </h2>
          <ul role="list" className="text-gray-600 mt-8 max-w-xl space-y-8">
            <li className="flex gap-x-3">
              <CheckCircleIcon
                aria-hidden="true"
                className="text-indigo-600 mt-1 size-5 flex-none"
              />
              <span>
                <strong className="text-gray-900 font-semibold">
                  Data types.
                </strong>{' '}
                Explore key data concepts related to the post.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                aria-hidden="true"
                className="text-indigo-600 mt-1 size-5 flex-none"
              />
              <span>
                <strong className="text-gray-900 font-semibold">Loops.</strong>{' '}
                Discover iterative patterns and methodologies in the post.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                aria-hidden="true"
                className="text-indigo-600 mt-1 size-5 flex-none"
              />
              <span>
                <strong className="text-gray-900 font-semibold">Events.</strong>{' '}
                Learn how specific triggers relate to the content.
              </span>
            </li>
          </ul>
          <p className="mt-8">
            Continue exploring related topics and insights highlighted in this
            article.
          </p>
        </div>
        <figure className="mt-16">
          <img
            alt="Example content"
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
            className="bg-gray-50 aspect-video rounded-xl object-cover"
          />
          <figcaption className="text-gray-500 mt-4 flex gap-x-2 text-sm/6">
            <InformationCircleIcon
              aria-hidden="true"
              className="text-gray-300 mt-0.5 size-5 flex-none"
            />
            Example additional illustration.
          </figcaption>
        </figure>
        <p className="mt-10">
          Thank you for reading! Visit the blog for more articles on related
          topics.
        </p>
      </div>
    </div>
  )
}

// import Image from 'next/image'
// import { notFound } from 'next/navigation'
// import { getWpPost, getWpPosts } from '../../lib/wordpress'

// export default async function PostPage({
//   params,
// }: {
//   params: { slug: string }
// }) {
//   console.log('Slug received in PostPage:', params.slug) // Debug the slug

//   const post = await getWpPost(params.slug)

//   if (!post) {
//     notFound() // Handle 404 if no post is found
//   }

//   return (
//     <article className="mx-auto max-w-4xl px-4 py-8">
//       {post.featuredImage && (
//         <div className="relative mb-8 aspect-video">
//           <Image
//             src={post.featuredImage.node.sourceUrl}
//             alt={post.title}
//             fill
//             className="rounded-lg object-cover"
//             priority
//             sizes="(max-width: 768px) 100vw, 768px"
//           />
//         </div>
//       )}
//       <h1 className="mb-4 text-4xl font-bold">{post.title}</h1>
//       <div
//         className="prose max-w-none"
//         dangerouslySetInnerHTML={{ __html: post.content }}
//       />
//     </article>
//   )
// }

// export async function generateStaticParams() {
//   const posts = await getWpPosts(100)

//   console.log(
//     'Static paths generated:',
//     posts.map((post: { slug: any }) => post.slug),
//   ) // Debug generated slugs

//   return posts.map((post: { slug: any }) => ({
//     slug: post.slug,
//   }))
// }
