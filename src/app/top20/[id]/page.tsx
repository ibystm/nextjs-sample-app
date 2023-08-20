export default async function Article({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>記事の詳細ページ</h1>
      <p>記事のidは: {params.id}</p>
    </div>
  )
}
