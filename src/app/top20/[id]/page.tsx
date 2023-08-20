export default async function Article({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col items-center">
      <header className="text-xl p-32">
        <h1>記事の詳細ページ</h1>
      </header>
      <main>
        <div className="p-8">
          <p className="py-16">記事id: {params.id}</p>
          <div>本文はTODO・・・・</div>
        </div>
      </main>
    </div>
  )
}
