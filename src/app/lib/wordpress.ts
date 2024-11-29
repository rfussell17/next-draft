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

// Query for multiple posts
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
      }
    }
  }
`

// Query for single post
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

// Helper function to create auth header with privacy mode
const getAuthHeader = () => {
  const auth = Buffer.from(
    `${process.env.WORDPRESS_API_USERNAME}:${process.env.WORDPRESS_API_PASSWORD}`,
  ).toString('base64')
  return `Basic ${auth}`
}

async function fetchGraphQL(query: string, variables = {}) {
  // Add privacy password to the URL
  const baseUrl = process.env.WORDPRESS_API_URL
  if (!baseUrl) {
    throw new Error('WORDPRESS_API_URL is not defined')
  }
  const privacyUrl = baseUrl.includes('?')
    ? `${baseUrl}&password=${process.env.WORDPRESS_PRIVACY_PASSWORD}`
    : `${baseUrl}?password=${process.env.WORDPRESS_PRIVACY_PASSWORD}`

  const response = await fetch(privacyUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: getAuthHeader(),
    },
    body: JSON.stringify({
      query,
      variables,
    }),
    next: {
      revalidate: 3600,
    },
  })

  // Debug logging
  console.log('Response status:', response.status)
  const text = await response.text()

  try {
    const json = JSON.parse(text)
    if (json.errors) {
      console.error('GraphQL Errors:', json.errors)
      throw new Error(json.errors[0].message)
    }
    return json.data
  } catch (e) {
    console.error('Response text:', text)
    throw new Error('Failed to parse WordPress response')
  }
}

// Cache the fetch function for all posts
export const getWpPosts = cache(async (first = 10) => {
  try {
    const data = await fetchGraphQL(ALL_POSTS_QUERY, { first })
    return data.posts.nodes
  } catch (error) {
    console.error('Error fetching posts:', error)
    return [] // Return empty array instead of throwing
  }
})

// Cache the fetch function for single post
export const getWpPost = cache(async (slug: string) => {
  try {
    const data = await fetchGraphQL(POST_BY_SLUG_QUERY, { id: slug })
    return data.post
  } catch (error) {
    console.error('Error fetching post:', error)
    return null // Return null instead of throwing
  }
})

export type { Post }
