import Link from 'next/link'
import { getItem, getTopStories } from '../_utils/hackerNews'

export default async function Top20Page() {
  const top500Ids = await getTopStories()
  const top20Ids = top500Ids.slice(0, 20)
  const top20 = await Promise.all(top20Ids.map((id) => getItem(id)))
  const top20Summary = top20.map((item) => ({
    id: item.id,
    title: item.title,
  }))

  return (
    <div className="flex flex-col items-center">
      <header className="text-xl p-32">
        <h1>Hacker News Viewer</h1>
      </header>
      <main>
        <h2 className="text-lg py-16">Top 20 Article</h2>
        <ul>
          {top20Summary.map((item) => (
            <li key={item.id} className="py-8 px-4">
              <Link href={`/top20/${item.id}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}
