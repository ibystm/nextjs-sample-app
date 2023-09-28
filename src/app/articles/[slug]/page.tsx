import { notFound } from 'next/navigation'
import { Article, Comment } from '../../types'
import { Suspense } from 'react'

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
  const article = await getArticle(params.slug)

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
      <h2>Comments</h2>
      <Suspense fallback={<div>Loading comments...</div>}>
        <Comments commentPromise={getComments(params.slug)} />
      </Suspense>
    </div>
  )
}

async function Comments({
  commentPromise,
}: {
  commentPromise: Promise<Comment[]>
}) {
  const comments = await commentPromise
  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>{comment.body}</li>
      ))}
    </ul>
  )
}
