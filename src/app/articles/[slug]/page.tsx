import ArticleContent from './ArticleContent'
import Comments from './Comments'
import { Heading, Box, VStack } from '../../common/chakraComponents'
import LoadingComments from './LoadingComments'
import { notFound } from 'next/navigation'
import { Article } from '@/app/types'
import { Suspense } from 'react'
import type { Metadata, ResolvingMetadata } from 'next'
import { CommentInput } from './CommentInput'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
  parent?: ResolvingMetadata
}): Promise<Metadata> {
  const article = await getArticle(params.slug)
  return {
    title: article?.title,
    description: article?.content,
  }
}

const getArticle = async (slug: string) => {
  const res = await fetch(`http://localhost:3000/api/articles/${slug}`, {
    next: { revalidate: 60 },
  })

  if (res.status === 404) {
    // notFound 関数を呼び出すと not-fount.tsx を表示する
    notFound()
  }

  if (!res.ok) {
    throw new Error('Failed to fetch article')
  }

  const data = await res.json()
  return data as Article
}

const getComments = async (slug: string) => {
  const res = await fetch(
    `http://localhost:3000/api/articles/${slug}/comments`,
    {
      cache: 'no-store',
    }
  )

  if (!res.ok) {
    throw new Error('Failed to fetch comments')
  }

  const data = await res.json()
  return data as Comment[]
}

export default async function ArticleDetail({
  params,
}: {
  params: { slug: string }
}) {
  const articlePromise = getArticle(params.slug)
  const commentPromise = getComments(params.slug)

  const article = await articlePromise

  return (
    <div>
      <ArticleContent article={article} />
      <Heading as="h2" mt={8} mb={4}>
        Comments
      </Heading>
      <VStack spacing={4} paddingInline={4} align="normal">
        <CommentInput />
        <Suspense fallback={<LoadingComments />}>
          {/* @ts-expect-error 現状は jsx が Promise を返すと TypeScript が型エラーを報告するが、将来的には解決される */}
          <Comments commentPromise={commentPromise} />
        </Suspense>
      </VStack>
    </div>
  )
}
