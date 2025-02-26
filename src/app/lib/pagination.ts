import { fetchGraphQL } from './wordpress'

const PAGINATION_QUERY = `
query AllPosts($first: Int, $after: String) {
  posts(first: $first, after: $after, where: { status: PUBLISH }) {
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
`

// Store cursors to avoid redundant API calls
const cursorCache: Map<number, string | null> = new Map()

export async function getCursor(
  page: number,
  postsPerPage: number,
): Promise<string | null> {
  if (page <= 1) return null

  if (cursorCache.has(page - 1)) {
    return cursorCache.get(page - 1) || null
  }

  let currentPage = 1
  let cursor: string | null = null
  while (currentPage < page) {
    const data = await fetchGraphQL(PAGINATION_QUERY, {
      first: postsPerPage,
      after: cursor,
    })

    if (!data?.posts?.pageInfo) break

    cursor = data.posts.pageInfo.endCursor
    cursorCache.set(currentPage, cursor)
    currentPage++

    if (!data.posts.pageInfo.hasNextPage) break
  }

  return cursor
}
