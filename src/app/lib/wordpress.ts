import { cache } from 'react'

interface Post {
  id: string
  slug: string
  title: string
  content: string
  date: string
  featuredImage?: {
    node: {
      sourceUrl: string
    }
  }
  excerpt: string
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      WORDPRESS_API_URL: string
      WORDPRESS_API_USERNAME: string
      WORDPRESS_API_PASSWORD: string
      WORDPRESS_PRIVACY_PASSWORD: string
    }
  }
}

// GraphQL queries
const ALL_POSTS_QUERY = `
query AllPosts($first: Int) {
  posts(first: $first, where: { status: PUBLISH }) {
    nodes {
      id
      slug
      title
      excerpt
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
      author {
        node {
          name
          avatar {
            url
          }
        }
      }
    }
  }
}
`

const POST_BY_SLUG_QUERY = `
query PostBySlug($id: ID!) {
  post(id: $id, idType: SLUG) {
    id
    slug
    title
    content
    date
    featuredImage {
      node {
        sourceUrl
      }
    }
  }
}
`

// Create auth header with privacy mode
const getAuthHeader = () => {
  const auth = Buffer.from(
    `${process.env.WORDPRESS_API_USERNAME}:${process.env.WORDPRESS_API_PASSWORD}`,
  ).toString('base64')
  return `Basic ${auth}`
}

// Fetch from GraphQL API
async function fetchGraphQL(query: string, variables = {}) {
  const baseUrl = process.env.WORDPRESS_API_URL
  if (!baseUrl) {
    throw new Error('WORDPRESS_API_URL is not defined')
  }
  const privacyUrl = baseUrl.includes('?')
    ? `${baseUrl}&password=${process.env.WORDPRESS_PRIVACY_PASSWORD}`
    : `${baseUrl}?password=${process.env.WORDPRESS_PRIVACY_PASSWORD}`

  console.log('GraphQL API URL:', privacyUrl) // Debug log

  const response = await fetch(privacyUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: getAuthHeader(),
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 3600 },
  })

  const text = await response.text()
  console.log('Raw Response:', text) // Debug log

  try {
    const json = JSON.parse(text)
    if (json.errors) {
      console.error('GraphQL Errors:', JSON.stringify(json.errors, null, 2)) // Debug log
      throw new Error(json.errors[0].message)
    }
    return json.data
  } catch (error) {
    console.error('Response Parsing Error:', text)
    throw new Error('Failed to parse WordPress response')
  }
}

// Cache functions
export const getWpPosts = cache(async (first = 10) => {
  const data = await fetchGraphQL(ALL_POSTS_QUERY, { first })

  if (!data?.posts?.nodes) {
    console.error('Invalid response for posts:', data) // Debug log
    return []
  }

  return data.posts.nodes.map(
    (post: {
      id: any
      slug: any
      title: any
      excerpt: any
      date: any
      featuredImage: any
      author: { node: any }
    }) => ({
      id: post.id,
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      date: post.date,
      featuredImage: post.featuredImage,
      author: post.author?.node,
    }),
  )
})

export const getWpPost = cache(async (slug: string) => {
  if (!slug) {
    console.error('Slug is undefined in getWpPost') // Debug log
    return null
  }

  try {
    const data = await fetchGraphQL(POST_BY_SLUG_QUERY, { id: slug })

    if (!data?.post) {
      console.error('Invalid response for post:', data) // Debug log
      return null
    }

    return data.post
  } catch (error) {
    console.error('Error fetching post:', error)
    return null
  }
})

export type { Post }
