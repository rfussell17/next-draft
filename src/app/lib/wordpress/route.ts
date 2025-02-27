// app/api/wordpress/route.ts
import { getWpPosts } from '@/app/lib/wordpress'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { after } = await req.json()
    const { posts, pageInfo } = await getWpPosts(4, after)
    return NextResponse.json({ posts, pageInfo })
  } catch (error) {
    console.error('Error in /api/wordpress route:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
