import { sanityFetch } from '@/sanity/client'

async function SanityDebug() {
  try {
    // Get total count
    const totalCount = await sanityFetch({
      query: `count(*[
        _type == "post"
        && defined(slug.current)
        && (isFeatured != true || defined($category))
      ])`,
      revalidate: false,
    })

    // Get first page of posts with all fields
    const firstPagePosts = await sanityFetch({
      query: `*[
        _type == "post"
        && defined(slug.current)
        && (isFeatured != true || defined($category))
      ] | order(publishedAt desc) [0...5] {
        _id,
        title,
        "slug": slug.current,
        publishedAt,
        excerpt,
        isFeatured,
        "author": coalesce(author->{
          "name": name,
          "image": image
        }, null),
        "categories": categories[]->
      }`,
      revalidate: false,
    })

    return (
      <div className="space-y-4 rounded-lg bg-green-50 p-4">
        <div>
          <h3 className="font-bold">Total Posts: {totalCount}</h3>
        </div>

        <div>
          <h3 className="mb-2 font-bold">First Page Posts:</h3>
          <pre className="mt-2 max-h-96 overflow-auto rounded bg-white p-2 text-sm">
            {JSON.stringify(firstPagePosts, null, 2)}
          </pre>
        </div>
      </div>
    )
  } catch (error) {
    return (
      <div className="rounded-lg bg-red-50 p-4">
        <h3 className="font-bold text-red-700">Error fetching posts:</h3>
        <p className="text-red-600">{(error as Error).message}</p>
      </div>
    )
  }
}

export default SanityDebug
